<template>
  <div>
  <button class="btn btn-primary" @click="showModal">Подробнее</button>
    <div
        v-if="isShowModal"
        class="modal fade"
        :class="[ isShowModal ? 'show' : '']"
        @click.prevent.stop="closeModal">
      <div class="modal-dialog" :class="[ isShowModal ? 'show' : '']" @click.stop>
        <div class="modal-header">
          <h3>{{book.name}}</h3>
          <button type="button" class="close" @click="closeModal">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body book">
          <img v-if="book.image" class="book__img" :src="book.image" :alt="book.name">
          <div v-else class="book__no-img"></div>
          <div class="book__description">
            <div class="d-flex">
              <div class="book__author">{{ book.author }}</div>
              <small class="badge badge-pill badge-primary book__year">{{ book.year }}</small>
            </div>
            <div class="book__text">{{ book.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    book: {
      type: Object
    }
  },
  data() {
    return {
      isShowModal: false
    }
  },
  methods: {
    showModal() {
      this.isShowModal = true
      document.querySelector('body').classList.add('no-scroll')
    },
    closeModal() {
      this.isShowModal = false
      document.querySelector('body').classList.remove('no-scroll')
    }
  }
}
</script>

<style lang="scss">
  body.no-scroll {
    overflow: hidden;
  }
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    display: none;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
    overflow-x: hidden;
    overflow-y: auto;
    background: rgba(0,0,0,0.8);
    &.show {
      display: block;
    }
    .modal-dialog {
      max-width: 500px;
      margin: 100px auto;
      position: relative;
      width: auto;
      pointer-events: none;
      background: #fff;
    }
    &.fade {
      transition: opacity .15s linear;
      .modal-dialog {
        transition: -webkit-transform .3s ease-out;
        transition: transform .3s ease-out;
        transition: transform .3s ease-out,-webkit-transform .3s ease-out;
        -webkit-transform: translate(0,-50px);
        transform: translate(0,-50px);
      }
    }

    &.modal-open {
      overflow-x: hidden;
      overflow-y: auto;
    }
    .modal-content {
      position: relative;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
      pointer-events: auto;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid rgba(0,0,0,.2);
      border-radius: 0.3rem;
      outline: 0;
    }
    .modal-header {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-align: start;
      align-items: flex-start;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 1rem 1rem;
      border-bottom: 1px solid #dee2e6;
      border-top-left-radius: calc(0.3rem - 1px);
      border-top-right-radius: calc(0.3rem - 1px);
      h3 {
        margin-top: 0;
        margin-bottom: 0;
      }
      .close {
        float: right;
        border:0;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1;
        color: #000;
        background: #fff;
        text-shadow: 0 1px 0 #fff;
        opacity: .5;
        padding: 1rem 1rem;
        margin: -1rem -1rem -1rem auto;
        cursor: pointer;
      }
    }
    .modal-body {
      position: relative;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      padding: 1rem;
    }
  }
  @media (max-width: 576px) {
    .modal-dialog {
      position: relative;
      width: auto;
      margin: 0.5rem;
    }
  }
</style>