import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project and Product Management",
  description:
    "Flexible project and product management tailored to each client, keeping delivery aligned with industry standards from start to finish.",
  alternates: {
    canonical: "/services/project-management",
  },
  openGraph: {
    title: "Project and Product Management | AA-Aspect",
    description:
      "Flexible project and product management tailored to each client, keeping delivery aligned with industry standards from start to finish.",
    url: "https://www.aa-aspect.com/services/project-management",
    type: "website",
  },
};

export default function ProjectManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
