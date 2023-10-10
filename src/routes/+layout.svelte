<script>
	import { page } from '$app/stores'
  import { fade, fly } from 'svelte/transition';
	import { Intro, Section, Scrollbar, Theme, Button, Social, Icon, Copyright, Container, BG } from '@oneezy/ui'
  import Header from '$lib/components/Header.svelte';
  import Logo from '$lib/Logo.svelte'
  import Nav from '$lib/components/Nav.svelte'
  import Phone from '$lib/components/Phone.svelte'
  import Dialog from '$lib/components/Dialog.svelte'
  import CTA from '$lib/CTA.svelte'
  import { md, lg } from '$lib/stores/mq';
  import '@oneezy/ui/app.css'
  import "../app.postcss";
  
  let links = [
    { label: 'home',      href: `/`},
    { label: 'Residential',  href: `residential-roofing`},
    { label: 'Commercial',   href: `commercial-roofing`},
    { label: 'FAQ',       href: `#faq`},
  ]

  let socials = [
    { "id": "1", "view": "", "name": "facebook", "url": "https://www.facebook.com/asdf/" },
    { "id": "2", "view": "", "name": "twitter", "url":  "https://twitter.com/BotScavenger" },
    { "id": "3", "view": "", "name": "youtube", "url":  "https://www.youtube.com/channel/UCcJgoV7LHcx4OVsgzG2mHLw" }
  ]

</script>

<svelte:head>
  <title>HRC Roofing | Call (409) 444-3343 For a FREE Quote!</title>
  <link rel="canonical" href="https://hrcroofing.co/"/>
  <meta name="description" content="Need a roof? We got you covered."/>

  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.hrcroofing.co/"/>
  <meta property="og:site_name" content="hrc roofing"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:title" content="HRC Roofing | Call (409) 444-3343 For a FREE Quote!"/>
  <meta property="og:description" content="Need a roof? We got you covered."/>
  <meta property="og:image" content="https://www.hrcroofing.co/og/og.png"/>
</svelte:head>


{#if $lg}
  <Scrollbar />
{/if}

<Header 
  class="block px-6 py-10 md:pt-20 md:px-0" 
  header="h-10 md:h-20" 
  bg="bg-brand">

  <svelte:fragment slot="left">
    {#if $md}
      <Logo 
        src="/logo.svg"
        alt="HRC Roofing" 
        slot="left" 
        class="w-32 md:w-52 translate-x-[-20px] bg-black p-4 md:p-6"
      />
    {/if}

    {#if !$md}
      <Dialog type="nav" class="lg:hidden">
        <Nav {links} />
      </Dialog>
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="center">
    {#if !$md}
      <Logo 
        src="/logo.svg"
        alt="HRC Roofing" 
        slot="left" 
        class="w-32 md:w-52 bg-black p-4 md:p-6"
      />
    {/if}

    {#if $md}
      <Nav {links} class="lg:flex text-2xl text-black font-mercenary font-semibold" />
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="right">
    <Phone 
      link={"4094443343"} 
      text={"409.444.3343"} 
      class="h-8 md:min-h-full absolute md:relative right-0" 
    />
  </svelte:fragment>

</Header>

<!-- Layout -->
<Intro class="min-h-screen">

  <div class="min-h-screen w-full" in:fly="{{ y: 20, delay: 800, duration: 800 }}">
    <slot />
  </div>
  <CTA />
  <footer class="bg-black text-white">
    <Container>
      <!-- <Social {...socials} class="fill-white"/> -->
      <Copyright class="text-white">HRC Roofing</Copyright>
    </Container>
  </footer>
</Intro>