import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppShell } from './tailwindtest/app-shell/app-shell';
import { SideMenuDesktopComponent } from './tailwindtest/side-menu/side-menu-desktop/side-menu-desktop';
import { SideMenuMobileComponent } from './tailwindtest/side-menu/side-menu-mobile/side-menu-mobile';


@NgModule({
  declarations: [
    AppShell,
    SideMenuDesktopComponent,
    SideMenuMobileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppShell]
})
export class AppModule { }
