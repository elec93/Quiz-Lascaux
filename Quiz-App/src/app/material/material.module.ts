import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormControl,
  FormGroupDirective,
  FormsModule,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

/** Error when invalid control is dirty, touched, or submitted. */

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, FormsModule],
  exports: [MatSelectModule, MatFormFieldModule],
})
export class MaterialModule {}
