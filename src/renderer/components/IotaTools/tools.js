import IOTA from 'iota.lib.js'

const iota = new IOTA({
  'provider': 'https://nodes.thetangle.org:443'
})

async function getBalance (address) {
  return new Promise((resolve, reject) => {
    iota.api.getBalances([address], 1, (err, resp) => {
      if (err) {
        reject(err)
      } else {
        resolve(resp.balances[0])
      }
    })
  })
}

async function isSpent (address) {
  return new Promise((resolve, reject) => {
    iota.api.wereAddressesSpentFrom(address, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res[0])
      }
    })
  })
}

export {
  getBalance,
  isSpent
}
