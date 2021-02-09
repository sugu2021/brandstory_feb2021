import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';


@Component({
  selector: 'app-contentwriting',
  templateUrl: './contentwriting.component.html',
  styleUrls: ['./contentwriting.component.css']
})
export class ContentwritingComponent implements OnInit {
  registerForm: any = FormGroup;
  bannerModalForm: any = FormGroup;
  caseStudyForm: any = FormGroup;
  enquiryModal: any = FormGroup;
  ProductCategory: any = '';

  submitted = false;
  arr: any[] = [];
  isFirstOpen = false;
  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('Content Writing Services in Bangalore | Content Writing Agency');

    meta.addTags([
      {
        name: 'description',
        content: 'Content Writing Services in Bangalore, Content Writing Agency Bangalore, Best Content Writers in Bangalore, Best Content Writing Companies in Bangalore'
      },
      {
        name: 'keywords',
        content: 'Content Writing Services in Bangalore, Content Writing Agency Bangalore, Best Content Writers in Bangalore, Best Content Writing Companies in Bangalore'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Content Writing Services in Bangalore | Content Writing Agency'
      },
      {
        name: 'og:description',
        content: 'Content Writing Services in Bangalore, Content Writing Agency Bangalore, Best Content Writers in Bangalore, Best Content Writing Companies in Bangalore'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/content-writing-agency-in-bangalore/'
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
        content: 'Content Writing Services in Bangalore, Content Writing Agency Bangalore, Best Content Writers in Bangalore, Best Content Writing Companies in Bangalore'
      },
      {
        name: 'twitter:title',
        content: 'Content Writing Services in Bangalore | Content Writing Agency'
      }
    ]);
  }

  ngOnInit() {
    this.ProductCategory = 'content-strategy';
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      organisation: ['', [Validators.required]],
      website: ['', [Validators.required]]
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

  myPortfolioItems = [
    {
      'category': 'content-strategy',
      'title': 'Content Strategy',
      'content': 'We build our strategy that focuses on planning, creation, delivery, and governance of content to grow your business.'

    },
    {
      'category': 'writing-and-editing',
      'title': 'Writing & Editing',
      'content': 'Our writing process is based on research. First, our experts\' research on content according to your business requirements and then prepare an outline and at last move to writing. But the process not ends here, after writing, the content will undergo editing phase, where we tally any awkward phrases, unclear references, and grammatical mistakes.'

    },
    {
      'category': 'content-distribution',
      'title': 'Content Distribution',
      'content': 'In this process, we share, promote, and publish your content to online audiences in different media formats through various channels.'

    },
    {
      'category': 'content-maintenance',
      'title': 'Content Maintenance',
      'content': 'Last but not the least we create a long-term relationship with your ever-growing audience by keeping your posts reliable.'

    }

  ];

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
        name: formName,
        email: formEmail,
        phone: formPhone,
        message: formMessage,
        organisation: organisation,
        website: website,
        page: "brandstory.in/content-writing-agency-in-bangalore/"

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
        organisation: organisation,
        website: website,
        page: "brandstory.in/content-writing-agency-in-bangalore/"

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
        page: "brandstory.in/content-writing-agency-in-bangalore/"

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
        page: "brandstory.in/content-writing-agency-in-bangalore/"
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
        page: "brandstory.in/content-writing-agency-in-bangalore/"

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
        page: "brandstory.in/content-writing-agency-in-bangalore/"
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
    //console.log(JSON.stringify( this.arr));
    //console.log(JSON.stringify( form.value));
    //console.log(JSON.stringify( form.value.fName));

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
        page: "brandstory.in/content-writing-agency-in-bangalore/"

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
        page: "brandstory.in/content-writing-agency-in-bangalore/"
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
