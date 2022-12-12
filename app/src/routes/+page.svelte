<script>
	import Welcome from "./Welcome.svelte";
	import { fly } from "svelte/transition";
	import Gallery from "./Gallery.svelte";
</script>
<article in:fly={{y: -2}}>
	<Welcome />
	<Gallery />
</article>

<style>
	article {
		padding: 0px var(--padding);
		display: grid;
		grid-template-rows: min-content;
		gap: 21vh;
	}
</style>