import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';
import { DynamicComponent } from './dynamic.component';
import { FarewellComponent } from './components/farewell.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FarewellComponent,
    DynamicComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
