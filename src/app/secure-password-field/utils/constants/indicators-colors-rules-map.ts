import { Colors } from "./colors.enum";
import { PasswordStrengthStatus } from "./password-strength-status.enum";

export const indicatorsColorsRulesMap: { [status: string]: string[] } = {
  [PasswordStrengthStatus.Empty]: [Colors.Gray, Colors.Gray, Colors.Gray],
  [PasswordStrengthStatus.NotEnoughLength]: [Colors.Red, Colors.Red, Colors.Red],
  [PasswordStrengthStatus.Easy]: [Colors.Red, Colors.Gray, Colors.Gray],
  [PasswordStrengthStatus.Medium]: [Colors.Yellow, Colors.Yellow, Colors.Gray],
  [PasswordStrengthStatus.Strong]: [Colors.Green, Colors.Green, Colors.Green]
};
