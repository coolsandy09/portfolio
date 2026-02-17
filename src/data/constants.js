export const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export const METRICS = [
    { value: "90%", label: "ETL Time Reduction" },
    { value: "5TB+", label: "Daily Processing" },
    { value: "99.8%", label: "Pipeline Reliability" },
    { value: "45%", label: "Query Time Reduction" },
];

export const SKILLS = [
    {
        category: "Cloud & Databases",
        iconName: "database",
        items: [
            "Microsoft Azure (ADF, Synapse, ADLS Gen2)",
            "Snowflake",
            "SQL Server",
            "MySQL",
        ],
    },
    {
        category: "Engineering & BI",
        iconName: "barchart",
        items: [
            "ETL/ELT",
            "SSIS",
            "SSAS",
            "Power BI",
            "DBT",
            "Data Modeling",
            "Kimball Methodology",
        ],
    },
    {
        category: "Programming",
        iconName: "code",
        items: ["SQL", "T-SQL", "Python (Pandas, NumPy)", "DAX", "Java"],
    },
    {
        category: "DevOps & Tools",
        iconName: "gitbranch",
        items: ["Git", "GitHub", "Azure DevOps", "CI/CD", "Agile/JIRA"],
    },
];

export const EXPERIENCE = [
    {
        role: "Data Engineer",
        company: "LTIMindtree",
        client: "Scania CV AB Sweden",
        period: "Sep 2022 – Present",
        highlights: [
            "Architected Azure Data Factory (ADF) pipelines for Dynamics 365 and SQL Server to Snowflake integration",
            "Reduced data load times by 90% — from 6 hours to 2 hours — for 5M+ daily records",
            "Optimized 25+ Power BI dashboards (SSAS Tabular/DAX) for Scania CV AB Sweden, cutting query times by 45%",
            "Automated ETL/ELT workflows using SSIS and Matillion, saving 20+ hours of manual work weekly",
            "Implemented Role‑Based Access Control (RBAC) and achieved 99.8% pipeline reliability",
            "Built a data quality validation framework improving accuracy from 94% to 99.7%",
            "Designed star and snowflake schemas using Kimball methodology for architectures supporting $50M+ revenue operations",
        ],
    },
    {
        role: "Graduate / Apprenticeship Trainee",
        company: "LTIMindtree",
        client: null,
        period: "May 2022 – Sep 2022",
        highlights: [
            "Completed 16‑week intensive training in SQL, Azure (ADF, Synapse), Power BI, Python, and Java",
            'Developed "Supermarket Insights Dashboard": star schema warehouse, 5 fact tables, SCD Type 2, and 15+ Power BI dashboards',
        ],
    },
];

export const PROJECTS = [
    {
        title: "Handwritten Character Recognition",
        tag: "IEEE Research",
        description:
            "Developed a CNN model for Tirhuta language digit recognition achieving 88–89% accuracy. Published in IEEE.",
        ieeeLink: "https://ieeexplore.ieee.org",
        techStack: ["Python", "CNN", "Deep Learning", "IEEE"],
    },
    {
        title: "Advertisement Reminder System",
        tag: "Automation",
        description:
            "Created for Janakpur Today Media Group to automate advertisement scheduling and reminders.",
        techStack: ["Python", "Automation", "Scheduling"],
    },
    {
        title: "Entertainment Tracker",
        tag: "Full Stack",
        description:
            "System for organizing and tracking personal lists of movies, books, and games with search and filter capabilities.",
        techStack: ["Web App", "Database", "CRUD"],
    },
    {
        title: "Hostel Allocation System",
        tag: "Database",
        description:
            "Mini‑project to streamline hostel room assignments with automated allocation logic.",
        techStack: ["SQL", "Database Design", "Backend"],
    },
    {
        title: "Blood Donation Management",
        tag: "Healthcare",
        description:
            "System to optimize donor tracking and blood availability for hospitals and blood banks.",
        techStack: ["Database", "Backend", "Healthcare IT"],
    },
];

export const CERTIFICATIONS = [
    { name: "Azure Data Engineer Associate (DP‑203)", provider: "Microsoft" },
    { name: "SnowPro Core Associate", provider: "Snowflake" },
    { name: "Azure Data Fundamentals (DP‑900)", provider: "Microsoft" },
    { name: "Generative AI Fundamentals", provider: "Industry" },
];

export const CONTACT_ITEMS = [
    {
        iconName: "mail",
        label: "Email",
        value: "sandeepsah2201@gmail.com",
        href: "mailto:sandeepsah2201@gmail.com",
    },
    {
        iconName: "phone",
        label: "Phone",
        value: "+91‑9110414193",
        href: "tel:+919110414193",
    },
    {
        iconName: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/sandeep‑sah",
        href: "https://linkedin.com/in/sandeep-sah",
    },
    {
        iconName: "mappin",
        label: "Location",
        value: "Bengaluru, India",
        href: null,
    },
];
