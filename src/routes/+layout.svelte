<script>
	import { page } from '$app/stores'
  import { fade, fly } from 'svelte/transition';
	import { Intro, Section, Scrollbar, Theme, Button, Social, Icon, Copyright, Container, BG } from '@oneezy/ui'
  import Header from '$lib/components/Header.svelte';
  import Logo from '$lib/Logo.svelte'
  import Nav from '$lib/components/Nav.svelte'
  import Phone from '$lib/components/Phone.svelte'
  import Dialog from '$lib/components/Dialog.svelte'
  import { md, lg } from '$lib/stores/mq';
  import '@oneezy/ui/app.css'
  import "../app.postcss";
  
  let links = [
    { label: 'home',      href: `#home`},
    { label: 'Residential',  href: `#residential`},
    { label: 'Commercial',   href: `#commercial`},
    { label: 'FAQ',       href: `#faq`},
  ]

</script>

<svelte:head>
  <title>HRC Roofing | Call (409) 351-2930 For a FREE Quote!</title>
  <link rel="canonical" href="https://hrcroofing.co/"/>
  <meta name="description" content="Need a roof? We got you covered."/>

  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.hrcroofing.co/"/>
  <meta property="og:site_name" content="hrc roofing"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:title" content="HRC Roofing | Call (409) 351-2930 For a FREE Quote!"/>
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
      <Nav {links} class="lg:flex text-2xl text-black font-mercenary font-medium" />
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="right">
    <Phone 
      link={"4093512930"} 
      text={"409.351.2930"} 
      class="h-8 md:min-h-full absolute md:relative right-0" 
    />
  </svelte:fragment>

</Header>

<!-- Layout -->
<Intro class="min-h-screen">

  <div class="min-h-screen w-full" in:fly="{{ y: 20, delay: 800, duration: 800 }}">
    <slot />
    <footer class="container mx-auto p-4 lg:p-8">
      <Social />
      <Copyright>HRC Roofing</Copyright>
    </footer>
  </div>
</Intro>