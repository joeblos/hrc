<script>
	import { Section, Container, Title, Icon } from '@oneezy/ui'
	import { logos } from '$lib/logos'

  let comingsoon;
</script>

<Section id="trustedby" class="flex flex-col items-center justify-center min-h-[unset_!important] h-[unset_!important] py-[unset_!important]">
  <Title subtitle="Trusted By" />

  <Container class="flex items-center justify-center flex-col md:flex-row md:gap-7 ">
    {#each $logos as logo}
        {#if logo.name == 'deribit' || logo.name == 'binance' || logo.name == 'kraken' }
        <div class="flex flex-col items-center justify-center relative opacity-50 dark:opacity-40 order-2 pointer-events-none select-none">
          <Icon name={logo.name} viewBox="0 0 180 68" width="180" class="max-w-full" />
          <span class="absolute inline-block top-[70px] text--neutral text-sm">Coming Soon</span>
        </div>

        {:else}
        <Icon name={logo.name} viewBox="0 0 180 68" width="180" class="max-w-full order-1" />
        {/if}
    {/each}
  </Container>
</Section>
