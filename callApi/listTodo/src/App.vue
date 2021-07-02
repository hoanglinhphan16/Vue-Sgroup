<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
.container {
  width: 800px;
}
.header {
  text-align: center;
}
button {
  margin: 5px 5px;
  border-radius: 5px;
}
</style>
