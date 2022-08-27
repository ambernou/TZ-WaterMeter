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
      }
    }
  },
  methods: {
    form_handler(){
      axios.post('/newdata', this.form)
      .then(response => console.log('answer: ', response.data))
      .catch(error => console.log('error: ', error))
    }
  }
}
</script>

<template>
  <div>
    <h2>Номер вашего счета: {{ userData.id }}</h2>
    <form @submit.prevent="form_handler">
      <div>
        <label for="coldWater">Счетчик холодной воды № {{ userData.coldWater.number }}</label><br/>
        <span>Предыдущие показания: {{ userData.coldWater.value }}</span>
        <input type="text" id="coldWater" placeholder="Текущие показания" v-model="form.coldWaterData">
      </div>
      <br/>
      <div>
        <label for="hotWater">Счетчик горячей воды № {{ userData.hotWater.number }}</label><br/>
        <span>Предыдущие показания: {{ userData.hotWater.value }}</span>
        <input type="text" id="hotWater" placeholder="Текущие показания" v-model="form.hotWaterData">
      </div>
      <button>Отправить текущие показания</button>
    </form>
  </div>
</template>

<style scoped>

</style>
