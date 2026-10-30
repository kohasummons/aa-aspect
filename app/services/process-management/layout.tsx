import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process Management",
  description:
    "Process management services that streamline workflows, improve efficiency and keep quality consistent across your projects and operations.",
  alternates: {
    canonical: "/services/process-management",
  },
  openGraph: {
    title: "Process Management | AA-Aspect",
    description:
      "Process management services that streamline workflows, improve efficiency and keep quality consistent across your projects and operations.",
    url: "https://www.aa-aspect.com/services/process-management",
    type: "website",
  },
};

export default function ProcessManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
