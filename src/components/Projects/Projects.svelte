<script lang="ts">
  import ProjectPreview from './ProjectPreview.svelte';
  import projects from '../../../static/projects.json';
</script>

<div id="projects" class="section">
  <h1>Projects</h1>
  {#each projects as project}
    <div>
      <ProjectPreview
        imagePreviewPath={project.imageSquare}
        imagePreviewRectanglePath={project.imageRectangle}
        title={project.title}
        tag={project.tags}
        url={project.url}
        description={project.description}
      />
    </div>
  {/each}
  <div>highlight 2</div>
  <div>low focus</div>
  <div>low focus</div>
  <div>low focus</div>
  <div>low focus</div>
</div>
