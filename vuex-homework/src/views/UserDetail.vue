<template>
  <div class="container-fuild">
    <h2>This is detail of user</h2>
    <img :src="getUserDetail.avatar" />
    <div class="d-flex justify-content-center align-items-center">
      <p class="name-user">{{ getUserDetail.username }}</p>
      <i class="fas fa-edit" @click="open = true"></i>
      <vue-modaltor
        :visible="open"
        @hideModal="hideModal"
        :resize-height="{ 1200: '60%', 992: '80%', 768: '90%' }"
      >
        <template #body>
          <div style="height: 400px">
            <p class="subject">Edit Name User</p>
            <div class="content">
              <p>
                <input
                  type="text"
                  v-model="user.username"
                  placeholder="Hoang Linh Phan"
                />
              </p>
              <button class="button" type="submit" @click="editUser(user.id)">
                Submit
              </button>
            </div>
          </div>
        </template>
      </vue-modaltor>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        username: "",
        avatar: "",
      },
      open: false,
    };
  },
  computed: {
    ...mapGetters(["getUserById"]),
    getUserDetail() {
      return this.getUserById(+this.$route.params.id);
    },
  },

  methods: {
    ...mapActions(["updateData"]),
    editUser(id) {
      const updateData = {
        id: id,
        username: this.user.username,
      };
      this.updateData(updateData);
    },
    hideModal() {
      this.open = false;
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  color: antiquewhite;
}
img {
  width: 500px;
  margin: 0 auto;
  display: block;
}
.name-user {
  margin-top: 14px;
  margin-right: 15px;
  font-size: 24px;
}

i {
  cursor: pointer;
}

.content {
  margin-top: 30px;
}

.subject {
  text-align: center;
  font-size: 30px;
}

.button {
  border: 1px solid black;
  color: black;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button:hover {
  color: white;
  background: rgb(39, 38, 38);
}
</style>
