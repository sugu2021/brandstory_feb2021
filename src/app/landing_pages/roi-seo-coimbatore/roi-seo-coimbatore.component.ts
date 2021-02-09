import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-roi-seo-coimbatore',
  templateUrl: './roi-seo-coimbatore.component.html',
  styleUrls: ['./roi-seo-coimbatore.component.css']
})
export class RoiSeoCoimbatoreComponent implements OnInit {

  registerForm:any = FormGroup;
  bannerModalForm:any = FormGroup;

  submitted = false;
  arr: any[] = [];
  isFirstOpen = true;

  isCollapsed = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  
  selectedTab: any = '1';

  isShown: boolean = false;

  faq_array: any[] = [
    {
      title: 'What are the different types of SEO?',
      sub_text: '',
      message_list: ['Well, there are several types of SEO like off-page SEO, on-page SEO, e-commerce SEO, global SEO, local SEO, etc.'],

    },
    {
      title: 'Which SEO will benefit my business?',
      sub_text: '',
      message_list: ['This depends on what kind of products and services you offer, and what kind of audience are you trying to target.'],

    },
    {
      title: 'Do you offer weekly reports? ',
      sub_text: '',
      message_list: ['Yes, we always generate a weekly and monthly report for our clients. This allows our clients to see what progress we are making. '],
    },
  ]

  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('SEO Company in Coimbatore | SEO Services in Coimbatore');

    meta.addTags([
      {
        name: 'description',
        content: 'SEO Company in Coimbatore, SEO Services in Coimbatore, Best SEO Agency in Coimbatore, SEO Consultants in Coimbatore'
      },
      {
        name: 'keywords',
        content: 'SEO Company in Coimbatore, SEO Services in Coimbatore, Best SEO Agency in Coimbatore, SEO Consultants in Coimbatore'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'SEO Company in Coimbatore, SEO Services in Coimbatore, Best SEO Agency in Coimbatore, SEO Consultants in Coimbatore'
      },
      {
        name: 'og:description',
        content: 'SEO Company in Coimbatore, SEO Services in Coimbatore, Best SEO Agency in Coimbatore, SEO Consultants in Coimbatore'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/orm-company-bangalore-india/'
      },
      {
        name: 'og:site_name',
        content: 'SEO Company in Coimbatore | SEO Services in Coimbatore'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:description',
        content: 'SEO Company in Coimbatore, SEO Services in Coimbatore, Best SEO Agency in Coimbatore, SEO Consultants in Coimbatore'
      },
      {
        name: 'twitter:title',
        content: 'SEO Company in Coimbatore | SEO Services in Coimbatore'
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
    this.bannerModalForm = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      fService: ['', [Validators.required]],
      fMessage: ['', [Validators.required]]
    });

    this.faq_click(0);


  }
  get f() { return this.registerForm.controls; }
  get fbannermodal() { return this.bannerModalForm.controls; }

  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
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
        page: "brandstory.in/orm-company-bangalore-india/"

      })
      .subscribe(
        (data: any) => {
          //this.modalRef.hide();
          // this.router.navigate(['thank-you']);
          window.location.href = "https://brandstory.in/thank-you"
          console.log(data);
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
        page: "brandstory.in/orm-company-bangalore-india/"

      })
      .subscribe(
        (data: any) => {
          this.modalRef.hide();
          // this.router.navigate(['thank-you']);
          window.location.href = "https://brandstory.in/thank-you"
          console.log(data);
        }
      )

  }

  faq_click(index: any) {
    // debugger;
    if (this.faq_array[index].checked)
      this.faq_array[index].checked = false;
    else {
      this.faq_array.forEach(element => {
        element.checked = false;
      });

      this.faq_array[index].checked = true;

    }

  }

}

