<script>
    import { fly } from "svelte/transition";
    export let data;
</script>

<article in:fly={{y: -2}}>
    <h1>Writing</h1>
    <ul>
        {#each data.summaries as { slug, title }}
            <li><a href="/writing/{slug}">{title}</a></li>
        {/each}
    </ul>
</article>

<style>
    h1 {padding: 0px var(--padding);}
</style>