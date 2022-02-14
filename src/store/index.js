import Vue from 'vue'
import Vuex from 'vuex'
import books from "@/store/modules/books";
import categories from "@/store/modules/categories";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    books,
    categories
  }
})
