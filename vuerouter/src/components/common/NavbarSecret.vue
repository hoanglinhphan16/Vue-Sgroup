<template>
  <nav class="navbar-expand-lg navbar-light bg-light">


      <form class="d-flex float-end form-nav">
        <i class="fas fa-search fa-lg search-icon"></i>
        <i class="far fa-bell fa-lg bell-icon"></i>
        <a class="navbar-brand" href="#">
        <img src="../../assets/avatar.png" alt="" class="logo">
        </a>
      </form>
</nav>
</template>

<script>
export default {

}
</script>

<style>
.search-icon {
    align-self: center;
    width: 40px;
}
.bell-icon {
    align-self: center;
    width: 40px;
}
.logo {
    width: 40px;
    margin-left: 10px;
}
.form-nav {
    margin-top: 10px;
}
</style>