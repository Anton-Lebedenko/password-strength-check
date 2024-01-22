import { indicatorsColorsRulesMap, PasswordStrengthStatus } from "../constants";

export function getIndicatorsColorsRule(strengthStatus: PasswordStrengthStatus): string[] {
  return indicatorsColorsRulesMap[strengthStatus];
}
