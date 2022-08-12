import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-router.module';
import { AppComponent } from './app.component';
import { NavContainerComponent } from './components/nav-container/nav-container.component';
import { NavDrawerComponent } from './components/nav-drawer/nav-drawer.component';
import { NavContentComponent } from './components/nav-content/nav-content.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataDrawerComponent } from './components/data-drawer/data-drawer.component';
import { DataContainerComponent } from './components/data-container/data-container.component';
import { DataContentComponent } from './components/data-content/data-content.component';
import { AltComponent } from './components/alt/alt.component';
import { SizeRefDirective } from './size-ref.directive';
import { AppSvgComponent } from './components/app-svg/app-svg.component';


@NgModule({
  declarations: [
    AppComponent,
    NavContainerComponent,
    NavDrawerComponent,
    NavContentComponent,
    HomeComponent,
    DataDrawerComponent,
    DataContainerComponent,
    DataContentComponent,
    AltComponent,
    SizeRefDirective,
    AppSvgComponent,
    // AppRoutingModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [SizeRefDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
