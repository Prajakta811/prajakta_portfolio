export type ProjectScreenshot = {
  src: string;
  title: string;
  description: string;
};

export const projectScreenshots: Record<string, ProjectScreenshot[]> = {
  "trexo-admin": [
    {
      src: "/projects/trexo-admin/customers.png",
      title: "Customer workspace",
      description: "Customer management within the new admin experience.",
    },
    {
      src: "/projects/trexo-admin/reconciliation.png",
      title: "Reconciliation",
      description: "Reconciliation records within the operational workspace.",
    },
    {
      src: "/projects/trexo-admin/statement.png",
      title: "Account statement",
      description: "Account activity and transaction statement interface.",
    },
  ],

  "sai-siddhi": [
    {
      src: "/projects/sai-siddhi/staff.png",
      title: "Staff administration",
      description: "The staff management interface.",
    },
    {
      src: "/projects/sai-siddhi/customer-summary.png",
      title: "Customer summary",
      description: "A consolidated view of customer information.",
    },
    {
      src: "/projects/sai-siddhi/reconciliationsss.png",
      title: "Reconciliation",
      description: "The interface for reviewing reconciliation records.",
    },
    {
      src: "/projects/sai-siddhi/transfer.png",
      title: "Transfer workflow",
      description: "The transfer interface within the banking platform.",
    },
  ],

  "trexo-edge": [
    {
      src: "/projects/trexo-edge/dashboard.png",
      title: "Customer dashboard",
      description: "The customer-facing financial workspace.",
    },
    {
      src: "/projects/trexo-edge/payment-processing.png",
      title: "Payment processing",
      description: "The customer experience during payment processing.",
    },
    {
      src: "/projects/trexo-edge/direct-transfer.png",
      title: "Direct transfer",
      description: "The interface for initiating a direct transfer.",
    },
    {
      src: "/projects/trexo-edge/transfer-modal.png",
      title: "Transfer interaction",
      description: "A focused interaction within the transfer workflow.",
    },
  ],

  "financial-operations": [
    {
      src: "/projects/white-label/theme.png",
      title: "Brand configuration",
      description:
        "Configuration for applying branding across dashboard and admin interfaces.",
    },
    {
      src: "/projects/white-label/w-application.png",
      title: "Application workspace",
      description: "The application interface within the white-label platform.",
    },
    {
      src: "/projects/white-label/wallet.png",
      title: "Wallet experience",
      description: "The wallet interface within the branded platform.",
    },
  ],
};