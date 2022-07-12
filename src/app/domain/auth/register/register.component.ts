import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/models/interface/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    // this.auth.registerUser((user:User) => void{

    // })
  }


  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
}


function user(user: any) {
  throw new Error('Function not implemented.');
}

