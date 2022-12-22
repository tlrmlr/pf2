<script>
    import { fly } from "svelte/transition";

    export let content;
    let blockList = content;

    export let created;
    let thisCreated = created;

    export let updated;
    let thisUpdated = updated;
</script>

<section>
    {#each blockList as block, i}
        {#if block.type === 'p'}
            <p  in:fly={{y: -8, delay: 60 * i  }}>{@html block.content}</p>
        {:else if block.type === 'img'}
            <img  in:fly={{y: -8, delay: 60 * i  }} src={block.content}/>
        {/if}
    {/each}
    <h6 class="created">Written {thisCreated}</h6>
    {#if thisUpdated !== thisCreated}
        <h6 class="updated">Updated {thisUpdated}</h6>
    {:else}
            <!-- Nothing -->
    {/if}
</section>


<style>
    section {
        display: grid;
        gap: 16px;
    }
    img {
		width: 100%;
	}
</style>