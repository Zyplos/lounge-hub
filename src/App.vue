<template>
  <div id="app" class="d-flex flex-column flex-lg-row align-self-stretch">
    <section class="d-flex">
      <Navbar />
    </section>
    <main class="container-fluid flex-grow-1 mt-lg-3">
      <router-view />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "home",
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
main {
  overflow-y: auto;
}
</style>
