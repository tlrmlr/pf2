import { writable } from "svelte/store";

const Stories = writable(
    [
        {slug: "article-one",
        title: "Aticle One",
        },
        {slug: "article-two",
        title: "Aticle Two",
        },
    ]
);

export default Stories;