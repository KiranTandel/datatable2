import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatatableComponent } from './datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DatatableComponent]
})
export class AppModule { }
