<template>
  <div class="cart-dialog">
    <h3>Panier</h3>
    <p>Articles choisis par l'utilisateur...</p>
    <button @click="$emit('close')">Fermer</button>
  </div>
</template>
<script setup>
// ...
</script>
<style>
.cart-dialog {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  max-width: 400px;
  margin: auto;
  text-align: center;
}
button {
  background: #42b983;
  color: #fff;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}
</style>
