import ServiceTemplate from "@/app/components/ui/ServiceTemplate";
import qualitymgt1 from "@/public/images/processmgt5.png";

export default function QualityEngineering() {
  return (
    <ServiceTemplate
      title="QUALITY ENGINEERING"
      description="We provide expert quality guidance that transforms challenges into opportunities and aligns every decision with measurable success."
      image="/images/productmagt2.png"
      features={[
        "Smarter Business Process Analysis & Optimization.",
        "Next-Gen Workflow Automation Solutions.",
        "Preventive Quality Assurance/ Risk Mitigation",
        "Automation and Technology Integration",
        "Continuous Improvement Frameworks",
        "Change Management Support That Delivers"
      ]}
      benefits={[
        "We align operations with industry and international standards ensuring full regulatory compliance and strengthening client trust.",
        "We simplify repetitive tasks with intelligent automation that saves time, reduces errors, and enhances accuracy.",
        "We identify and resolve defects early in the development cycle ensuring quality is at its utmost standard",
        "We ensure efficient quality engineering minimizes rework, waste, and downtime.",
        "Fostering a culture of innovation and progress with structured, ongoing evaluation and refinement.",
        "Navigate transitions confidently with expert guidance and structured change implementation strategies."
      ]} 
      backgroundImage={qualitymgt1.src}    
    />
  );
}

