import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dataToChild= "Tanuj Data from parent";
  switch = false;
  color = 'red';
  colorAr = ['red', 'green', 'blue'];
  data = ['tanuj', 'aman', 'virendra', 'ankit']
 dataFromSecondChild = "data from parent";
  dataObj = [
    {
      name: 'tanuj',
      age: 25,
      occupation: 'Software Engineer'
    },
    {
      name: 'aman',
      age: 26,
      occupation: 'Operations Engineer'
    },
    {
      name: 'virendra',
      age: 22,
      occupation: 'Student'
    }
  ]


  userObj = [];

  dynamicColor = 'tomato';

  constructor() { }

  ngOnInit(): void {
  }
  getUserName() {
    alert("Tanuj Mittal");
  }

  getParameter(parameter) {
    alert(parameter);
  }

  myFunction(event) {
    console.warn(event);
  }

  inputSwitch() {
    this.switch = !this.switch;
  }

  colorSwitch() {
    this.color = (this.colorAr[(Math.floor(Math.random() * (3)) + 0)]);
  }

  getUserValue(value) {
    console.log(value);
    this.userObj.push(value);
  }


  dyanamicStyleChange(e) {
    this.dynamicColor = e.dynamicColor;
  }

  toSecondChild(e){
     this.dataFromSecondChild = e;
  }
  // function randomInteger(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
}
