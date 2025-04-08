import ServiceTemplate from "@/app/components/ui/ServiceTemplate";
import qualitymgt1 from "@/public/images/processmgt5.png";

export default function QualityManagement() {
  return (
    <ServiceTemplate
      title="Quality Management"
      description="Through a focus on optimizing operational workflows, our quality management services enhance efficiency and guarantee consistent quality throughout all your business processes."
      image="/images/productmagt2.png"
      content={{
        coreServices: [
          "Functionality of a System: Assessing and ensuring that all components of your systems are optimized for peak performance.",
          "5 Why Analysis: A root cause analysis technique that helps you identify the fundamental reasons behind any issues, leading to more effective solutions.",
          "Fault Detection: Proactively identifying potential faults within processes to prevent disruptions to your operations.",
          "Quality Audits and Assessments: Comprehensive evaluations of your organization's quality processes to ensure compliance and effectiveness.",
          "Quality Assurance (QA): Systematic measures to ensure that your products and services consistently meet specified requirements.",
          "Quality Control (QC): Techniques and activities used to fulfill quality requirements, ensuring that outputs meet high standards.",
          "Risk Assessment (RA): Designed to identify, evaluate, and prioritize risks, enabling you to mitigate potential issues before they impact your operations."
        ]
      }}
      features={[
        "Business process analysis and optimization",
        "Workflow automation solutions",
        "Process standardization and documentation",
        "Performance metrics and KPI tracking",
        "Continuous improvement frameworks",
        "Change management support"
      ]}
      benefits={[
        "Improved customer satisfaction",
        "Increased efficiency",
        "Compliance with regulations and standards",
        "Increased competitiveness",
        "Improved risk management",
        "Better financial performance"
      ]} 
      backgroundImage={qualitymgt1.src}    
    />
  );
} 