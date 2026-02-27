export type MissionItem = {
  title: string;
  description: string;
};

export type Firm = {
  legalName: string;
  displayName: string;
  descriptor: string;
  locations: string[];
  established: string;
  foundationTitle: string;
  about: string;
  vision: string;
  missionIntro: string;
  mission: MissionItem[];
  teamIntro: string;
};

export type ServiceItem = {
  title: string;
};

export type ServiceGroup = {
  number?: string;
  title: string;
  description: string;
  items: ServiceItem[];
};

export type Partner = {
  name: string;
  title: string;
  qualifications: string;
  bio: string;
  expertise: string;
  image: string;
};

export type Office = {
  name: string;
  addressLines: string[];
  phones: string[];
  email?: string;
};

export const firm: Firm = {
  legalName: 'A V P C & CO LLP',
  displayName: 'A V P C & CO LLP, Chartered Accountants',
  descriptor: 'Strategic tax advisory, risk mitigation, forensic accounting and regulatory services',
  locations: ['Pune', 'Kolhapur'],
  established: 'October 2025',
  foundationTitle: 'Our Foundation',
  about:
    "A V P C & CO LLP, Chartered Accountants, established in October 2025, is a forward-thinking firm specializing in strategic tax advisory, risk mitigation, and forensic accounting. With a foundation built on agility and specialized expertise, we are committed to providing tailored solutions to meet the evolving financial, regulatory, and investigative needs of today's corporate world.",
  vision:
    'To redefine the role of Chartered Accountants in the modern economy as strategic thinkers, ethical advisors, and innovation-driven professionals. We envision A V P C & CO LLP as a future-ready firm that empowers businesses to thrive through clarity, compliance, and confidence.',
  missionIntro: 'Our Mission',
  mission: [
    {
      title: 'Insight-Driven Excellence',
      description:
        'Deliver technology-enabled, value-centric professional services that strengthen financial governance and build stakeholder trust.'
    },
    {
      title: 'Simplify Complexity',
      description:
        'Offer tailored solutions across Assurance, Taxation, Forensics, and Advisory domains that transform complex challenges into clear pathways.'
    },
    {
      title: 'Ethical Excellence',
      description:
        'Champion accountability, ensuring every engagement reflects the highest professional standards and unwavering integrity.'
    },
    {
      title: 'Innovation & Talent',
      description:
        'Foster a collaborative culture where expertise and curiosity drive continuous improvement and professional growth.'
    },
    {
      title: 'Strategic Partnership',
      description:
        'Be not just accountants, but strategic partners in progress, enabling clients to grow securely in an evolving financial landscape.'
    }
  ],
  teamIntro:
    'Meet the experienced professionals driving excellence at A V P C & CO LLP. Our team combines technical expertise with strategic insight to deliver exceptional results.'
};

export const specializedOfferings: ServiceGroup[] = [
  {
    number: '01',
    title: 'Audit & Assurance',
    description:
      'Independent and compliant financial oversight through Statutory Audits under the Companies Act, Tax Audits under the Income Tax Act, and specialized assurance engagements under Indirect Tax Laws including GST and VAT. Internal Audit Services focus on evaluating and strengthening internal controls, risk management frameworks, and overall governance processes.',
    items: []
  },
  {
    number: '02',
    title: 'Forensics & Risk Advisory',
    description:
      'A strategic core addressing contemporary needs for enhanced corporate integrity, governance, and compliance. The firm specializes in Forensic Accounting and Investigations, assisting clients in detection and prevention of fraud and financial irregularities. Fraud Risk Assessments enable clients to proactively identify vulnerabilities and implement effective control measures.',
    items: []
  },
  {
    number: '03',
    title: 'Taxation & Regulatory',
    description:
      'Comprehensive advisory, planning, and compliance services across Direct and Indirect Taxes. The Taxation practice covers corporate and individual taxation, assessment representation, and litigation support. International Taxation includes cross-border structuring, transfer pricing, DTAA planning, and foreign remittance compliance.',
    items: []
  },
  {
    number: '04',
    title: 'RERA Consulting',
    description:
      'Dedicated services assisting developers, agents, and stakeholders in complying with the Real Estate (Regulation and Development) Act, including guidance on registration, certification, and regulatory compliance to ensure transparency and statutory adherence.',
    items: []
  }
];

export const services: ServiceGroup[] = [
  {
    title: 'Audit and Assurance',
    description: 'Comprehensive professional services designed to meet evolving business needs.',
    items: [
      { title: 'Statutory Audit' },
      { title: 'Internal Audit' },
      { title: 'Bank Audit' },
      { title: 'Management Audit' },
      { title: 'Stock Audit' }
    ]
  },
  {
    title: 'Taxation',
    description: 'Direct and indirect tax advisory and compliance support.',
    items: [
      { title: 'Direct Tax Advisory & Compliance' },
      { title: 'Indirect Tax (GST) Services - Advisory & Compliance' },
      { title: 'Transfer Pricing Solutions' },
      { title: 'International Tax Planning' }
    ]
  },
  {
    title: 'Advisory',
    description: 'Risk-focused and transaction-support advisory assignments.',
    items: [
      { title: 'Forensic Accounting and Investigation' },
      { title: 'Fraud Risk Assessment' },
      { title: 'Due Diligence' },
      { title: 'Project Appraisal and Reports' }
    ]
  },
  {
    title: 'Certifications',
    description: 'Certification and regulatory reporting support.',
    items: [
      { title: 'Form 15 CA / CB' },
      { title: 'Net Worth Certification' },
      { title: 'RERA Compliance Certification' },
      { title: 'Regulatory Compliance Reports' }
    ]
  }
];

