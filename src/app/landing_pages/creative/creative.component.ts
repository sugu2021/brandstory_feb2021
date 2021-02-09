import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-creative',
  templateUrl: './creative.component.html',
  styleUrls: ['./creative.component.css']
})
export class CreativeComponent implements OnInit {

  enquiryModal:any = FormGroup;
  submitted = false;
  arr: any[] = [];

  selectedTab: any = '1';

  isShown: boolean = false;

  faq_array: any[] = [
    {
      title: 'What is a Creative Agency?',
      sub_text: '',
      message_list: ['A creative agency is responsible for creating all the creative content and visual elements needed to take your band to your audience. They formulate concepts and strategies that can help a brand have its own identity through print ads, commercials, online/offline events and so on.'],

    },
    {
      title: 'Why must I hire a creative agency rather than use an in-house marketing team?',
      sub_text: 'Your business will need the services of a creative agency for the reasons given below:',
      message_list: ['Resources – Some companies have limited resources to allocate to advertising and marketing and a creative agency can support with the infrastructure required.',
        'Knowledge – The team of creative agencies are expert creators who have the expertise and experience in creating and communicating all types of content.',
        'Revamp strategy – There may be many reasons why your current branding strategy is not working. A creative agency can refine, tweak, and improve your strategy to deliver better results.'],
    },
    {
      title: 'What are the benefits of a creative agency?',
      sub_text: 'Some main benefits a creative agency can offer to a company’s marketing efforts are:',
      message_list: ['Fresh new perspective without losing sight of the big picture',
        'Expert execution of advertising strategies with the knowledge and expertise of the specialist team',
        'They have a unique insight and insider knowledge of the industry',
        'They have the resources to churn out a variety of quality content quickly and effectively '],

    },
    {
      title: 'What values must a creative agency adhere to?',
      sub_text: 'The basic values a creative agency must adhere to are:',
      message_list: ['Commitment to customers',
        'Commitment to excellence and quality in delivery',
        'Ethics and honesty',
        'Growth and profitability',
        'Innovation and creativity'],
    },
    {
      title: 'Who are the team members of a creative agency?',
      sub_text: '',
      message_list: ['The main team members of a creative agency include the Art Director, Creative Director, Brand Strategist, Producers, Writers and Editors, Web designers/developers and other experts.'],

    },
    {
      title: 'How do I choose a good creative agency?',
      sub_text: 'The creative agency you choose for your services must:',
      message_list: ['Offer well-rounded expertise in their solutions',
        'Rank very high on the creativity factor',
        'Have a strong relationship with their clients',
        'Be professional and trustworthy',
        'Have innovative ideas ',
        'Have a good understanding of your requirements.'],
    },

  ]

  constructor(meta: Meta, title: Title,private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('Creative Agency');

    meta.addTags([
      {
        name: 'description',
        content: 'Creative Agency'
      },
      {
        name: 'keywords',
        content: 'Creative Agency'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Creative Agency'
      },
      {
        name: 'og:description',
        content: 'Creative Agency'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/account-based-marketing/'
      },
      {
        name: 'og:site_name',
        content: 'Creative Agency'
      },
      {
        name: 'twitter:card',
        content: 'Creative Agency'
      },
      {
        name: 'twitter:description',
        content: 'Creative Agency'
      },
      {
        name: 'twitter:title',
        content: 'Creative Agency'
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
        page: "brandstory.in/creative-agency"

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
        page: "brandstory.in/creative-agency"
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
