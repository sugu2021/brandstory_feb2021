import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title ,Meta} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-googlemarketing',
  templateUrl: './googlemarketing.component.html',
  styleUrls: ['./googlemarketing.component.css']
})
export class GooglemarketingComponent implements OnInit {
  arr: any[]=[];
  submitted = false;
  enquiryModal:any = FormGroup;

  constructor(meta:Meta, title:Title,private modalService: BsModalService,private httpClient: HttpClient,private router: Router,private formBuilder: FormBuilder) {
    title.setTitle('Google Adwords PPC Company in Bangalore | PPC Agency Bangalore');

    meta.addTags([
      {
        name: 'description',
        content: 'Google Adwords PPC Advertising and Campaign Management Company/Agency in Bangalore. PPC Company in Bangalore, PPC Agency in Bangalore, Top and Best PPC Services Company / Agency in Bangalore India, Google Adwords Agency.'
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
        content: 'Google Adwords PPC Company in Bangalore | PPC Agency Bangalore'
      },
      {
        name: 'og:description',
        content: 'Best Social Media Marketing Company in Bangalore, SMM Services Bangalore, Top and Best Social Media Marketing Company / Agency in Bangalore, India. SMM Companies in Bangalore, Facebook, Twitter, LinkedIn, Youtube Marketing Company in Bangalore.'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/digital/google-marketing/'
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
        content: 'Google Adwords PPC Advertising and Campaign Management Company/Agency in Bangalore. PPC Company in Bangalore, PPC Agency in Bangalore, Top and Best PPC Services Company / Agency in Bangalore India, Google Adwords Agency.'
      },
      {
        name: 'twitter:title',
        content:'Google Adwords PPC Company in Bangalore | PPC Agency Bangalore'
      }
    ]);


  }

  ngOnInit() {
    this.enquiryModal = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone:  ['', [Validators.required,  Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      organisation: ['', [Validators.required]],
      fService: ['', Validators.required],
      fMessage: ['', Validators.required]
    });
  }

  get fenquiryModal() { return this.enquiryModal.controls; }

  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  modalRef:any = BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
    const organisation = this.enquiryModal.value.organisation;
    const formService = this.enquiryModal.value.fService;
    const formMessage = this.enquiryModal.value.fMessage;


    //this.httpClient.post('https://brandstory.in/assets/thank-you-enquiry-modal.php',
    this.httpClient.post('https://brandstory.in/assets/thank-you-enquiry-home.php',
    {
      name:formName,
      email: formEmail,
      phone: formPhone,
      company: organisation,
      service: formService,
      message: formMessage,
      page:"brandstory.in/digital/google-marketing"

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
      page:"brandstory.in/digital/google-marketing"

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
