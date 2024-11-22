import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlicePipe } from './pipes/slice.pipe';
import { LoaderComponent } from './loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SlicePipe,
    LoaderComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ], 
  exports: [
    SlicePipe,
    LoaderComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
