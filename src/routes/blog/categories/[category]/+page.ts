import { slugFromPath } from '$lib/slugFromPath';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);
  interface mdPost {
    path?: string;
    resolver?: App.MdsvexResolver;
  }
  const allPosts: mdPost[] = [];
  for (const [path, resolver] of Object.entries(modules)) {
    const post = { path, resolver: resolver as unknown as App.MdsvexResolver };
    allPosts.push(post);
  }

  const matchingPosts: App.BlogPost[] = [];
  for (const post of allPosts) {
    const metadata = (await post?.resolver?.())?.metadata;
    const slug = slugFromPath(post?.path || '')
    if (slug && metadata) {
      const match = metadata.categories
        .some((postCategory) => postCategory.toLowerCase() === params.category.toLowerCase());
      if (match) {
        const blogPost: App.BlogPost = {
          slug,
          title: metadata.title,
          author: "Ryan N Wilson",
          description: metadata.description,
          categories: metadata.categories,
          date: metadata.date,
          published: true,
        }
        matchingPosts.push(blogPost)
      }
    }
  }


  // RNW TODO use the published flag
  if (!matchingPosts.length /* || !post.metadata.published */) {
    throw error(404); // Couldn't resolve the post
  }

  return {
    category: params.category,
    posts: matchingPosts,
  }
};
