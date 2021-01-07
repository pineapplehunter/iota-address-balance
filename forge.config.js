module.exports = {
    publishers: [{
        name: '@electron-forge/publisher-github',
        config: {
            repository: {
                owner: 'pineapplehunter',
                name: 'iota-address-balance'
            },
            prerelease: true
        }
    }]
}