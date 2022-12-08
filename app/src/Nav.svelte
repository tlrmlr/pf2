<script>
    let expressionArray = [
        "working in public",
        "playing games",
        "setting goals",
        "building habits"
    ]

    function chooseExpression() {
        return expressionArray[Math.floor(expressionArray.length*Math.random())];
    }

    let chosenExpression = chooseExpression();

    let navArray = [
        {
            name: "Home",
            path: ""
        },
        {
            name: "Writing",
            path: ""
        },
        {
            name: "Projects",
            path: ""
        }
    ]

</script>

<style>
    #wordmark {color: rgba(255,255,255,1.0)}
    #logo {
        font-weight: 500;
        font-size: 20px;
    }

    #menu-hamburger {
        display: none;
    }

    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        height: var(--displacement-nav);
        justify-content: space-between;
        padding: 0px 16px;
        background: linear-gradient(rgba(16,16,16,0.8) 60%, rgba(16,16,16,0.0));
        text-shadow: 0px 0px 4px rgba(16,16,16,1.0);
        /* -webkit-backdrop-filter: blur(2px);
        backdrop-filter: blur(2px);
        border-bottom: 1px solid rgba(255,255,255,0.02); */
    }

    nav {display: flex;}
    nav {flex-direction: row-reverse;}

    .navlinks {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-block-end: 0;
        margin-block-start: 0;
        margin-top: 2px;
    }
    
    .navlinks li {
        list-style: none;
        font-weight: 500;
        padding: 4px 16px;
        border-radius: 4px;
        background: linear-gradient(160deg, rgba(255,255,255,0.02), rgba(255,255,255,0.005) 40%);
    }

    .navlinks li a {
        color: inherit;
        text-decoration: inherit;
    }

    .navlinks li:hover {
        background: rgba(255,255,255,0.04);
        transform: scale(1.01);
    }

    .navlinks li:hover a {
        color: rgba(255,255,255,1.0)
    }
</style>

<header>
    <p id="logo">
        <span id="wordmark">Tyler Miller</span>
        <span>is</span>
        <span>{chosenExpression}</span>
    </p>
    <nav>
        <button id="menu-hamburger">Reveal</button>
        <ul class="navlinks">
            {#each navArray as link}
                <li><a href="">{link.name}</a></li>
            {/each}
        </ul>
    </nav>
</header>