import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // use @ViewChild to access form not just at time of submission but also earlier
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female', 'other'];
  user = {
    userName: '',
    email: '',
    question: '',
    answer: '',
    gender: '',
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // use setValue to set the valur for the entire form accessed via @ViewChild
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    // use `.form.patchValue` to set value for a specific input
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }
  // You can alternatively use @ViewChild if you would like to access the form
  // onSubmit(form: NgForm) {
  //   console.log(form);

  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.userName = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.question = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }

}