export const partners: Partner[] = [
  {
    name: 'CA Akshay Mandage',
    title: 'Partner',
    qualifications: 'M.COM., A.C.A.',
    bio: 'A visionary Chartered Accountant, CA Akshay Mandage leads with extensive expertise in Audit, Taxation, and Financial Management. He has cultivated his profound skills through impactful roles at esteemed CA firms in Pune, where he adeptly spearheaded Statutory Audits, Internal Audits, and comprehensive Financial Reviews. His work has driven success for clients across diverse sectors, including manufacturing, trading, and dynamic service industries, consistently delivering clarity and strategic advantage.',
    expertise:
      'CA Akshay Mandage excels in mastering complex Direct Tax Assessments, ensuring stringent Transfer Pricing adherence and regulatory excellence, streamlining GST compliance, delivering accurate RERA reporting, and providing high-impact Financial Analysis (MIS) that empowers data-driven strategic decisions and fosters sustainable business growth.',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800'
  },
  {
    name: 'CA Vijay Chitari',
    title: 'Partner',
    qualifications: 'B.COM., A.C.A.',
    bio: 'A rapidly ascending Chartered Accountant, CA Vijay Chitari has swiftly carved a niche with over two years of intensive post-qualification experience, excelling in sophisticated Taxation and Financial Management. His career trajectory showcases pivotal tenures at globally acclaimed firms like Kalyaniwalla & Mistry LLP (Mazars India) and B B S R & Associates (KPMG India) in Pune, where he rapidly cultivated a profound grasp of intricate financial landscapes and specialized tax frameworks, driving significant value for clients.',
    expertise:
      'CA Vijay Chitari demonstrates exceptional proficiency in handling intricate Indirect Tax Assessments and representation, ensuring rigorous GST compliance, managing meticulous RERA-related reporting, and leveraging data-driven Financial Analysis (MIS) to provide actionable insights for strategic financial planning and optimized outcomes.',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800'
  },
  {
    name: 'CA Pushkar Joshi',
    title: 'Partner',
    qualifications: 'B.COM., A.C.A., C.F.E. (ACFE, USA)',
    bio: 'Possessing a powerful dual qualification as a Chartered Accountant and Certified Fraud Examiner, CA Pushkar Joshi brings over two years of intensive post-qualification experience. His career began with impactful tenures at esteemed firms like MSKA & Associates (BDO India) and Mahajan & Aibara Chartered Accountants LLP, where he swiftly developed a strong foundation in forensic investigation and financial assurance.',
    expertise:
      'CA Pushkar Joshi leads Forensic Investigations, specializing in comprehensive Fraud Risk Assessments to fortify organizational integrity, and demonstrates expertise in the analysis of Electronically Stored Information during Mobile Forensics and Computer Forensics. He also excels in rigorous Statutory Audits (IND-AS/Schedule III) and meticulous reviews of Internal Financial Controls (IFC), ensuring compliance and operational resilience.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&h=800&auto=format&fit=crop'
  },
  {
    name: 'CA Rohan Patil',
    title: 'Partner',
    qualifications: 'B.COM., A.C.A.',
    bio: 'A highly adept professional, CA Rohan Patil leverages extensive experience from PriceWaterhouse & Co LLP, where he consistently demonstrated excellence in navigating intricate multinational tax matters and ensuring robust transfer pricing compliance. His distinguished track record showcases a profound ability to manage complex projects, apply meticulous attention to detail, and strategically enhance operational efficiency for clients operating across global landscapes.',
    expertise:
      'CA Rohan Patil excels in orchestrating Transfer Pricing compliance for multinational enterprises, masterfully handling Globally Coordinated Documentation (OECD), expertly managing Transfer Pricing litigation, structuring Advance Pricing Agreements, and providing incisive strategic advisory on complex areas such as ESOP cost treatment and entity recharacterization.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800'
  }
];

export const offices: Office[] = [
  {
    name: 'Head Office',
    addressLines: [
      'Royal Pearl, 2nd Floor',
      'Third Lane, Shahupuri',
      'Kolhapur, Maharashtra - 416001'
    ],
    phones: ['+91 8983101011'],
    email: 'avpcllp@gmail.com'
  },
  {
    name: 'Branch Office',
    addressLines: ['Pimpri Chinchwad, Pune', 'Maharashtra'],
    phones: ['+91 9145522100', '+91 8329070657'],
    email: 'avpcllp@gmail.com'
  }
];
