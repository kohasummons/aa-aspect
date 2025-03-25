import ServiceTemplate from "@/app/components/ui/ServiceTemplate";

export default function ProjectManagement() {
  return (
    <ServiceTemplate
      title="Project Management"
      description="We recognize that every project and client is unique. Therefore, we take a flexible approach to project management, tailoring our methodologies to meet your specific needs while ensuring compliance with industry standards."
      image="/images/project.jpg"
      features={[
        "Comprehensive project planning and execution",
        "Risk assessment and mitigation strategies",
        "Resource allocation and optimization",
        "Stakeholder communication management",
        "Timeline and milestone tracking",
        "Budget management and cost control"
      ]}
      benefits={[
        "Improved project delivery timelines",
        "Enhanced resource utilization",
        "Better stakeholder satisfaction",
        "Reduced project risks",
        "Increased ROI",
        "Streamlined communication"
      ]}
    />
  );
} 