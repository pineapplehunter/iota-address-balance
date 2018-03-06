<template>
  <div>
    <AddressView v-for="addr in addresses" :address="addr" :provider="provider" :key="addr" />

    <div class="input-group">
      <input type="text" class="form-control" placeholder="new Address..." v-model="new_address">
      <span class="input-group-btn">
        <button class="btn btn-success" type="button" :disabled="!address_ok" @click="show_new_address()">show</button>
      </span>
    </div>
  </div>
</template>

<script>
import AddressView from '@/components/Main/AddressView'

export default {
  components: {AddressView},
  name: 'iota-adress-balance',
  data () {
    return {
      new_address: ''
    }
  },
  computed: {
    address_ok: function () {
      const pat = /^[A-Z9]{90}$/i
      const result = pat.test(this.new_address)
      return result
    },
    addresses () { return this.$store.state.addresses },
    provider () { return this.$store.state.provider }
  },
  methods: {
    show_new_address: function () {
      // if (this.addresses.indexOf(this.new_address) === -1) {
      //   this.addresses.push(this.new_address)
      // }
      // this.new_address = ''
      if (this.$store.state.addresses.indexOf(this.new_address) === -1) {
        this.$store.state.addresses.push(this.new_address)
      }
      this.new_address = ''
    },
    set_provider: function () {}
  },
  created: function () {}
}
</script>

<style scoped>
#set-provider-btn {
  margin-bottom: 10px;
}
</style>
