<template>
  <div id="app">
    <header id="nav">
      <nav class="navbar navbar-dark bg-primary">
        <div class="container">
          <router-link class="navbar-brand" to="/">Books-App</router-link>
        </div>
      </nav>
    </header>
    <div class="container">
    <Categories />
    <Books />
    </div>
    <footer>

    </footer>
  </div>
</template>
<script>
import Books from "@/components/Books"
import Categories from "@/components/Categories"

export default {
  components: {Categories, Books},
}
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  font-size: 1.2rem;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-4 {
  -ms-flex: 0 0 30%;
  flex: 0 0 30%;
  max-width: 30%;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
}
.col-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
}
.navbar {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  &.navbar-dark .navbar-brand {
    color: #fff;
    text-decoration: none;
  }
}
.bg-primary {
  background-color: #007bff!important;
}
@media (max-width: 1199px) {
  .container {
    max-width: calc(100% - 30px);
  }
}
@media (max-width: 992px) {
  .col-4 {
    -ms-flex: 0 0 45%;
    flex: 0 0 45%;
    max-width: 45%;
    position: relative;
  }
}
@media (max-width: 768px) {

  .col-4 {
    -ms-flex: 0 0 90%;
    flex: 0 0 90%;
    max-width: 90%;
    position: relative;
    width: 100%;
  }
}
@media (max-width: 576px) {

}

</style>
