<template>
  <div>
    <div style="height: 300px">
      <img src="../assets/vue-about.png" class="mt-5" />
      <p class="content">Future of your life</p>
    </div>
    <div class="background container">
      <p class="title">We tell stories that drivers the heart</p>
      <p class="content-header">
        Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui
        dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui minim
        pariatur et officia elit id. Tempor cupidatat veniam esse ad veniam
        dolore excepteur tempor dolor consectetur ut id.
      </p>
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
  left: 450px;
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
  width: 450px;
  right: 500px;
  top: 500px;
}

.content-header {
  position: absolute;
  width: 436px;
  height: 121px;
  left: 450px;
  top: 600px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  /* or 150% */

  color: #ffffff;
}
</style>
