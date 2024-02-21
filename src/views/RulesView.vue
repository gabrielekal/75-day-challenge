<script setup lang="ts">
import BackArrow from "../components/BackArrow.vue"

const titleCircles = [
    { id: 1, type: 'text', content: 'RULES OF 75-DAY?' },
    { id: 2, type: 'picture', src: "../images/rules_14.jpeg", alt: 'girl with glass' },
    { id: 3, type: 'text', content: 'Balanced Eating: Maintain a healthy diet, allowing alcohol consumption only in social settings.' },
    { id: 4, type: 'picture', src: '../images/rules_10.jpg', alt: 'blueberries' },
    { id: 5, type: 'picture', src: '../images/rules_9.jpg', alt: 'girl exercising' },
    { id: 6, type: 'text', content: 'Single Daily Workout: Complete one 45-minute workout session each day.' },
    { id: 7, type: 'text', content: 'Hydration Goal: Drink 3 liters of water daily.' },
    { id: 8, type: 'picture', src: '../images/rules_11.jpg', alt: 'water glass' },
    { id: 9, type: 'text', content: 'Reading for Growth: Read 10 pages of a non-fiction self-development book every day.' },
    { id: 10, type: 'picture', src: '../images/rules_12.jpg', alt: 'girl reading a book' },
    { id: 11, type: 'picture', src: '../images/rules_15.jpeg', alt: 'girl wearing jeans' },
    { id: 12, type: 'text', content: 'Progress Documentation: Take a daily progress picture of your body.' },
];
</script>

<template>
    <main class="view" aria-label="Main Rules view">
        <main class="container">
          <BackArrow aria-label="Go back" />
            <hr><br>
            <div class="circles-container">
              <div
                class="rules-circle"
                v-for="item in titleCircles"
                :key="item.id"
                :class="{ 'special-text': item.content === 'RULES OF 75-DAY?' }"
                :aria-label="item.content">
                <template v-if="item.type === 'picture'">
                    <img :src="item.src" :alt="item.alt" class="circle-image" />
                </template>
                <template v-else-if="item.type === 'text'">
                    {{ item.content }}
                </template>
            </div>
            </div>
        </main>
    </main>
</template>

<style scoped>
.circles-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  justify-content: center;
  margin: auto;
}

.rules-circle {
  height: 230px;
  border-radius: 10%;
  background-color: #344F34;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid #D08BB9;
  font-size: 12px;
  text-align: center;
}

.circle-image {
  width: 100%;
  height: 100%;
  border-radius: 10%;
  object-fit: cover;
}

.container {
  height: 100vh;
  padding: 10px;
  margin: 10px;
}

.special-text {
  font-family: Anton, sans-serif;
  font-size: 50px;
}

@media screen and (width <= 600px) {
  .circles-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>