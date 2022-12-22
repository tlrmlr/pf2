<script>
	import Table from "./ProjectTable.svelte";
	import { fly } from "svelte/transition";
</script>

<article in:fly={{y: -2}}>
	<h1 class="sticky">Projects</h1>
	<Table />	
</article>

<style>
	h1 {padding: 0px var(--padding);}
</style>