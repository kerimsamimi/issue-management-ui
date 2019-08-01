import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  private body: string;
  private header: string;
  public onClose: Subject<boolean>;
  private active: boolean;

  constructor(private bsModalRef: BsModalRef) {
  }

  ngOnInit() {
    this.onClose = new Subject();
  }

  public showConfirmation(header: string, body: string): void {
    this.body = body;
    this.header = header;
    this.active = true;
  }

  // tslint:disable-next-line:one-line
  onConfirm() {
    this.active = false;
    this.onClose.next(true);
    this.bsModalRef.hide();
  }

  onCancel() {
    this.active = false;
    this.onClose.next(false);
    this.bsModalRef.hide();
  }
}
