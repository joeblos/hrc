<script>
  import Link from '$lib/components/Link.svelte';

  export let links = [
    { label: 'home', href: '/'},
    { label: 'about', href: '/about'},
    { label: 'contact', href: '/contact'},
  ]

  export let linkClass = '';
</script>

<nav class="flex flex-col items-center justify-center md:flex-row gap-8 uppercase { $$props.class || '' }">
	{#each links as link}
		<Link href={link.href} class={linkClass} data-sveltekit-prefetch>
			{link.label}
		</Link>
	{/each}
</nav>