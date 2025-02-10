import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Accordioncard() {

  return (
    <Accordion type="single" collapsible className="flex justify-center flex-col">
    <AccordionItem value="item-1">
      <AccordionTrigger>What is KrishiSparsha?</AccordionTrigger>
      <AccordionContent>
      KrishiSparsha is a user-friendly platform designed to bridge the gap between farmers and consumers, enabling direct interaction and trade.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger> How does Krishi work?  </AccordionTrigger>
      <AccordionContent>
      Krishi connects farmers directly with consumers, cutting out middlemen and ensuring fair prices for both parties.  
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>How do farmers join the platform?  </AccordionTrigger>
      <AccordionContent>
      Farmers can register on Krishi, create a profile, and start listing their available crops.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger> Is home delivery available?  </AccordionTrigger>
      <AccordionContent>
      Yes! Consumers can choose home delivery or farm pick-up based on their location and preference.  
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
      <AccordionTrigger> How does Krishi help reduce food wastage?  </AccordionTrigger>
      <AccordionContent>
      Farmers get real-time demand insights, preventing overproduction and waste. Plus, unsold items can be redistributed locally.  
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}

export default Accordioncard