import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-gdppc',
  templateUrl: './gdppc.component.html',
  styleUrls: ['./gdppc.component.css']
})
export class GdppcComponent implements OnInit {
  registerForm: any = FormGroup;
  bannerModalForm: any = FormGroup;
  caseStudyForm: any = FormGroup;
  enquiryModal: any = FormGroup;

  submitted = false;
  arr: any[] = [];
  isFirstOpen = false;
  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('PPC Campaign Management  | Google Adwords Campaign Management Services');

    meta.addTags([
      {
        name: 'description',
        content: 'PPC Campaign Management, Leverage our Google Adwords campaign management services to turn your every ad into a conversion, and every visitor into a customer'
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
        content: 'PPC Campaign Management  | Google Adwords Campaign Management Services'
      },
      {
        name: 'og:description',
        content: 'PPC Campaign Management, Leverage our Google Adwords campaign management services to turn your every ad into a conversion, and every visitor into a customer'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/google-adwords-ppc-campaign-management-services/'
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
        content: 'PPC Campaign Management, Leverage our Google Adwords campaign management services to turn your every ad into a conversion, and every visitor into a customer'
      },
      {
        name: 'twitter:title',
        content: 'PPC Campaign Management  | Google Adwords Campaign Management Services'
      }
    ]);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    });
    this.bannerModalForm = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      fService: ['', [Validators.required]],
      fMessage: ['', [Validators.required]]
    });
    this.caseStudyForm = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      fService: ['', Validators.required],
      fMessage: ['', [Validators.required]]
    });
    this.enquiryModal = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      fService: ['', Validators.required],
      fMessage: ['', [Validators.required]]
    });
  }
  get f() { return this.registerForm.controls; }
  get fbannermodal() { return this.bannerModalForm.controls; }
  get fcaseStudyForm() { return this.caseStudyForm.controls; }
  get fenquiryModal() { return this.enquiryModal.controls; }

  onSubmits() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.arr = this.registerForm.value;
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
        page: "brandstory.in/google-adwords-ppc-campaign-management-services/"

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
        page: "brandstory.in/google-adwords-ppc-campaign-management-services/"
      })
      .subscribe(
        (data: any) => {
          //this.modalRef.hide();
          // this.router.navigate(['thank-you']);
          //  window.location.href = "https://brandstory.in/thank-you"
          // console.log(data);
        }
      )

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  modalRef: any = BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModal2(template2: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template2);
  }

  openModal3(template3: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template3);
  }

  onSubmitCaseStudy() {
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
        name: formName,
        email: formEmail,
        phone: formPhone,
        service: formService,
        //message: formMessage,
        page: "brandstory.in/google-adwords-ppc-campaign-management-services/"

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
        //message: formMessage,
        page: "brandstory.in/google-adwords-ppc-campaign-management-services/"
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


  onSubmitBannerModal() {
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
        name: formName,
        email: formEmail,
        phone: formPhone,
        service: formService,
        message: formMessage,
        page: "brandstory.in/google-adwords-ppc-campaign-management-services/"

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
        page: "brandstory.in/google-adwords-ppc-campaign-management-services/"
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
        page: "brandstory.in/google-adwords-ppc-campaign-management-services/"

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
        page: "brandstory.in/google-adwords-ppc-campaign-management-services/"
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
