import { writable } from "svelte/store";

const Stories = writable(
    [
        {slug: "article-one",
        title: "Aticle One",
        posted: "abc",
        updated: "def",
        contents: [
            "Default contents."
            ]
        },
        {slug: "article-two",
        title: "Aticle Two",
        posted: "hij",
        updated: "klm",
        contents: [
            "Default contents."
            ]
        },
    ]
);

export default Stories;