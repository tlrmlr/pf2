<script>
	import Table from "./ProjectTable.svelte";
	import { fly } from "svelte/transition";
</script>

<article in:fly={{y: -2}}>
	<h1 class="sticky">Projects</h1>
	<div class="table-scroll">
		<Table />	
	</div>
</article>

<style>
	h1 {
		padding: 0px var(--padding);
		transition: var(--trans-padding);
	}

	.table-scroll {
		width: 100vw;
		overflow-x: scroll;
	}
</style>