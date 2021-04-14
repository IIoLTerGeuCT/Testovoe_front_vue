<template>
  <div class="container">
    <div class="container__main">
      <div
        class="container__card"
        v-for="(item, index) of images"
        :key="item.id"
      >
        <router-link
          :to="{ name: 'Image', params: { id: item.id } }"
          tag="button"
        >
          <ImageDetails :image="item" :index="index" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import ImageDetails from "@/components/ImageDetails";
export default {
  data() {
    return {
      images: "",
      getUrl: "http://localhost:3001/api/images",
    };
  },
  components: { ImageDetails },
  mounted() {
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
  opacity: 0.8;
  width: 300px;
  border-radius: 10px;
}
</style>
