<script lang="ts">
  import type { ProjectInterface } from 'src/types';

  import { openModal } from 'svelte-modals';
  import Modal from '../Modal.svelte';
  export let project: ProjectInterface;

  function handleClick() {
    openModal(Modal, {
      imagePreviewRectanglePath: project.imageRectangle,
      url: project.url,
      title: project.title,
      description: project.description
    });
  }
</script>

<div class="container" role="button" on:click={handleClick}>
  <img src={project.imageSquare} alt={project.title} />

  <div class="cover">
    <div class="top">
      <h2>{project.title}</h2>
      <h3>{project.tags}</h3>
    </div>

    <div class="bottom">
      <div class="launch-modal">Learn More</div>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    aspect-ratio: 1;
    cursor: pointer;
    background-color: red;
    box-shadow: 0 0 1.5rem 0 var(--shadow);
    text-align: center;
    overflow: hidden;
    border-radius: var(--radius);

    img {
      width: 100%;
    }

    .cover {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: 'top' 'bottom';
      position: absolute;
      background-color: var(--primary-light);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: var(--transition-time);

      .top,
      .bottom {
        /*position: absolute;*/
        /*left: 0;*/
        /*right: 0;*/
        /*height: 150px;*/
        background-color: transparent;
        display: flex;
        flex-direction: column;
        gap: var(--xs);
        justify-content: center;
        align-items: center;
        transition: transform var(--transition-time) ease-in;
      }

      .top {
        grid-area: 'top';
        transform: translateY(-100%);
        h2,
        h3 {
          display: block;
        }
      }

      .bottom {
        grid-area: 'bottom';
        transform: translateY(100%);
        .launch-modal {
          color: var(--accent2);
        }
      }
    }

    &:hover {
      .cover {
        opacity: 1;
      }

      .top {
        transform: translateY(0);
      }

      .bottom {
        transform: translateY(0);
      }
    }
  }
</style>
