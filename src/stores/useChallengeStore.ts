import { defineStore } from 'pinia';
import type { Day } from '../day';
import useRuleStore from './useRuleStore';

interface ChallengeState {
  currentDay: number;
  days: Day[];
}

export const useChallengeStore = defineStore('challenge', {
  state: (): ChallengeState => {
    const storedState = localStorage.getItem('challengeState');
    const initialState: ChallengeState = storedState
      ? JSON.parse(storedState)
      : {
          currentDay: 1,
          days: Array.from({ length: 75 }, (_, dayNumber) => ({
            dayNumber: dayNumber + 1,
          })),
        };
    return initialState;
  },
  actions: {
    saveChallengeState() {
      try {
        const stateToSave = { currentDay: this.currentDay };
        const serializedState = JSON.stringify(stateToSave);
        localStorage.setItem('challengeState', serializedState);
      } catch (error) {
        console.error('Error saving state to local storage:', error);
      }
    },
    incrementDay() {
      this.currentDay += 1;
      this.saveChallengeState();
    },
    checkDayCompletion(day: number) {
      const rulesCompleted = useRuleStore().checkedRules[day.toString()];
      const allRulesCompleted =
        rulesCompleted &&
        rulesCompleted[1] &&
        rulesCompleted[2] &&
        rulesCompleted[3] &&
        rulesCompleted[4] &&
        rulesCompleted[6];

      if (allRulesCompleted) {
        if (day < 75) {
          this.incrementDay();
        }
      }
    },
  },
});

export default useChallengeStore;
