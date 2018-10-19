<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Board
        <b-link href="#/">(Board List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{board.title}}
        </template>
        <template slot="lead">
          Title: {{board.title}}<br>
          Description: {{board.description}}<br>
          Author: {{board.author}}<br>
        </template>
        <hr class="my-4">
        <b-btn class="edit-btn" variant="success" @click.stop="editboard(key)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deleteboard(key)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import firebase from '../Firebase'
import router from '../router'

export default {
  name: 'ShowBoard',
  data () {
    return {
      key: '',
      board: {}
    }
  },
  created () {
    const ref = firebase.firestore().collection('boards').doc(this.$route.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id;
        this.board = doc.data();
      } else {
        alert("No such document!");
      }
    });
  },
  methods: {
    editboard (id) {
      router.push({
        name: 'EditBoard',
        params: { id: id }
      })
    },
    deleteboard (id) {
      firebase.firestore().collection('boards').doc(id).delete().then(() => {
        router.push({
          name: 'BoardList'
        })
      }).catch((error) => {
        alert("Error removing document: ", error);
      });
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .edit-btn {
    margin-right: 20px;
    width: 70px;
  }
</style>
