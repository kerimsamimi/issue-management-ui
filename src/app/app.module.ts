import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {FooterComponent} from './_layout/footer/footer.component';
import {HeaderComponent} from './_layout/header/header.component';
import {AppLayoutComponent} from './_layout/app-layout/app-layout.component';
import {SidebarComponent} from './_layout/sidebar/sidebar.component';
import {ApiService} from './services/api.service';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ProjectService} from './services/shared/project.service';
import {IssueService} from './services/shared/issue.service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ModalModule} from 'ngx-bootstrap';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {UserService} from './services/shared/user.service';
import {IssueHistoryService} from './services/shared/issue.history.service';
import {NotfoundComponent} from './shared/notfound/notfound.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './pages/login/login.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AppLayoutComponent,
    SidebarComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgxDatatableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule
  ],
  providers: [ApiService, ProjectService, IssueService, UserService, IssueHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
