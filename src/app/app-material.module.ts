import { NgModule }          from '@angular/core';
import { MatButtonModule }   from '@angular/material';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule
  ],
})
export class AppMaterialModule { }