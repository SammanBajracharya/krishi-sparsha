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
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        Yes. It comes with default styles that matches the other
        components&apos; aesthetic.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes. It's animated by default, but you can disable it if you prefer.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}

export default Accordioncard