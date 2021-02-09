import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

  enquiryModal:any = FormGroup;
  submitted = false;
  arr: any[] = [];

  selectedTab: any = '1';

  isShown: boolean = false;

  faq_array: any[] = [
    {
      title: 'What is Advertising Photography?',
      sub_text: '',
      message_list: ['Advertising photography consists of activities related to show products in an appealing and attractive manner to encourage their purchase. Photographs enhance content of websites, blogs, articles, brochures, catalogs and so on.'],

    },
    {
      title: 'What are the main benefits photography can lend to marketing campaigns?',
      sub_text: 'Photos are invaluable for marketing campaigns because:',
      message_list: ['They relay importance of an event- More than a headline, an image captures the readers attention about an announcement or a breakthrough.',
        'Establish intimacy with the reader- Photos that are arranged and taken well help  establish an intimate relationship with the audience that is not possible only with text.',
        'Worth a thousand words – Photos speak volumes about the topic in much lesser space than text. Images summarize and emphasize text. ',
        'Lend credibility – Images lend credibility to businesses especially for small businesses who wish to '],
    },
    {
      title: 'How do you get marketing photography right?',
      sub_text: '',
      message_list: ['Appoint a photographer with the right skills and qualification',
        'Make your image demonstrate your product being used by people in real life situations.',
        'Ensure that the lighting is right as bad lighting will ruin even a great product.'],

    },
    {
      title: 'How does photography help to establish a connect with the audience?',
      sub_text: 'Photography can establish a strong connection with the viewer in the following ways:',
      message_list: ['Gets Attention – With the right imagery, you will have an edge to attract customer attention and retain it',
        'Delivers message subtly – The human eye processes visuals quicker than words and images always are more impactful than other mediums.',
        'Sharing potential – If people see something that catches their eye, it gets circulated on social networks, causing significant boost in traffic. ',
        'Establishes credibility – Excellent photography with good aesthetics contributes greatly to the brand’s credibility and strength of the message. ',
        'Initiates action – If a viewer sees a fascinating photo, users will follow up with an action, especially on social media platforms.  ',
        'Increases sales – Professional, high-quality photographs help customers visualize your products and if impressed, they will make a purchase.'],

    },
    {
      title: 'What items form a part of the essential gear for photography?',
      sub_text: 'The items that constitute the essential gear for photography are:',
      message_list: ['A camera that maybe either DSLR or mirrorless cameras ',
        'Prime Lenses, zoom lenses or telephone lenses that allow photographers to take the best photos',
        'Tripod that stabilizes the camera and allows extension of shutter speed.',
        'Processing software such as Photoshop or Lightroom that helps to organize the photos.',
      ],

    },
    {
      title: 'What are some of Photography’s best practices?',
      sub_text: 'Some of the best practices of photography are:',
      message_list: ['Use value-added incentives',
        'Work with partners who are ready to co-market',
        'Build a customer database of current and prospective customers',
        'Network with other professionals',
        'Give back to the community  ',
      ],
    },
  ]

  constructor(meta: Meta, title: Title,private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('Photography');

    meta.addTags([
      {
        name: 'description',
        content: 'Photography'
      },
      {
        name: 'keywords',
        content: 'Photography'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Photography'
      },
      {
        name: 'og:description',
        content: 'Photography'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/account-based-marketing/'
      },
      {
        name: 'og:site_name',
        content: 'Photography'
      },
      {
        name: 'twitter:card',
        content: 'Photography'
      },
      {
        name: 'twitter:description',
        content: 'Photography'
      },
      {
        name: 'twitter:title',
        content: 'Photography'
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
        page: "brandstory.in/photography"

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
        page: "brandstory.in/photography"
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
