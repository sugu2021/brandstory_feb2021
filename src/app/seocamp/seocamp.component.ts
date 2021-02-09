import { Component, OnInit,TemplateRef  } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
selector: 'app-seocamp',
templateUrl: './seocamp.component.html',
styleUrls: ['./seocamp.component.css']
})
export class SeocampComponent implements OnInit {
	registerForm:any = FormGroup;
  bannerModalForm:any = FormGroup;
  enquiryModal:any = FormGroup;
  // bannerModalForm:any = FormGroup;
  isCollapsed = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  submitted = false;
  arr: any[]=[];
  isFirstOpen = true;

  constructor(meta:Meta, title:Title,private modalService: BsModalService,private httpClient: HttpClient,private router: Router,private formBuilder: FormBuilder,private formBuilder1: FormBuilder) {
    title.setTitle('SEO Company in Bangalore | SEO Services Bangalore | SEO Agency Bangalore');

    meta.addTags([
      {
        name: 'description',
        content: 'SEO Company in Bangalore, SEO Services in Bangalore, SEO Agency in Bangalore, Best SEO Companies in Bangalore, SEO Services Agencies in Bangalore'
        },
      {
        name: 'keywords',
        content: 'SEO Company in Bangalore, SEO Services in Bangalore, SEO Agency in Bangalore, Best SEO Companies in Bangalore, SEO Services Agencies in Bangalore'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'SEO Company in Bangalore | SEO Services Bangalore | SEO Agency Bangalore'
      },
      {
        name: 'og:description',
        content: 'SEO Company in Bangalore, SEO Services in Bangalore, SEO Agency in Bangalore, Best SEO Companies in Bangalore, SEO Services Agencies in Bangalore'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/seo-company-bangalore/'
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
        content: 'SEO Company in Bangalore, SEO Services in Bangalore, SEO Agency in Bangalore, Best SEO Companies in Bangalore, SEO Services Agencies in Bangalore'
      },
      {
        name: 'twitter:title',
        content:'SEO Company in Bangalore | SEO Services Bangalore | SEO Agency Bangalore'
      }
    ]);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
     // password: ['', [Validators.required]],
      organisation: ['', [Validators.required]],
      message: ['', [Validators.required]],
		website: ['', [Validators.required]]
  });
  this.bannerModalForm = this.formBuilder1.group({
    fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
    fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    fPhone:  ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
    fService: ['', [Validators.required]],
    fMessage: ['', [Validators.required]]
});
  }
  get f() { return this.registerForm.controls; }
  get fbannermodal() { return this.bannerModalForm.controls; }
  get fenquiryModal() { return this.enquiryModal.controls; }


  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  modalRef:any = BsModalRef;

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
      const formMessage = this.registerForm.value.message;
      const organisation = this.registerForm.value.organisation;
      const website = this.registerForm.value.website;
//const budget = this.registerForm.value.budget;


      this.httpClient.post('https://brandstory.in/assets/thank-you-banner-inline-landing-seo.php',
      {
        name:formName,
        email: formEmail,
        phone: formPhone,
        message: formMessage,
        organisation: organisation,
        website: website,
		//  budget:budget,
        page:"brandstory.in/seocamp/"

      })
      .subscribe(
        (data:any) => {
          //this.modalRef.hide();
          // this.router.navigate(['thank-you']);
         window.location.href = "https://brandstory.in/thank-you"
          console.log(data);
        }
      )

      this.httpClient.post('https://brandstory.in/assets/customer_mail_2021.php',
      {
        name:formName,
        email: formEmail,
        phone: formPhone,
        message: formMessage,
        organisation: organisation,
        website: website,
		//  budget:budget,
        page:"brandstory.in/seocamp/"

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
  onSubmitEnquiryModal() {
    this.submitted = true;
    this.arr = this.bannerModalForm.value;


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
      name:formName,
      email: formEmail,
      phone: formPhone,
      service: formService,
      message: formMessage,
      page:"brandstory.in/seo-company-bangalore/"

    })
    .subscribe(
      (data:any) => {
        this.modalRef.hide();
        // this.router.navigate(['thank-you']);
       window.location.href = "https://brandstory.in/thank-you"
        console.log(data);
      }
    )

    this.httpClient.post('https://brandstory.in/assets/customer_mail_2021.php',
    {
      name:formName,
      email: formEmail,
      phone: formPhone,
      service: formService,
      message: formMessage,
      page:"brandstory.in/seo-company-bangalore/"

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

