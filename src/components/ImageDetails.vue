<template>
  <div class="content">
    <div class="content__image">
      <img class="content__item" :src="image.path" alt="" />
    </div>
    <div class="content__info-user">
      <span>{{ image.surnameNp }} </span>
    </div>
    <div class="content__info-image">
      <span>{{ image.coordinates }}</span>
    </div>

  </div>
</template>
<script>
export default {
  props: ["image", "index"],
  data() {
    return {
      commentsAll: null, // Все коментарии
      commentsCurrent: null, // Коментарии для текущего изображения
      getUrl: "http://localhost:3001/api/comments",
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    async getComments() {
      const response = await fetch(this.getUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
      const res = await response.json();
      this.commentsAll = res.data;
    },
  },
};
</script>

<style lang="scss">
.content__image {
  padding: 10px;
}
.content__item {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
</style>
