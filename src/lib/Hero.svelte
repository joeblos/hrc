<script>
  import { fly } from 'svelte/transition';
  import { Section, Container, Content, Button, Card } from '@oneezy/ui';
  import Divider from '$lib/components/Divider.svelte';
  import Fader from '$lib/components/Fader.svelte';

  let src = `/photos/residential/roof-1.png`;
</script>

<Section {...$$restProps} id="home" class="w-full relative active section--active h-screen overflow-hidden dark">

  <Fader />
  <div class="bg-black/40 absolute inset-0 z-[-1]"></div>

  <Container class="h-full">
    <Content class="h-full mx-auto flex flex-col lg:items-center justify-center gap-6 select-none text--primary">
      <h1 class="text-4xl font-bold sr-only">HRC Roofing</h1>
    
      <h2 class="grid items-center justify-center text-center text-6xl md:text-[14vw] lg:text-[12vw] xl:text-[7vw] tracking-wider font-mercenary font-semibold drop-shadow-[0px_0px_10px_#000000]">
        <span class="-mb-9 md:-mb-12 block uppercase drop-shadow-[0px_0px_50px_#000000]">Need a roof?</span>
      </h2>
      
      <p class="inline-block text-center font-mercenary font-black tracking-wide mt-10
        text-[5vw] 
        sm:text-[4vw] 
        md:text-[3vw]
        md:mt-20 
        lg:text-3xl
        ">
        <span class="uppercase">We got you <b class="text-brand">covered</b>.</span>
      </p>
      
      <div class="flex">
        <!-- <Card>test</Card>
        <Card>test</Card> -->
      </div>
        
      <div in:fly="{{ y: 10, delay: 900, duration: 800 }}" class="flex flex-col justify-center lg:flex-row gap-4 prose-none">
        <div in:fly="{{ y: 10, delay: 900, duration: 800 }}" class="w-full lg:w-64">
          <Button href="/about" button="outline" display="hero" class="">Learn More</Button>
        </div>
        <div class="w-full lg:w-64">
          <Button href="/quote" display="hero" style="background-color: rgb(254 189 23)">Get a Quote</Button>
        </div> 
      </div>
    </Content>
  </Container>

  <div class="w-full h-56 absolute bottom-0 bg-gradient-to-t from-black to-transparent"></div>
</Section>