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
};
</script>

<style lang="scss">
.content__image {
  padding: 10px;
}
.content__item {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
