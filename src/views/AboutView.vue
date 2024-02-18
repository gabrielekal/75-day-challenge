<script setup lang="ts">
import BackArrow from "../components/BackArrow.vue"

const circles = [
    { id: 1, type: 'text', content: 'ABOUT' },
    { id: 2, type: 'picture', src: "../images/rules_13.jpeg", alt: 'sport1' },
    { id: 3, type: 'text', content: '75-DAY?' },
];
</script>


<template>
    <main class="view">
        <main class="container">
            <BackArrow />
            <hr><br>
            <div class="circles-container">
            <div class="circle" v-for="item in circles" :key="item.id">
                <template v-if="item.type === 'picture'">
                    <img :src="item.src" :alt="item.alt" class="circle-image" />
                </template>
                <template v-else-if="item.type === 'text'">
                    {{ item.content }}
                </template>
            </div>
            </div>
            <section class="challenge-description">
                <h2>Self-Improvement Journey</h2>
                <p>The 75 Day Challenge is a thoughtfully designed program for those seeking significant improvements in mental and physical resilience. Beyond fitness, it's a transformative journey demanding steadfast discipline.</p>
                <p>Contrary to rigidity, the challenge offers flexibility. Missing a day doesn't require a restart, providing a forgiving experience suitable for beginners in personal growth.</p>
                <p>Spanning 75 days, this challenge enhances well-being. Whether boosting mental resilience, improving fitness, or embarking on personal growth, it offers a structured and transformative experience aligned with your aspirations. Explore more about this challenge on our 'Rules' page to discover its potential as a catalyst for positive change.</p>
                <hr>
            </section>
        </main>
    </main>
</template>

<style scoped>

.container {
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 20px;

  /* max-width: 600px; */
  margin: auto;
}

.circles-container {
  display: flex;
  grid-template-columns: repeat(3, 2fr);
  justify-content: center;
  max-width: 600px;
  margin: auto;
}


.circle {
  width: 155px;
  height: 155px;
  border-radius: 10%;
  background-color: #344F34;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid #D08BB9;
  font-size: 30px;
  font-family: Anton, sans-serif;
}


.circle-image {
  width: 100%;
  height: 100%;
  border-radius: 10%;
  object-fit: cover;
}


.challenge-description h2 {
    color: #344F34;
    margin-top: 20px;
    font-weight: bold;
    font-size: 25px;
}


.challenge-description p {
  line-height: 1.6;
  color: #333;
  font-size: 14px;
  margin-bottom: 20px;
}

</style>