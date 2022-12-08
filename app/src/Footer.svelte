<script>
    let socialArray = [
        {
            name: "Twitter",
            link: ""
        },
        {
            name: "Instagram",
            link: ""
        },
        {
            name: "Github",
            link: ""
        }
    ]
</script>

<style>
    footer {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(2,1fr);
        height: 108px;
        padding: 0px 16px;
    }

    nav {
        display: grid;
        grid-template-columns: repeat(3,min-content);
        gap: 16px;
        justify-content: end;
    }
    
    li {
        list-style-type: none;
    }

    span {
        text-align: left;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }
</style>

<footer>
    <span>© 2022</span>
    <nav>
        {#each socialArray as link}
            <li><a href="">{link.name}</a></li>
        {/each}
    </nav>
</footer>