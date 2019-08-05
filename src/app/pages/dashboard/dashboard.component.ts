import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Page} from '../../common/page';
import {UserService} from '../../services/shared/user.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmationComponent} from '../../shared/confirmation/confirmation.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  modalRef: BsModalRef;
  userForm: FormGroup;

  @ViewChild('tplProjectDeleteCell') tplProjectDeleteCell: TemplateRef<any>;

  page = new Page();
  cols = [];
  rows = [];
  managerOptions = [];
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private userService: UserService, private modalService: BsModalService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.cols = [

      {prop: 'id', name: 'No'},
      {prop: 'nameSurname', name: 'User Name', sortable: false},
      {prop: 'email', name: 'Email', sortable: false},
      {prop: 'id', name: '', cellTemplate: this.tplProjectDeleteCell, sortable: false}
    ];

    this.setPage({offset: 0});
    this.userForm = this.formBuilder.group({
      'nameSurname': [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]]
    });

    this.userService.getAll().subscribe(res => {
      this.managerOptions = res;
      console.log(res);
    });

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  get f() {
    return this.userForm.controls;
  }

  setPage(pageInfo) {
    this.page.page = pageInfo.offset;
    this.userService.getAllPageable(this.page).subscribe(pagedData => {
      this.page.size = pagedData.size;
      this.page.page = pagedData.page;
      this.page.totalElements = pagedData.totalElements;
      this.rows = pagedData.content;
    });
  }

  saveUser() {
    if (!this.userForm.valid) {
      return;
    }

    this.userService.createUser(this.userForm.value).subscribe(
      response => {
        this.setPage(this.page);
        this.closeAndResetModal();
      }
    );
  }

  closeAndResetModal() {
    this.userForm.reset();
    this.modalRef.hide();
  }

  showDeleteConfirmation(value): void {
    const modal = this.modalService.show(ConfirmationComponent);
    (<ConfirmationComponent>modal.content).showConfirmation(
      'Delete Confirmation',
      'Are you sure for delete Project'
    );

    (<ConfirmationComponent>modal.content).onClose.subscribe(result => {
      if (result === true) {
        this.userService.delete(value).subscribe(response => {
          if (response === true) {
            this.setPage({offset: 0});
          }
        });
      } else if (result === false) {
      }
    });
  }
}
