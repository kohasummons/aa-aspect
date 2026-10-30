import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Experience",
  description:
    "QA/QC and documentation support across data centres, pharmaceutical facilities, industrial plants, and automotive manufacturing. On-site and remote delivery.",
  alternates: {
    canonical: "/project-experience",
  },
  openGraph: {
    title: "Project Experience",
    description:
      "A selection of projects where we have provided QA/QC and documentation support for piping and mechanical utility systems.",
    url: "https://www.aa-aspect.com/project-experience",
    type: "website",
  },
};

export default function ProjectExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
