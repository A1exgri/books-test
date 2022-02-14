<template>
  <div class="category">
    <span
        class="badge badge-pill badge-primary"
        :class="{'active': activeCategories.includes(category.id)}"
        @click="selectCategoryId(category.id)"
    >{{ category.name }}</span>
  </div>
</template>

<script>
import {mutationTypes} from "@/store/modules/categories";
import {mapState} from "vuex";

export default {
  name: "Category",
  props: {
    category: {
      type: Object,
      required: true
    },
  },
  computed: {
    ...mapState({
      activeCategories: state => state.categories.activeCategories
    }),
  },
  methods: {
    selectCategoryId(id) {
      this.$store.commit(mutationTypes.getActiveCategories, {
        id: id
      })
    }
  }
}
</script>

<style lang="scss">
.badge {
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &.badge-primary {
    color: #fff;
    background-color: #007bff;
    &.active {
      background-color: #0062cc;
    }
    &:focus {
      background-color: #0062cc;
    }
    &:hover {
      background-color: #0062cc;
    }
  }
  &.badge-pill {
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
  }
}

</style>