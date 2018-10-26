import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  // create a place to store the form
  signupForm: FormGroup;
  // used to chack against our custom validator
  existingUserNames = ['ben', 'tom'];

  ngOnInit() {
    // create controls for the form with new FormGroup
    // use Validators for form validators, use and array for more than one Validator
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.existingNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      // create new FromArray
      'hobbies': new FormArray([])
    });

    // to subscibe to any changes in of the values in the form
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    // to subscribe to any changes in the status of the form
    // this.signupForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );

    // to set the default value for the whole form
    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Ian',
    //     'email': 'ian@test.com'
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // });

    // to set the default value for one form control
    // this.signupForm.patchValue({
    //   'userData': {
    //     'username': 'sam'
    //   }
    // });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  // create new form control into a FormArray
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // create a custom validator
  existingNames(control: FormControl): {[s: string]: boolean} {
    if (this.existingUserNames.indexOf(control.value) !== -1) {
      return {'nameAlreadyExists': true};
    }
    return null;
  }

  // create an Async custom validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbbiden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}

