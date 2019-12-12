import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NavModule } from "./navigation/navigation.module";
import { DataService } from "./services/data-service";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    NavModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    // FoldersResolver,
    DataService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
