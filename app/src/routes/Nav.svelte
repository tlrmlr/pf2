<script>
    import Menu from '$lib/images/menu.svg';
    import { expressionArray } from './data.js';

    let chosenExpression = expressionArray[Math.floor(expressionArray.length*Math.random())];

    function chooseExpression() {
        chosenExpression = expressionArray[Math.floor(expressionArray.length*Math.random())];
    }

    let menuToggled = false;

    function toggleMenu() {
        menuToggled = !menuToggled;
        console.log("flipped to " + menuToggled);
    }
</script>

<header>
    <p id="logo">
        <span id="wordmark"><a  on:click={chooseExpression} href="/">Tyler Miller</a></span>
        <span>is</span>
        <span>{chosenExpression}</span>
    </p>
    <nav>
        <button id="menu-hamburger" on:click={toggleMenu}>
            <img src={Menu} alt=""/>
            <span>Menu</span>
        </button>
        <ul class="navlinks">
            <li><a on:click={chooseExpression} href="/">Gallery</a></li>
            <li><a on:click={chooseExpression} href="/writing">Writing</a></li>
            <li><a on:click={chooseExpression} href="/projects">Projects</a></li>
            <li><a on:click={chooseExpression} href="/about">About</a></li>
        </ul>
        {#if menuToggled === true}
            <ul class="mobilinks">
                <li><a on:click={toggleMenu} href="/">Gallery</a></li>
                <li><a on:click={toggleMenu} href="/writing">Writing</a></li>
                <li><a on:click={toggleMenu} href="/projects">Projects</a></li>
                <li><a on:click={toggleMenu} href="/about">About</a></li>
            </ul>
        {/if}
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
        padding: none;
        margin: none;
        background-color: rgba(0,0,0,0);
        border: none;
        font-size: 1em;
        grid-template-columns: min-content min-content;
        align-items: center;
        gap: 4px;
        padding: 2px;
    }

    #menu-hamburger span {
        transition: border-bottom 100ms ease-in-out;
        font-size: 1em;
        border-bottom: 1px solid rgba(0,0,0,0);
    }

    #menu-hamburger:hover {
        cursor: pointer;
    }

    #menu-hamburger:hover span {
        border-bottom: 1px solid white;
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
        border-bottom: var(--material-edge);
        background-color: rgba(16,16,16,0.16);
        
        -webkit-backdrop-filter: blur(32px) saturate(250%);
        backdrop-filter: blur(32px) saturate(250%);
    }

    nav {
        display: flex;
    }
    
    nav {
        flex-direction: row-reverse;
    }
    
    ul li {
        list-style: none;
        font-weight: 500;
    }

    ul li a {
        color: inherit;
        text-decoration: inherit;
        border-bottom: 1px solid rgba(255,255,255,0.0);
        padding-bottom: 2px;
    }

    ul li a:hover {
        color: rgba(255,255,255,1.0);
        border-bottom: 1px solid rgba(255,255,255,1.0);
    }

    .navlinks {
        display: grid;
        grid-template-columns: repeat(4, min-content);
        gap: 32px;
        margin-block-end: 0;
        margin-block-start: 0;
    }

    .mobilinks {
        display: none;
        grid-template-columns: repeat(1, min-content);
        gap: 32px;
        margin-block-end: 0;
        margin-block-start: 0;
        position: absolute;
        top: calc(var(--displacement-nav));
        bottom: 0;
        left: calc(var(--padding));
        right: 0;
        color: white;
        background: rgba(0,0,0,1.0);
        z-index: 10000;
    }

    @media (max-width: 700px) {
        
    }

    @media (max-width: 420px) {
        #logo span {
            display: none;
        }

        #logo #wordmark {
            display: block;
        }

        #menu-hamburger {
            display: grid;
        }

        .navlinks {
            display: none;
        }

        .mobilinks {
            display: grid;
        }
    }
</style>