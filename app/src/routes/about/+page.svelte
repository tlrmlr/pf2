<script>
	import { fly } from "svelte/transition";
</script>

<article in:fly={{y: -2}}>
	<h1>About</h1>
</article>

<style>
	h1 {padding: 0px var(--padding);}
</style>