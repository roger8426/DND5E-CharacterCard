<template>
  <div>
    <router-view v-slot="{ Component }">
      <component :is="Component" :key="$route.path"></component>
    </router-view>
  </div>
</template>