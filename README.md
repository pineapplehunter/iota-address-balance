# iota-adress-balance
an app that shows the iota balance of each address

# Start
Just download from the releases.

You can see your balance by just typing in your addrress in the text box.

# from source
start by cloning this repo.

```bash
git clone https://github.com/peshogo/iota-address-balance.git
```

install the dependencies and build a dev version of it.

```bash
npm install
npm run dev
# OR
# yarn
# yarn dev
```

# for mac
I can't build this for mac, because don't have mac building environment.
if you have a mac and you want to build it first see the from source section.

after cloning and installing dependencies, you can build it by these commands.

```
npm install -g electron-builder
electron-builder -m
```

the app will be generated in `/build/`

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[1c165f7](https://github.com/SimulatedGREG/electron-vue/tree/1c165f7c5e56edaf48be0fbb70838a1af26bb015) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
