<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Board
        <b-link href="#/">(Board List)</b-link>
      </h2>
      <b-jumbotron>
        <b-form @submit="onSubmit">
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Title">
            <b-form-input id="title" v-model.trim="board.title"></b-form-input>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Description">
              <b-form-textarea id="description"
                         v-model="board.description"
                         placeholder="Enter something"
                         :rows="2"
                         :max-rows="6">{{board.description}}</b-form-textarea>
          </b-form-group>
          <b-form-group id="fieldsetHorizontal"
                    horizontal
                    :label-cols="4"
                    breakpoint="md"
                    label="Enter Author">
            <b-form-input id="author" v-model.trim="board.author"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'AddBoard',
  data () {
    return {
      ref: firebase.firestore().collection('boards'),
      board: {}
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()

      this.ref.add(this.board).then((docRef) => {
        this.board.title = ''
        this.board.description = ''
        this.board.author = ''
        router.push({
          name: 'BoardList'
        })
      })
      .catch((error) => {
        alert("Error adding document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
