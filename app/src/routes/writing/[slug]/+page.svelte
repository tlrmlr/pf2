<script>
	import { fly } from "svelte/transition";
	import Content from "../Content.svelte";

	export let data;
</script>

<article in:fly={{y: -2}}>
	<header>
		<h1>{data.post.title}</h1>
		<p>Posted {data.post.created}</p>
		<a id="backlink" href="/writing">← All Writing</a>
	</header>
	<Content created={data.post.created} updated={data.post.updated} content={data.post.content}/>
</article>

<style>
	article {
		color: rgba(255,255,255,1.0);
		padding: 0 var(--padding);
        display: grid;
        grid-template-columns: var(--rag) 1fr;
        gap: 32px;
	}

	header {
		position: sticky;
		height: calc(100vh - var(--displacement-nav) - 21vh);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		top: calc(var(--displacement-nav) + 21vh);
	}

	h1 {
		margin-bottom: 16px;
	}

	p {
		color: rgba(255,255,255,0.5);
	}

	#backlink {
		margin-top: auto;
		margin-bottom: var(--padding);
	}
</style>