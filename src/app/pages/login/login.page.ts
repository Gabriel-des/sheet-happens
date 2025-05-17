import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../components/button/button.component";
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent
]
})
export class LoginPage implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  public loginForm: FormGroup;

  public ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });
  }

  public login(): void {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (response) => {
        localStorage.setItem('access_token', response.access_token);
        this.router.navigate(['/home']);
      },
      (error) => {
        alert('Error: ' + error.error.message);
      }
    );
  }

  public validIfFieldIsInvalidAndTouched(field: string): boolean | undefined {
    return this.loginForm.get(field)?.invalid && (this.loginForm.get(field)?.dirty || this.loginForm.get(field)?.touched);
  }

  public validRequiredOfField(field: string): boolean {
    return this.loginForm.get(field)?.errors?.['required']
  }

  public validIfFieldIsCorrect(field: string): boolean {
    return this.loginForm.get(field)?.errors?.[field]
  }

  public validMinLengthOfField(field: string): boolean {
    return this.loginForm.get(field)?.errors?.['minlength']
  }

}
