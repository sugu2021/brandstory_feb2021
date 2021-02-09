import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-linkedin',
  templateUrl: './linkedin.component.html',
  styleUrls: ['./linkedin.component.css']
})
export class LinkedinComponent implements OnInit {

  enquiryModal:any = FormGroup;
  submitted = false;
  arr: any[] = [];

  selectedTab: any = '1';

  isShown: boolean = false;

  faq_array: any[] = [
    {
      title: 'What is LinkedIn Marketing?',
      sub_text: '',
      message_list: ['LinkedIn marketing uses the LinkedIn social media tool to make connections, build business partnerships, generate leads, enhance brand awareness and drive traffic to your website.'],

    },
    {
      title: 'Why is LinkedIn marketing crucial for a business?',
      sub_text: 'Through LinkedIn marketing business can achieve the following:',
      message_list: ['Build brand awareness and strengthen relationships with customers and partners.',
        'By posting compelling content and participating in crucial business discussions, companies can market their brand to partners and potential customers.',
        'Millions of professional connections can help businesses to improve their networking and grow their email marketing list.',
        'LinkedIn social media offers an excellent opportunity for businesses to grow and promote their brand to like-minded people.'],
    },
    {
      title: 'What are the steps of a LinkedIn marketing plan?',
      sub_text: 'The main steps of a LinkedIn marketing plan are:',
      message_list: ['Sign in and create an account with Campaign Manager',
        'Create a campaign and add a name to it',
        'Include details of business line/product, campaign title/type, geography, and unique ID',
        'Choose your ad objective',
        'Set up the target audience parameters',
        'Choose the ad format you would like to use.',
        'Enable LinkedIn Audience Network',
        'Set your budget and campaign schedule',
        'Set up your ad, review and launch a campaign',
        'Measure and optimize ad performance',
      ],
    },
    {
      title: 'What are some best practices for LinkedIn marketing?',
      sub_text: 'Given below are some of the best practices for LinkedIn marketing?',
      message_list: ['Post content on industry trends, thought leadership and how-to topics',
        'Use analytics to measure and improve your LinkedIn marketing performance',
        'Learn about your visitors and followers on the LinkedIn platform',
        'Make use of images and videos in the content for visual appeal',
        'Use data analytics to find the best time to post messages'],
    },
    {
      title: 'How do Ads appear on LinkedIn?',
      sub_text: '',
      message_list: ['Ads on LinkedIn will appear as Text Ads, Display Ads, Dynamic Ads and Sponsored Content.'],

    },
    {
      title: 'How effective is LinkedIn Marketing?',
      sub_text: 'LinkedIn marketing is very effective for the following reasons:',
      message_list: ['LinkedIn platform has over 500 million followers, 60 million influencers and 40 million decision makers',
        'LinkedIn is the most used social media channel by Fortune 500 companies',
        'According to the content marketing institute, over 95% of B2B marketers use LinkedIn for their content marketing.',
        'A LinkedIn study says that LinkedIn is responsible for driving over 50% of social media traffic to B2B websites.',
      ],
    },
  ]

  constructor(meta: Meta, title: Title,private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('LinkedIn Marketing');

    meta.addTags([
      {
        name: 'description',
        content: 'LinkedIn Marketing'
      },
      {
        name: 'keywords',
        content: 'LinkedIn Marketing'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'LinkedIn Marketing'
      },
      {
        name: 'og:description',
        content: 'LinkedIn Marketing'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/account-based-marketing/'
      },
      {
        name: 'og:site_name',
        content: 'LinkedIn Marketing'
      },
      {
        name: 'twitter:card',
        content: 'LinkedIn Marketing'
      },
      {
        name: 'twitter:description',
        content: 'LinkedIn Marketing'
      },
      {
        name: 'twitter:title',
        content: 'LinkedIn Marketing'
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
        page: "brandstory.in/linkedin-marketing"

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
        page: "brandstory.in/linkedin-marketing"
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
