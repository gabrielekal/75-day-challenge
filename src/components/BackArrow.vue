<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToHome = () => {
  router.push('/');
}
</script>

<template>
  <button class="back-arrow" @click="goToHome" type="button">
    ←
  </button>
</template>

<style scoped>
.back-arrow {
  font-size: 25px;
  cursor: pointer;
  top: 20px;
  left: 20px;
  border: none;
  background: transparent;
  color: #344F34;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
}

.back-arrow:hover {
  color: #D08BB9;
}
</style>