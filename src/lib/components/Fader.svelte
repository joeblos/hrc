<script>
  import { onMount } from 'svelte';

  export let images = [
		"https://source.unsplash.com/featured/?man,roofing1",
		"https://source.unsplash.com/featured/?man,roofing2",
		"https://source.unsplash.com/featured/?man,roofing3"
  ];

  let currentIndex = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
    }, 3000); // Change the image every 3 seconds

    return () => {
      clearInterval(interval); // Cleanup the interval on component destroy
    };
  });
</script>

<div class="absolute inset-0 w-screen h-screen z-[-2]">
  {#each images as image, index}
    <img 
      src="{image}" 
			loading="lazy"
      alt="" 
      class="absolute inset-0 w-full h-full object-fit object-cover transition-opacity duration-1000
      {currentIndex === index ? 'opacity-100' : 'opacity-0'}" />
  {/each}
</div>