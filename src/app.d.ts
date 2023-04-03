// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
    interface MetaData {
      author: string | undefined;
      title: string;
      date: string;
      description: string;
      categories: string[];
    }
    interface MdsvexFile {
      default: import('svelte/internal').SvelteComponent;
      metadata: MetaData;
    }

    type MdsvexResolver = () => Promise<MdsvexFile>;
    // RNW TODO type blogpost
    interface BlogPost {
      slug: string;
      title: string;
      author: string;
      description: string;
      categories: string[];
      date: string;
      published: boolean;
    }
  }
}

export { };
