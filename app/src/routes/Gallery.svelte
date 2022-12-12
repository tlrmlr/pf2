<script>
    import { fly } from "svelte/transition";

    let samplesArray = [
        {
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        },{
            url: "Testing",
            src: "test-img.png",
            date: "9-10-22",
            alt: "Musings on Moloch"
        }
    ]
</script>

<ul>
    {#each samplesArray as sample, i}
        <li href={sample.url} in:fly={{y: -8, delay: 40 * i  }}>
            <a href="" target="_blank" rel="noreferrer">
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
        transition: opacity 300ms ease-in-out;
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
        box-shadow: 0px 0px 16px rgba(255,255,255,0.08);
    }

    li a {
        text-decoration: none;
        color: inherit;
        display: flex;
        flex-direction: column;
        margin-top: 2vw;
    }

    a .info-box {
        height: 2vw;
    }

    a img {
        width: 100%;
        height: 18vw;
        border: var(--material-edge);
        border-radius: 5px;
    }
</style>