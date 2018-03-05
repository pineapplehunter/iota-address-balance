import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    provider: 'https://nodes.thetangle.org:443',
    addresses: [
      'SSCBRWUNIGSYLQJWZNZXVGCOY9OGO9DKYLZFJMPZRC9BWH9QPCTLHYKKFSRNZ9DRVWEVPS9OBWIFCTASAEHKLTPLXW'
    ]
  }
})
