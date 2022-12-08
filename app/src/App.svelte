<script>
  import Footer from './Footer.svelte';
  import Nav from './Nav.svelte';
  import Table from './Table.svelte';
</script>

<main>
  <Nav />
  <Table />
  <Footer />
</main>

<style>
  main {
    margin-top: var(--displacement-nav);
  }

  .lorem {
    text-align: left;
    padding-left: 16px;
  }

</style>
