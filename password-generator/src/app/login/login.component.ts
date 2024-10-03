import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  passwordLength = 10;
  includeUppercase = true;
  includeLowercase = true;
  includeNumbers = true;
  includeSymbols = false;
  generatedPassword = '';
  passwordStrength = 'MEDIUM';

  generatePassword() {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()';

    let availableChars = '';
    if (this.includeUppercase) availableChars += uppercaseChars;
    if (this.includeLowercase) availableChars += lowercaseChars;
    if (this.includeNumbers) availableChars += numberChars;
    if (this.includeSymbols) availableChars += symbolChars;

    this.generatedPassword = Array.from({ length: this.passwordLength }, () => {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      return availableChars[randomIndex];
    }).join('');

    this.updatePasswordStrength();
  }

  updatePasswordStrength() {
    let strengthScore = 0;

    if (this.includeUppercase) strengthScore++;
    if (this.includeLowercase) strengthScore++;
    if (this.includeNumbers) strengthScore++;
    if (this.includeSymbols) strengthScore++;

    if (this.passwordLength >= 15) strengthScore++;

    const strengthLevels = ['WEAK', 'MEDIUM', 'STRONG', 'VERY STRONG'];
    this.passwordStrength = strengthLevels[strengthScore - 1] || 'WEAK';
  }
}


