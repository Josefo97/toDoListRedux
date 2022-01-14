import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// ngrx
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';

import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    StoreModule.forRoot({ count: todoReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
