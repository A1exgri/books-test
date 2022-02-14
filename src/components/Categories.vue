<template>
  <div class="categories">
    <Loader v-if="isLoading"/>
    <div v-if="categories" class="categories__wrapper">
      <Category
          v-for="category in categories"
          :key="category.id"
          :category="category"
      />
    </div>
    <div v-if="error" class="error">Ошибка загрузки данных...</div>
  </div>
</template>

<script>
import Category from "@/components/Category";
import {actionTypes} from "@/store/modules/categories";
import {mapState} from "vuex";
import Loader from "@/components/Loader";
export default {
  name: "Categories",
  components: {Category, Loader},
  data() {
    return {
      apiUrl: '/categories',
    }
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCategories, {apiUrl: this.apiUrl})
  },
  computed: {
    ...mapState({
      isLoading: state => state.categories.isLoading,
      categories: state => state.categories.data,
      error: state => state.categories.error,
      activeCategories: state => state.categories.activeCategories
    }),
  },
  methods: {

  }
}
</script>

<style lang="scss">
.categories {
  margin-top: 1rem;
  &__wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>