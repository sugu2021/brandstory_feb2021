import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-steam',
  templateUrl: './steam.component.html',
  styleUrls: ['./steam.component.css']
})
export class SteamComponent implements OnInit {
  submitted = false;
  enquiryModal: any = FormGroup;
  arr: any[] = [];

  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('SEO Team | Digital Marketing Quote | Digital marketing company in Bangalore');

    meta.addTags([
      {
        name: 'description',
        content: 'SEO Team, Digital marketing Agencies in Bangalore , online Marketing company In Bangalore , Best digital marketing Agencies in Bangalore'
      },
      {
        name: 'keywords',
        content: 'SEO Team, Digital marketing Agencies in Bangalore , online Marketing company In Bangalore , Best digital marketing Agencies in Bangalore'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'SEO Team | Digital Marketing Quote | Digital marketing company in Bangalore'
      },
      {
        name: 'og:description',
        content: 'SEO Team, Digital marketing Agencies in Bangalore , online Marketing company In Bangalore , Best digital marketing Agencies in Bangalore'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/careers/'
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
        content: 'SEO Team, Digital marketing Agencies in Bangalore , online Marketing company In Bangalore , Best digital marketing Agencies in Bangalore'
      },
      {
        name: 'twitter:title',
        content: 'SEO Team | Digital Marketing Quote | Digital marketing company in Bangalore'
      }
    ]);
  }

  ngOnInit() {

    this.enquiryModal = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      fService: ['', Validators.required],
      fMessage: ['', Validators.required]
    });
  }

  get fenquiryModal() { return this.enquiryModal.controls; }

  modalRef: any = BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  onSubmitEnquiryModal() {
    this.submitted = true;
    this.arr = this.enquiryModal.value;

    if (this.enquiryModal.invalid) {
      return;
    }

    const formName = this.enquiryModal.value.fName;
    const formEmail = this.enquiryModal.value.fEmail;
    const formPhone = this.enquiryModal.value.fPhone;
    const formService = this.enquiryModal.value.fService;
    const formMessage = this.enquiryModal.value.fMessage;


    this.httpClient.post('https://brandstory.in/assets/thank-you-enquiry-modal.php',
      {
        name: formName,
        email: formEmail,
        phone: formPhone,
        service: formService,
        message: formMessage,
        page: "brandstory.in/steam"

      })
      .subscribe(
        (data: any) => {
          this.modalRef.hide();
          // this.router.navigate(['thank-you']);
          window.location.href = "https://brandstory.in/thank-you"
          console.log(data);
        }
      )

    this.httpClient.post('https://brandstory.in/assets/customer_mail_2021.php',
      {
        name: formName,
        email: formEmail,
        phone: formPhone,
        service: formService,
        message: formMessage,
        page: "brandstory.in/steam"
      })
      .subscribe(
        (data: any) => {
          //this.modalRef.hide();
          // this.router.navigate(['thank-you']);
          //  window.location.href = "https://brandstory.in/thank-you"
          // console.log(data);
        }
      )

  }
}
