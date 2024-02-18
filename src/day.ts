export interface Day {
  dayNumber: number;
  rulesCompleted: { [ruleId: number]: boolean };
}