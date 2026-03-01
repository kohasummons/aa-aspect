import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | AA-Aspect",
  description:
    "QA/QC and documentation support for EPC, MEP, and mechanical contractors. Piping inspection, test pack management, commissioning support, and remote document control.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | AA-Aspect",
    description:
      "QA/QC and documentation support for EPC, MEP, and mechanical contractors throughout construction, mechanical completion, and commissioning.",
    url: "https://aa-aspect.com/services",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
