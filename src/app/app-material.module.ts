import { NgModule }          from '@angular/core';
import { MatButtonModule }   from '@angular/material';
import { MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatSidenavModule
  ],
  exports: [
    MatButtonModule, 
    MatSidenavModule
  ],
})
export class AppMaterialModule { }