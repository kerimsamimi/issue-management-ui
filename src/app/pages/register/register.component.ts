import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/shared/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  modalRef: BsModalRef;
  equality = true;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'username': [null, [Validators.required, Validators.minLength(15)]],
      'password': [null, [Validators.required, Validators.minLength(16)]],
      'passwordConfirm': [null, [Validators.required, Validators.minLength(16)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  register() {
    if (this.registerForm.value['password'] === this.registerForm.value['passwordConfirm']) {
      this.userService.login(this.registerForm.value).subscribe((data) => {
        this.router.navigate([`../register`], {relativeTo: this.route});
      });
      /* if (!this.registerForm.valid) {
         return;
       }*/
      this.userService.register(this.registerForm.value).subscribe(
        response => {
          // this.closeAndResetModal();
        }
      );
      this.equality = true;
      this.loading = true;
    } else {
      this.equality = false;
    }
  }


  closeAndResetModal() {
    this.registerForm.reset();
    this.modalRef.hide();
  }
}
