<script lang="ts">
  import ProjectPreview from './ProjectPreview.svelte';
  import Highlight from './Highlight.svelte';
  import projectsJSON from '$static/projects.json';
  import type { ProjectInterface } from 'src/types';
  const projects = projectsJSON as ProjectInterface[];
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
  .lowlight {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--m);
  }
</style>
