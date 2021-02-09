import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-socialmediamarketingagencybangalore',
  templateUrl: './socialmediamarketingagencybangalore.component.html',
  styleUrls: ['./socialmediamarketingagencybangalore.component.css']
})
export class SocialmediamarketingagencybangaloreComponent implements OnInit {
  registerForm: any = FormGroup;
  bannerModalForm: any = FormGroup;

  submitted = false;
  arr: any[] = [];
  isFirstOpen = true;
  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder, private formBuilder1: FormBuilder) {
    title.setTitle('Social Media Marketing Company in Bangalore | Social Media Agencies');

    meta.addTags([
      {
        name: 'description',
        content: 'Social Media Marketing Company in Bangalore, Social Media Marketing Agencies in Bangalore, Top and Best Social Media Marketing Services Company/Agency in Bangalore'
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
        content: 'Social Media Marketing Company in Bangalore | Social Media Agencies'
      },
      {
        name: 'og:description',
        content: 'Social Media Marketing Company in Bangalore, Social Media Marketing Agencies in Bangalore, Top and Best Social Media Marketing Services Company/Agency in Bangalore'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/social-media-marketing-agency-bangalore/'
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
        content: 'Social Media Marketing Company in Bangalore, Social Media Marketing Agencies in Bangalore, Top and Best Social Media Marketing Services Company/Agency in Bangalore'
      },
      {
        name: 'twitter:title',
        content: 'Social Media Marketing Company in Bangalore | Social Media Agencies'
      }
    ]);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      organisation: ['', [Validators.required]],
      website: ['', [Validators.required]]
    });
    this.bannerModalForm = this.formBuilder1.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      fService: ['', [Validators.required]],
      fMessage: ['', [Validators.required]]
    });
  }
  get f() { return this.registerForm.controls; }
  get fbannermodal() { return this.bannerModalForm.controls; }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  modalRef: any = BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmits() {
    this.submitted = true;
    this.arr = this.registerForm.value;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const formName = this.registerForm.value.firstName;
    const formEmail = this.registerForm.value.email;
    const formPhone = this.registerForm.value.lastName;
    const formMessage = this.registerForm.value.password;
    const organisation = this.registerForm.value.organisation;
    const website = this.registerForm.value.website;


    this.httpClient.post('https://brandstory.in/assets/thank-you-banner-inline.php',
      {
        name: formName,
        email: formEmail,
        phone: formPhone,
        organisation: organisation,
        website: website,
        message: formMessage,
        page: "brandstory.in/development/seo/"

      })
      .subscribe(
        (data: any) => {
          //this.modalRef.hide();
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
        organisation: organisation,
        website: website,
        message: formMessage,
        page: "brandstory.in/development/seo/"
      })
      .subscribe(
        (data: any) => {
          //this.modalRef.hide();
          // this.router.navigate(['thank-you']);
          //  window.location.href = "https://brandstory.in/thank-you"
          // console.log(data);
        }
      )

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

  onSubmitBannerModal() {
    this.submitted = true;
    this.arr = this.bannerModalForm.value;

    //console.log(JSON.stringify( this.arr));
    //console.log(JSON.stringify( form.value));
    //console.log(JSON.stringify( form.value.fName));
    if (this.bannerModalForm.invalid) {
      return;
    }
    const formName = this.bannerModalForm.value.fName;
    const formEmail = this.bannerModalForm.value.fEmail;
    const formPhone = this.bannerModalForm.value.fPhone;
    const formService = this.bannerModalForm.value.fService;
    const formMessage = this.bannerModalForm.value.fMessage;


    this.httpClient.post('https://brandstory.in/assets/thank-you-banner-modal.php',
      {
        name: formName,
        email: formEmail,
        phone: formPhone,
        service: formService,
        message: formMessage,
        page: "brandstory.in/development/seo/"

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
        page: "brandstory.in/development/seo/"
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
