<script lang="ts">
  import type { ProjectInterface } from 'src/types';
  import Icon from '@iconify/svelte';

  import { closeModal } from 'svelte-modals';

  /*https://svelte-modals.mattjennings.io/*/
  // provided by <Modals />
  export let isOpen;
  export let project: ProjectInterface;
</script>

{#if isOpen}
  <div role="dialog" class="modal">
    <div class="contents">
      <div class="close-project" role="button" tabindex="0" on:click={closeModal}>
        CLOSE{' '}
      </div>

      <img src={project.imageRectangle} alt={project.title} />
      <div class="description">
        <div>{project.description}</div>
        <a href={project.url} target="_blank" rel="noreferrer" class="launchURL">
          View Website <Icon icon="akar-icons:link-out" /></a
        >
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
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
    pointer-events: auto;
    position: relative;
    width: 600px;
    height: 600px;
    margin: auto;
    background: #fff;
    overflow: auto;
    outline: none;
    padding: 0;
    z-index: 100;
    box-shadow: 0 0 4rem 2px var(--shadow);
    @media (max-width: 480px) {
      width: 90%;
      height: 85%;
    }
  }

  .close-project {
    position: absolute;
    height: 2rem;
    width: 5.5rem;
    z-index: 100;
    background-color: var(--lightest);
    top: 0.3rem;
    right: 0.3rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    padding-left: 0.8rem;
    font-weight: 700;
    font-size: 0.8rem;
    color: var(--dark);
    box-shadow: 0 0 0.5rem 0 var(--shadow);
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 1rem;
      height: 0.2rem;
      right: 0.7rem;
      background-color: var(--dark);
      border-radius: 0.1rem;
      transition: all 300ms ease;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
    &:hover::before {
      transform: rotate(135deg);
      background-color: var(--accent2);
    }
    &:hover::after {
      transform: rotate(45deg);
      background-color: var(--accent2);
    }
  }

  img {
    width: 100%;
  }

  .description {
    display: flex;
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 300px;
    div {
      display: block;
      height: 120px;
      @media (max-width: 480px) {
        height: 200px;
      }
    }
  }
  .launchURL {
    color: var(--accent2);
    text-decoration: none;
    display: inline-block;
    padding: 1rem 2rem;
    border: 2px solid var(--accent2);
    border-radius: 5px;
    margin: 1rem auto;
    text-align: center;
    transition: background-color 200ms ease;
    svg {
      position: relative;
      bottom: -3px;
    }
    &:hover {
      background-color: var(--accent2);
      color: var(--lightest);
    }
  }
</style>
