
<script>
  /** @type {import('./$types').PageData} */

  export let data;
  const { components } = data

  // Helper function to draw SVG lines between components
  function drawLine(x1, y1, x2, y2) {
    return `M${x1},${y1} L${x2},${y2}`;
  }
</script>

<svg width="1000" height="1000">
  <!-- Draw the central node for 'Component' category -->
  <circle cx="500" cy="500" r="20" fill="blue" />
  <text x="510" y="505" fill="black">Component</text>

  {#each components as component (component.id)}
    <!-- Calculate positions and draw circles for each component based on its 'id' -->
    <circle
      cx={500 + 30 * component.id}
      cy={500 + 30 * component.id}
      r="10"
      fill="green" />
    <text x={510 + 30 * component.id} y={505 + 30 * component.id} fill="black">
      {component.name}
    </text>

    <!-- Draw lines connecting each component to the central 'Component' node -->
    <path
      d={drawLine(500, 500, 500 + 30 * component.id, 500 + 30 * component.id)}
      stroke="black"
      stroke-width="2" />
  {/each}
</svg>
