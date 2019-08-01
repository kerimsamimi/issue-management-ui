import { NgModule } from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {BsModalRef, ModalModule} from 'ngx-bootstrap';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [BsModalRef],
  exports: [
    TranslateModule,
    ModalModule,
    ReactiveFormsModule,
    ConfirmationComponent
  ],
  declarations: [ConfirmationComponent, NotfoundComponent],
  entryComponents: [
    ConfirmationComponent
  ]
})
export class SharedModule { }
