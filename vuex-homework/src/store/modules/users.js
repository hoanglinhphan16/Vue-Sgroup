const state = {
  users: [
    {
      id: 0,
      username: "Hoang Linh",
      phoneNumber: "0905123456",
      avatar:
        "https://www.fakeavatar.com/wp-content/uploads/2021/07/MartaBevacqua1.jpg",
    },
    {
      id: 1,
      username: "Nhu Quynh",
      phoneNumber: "0905123456",
      avatar:
        "https://www.fakeavatar.com/wp-content/uploads/2021/07/MartaBevacqua2.jpg",
    },
    {
      id: 2,
      username: "Quynh Nhu",
      phoneNumber: "0905123456",
      avatar:
        "https://www.fakeavatar.com/wp-content/uploads/2021/07/MartaBevacqua4.jpg",
    },
    {
      id: 3,
      username: "Hoang Lan",
      phoneNumber: "0905123456",
      avatar:
        "https://www.fakeavatar.com/wp-content/uploads/2021/07/MartaBevacqua1.jpg",
    },
    {
      id: 4,
      username: "Nha Quynh",
      phoneNumber: "0905123456",
      avatar:
        "https://www.fakeavatar.com/wp-content/uploads/2021/07/MartaBevacqua2.jpg",
    },
  ],
};
const getters = {
  backUser: (state) => {
    return state.users;
  },
  getUserById: (state) => (id) => {
    return state.users.find((user) => user.id === id);
  },
};

const mutations = {
  // changeName(state) {
  //   state.users.username
  // }
  // updateData: (state, id) => state,
  deleteData: (state, id) =>
    (state.users = state.users.filter((user) => user.id !== id)),
};

const actions = {
  editUser: ({ commit }) => {
    commit("changeName");
  },
  deleteData: ({ commit }, id) => {
    commit("deleteData", id);
  },
  updateData: ({ commit }, id) => {
    console.log("abcccc");
    commit("updateData", id);
  },
};
export default {
  state,
  mutations,
  getters,
  actions,
};
