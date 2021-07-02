<template>
  <div class="container-fluid">
    <img class="img-header" alt="Vue logo" src="../assets/home.jpeg" />

    <div style="width: 700px;margin:0 auto; ">
      <h2 class="text-center">
        The World’s Most Dangerous
        <h2>Technology Ever Made.</h2>
      </h2>
      <p class="content text-left ">
        Magna non irure qui ex est laborum nulla excepteur qui. Cupidatat sunt
        ipsum proident aute exercitation do tempor aliqua cupidatat quis non
        exercitation. Adipisicing do minim dolore nulla mollit. Adipisicing
        incididunt irure ipsum et in esse ipsum elit tempor.
      </p>
      <p class="content text-left">
        Duis ea excepteur proident ex commodo irure est. Nisi commodo qui
        pariatur enim sint laborum consequat enim in officia. Officia fugiat
        incididunt commodo et mollit aliqua non aute. Enim dolor eiusmod aliqua
        amet ipsum in enim eiusmod. Quis exercitation sit velit duis. Est Lorem
        labore consectetur minim sit eu eiusmod mollit velit. Consectetur
        voluptate ex amet id eiusmod laborum irure.
      </p>
      <p class="content text-left">
        Anim Lorem dolore cupidatat pariatur ex tempor. Aliquip ad qui id
        exercitation irure amet commodo nisi quis. Occaecat minim incididunt
        eiusmod nostrud veniam quis culpa. Nisi ipsum et consequat id deserunt
        excepteur. Cillum non pariatur culpa ut occaecat laboris eu. Ullamco ad
        Lorem et elit laboris eu qui irure nulla qui culpa et.
      </p>
      <p class="content text-left">
        Voluptate labore sunt duis eu deserunt. Occaecat do ut ut labore cillum
        enim dolore ad enim enim id. Aliquip do veniam ad excepteur ad cillum
        qui deserunt nostrud sunt aliqua duis sunt occaecat.
      </p>
      <p class="content text-left">
        Commodo labore ut nisi laborum amet eu qui magna ullamco ut labore.
        Aliquip consectetur labore consectetur dolor exercitation est minim
        quis.
      </p>
      <p class="content text-left">
        Aliquip mollit sunt qui irure. Irure ullamco Lorem excepteur dolor qui
        ea ad quis. Enim fugiat cillum enim ad occaecat sint qui elit labore
        mollit sunt laborum fugiat consequat. Laborum incididunt commodo ullamco
        proident quis.
      </p>

      <div class="footer mb-5">
        <hr />
        <h5 class="author text-left">ABOUT THE AUTHOR</h5>
        <div class="d-flex">
          <div>
            <img
              class="avatar-author mr-5"
              src="../assets/author.jpeg"
              alt=""
            />
          </div>
          <div>
            <h5 class="name-author">Arthur Black</h5>
            <p class="content text-left">@arthurblack</p>
            <p>My name is Arthur Black. I'm very handsome. I'm 99 years old</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
.img-header {
  width: 1616px;
  display: inline-block;
  text-align: center;
  border-radius: 0px;
}

.footer {
  margin-top: 100px;
}
.text-center {
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 52px;
  text-align: center;

  color: #000000;
}
h2 {
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 52px;
  text-align: center;
}

.content {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  color: #000000;
}

.author {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
}

.avatar-author {
  border-radius: 50%;
  width: 200px;
}

.name-author {
  text-align: left;
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: bold;
  font-size: 33px;
  line-height: 41px;

  color: #1c1c1c;
}
</style>
