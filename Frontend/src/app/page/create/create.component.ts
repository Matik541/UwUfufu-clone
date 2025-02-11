import { Component } from '@angular/core';
import {
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormArray,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-create',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  quizDetailsForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(500),
    ]),
  });
  quizEntriesForm = new FormGroup({
    entries: new FormArray([]),
  });

  constructor() {
  }

  get entries() {
    return this.quizEntriesForm.get('entries') as FormArray;
  }

  addEntry() {
    this.entries.push(
      new FormGroup({
        image: new FormControl('', [Validators.required]),
        caption: new FormControl('', [
          Validators.required,
          Validators.maxLength(50),
        ]),
      })
    );
  }

  removeEntry(index: number) {
    this.entries.removeAt(index);
  }

  uploadImage(index: number) {}

  submit() {
    console.log(this.quizDetailsForm.value);
    console.log(this.quizEntriesForm.value);
  }
}
