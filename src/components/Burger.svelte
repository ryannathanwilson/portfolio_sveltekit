<script lang="ts">
  export let isOpen: boolean = false;
  export let toggleMenu: () => void;
</script>

<div class="burger" class:open={isOpen} on:click={toggleMenu}>
  <div />
  <div />
  <div />
</div>

<style lang="scss">
  .burger {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--accent);
    border: none;
    cursor: pointer;
    padding: 1rem;
    z-index: 1000;
    width: 4rem;
    height: 4rem;
    div {
      width: 2rem;
      height: 4px;
      background: var(--darkest);
      border-radius: 10px;
      transition: all 300ms ease;
      position: relative;
    }
    :first-child {
      transform: translateY(-6px);
    }
    :nth-child(3) {
      transform: translateY(6px);
    }
    &.open {
      :first-child {
        transform: translateY(4px) rotate(45deg);
      }
      :nth-child(2) {
        opacity: 0;
      }
      :nth-child(3) {
        transform: translateY(-4px) rotate(-45deg);
      }
    }
    @media (min-width: 1001px) {
      display: none;
    }
  }
</style>
