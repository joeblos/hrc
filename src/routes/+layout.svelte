<script>
	import { page } from '$app/stores'
  import { fade, fly } from 'svelte/transition';
	import { Intro, Section, Scrollbar, Dialog, Theme, Button, Social, Icon, Copyright, Container, BG } from '@oneezy/ui'
  import Header from '$lib/components/Header.svelte';
  import Logo from '$lib/Logo.svelte'
  import Nav from '$lib/components/Nav.svelte'
  import { md, lg } from '$lib/stores/mq';
  // import { mq } from '$lib/stores/mq'
  import '@oneezy/ui/app.css'
  import "../app.postcss";
  
  let links = [
    { label: 'home',      href: `#home`},
    { label: 'features',  href: `#features`},
    { label: 'pricing',   href: `#pricing`},
    { label: 'about',     href: `#about`},
    { label: 'FAQ',       href: `#faq`},
  ]

</script>

<svelte:head>
  <title>HRC Roofing</title>
  <link rel="canonical" href="https://hrcroofing.co/"/>
  <meta name="description" content="Projects by hrc roofing."/>

  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="https://www.hrcroofing.co/"/>
  <meta property="og:site_name" content="hrc roofing"/>
  <meta property="og:image:width" content="1200"/>
  <meta property="og:image:height" content="630"/>
  <meta property="og:title" content="Projects | hrc roofing"/>
  <meta property="og:description" content="Projects by hrc roofing."/>
  <meta property="og:image" content="https://www.hrcroofing.co/opengraph.png"/>
</svelte:head>


{#if $lg}
  <Scrollbar />
{/if}

<Header 
  class="block px-4 py-6 md:pt-20 md:px-0" 
  header="h-10 md:h-20" 
  bg="bg-yellow-400 -skew-x-[11deg]">

  <Logo 
    src="/logo.svg"
    alt="HRC Roofing" 
    slot="left" 
    class="w-32 md:w-52"
  />
  
  <svelte:fragment slot="center">
    {#if $md}
      <Nav {links} class="lg:flex text-2xl font-semibold text-black" />
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="right" >
    {#if !$md}
      <Dialog type="nav" class="lg:hidden">
        <Nav {links} />
      </Dialog>
    {/if}
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