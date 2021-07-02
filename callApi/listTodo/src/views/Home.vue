<template>
  <div class="container">
    <div class="jumbotron text-center">
      <h1>Todo List</h1>
    </div>
    <div>
      <form class="nav-tabs-justified" id="app">
        <div class="d-flex">
          <input
            type="text"
            placeholder="What needs to be done"
            class="form-control"
            v-model="currentInput"
          />
          <input type="submit" value="+" class="submit" v-on:click="addToArr" />
        </div>
        <ul>
          <li v-for="user in users" :key="user.id" class="d-flex">
            <!-- <div v-on:click="user.done = !user.done" class="col-10">
              <input
                type="checkBox"
                :checked="true ? user.done : user.done == false"
              />
              <label v-bind:class="{ completed: user.done }">
                {{ user.name }}</label
              >
            </div>
            <div class="ml-auto">
              <a href="#" v-on:click="edit(user)"
                ><i class="fas fa-edit"></i
              ></a>
              <a href="#" v-on:click="removeFromArr(user)"
                ><i class="fas fa-trash-alt icon"></i
              ></a>
            </div> -->
            <span>{{ user.name }}</span>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      currentInput: null,
      edited: false,
      users: [],
    };
  },
  async created() {
    const respone = await axios.get(
      "https://60dece59abbdd9001722d079.mockapi.io/api/v1/users"
    );
    this.users = respone.data;
    console.log(respone);
  },
  methods: {
    addToArr() {
      if (this.currentInput !== null) {
        if (this.edited) {
          this.id.text = this.currentInput;
          console.log(this.id.text);
          console.log(this.currentInput);
          this.edited = false;
          this.currentInput = null;
        } else if (!this.arr.find((i) => i.text === this.currentInput)) {
          this.arr.push({
            text: this.currentInput,
            done: false,
          });

          this.currentInput = null;
        }
      } else alert("Please fill the input");
    },
    removeFromArr(user) {
      console.log(user);
      const index = this.arr.findIndex((i) => i.text === user.text);
      if (index >= 0) {
        this.arr.splice(user, 1);
      }
    },
    edit(user) {
      const index = this.arr.findIndex((i) => i.text === user.text);
      if (index >= 0) {
        this.currentInput = user.text;
        this.id = user;
        this.edited = !this.edited;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 800px !important;
}

li {
  list-style-type: none;
  margin: 15px;
  font-size: large;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

label {
  margin-left: 15px;
}

.submit {
  width: 5%;
  border-radius: 7px;
}
ul {
  padding-left: 0px;
}
</style>
