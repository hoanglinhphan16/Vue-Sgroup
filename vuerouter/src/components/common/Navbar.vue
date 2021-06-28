<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click="backHome">
        <img src="../../assets/logo.png" alt="" class="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link tag="li" class="nav-item" :to="{ name: 'home' }"
            ><a class="nav-link">Home</a></router-link
          >
          <router-link tag="li" class="nav-item" to="/blogs"
            ><a class="nav-link">Blog</a></router-link
          >
          <router-link tag="li" class="nav-item" to="/about"
            ><a class="nav-link">About</a></router-link
          >
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-secondary me-2" type="submit">
            Search
          </button>
          <router-link
            tag="button"
            class="btn btn-outline-secondary"
            to="/login"
            >Login</router-link
          >
        </form>
      </div>
    </div>
  </nav>
  <!-- <div>
    <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div> -->
</template>

<script>
export default {
  methods: {
    backHome() {
      this.$router.push("/");
    },
    backLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.logo {
  width: 40px;
}
</style>
