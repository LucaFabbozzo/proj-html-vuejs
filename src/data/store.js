import { reactive } from "vue";

export const store = reactive({
  navbar: [
    {
      route: "home",
      label: "Home",
      active: false,
    },
    {
      route: "landing",
      label: "Landing",
      active: true,
      items: ["landing - 1", "landing - 2", "landing - 3"],
    },
    {
      route: "page",
      label: "page",
      active: false,
      items: ["page-1", "page-2", "page-3"],
    },
    {
      route: "docs",
      label: "Docs",
      active: false,
      items: ["docs-1", "docs-2", "docs-3"],
    },
  ],
  companyNavbar: [
    "About us",
    "Services",
    "Team",
    "Pricing",
    "Project",
    "Careers",
    "Blog",
    "Login",
  ],
  usefullNavbar: [
    "Terms of Services",
    "Privacy Policy",
    "Documentation",
    "Changelog",
    "Components",
  ],
  quickStartNavbar: [
    {
      route: "npm",
      label: "npm",
      active: true,
    },
    {
      route: "nuget",
      label: "nuget",
      active: false,
    },
    {
      route: "spm",
      label: "spm",
      active: false,
    },
    {
      route: "github",
      label: "github",
      active: false,
    },
  ],
  rates: [
    {
      plan: "Basic",
      prize: "9.00",
      paid: "Per Month",
      description: "All the basic for business that are just getting started.",
      list: [
        "Full Access",
        "Enhaced Security",
        "Source Files",
        "Domain Free",
        "Enhaced Security",
      ],
      button: "Buy Now",
      creditCard: true,
      best: false,
    },
    {
      plan: "Business",
      prize: "39.00",
      paid: "Per Month",
      description: "Better for growing businesses that want more customers.",
      list: [
        "Full Access",
        "Enhaced Security",
        "Source Files",
        "Domain Free",
        "Enhaced Security",
      ],
      button: "Buy Now",
      creditCard: true,
      best: true,
    },
    {
      plan: "Enterprise",
      prize: "79.00",
      paid: "Per Month",
      description: "Advanced features for pros who need more customization",
      list: [
        "Full Access",
        "Enhaced Security",
        "Source Files",
        "Domain Free",
        "Enhaced Security",
      ],
      button: "Buy Now",
      creditCard: true,
      best: false,
    },
  ],
});

