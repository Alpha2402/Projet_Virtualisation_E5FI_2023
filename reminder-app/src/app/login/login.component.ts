import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  showMessage: boolean = false;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }
  

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.loggedOut === 'true') {
        this.showMessage = true;
      }
    });
  }

  onSubmit(): void {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/reminders']);
    } else {
      alert('Invalid email or password');
    }
  }
}
