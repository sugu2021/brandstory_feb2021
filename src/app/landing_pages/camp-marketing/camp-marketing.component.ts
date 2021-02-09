import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-camp-marketing',
  templateUrl: './camp-marketing.component.html',
  styleUrls: ['./camp-marketing.component.css']
})
export class CampMarketingComponent implements OnInit {

  enquiryModal:any = FormGroup;
  submitted = false;
  arr: any[] = [];

  selectedTab: any = '1';

  isShown: boolean = false;

  faq_array: any[] = [
    {
      title: 'Why B2B businesses should consider Campaign Management?',
      message_list: ['A marketing campaign is always focused on a specific message. It usually coexists alongside a company’s other marketing activities. A business might have one campaign to build up awareness for its new product. At the same time, it might have regular promotions for all the other products in its portfolio.'],
    },
    {
      title: 'What are the benefits of Campaign Management?',
      message_list: ['Services of Campaign Management facilitates a business a greater ROI by launching a campaign on several platforms in a lesser time period. Businesses who can get into marketing campaigns will be able to keep their business at the fore by interacting with customers and voicing their plans.'],
    },
    {
      title: 'How to do Campaign Management?',
      message_list: ['Define Goals.','Know Your Audience.','Set Target Audience.','Decide on Resources.','Marketing Budget.','Campaign Content.','Monitor Your Campaign.'],
    },
    {
      title: 'What are the roles of a Campaign Manager?',
      message_list: ['Managing a campaign is not a day’s job but a very rigorous activity which takes time. A campaign manager engages in strong keyword search and content development for devising a campaign which can strike the right audience.'],
    },
    {
      title: 'When to create an Campaign Management budget plan?',
      message_list: ['Create a campaign budget calendar and set goals to optimise the budget accordingly. Initial test campaigns will help us determine the ideal CPC & CPL for the required vertical'],
    },
    {
      title: 'Why to measure Campaign Management Success?',
      message_list: ['Measuring Campaign management success will help you show that your digital marketing budget has been spent efficiently. make sales activity more effective by improving your conversion rates. choose the right channels to reach your target audience.'],
    }

  ]

  constructor(meta: Meta, title: Title,private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('Campaign Marketing');

    meta.addTags([
      {
        name: 'description',
        content: 'Campaign Marketing'
      },
      {
        name: 'keywords',
        content: 'Campaign Marketing'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Campaign Marketing'
      },
      {
        name: 'og:description',
        content: 'Campaign Marketing'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/account-based-marketing/'
      },
      {
        name: 'og:site_name',
        content: 'Campaign Marketing'
      },
      {
        name: 'twitter:card',
        content: 'Campaign Marketing'
      },
      {
        name: 'twitter:description',
        content: 'Campaign Marketing'
      },
      {
        name: 'twitter:title',
        content: 'Campaign Marketing'
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
        page: "brandstory.in/campaign-management-360"

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
        page: "brandstory.in/campaign-management-360"
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
