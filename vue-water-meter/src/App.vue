<script>
import NumberInputComp from './components/NumberInput.vue';
import NewDataInputComp from './components/NewDataInput.vue';
import SuccessfulMessageComp from './components/SuccessfulMessage.vue';

export default {
  name: 'App',
  components: { NumberInputComp, NewDataInputComp, SuccessfulMessageComp },
  data() {
    return {}
  },
  computed: {
    newReq() {
      return this.$store.state.newReq
    },
    getData() {
      return this.$store.state.getData
    },
    userData() {
      return this.$store.state.userData
    }
  }
}
</script>

<template>
  <div>
    <NumberInputComp v-if="newReq"/>
    <NewDataInputComp v-if="getData" :userData="userData"/>
    <SuccessfulMessageComp v-if="(newReq == false && getData == false)"/>
  </div>
</template>

<style scoped>
</style>
