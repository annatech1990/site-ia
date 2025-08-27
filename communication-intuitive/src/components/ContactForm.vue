<template>
  <form class="contact-form">
    <h3>Contact</h3>
    <input type="text" placeholder="Nom" required />
    <input type="email" placeholder="Email" required />
    <textarea placeholder="Votre message" required></textarea>
    <button type="submit">Envoyer</button>
  </form>
</template>
<script setup>
// ...
</script>
<style>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(34, 11, 76, 0.07);
  max-width: 400px;
  margin: 1.5rem auto;
}
button {
  background: rgb(37, 95, 142);
  color: #fff;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 24px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(34, 11, 76, 0.08);
  transition: background 0.2s, box-shadow 0.2s;
}
button:hover {
  background: rgb(34, 11, 76);
  box-shadow: 0 4px 16px rgba(34, 11, 76, 0.12);
}
</style>
