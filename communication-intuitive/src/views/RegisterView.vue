<template>
  <div class="register-container">
    <h1 class="register-title">Créer un compte</h1>
    <form class="register-form">
      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit" class="register-btn">S'inscrire</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 3rem auto;
  padding: 2rem 1.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
}
.register-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #3a3a3a;
}
.register-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
label {
  font-weight: 500;
  color: #2a2a2a;
}
input {
  padding: 0.7rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}
.register-btn {
  background: #4caf50;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.7rem 1.2rem;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 1rem;
  transition: background 0.2s;
}
.register-btn:hover {
  background: #388e3c;
}
</style>
