import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-marketing',
  templateUrl: './account-marketing.component.html',
  styleUrls: ['./account-marketing.component.css']
})
export class AccountMarketingComponent implements OnInit {

  enquiryModal:any = FormGroup;
  submitted = false;
  arr: any[] = [];

  selectedTab: any = '1';

  isShown: boolean = false;

  faq_array: any[] = [
    {
      title: 'Why B2B businesses should consider ABM?',
      message_list: ['ABM is very effective for all B2B firms that sell out to key accounts and that are of a particular size for a certain period of period- value of products or services.'],
    },
    {
      title: 'What are the benefits of ABM?',
      message_list: [
        'Getting Personal', 'Developing and maintaining relationships with businesses',
        'Increased ROI', 'Clearer and specific results'
      ]
    },
    {
      title: 'How to do ABM?',
      message_list: ['Assemble the ABM Team.', 'Define Your ABM Goals & Strategy.',
        'Select Your Account-Based Marketing Technology.', 'Identify and Prioritize Target Accounts.',
        'Select Your Channels and Craft Your Messaging.', 'Execute ABM Campaigns & Begin Sales Outreach.',
        'Evaluate and optimize']
    },
    {
      title: 'When to create an ABM plan?',
      message_list: ['Define your strategic accounts', 'Keeping your investigation goggles on', 'Creating tailored content and messages', 'Selecting the best channels for your campaigns', 'Implement the Account-based campaigns', 'Measuring and sharing your results']
    },
    {
      title: 'Why to measure ABM Success?',
      message_list: ["You will have to quantify the value the prospects place in the experience with you and the impact the experience has on sales. It's not always easy but the ideal way to do it is by looking at coverage, engagement, impact and influence."]
    },
    {
      title: 'How to find the best Account Based Marketing Companies in Bangalore?',
      message_list: ["You should look into the platform offering ABM services with low number of entry barriers and best in class quality services. Brandstory offers ABM services where you would not have to wait due to steep budget asks."]
    },

  ]

  constructor(meta: Meta, title: Title,private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('account_marketing');

    meta.addTags([
      {
        name: 'description',
        content: 'Account Based Marketing'
      },
      {
        name: 'keywords',
        content: 'Account Based Marketing'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Account Based Marketing'
      },
      {
        name: 'og:description',
        content: 'Account Based Marketing'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/account-based-marketing/'
      },
      {
        name: 'og:site_name',
        content: 'Account Based Marketing'
      },
      {
        name: 'twitter:card',
        content: 'Account Based Marketing'
      },
      {
        name: 'twitter:description',
        content: 'Account Based Marketing'
      },
      {
        name: 'twitter:title',
        content: 'Account Based Marketing'
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
        page: "brandstory.in/account-based-marketing"

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
        page: "brandstory.in/account-based-marketing"
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
