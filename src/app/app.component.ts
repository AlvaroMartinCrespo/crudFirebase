import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from './servicios/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crudFirebase';

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private userService: UsersService) {}

  async onSubmit() {
    console.log(this.form.value);
    const res = await this.userService.addUser(this.form.value);
    console.log(res);
  }
}
