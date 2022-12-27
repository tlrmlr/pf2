<script>
    import { fly } from "svelte/transition";
    import { quartOut } from 'svelte/easing';

    import { samplesArray } from './data.js';
</script>

<ul>
    {#each samplesArray as sample, i}
        <li href={sample.url} in:fly={{y: -32, duration: 600, delay: 120 * i, easing: quartOut }}>
            <a href="">
                <img src={"/samples/" + sample.src} alt={sample.alt}>
                <div class="info-box">
                    <span>{sample.date}</span>
                    <span>•</span>
                    <span>{sample.alt}</span>
                </div>
            </a>
        </li>
    {/each}
</ul>

<style>
    ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2vw 6vw;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    li {
        opacity: 0.4;
        transition: opacity 200ms ease-in-out;
    }

    li:hover {
        opacity: 1;
    }

    li span {
        color: rgba(255,255,255,0);
        transition: color 1000ms ease-in-out;
        font-size: 12px;
        line-height: 1.2em;
    }

    li:hover span {
        color: rgba(255,255,255,1.0);
        transition: color 150ms ease-in-out;
    }

    li:hover img {
        box-shadow: 0px 0px 32px rgba(255,255,255,0.02);
    }

    li a {
        text-decoration: none;
        color: inherit;
        display: flex;
        flex-direction: column;
        margin-top: 2vw;
        line-height: 1rem;
    }

    a .info-box {
        height: 2vw;
    }

    a img {
        width: 100%;
        height: 18vw;
        border: var(--material-edge);
        border-radius: 5px;
        object-fit: cover;
    }

    @media (max-width: 700px) {
        ul {
            grid-template-columns: repeat(2, 1fr);
        }

        a img {
            height: 100%;
        }
    }

    @media (max-width: 420px) {
        ul {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>