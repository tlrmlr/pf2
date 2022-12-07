<script>
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
            name: "RabbitHole",
            url: "https://rabbithole.gg"
        }
    ]

    let workArray = [
        {
        date: 2013,
        title: "Product Design",
        description: "Cross-platform chat applications",
        client: clientArray[1].name
     },
     {
        date: 2014,
        title: "Product Design",
        description: "Chat SDK for mobile applications",
        client: clientArray[1].name
     },
     {
        date: 2014,
        title: "Product Design",
        description: "iOS application for water resource management",
        client: clientArray[2].name
     },
     {
        date: 2015,
        title: "Product Design",
        description: "Chat SDK for mobile applications",
        client: clientArray[1].name
     },
     {
        date: 2016,
        title: "Product Design",
        description: "Chatbots for mobile applications",
        client: clientArray[1].name
     },
     {
        date: 2017,
        title: "Product Design",
        description: "Cross-platform design systems for news applications",
        client: clientArray[1].name
     },
     {
        date: 2018,
        title: "Website Design",
        description: "Web3 play-to-earn platform",
        client: clientArray[3].name
     },
     {
        date: 2018,
        title: "Product Design",
        description: "Web design for syndicated content library",
        client: clientArray[4].name
     },
     {
        date: 2019,
        title: "Product Design",
        description: "Cross-platform application design for Pocket",
        client: clientArray[4].name
     },
     {
        date: 2020,
        title: "Product Design",
        description: "Cross-platform application design for Firefox browser",
        client: clientArray[4].name
     },
     {
        date: 2020,
        title: "Research",
        description: "Exploration into content use patterns online",
        client: clientArray[4].name
     },
     {
        date: 2020,
        title: "Branding",
        description: "Web3 community staking game",
        client: clientArray[5].name
     },
     {
        date: 2020,
        title: "Character Design",
        description: "Web3 game avatars",
        client: clientArray[5].name
     },
     {
        date: 2021,
        title: "Product Design",
        description: "Web3 web application for DAOs",
        client: clientArray[5].name
     },
     {
        date: 2021,
        title: "Product Design",
        description: "Web3 web application for content aggregation",
        client: clientArray[6].name
     },
     {
        date: 2021,
        title: "Branding",
        description: "Cross-platform calendar application",
        client: clientArray[7].name
     },
     {
        date: 2021,
        title: "Product Design",
        description: "Mobile calendar & scheduling application",
        client: clientArray[7].name
     },
     {
        date: 2022,
        title: "Product Design",
        description: "Mobile video chat application for communities",
        client: clientArray[0].name

     },
     {
        date: 2022,
        title: "Character Design",
        description: "NFTs for course participation",
        client: clientArray[8].name
     },
     {
        date: 2022,
        title: "Product Design",
        description: "Mobile rewards application for creator communities",
        client: clientArray[0].name
     }
    ]

    let workArraySorted = workArray.reverse();
    let workArrayProps = Object.keys(workArray[0]);
</script>

<style>
   table {
      border-collapse: collapse; 
      width: 100%;
   }
   thead {opacity: 0.4;}
   tr:nth-child(even) {background-color: rgba(255,255,255,0.02);}
   .row-work:hover {
      background-color: rgba(255,255,255,0.04);
      color: rgba(255,255,255,1.0)
   }
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

<table>
    <thead>
      <tr>
         {#each workArrayProps as prop}
            <td>{prop.charAt(0).toUpperCase() + prop.slice(1)}</td>
         {/each}
      </tr>
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