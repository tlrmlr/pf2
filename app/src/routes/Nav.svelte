<script>
    let expressionArray = [
        "working in public.",
        "playing games.",
        "setting goals.",
        "forming habits.",
        "building interdependence.",
        "dreaming big.",
        "starting small."
    ]

    let chosenExpression = expressionArray[Math.floor(expressionArray.length*Math.random())];

    function chooseExpression() {
        chosenExpression = expressionArray[Math.floor(expressionArray.length*Math.random())];
    }
</script>

<header>
    <p id="logo">
        <span id="wordmark"><a href="/">Tyler Miller</a></span>
        <span>is</span>
        <span>{chosenExpression}</span>
    </p>
    <nav>
        <button id="menu-hamburger">Reveal</button>
        <ul class="navlinks">
            <li><a href="/">Gallery</a></li>
            <li><a href="/writing">Writing</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </nav>
</header>

<style>
    #wordmark, #wordmark a, #wordmark a:hover {
        color: rgba(255,255,255,1.0);
        text-decoration: none;
    }

    #logo {
        font-weight: 500;
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
        padding: 0px var(--padding);
        /* background: linear-gradient(rgba(16,16,16,0.9) 40%, rgba(16,16,16,0.8) 60%, rgba(16,16,16,0.0));
        text-shadow: 0px 0px 4px rgba(16,16,16,1.0); */
        -webkit-backdrop-filter: blur(32px) saturate(250%);
        backdrop-filter: blur(3px) saturate(250%);
        border-bottom: var(--material-edge);
        background-color: rgba(16,16,16,0.16);
    }

    nav {
        display: flex;
    }
    
    nav {
        flex-direction: row-reverse;
    }

    .navlinks {
        display: grid;
        grid-template-columns: repeat(4, min-content);
        gap: 32px;
        margin-block-end: 0;
        margin-block-start: 0;
    }
    
    .navlinks li {
        list-style: none;
        font-weight: 500;
    }

    .navlinks li a {
        color: inherit;
        text-decoration: inherit;
        border-bottom: 1px solid rgba(255,255,255,0.0);
        padding-bottom: 2px;
    }

    .navlinks li a:hover {
        color: rgba(255,255,255,1.0);
        border-bottom: 1px solid rgba(255,255,255,1.0);
    }
</style>