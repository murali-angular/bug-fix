import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing/main-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ContactComponent, MainComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]


})
export class MainModule { }
