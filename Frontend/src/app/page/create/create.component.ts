import {Component, inject} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormArray} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-create',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  quizDetailsForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(500)]),
  });
  quizEntriesForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.quizEntriesForm = this.formBuilder.group({
      entries: this.formBuilder.array([
        this.formBuilder.group({
          image: ['', [Validators.required]],
          caption: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        })
      ])
    });
  }

  get entries() {
    return this.quizEntriesForm.get('entries') as FormArray;
  }

  addEntry() {
    this.entries.push(this.formBuilder.group({
      image: ['', [Validators.required]],
      caption: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    }));
  }
}
