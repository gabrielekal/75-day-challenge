import './assets/main.css';
import './assets/globalStyles.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import useRuleStore from './stores/useRuleStore';
import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

const ruleStore = useRuleStore();

ruleStore.setRules([
  {
    id: 1,
    title: 'BALANCED EATING',
    description: 'Maintaining a healthy diet.',
  },
  {
    id: 2,
    title: 'SINGLE DAY WORKOUT',
    description: 'Completing a 45-minute workout.',
  },
  {
    id: 3,
    title: 'HYDRATION GOAL',
    description: 'Drinking 3 liters of water.',
  },
  {
    id: 4,
    title: 'READING FOR GROWTH',
    description: 'Reading 10 pages.',
  },
  {
    id: 5,
    title: 'PROGRESS DOCUMENTATION:',
    enableImageUpload: true,
  },
  {
    id: 6,
    title: 'WEIGHT TRACKER:',
    enableTextInput: true,
  }
]);

ruleStore.loadState();

pinia.use(() => ruleStore);

app.use(router);

app.mount('#app');
