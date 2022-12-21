/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        post: params.slug
    };
  }