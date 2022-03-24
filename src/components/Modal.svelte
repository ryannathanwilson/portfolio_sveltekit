<script lang="ts">
  import { closeModal } from 'svelte-modals';

  /*https://svelte-modals.mattjennings.io/*/
  // provided by <Modals />
  export let isOpen;

  export let imagePreviewRectanglePath: string;
  export let url: string;
  export let description: string;
  export let title: string;
</script>

{#if isOpen}
  <div role="dialog" class="modal">
    <div class="contents">
      <img src={imagePreviewRectanglePath} alt={title} />
      <h2><a href={url}>link</a></h2>
      <p>{description}</p>
      <div class="actions">
        <button on:click={closeModal}>OK</button>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    /* allow click-through to backdrop */
    pointer-events: none;
  }

  .contents {
    min-width: 240px;
    border-radius: 6px;
    padding: 16px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: auto;
  }

  h2 {
    text-align: center;
    font-size: 24px;
  }

  p {
    text-align: center;
    margin-top: 16px;
  }

  .actions {
    margin-top: 32px;
    display: flex;
    justify-content: flex-end;
  }
</style>
