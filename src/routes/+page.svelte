
<script>
	/** @type {import('./$types').PageData} */

	// import { APP_NAME, APP_TITLE, APP_SEPARATOR, APP_DESCRIPTION } from 'FIX'
	import { page } from '$app/stores'
	import { App } from '@oneezy/ui'
  
	import Hero from '$lib/Hero.svelte'
	// import TrustedBy from '$lib/TrustedBy.svelte'
	// import Features from '$lib/Features.svelte'
	// import Pricing from '$lib/Pricing.svelte'
	// import About from '$lib/About.svelte'
	import FAQ from '$lib/FAQ.svelte'
	// import Testimonials from '$lib/Testimonials.svelte'
	import CTA from '$lib/CTA.svelte'

	export let data;
  const { products } = data
</script>
<!-- 
<svelte:head>
	<title>{APP_NAME} {APP_SEPARATOR} {APP_TITLE}</title>
	<meta name="description" content={APP_DESCRIPTION} />
	<meta property="og:title" content="{APP_NAME} {APP_SEPARATOR} {APP_TITLE}" />
	<meta property="og:description" content={APP_DESCRIPTION} />
	<meta property="og:image" content="{$page.url.origin}/og.png" />
</svelte:head> -->

<App id="site">

  <!-- <div class="mx-auto p-20 bg-slate-100">
  {#each products as product}
    <h2 class="text-2xl">{product.title}</h2>
    <p>{product.description}</p>
  {/each}
  </div> -->

  <Hero id="home" />

  
  <!-- <TrustedBy id="trustedby" /> -->
  <!-- <Features id="features" /> -->
  <!-- <Pricing id="pricing" /> -->
  <!-- <About id="about" /> -->
  <FAQ id="faq" />
  <!-- <Testimonials id="testimonials" /> -->
  <CTA id="cta" />
</App>
