import React from "react";
const faq1 = [
  {
    question: "What is RCMC?",
    answer:
      "RCMC stands for Registration Cum Membership Certificate, issued by Export Promotion Councils or Commodity Boards. It authenticates an exporter's registration with a specific agency authorized by the Government of India.",
  },
  {
    question: "Who needs to obtain RCMC?",
    answer:
      "Exporters intending to deal with restricted goods are required to obtain RCMC from the relevant Export Promotion Council or Commodity Board.",
  },
  {
    question: "What is the purpose of RCMC?",
    answer:
      "RCMC authenticates an exporter's registration and is necessary for dealing with specific products. It is a mandatory requirement for exporting restricted goods.",
  },
  {
    question: "Who should obtain APEDA registration?",
    answer:
      "Every person who is an exporter of Scheduled Products needs to obtain APEDA registration. This includes both merchant exporters and manufacturing exporters.",
  },
  {
    question: "What are the benefits of APEDA registration?",
    answer:
      "APEDA registration provides several benefits, including guidelines for improving packaging and marketing, access to training sessions, enlistment in the Exporters Directory, and brand publicity through advertising and promotion.",
  },
  {
    question: "What documents are required for RCMC registration?",
    answer:
      "The documents required for RCMC registration include details of offices, a signed copy of the application form, IEC copy, bank certificate, certified copy of MOA or partnership deed, and details of registration with other councils or boards.",
  },
  {
    question: "How much is the APEDA registration fee?",
    answer:
      "The APEDA registration fee is Rs. 5000 (exclusive of GST). Payment can be made online through credit/debit cards or offline via Demand Draft in favor of APEDA.",
  },
  {
    question: "What is the APEDA online registration process?",
    answer:
      "Once all required documents are provided online, experts will process the application, and the exporter will receive the APEDA registration certificate.",
  },
  {
    question: "Under what circumstances can APEDA registration be canceled?",
    answer:
      "APEDA registration can be canceled for reasons such as furnishing false information, breach of rules, breach of conditions in the certificate, or failure to export scheduled products for 12 consecutive months.",
  },
];
const faq2 = [
  {
    question:
      "Is FSSAI registration mandatory for everyone in the food business?",
    answer:
      "Yes, FSSAI registration is mandatory for anyone involved in the food business, including processing, manufacturing, packaging, distributing, exporting, importing, or selling.",
  },
  {
    question: "Who issues the FSSAI registration/license?",
    answer:
      "The FSSAI registration/license is issued by the Food Safety and Standards Authority of India (FSSAI) under the guidelines of the FSSAI Act 2006.",
  },
  {
    question: "What are the benefits of FSSAI registration?",
    answer:
      "Creates trust and credibility among customers. FSSAI logo ensures goodwill among consumers. Regulates hygiene and cleanliness. Access to studies for improving work policies. Knowledge sharing for industry improvement. Important for importing and exporting food products. Mandatory for selling food products online. Sets guidelines for quality assurance of labs.",
  },
  {
    question: "Who is required to register with the FSSAI?",
    answer:
      "Everyone operating in the food industry, including hawkers, home vendors, and large food chains, needs to register with FSSAI. Whether operating online or offline, or involved in import/export, registration is mandatory.",
  },
  {
    question: "What is the penalty for not registering with FSSAI?",
    answer:
      "A food business operator (FBO) who runs their business without registering under FSSAI may face imprisonment and a penalty of up to ₹5 lakhs.",
  },
];

const faq3 = [
  {
    question: "What is ESI?",
    answer:
      "ESI stands for Employee State Insurance, a scheme managed by the Employee State Insurance Corporation under the Ministry of Labour and Employment, Government of India.",
  },
  {
    question: "Who is eligible for ESI registration?",
    answer:
      "An establishment with more than 10 workers (or 20 in some regions) where each employee's gross salary is up to Rs. 21,000 per month is eligible for ESI registration.",
  },
  {
    question: "What documents are required for ESI registration?",
    answer:
      "Documents required include the registration certificate of the Shops and Establishment Acts, Factories Act, address proof, PAN card, bank statement, and other relevant business documents.",
  },
  {
    question: "What is the definition of a factory under the ESI Act?",
    answer:
      "A factory is any premise where ten or more persons are employed or were employed for wages on any day of the preceding twelve months, and, in any part of which a manufacturing process is being carried with or without the aid of power.",
  },
  {
    question: "What is the definition of an establishment under the ESI Act?",
    answer:
      "Under the ESI Act, an establishment is an organized body of men or women or an institution, employing 20 or more persons, required to obtain ESI registration.",
  },
  {
    question: "What are the benefits of ESI registration?",
    answer:
      "ESI registration provides benefits such as medical aid, maternity benefit, disablement benefit, sickness benefits, dependent benefits, funeral expenses, confinement expenses, vocational rehabilitation, and more.",
  },
];

