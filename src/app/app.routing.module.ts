import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLayoutComponent} from './_layout/app-layout/app-layout.component';
import {NotfoundComponent} from './shared/notfound/notfound.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {
    path: '', component: AppLayoutComponent,

    children: [
      {path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule'},
      {path: 'issue', loadChildren: './pages/issue/issue.module#IssueModule'},
      {path: 'project', loadChildren: './pages/project/project.module#ProjectModule'}
    ]
  },
  {path: '**', component: NotfoundComponent}
];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {
}
