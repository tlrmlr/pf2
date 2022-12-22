<script>
    import { fly } from "svelte/transition";
    import Content from "./Content.svelte";
    export let data;
</script>

<article in:fly={{y: -2}}>
    <h1 class="sticky">Writing</h1>
    <ul>
        {#each data.summaries as { slug, title, created, updated, content }}
        <li in:fly={{y: -8, delay: 60}}>
            <section>
                <div class="timeline">
                    <h6>{created}</h6>
                    <hr>
                </div>
                <div>
                    <a href="/writing/{slug}"><h2>{title}</h2></a>
                    <Content created={created} updated={updated} content={content}/>
                </div>
            </section>
        </li>
        {/each}
    </ul>
</article>

<style>
    article {
        padding: 0 var(--padding);
        display: grid;
        gap: 32px;
    }

    h6 {
        /* font-family: monospace; */
        font-weight: 400;
        font-size: 16px;
        margin-top: 2px;
    }

    section {
        display: grid;
        grid-template-columns: 1fr var(--rag) 1fr;
        gap: 8px;
    }

    h2 {
        color: rgba(255,255,255,0.5)
    }

    section:hover h2, section:hover p {
        color: rgba(255,255,255,1.0)
    }

    a {
        text-decoration: none;
    }

    ul {
        margin-top: 16px;
    }

    .timeline {
        display: grid;
        grid-template-columns: min-content 1fr;
        gap: 8px;
    }

    hr {
        height: 1px;
        border: none;
        border-bottom: var(--material-edge);
        width: 100%;
        margin-top: 12px;
    }
</style>