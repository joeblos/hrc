
<script>
	/** @type {import('./$types').PageData} */

  export let data;
  const { components } = data

  // Helper function to draw SVG lines between components
  function drawLine(x1, y1, x2, y2) {
    return `M${x1},${y1} L${x2},${y2}`;
  }
</script>

<div style="width: 100%; padding-bottom: 100%; position: relative;">
  <svg style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;">
    <!-- Draw the central node for 'Component' category -->
    <circle cx="50%" cy="50%" r="1%" fill="blue" />
    <text x="52%" y="52%" fill="black" font-size="1em">Component</text>

    {#each components as component (component.id)}
      <!-- Calculate positions and draw circles for each component based on its 'id' -->
      <circle
        cx={`${50 + 0.1 * component.id}%`}
        cy={`${50 + 0.1 * component.id}%`}
        r="0.5%"
        fill="green" />
      <text x={`${52 + 0.1 * component.id}%`} y={`${52 + 0.1 * component.id}%`} fill="black" font-size="0.8em">
        {component.name}
      </text>

      <!-- Draw lines connecting each component to the central 'Component' node -->
      <path
        d={drawLine(50, 50, 50 + 0.1 * component.id, 50 + 0.1 * component.id)}
        stroke="black"
        stroke-width="0.1%" />
    {/each}
  </svg>
</div>