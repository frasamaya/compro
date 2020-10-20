import { Component, OnInit } from '@angular/core';
//import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  public sendEmail(e: Event) {
    e.preventDefault();
  }
  ngOnInit(): void {
  }

}
