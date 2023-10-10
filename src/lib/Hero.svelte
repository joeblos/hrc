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

  const roofingTypes = [
    {
      "id": "residentialRoofing",
      "href": "/residential-roofing",
      "icon": "/icons/domestic.svg",
      "alt": "Residential Roofing",
      "label": "Residential"
    },
    {
      "id": "commercialRoofing",
      "href": "/commercial-roofing",
      "icon": "/icons/building.svg",
      "alt": "Commercial Roofing",
      "label": "Commercial"
    }
  ];

  const awards = [
    {
      "href": "https://www.bbb.org/us/tx/beaumont/profile/roofing-contractors/hrc-roofing-construction-0845-6001427",
      "src": "/companies/bbb.svg",
      "alt": "Better Business Bureau A+ Rating"
    },
    {
      "href": "/",
      "src": "/companies/licensed-bonded-insured.svg",
      "alt": "Licensed, Bonded, and Insured"
    },
    {
      "href": "/",
      "src": "/companies/texas.svg",
      "alt": "Serving Southeast Texas"
    },
    {
      "href": "/",
      "src": "/companies/30-years.svg",
      "alt": "30 Years of Business"
    }
  ];

  let y;
</script>

<svelte:window bind:scrollY={y} />

<Section {...$$restProps} id="home" class="w-full relative z-0 active section--active h-screen overflow-hidden dark">

  <Container class="h-full relative z-10" style="translate: 0 {-y / 10}px; transition: .22s ease;">
    <Content class="h-full mx-auto flex flex-col items-center justify-center pt-[15vh] pb-[10vh] gap-10 select-none text--primary">
      <h1 class="sr-only">HRC Roofing</h1>
      
      <!-- TAGLINE 
      ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
      <div class="flex flex-col items-center justify-end gap-3">
        <h2 class="grid items-center justify-center text-center text-6xl md:text-[10vw] lg:text-[10vw] xl:text-[7vw] tracking-wider font-mercenary font-semibold uppercase">
          Need a roof?
        </h2>
        
        <p class="inline-block text-center font-mercenary font-black tracking-wide
          text-[5vw] 
          sm:text-[4vw] 
          md:text-[3vw]
          lg:text-3xl">
          <span class="uppercase">We got you <b class="text-brand">covered</b>.</span>
        </p>
      </div>
      
      <!-- SERVICES 
      ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
      <section class="relative z-1 flex gap-24 items-center justify-center">
        {#each roofingTypes as roofing}
          <a id={roofing.id} href={roofing.href} tabindex="0"
            class="feature relative flex flex-col items-center gap-3 w-1/4 md:w-auto md:gap-10 {activeFeature === roofing.id ? 'active' : ''}" 
            on:mouseover={() => setActiveFeature(roofing.id)}
            on:focus={() => setActiveFeature(roofing.id)}>

            <!-- Icon -->
            <img src={roofing.icon} class="max-w-full md:h-56" alt={roofing.alt} />
            <!-- Service -->
            <h3 class="font-mercenary font-bold uppercase text-normal md:text-[2.5vh]">{roofing.label}</h3>
          </a>
        {/each}
      </section>
      
      <!-- BUTTON 
      ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
      <Button 
        href="tel:4094443343" 
        display="hero" 
        style="background-color: rgba(var(--color-brand));"
        class="text-[2.5vh] font-mercenary font-black uppercase py-10
          dark:bg-brand 
          dark:hover:bg-brand 
          dark:border-brand
          dark:text-black 
          dark:hover:text-black">
          Get a Free Quote
      </Button>
      
      
      <!-- AWARDS 
      ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
      <section class="z-50 flex items-center justify-center gap-8">
        {#each awards as award}
          <a href={award.href} tabindex="0" class="w-48 lg:w-40 flex items-center justify-center">
            <img 
              src={award.src}
              alt={award.alt}
              class="mx-8 inline" 
            />
          </a>
        {/each}
      </section>
    </Content>
  </Container>


  {#if activeFeature === 'residentialRoofing'}
    <div class="absolute inset-0 z-[-3]" transition:fade={{duration: 1000}} style="translate: 0 {y / 2}px;  transition: .11s ease-out;">
      <Fader images={residential} />
    </div>
  {:else if activeFeature === 'commercialRoofing'}
    <div class="absolute inset-0 z-[-3]" transition:fade={{duration: 1000}} style="translate: 0 {y / 2}px;  transition: .11s ease-out;">
      <Fader images={commercial} />
    </div>
  {/if}

  <div class="w-full h-56 absolute bottom-0 bg-gradient-to-t from-black to-transparent"></div>
  <div class="w-full h-full absolute inset-0 bg-black/40 z-[-1]"></div>
</Section>

<style>
  .feature > img { filter: drop-shadow( 3px 3px 0px black); }
  
  .feature:before, 
  .feature:after           { mix-blend-mode: screen; filter: blur(30px); opacity: 0; scale: 1.5; transition: 1s ease-in-out; content: ""; display: block; position: absolute; inset: 0; z-index: -2; }

  .feature:before          { opacity: 0; scale: 3; background: radial-gradient(closest-side, rgba(254, 189, 23, 1), transparent); }
  /* .feature:after           { opacity: 1; scale: 1.5; background: radial-gradient(closest-side, rgba(0,0,0,1), transparent); } */

  .feature.active:before   { opacity: 1; scale: 1.5; }
  .feature.active:after    { opacity: 1; scale: 1.5; background: radial-gradient(closest-side, rgb(255, 227, 66), transparent); }

  .feature.active h3       { color: black; filter: unset; }
</style>