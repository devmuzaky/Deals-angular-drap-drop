import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BoardComponent} from './components/board-component/board.component';
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import {StageColumnComponent} from './components/stage-column/stage-column.component';
import {DealCard} from './components/deal-card/deal-card';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClientModule} from "@angular/common/http";
import {MatTooltipModule} from "@angular/material/tooltip";
import {CardDatePipe} from './pipes/card-date/card-date.pipe';
import {CardPhonePipe} from './pipes/card-phone/card-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    StageColumnComponent,
    DealCard,
    CardDatePipe,
    CardPhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
