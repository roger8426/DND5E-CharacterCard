<template>
  <div class="bg-success">
    <Navbar></Navbar>
    <router-view v-slot="{ Component }">
      <component :is="Component" :key="$route.path"></component>
    </router-view>
  </div>
</template>

<script>
import Navbar from './components/bases/Navbar.vue';

export default {
  components: {
    Navbar,
  }
}
</script>