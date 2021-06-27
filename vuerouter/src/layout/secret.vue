<template>
  <div class="secret__layout">
    <Sidebar />
    <NavbarSecret />
    <slot/>
  </div>
</template>

<script>
import NavbarSecret from '../components/common/NavbarSecret.vue'
import Sidebar from '../components/common/Sidebar.vue'
export default {
  components: {
    NavbarSecret,
    Sidebar,
  }
}
</script>

<style>
.NavbarSecret {
  float: right;
}
</style>