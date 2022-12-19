<script>
 let descriptorArray = [
    {
        src: "",
        text: "Product designer exploring life online."
    },{
        src: "",
        text: "Imagining new worlds."
    },{
        src: "",
        text: "Empowering individuals."
    },{
        src: "",
        text: "Challenging existing models."
    },{
        src: "",
        text: "Pushing at the edges."
    }
 ]
</script>

<header>
    <h1>Tyler Miller</h1>
    <p>
    {#each descriptorArray as item}
            <span>{item.text} </span>
    {/each}
    </p>
</header>

<style>
    p {
        margin-top: 2px;
        font-size: 20px;
        line-height: 28px;
    }

    span:first-child {
        color: rgba(255,255,255,0.8);
    }
</style>