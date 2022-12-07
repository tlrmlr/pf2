<script>
  import Nav from './Nav.svelte';
  import Table from './Table.svelte';
</script>

<main>
  <Nav />
  <p class="lorem">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis deleniti iure dolore asperiores? Sed voluptatum, velit ducimus explicabo consequatur natus error tenetur nihil sint consectetur sequi asperiores perferendis vel necessitatibus!</p>
  <Table />
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
