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

  formObj = {
    isLoginDisabled : true,
    email: '' ,
    password: '',
  }

  changeLoginStatus(event:any) {
    event.target.checked ? 
        this.formObj.isLoginDisabled = false : this.formObj.isLoginDisabled = true;
  }
}
