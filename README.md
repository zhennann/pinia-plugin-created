Support `created` lifecycle hook in your pinia 🍍 store!

## Installation

```sh
npm install pinia-plugin-created
```

## Usage

```js
import Vue from 'vue';
import { createPinia, PiniaVuePlugin, defineStore } from 'pinia';
import { PiniaPluginCreated } from 'pinia-plugin-created';

// install pinia
Vue.use(PiniaVuePlugin);

// create pinia
const pinia = new createPinia();

// install pinia plugin
pinia.use(PiniaPluginCreated);
```

You can then use a `created` option in your stores:

```js
defineStore('id', {
  state() {
    return {
      ...
    };
  },
  created() {
    ...
  },
  actions: {
    ...
  },
})
```

## License

MIT