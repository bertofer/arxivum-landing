import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { FeaturesComponent } from './features/features.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { StartedComponent } from './started/started.component';
import { FooterComponent } from './footer/footer.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
    FeaturesComponent,
    TechnologiesComponent,
    StartedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
