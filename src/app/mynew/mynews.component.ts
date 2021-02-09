import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title ,Meta} from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mynew',
  templateUrl: './mynews.component.html',
  styleUrls: ['./mynews.component.css']
})
export class MynewComponent implements OnInit {
  submitted = false;
  enquiryModal:any= FormGroup;
  arr: any[]=[];
  constructor(meta:Meta, title:Title,private httpClient: HttpClient,private router: Router,private formBuilder: FormBuilder) {
    title.setTitle('Brandstory Solutions Private Limited Contact Us Location Information');

    meta.addTags([
      {
        name: 'description',
        content: 'Brandstory Solutions Private Limited: No 5, 1st Cross, 3rd Floor Krishna Reddy Colony, Domlur Layout, Bangalore, Karnataka – 560071. Mobile: +91 9811599577 Email: info@brandstory.in. Digital Marketing Company in Bangalore Contact Us Location.'
        },
      {
        name: 'keywords',
        content: 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Brandstory Solutions Private Limited Contact Us Location Information'
      },
      {
        name: 'og:description',
        content: 'Brandstory Solutions Private Limited: No 5, 1st Cross, 3rd Floor Krishna Reddy Colony, Domlur Layout, Bangalore, Karnataka – 560071. Mobile: +91 9811599577 Email: info@brandstory.in. Digital Marketing Company in Bangalore Contact Us Location.'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/contact-us/'
      },
      {
        name: 'og:site_name',
        content: 'Digital Marketing Agency | Digital Marketing Company Bangalore | SEO Company'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:description',
        content: 'Brandstory Solutions Private Limited: No 5, 1st Cross, 3rd Floor Krishna Reddy Colony, Domlur Layout, Bangalore, Karnataka – 560071. Mobile: +91 9811599577 Email: info@brandstory.in. Digital Marketing Company in Bangalore Contact Us Location.'
      },
      {
        name: 'twitter:title',
        content:'Brandstory Solutions Private Limited Contact Us Location Information'
      }
    ]);
  }

  ngOnInit() {
    this.enquiryModal = this.formBuilder.group({
      fName: ['', Validators.required],
      fEmail: ['', [Validators.required, Validators.email]],
      fPhone:  ['', Validators.required],
      company: ['', Validators.required],
      fService: ['', Validators.required],
      fMessage: ['', Validators.required]
    });
  }

  get fenquiryModal() { return this.enquiryModal.controls; }

   onSubmit(form:NgForm ) {
    this.arr = form.value;
    console.log(JSON.stringify( this.arr));
    console.log(JSON.stringify( form.value));
    console.log(JSON.stringify( form.value.fName));

    const formName = form.value.fName;
    const formEmail = form.value.fEmail;
    const formPhone = form.value.fPhone;
    const formService = form.value.fService;
    const formMessage = form.value.fMessage;

    let head = new HttpHeaders();
    head.append('Access-Control-Allow-Headers', 'Content-Type');
    head.append('Access-Control-Allow-Methods', 'GET');
    head.append('Access-Control-Allow-Origin', '*');
    this.httpClient.post('https://brandstory.in/assets/thank-you1.php',
    {
      name:formName,
      email: formEmail,
      phone: formPhone,
      service: formService,
      message: formMessage,
      page:"brandstory.in/contact-us"

    })
    .subscribe(
      (data:any) => {
        // this.router.navigate(['thank-you']);
       window.location.href = "https://brandstory.in/thank-you"
        console.log(data);
      }
    )

   }

   onSubmitEnquiryModal( ) {
    this.submitted = true;
    this.arr = this.enquiryModal.value;

    if (this.enquiryModal.invalid) {
      return;
  }
    //console.log(JSON.stringify( this.arr));
    //console.log(JSON.stringify( form.value));
    //console.log(JSON.stringify( form.value.fName));

    const formName = this.enquiryModal.value.fName;
    const formEmail = this.enquiryModal.value.fEmail;
    const formPhone = this.enquiryModal.value.fPhone;
    const company = this.enquiryModal.value.company;
    const formService = this.enquiryModal.value.fService;
    const formMessage = this.enquiryModal.value.fMessage;


    this.httpClient.post('https://brandstory.in/assets/contact-usmail.php',
    {
      name:formName,
      email: formEmail,
      phone: formPhone,
      company: company,
      service: formService,
      message: formMessage,
      page:"brandstory.in/contact"

    })
    .subscribe(
      (data:any) => {
        //this.modalRef.hide();
       // this.router.navigate(['thank-you']);
       window.location.href = "https://brandstory.in/thank-you"
        console.log(data);
      }
    )


   }
}