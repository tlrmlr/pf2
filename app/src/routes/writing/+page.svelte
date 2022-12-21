<script>
    import { fly } from "svelte/transition";
    import Stories from "../../../src/Store";

    let storyList;
    Stories.subscribe((data) =>{
        storyList = data;
    }); 
</script>

<article in:fly={{y: -2}}>
    <h1>Writing</h1>
    {#each storyList as story}
         <a href="{"writing/" + story.slug}">{story.title}</a>
    {/each}
</article>

<style>
    h1 {padding: 0px var(--padding);}
</style>