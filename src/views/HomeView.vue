<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateToSoftChallenge() {
  router.push({ name: 'challenge' });
}

function navigateToRules() {
  router.push({ name: 'rules' });
}

function navigateToProgress() {
  router.push({ name: 'progress' });
}

function navigateToAbout() {
  router.push({ name: 'about' });
}
</script>

<template>
  <main class="container">
    <div class="vertical-title-container" @click="navigateToAbout" @keydown.enter="navigateToAbout" tabindex="0" aria-label="Navigate to About Page">
      <h1 class="title">75-DAY?</h1>
    </div>

    <div class="buttons-container">
      <button type="button" class="circular-btn" @click="navigateToSoftChallenge" tabindex="0" aria-label="Navigate to Challenge Page">
        CHALLENGE
      </button>

      <button type="button" class="circular-btn" @click="navigateToProgress" tabindex="0" aria-label="Navigate to Progress Page">
        PROGRESS
      </button>
    </div>

    <button type="button" class="rules-btn background-btn" @click="navigateToRules" tabindex="0" aria-label="Navigate to Rules of the Challenge Page">
      RULES OF THE CHALLENGE
    </button>
  </main>
</template>

<style scoped>
.container {
  background-color: white;
  border-radius: 10%;
  text-align: center;
}

.vertical-title-container {
  margin-top: 10px;
  width: 100%;
  height: 300px;
  display: flex;
  background-color: #344F34;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  border: 1px solid #D08BB9;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.vertical-title-container::after {
  content: "➜";
  font-family: Anton, sans-serif;
  position: absolute;
  left: 100%;
  top: 0;
  height: 100%;
  width: 100%;
  background: #D08BB9;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}

.vertical-title-container:hover::after {
  left: 0;
}

.vertical-title-container:hover h1 {
  color: transparent;
}

.title {
  color: white;
  margin: 0;
  font-family: Anton, sans-serif;
  font-size: 100px;
}

.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.rules-btn {
  display: flex;
  width: 100%;
  height: 160px;
  background-color: #344F34;
  padding: 60px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  border: 1px solid #D08BB9;
  color: white;
  font-family: Anton, sans-serif;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.rules-btn::after {
  content: "➜";
  position: absolute;
  left: 100%;
  top: 0;
  height: 100%;
  width: 100%;
  background: #D08BB9;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.rules-btn:hover::after {
  left: 0;
}

.rules-btn:hover {
  color: transparent;
}

.circular-btn {
  font-family: Anton, sans-serif;
  font-size: 30px;
  position: relative;
  margin: 1px;
  padding: 10px;
  border-radius: 40px;
  width: 100%;
  height: 220px;
  text-align: center;
  border: none;
  color: white;
  background: #D08BB9;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.3s ease;
}

.circular-btn::after {
  content: "➜";
  position: absolute;
  font-size: 20px;
  left: 100%;
  top: 0;
  height: 100%;
  width: 100%;
  background: #D08BB9;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.circular-btn:hover::after {
  left: 0;
}

.circular-btn:hover {
  color: transparent;
}

.circular-btn:first-child {
  background-color: #344F34;
  border: 1px solid #D08BB9;
}

.circular-btn:last-child {
  background-color: #344F34;
  border: 1px solid #D08BB9;

}
</style>