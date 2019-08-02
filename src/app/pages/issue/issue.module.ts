
import { IssueComponent } from './issue.component';
import {IssueRoutingModule} from './issue.routing.module';
import {IssueService} from '../../services/shared/issue.service';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';

@NgModule({
  imports: [
    CommonModule,
    IssueRoutingModule,
    SharedModule,
    NgxDatatableModule
  ],
  providers: [IssueService],
  declarations: [IssueComponent, IssueDetailComponent]
})
export class IssueModule { }