const faq4 = [
  {
    question: "What is EPF?",
    answer:
      "EPF stands for Employees Provident Fund, a scheme regulated by the Provident Funds and Miscellaneous Provisions Act, 1952, and managed by the Employees Provident Fund Organization (EPFO).",
  },
  {
    question: "Who is eligible for EPF registration?",
    answer:
      "All establishments employing 20 or more employees are eligible for mandatory EPF registration. In some cases, establishments with less than 20 employees can opt for voluntary PF registration.",
  },
  {
    question: "Who is eligible to become a member of EPF?",
    answer:
      "Employees drawing less than Rs.15,000 per month are required to become members of EPF. Employees with a basic pay exceeding Rs.15,000 can still be members and make voluntary contributions with the employer and the PF.",
  },
  {
    question: "What is the contribution breakdown for PF?",
    answer:
      "The 12% contribution is divided into the following subdivisions: 3.67% towards the Employees Provident Fund, 1.1% towards EPF administration charges, 0.5% towards the employee's deposit-linked insurance, 0.01% towards EDLI administration charges, and 8.33% towards the Employees Pension Scheme.",
  },
  {
    question: "What documents are required for EPF registration?",
    answer:
      "Documents required include PAN of the Partner, Proprietor, or Director, address proof, Aadhar card of Proprietor, Partner, or Director, canceled cheque or bank statement, digital signature of the Proprietor/Partner or Director, and Shop & Establishment Act Registration.",
  },
  {
    question: "What is the due date for EPF contributions?",
    answer:
      "Employers must deduct the employee's contribution from their wages before paying salaries. The employee and employer's shares are payable to the EPFO within 15 days of the close of every month.",
  },
  {
    question: "What are the benefits of EPF?",
    answer:
      "EPF provides benefits such as a sovereign-backed, tax-free interest on contributions, EEE (exempt, exempt, exempt) status, and high returns with safety and assurance.",
  },
];

const page = () => {
  return (
    <div className="p-5">
      <div className="my-20">
        <h1 className="text-center w-full font-bold text-5xl my-10">
          APEDA Registration
        </h1>
        <div className="flex flex-wrap gap-10 ">
          {faq1.map((item, index) => (
            <div
              key={index}
              className="p-10 rounded-md basis-[300px] w-[300px] flex-grow bg-gray-200 flex gap-5 flex-col shadow-xl backdrop-blur-3xl"
            >
              <h2 className="font-bold">{item.question}</h2>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-20" id="fssai">
        <h1 className="text-center w-full font-bold text-5xl my-10">
          Food License / FSSAI
        </h1>
        <div className="flex flex-wrap gap-10 ">
          {faq2.map((item, index) => (
            <div
              key={index}
              className="p-10 rounded-md basis-[300px] w-[300px] flex-grow bg-gray-200 flex gap-5 flex-col shadow-xl backdrop-blur-3xl"
            >
              <h2 className="font-bold">{item.question}</h2>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-20">
        <h1 className="text-center w-full font-bold text-5xl my-10">
          ESI Registration{" "}
        </h1>
        <div className="flex flex-wrap gap-10 ">
          {faq3.map((item, index) => (
            <div
              key={index}
              className="p-10 rounded-md basis-[300px] w-[300px] flex-grow bg-gray-200 flex gap-5 flex-col shadow-xl backdrop-blur-3xl"
            >
              <h2 className="font-bold">{item.question}</h2>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-20" id="pf">
        <h1 className="text-center w-full font-bold text-5xl my-10">
          PF Registration{" "}
        </h1>
        <div className="flex flex-wrap gap-10 ">
          {faq4.map((item, index) => (
            <div
              key={index}
              className="p-10 rounded-md basis-[300px] w-[300px] flex-grow bg-gray-200 flex gap-5 flex-col shadow-xl backdrop-blur-3xl"
            >
              <h2 className="font-bold">{item.question}</h2>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
