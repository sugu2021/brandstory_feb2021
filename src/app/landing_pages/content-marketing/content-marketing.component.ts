import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-content-marketing',
  templateUrl: './content-marketing.component.html',
  styleUrls: ['./content-marketing.component.css']
})
export class ContentMarketingComponent implements OnInit {

  enquiryModal:any = FormGroup;
  submitted = false;
  arr: any[] = [];

  selectedTab: any = '1';

  isShown: boolean = false;

  faq_array: any[] = [
    {
      title: 'What is content marketing?',
      sub_text: '',
      message_list: ['Content marketing is the process through which a business creates and shares valuable content about its products and services through various digital media. The content marketing outlets are websites, blog posts, articles, emails, newsletters and social media posts. The messages are stories intended to capture the readers’ attention and initiate a purchase.'],
    },
    {
      title: 'Why is content marketing important?',
      sub_text: '',
      message_list: ['Content is what the customer lays his eyes upon right from the first search, to comparing, researching, and clicking the buy button. Without content, the customer will have no webpages, demos, online reviews, search results or articles to read and analyze information. Content marketing allows businesses to reach their target audience, guide them on a personal level and generate leads.'],

    },
    {
      title: 'How will my business benefit from content marketing?',
      sub_text: '',
      message_list: ['When there are thousands of businesses offering products or services like yours, customers need to be convinced to choose your brand. Content marketing is the most effective way to achieve higher conversion rate and ROI. Compelling content highlights the USP of your brand and tells customers why they must do business with you. Content marketing helps build meaningful relationships with the customers, earn their trust, increase brand awareness and fetch repeat customers.'],

    },
    {
      title: 'How does a business measure the success of content marketing?',
      sub_text: 'The most common metrics for measuring content marketing success are:',
      message_list: ['Sales of new products and services',
        'Customer Retention rates',
        'Blog comments, Feedback, Forwards, Likes and Shares on social media',
        'Website traffic, page views, downloads',
        'Email/Blog/Newsletter subscriptions,',
        'Conversion rates'],

    },
    {
      title: 'How is content marketing different from SEO?',
      sub_text: '',
      message_list: ['Content marketing has a much broader scope than SEO in digital marketing and SEO is a key element of content marketing. Content marketing targets various digital channels such as search engines, social media, emails etc. where most users visit. On the other hand, SEO includes the techniques used to make your content more visible and accessible to users via search engines. SEO guarantees that your content ranks on top in the search engine result pages. '],

    },
    {
      title: 'What are the steps of a content marketing strategy?',
      sub_text: 'The steps of a successful content marketing strategy are:',
      message_list: ['Setting of SMART goals (Specific, Measurable, Attainable, Relevant, Time-bound)',
        'Determination of KPI’s',
        'Choosing top distribution channels',
        'Deciding type of content',
        'Determination of a budget',
        'Creation and distribution of content',
        'Analysis and measurement of results'],

    },
  ]

  constructor(meta: Meta, title: Title,private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('Content Marketing');

    meta.addTags([
      {
        name: 'description',
        content: 'Content Marketing'
      },
      {
        name: 'keywords',
        content: 'Content Marketing'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Content Marketing'
      },
      {
        name: 'og:description',
        content: 'Content Marketing'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/account-based-marketing/'
      },
      {
        name: 'og:site_name',
        content: 'Content Marketing'
      },
      {
        name: 'twitter:card',
        content: 'Content Marketing'
      },
      {
        name: 'twitter:description',
        content: 'Content Marketing'
      },
      {
        name: 'twitter:title',
        content: 'Content Marketing'
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
        page: "brandstory.in/content-marketing"

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
        page: "brandstory.in/content-marketing"
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
