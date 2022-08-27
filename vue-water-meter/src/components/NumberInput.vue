<script>
import axios from 'axios'

export default {
  name: 'NumberInputComp',
  data(){
    return{
      form: {
        number: ''
      },
      errorNotNumber: false,
      errorNumberNotExist: false
    }
  },
  methods: {
    form_handler(){
      if (/\D+/.test(this.form.number)) {
        this.errorNotNumber = true
      } else {
        this.errorNotNumber = false
        this.errorNumberNotExist = false
        // axios.post('/number', this.form)
        axios.post('http://localhost:3000/number', this.form)
        .then(response => {
          console.log('answer: ', response.data)
          this.$store.commit('setNewReq', false)
          this.$store.commit('setGetData', true)
          this.$store.commit('setNewUserData', response.data)
        })
        .catch(error => {
          this.errorNumberNotExist = true
          console.log('error: ', error)
        })
      }
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
        <input type="text" id="number" placeholder="Ваш номер" v-model="form.number" required>
      </div>
      <button>Отправить</button>
    </form>
    <h4>Рабочий номер для тестирования: 12345</h4>
    <h3 v-if="errorNotNumber">Введите номер своего счета, состоящий только из цифр!</h3>
    <h3 v-if="errorNumberNotExist">Номер не найден</h3>
  </div>
</template>

<style scoped>
input {
  font-size: 28px;
  padding: 4px;
}

button {
  font-size: 24px;
  padding: 4px;
  margin: 10px 0 0 0;
}

h3 {
  color: red;
}
</style>
