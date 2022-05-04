import { Component, OnInit } from '@angular/core';
import { DbGetSetService } from '../db-get-set.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor(private _dbGetSet: DbGetSetService) { }

  dbGetSetDataArr: any = [];

  ngOnInit() {
    this._dbGetSet.userCredGet().subscribe(dbGetSetData => this.dbGetSetDataArr = dbGetSetData);
  }

  
}
