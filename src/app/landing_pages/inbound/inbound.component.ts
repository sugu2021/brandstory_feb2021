import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inbound',
  templateUrl: './inbound.component.html',
  styleUrls: ['./inbound.component.css']
})
export class InboundComponent implements OnInit {

  enquiryModal:any = FormGroup;
  submitted = false;
  arr: any[] = [];

  selectedTab: any = '1';

  isShown: boolean = false;

  faq_array: any[] = [
    {
      title: 'What is Inbound marketing?',
      sub_text: '',
      message_list: ['Inbound marketing is a marketing technique that makes your business easily found by your potential customers who are searching for products and services in your industry. Inbound marketing is mainly done through search engine optimization, websites and landing pages, and creating and publishing high quality content on emails and social media platforms',]

    },
    {
      title: 'What are the benefits of inbound marketing?',
      sub_text: 'The main benefits of inbound marketing are:',
      message_list: ['Cost-effective – Inbound marketing is focused and targeted unlike highly risky mass marketing.',
        'Builds trust- Since inbound marketing aims to give the customers information that they are looking for even before they ask for it, your brand comes across as more trustworthy.',
        'Quality leads and traffic – the focused approach of inbound traffic brings in the right leads and valuable traffic that can lead to conversions.',
        'Less risky – Since inbound marketing pursues several digital media, there is no reliance only on any single marketing channel.'],

    },
    {
      title: 'What are the steps for a successful inbound marketing strategy?',
      sub_text: 'Given below are the main steps to get your inbound marketing strategy right:',
      message_list: ['Attract prospective leads to your content and make them aware about your offerings.',
        'Convert visitors into customers by encouraging them to research more about your product or service through effective CTA’s.',
        'Make customers happy so that they are more likely to refer you to their contacts and your business can earn good word of mouth recommendations.'],
    },
    {
      title: 'How can I ensure that customers find my content?',
      sub_text: '',
      message_list: ['Inbound marketing relies heavily on SEO and keywords that rank high in search queries.  The more the content is created around the keywords, the better the visibility of your content. Your webpage will climb up to top ranks in the search engine results pages.',]
    },
    {
      title: 'Why must I hire an inbound marketing services agency?',
      sub_text: '',
      message_list: ['A professional inbound marketing agency will have an expert team who are abreast with the SEO best practices and the latest search algorithms. Their experience in inbound marketing will help you to create a strategy that aligns with the customer needs throughout their buying journey.',]
    },
    {
      title: 'What social media platforms must inbound marketing target?',
      sub_text: '',
      message_list: ['Social media platforms for inbound marketing depend on the business but the most effective ones are Facebook, Twitter, Google+, Instagram, Pinterest and LinkedIn. ',]
    },

  ]

  constructor(meta: Meta, title: Title,private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('Inbound Marketing');

    meta.addTags([
      {
        name: 'description',
        content: 'Inbound Marketing'
      },
      {
        name: 'keywords',
        content: 'Inbound Marketing'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Inbound Marketing'
      },
      {
        name: 'og:description',
        content: 'Inbound Marketing'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/account-based-marketing/'
      },
      {
        name: 'og:site_name',
        content: 'Inbound Marketing'
      },
      {
        name: 'twitter:card',
        content: 'Inbound Marketing'
      },
      {
        name: 'twitter:description',
        content: 'Inbound Marketing'
      },
      {
        name: 'twitter:title',
        content: 'Inbound Marketing'
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
        page: "brandstory.in/inbound-marketing"

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
        page: "brandstory.in/inbound-marketing"
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
