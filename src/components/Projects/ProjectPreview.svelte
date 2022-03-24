<script lang="ts">
  import { openModal } from 'svelte-modals';
  import Modal from '../Modal.svelte';

  export let imagePreviewPath: string;
  export let imagePreviewRectanglePath: string;
  export let title: string;
  export let tag: string;
  export let url: string;
  export let description: string;

  function handleClick() {
    openModal(Modal, {
      imagePreviewRectanglePath: imagePreviewRectanglePath,
      url: url,
      title: title,
      description: description
    });
  }
</script>

<button on:click={handleClick}>
  <img src={imagePreviewPath} alt={title} />
  <div class="cover" />
  <div class="top">
    <h2>{title}</h2>
    <h3>{tag}</h3>
  </div>
  <div class="bottom"><div class="launch-modal">Learn More</div></div>
</button>

<style lang="scss">
  button {
    display: block;
    position: relative;
    cursor: pointer;
    height: 300px;
    aspect-ratio: 1;
    background-color: red;
    box-shadow: 0 0 1.5rem 0 var(--shadow);
    text-align: center;
    overflow: hidden;
    border-radius: var(--radius);
  }
  img {
    width: 300px;
  }
  .cover {
    position: absolute;
    background-color: var(--primary-light);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: var(--transition-time);
  }
  .top,
  .bottom {
    position: absolute;
    left: 0;
    right: 0;
    height: 150px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: var(--xs);
    justify-content: center;
    align-items: center;
    transition: transform var(--transition-time) ease-in;
  }
  .top {
    top: -150px;
    h2,
    h3 {
      display: block;
    }
  }
  .bottom {
    bottom: -150px;
    .launch-modal {
      color: var(--accent2);
    }
  }
  button:hover {
    .cover {
      opacity: 1;
    }
    .top {
      transform: translateY(150px);
    }
    .bottom {
      transform: translateY(-150px);
    }
  }
</style>
