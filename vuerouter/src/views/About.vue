<template>
  <div>
    <div style="height: 300px">
      <img src="../assets/vue-about.png" class="mt-5" />
      <p class="content">Future of your life</p>
    </div>
    <div class="background container">
      <p class="title">We tell stories that drivers the heart</p>
      <img src="../assets/angel.jpeg" class="angel" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  width: 1245px;
  height: 2108px;

  background: #1c1c1c;
}

img {
  width: 150px;
}

.content {
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  /* or 150% */

  text-align: center;

  color: #000000;
}

.title {
  position: absolute;
  width: 444px;
  height: 103px;
  left: 400px;
  top: 500px;

  text-align: left;
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 52px;

  color: #ffffff;
}

.angel {
  position: absolute;
  width: 569px;
  height: 419px;
  left: 652px;
  top: 811px;
}
</style>
