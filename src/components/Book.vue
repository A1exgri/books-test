<template>
  <div v-if="book" class="book">
    <img v-if="book.image" class="book__img" :src="book.image" :alt="book.name">
    <div v-else class="book__no-img"></div>
    <div class="book__description">
      <small class="badge badge-pill badge-primary book__year">{{book.year}}</small>
      <div class="book__author">{{ book.author }}</div>
      <h4 class="book__title">{{ book.name }}</h4>

      <Modal :book="book" />
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "Book",
  props: {
    book: {
      type: Object
    }
  },
  components: {
    Modal
  }
}
</script>

<style lang="scss">
.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &.btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    &:hover {
      color: #fff;
      background-color: #0069d9;
      border-color: #0062cc;
    }
  }
}
.book {
  display: flex;
  padding: 5px;
  &__img {
    height: 150px;
    width: 100px;
    object-fit: cover;
    margin-bottom: 20px;
  }
  &__no-img {
    background: #007bffbb;
    height: 150px;
    width: 100px;
    margin-bottom: 20px;
  }
  &__description {
    padding-left: 20px;
  }
  &__title {
    margin: 0;
    height: 52px;
    overflow: hidden;
  }
  &__year {
    margin-top: -5px;
  }
  &__text {
    font-size: 12px;
  }
}
</style>