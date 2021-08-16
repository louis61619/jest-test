<template>
  <div>
    <div class="header-slot">
      <slot name="header" />
    </div>
    <div class="default-slot">
      <slot />
    </div>
    <div class="footer-slot">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {}
</script>
