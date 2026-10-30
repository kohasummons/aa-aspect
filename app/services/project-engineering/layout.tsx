import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Engineering",
  description:
    "Project engineering with rigorous standards and precision checks, so piping and mechanical projects meet quality and compliance requirements.",
  alternates: {
    canonical: "/services/project-engineering",
  },
  openGraph: {
    title: "Project Engineering | AA-Aspect",
    description:
      "Project engineering with rigorous standards and precision checks, so piping and mechanical projects meet quality and compliance requirements.",
    url: "https://www.aa-aspect.com/services/project-engineering",
    type: "website",
  },
};

export default function ProjectEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
