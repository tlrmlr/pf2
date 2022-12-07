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
    .navlinks li:last-child {margin-right: 0;}

    .navlinks {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-block-end: 0;
        margin-block-start: 0;
        margin-top: 1px;
    }
    
    .navlinks li {
        list-style: none;
        font-weight: 500;
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
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </nav>
</header>