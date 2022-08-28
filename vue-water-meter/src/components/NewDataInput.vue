<script>
import axios from 'axios'

export default {
  name: 'NewDataInputComp',
  props: ['userData'],
  data(){
    return{
      form: {
        coldWaterData: '',
        hotWaterData: '',
      },
      errorMessage: '',
      error: false
    }
  },
  methods: {
    form_handler(){
      if (/\D+/.test(this.form.coldWaterData) || /\D+/.test(this.form.hotWaterData)) {
        this.error = true
        this.errorMessage = 'Введите числовые значения!'
      } else {
        this.error = false
      axios.post('/newdata', this.form)
      // axios.post('http://localhost:3000/newdata', this.form)
      .then(response => {
        console.log('answer: ', response.data)
        this.$store.commit('setGetData', false)
        })
      .catch(error => console.log('error: ', error))
      }
    }
  }
}
</script>

<template>
  <div>
    <h2>Номер вашего счета: {{ userData.id }}</h2>
    <form @submit.prevent="form_handler">
      <div>
        <label for="coldWater" class="labelText">Счетчик холодной воды № {{ userData.coldWater.number }}</label>
        <p class="labelText">Предыдущие показания: {{ userData.coldWater.value }}</p>
        <input type="text" id="coldWater" placeholder="Текущие показания" v-model="form.coldWaterData" required>
      </div>
      <br/>
      <div>
        <label for="hotWater" class="labelText">Счетчик горячей воды № {{ userData.hotWater.number }}</label>
        <p class="labelText">Предыдущие показания: {{ userData.hotWater.value }}</p>
        <input type="text" id="hotWater" placeholder="Текущие показания" v-model="form.hotWaterData" required>
      </div>
      <button>Отправить текущие показания</button>
    </form>
    <h3 v-show="error">{{ this.errorMessage }}</h3>
  </div>
</template>

<style scoped>
.labelText {
  font-size: 20px;
}
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
