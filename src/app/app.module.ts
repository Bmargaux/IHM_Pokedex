import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

import {MatListModule} from '@angular/material/list';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { ServiceAccesApiService } from './service-acces-api.service';

import {MatCardModule} from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';

import {CarouselModule} from 'primeng/carousel';
import {DialogModule} from 'primeng/dialog';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    CarouselModule,
    DialogModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    DropdownModule,
    ButtonModule,
    MatButtonModule
  ],
  providers: [ServiceAccesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
