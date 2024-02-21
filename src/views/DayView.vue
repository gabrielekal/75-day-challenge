<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import BackArrow from "../components/BackArrow.vue"
import useRuleStore from '../stores/useRuleStore'
import ImageUpload from "../components/ImageUpload.vue"
import WeightTracker from "../components/WeightTracker.vue"
import useChallengeStore from '../stores/useChallengeStore';
import type { Rule } from '../rules';

const props = defineProps(['day']);
const ruleStore = useRuleStore();
const challengeStore = useChallengeStore();
const rules = ref<Rule[]>([]);
const uploadedImages = ref<any[]>([]);

const isChecked = (rule: Rule): boolean => {
  return ruleStore.checkedRules[props.day] && ruleStore.checkedRules[props.day][rule.id];
};

onMounted(() => {
  rules.value = ruleStore.rules;
});

function toggleCheck(rule: Rule) {
  ruleStore.toggleCheck(props.day, rule.id);
  challengeStore.checkDayCompletion(props.day);
}
</script>

<template>
  <main class="container" aria-label="Main Day content">
    <BackArrow aria-label="Go back" />
    <hr>
    <div class="title-container">
      <h1 class="title" aria-label="Current day">DAY {{ day }}</h1>
    </div>
    <div class="circles-container">
      <div
        class="circle"
        v-for="rule in rules"
        :key="rule.id"
        tabindex="0"
        :aria-label="`Rule ${rule.id}`"
      >
        <h3>{{ rule.title }}</h3>
        <p>{{ rule.description }}</p>

        <ImageUpload :rule="rule" :uploadedImages="uploadedImages" />
        <WeightTracker :rule="rule" :currentDay="day" />

        <div v-if="rule.id !== 5 && rule.id !== 6" class="custom-checkbox">
          <input type="checkbox" :id="`checkbox-${rule.id}`" :checked="isChecked(rule)" @change="() => toggleCheck(rule)">
          <label :for="`checkbox-${rule.id}`" class="checkmark"></label>
        </div>
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
  grid-template-columns: repeat(2, 230px);
  gap: 1px;
  justify-content: center;
  max-width: 600px;
  margin: auto;
}

.circle {
  width: 230px;
  height: 230px;
  border-radius: 10%;
  background-color: #344F34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #D08BB9;
  color: white;
}

.circle h3 {
  margin-bottom: 10px;
  margin-top: 0;
  font-size: 18px;
  font-family: Anton, sans-serif;
  height: 40px;
  line-height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.circle p {
  font-size: 14px;
  margin: 5px 0;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.custom-checkbox .checkmark {
  position: relative;
  height: 15px;
  width: 15px;
  background-color: #eee;
  display: inline-block;
  border-radius: 5px;
  margin-right: 10px;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #D08BB9;
}

.custom-checkbox .checkmark::after {
  left: 5px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked ~ .checkmark::after {
  display: block;
}

.circle textarea {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  color: #D08BB9;
  font-size: 12px;
  margin-bottom: 0;
}
</style>