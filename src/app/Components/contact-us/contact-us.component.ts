import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/Services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  });

  constructor(private _ContactUsService: ContactUsService) { }

  ngOnInit(): void {
  }

  sentContactUs(data: FormGroup) {
    this._ContactUsService.sendToContact(data.value).subscribe({
      next: (res) => {
        console.log(res);
        console.log(data.value);

      },
      error: (err) => {
        console.log(err);
      },
      complete: ()=>{
        console.log('Completed Request - Successfully !');
      }
    })
  }
}
