<script>
    import App from "./App.svelte";


    // your script goes here
    function Project(date, title, description, client){
        this.date = date;
        this.title = title;
        this.description = description;
        this.client = client;
    }

    let clientArray = [
        {
            name: "Confidential",
            url: ""
        },
        {
            name: "Frankly",
            url: "https://www.franklymedia.com"
        },
        {
            name: "CodePath",
            url: "https://www.codepath.org"
        },
        {
            name: "Refereum",
            url: "https://refereum.com"
        },
        {
            name: "Mozilla",
            url: "https://www.mozilla.org/"
        },
        {
            name: "Mochi",
            url: "https://mochi.game"
        },
        {
            name: "Cabin",
            url: "https://www.cabin.city"
        },
        {
            name: "Vimcal",
            url: "https://www.vimcal.com"
        },
        {
            name: "Rabbit Hole",
            url: "https://rabbithole.gg"
        }
    ]

    let workArray = [
        {
        date: 2013,
        title: "Product Design",
        description: "Cross-platform chat applications",
        client: clientArray[1].name,
        url: clientArray[1].url
     },
     {
        date: 2014,
        title: "Product Design",
        description: "Chat SDK for mobile applications",
        client: clientArray[1].name,
        url: clientArray[1].url
     },
     {
        date: 2014,
        title: "Product Design",
        description: "iOS application for water resource management",
        client: clientArray[2].name,
        url: clientArray[2].url
     },
     {
        date: 2015,
        title: "Product Design",
        description: "Chat SDK for mobile applications",
        client: clientArray[1].name,
        url: clientArray[1].url
     },
     {
        date: 2016,
        title: "Product Design",
        description: "Chatbots for mobile applications",
        client: clientArray[1].name,
        url: clientArray[1].url
     },
     {
        date: 2017,
        title: "Product Design",
        description: "Cross-platform design systems for news applications",
        client: clientArray[1].name,
        url: clientArray[1].url
     },
     {
        date: 2018,
        title: "Website Design",
        description: "Branded website design",
        client: clientArray[3].name,
        url: clientArray[3].url
     },
     {
        date: 2018,
        title: "Product Design",
        description: "Web design for syndicated content library",
        client: clientArray[4].name,
        url: clientArray[4].url
     },
     {
        date: 2019,
        title: "Product Design",
        description: "Cross-platform application design for Pocket",
        client: clientArray[4].name,
        url: clientArray[4].url
     },
     {
        date: 2020,
        title: "Product Design",
        description: "Cross-platform application design for Firefox browser",
        client: clientArray[4].name,
        url: clientArray[4].url
     },
     {
        date: 2020,
        title: "Research",
        description: "Exploration into content use patterns online",
        client: clientArray[4].name,
        url: clientArray[4].url
     },
     {
        date: 2020,
        title: "Branding",
        description: "Web3 community staking game",
        client: clientArray[5].name,
        url: clientArray[5].url
     },
     {
        date: 2020,
        title: "Character Design",
        description: "Web3 game avatars",
        client: clientArray[5].name,
        url: clientArray[5].url
     },
     {
        date: 2021,
        title: "Product Design",
        description: "Web3 web application for DAOs",
        client: clientArray[5].name,
        url: clientArray[5].url
     },
     {
        date: 2021,
        title: "Product Design",
        description: "Web3 web application for content aggregation",
        client: clientArray[6].name,
        url: clientArray[6].url
     },
     {
        date: 2021,
        title: "Branding",
        description: "Cross-platform calendar application",
        client: clientArray[7].name,
        url: clientArray[7].url
     },
     {
        date: 2021,
        title: "Product Design",
        description: "Mobile calendar & scheduling application",
        client: clientArray[7].name,
        url: clientArray[7].url
     },
     {
        date: 2022,
        title: "Product Design",
        description: "Mobile video chat application for communities",
        client: clientArray[0].name,
        url: clientArray[0].url

     },
     {
        date: 2022,
        title: "Character Design",
        description: "NFTs for course participation",
        client: clientArray[8].name,
        url: clientArray[8].url
     },
     {
        date: 2022,
        title: "Product Design",
        description: "Mobile rewards application for creator communities",
        client: clientArray[0].name,
        url: clientArray[0].url
     }
    ]

    let workArraySorted = workArray.reverse();
</script>

<style>
   table {border-collapse: collapse;}

   tr:nth-child(odd) {background-color: rgba(0,0,0,0.2);}
   tr {
      height: 64px;
      justify-content: center;
   }

   td {text-align: left;}
   td:first-child {padding-left: 16px;}
   td:last-child {
      padding-right: 16px;
      text-align: right;
   }
</style>

<!-- markup (zero or more items) goes here -->
<table>
    <thead>

    </thead>
    <tbody>
         {#each workArraySorted as work}
            <tr class="row-work">
               <td class="work-date">{work.date}</td>
               <td class="work-title">{work.title}</td>
               <td class="work-description">{work.description}</td>
               <td class="work-client">{work.client}</td>
            </tr>
         {/each}
    </tbody>
</table>