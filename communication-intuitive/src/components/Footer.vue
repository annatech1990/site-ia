<template>
  <footer class="footer">
    <div class="links">
      <a href="#">Réseaux sociaux</a>
      <a href="#">Newsletter</a>
      <a href="#">Mentions légales</a>
    </div>
    <div class="copyright">
      &copy; 2025 Communication Intuitive Animale
    </div>
  </footer>
</template>
<script setup>
// ...
</script>
<style>

.footer {
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  padding: 1.5rem 0 1rem 0;
  text-align: center;
  margin-top: 2rem;
  box-shadow: 0 -2px 12px rgba(34, 11, 76, 0.07);
  border-top: 1px solid #e0e0e0;
  color: #3B2E2B;
}
.links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}
.links a {
  color: #3B2E2B;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background 0.2s, color 0.2s;
}
.links a:hover {
  background: rgba(37, 95, 142, 0.08);
  color: rgb(37, 95, 142);
}
</style>
