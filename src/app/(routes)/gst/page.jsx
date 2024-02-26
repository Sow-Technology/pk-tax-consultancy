import FooterComp from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
const faq = [
  {
    question: "What is Goods and Services Tax (GST)?",
    answer:
      "GST is a tax on goods and services consumed in India, introduced on July 1, 2017, replacing various other indirect taxes like excise duty, VAT, and services tax.",
  },
  {
    question: "Who is considered a taxable person under the GST Act?",
    answer:
      "A 'taxable person' under the GST Act is someone conducting business in India and is registered or needs to be registered. This includes individuals, companies, LLPs, foreign corporations, co-operative societies, and more.",
  },
  {
    question: "Is GST registration mandatory based on turnover?",
    answer:
      "GST registration can be obtained voluntarily, but it becomes mandatory if a person or entity sells goods or services beyond a certain turnover limit.",
  },
  {
    question: "What are the types of GST registration?",
    answer:
      "There are various types, including regular, casual taxable persons, non-resident taxable persons, and eCommerce operators. The latter three require GST registration irrespective of turnover limit.",
  },
  {
    question: "What is GSTIN?",
    answer:
      "GSTIN, or Goods and Services Tax Identification Number, is a 15-character identifier provided to entities with GST registration. It is based on PAN and the State of the applicant.",
  },
  {
    question: "How can I download my GST Registration Certificate?",
    answer:
      "You can download your GST certificate easily through the GST Portal. Log in to your GST Account, go to User Services, and click on View / Download Certificate.",
  },
  {
    question: "How can I register for GST through PK Tax Consultancy?",
    answer:
      "To register through PK Tax Consultancy, provide your name, phone number, and email. A GST expert will contact you, understand your business, collect necessary documents, and initiate the registration process.",
  },
  {
    question: "Is voluntary GST registration possible?",
    answer:
      "Yes, any person or entity wishing to supply goods or services can obtain GST registration voluntarily, regardless of business turnover. This can enable the business to avail Input Tax Credit and issue GST bills to customers.",
  },
  {
    question: "What is the penalty for not obtaining GST registration?",
    answer:
      "Any person or entity crossing the aggregate turnover limit must obtain GST registration within 30 days. Failure to comply can result in a penalty of Rs. 10,000 and the loss of input tax credit during the delay period.",
  },
  {
    question: "What is GST return filing?",
    answer:
      "GST return filing is a mandatory process for businesses registered under GST, involving the submission of details of sales, purchases, and associated taxes on a monthly, quarterly, or annual basis. This ensures compliance with the comprehensive Income Tax System implemented in India.",
  },
  {
    question: "What forms are required for GST return filing?",
    answer:
      "An individual taxpayer filing GST returns needs to submit four forms, covering supplies, purchases, monthly transactions, and annual summaries.",
  },
  {
    question:
      "Is GST return filing mandatory for all entities with GST registration?",
    answer:
      "Yes, GST return filing in India is compulsory for all entities with valid GST registration, regardless of business activity, sales, or profitability. Even dormant businesses with GST registration must fulfill this requirement.",
  },
  {
    question: "What information does a GST return contain?",
    answer:
      "A GST return is a document detailing a taxpayer's income or expenses that must be filed with tax administrative authorities. It includes specifics of sales, purchases, and associated taxes.",
  },
  {
    question: "Who is required to file GST returns in India?",
    answer:
      "GST return filing in India is required for individuals with a valid GSTIN, those with an annual turnover exceeding Rs. 20 lakh, and, in special states, for those with an annual turnover surpassing Rs. 10 lakh.",
  },
  {
    question: "What is the GST return filing process at PK TAX Consultancy?",
    answer:
      "PK TAX Consultancy, a leading Tax Consultant service platform in India, offers end-to-end GST services. When GST return filing is outsourced to PK TAX Consultancy, a dedicated GST advisor is assigned to the business. This advisor collects necessary information monthly, prepares GST returns, and assists in filing the returns.",
  },
  {
    question: "Who is required to furnish a Letter of Undertaking (LUT)?",
    answer:
      "Any registered person opting to supply goods or services for export/SEZs without payment of integrated tax needs to furnish a Letter of Undertaking (LUT). This is applicable if they haven't been prosecuted for tax evasion exceeding Rs 2.5 Crore under the CGST Act/IGST Act/Existing law.",
  },
  {
    question: "What are examples of transactions where LUT can be used?",
    answer:
      "LUT can be used for zero-rated supply to SEZ without payment of IGST, export of goods to a country outside India without payment of IGST, and providing services to a client in a country outside India without payment of IGST.",
  },
  {
    question: "How can I file LUT?",
    answer:
      "All registered taxpayers with zero-rated supply of goods or services must file LUT in Form GST RFD-11 on the GST Portal. Access the GST portal, log in, and navigate to Services > User Services > Furnish Letter of Undertaking (LUT) command to file LUT.",
  },
  {
    question: "What information is required to be filled in the LUT?",
    answer:
      "GSTIN and Name (Legal Name) of the Taxpayer are prefilled based on login. The taxpayer needs to select the financial year for which LUT is being filed, enter the name, address, and occupation details of two independent witnesses, and select all the points of self-declaration before filing the LUT.",
  },
  {
    question:
      "What if I have already furnished and got approval for a manual LUT?",
    answer:
      "If a taxpayer has a manually furnished LUT approved by the Tax Authority for the current Financial Year, they can upload that LUT and file an online application for furnishing LUT to seek online approval for the previous LUT.",
  },
  {
    question:
      "Is it mandatory to record the manually approved LUT in online records?",
    answer:
      "It is not mandatory, but if a taxpayer wants to have the manually approved LUT available in online records, they can furnish it with an online application.",
  },
  {
    question: "What is a refund in GST?",
    answer:
      "Refund, as discussed in section 54 of the CGST/TSGST Act, includes any balance amount in the electronic cash ledger claimed in returns, unutilized input tax credit for zero-rated supplies or due to a higher tax rate on inputs than output supplies, and tax paid by specialized agencies, Consulates, Embassies, or Multilateral Financial Institutions on inward supplies.",
  },
  {
    question: "Can unutilized Input tax credit be allowed as a refund?",
    answer:
      "Unutilized input tax credit can be allowed as a refund in situations such as zero-rated supplies without payment of tax or when the credit accumulates due to a higher tax rate on inputs compared to output supplies (excluding nil rated or fully exempt supplies). However, no refund is allowed if the exported goods are subjected to export duty or if the supplier avails drawback or claims a refund of integrated tax paid on such supplies.",
  },
  {
    question:
      "Will unutilized ITC at the end of the financial year be refunded?",
    answer:
      "There is no provision in the GST Law to allow a refund of unutilized input tax credit at the end of the financial year. It will be carried forward to the next financial year.",
  },
  {
    question: "What is the time limit for taking a refund?",
    answer:
      "A person claiming a refund must file an application before the expiry of two years from the 'relevant date,' as specified in the Explanation to section 54 of the CGST/TNGST Act.",
  },
  {
    question:
      "In case the tax has been passed on to the consumer, will a refund be sanctioned?",
    answer:
      "Yes, the refunded amount will be credited to the Consumer Welfare Fund, as per Section 57 of the CGST/TNGST Act.",
  },
  {
    question:
      "What are the benefits of choosing PK TAX Consultancy for GST Refund?",
    answer:
      "PK TAX Consultancy offers the expertise of a relationship manager experienced in your sector to guide you through the GST registration and filing process. They assist with specific tasks such as uploading invoices and ensure timely filing of returns.",
  },
  {
    question: "What is GST Annual Return?",
    answer:
      "GST Annual Return, also known as GSTR-9, is a filing requirement for all registered taxpayers under GST, except a few exemptions. It compiles information on outward supplies, inward supplies, tax liability, and input tax credit availed during a financial year. The deadline for filing is 31st December of the year following the specific financial year.",
  },
  {
    question: "Who is liable to file GSTR-9?",
    answer:
      "GSTR-9 is required to be filed by all registered taxpayers under GST, irrespective of their turnover, except for casual taxpayers, Input Service Distributors, non-resident taxpayers, and taxpayers deducting/collecting tax at source under Section 51 or Section 52. Composition taxpayers have to file GSTR-9A, and E-commerce operators have to file GSTR-9B.",
  },
  {
    question: "Why choose PK TAX Consultancy for filing GST returns?",
    answer:
      "PK TAX Consultancy ensures efficient GST return filing within 2 to 3 working days, subject to government portal availability and client document submission. Their experienced relationship managers guide through the GST registration and filing process, ensuring timely submissions.",
  },
  {
    question: "What are the types of GST Annual Return?",
    answer:
      "GST Annual Return filing has three types based on the form to be filed: GSTR-9 for entities exceeding a turnover of 2 crores, GSTR-9A for registered taxpayers under the GST Composition scheme, and GSTR-9C for taxpayers with an annual aggregate turnover above two crores, requiring an annual audit of their accounts.",
  },
  {
    question: "Who should file GSTR-9A?",
    answer:
      "GSTR-9A is required to be filed by GST-registered taxpayers who have opted for the Composition scheme under the GST Act. It includes information submitted by the taxpayer in quarterly returns during a specific fiscal year.",
  },
  {
    question: "Who should file GSTR-9C?",
    answer:
      "GSTR-9C is meant for filing the reconciliation statement of taxpayers for a particular financial year. This CA-certified form is required for taxpayers with an annual aggregate turnover above two crores, and it reconciles figures between GSTR-9 and the taxpayer's Audited Financial Statements.",
  },
];

const page = () => {
  return (
    <>
      <h1 className="text-center w-full font-bold text-5xl my-10">GST</h1>
      <div className="flex flex-wrap gap-10 ">
        {faq.map((item, index) => (
          <div
            key={index}
            className="p-10 rounded-md basis-[300px] w-[300px] flex-grow bg-gray-200 flex gap-5 flex-col shadow-xl backdrop-blur-3xl"
          >
            <h2 className="font-bold">{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
