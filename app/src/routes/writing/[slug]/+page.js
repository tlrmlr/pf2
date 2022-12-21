import Stories from "../../../../src/Store";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    let current = params.slug;

    let storyList;

    Stories.subscribe((data) =>{
        storyList = data;
    });

    function isCurrent(check) {
        return check.slug === current;
    }

    // console.log(storyList.find(isCurrent));

    return {
        post: {
            title: `Title for ${params.slug} goes here`,
            content: `Content for ${params.slug} goes here`
        }
    };
}