<template>
  <div class="books">
    <Loader v-if="isLoading"/>
    <template v-if="books">
      <h1>Книги</h1>
      <div  class="row">
          <div
              class="col-4"
              v-for="book in books"
              :key="book.id">
            <Book :book="book" />
          </div>
          </div>
        <div class="row" v-if="isShowLoadMore">
          <div class="load-more">
            <button class="btn btn-primary" @click="loadMore">Загрузить еще</button>
        </div>
      </div>
    </template>
    <div v-if="error" class="error">Ошибка загрузки данных...</div>
  </div>
</template>

<script>
import Book from "@/components/Book";
import {actionTypes} from "@/store/modules/books";
import {mapState} from "vuex";
import Loader from "@/components/Loader";

export default {
  name: 'Books',
  components: {
    Book,
    Loader
  },
  data() {
    return {
      apiUrl: '/list',
      page: 1
    }
  },
  computed: {
    ...mapState({
      activeCategories: state => state.categories.activeCategories,
      isLoading: state => state.books.isLoading,
      books: state => state.books.data,
      error: state => state.categories.error,
    }),
    isShowLoadMore() {
      return (this.books.length % (this.page * 10) === 0)
    }
  },
  watch: {
    activeCategories() {
      this.page = 1
      this.getBooks()
    }
  },
  methods: {
    getBooks() {
      this.$store.dispatch(actionTypes.getBooks, {
        apiUrl: this.apiUrl,
        params: {
          "categories": this.activeCategories,
          "page": this.page,
        },
      })
    },
    loadMore() {
      this.page ++
      this.getBooks()
    }
  }
}
</script>

<style lang="scss">
  .books {
  }
  .load-more {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .error {
    color:red;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid red;
  }
</style>
