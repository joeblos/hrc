<script>
  import { Container } from '@oneezy/ui'

  export let position = 'top';
  export let header = '';
  export let bg = '';
  
  let _containerClass = `flex items-center justify-center relative`
</script>

<header {...$$restProps} class="fixed w-full left-0 right-0 z-10 {$$props.class || ''}

{  /* Icon 
  *************************/
  position == 'top' ? 'top-0' : 
  position == 'bottom' ? 'bottom-0' : 'top-0' }">

 
  {#if $$slots.left || $$slots.center || $$slots.right}
  <Container class="{_containerClass} {header}">
    <div class="pointer-events-none absolute z-[-1] h-full w-full {bg}"></div>
    <section class="flex-1 flex justify-start relative"><slot name="left">left</slot></section>
    <section class="grow flex justify-center relative"><slot name="center">center</slot></section>
    <section class="flex-1 flex justify-end relative"><slot name="right">right</slot></section>
  </Container>

  {:else}
  <Container class="{_containerClass} {header}">
    <div class="pointer-events-none absolute z-[-1] h-full w-full {bg}"></div>
    <slot />
  </Container>
  {/if}

</header>