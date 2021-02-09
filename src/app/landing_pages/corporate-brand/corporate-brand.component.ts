import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-corporate-brand',
  templateUrl: './corporate-brand.component.html',
  styleUrls: ['./corporate-brand.component.css']
})
export class CorporateBrandComponent implements OnInit {

  enquiryModal:any = FormGroup;
  submitted = false;
  arr: any[] = [];

  selectedTab: any = '1';

  isShown: boolean = false;

  faq_array: any[] = [
    {
      title: 'What is Corporate Branding?',
      sub_text: '',
      message_list: ['Corporate branding defines the company’s vision, mission, values and objectives. These elements are usually conveyed through logos, symbols, taglines, product packaging and so on. Every element of communication from the company helps build its identity, and is unique but consistent across platforms.'],
    },
    {
      title: 'Why is corporate branding important for my business?',
      sub_text: 'Corporate branding is important to both small and large business for the following reasons:',
      message_list: ['It gives your business a unique identity with the logo or slogan becoming the face of your brand.',
        'Customers find it easy to relate to a product through colours, logos and taglines. It becomes easy to build customer relationships with a powerful brand identity.',
        'A company with a strong brand identity will make the business appear professional and polished.',
        'Since branding conveys the core values of your company, it builds trust among customers encouraging them to do more business with you.',
        'If high quality products and services back your branding strategy, customers will begin to associate superior quality with your brand'],
    },
    {
      title: 'What are the main benefits of corporate branding?',
      sub_text: 'The key benefits of corporate branding in the realm of marketing are:',
      message_list: ['IT shapes customers’ opinions and promotes loyalty',
        'It creates brand awareness',
        'It prevents misrepresentation or vagueness due to an established identity',
        'Corporate branding generates credibility for the organization amongst peers and consumers.',
        'Improves ROI for the business as corporate identity is the first step for it to venture into new markets and boost its profits.'],
    },
    {
      title: 'What are the elements of a corporate branding strategy?',
      sub_text: 'The key elements of a corporate branding strategy are:',
      message_list: ['Clarity in brand mission, vision and positioning',
        'Powerful design elements such as logos, slogans and images',
        'Distinct brand voice and personality that strikes a chord with the consumer'],
    },
    {
      title: 'How do I measure the success of my corporate branding strategy?',
      sub_text: 'You can get an idea about the success of your corporate branding strategy through the following metrics:',
      message_list: ['Revenue and ROI ',
        'Review brand sales in comparison to competitors',
        'Measure brand visibility',
        'Calculate success of advertising campaigns',
        'Get feedback from the audience about branding through questionnaires.'],
    },
    {
      title: 'How important is corporate rebranding in the realm of marketing?',
      sub_text: '',
      message_list: ['Rebranding involves revamping the look and feel of your brand to attract new customers. New aspects of the business are focused upon and promoted to the right audience. Rebranding offers the required invigoration for your business to stay relevant in the competitive market. ',],
    },

  ]

  constructor(meta: Meta, title: Title,private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('Corporate Branding');

    meta.addTags([
      {
        name: 'description',
        content: 'Corporate Branding'
      },
      {
        name: 'keywords',
        content: 'Corporate Branding'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Corporate Branding'
      },
      {
        name: 'og:description',
        content: 'Corporate Branding'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/account-based-marketing/'
      },
      {
        name: 'og:site_name',
        content: 'Corporate Branding'
      },
      {
        name: 'twitter:card',
        content: 'Corporate Branding'
      },
      {
        name: 'twitter:description',
        content: 'Corporate Branding'
      },
      {
        name: 'twitter:title',
        content: 'Corporate Branding'
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
        page: "brandstory.in/corporate-branding"

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
        page: "brandstory.in/corporate-branding"
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
