<template>
  <div class="container">
    <div class="container__main">
      <div
        class="container__card"
        v-for="(item, index) of images"
        :key="item.id"
        @click="clickDetailsImage(item.id)"
      >
        <ImageDetails :image="item" :index="index" />
      </div>
    </div>
  </div>
</template>
<script>
import ImageDetails from "@/components/ImageDetails";
export default {
  data() {
    return {
      images: null,
      getUrl: "http://localhost:3001/api/images",
    };
  },
  components: { ImageDetails },
  created() {
    this.getAllImages();
  },
  methods: {
    async getAllImages() {
      const response = await fetch(this.getUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
      const res = await response.json();
      this.images = res.data;
    },
    clickDetailsImage(id) {
      console.log(id);
    },
  },
};
</script>
<style lang="scss">
.container__main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding-top: 10px;
}
.container__card {
  background-color: #fff;
}
.container__card {
  width: 300px;
  border: 2px solid green;
}
</style>
