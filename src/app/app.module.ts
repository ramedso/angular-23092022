import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CompoundInterestComponentComponent } from './components/compound-interest-component/compound-interest-component.component';
import { SimpleInterestComponentComponent } from './components/simple-interest-component/simple-interest-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CompoundInterestComponentComponent,
    SimpleInterestComponentComponent,
    HeaderComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
