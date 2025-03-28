import ServiceTemplate from "@/app/components/ui/ServiceTemplate";
import qualitymgt1 from "@/public/images/processmgt5.png";

export default function QualityManagement() {
  return (
    <ServiceTemplate
      title="Quality Management"
      description="Our quality management services focus on optimizing your operational workflows, improving efficiency, and ensuring consistent quality across all business processes."
      image="/images/project.jpg"
      features={[
        "Business process analysis and optimization",
        "Workflow automation solutions",
        "Process standardization and documentation",
        "Performance metrics and KPI tracking",
        "Continuous improvement frameworks",
        "Change management support"
      ]}
      benefits={[
        "Increased operational efficiency",
        "Reduced process bottlenecks",
        "Lower operational costs",
        "Improved quality consistency",
        "Enhanced process visibility",
        "Better compliance management"
      ]} backgroundImage={qualitymgt1.src}    />
  );
} 