import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seomaster',
  templateUrl: './seomaster.component.html',
  styleUrls: ['./seomaster.component.css']
})

export class SeomasterComponent implements OnInit {
  arr: any[] = [];
  registerForm: any = FormGroup;

  submitted = false;
  constructor(meta: Meta, title: Title, private route: ActivatedRoute, private modalService: BsModalService, private httpClient: HttpClient, private router: Router) {


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
        content: 'Brandstory Solutions Private Limited Contact Us Location Information'
      }
    ]);

  }


  ngOnInit() {

  }


  scrollToElement($element: any): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  modalRef: any = BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  get f() { return this.registerForm.controls; }
  onSubmits() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const formName = this.registerForm.value.firstName;
    const formEmail = this.registerForm.value.email;
    const formPhone = this.registerForm.value.lastName;
    const formMessage = this.registerForm.value.password;


    this.httpClient.post('https://brandstory.in/assets/thank-you-banner-inline.php',
      {
        name: formName,
        email: formEmail,
        phone: formPhone,
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
}

