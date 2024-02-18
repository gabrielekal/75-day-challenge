import { defineStore } from 'pinia';
import type { Rule } from '../rules';

interface RuleStore {
  checkedRules: Record<string, Record<number, boolean>>;
  weights: Record<string, number | null>;
  rules: Rule[];
  setRules: (rules: Rule[]) => void;
  toggleCheck: (day: string, ruleId: number) => void;
  saveState: () => void;
  loadState: () => void;
  saveWeight: (day: string, weight: number) => void;
  loadWeight: (day: string) => number | null;
}

export const useRuleStore = defineStore('rule', {
  state: (): RuleStore => ({
    checkedRules: {},
    weights: {},
    rules: [],
    setRules(rules) {
      this.rules = rules;
    },
    toggleCheck(day: string, ruleId: number) {
      if (!this.checkedRules[day]) {
        this.checkedRules[day] = {};
      }
      const checkedRules = this.checkedRules[day];
      checkedRules[ruleId] = !checkedRules[ruleId];

      const allRulesCompleted =
        checkedRules[1] &&
        checkedRules[2] &&
        checkedRules[3] &&
        checkedRules[4] &&
        checkedRules[6];

        if (allRulesCompleted) {
        this.saveState();
      }
        this.saveState();
    },
    saveWeight(day, weight) {
      const rule6Completed = !Number.isNaN(weight);
      if (!this.checkedRules[day]) {
        this.checkedRules[day] = {};
      }
      this.checkedRules[day][6] = rule6Completed;

      this.weights[day] = weight;
      localStorage.setItem(`day-${day}`, weight.toString());
      this.saveState();
    },
    loadWeight(day) {
      const storedWeight = localStorage.getItem(`day-${day}`);
      return storedWeight !== null ? parseInt(storedWeight, 10) : null;
    },
    saveState() {
      localStorage.setItem('ruleStore', JSON.stringify(this.checkedRules));
    },
    loadState() {
      const storedState = localStorage.getItem('ruleStore');
      if (storedState) {
        this.checkedRules = JSON.parse(storedState);
      }
    },
  }),
});

export default useRuleStore;
