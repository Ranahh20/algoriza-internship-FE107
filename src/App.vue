
<template>
  <div class="id">
 
  

    <RouterView class="flex-1" v-slot="{ Component }">
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>







</script>






<style lang="scss" scoped>

</style>
