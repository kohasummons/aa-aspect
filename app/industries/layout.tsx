import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Support | AA-Aspect",
  description:
    "Piping QA/QC and documentation support for data centres, life sciences, and industrial utility projects. On-site or remote.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
