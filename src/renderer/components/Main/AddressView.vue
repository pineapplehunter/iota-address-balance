<template>
	<div class="card" id="addressview">
    <div class="card-body card-text">
      <p>{{ address }}</p>
      <div class="text-right">
        <span class="badge" :class="badge.type" v-if="badge.show">
          {{badge.text}}
        </span>
        <h2 id="value">
          {{ balance }} <strong>{{ unit }}</strong>
        </h2>
        <button type="button" class="btn btn-outline-secondary btn-sm" @click="refresh_balance()">Refresh</button>
        
      </div>
    </div>
  </div>
</template>

<script>
import { getBalance, isSpent, getIotaApi } from '@/components/IotaTools/tools'

export default {
  name: 'address-view',
  data () {
    return {
      balance: '',
      unit: '',
      badge: {
        show: false,
        text: '',
        type: ''
      }
    }
  },
  props: {
    address: {
      type: String,
      required: true
    },
    provider: {
      type: String,
      required: true
    }
  },
  methods: {
    refresh_balance: function () {
      let vm = this
      vm.balance = 'Loading...'
      vm.unit = ''
      vm.badge.show = false

      async function r () {
        const iota = getIotaApi(vm.provider)
        const Pb = getBalance(iota, vm.address)
        const Pspent = isSpent(iota, vm.address)

        const b = await Pb
        const spent = await Pspent

        vm.balance = b.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        vm.unit = 'i'

        if (spent === true) {
          vm.badge.text = 'used'
          vm.badge.type = 'badge-danger'
        } else {
          if (b > 0) {
            vm.badge.text = 'has value'
            vm.badge.type = 'badge-success'
          } else {
            vm.badge.text = 'no value'
            vm.badge.type = 'badge-primary'
          }
        }

        vm.badge.show = true
      }
      r()
    }
  },
  created: function () {
    this.refresh_balance()
  }
}
</script>

<style scoped>
#value {
  display: inline;
}

#addressview {
  margin-bottom: 20px;
}
</style>

