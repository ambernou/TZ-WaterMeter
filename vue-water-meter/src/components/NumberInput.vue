<script>
import axios from 'axios'

export default {
  name: 'NumberInputComp',
  data(){
    return{
      form: {
        number: ''
      }
    }
  },
  methods: {
    form_handler(){
      axios.post('/number', this.form)
      .then(response => {
        console.log('answer: ', response.data)
        this.$store.commit('setNewReq', false)
        this.$store.commit('setGetData', true)
        this.$store.commit('setNewUserData', response.data)
      })
      .catch(error => console.log('error: ', error))
    }
  }
}
</script>

<template>
  <div>
    <h2>Введите номер лицевого счета:</h2>
    <form @submit.prevent="form_handler">
      <div>
        <label for="number"></label>
        <input type="text" id="number" placeholder="Ваш номер" v-model="form.number">
      </div>
      <button>Отправить</button>
    </form>
  </div>
</template>

<style scoped>

</style>
