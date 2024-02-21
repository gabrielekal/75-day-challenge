<script setup lang="ts">
import { useRouter } from 'vue-router';
import BackArrow from "../components/BackArrow.vue"
import { useChallengeStore } from "../stores/useChallengeStore"


const router = useRouter();
const { currentDay } = useChallengeStore();
const days = Array.from({ length: 75 }, (_, i) => i + 1);

function onDayClick(day: number) {
  if (day <= currentDay) {
    router.push({ name: 'DayView', params: { day: Number(day) } });
  } else {
    console.log('You can only view past or current days.');
  }
}
</script>

<template>
  <main class="container" aria-label="Main Challenge Container">
    <BackArrow aria-label="Go back" />
    <hr>
    <div class="title-container">
      <h1 class="title" aria-label="Title of the Challenge">75-DAY?</h1>
    </div>
    <div class="circles-container" aria-label="Days Circles Container">
      <div
        class="circle"
        v-for="day in days"
        :key="day"
        @click="onDayClick(day)"
        @keydown.enter="onDayClick(day)"
        @keydown.space="onDayClick(day)"
        tabindex="0"
        :class="{
          'current-day': day === currentDay,
          'completed-day': day < currentDay
        }"
        :aria-label="day === currentDay ? 'Current Day ' + day : 'Day ' + day + (day < currentDay ? ' Completed' : '')">
        {{ day }}
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  height: 100vh;
}

.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
}

.circles-container {
  display: grid;
  grid-template-columns: repeat(6, 80px);
  gap: 1px;
  justify-content: center;
  max-width: 600px;
  margin: auto;
}

.circle {
  width: 80px;
  height: 80px;
  border-radius: 10%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border: 1px solid #344F34;
  font-size: 13px;
  font-weight: bold;
}

.circle:hover {
  background-color: #D08BB9;
}

.circle.current-day {
  background-color: #344F34;
  color: white;
}

.completed-day {
  background-color: #D08BB9;
  color: white;
}
</style>