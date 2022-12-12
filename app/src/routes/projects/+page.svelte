<script>
	import Table from "../Table.svelte";
	import { fly } from "svelte/transition";
</script>

<article in:fly={{y: -2}}>
	<h1>Projects</h1>
	<Table />	
</article>

<style>
	h1 {padding: 0px var(--padding);}
</style>