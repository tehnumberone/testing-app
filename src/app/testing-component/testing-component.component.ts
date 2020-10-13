import {Component, OnInit} from '@angular/core';
import {TestingService} from '../services/testing.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-testing-component',
  templateUrl: './testing-component.component.html',
  styleUrls: ['./testing-component.component.css']
})
export class TestingComponentComponent implements OnInit {

  constructor() {
  }

  text: any;
  form: FormGroup = new FormGroup({
    text: new FormControl(''),
  });

  ngOnInit(): void {
  }

  public testMethod() {
    console.log(this.text);
  }
}
