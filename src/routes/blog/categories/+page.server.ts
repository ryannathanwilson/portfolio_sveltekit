import type { PageServerLoad } from './$types';
import { slugFromPath } from '$lib/slugFromPath';

const MAX_POSTS = 10;

export const load: PageServerLoad = async (data: any) => {
  const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);
  const postPromises = Object.entries(modules).map(([path, resolver]) =>
    resolver().then(
      (post) =>
      ({
        slug: slugFromPath(path),
        ...(post as unknown as App.MdsvexFile).metadata
      } as App.BlogPost)
    )
  );

  const posts = await Promise.all(postPromises);
  // RNW TODO: filter published posts!
  // RNW TODO: send default author
  const publishedPosts = posts.filter((post) => post).slice(0, MAX_POSTS);

  publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

  const categories = new Set();
  publishedPosts.forEach((post) => {
    post.categories.forEach((category) => {
      categories.add(category);
    })
  })
  const arrayOfCategories = Array.from(categories) as string[];
  return { categories: arrayOfCategories };
};
