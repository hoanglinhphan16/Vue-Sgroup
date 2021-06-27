<template>
  <div class="blogDetail container">
      <img :src="activeBlog.thumbnail" alt="">
      <h2>{{activeBlog.title}}</h2>
      <p>{{activeBlog.categoryId}}</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            blogs: [
            {
                "id": "0",
                "categoryId": "UI developer",
                "createdAt": "2021-04-23T09:07:41.855Z",
                "title": "cross-platform",
                "thumbnail": "http://lorempixel.com/640/480/animals",
                "description": "Legacy",
                "content": "I'll compress the cross-platform CSS monitor, that should alarm the JSON program!"
            },
            {
                "id": "1",
                "categoryId": " UX developer ",
                "createdAt": "2021-04-23T14:57:39.459Z",
                "title": "Bedfordshire",
                "thumbnail": "http://lorempixel.com/640/480/transport",
                "description": "Investor",
                "content": "If we transmit the bandwidth, we can get to the SCSI microchip through the back-end JBOD hard drive!"
            },
            {
                "id": "2",
                "categoryId": " UI developer ",
                "createdAt": "2021-04-23T13:31:36.828Z",
                "title": "Application quantify",
                "thumbnail": "http://lorempixel.com/640/480/city",
                "description": "Dynamic",
                "content": "Use the redundant TCP capacitor, then you can parse the redundant monitor!"
            },
            {
                "id": "3",
                "categoryId": "Vue developer",
                "createdAt": "2021-04-23T21:46:59.584Z",
                "title": "Ergonomic Cotton Bacon",
                "thumbnail": "https://lorempixel.com/640/480/sports/1/",
                "description": "Senior",
                "content": "You can't back up the driver without backing up the open-source EXE transmitter!"
            },
            {
                "id": "4",
                "categoryId": "Vue developer",
                "createdAt": "2021-04-23T21:46:59.584Z",
                "title": "Ergonomic Cotton Bacon",
                "thumbnail": "http://lorempixel.com/640/480/cats",
                "description": "Senior",
                "content": "You can't back up the driver without backing up the open-source EXE transmitter!"
            },
            {
                "id": "5",
                "categoryId": " UI developer ",
                "createdAt": "2021-04-23T18:21:17.130Z",
                "title": "Baby",
                "thumbnail": "http://lorempixel.com/640/480/technics",
                "description": "Lead",
                "content": "Try to transmit the IB sensor, maybe it will input the cross-platform transmitter!"
            },
            ]
        }
    },
    computed: {
        activeBlog() {
            return this.blogs[this.$route.params.id]
        }
    }
}
</script>

<style>
img {
    margin-top: 15px;
}
h2 {
    margin: 15px;
}
p {
    margin: 15px
}
</style>