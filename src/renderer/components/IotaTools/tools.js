import IOTA from 'iota.lib.js'

function getIotaApi (uri) {
  return new IOTA({
    'provider': uri
  })
}

async function getBalance (iota, address) {
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

async function isSpent (iota, address) {
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
  isSpent,
  getIotaApi
}
