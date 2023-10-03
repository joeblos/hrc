<script>
  import { fly, fade } from 'svelte/transition';
  import { Section, Container, Content, Button, Card } from '@oneezy/ui';
  import Divider from '$lib/components/Divider.svelte';
  import Fader from '$lib/components/Fader.svelte';

  let activeFeature = "feature1"; // default feature
	
  function setActiveFeature(feature) {
    activeFeature = feature;
  }
</script>

<a href="/residential-roofing"
   id="feature1" 
   class="feature bg-yellow-400 p-4" 
   tabindex="0"
   on:mouseover={() => setActiveFeature('feature1')}
   on:focus={() => setActiveFeature('feature1')}>Feature 1</a>

