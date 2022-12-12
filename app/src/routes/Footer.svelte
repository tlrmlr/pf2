<script>
    import Twitter from '$lib/images/twitter.svg';
    import Instagram from '$lib/images/instagram.svg';
    import Github from '$lib/images/github.svg';
    import LinkedIn from '$lib/images/linkedin.svg'
</script>

<footer>
    <span>© 2022 ~ no requests</span>
    <nav>
        <li><a href="https://twitter.com/steadydrift" target="_blank" rel="noreferrer"><img src={Twitter} alt="Twitter Logo"></a></li>
        <li><a href="https://instagram.com/tylermiller.is" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram Logo"></a></li>
        <li><a href="https://github.com/tlrmlr" target="_blank" rel="noreferrer"><img src={Github} alt="Github Logo"></a></li>
        <li><a href="https://linkedin.com/in/tylermiller-design/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="LinkedIn Logo"></a></li>
    </nav>
</footer>

<style>
    footer {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(2,1fr);
        height: var(--displacement-nav);
        padding: 0px var(--padding);
    }

    nav {
        display: grid;
        grid-template-columns: repeat(4,min-content);
        gap: 16px;
        justify-content: end;
    }
    
    li {
        list-style-type: none;
    }

    li img {
        /* margin-right: 4px;
        margin-top: 2px; */
        height: 20px;
        opacity: 0.54;  
    }

    span {
        text-align: left;
    }

    a {
        color: inherit;
        text-decoration: inherit;
        display: flex;
    }

    a:hover img {
        opacity: 1;
    }
</style>