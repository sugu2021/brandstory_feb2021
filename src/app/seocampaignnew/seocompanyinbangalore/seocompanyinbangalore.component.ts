import { Component, OnInit,TemplateRef  } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title ,Meta} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-seocompanybangalore',
  templateUrl: './seocompanyinbangalore.component.html',
  styleUrls: ['./seocompanyinbangalore.component.css']
})
export class SeocompanyinbangaloreComponent implements OnInit {
  registerForm:any = FormGroup;
  bannerModalForm:any = FormGroup;
  caseStudyForm:any = FormGroup;
  enquiryModal:any = FormGroup;
  isCollapsed = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  submitted = false;
  arr: any[]=[];
  isFirstOpen = true;

  constructor(meta:Meta, title:Title,private modalService: BsModalService,private httpClient: HttpClient,private router: Router,private formBuilder: FormBuilder,private formBuilder1: FormBuilder) {
    title.setTitle('Top SEO Company in Bangalore | Best SEO Agency in Bangalore');

    meta.addTags([
      {
        name: 'description',
        content: 'Top SEO Search Engine Optimization company in Bangalore! , Best SEO Angencies in Bangalore, SEO Company in Bangalore,Seo Services in Bangalore'
        },
      {
        name: 'keywords',
        content: 'Top SEO Search Engine Optimization company in Bangalore! , Best SEO Angencies in Bangalore, SEO Company in Bangalore,Seo Services in Bangalore'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Top SEO Company in Bangalore | Best SEO Agency in Bangalore'
      },
      {
        name: 'og:description',
        content: 'Top SEO Search Engine Optimization company in Bangalore! , Best SEO Angencies in Bangalore, SEO Company in Bangalore,Seo Services in Bangalore'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/seo-company-in-bangalore/'
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
        content: 'Top SEO Search Engine Optimization company in Bangalore! , Best SEO Angencies in Bangalore, SEO Company in Bangalore,Seo Services in Bangalore'
      },
      {
        name: 'twitter:title',
        content:'Top SEO Company in Bangalore | Best SEO Agency in Bangalore'
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
    fPhone:  ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
    fService: ['', [Validators.required]],
    fMessage: ['', [Validators.required]]
});
this.caseStudyForm = this.formBuilder.group({
  fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,}$'), Validators.minLength(3)]],
  fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
  fPhone:  ['', [Validators.required,  Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    fService: ['', Validators.required],
  fMessage: ['', [Validators.required]]
});
this.enquiryModal = this.formBuilder.group({
  fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
  fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
  fPhone:  ['', [Validators.required,  Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
  organisation: ['', [Validators.required]],
  fService: ['', Validators.required],
  fMessage: ['', [Validators.required]]
});
  }
  get f() { return this.registerForm.controls; }
  get fbannermodal() { return this.bannerModalForm.controls; }
  get fcaseStudyForm() { return this.caseStudyForm.controls; }
  get fenquiryModal() { return this.enquiryModal.controls; }

  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  modalRef:any = BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModal3(template3: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template3);
  }
  openModal2(template2: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template2);
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


      this.httpClient.post('https://brandstory.in/assets/thank-you-banner-inline-newseo.php',
      {
        name:formName,
        email: formEmail,
        phone: formPhone,
        message: formMessage,
        organisation: organisation,
        website: website,
        page:"brandstory.in/seo-company-in-bangalore/"

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
        page:"brandstory.in/seo-company-in-bangalore/"
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
      name:formName,
      email: formEmail,
      phone: formPhone,
      service: formService,
      message: formMessage,
      page:"brandstory.in/seo-company-in-bangalore/"

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
      page:"brandstory.in/seo-company-in-bangalore/"
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
   onSubmitCaseStudy( ) {
    this.submitted = true;
    //this.arr = form.value;
    //this.submitted = true;

    // stop here if form is invalid
    if (this.caseStudyForm.invalid) {
        return;
    }
    this.arr = this.caseStudyForm.value;

        const formName = this.caseStudyForm.value.fName;
    const formEmail = this.caseStudyForm.value.fEmail;
    const formPhone = this.caseStudyForm.value.fPhone;

    const formService = this.caseStudyForm.value.fService;
    //const formMessage = form.value.fMessage;


    this.httpClient.post('https://brandstory.in/assets/thank-you-case-study.php',
    {
      name:formName,
      email: formEmail,
      phone: formPhone,
       service: formService,
      //message: formMessage,
      page:"brandstory.in/seo-company-in-bangalore/"

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
      //message: formMessage,
      page:"brandstory.in/seo-company-in-bangalore/"
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

   onSubmitEnquiryModal( ) {
    this.submitted = true;
    this.arr = this.enquiryModal.value;

    if (this.enquiryModal.invalid) {
      return;
  }

    const formName = this.enquiryModal.value.fName;
    const formEmail = this.enquiryModal.value.fEmail;
    const formPhone = this.enquiryModal.value.fPhone;
    const organisation = this.enquiryModal.value.organisation;
    const formService = this.enquiryModal.value.fService;
    const formMessage = this.enquiryModal.value.fMessage;


   // this.httpClient.post('https://brandstory.in/assets/thank-you-enquiry-modal.php',
   this.httpClient.post('https://brandstory.in/assets/thank-you-enquiry-home.php',
    {
      name:formName,
      email: formEmail,
      phone: formPhone,
      company: organisation,
      service: formService,
      message: formMessage,
      page:"brandstory.in/seo-company-in-bangalore/"

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
      company: organisation,
      service: formService,
      message: formMessage,
      page:"brandstory.in/seo-company-in-bangalore/"
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
