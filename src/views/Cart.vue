<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="image">
        <img :src="'/images/products/'+product.image">
      </div>
      <div class="info">
        <p class="price">${{(product.price.slice(1) * product.quantity).toFixed(2)}}</p>
        <h1>{{product.name}}</h1>
      </div>
      <div class="quantity">
        <button v-on:click="removeFromCart(product)">-</button>
        {{product.quantity}}
        <button v-on:click="addToCart(product)">+</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Cart',
  methods: {
    removeFromCart(product) {
      for (let i = 0; i < this.$root.$data.cart.length; i++) {
        if (product.id == this.$root.$data.cart[i].id) {
          this.$root.$data.cart[i].quantity--;
          if (this.$root.$data.cart[i].quantity == 0) {
            this.$root.$data.cart.splice(i, 1);
          } else {
            this.$root.$data.cart.push(0);
            this.$root.$data.cart.pop();
          }
          return;
        }
      }
    },
    addToCart(product) {
      for (let i = 0; i < this.$root.$data.cart.length; i++) {
        if (product.id == this.$root.$data.cart[i].id) {
          this.$root.$data.cart[i].quantity++;
          this.$root.$data.cart.push(0);
          this.$root.$data.cart.pop();
          return;
        }
      }
    },
  },
  computed: {
    products() {
      return this.$root.$data.cart;
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  color: #000;
  padding: 10px 30px;
  height: 85px;
}

.info h1 {
  font-size: 16px;
  text-align: center;
}

.info .price {
  text-align: center;
  font-size: 140%;
  font-weight: 700;
  margin: 0px;
  margin-bottom: 5px;
}

.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
}

button {
  height: 50px;
  background-color: #fff;
  color: blue;
  border: none;
  margin: 0px 10px;
}

.auto {
  margin-left: auto;
}
</style>