<script>
    import { samplesArray } from './data.js';
    let current = 0;
</script>

<section>
    <div id="viewer">
        <img id="main" src={"/samples/" + samplesArray[current].src} alt="" />
    </div>
    <ol>
        {#each samplesArray as preview}
            <button>
                <img class="preview" src={"/samples/" + preview.src} alt={preview.src}>
            </button>
        {/each}
    </ol>
</section>

<style>
    section {
        z-index: 2000;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.8);
        display: grid;
        grid-template-rows: 80vh 20vh;
        padding-top: 4vh;
        gap: 4vh;
    }

    ol {
        display: grid;
        grid-template-columns: repeat(16, 4vw);
        gap: 1.5vw;
        justify-content: center;
    }

    button {
        height: 4vw;
        width: 100%;
        padding: 0;
        border: none;
        opacity: 0.5;
    }

    img.preview {
        width: 100%;
        object-fit: cover;
    }

    button:hover {
        opacity: 1;
    }

    #viewer {
        display: grid;
        justify-content: center;
        
    }

    #main {
        height: 100%;
    }
</style>