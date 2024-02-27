"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Email sent successfully");
        toast.dismiss();
        toast.success("We'll reach you soon!");
      } else {
        console.error("Failed to send email");
        toast.dismiss();
        toast.error("Unable to submit, try again later!");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      setSubmitting(false);
    }
  };
  if (submitting) toast.loading("submitting");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-3xl mx-auto p-4"
    >
      <Toaster />
      <h1 className="text-3xl font-bold text-center my-10">Contact Us</h1>
      <label className="mb-2 text-lg font-bold" htmlFor="Name">
        Name
      </label>
      <input
        type="text"
        id="Name"
        placeholder="Enter your name"
        {...register("Name", { required: true, minLength: 1 })}
        className="p-2 mb-4 border rounded-md"
      />

      <label className="mb-2 text-lg font-bold" htmlFor="Email">
        Email
      </label>
      <input
        type="text"
        id="Email"
        placeholder="Enter your email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        className="p-2 mb-4 border rounded-md"
      />

      <label className="mb-2 text-lg font-bold" htmlFor="MobileNumber">
        Mobile Number
      </label>
      <input
        type="tel"
        id="MobileNumber"
        placeholder="Enter your mobile number"
        {...register("MobileNumber", {
          required: true,
          minLength: 10,
          maxLength: 10,
        })}
        className="p-2 mb-4 border rounded-md"
      />
      <span className="text-gray-500 -mt-2 mb-4 text-sm">
        Mobile Number should have only 10 digits without country code
      </span>
      <label className="mb-2 text-lg font-bold" htmlFor="Enquiry">
        Enquiry
      </label>
      <select
        id="Enquiry"
        {...register("Enquiry", { required: true })}
        className="p-2 mb-4 border rounded-md"
      >
        <option disabled className="text-center font-bold">
          Registration
        </option>
        <option value="Udyam Registration (MSME)">
          Udyam Registration (MSME)
        </option>
        <option value="GST Registration">GST Registration</option>
        <option value="EPF & ESI Registration">EPF & ESI Registration</option>
        <option value=" FSSAI Registration (Food License)">
          FSSAI Registration (Food License)
        </option>
        <option value=" Import and Export Code Registration (IEC)">
          Import and Export Code Registration (IEC)
        </option>
        <option value=" Company Registration"> Company Registration</option>
        <option value=" Labour License"> Labour License</option>
        <option disabled className="text-center font-bold">
          Compliance
        </option>
        <option value="  GST Return Filing"> GST Return Filing</option>
        <option value=" EPF & ESI Return Filing">
          EPF & ESI Return Filing
        </option>
        <option value=" Income Tax Filing"> Income Tax Filing</option>
        <option value=" TDS Return Filing"> TDS Return Filing</option>
        <option value=" PF Withdrawal"> PF Withdrawal</option>
        <option disabled className="text-center font-bold">
          Insurance
        </option>
        <option value=" Life Insurance - LIC Book Keeping">
          Life Insurance - LIC Book Keeping
        </option>
        <option disabled className="text-center font-bold">
          Legal Services
        </option>
        <option value="ARBITRATION WORK">ARBITRATION WORK</option>
        <option value="LABOUR DISPUTES">LABOUR DISPUTES</option>
        <option value="FAMILY CONCILIATION">FAMILY CONCILIATION</option>
        <option value=" Life Insurance - LIC Book Keeping">Others </option>
        <option value="  PAN"> PAN</option>
        <option value="  TAN"> TAN</option>
        <option value=" Digital Signature – emudhra partner">
          Digital Signature – emudhra partner
        </option>

        <option value="REGISTRATION">REGISTRATION</option>
        <option value="COURT CASES">COURT CASES</option>
      </select>

      <label className="mb-2 text-lg font-bold" htmlFor="Message">
        Message
      </label>
      <textarea
        id="Message"
        placeholder="Enter your message"
        {...register("Message", { required: true })}
        className="p-2 mb-4 border rounded-md"
      />

      <input
        type="submit"
        value={submitting ? "Submitting..." : "Submit"}
        className={`p-2 bg-blue-500 text-white cursor-pointer rounded-md ${
          submitting ? "opacity-50" : ""
        }`}
        disabled={submitting}
      />
    </form>
  );
}
