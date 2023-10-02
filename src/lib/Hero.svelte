<script>
  import { fly, fade } from 'svelte/transition';
  import { Section, Container, Content, Button, Card } from '@oneezy/ui';
  import Divider from '$lib/components/Divider.svelte';
  import Fader from '$lib/components/Fader.svelte';

  let residential = [
    "https://source.unsplash.com/featured/?roof,roofing1",
    "https://source.unsplash.com/featured/?roof,roofing2",
    "https://source.unsplash.com/featured/?roof,roofing3"
  ];

  let commercial = [
    "https://source.unsplash.com/featured/?roof,roofing4",
    "https://source.unsplash.com/featured/?roof,roofing5",
    "https://source.unsplash.com/featured/?roof,roofing6"
  ];

  let activeFeature = "resdiental"; // default feature

  function setActiveFeature(feature) {
    activeFeature = feature;
  }
</script>

<Section {...$$restProps} id="home" class="w-full relative active section--active h-screen overflow-hidden dark">

  {#if activeFeature == 'resdiental'}
  <Fader images={residential} />
    <!-- <div transition:fade={{duration: 1000}}>
    </div> -->
  {:else if activeFeature == 'commercial'}
  <Fader images={commercial} />
    <!-- <div transition:fade={{duration: 1000}}>
    </div> -->
  {/if}

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
      
      <section class="relative z-1 flex gap-4">
        <button 
          id="residential" 
          class="feature bg-yellow-400 p-4" 
          tabindex="0"
          on:mouseover={() => setActiveFeature('residential')}
          on:focus={() => setActiveFeature('residential')}>Feature 1</button> 

        <button 
          id="commercial" 
          class="feature bg-yellow-400 p-4" 
          tabindex="0"
          on:mouseover={() => setActiveFeature('commercial')}
          on:focus={() => setActiveFeature('commercial')}>Feature 2</button>
      </section>
        
      <div class="flex flex-col justify-center lg:flex-row gap-4 prose-none">
        <div class="w-full lg:w-64">
          <Button href="/quote" display="hero" style="background-color: rgb(254 189 23)">Get a Quote</Button>
        </div> 
      </div>
    </Content>
  </Container>

  <div class="w-full h-56 absolute bottom-0 bg-gradient-to-t from-black to-transparent"></div>
</Section>