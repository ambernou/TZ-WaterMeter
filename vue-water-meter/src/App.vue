<script>
import NumberInputComp from './components/NumberInput.vue';
import NewDataInputComp from './components/NewDataInput.vue';

export default {
  name: 'App',
  components: { NumberInputComp, NewDataInputComp },
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
    <NumberInputComp  v-if="newReq"/>
    <NewDataInputComp v-if="getData" :userData="userData"/>
  </div>
</template>

<style scoped>
</style>
