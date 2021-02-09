import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employerbrand',
  templateUrl: './employerbrand.component.html',
  styleUrls: ['./employerbrand.component.css']
})
export class EmployerbrandComponent implements OnInit {

  enquiryModal:any = FormGroup;
  submitted = false;
  arr: any[] = [];

  selectedTab: any = '1';

  isShown: boolean = false;

  faq_array: any[] = [
    {
      title: 'What is Employer Branding?',
      sub_text: '',
      message_list: ['Employer branding is the process that communicates that your organization is a good employer. It defines the essence of the company, what it stands for, and why it is unique. Employer branding is crafted and aligned to meet the aspirations of prospective employees.'],

    },
    {
      title: 'How can employer branding help my organization?',
      sub_text: 'Employer branding will attract motivated job seekers and create happy employees.',
      message_list: ['It can improve brand perception and differentiation',
        'It can build a strong brand strategy and a solid Employee Value Proposition',
        'It can enhance the employee and candidate experience',
        'It can add value to the recruitment process and make it future proof',
        'Companies with a positive employee brand get in more candidates than those with a negative brand image.'],

    },
    {
      title: 'What is Employer Value Proposition?',
      sub_text: '',
      message_list: ['An Employee Value Proposition includes the organizational mission, values and culture, giving the employees a strong reason to work for them. It includes all that the company can offer the employees in exchange for their skill and talent.'],

    },
    {
      title: 'How can Employer Branding ROI be measured?',
      sub_text: 'Employer branding can improve businesses’ ROI with the following metrics:',
      message_list: ['Tracking how many candidates translate to employees',
        'Studying the conversion rates of interested applicants after the employer branding is implemented',
        'Measuring the time taken to fill open positions',
        'Analyzing the third-party recruitment spend'],

    },
    {
      title: 'What are the main steps of the Employer Branding process?',
      sub_text: 'The main steps of the employee branding process are:',
      message_list: ['Get familiar with the company and its core values',
        'Perform an audit of the existing employee brand and reputation through surveys',
        'Define an Employee Value Proposition',
        'Build engagement among existing employees',
        'smooth onboarding for new recruits',
        'Keep morale of employees high to retain them'],

    },
    {
      title: 'What are the Employer Branding Best Practices?',
      sub_text: 'Some of the Employer Branding best practices are:',
      message_list: ['Do not let compensation be the center focus of the branding strategy',
        'Use high-quality content, images and video to talk about your company and introduce your workspace',
        'Maintain a company blog with the latest news and updates about policies and proposals.',
        'Hire a diverse crop of candidates from a range of backgrounds'],

    },

  ]

  constructor(meta: Meta, title: Title,private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('Employer Branding');

    meta.addTags([
      {
        name: 'description',
        content: 'Employer Branding'
      },
      {
        name: 'keywords',
        content: 'Employer Branding'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Employer Branding'
      },
      {
        name: 'og:description',
        content: 'Employer Branding'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/account-based-marketing/'
      },
      {
        name: 'og:site_name',
        content: 'Employer Branding'
      },
      {
        name: 'twitter:card',
        content: 'Employer Branding'
      },
      {
        name: 'twitter:description',
        content: 'Employer Branding'
      },
      {
        name: 'twitter:title',
        content: 'Employer Branding'
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
        page: "brandstory.in/employer-branding"

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
        page: "brandstory.in/employer-branding"
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
