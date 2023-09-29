<script>
  import { onMount } from 'svelte';

  export let images = [
    '/photos/residential/roof-1.png',
    '/photos/residential/roof-2.png',
    '/photos/residential/roof-3.png',
    '/photos/residential/roof-4.png',
    '/photos/residential/roof-5.png'
  ];

  let currentIndex = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
    }, 7000); // Change the image every 5 seconds

    return () => {
      clearInterval(interval); // Cleanup the interval on component destroy
    };
  });
</script>

<div class="absolute inset-0 w-screen h-screen z-[-1]">
  {#each images as image, index}
    <img 
      src="{image}" 
      alt="" 
      class="absolute inset-0 w-full h-full object-fit object-cover transition-opacity duration-1000 
      {currentIndex === index ? 'opacity-100' : 'opacity-0'}" />
  {/each}
</div>