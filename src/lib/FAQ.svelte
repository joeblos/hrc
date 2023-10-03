<script>
  import { Section, Container, Title, Accordion, AccordionItem } from '@oneezy/ui';
  import { readable } from "svelte/store";
  import { onMount } from 'svelte';

  export const faqs = readable(
    [
      {
        "id": "1",
        "question": "How much does a new roof cost?",
        "answer": "The cost of a new roof varies based on factors like square footage, pitch, and chosen materials. We provide free consultations for accurate estimates tailored to individual needs."
      },
      {
        "id": "2",
        "question": "How long does it take to install a new residential roof?",
        "answer": "A standard residential roof usually takes one to two days to install, depending on the specifics of the project."
      },
      {
        "id": "3",
        "question": "How long does a commercial roofing project typically take?",
        "answer": "Commercial roofing projects can vary widely in duration. Smaller projects might take a few days, while larger ones can extend up to 30 days or more."
      },
      {
        "id": "4",
        "question": "What types of roofing materials do you offer?",
        "answer": "We provide a range of materials suitable for both residential and commercial properties, including asphalt shingles, metal, tile, and more."
      },
      {
        "id": "5",
        "question": "How do I know if I need a new roof or just a repair?",
        "answer": "Look for signs like missing shingles, leaks, or age. Minor issues often need just a repair, but we recommend a professional assessment for clarity."
      },
      {
        "id": "6",
        "question": "Is your company licensed, insured, and bonded?",
        "answer": "Yes, we're fully licensed, insured, and bonded to ensure the highest level of safety and quality in our work."
      },
      {
        "id": "7",
        "question": "Do you offer warranties on your roofing projects?",
        "answer": "Indeed! We offer warranties on materials and workmanship. Specifics vary based on the chosen roofing solution."
      },
      {
        "id": "8",
        "question": "How do you handle bad weather during a roofing project?",
        "answer": "Safety is our priority. We might pause the installation during adverse conditions, always ensuring properties are weatherproofed daily."
      },
      {
        "id": "9",
        "question": "Do you handle commercial roofing maintenance?",
        "answer": "Yes, we provide comprehensive maintenance services for commercial properties, ensuring the longevity and efficiency of your roof."
      },
      {
        "id": "10",
        "question": "Can you assist with insurance claims for commercial roofing damage?",
        "answer": "Absolutely! We have vast experience working with insurance companies and can guide you through the claim process."
      }
    ]
  );
</script>

<Section id="faq" class="min-h-screen grid overflow-hidden">
  <Container class="w-full">
    <Title 
      subtitle="FAQ"
      tagline="You've got questions, we've got answers." 
    />

    <Accordion>
      {#each $faqs as faq}
      <AccordionItem title="{faq.question}">
        {faq.answer}
      </AccordionItem>
      {/each}
    </Accordion>
    
  </Container>
</Section>