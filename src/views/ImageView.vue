<script setup lang="ts">
import BackArrow from "../components/BackArrow.vue"
</script>

<template>
    <div class="image-library-page" aria-label="Image Library Page">
      <BackArrow aria-label="Go back" />
      <div class="content">
        <h1 aria-label="Page Title">WORK IN PROGRESS 📷</h1>
        <p aria-label="Page Description">Your exciting photo library will launch soon, as it is currently under construction. Please check back later.</p>
      </div>
    </div>
  </template>

<style scoped>
.image-library-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.content {
  text-align: center;
}

h1 {
  font-size: 50px;
  color: #344F34;
  font-family: Anton, sans-serif;
}

p {
  font-size: 20px;
  color: #666;
  margin-bottom: 2px;
}
</style>