<script>
  import { fly, fade } from 'svelte/transition';
  import { Section, Container, Content, Button, Card } from '@oneezy/ui';
  import Divider from '$lib/components/Divider.svelte';
  import Fader from '$lib/components/Fader.svelte';

  let residential = [
		"/photos/residential/roof-1.png",
		"/photos/residential/roof-2.png",
		"/photos/residential/roof-3.png",
		"/photos/residential/roof-4.png",
		"/photos/residential/roof-5.png",
  ];

  let commercial = [
		"/photos/commercial/roof-1.jpg",
		"/photos/commercial/roof-2.jpg",
		"/photos/commercial/roof-3.jpg",
		"/photos/commercial/roof-4.jpg",
		"/photos/commercial/roof-5.jpg",
		"/photos/commercial/roof-6.jpg",
  ];
	
  let activeFeature = "residentialRoofing"; // default feature
	
  function setActiveFeature(feature) {
    activeFeature = feature;
  }

  let y;
</script>

<svelte:window bind:scrollY={y} />

<Section {...$$restProps} id="home" class="w-full relative z-0 active section--active h-screen overflow-hidden dark">

  <Container class="h-full relative z-10 md:pt-24" style="translate: 0 {-y / 10}px; transition: .22s ease;">
    <Content class="h-full mx-auto flex flex-col items-center justify-center gap-10 md:gap-20 select-none text--primary">
      <h1 class="text-4xl font-bold sr-only">HRC Roofing</h1>
    
      <h2 class="grid items-center justify-center text-center text-4xl md:text-[10vw] lg:text-[10vw] xl:text-[7vw] tracking-wider font-mercenary font-semibold drop-shadow-[0px_0px_10px_#000000]">
        <span class="-mb-9 md:-mb-12 block uppercase drop-shadow-[0px_0px_50px_#000000] whitespace-nowrap">Need a roof?</span>
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
      
      <!-- SERVICES 
      ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
      <section class="relative z-1 flex gap-14 items-center justify-center">

        <!-- Residential -->
        <a id="residentialRoofing" href="/residential-roofing" tabindex="0"
           class="feature relative flex flex-col items-center gap-3 w-1/4 md:w-auto md:gap-10 {activeFeature === 'residentialRoofing' ? 'active' : ''}" 
           on:mouseover={() => setActiveFeature('residentialRoofing')}
           on:focus={() => setActiveFeature('residentialRoofing')}>
        
          <img src="/icons/domestic.svg" class="max-w-full md:h-36" alt="Residential Roofing" />
          <h3 class="font-mercenary font-medium uppercase text-normal md:text-2xl">Residential</h3>
        </a> 

        <!-- Commercial -->
        <a id="commercialRoofing" href="/commercial-roofing" tabindex="0"
           class="feature relative flex flex-col items-center gap-3 w-1/4 md:w-auto md:gap-10 {activeFeature === 'commercialRoofing' ? 'active' : ''}" 
           on:mouseover={() => setActiveFeature('commercialRoofing')}
           on:focus={() => setActiveFeature('commercialRoofing')}>
        
          <img src="/icons/building.svg" class="max-w-full md:h-36" alt="Commercial Roofing" />
          <h3 class="font-mercenary font-medium uppercase text-normal md:text-2xl">Commercial</h3>
        </a> 
      </section>
      
      <!-- BUTTON: GET A QUOTE -->
      <div class="flex flex-col justify-center lg:flex-row gap-4 prose-none relative z-10">
        <div class="w-full lg:w-64">
          <Button href="tel:4093512930" display="hero" style="background-color: rgb(254 189 23)">Get a Free Quote</Button>
        </div> 
      </div>
    </Content>
  </Container>


  {#if activeFeature === 'residentialRoofing'}
  <div class="absolute inset-0 z-[-3]" transition:fade={{duration: 1000}} style="translate: 0 {y / 2}px;">
    <Fader images={residential} />
  </div>
  {:else if activeFeature === 'commercialRoofing'}
  <div class="absolute inset-0 z-[-3]" transition:fade={{duration: 1000}} style="translate: 0 {y / 2}px;">
    <Fader images={commercial} />
  </div>
  {/if}

  <div class="where w-full h-56 absolute bottom-0 bg-gradient-to-t from-black to-transparent"></div>
  <div class="where w-full h-full absolute inset-0 bg-black/40 z-[-1]"></div>
</Section>

<style>
  .feature                 {  }
  .feature > *             { filter: drop-shadow(-0.83px -0.83px 0px black); }
  
  .feature:before, 
  .feature:after           { filter: blur(30px); opacity: 0; scale: 1.5; transition: 1s ease-in-out; content: ""; display: block; position: absolute; inset: 0; z-index: -2; background: radial-gradient(closest-side, rgba(0,0,0,1), transparent); }

  .feature:before          { opacity: 0; scale: 5; background: radial-gradient(closest-side, rgba(254, 189, 23, 1), transparent); }
  .feature:after           { opacity: 1; scale: 1.5; background: radial-gradient(closest-side, rgba(0,0,0,1), transparent); }

  .feature.active:before   { opacity: 1; scale: 1.5; }
  .feature.active:after    { opacity: 1; scale: 1.5; background: radial-gradient(closest-side, rgb(255, 227, 66), transparent); }
</style>, 