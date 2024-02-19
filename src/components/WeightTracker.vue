<script setup lang="ts">
import { defineProps, ref} from "vue";
import useRuleStore from '../stores/useRuleStore';
import useChallengeStore from "../stores/useChallengeStore";

const props = defineProps(['rule', 'currentDay']);
const weightInput = ref('');
let submittedWeight: number | null = null;
const $store = useRuleStore();
const $challengeStore = useChallengeStore();
const weightSubmitted = ref(false);

function handleWeightInput(event: Event) {
    weightInput.value = (event.target as HTMLInputElement).value.replace(/[^0-9.]/g, '')
}

function handleSubmit() {
    const weight = parseFloat(weightInput.value);
    $store.saveWeight(props.currentDay.toString(), weight)

    submittedWeight = weight;
    weightSubmitted.value = true;

    $challengeStore.checkDayCompletion(props.currentDay);
}

function closeModal() {
    weightSubmitted.value = false;
}
</script>

<template>
    <div v-if="props.rule.enableTextInput" class="weight-input-container">
      <input
        type="number"
        :id="`weight-input-${props.rule.id}`"
        @input="handleWeightInput"
        :value="submittedWeight !== null ? submittedWeight.toString() : weightInput"
        placeholder="Enter weight"
        min="0"
        step="0.1"
        aria-label="Enter weight in kilograms"
      />
      <button type="button" @click="handleSubmit">Submit</button>
      <div v-if="weightSubmitted" class="overlay">
        <div class="modal">
          <p>Your weight {{ submittedWeight }} kg has been submitted.</p>
          <button type="button" class="close" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

  <style scoped>
  .weight-input-container {
    align-items: center;
  }

  button {
    display: block;
    background-color: #D08BB9;
    color: white;
    padding: 5px 10px;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
    width: 90px;
    margin-bottom: 10px;
  }

  button:hover {
    background-color: #EA738DFF;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0 0 0 / 50%);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    max-width: 300px;
    text-align: center;
    color: #344F34;
    display: flex;
    flex-direction: column;
  }

  .modal p {
    margin-bottom: 10px;
  }
  .modal button {
    background-color: #D08BB9;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
    align-self: center;
    margin-top: auto;
  }

  .modal button:hover {
    background-color: #EA738DFF;
  }

  input {
    width: 90px;
    margin-right: 10px;
    height: 25px;
    border-radius: 5px;
  }

  </style>