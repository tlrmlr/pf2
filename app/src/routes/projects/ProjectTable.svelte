<script>
   import { workArraySorted, workArray } from './data.js';
   import { fly } from "svelte/transition";
   import { quartOut } from 'svelte/easing';

   let workArrayProps = Object.keys(workArray[0]);
</script>

<table>
   <thead>
     <tr>
        {#each workArrayProps as prop}
           <td>{prop.charAt(0).toUpperCase() + prop.slice(1)}</td>
        {/each}
     </tr>
   </thead>
   <tbody>
        {#each workArraySorted as work, i}
           <tr class="row-work" in:fly={{y: -2, duration: 400, delay: 40 * i, easing: quartOut }}>
              <td class="work-date">{work.date}</td>
              <td class="work-title">{work.title}</td>
              <td class="work-description">{work.description}</td>
              <td class="work-client">{work.client}</td>
           </tr>
        {/each}
   </tbody>
</table>

<style>
   table {
      border-collapse: collapse; 
      width: 100%;
      min-width: 600px;
   }
   thead {
      opacity: 0.4;
   }
   tr:nth-child(even) {
      background-color: rgba(255,255,255,0.02);
   }
   .row-work:hover {
      background-color: rgba(255,255,255,0.04);
      color: rgba(255,255,255,1.0)
   }
   tr {
      height: 64px;
      justify-content: center;
   }

   td {
      text-align: left;
   }
   td:first-child {
      padding-left: var(--padding);
   }
   td:last-child {
      padding-right: var(--padding);
      text-align: right;
   }
   td:nth-child(3) {
      white-space: nowrap; 
      text-overflow:ellipsis; 
      overflow: hidden; 
      max-width:200px;
   }
</style>