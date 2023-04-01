// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'reminder-app';
// }

//****************** */
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'reminder-app'

//   isLoggedIn = false;

//   constructor(private router: Router) {}

//   onLogout(): void {
//     // Ici, vous pouvez également supprimer les informations d'authentification stockées, si nécessaire.
//     this.isLoggedIn = false;
//     this.router.navigate(['/login'], { queryParams: { loggedOut: 'true' } });
//   }
// }


import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  isLoggedIn = false;
  private loggedInSubscription: Subscription;

  constructor(private router: Router, private authService: AuthService) {
    this.loggedInSubscription = this.authService.loggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login'], { queryParams: { loggedOut: 'true' } });
  }

  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
  }
}