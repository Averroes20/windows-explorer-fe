import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { TreeModule } from 'primeng/tree';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesktopComponent } from './desktop/desktop.component';
import { NavbarComponent } from './feature/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    TreeModule,
    SidebarModule, 
    ButtonModule, 
    RippleModule, 
    AvatarModule, 
    StyleClassModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
