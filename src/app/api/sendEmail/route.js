import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  // service: "gmail",
  secure: true,
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.FROM_EMAIL_PASSWORD,
  },
});

export async function POST(req, res) {
  const formData = await req.json();
  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "New Form Submission",
    html: `
    <p><strong>Full Name:</strong> ${formData.Name}</p>
    <p><strong>Email:</strong> ${formData.Email}</p>
    <p><strong>Mobile Number:</strong> ${formData.MobileNumber}</p>
    <p><strong>Enquiry:</strong> ${formData.Enquiry}</p>
    <p><strong>Message:</strong> ${formData.Message}</p>
    <!-- Add other fields as needed -->
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
