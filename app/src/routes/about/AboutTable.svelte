<script>
    import { fly } from "svelte/transition";
    import { aboutArray } from './data.js';
</script>

<div class="grid">
    {#each aboutArray as section, i}
        <section in:fly={{y: -2, delay: 60 * i  }}>
            <h2>{section.title}</h2>
            <ol>
                {#each section.data as item}
                    {#if typeof item === 'object'}
                         <li>
                            <span>{item.subject} 
                                <span style="color: rgba(255,255,255,0.4)">@</span>{item.title}
                            </span>
                            <hr>
                            <span>{item.date}</span></li>
                    {:else}
                        <li>{item}</li>
                    {/if}
                {/each}
            </ol>
        </section>
    {/each}
</div>

<style>
    section {
        border-bottom: var(--material-edge);
        display: grid;
        gap: 48px;
        grid-template-columns: 1fr 1fr;
        justify-content: start;
        padding-bottom: 32px;
    }

    section:last-child {
        border: none;
    }

    section:hover li {
        color: rgba(255,255,255,1.0);
        transition: color 60ms ease-in-out;
    }

    li {
        transition: color 300ms ease-in-out;
        display: grid;
        grid-template-columns: max-content 1fr max-content;
        gap: 8px;
        align-items: center;
    }

    hr {
        width: 100%;
        height: 0px;
        border: none;
        border-top: var(--material-edge);
        min-width: 16px;
    }

    .grid {
        display: grid;
        gap: 32px;
    }
</style>