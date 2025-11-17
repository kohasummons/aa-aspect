import ServiceTemplate from "@/app/components/ui/ServiceTemplate";
import processmgt1 from "@/public/images/processmgt6.png";

export default function ProcessEngineering() {
  return (
    <ServiceTemplate
      title="PROCESS ENGINEERING"
      description="We manage every stage with discipline and clarity ensuring on-time delivery, optimized resources, and superior outcomes."
      image="/images/processmgt1.png"
      features={[
        "Business Process Analysis & Optimization",
        "Workflow Automation Solutions",
        "Process Standardization & Documentation",
        "Standardization and Compliance",
        "Continuous Improvement Frameworks",
        "Change Management Support"
      ]}
      benefits={[
        "Business Process Analysis & Optimization streamline operations and uncover smarter, faster ways to work.",
        "Ensuring processes meet industry standards, safety regulations, and environmental guidelines, maintaining operational integrity and legal compliance.",
        "Process engineering ensures a proper Build structure and consistency into every part of your workflow.",
        "Incorporating automation, instrumentation, and digital monitoring tools to improve accuracy, reduce manual intervention, and optimize process performance.",
        "Continuous Improvement Frameworks Foster innovation and agility with a culture of ongoing refinement.",
        "Change Management Support Navigates transformation confidently with expert support and proven strategies."
      ]} 
      backgroundImage={processmgt1.src}    
    />
  );
}

