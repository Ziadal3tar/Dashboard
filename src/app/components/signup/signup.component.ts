import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  type: string = 'password';
  see:string ='bi-eye-slash'
  hide() {
    if (this.type == 'password') {
      this.type = 'text';
      this.see = 'bi-eye'
    } else {
      this.type = 'password';
      this.see = 'bi-eye-slash'

    }
  }
}
