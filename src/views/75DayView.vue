<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from "vue";
import BackArrow from "../components/BackArrow.vue"
import { useChallengeStore } from "../stores/useChallengeStore"

const router = useRouter();
const challengeStore = useChallengeStore();
const totalDays = 75;
const currentDay = ref(totalDays - challengeStore.currentDay);

function navigateToWeight() {
  router.push({ name: 'weight' });
}

function navigateToImage() {
  router.push({ name: 'image' });
}
</script>

<template>
  <main class="container">
    <BackArrow aria-label="Go back" />
    <hr>
    <button type="button" class="days-left-btn background-btn" tabindex="0" aria-label="Information about Days Left">{{ currentDay }} DAYS LEFT</button>
    <button type="button" class="rules-btn background-btn" @click="navigateToWeight" tabindex="0" aria-label="Navigate to Weight Tracker">YOUR WEIGHT TRACKER</button>
    <button type="button" class="rules-btn background-btn" @click="navigateToImage" tabindex="0" aria-label="Navigate to Image Library">YOUR PHOTO LIBRARY</button>
  </main>
</template>

<style scoped>
.container {
  border-radius: 10%;
  text-align: center;
}

.days-left-btn,
.rules-btn {
  display: flex;
  width: 100%;
  height: 212px;
  background-color: #344F34;
  padding: 60px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  border: 1px solid #D08BB9;
  color: white;
  font-family: Anton, sans-serif;
  font-size: 40px;
}

.rules-btn::after {
  font-size: 20px;
}
</style>
