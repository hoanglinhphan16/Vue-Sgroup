<template>
<div>
  <b-container>
      <b-row align-v="center">
          <b-col v-for= "blog in blogs" :key="blog.id">
              <b-card
                :key="'blog-' + blog.id"
                @click="$router.push('/blogs/'+blog.id)"
                :title="blog.title"
                :img-src="blog.thumbnail"
                :footer="blog.categoryId"
                img-top
                tag="article"
                style="max-width:20rem"
                class="mb-2"
              >
              <b-card-text>{{blog.description}}</b-card-text>
              </b-card>
          </b-col>
      </b-row>
  </b-container>
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
    
        }}
        
}
</script>

<style scoped>
img{
    width:300px;
    margin: 5px 5px;
}
article {
    cursor: pointer;
}
</style>>
