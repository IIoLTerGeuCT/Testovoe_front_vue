<template>
  <div class="content-details">
    <div class="content-details__image">
      <img class="image" :src="imageItem.path" alt="img" />
    </div>
    <div class="content-details__info">
      <div class="content-details__user">
        <p>Автор: {{ imageItem.surnameNp }}</p>
      </div>
      <div class="content-details__coordinates">
        <p>Координаты: {{ imageItem.coordinates }}</p>
      </div>
    </div>
    <div class="content-details__comments">
      <div class="comments" v-for="c of commentsCurrent" :key="c.id">
        <p>* {{ c.surnameNp }}</p>
        <p>{{ c.comment }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      imageItem: "",
      commentsCurrent: "",
      urlImage: "http://localhost:3001/api/image?id=",
    };
  },
  mounted() {
    this.getItem();
  },
  methods: {
    async getItem() {
      // ID выбранной картинки
      this.id = this.$route.params.id;
      // Запрашиваем данные на сервер по картинке
      let response = await fetch(this.urlImage + this.id, {
        method: "GET",
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
      // Парсим полученные данные
      let res = await response.json();
      // Сохраняем результат
      this.imageItem = res.data[0];

      // Запрашиваем данные о комментариях
      response = await fetch(
        "http://localhost:3001/api/comment?id=" + this.id,
        {
          method: "GET",
          headers: { "Content-Type": "application/json; charset=utf-8" },
        }
      );
      res = await response.json();
      // Сохраняем комментарии
      this.commentsCurrent = res.data;
    },
  },
};
</script>
<style lang="scss">
.content-details__image {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image {
  width: 70%;
  height: 600px;
  object-fit: cover;
  padding-top: 10px;
}
.content-details__info {
  display: flex;
  justify-content: space-around;
  .content-details__user p {
    color: #ffd166;
    font-size: 18px;
  }
}
.content-details__comments {
  background-color: #fff;
  border-radius: 5px;
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.comments {
  background-color: lightgray;
  padding: 2px 10px;
  border-radius: 10px;
  &:not(:last-child) {
    margin: 2px ;
  }
}
</style>
