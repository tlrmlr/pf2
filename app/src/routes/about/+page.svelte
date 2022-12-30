<script>
	import { fly } from "svelte/transition";
	import AboutTable from "./AboutTable.svelte";
</script>

<article in:fly={{y: -2}}>
	<div id="intro" class="a">
		<h1>About</h1>
		<p>Tyler is a multi-disciplinary designer building products & brands. Over the past decade, Tyler has focused on building cross-platform products that augment & empower small online communities.</p>
	</div>
	<img src="profile.jpeg" alt="the author, Tyler Miller" class="b">
	<div id="table">
		<AboutTable />
	</div>
</article>

<style>
	article {
		margin-top: 0;	
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: 
			"a b" 
			"c c";
		gap: var(--padding);
		width: 100%;
	}

	h1 {
		grid-column: 1 / span 2;
	}
	
	img {	
		height: 50vh;
		width: 100%;
		object-fit: cover;
		grid-column: span 1;
		justify-self: end;
	}

	p {
		width: 100%;
	}

	#intro {
		margin-top: 21vh;
		padding-left: var(--padding);
		transition: var(--trans-padding);
		width: 100%;
	}

	#table {
		grid-area: c;
		padding: 0px var(--padding);
		transition: var(--trans-padding);
	}

	.a {
		grid-area: a;
	}

	.b {
		grid-area: b;
	}

	@media (max-width: 700px) {
		article {
			grid-template-columns: 1fr;
			grid-template-areas: 
			"b"
			"a"
			"c";
		}
	}

		@media (max-width: 420px) {
		
	}
</style>