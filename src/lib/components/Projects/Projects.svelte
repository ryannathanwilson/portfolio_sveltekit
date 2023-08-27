<script lang="ts">
  import ProjectPreview from './ProjectPreview.svelte';
  import Highlight from './Highlight.svelte';
  import projectsJSON from './projects.json';
  import type { ProjectInterface } from '$src/types';

  let projects = projectsJSON as ProjectInterface[];
</script>

<div id="projects" class="section">
  <h1>Projects</h1>
  <div class="highlight">
    {#each projects as project}
      {#if project.display && project.highlight}
        <Highlight {project} />
      {/if}
    {/each}
  </div>
  <div class="lowlight">
    {#each projects as project}
      {#if project.display && !project.highlight}
        <ProjectPreview {project} />
      {/if}
    {/each}
  </div>
</div>

<style>
  .highlight {
    margin-bottom: var(--l);
  }
  .lowlight {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--m);
  }
  @media (max-width: 1000px) {
    .lowlight {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }
  @media (max-width: 500px) {
    .lowlight {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
    }
  }
</style>
