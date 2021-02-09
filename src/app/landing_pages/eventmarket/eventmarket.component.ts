import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eventmarket',
  templateUrl: './eventmarket.component.html',
  styleUrls: ['./eventmarket.component.css']
})
export class EventmarketComponent implements OnInit {

  enquiryModal:any = FormGroup;
  submitted = false;
  arr: any[] = [];

  selectedTab: any = '1';

  isShown: boolean = false;

  faq_array: any[] = [
    {
      title: 'What is B2B event marketing?',
      sub_text:'',
      message_list: ['B2B event marketing is an offline marketing channel that aims at promoting a brand, product or service through direct interaction with the stakeholders. The goals of B2B event marketing are actualization of business values, increased revenue, customer retention, sales promotion, brand awareness and improved business relationships. B2B event marketing is done via online modes in the form of webinars and video conferences.']
    },
    {
      title: 'What are the benefits of event marketing?',
      sub_text:'The key benefits of B2B event marketing are:',
      message_list: ['The opportunity to share and gain knowledge from the industry associates which is significant for marketing.',
        'A unique platform where key decision makers come together and conceptualize new ideas and strategies in a shorter time than other marketing channels.',
        'Over 31% of marketers believe that event marketing is the most effective B2B marketing channel.',
        'At events, you can build relationships, discuss business challenges and offer innovative solutions to overcome those obstacles.',
        'Leverage on the positive impact of direct face to face interaction']
    },
    {
      title: 'How can event marketing boost my ROI?',
      sub_text:'',
      message_list: ['Generally, many enterprises prefer to attend seminars, conferences and exhibitions to find solutions to their business challenges. Events are the ideal platform for you to launch your new products, create brand awareness, and build fruitful professional associations. Through events, you can extend your contact base and network which is crucial for promoting your business and boosting your ROI']

    },
    {
      title: 'What constitutes an event marketing plan?',
      sub_text:'The main steps in an event marketing plan are:',
      message_list: ['Set your goals- Decide what your primary goals are such as retaining customers, expanding network, increasing revenue and so on.',
        'Allocate Budget – You must decide what percentage of the marketing budget must be allocated to event marketing each month.',
        'Determine zone – You must decide what marketing zones you are going to focus upon such as PR, product and so on',
        'Highlight marketing campaign – Decide the specific actions that must be taken for each zone.',
        'Choose your marketing channels – After evaluation of effectiveness through KPI’s and metrics, pick the appropriate event marketing channel for your business.']

    },
    {
      title: 'What are some of the best practices of event marketing?',
      sub_text:'Some of the event marketing best practices are:',
      message_list: ['Emotional marketing must be a key part of event marketing that makes the audience feel as well as think.',
        'Do not limit your event marketing platforms. Diversify into social media, video marketing, activity based marketing and so on.',
        'Include a lot of giveaways and incentives in your events.',
        'Schedule a post-event plan to discuss the success and leads obtained.']

    },
    {
      title: 'What are the major touch points in event marketing?',
      sub_text:'The major touch points in event marketing are:',
      message_list: ['The event website', 'Event invitation', 'Brochures', 'Sponsorship pitch', 'Registration process', 'Event program and content']
    }
  ]

  constructor(meta: Meta, title: Title,private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('Event Marketing');

    meta.addTags([
      {
        name: 'description',
        content: 'Event Marketing'
      },
      {
        name: 'keywords',
        content: 'Event Marketing'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Event Marketing'
      },
      {
        name: 'og:description',
        content: 'Event Marketing'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/account-based-marketing/'
      },
      {
        name: 'og:site_name',
        content: 'Event Marketing'
      },
      {
        name: 'twitter:card',
        content: 'Event Marketing'
      },
      {
        name: 'twitter:description',
        content: 'Event Marketing'
      },
      {
        name: 'twitter:title',
        content: 'Event Marketing'
      }
    ]);
  }

  get fenquiryModal() { return this.enquiryModal.controls; }


  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  modalRef: any = BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {

    this.enquiryModal = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      organisation: ['', [Validators.required]],
      fService: ['', Validators.required],
      fMessage: ['', Validators.required]
    });

    this.faq_click(0);


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
        page: "brandstory.in/event-marketing"

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
        company: organisation,
        service: formService,
        message: formMessage,
        page: "brandstory.in/event-marketing"
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
  faq_click(index: any) {
    // debugger;

    // if (type == this.selectedTab)
    //   this.selectedTab = '';
    // else
    //   this.selectedTab = type;


    // this.faq_array.forEach(element => {
    //   element.checked = false;
    // });

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
