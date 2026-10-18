export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  role: string;
  summary: string;
  overview: string;
  contribution: string;
  areas: string[];
  stack: string[];
  considerations: {
    title: string;
    description: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "trexo-admin",
    number: "01",
    title: "Trexo Admin",
    category: "FINANCIAL OPERATIONS · IN DEVELOPMENT",
    role: "Frontend Developer",
    summary:
      "A Next.js workspace for financial operations, customer administration, and platform configuration.",
    overview:
      "Trexo Admin brings operational tools into a shared workspace. Its modules cover account activity, reconciliation, customer records, CASA, and platform settings. Development is ongoing across the product.",
    contribution:
      "Developing the frontend with Next.js and TypeScript, building reusable interfaces and connecting implemented modules to backend services.",
    areas: [
      "Shared navigation and application layouts",
      "Customer and reseller management interfaces",
      "Account statements and credit interfaces",
      "Reconciliation workflows",
      "Product and plan configuration",
      "API service integration",
    ],
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "REST APIs"],
    considerations: [
      {
        title: "A consistent workspace",
        description:
          "Shared layouts and components help different operational modules behave predictably.",
      },
      {
        title: "Clear module boundaries",
        description:
          "Keeping API services separate from presentation makes screens easier to understand and maintain.",
      },
      {
        title: "An evolving product",
        description:
          "The interface needs to accommodate new modules without making existing navigation harder to use.",
      },
    ],
  },
  {
    slug: "sai-siddhi",
    number: "02",
    title: "Sai Siddhi",
    category: "BANKING · ADMIN PLATFORM",
    role: "Frontend Developer",
    summary:
      "Banking administration with distinct experiences for administrators, makers, and checkers.",
    overview:
      "The platform organizes customer and account workflows across different operational roles, with interfaces for customer records, documents, transactions, statements, plans, and reporting.",
    contribution:
      "Developed frontend interfaces for the administrative platform, including customer workflows and API-connected views. Also worked on the public-facing website as a separate experience.",
    areas: [
      "Admin, maker, and checker interfaces",
      "Customer search and account-type filtering",
      "Customer summaries and document views",
      "Transaction and statement interfaces",
      "Plan and product management",
      "Reports and reconciliation views",
    ],
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "REST APIs"],
    considerations: [
      {
        title: "Different roles, different actions",
        description:
          "Maker, checker, and admin interfaces need clear action boundaries. Backend authorization remains responsible for enforcing permissions.",
      },
      {
        title: "Keeping customer context",
        description:
          "Related customer views should make it easy to move between summaries, documents, and transactions without losing context.",
      },
      {
        title: "Searchable operational data",
        description:
          "Search fields and account-type filters help users reach the relevant customer records.",
      },
    ],
  },
  {
    slug: "trexo-edge",
    number: "03",
    title: "Trexo Edge",
    category: "CUSTOMER PLATFORM · FULL STACK",
    role: "Full Stack Developer",
    summary:
      "Customer-facing fintech experiences, backed by APIs, financial data, and payment integrations.",
    overview:
      "Trexo Edge connects customer interactions with payment and account workflows. The experience spans frontend interfaces, backend services, financial reporting, and integration with external payment systems.",
    contribution:
      "Contribute to the customer frontend and backend, working across API integration, transaction visibility, reporting, and payment-related workflows.",
    areas: [
      "Customer-facing application interfaces",
      "Frontend and backend API integration",
      "Payin and payout data visibility",
      "Financial reporting",
      "Webhook-related workflows",
      "Payment integration and callback processing",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
    ],
    considerations: [
      {
        title: "Understand the transaction lifecycle",
        description:
          "Pending, successful, and failed operations need distinct meanings across APIs, records, and customer interfaces.",
      },
      {
        title: "Handle asynchronous outcomes",
        description:
          "Background processing and external responses can finish at different times. Interfaces need to represent those outcomes clearly.",
      },
      {
        title: "Keep reporting consistent",
        description:
          "Summary figures and detailed records should use matching filters and transaction definitions.",
      },
    ],
  },
  {
    slug: "financial-operations",
    number: "04",
    title: "White-label Operations",
    category: "ADMIN & CUSTOMER EXPERIENCES",
    role: "Frontend Developer",
    summary:
      "Branded financial interfaces for the teams operating a platform and the customers using it.",
    overview:
      "The platform includes branded operational experiences covering onboarding, transactions, financial records, providers, and product configuration, alongside related white-label customer interfaces.",
    contribution:
      "Built the admin frontend and worked on white-label customer experiences, translating product workflows into connected screens, forms, and data views.",
    areas: [
      "Customer application management",
      "Tenant and reseller administration",
      "Transaction search and financial records",
      "Provider and service configuration",
      "Operational reporting interfaces",
      "Branded admin and customer experiences",
    ],
    stack: ["React", "JavaScript", "Vite", "Tailwind CSS", "REST APIs"],
    considerations: [
      {
        title: "Shared patterns across brands",
        description:
          "Reusable interface patterns reduce repeated work while allowing product-specific branding and workflows.",
      },
      {
        title: "Dense data, readable screens",
        description:
          "Operational interfaces need meaningful grouping, clear status labels, and useful filters.",
      },
      {
        title: "Public and internal audiences",
        description:
          "Customer interfaces and administrative tools need different information hierarchies and action boundaries.",
      },
    ],
  },
];