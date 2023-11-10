import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from './servicios/users.service';
import User from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'crudFirebase';

  users: User[];

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  async onSubmit() {
    // Add user
    const res = await this.userService.addUser(this.form.value);
  }

  async deleteUser(user: User) {
    const res = await this.userService.deleteUsers(user);
  }
}
