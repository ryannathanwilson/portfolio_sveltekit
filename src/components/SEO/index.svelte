<script>
  import OpenGraph from './OpenGraph.svelte';
  import { VERTICAL_LINE_ENTITY } from './entities';
  import metadata from './metadata';

  const {
    metadescription,
    title,
    siteLanguage,
    siteShortTitle,
    siteTitle,
    datePublished,
    lastUpdated,
    image,
    squareImage,
    ogLanguage,
    url
  } = metadata;

  const pageTitle = `${siteShortTitle} ${VERTICAL_LINE_ENTITY} ${title}`;
  const openGraphProps = {
    datePublished,
    lastUpdated,
    image,
    squareImage,
    metadescription,
    ogLanguage,
    pageTitle,
    siteTitle,
    url
  };
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={metadescription} />
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
  <OpenGraph {...openGraphProps} />
</svelte:head>
