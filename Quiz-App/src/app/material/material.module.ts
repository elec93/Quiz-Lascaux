import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
/** Error when invalid control is dirty, touched, or submitted. */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  exports: [MatButtonModule, MatSelectModule, MatToolbarModule],
})
export class MaterialModule {}
