<template>
  <div id="CountNumber">
    <h1>{{ name }}</h1>
    <ul v-for="(product, key) in saleProducts" :key="key">
      <li>{{ product.name }}{{ product.price }}</li>
    </ul>
    <button @click="reducePrice(4)">降价</button>
  </div>
</template>

<script>
export default {
  name: "CountNumber",
  data() {
    return {
      name: ""
    };
  },
  computed: {
    products() {
      //console.log(this.$store.state.name);
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  },
  methods: {
    reducePrice(amount) {
      //this.$store.commit("reducePrice");
      this.$store.dispatch("reducePrice", amount);
    }
  }
};
</script>
