<template>
  <nav
    class="navbar navbar-expand-lg flex-row flex-lg-column flex-grow-1 navbar-dark bg-dark"
  >
    <a class="navbar-brand m-0" href="#">>>></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#mobile-nav"
      aria-controls="mobile-nav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="toggleNav"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse align-items-start"
      :class="{ show: open }"
      id="mobile-nav"
    >
      <ul class="navbar-nav mr-auto flex-column">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/wiki">Wiki</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggleNav() {
      this.open = !this.open;
    }
  }
};
</script>
