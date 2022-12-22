<script>
    import { fly } from "svelte/transition";
    import Content from "./Content.svelte";
    export let data;
</script>

<article in:fly={{y: -2}}>
    <h1>Writing</h1>
    <ul>
        {#each data.summaries as { slug, title, created, updated, content }}
        <li in:fly={{y: -8, delay: 60}}>
            <section>
                <a href="/writing/{slug}"><h2>{title}</h2></a>
                <h6>{created}</h6>
                <Content created={created} updated={updated} content={content}/>
            </section>
        </li>
        {/each}
    </ul>
</article>

<style>
    article {
        padding: 0 var(--padding);
        display: grid;
        grid-template-columns: var(--rag) 1fr;
        gap: 32px;
    }

    h1 {
        grid-column: span 2;
    }

    a {
        text-decoration: none;
    }

    ul {
        margin-top: 16px;
    }
</style>