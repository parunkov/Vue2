<template>
  <div class="control-page">
    <ProgressControls />
  </div>
</template>

<script>
import ProgressControls from '@/components/ProgressControls.vue';

export default { components: { ProgressControls } };
</script>
<style lang="scss" scoped>
.control-page {
  padding: 40px;
  background: white;
  height: calc(100vh - 76px);
}
</style>
