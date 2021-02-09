import { Component, OnInit,TemplateRef  } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title ,Meta} from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-ourservice',
  templateUrl: './ourservice.component.html',
  styleUrls: ['./ourservice.component.css']
})
export class OurserviceComponent implements OnInit {
  submitted = false;
  enquiryModal:any = FormGroup;

    arr: any[]=[];
    isFirstOpen = false;
  constructor(meta:Meta, title:Title, private modalService: BsModalService,private httpClient: HttpClient,private router: Router,private formBuilder: FormBuilder) {
    title.setTitle('Social Media Agency In Bangalore | Digital Marketing Bangalore');

    meta.addTags([
      {
        name: 'description',
        content: 'social media marketing agency in Bangalore , social media company in Bangalore, social media services in Bangalore'
        },
      {
        name: 'keywords',
        content: 'social media marketing agency in Bangalore , social media company in Bangalore, social media services in Bangalore'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Social Media Agency In Bangalore | Digital Marketing Bangalore'
      },
      {
        name: 'og:description',
        content: 'social media marketing agency in Bangalore , social media company in Bangalore, social media services in Bangalore'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/services/'
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
        content: 'social media marketing agency in Bangalore , social media company in Bangalore, social media services in Bangalore'
      },
      {
        name: 'twitter:title',
        content:'Social Media Agency In Bangalore | Digital Marketing Bangalore'
      }
    ]);
  }

  ngOnInit() {
    this.enquiryModal = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA- ]$'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone:  ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      organisation: ['', [Validators.required]],
      fService: ['', Validators.required],
      fMessage: ['', Validators.required]
    });

  }

  modalRef:any = BsModalRef;

  get fenquiryModal() { return this.enquiryModal.controls; }

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
      name: formName,
      email: formEmail,
      phone: formPhone,
      company: organisation,
      service: formService,
      message: formMessage,
      page:"brandstory.in/services/"

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
      name: formName,
      email: formEmail,
      phone: formPhone,
      company: organisation,
      service: formService,
      message: formMessage,
      page:"brandstory.in/services/"

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
