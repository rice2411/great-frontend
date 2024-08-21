<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <Header />
  <div className="columns">
    <Navigation />
    <main>Main</main>
    <Sidebar />
  </div>
  <Footer />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
