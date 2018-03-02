<template>
  <div id="app">
    <div v-for="addr in addresses" v-bind:key="addr">
      <AddressView :address="addr" />
    </div>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="new Address..." v-model="newaddress">
      <span class="input-group-btn">
        <button class="btn btn-success" type="button" :disabled="!address_ok" @click="show_new_address()">show</button>
      </span>
    </div>
  </div>
</template>

<script>
import AddressView from '@/components/AddressView'

export default {
  components: {AddressView},
  name: 'iota-adress-balance',
  data () {
    return {
      addresses: [
        'SSCBRWUNIGSYLQJWZNZXVGCOY9OGO9DKYLZFJMPZRC9BWH9QPCTLHYKKFSRNZ9DRVWEVPS9OBWIFCTASAEHKLTPLXW'
      ],
      newaddress: ''
      // show_button_color: 'sucsess'
    }
  },
  computed: {
    address_ok: function () {
      const pat = /[A-Z9]{90}/i
      const result = pat.test(this.newaddress)
      // console.log(result)
      return result
    }
  },
  methods: {
    show_new_address: function () {
      // console.log(this.addresses.indexOf(this.newaddress))
      if (this.addresses.indexOf(this.newaddress) === -1) {
        this.addresses.push(this.newaddress)
      }
      this.newaddress = ''
    }
  }
}
</script>

<style>
  /* CSS */
#app {
  padding: 20px;
}
</style>
