import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/shared/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  loading = false;

  cols = [];
  managerOptions = [];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

    /*this.cols = [

      {prop: 'username', name: 'User Name'},
      {prop: 'password', name: 'Password'}
    ];*/

    this.userForm = this.formBuilder.group({
      'username': [null, [Validators.required, Validators.minLength(15)]],
      'password': [null, [Validators.required, Validators.minLength(16)]]
    });
  }

  get f() {
    return this.userForm.controls;
  }

  login() {
    this.userService.login(this.userForm.value).subscribe((data) => {
      if (data === true) {
        this.router.navigate([`../dashboard`], {relativeTo: this.route});
      } else {
        this.loading = true;
      }
    });
  }
}
