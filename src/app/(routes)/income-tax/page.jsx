import React from "react";
const faq1 = [
  {
    question: "What is ITR-1?",
    answer:
      "ITR-1 is an Income Tax Return form suitable for individuals with personal income from salary or pension and who own only one house property. Our Tax Consultant can assist you in filing the Income Tax Return for ITR-1.",
  },
  {
    question: "Who should file ITR-2?",
    answer:
      "ITR-2 is meant for individuals who are NRIs, Directors of Companies, shareholders of private companies, or those with capital gains income, income from foreign sources, two or more house properties, or income exceeding Rs.50 lakhs. Our Tax Consultant can help you file the Income Tax Return for ITR-2.",
  },
  {
    question: "Who is required to file ITR-3?",
    answer:
      "ITR-3 is applicable for professionals or individuals operating a proprietorship business in India. Our Tax Consultant can assist you in filing the Income Tax Return for ITR-3.",
  },
  {
    question: "What is ITR-4 for?",
    answer:
      "ITR-4 is for taxpayers enrolled under the presumptive taxation scheme, where the business income is less than Rs.2 crores or professional income is less than Rs.50 lakhs. Our Tax Consultant can help you file the Income Tax Return for ITR-4.",
  },
  {
    question: "Who should file ITR-5?",
    answer:
      "ITR-5 is required to be filed by partnership firms, LLPs, associations, and bodies of individuals to report their income and computation of tax. Our Tax Consultant can assist you in filing the Income Tax Return for ITR-5.",
  },
  {
    question: "What is the purpose of ITR-6?",
    answer:
      "ITR-6 is meant for companies registered in India. Our Tax Consultant can help you file the Income Tax Return for ITR-6.",
  },
];
const faq2 = [
  {
    question: "What is the 80C Deduction?",
    answer:
      "Income tax deduction of up to Rs.1.5 lakhs can be claimed on amounts paid or deposited in PF, PPF, LIC premium, National Savings Certificate, ULIP, principal repayment of housing loan, tuition fees for children, term deposit in the bank, deposit in the Senior Citizen Savings Scheme, and more.",
  },
  {
    question: "How does the 80D Deduction work?",
    answer:
      "Section 80D deduction can be claimed by individuals and HUF for payments towards medical insurance under a GI scheme, made by cheque.",
  },
  {
    question: "What is the purpose of the 80GG Deduction?",
    answer:
      "Section 80GG is a deduction under Chapter VI-A of the Income Tax Act, 1961. It is introduced to provide relief to individuals who do not receive any house rent allowance but are paying rent for their stay.",
  },
  {
    question: "How does the 80E Deduction work?",
    answer:
      "Section 80E deduction can be claimed by individuals for the repayment of interest on loans taken for higher education. The deduction is available for a maximum period of 8 years, starting from the repayment of the loan or until the entire loan is repaid, whichever is earlier.",
  },
  {
    question: "What is the 80G Deduction for?",
    answer:
      "Section 80G deduction can be claimed on donations to certain funds and charitable institutes within the ceiling amount of 10% of the Gross Taxable Income. The available deduction depends on the exemption enjoyed by the fund. Cash donations of more than Rs.2000 cannot be claimed for Section 80G deduction.",
  },
  {
    question: "What is the purpose of the 80CCD Deduction?",
    answer:
      "Section 80CCD allows you to save an additional Rs.50,000 by contributing to the National Pension Scheme (NPS).",
  },
];
const faq3 = [
  {
    question:
      "Is it mandatory for businesses in India to file an income tax return each year?",
    answer:
      "Yes, all businesses operating in India are required to file an income tax return each year. Additionally, they may need to file TDS returns and pay advance tax to stay compliant under the Income Tax Act. RV Associates Tax Consultant, India’s largest tax services platform, offers services like incorporation, GST return filing, and income tax filing to help businesses remain compliant.",
  },
  {
    question:
      "How long does it take to file an income tax return for a business with RV Associates Tax Consultant?",
    answer:
      "The average time taken to file an income tax return for a business with RV Associates Tax Consultant is 3 to 5 working days. Businesses can get a free consultation on tax return filing by scheduling an appointment with an RV Associates Tax Consultant Advisor.",
  },
  {
    question: "What is the penalty for late filing of income tax returns?",
    answer:
      "Taxpayers who do not file their income tax returns on time are subject to penalties and charged interest on the late payment of income tax. The recent penalty for late filing income tax returns is Rs.5000 between 1st August and 31st December, Rs.10,000 after 31st December, and Rs.1000 if the taxable income is less than Rs.5 lakhs.",
  },
  {
    question: "When is the due date for income tax return filing?",
    answer:
      "The due date for income tax return filing is 31st July of every year for individual taxpayers. For companies and taxpayers requiring tax audits, the due date is 30th September. Tax audit is required for businesses with a total sales turnover or gross receipts exceeding Rs.1 crore and for professionals if gross receipts in the profession exceed Rs.50 lakhs.",
  },
  {
    question: "What triggers the need for a tax audit in a business?",
    answer:
      "In the case of a business, a tax audit is required if the total sales turnover or gross receipts exceed Rs.1 crore in any previous year. For professions, a tax audit is required if gross receipts in the profession exceed Rs.50 lakhs in any of the previous years. If a person is enrolled under the presumptive taxation scheme under section 44AD and total sales or turnover is more than Rs.2 crores, then a tax audit would be required.",
  },
  {
    question:
      "What is the increased penalty for late filing income tax returns?",
    answer:
      "The penalty for late filing income tax returns has been increased to Rs.5000 for returns filed between 1st August and 31st December.",
  },
];
const faq4 = [
  {
    question:
      "Is income from the sale or purchase of shares and Capital Assets taxable?",
    answer:
      "Yes, income from the sale or purchase of shares and Capital Assets is taxable. This income falls under the head 'Capital Gains,' and it is further classified into Long-term capital gains (LTCG) and Short-term capital gains (STCG) based on the holding period of the shares or Capital Assets.",
  },
  {
    question: "How is income under the head 'Capital Gains' classified?",
    answer:
      "Income under the head 'Capital Gains' is classified into Long-term capital gains (LTCG) or Short-term capital gains (STCG) based on the holding period of the shares or Capital Assets. The holding period refers to the duration for which the investment is held, starting from the date of acquisition till the date of sale or transfer.",
  },
  {
    question: "What is Short-Term Capital Gains (STCG)?",
    answer:
      "Short-Term Capital Gains (STCG) occur when equity shares listed on a stock exchange are sold within 12 months of purchase. A seller may make a short-term capital gain (STCG) or incur a short-term capital loss (STCL) based on whether the shares are sold at a price higher or lower than the purchase price.",
  },
  {
    question: "What is Long-Term Capital Gains (LTCG)?",
    answer:
      "Long-Term Capital Gains (LTCG) occur when equity shares listed on a stock exchange are sold after 12 months of purchase. A seller may make a long-term capital gain (LTCG) or incur a long-term capital loss (LTCL). Before the introduction of Budget 2018, the long-term capital gains from the sale of equity shares or equity-oriented units of mutual funds were exempt from tax.",
  },
  {
    question:
      "Was there any tax exemption for long-term capital gains before Budget 2018?",
    answer:
      "Yes, before the introduction of Budget 2018, the long-term capital gains made on the sale of equity shares or equity-oriented units of mutual funds were exempt from tax. No tax was payable on gains from the sale of long-term equity investments.",
  },
];
const faq5 = [
  {
    question:
      "What are the annual compliances that a private limited/public limited company in India must ensure?",
    answer:
      "Private limited/public limited companies in India must ensure compliances with the Companies Act, 2013/1956. These regulations cover aspects such as the appointment, qualification, remuneration, and retirement of directors, as well as conducting board meetings and shareholder meetings.",
  },
  {
    question:
      "What is the significance of Registrar of Companies (ROC) compliance for private limited companies?",
    answer:
      "Irrespective of the total turnover or capital amount, private limited companies must comply with the annual compliance requirements, including filing annual returns and income tax returns each year. These compliances are essential for maintaining regulatory compliance and avoiding legal issues.",
  },
  {
    question:
      "What are the common compliances that private limited/public limited companies must ensure?",
    answer:
      "Common compliances include statutory audit to determine accurate financial details, filing annual accounts and returns with the ROC (Forms MGT-7 and AOC-4), holding an Annual General Meeting (AGM) before September 30 each year, conducting board meetings, and fulfilling income tax compliances such as quarterly advance tax payments, annual income tax returns filing, and tax audit if turnover exceeds Rs. One crore.",
  },
  {
    question:
      "What is the purpose of statutory audit compliances for companies?",
    answer:
      "Statutory audit compliances are conducted to verify the accuracy of an organization's financial position. This includes examining bank balances, cash balances, bookkeeping records, ROC records, statutory registrations, and financial transactions. A statutory auditor is appointed to finalize annual accounts.",
  },
  {
    question:
      "What forms are required for annual ROC filings for private/public limited companies?",
    answer:
      "Private/public limited companies need to file Form MGT-7 (Annual returns) within 60 days of holding the AGM and Form AOC-4 (Financial statements) within 30 days, including the balance sheet, statement of profit and loss account, and director's report.",
  },
  {
    question:
      "Why is an Annual General Meeting (AGM) necessary for private/public limited companies?",
    answer:
      "An AGM is necessary for private/public limited companies to approve financial statements, declare dividends, appoint or re-appoint auditors, determine the commission and remuneration of directors, and discuss other essential matters. It must be held once every year before September 30 from the financial year's closing.",
  },
  {
    question:
      "What are the requirements for board meetings in private/public limited companies?",
    answer:
      "Private/public limited companies must conduct the first board meeting within 30 days of incorporation. Four board meetings must be held every three months, with a minimum of 2 directors or 1/3rd of the total number of directors, whichever is greater. Meeting discussions need to be recorded in the minutes and maintained at the company's registered office.",
  },
  {
    question:
      "What details does the Director need to disclose in the Directors Report?",
    answer:
      "The Director needs to disclose details about their directorship in other companies every year. This can be done by giving a written declaration to the company annually.",
  },
  {
    question:
      "What are the income tax compliances for private/public limited companies?",
    answer:
      "Income tax compliances include quarterly payment of advance tax in case of profit, filing annual income tax returns, and tax audit (mandatory if turnover or gross receipts exceed Rs. One crore). Filing the tax audit report is also required.",
  },
];
const faq6 = [
  {
    question: "What is TDS return filing, and why is it necessary?",
    answer:
      "TDS return filing is a quarterly statement submitted to the Income Tax department by the Deductor. It is essential to deposit tax deducted at source (TDS) within the stipulated time. TDS returns can be filed online through NSDL, and the details appear on Form 26AS.",
  },
  {
    question: "What are the details required while filing TDS returns?",
    answer:
      "While filing TDS returns, key details such as PAN of the Deductor and Deductee, the amount of tax paid to the government, and TDS challan information need to be mentioned.",
  },
  {
    question: "What is TAN, and who needs to obtain it?",
    answer:
      "TAN, or Tax Deduction and Collection Number, is a mandatory 10-digit alpha number obtained by those responsible for deducting tax at source or tax collection at source on behalf of the government. Salaried individuals are not required to obtain TAN, but entities like proprietorships need it for certain payments.",
  },
  {
    question:
      "What are the different types of TDS forms, and when should they be used?",
    answer:
      "There are several TDS forms based on the type of income or deductee. Forms include 24Q for salary TDS, 26Q for payments other than salaries, 27Q for TDS on payments to non-residents, and 27EQ for collection of tax at source.",
  },
  {
    question: "What is the penalty for failure in filing TDS returns?",
    answer:
      "If TDS returns are not filed before the due date, there is a penalty of Rs. 200 per day under Section 234E until the default is rectified.",
  },
  {
    question:
      "What is the penalty for non-filing of TDS returns or furnishing incorrect information?",
    answer:
      "Failure to file TDS returns within a year or providing incorrect information can result in a penalty ranging from Rs. 10,000 to Rs. 1,00,000.",
  },
  {
    question:
      "When can revised TDS returns be filed, and what are the prerequisites?",
    answer:
      "Revised TDS returns can be filed after the original TDS return is accepted by the TIN central system. Prerequisites include checking the status of filed returns, using the most recent consolidated TDS statement, and downloading the certificate from the TRACES website.",
  },
  {
    question:
      "How can TDS credit be claimed, and what precautions should be taken?",
    answer:
      "To claim TDS credit, the deductee must mention TDS details in their income tax returns, taking care to provide correct TDS certificate number and details. Incorrect details can lead to discrepancies in tax credit processing.",
  },
];

const page = () => {
  return (
    <div className="p-5">
      <div className="my-20">
        <h1 className="text-center w-full font-bold text-5xl my-10">
          INCOME TAX FILING
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
      <div className="my-20">
        <h1 className="text-center w-full font-bold text-5xl my-10">
          TOP INCOME TAX DEDUCTIONS
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
          Business Income Tax Return Filing
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
      <div className="my-20">
        <h1 className="text-center w-full font-bold text-5xl my-10">
          Capital Gain Income Tax
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
      <div className="my-20">
        <h1 className="text-center w-full font-bold text-5xl my-10">
          Company Income Tax / Audit
        </h1>
        <div className="flex flex-wrap gap-10 ">
          {faq5.map((item, index) => (
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
          TDS / TCS Return Filing{" "}
        </h1>
        <div className="flex flex-wrap gap-10 ">
          {faq6.map((item, index) => (
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
