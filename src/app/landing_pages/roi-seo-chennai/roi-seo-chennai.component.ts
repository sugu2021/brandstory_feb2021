import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-roi-seo-chennai',
  templateUrl: './roi-seo-chennai.component.html',
  styleUrls: ['./roi-seo-chennai.component.css']
})
export class RoiSeoChennaiComponent implements OnInit {


  registerForm: any = FormGroup;

  auditForm: any = FormGroup;

  activetab: any = '1';

  enquiryModal: any = FormGroup;
  submitted = false;
  arr: any[] = [];
  // isFirstOpen = true;
  isFirstOpen = false;

  isCollapsed = true;
  isCollapsed2 = true;
  isCollapsed3 = true;

  selectedTab: any = '1';

  isShown: boolean = false;

  faq_array: any[] = [
    {
      title: 'What are the Digital Marketing trends in 2020?',
      sub_text: '',
      message_list: ['The reality of modern digital marketing is quite simple – to target a particular set of audience and being conversational as well as personalized. Not long ago, Data-driven and Programmatic Marketing using Artificial Intelligence were considered as aspiring and bold concepts that bordered on the ridiculous. But currently, these are the most preferred digital marketing techniques for 2021. Along with these, other methods such as Social Media Marketing, Content Marketing, Search Engine Marketing, Micro-moments Marketing, Voice and Visual Search Engine Optimization, Chatbots, Omni-channel Marketing, Personalized Marketing, Influencer Marketing and Video Marketing still continue to be among the top priorities for various online business owners in the year 2021.'],
      last_text: ''

    },
    {
      title: 'What is an example of Digital Marketing?',
      sub_text: '',
      message_list: ['The concept of digital marketing is quite simple. It aims at promoting brands and businesses through various digital technologies that include the internet, MMS, SMS, etc. All marketing strategies include setting certain objectives that are based on the survey of the target audience and the prevailing market information and then selecting a preferable marketing channel and/or platform. As an example, imagine a brand that wants to promote one of its products online. This can be done through Social Media Marketing on Social Media Platforms such as Facebook, Instagram, or Twitter. The process would include launching a marketing campaign that centers on the product and brand awareness.'],
      last_text: ''

    },
    {
      title: 'What is the role of Digital Marketing in a company?',
      sub_text: '',
      message_list: ['Currently, Digital marketing is the most favored marketing technique because we live in a technologically savvy world and almost every form of business is online-based. Creating a website and company profiles on social media platforms is not enough. Staying competitive in such a world requires a solid online presence and thus – Digital marketing. It helps companies in increasing their online presence, it performs market research that is based on the target audience, and it integrates and modifies the company’s online profile accordingly. In short, digital marketing helps businesses to garner new sales, leads and above all online traffic.'],
      last_text: ''

    },
    {
      title: 'What are the Digital Marketing Services?',
      sub_text: '',
      message_list: ['Currently, Digital marketing is the most favored marketing technique because we live in a technologically savvy world and almost every form of business is online-based. Creating a website and company profiles on social media platforms is not enough. Staying competitive in such a world requires a solid online presence and thus – Digital marketing. It helps companies in increasing their online presence, it performs market research that is based on the target audience, and it integrates and modifies the company’s online profile accordingly. In short, digital marketing helps businesses to garner new sales, leads and above all online traffic.'],
      last_text: ''

    },
    {
      title: 'Is Digital Mareting the future?',
      sub_text: '',
      message_list: ['Yes, Digital marketing is definitely the future of the marketing world. Currently, about 99% of the population on this planet is dependent on the internet, be it official work, domestic chores, or day to day activities. And digital marketing is completely based on the internet. Moreover, from viral marketing campaigns to Big Data, it has continuously evolved and adapted to meet the marketing requirements of all online businesses and brands. Nowadays, owing to established digital infrastructure and increased connectivity with lightning-fast internet speed, Digital marketing is evolving faster. From traditional techniques such as Search Engine Optimization and Marketing, it is en route to touching the zenith in the arena of Artificial Intelligence. Programmatic Marketing is now a reality where with the help of AI online advertisements are being automated.'],
      last_text: ''

    },
    {
      title: 'What companies need Digital Marketing?',
      sub_text: '',
      message_list: ['Most companies out there need some form of marketing to promote their products and services and are required to invest in digital marketing for boosted sales. A technically optimized and user-friendly website, attractive profiles on various platforms, creative and compelling content on products can help bring a lot of customers. But, some companies need more marketing as compared to others like electronics-based companies, food-based companies, law firms, entertainment-based businesses, automobile companies and dealerships, companies belonging to the healthcare industry, etc. Some of our clients include Flipkart, Societe Generale, Decathlon, Apollo Hospitals, Quess, Jain Heights, Hashedin, Skylark, New Horizon, LGCL, Chargebee, Bhive, etc.'],
      last_text: ''

    },
    {
      title: 'What are some critical roles in a SEO company?',
      sub_text: 'In the world of internet marketing, digital marketing services have a huge role to play. The best digital marketing companies understand the working of 360° digital spectrum. Always work with digital marketing companies who not only have technologists in their team but also subject matter experts. The critical roles of a digital marketing company are',
      message_list: ['The ability to create a digital roadmap and marketing strategies for brand building',
        'The ability to create stunning digital assets for both B2C and B2B digital marketing campaigns',
        'The ability to create an executable action plan and following up with google analytics or bing analytics for the digital marketing campaigns done.'],
      last_text: 'If a digital marketing agency is an expert in above aspects for your domain, then consider it as a best digital marketing agency.'
    },
    {
      title: 'Why choose SEO agencies in Chennai?',
      sub_text: '',
      message_list: ['Chennai is known as the Silicon Valley of India. Being a city of multi-ethnicity and home to numerous consumer-facing brands, the exposure of marketers from digital marketing agencies in Chennai towards consumer and brand behaviour understanding is high. With such an exposure, Digital marketing companies in Chennai are bound to have more knowledge about customer behaviours, brand competition etc.'],
      last_text: ''

    },
    {
      title: 'How to choose the right SEO company in Chennai?',
      sub_text: 'Digital marketing companies in Chennai are many. However critical factors that a brand manager needs to consider are ;',
      message_list: ['Size of one’s business: One must choose the right sized agency among the multiple Digital marketing companies in Chennaias it will help them establish an equal attention. Too small or too big media agencies will not be the right fit.',
        'Reputation: Track record of digital marketing agencies in Chennaiis one of the very critical factors. Keeping the advertisement aside, one can discuss and request for case studies, success stories etc.',
        'Understanding Capacity: Meet the digital marketing companies in Chennaiface to face to get an understanding of team size and interact with digital marketing consultants to get a better idea.'],
      last_text: ''

    },
    {
      title: 'How SEO can enhance your business?',
      sub_text: '',
      message_list: ['Our digital marketing agencies have a segmented approach for different kind of projects. Our services include – creative design services, digital marketing services, social media marketing services (i.e Facebook, Twitter, LinkedIn, Pinterest, Instagram marketing ), pay per click marketing services, unique content creation and marketing, website development services and search engine optimization services. Few of the best digital marketing companies in Chennai/ product design firms also offer video production services and also explainer video services. As a standard industry practice, any good digital marketing agencies in India will strategize your business growth based on these aspects and promote your business on digital and social media platforms. As a result, one’s business can achieve accelerated growth through digital marketing by spending less when compared to other traditional forms of advertising.'],
      last_text: ''

    },
    {
      title: 'What are the standard process of a good SEO company and benifits of the process?',
      sub_text: '',
      message_list: ['As the best digital marketing consultant, our approach to boost organic traffic by increasing business website visibility on Bing, Yahoo & Google search engine result page through search engine optimization techniques. A good SEO consultant follows white hat seo method that is widely accepted by the search engines algorithms. A good SEO company also must abide by the rules and search engine algorithm as established by Google, Bing & Yahoo. One must never work with SEO companies in Chennaiwho practice wrong, black hat seo methods to achieve faster results as it may lead to search engine penalty of your website. SEO services are key to your Digital Strategy because organic seo traffic will be a dominant contributor to your website’s traffic mix.'],
      last_text: ''

    },
    {
      title: 'What are the usual packages offered by a good SEO company?',
      sub_text: '',
      message_list: ['Organic Traffic is free. Paid SEO services are not only costly but their time frame ends as soon as you stop paying. It brings you local and targeted traffic along with promising leads.'],
      last_text: ''

    },
    {
      title: 'What is the difference between white hat and black hat SEO techniques?',
      sub_text: 'Since digital marketing companies have a lot to offer, first sizing your scope is imperative. As a premium digital marketing service providers in bangalore, at BrandStory our approach is as follows;',
      message_list: ['We brainstorm with your team and understand your business and targets',
        'Be very truthful and upfront of what can be achieved via digital marketing',
        'Once the scope and targets are agreed, the team is formed and assigned key performance areas and activities',
        'A regular and transparent approach is taken to keep the business owners informed about progress and results in digital marketing aspect.',
        'For seo services in bangalore, our approach may slightly vary. Get in touch for more details at info@brandstory.in'],
      last_text: 'Overall, packages for digital marketing services in Chennaiare covered under 3 categories: Basic, Premium and Professional. If you have a pan India or multiple city requirements for digital marketing services, seo services, mobile web design services, get in touch for more details at info@brandstory.in'

    },
  ]

  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('SEO Company in Chennai | SEO Services in Chennai');

    meta.addTags([
      {
        name: 'description',
        content: 'SEO Company in Chennai, SEO Services in Chennai, Best SEO Agency in Chennai, SEO Consultants in Chennai'
      },
      {
        name: 'keywords',
        content: 'SEO Company in Chennai, SEO Services in Chennai, Best SEO Agency in Chennai, SEO Consultants in Chennai'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'SEO Company in Chennai, SEO Services in Chennai, Best SEO Agency in Chennai, SEO Consultants in Chennai'
      },
      {
        name: 'og:description',
        content: 'SEO Company in Chennai, SEO Services in Chennai, Best SEO Agency in Chennai, SEO Consultants in Chennai'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/orm-company-bangalore-india/'
      },
      {
        name: 'og:site_name',
        content: 'SEO Company in Chennai | SEO Services in Chennai'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:description',
        content: 'SEO Company in Chennai, SEO Services in Chennai, Best SEO Agency in Chennai, SEO Consultants in Chennai'
      },
      {
        name: 'twitter:title',
        content: 'SEO Company in Chennai | SEO Services in Chennai'
      }
    ]);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      organisation: ['', [Validators.required]],
      website: ['', [Validators.required]]
    });

    this.enquiryModal = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      organisation: ['', [Validators.required]],
      fService: ['', Validators.required],
      fMessage: ['', Validators.required]
    });

    this.auditForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    });

    this.faq_click(0);


  }
  get f() { return this.registerForm.controls; }
  get fenquiryModal() { return this.enquiryModal.controls; }
  get fomrobj() { return this.auditForm.controls; }


  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  modalRef: any = BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onSubmits() {
    this.submitted = true;
    this.arr = this.registerForm.value;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    const formName = this.registerForm.value.firstName;
    const formEmail = this.registerForm.value.email;
    const formPhone = this.registerForm.value.lastName;
    const formMessage = this.registerForm.value.password;
    const organisation = this.registerForm.value.organisation;
    const website = this.registerForm.value.website;


    this.httpClient.post('https://brandstory.in/assets/thank-you-banner-inline-newseo.php',
      {
        name: formName,
        email: formEmail,
        phone: formPhone,
        message: formMessage,
        organisation: organisation,
        website: website,
        page: "brandstory.in/seo-company-in-chennai/"

      })
      .subscribe(
        (data: any) => {
          //this.modalRef.hide();
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
        message: formMessage,
        organisation: organisation,
        website: website,
        page: "brandstory.in/seo-company-in-chennai/"
      })
      .subscribe(
        (data: any) => {
          //this.modalRef.hide();
          // this.router.navigate(['thank-you']);
          //  window.location.href = "https://brandstory.in/thank-you"
          // console.log(data);
        }
      )

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
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
        page: "brandstory.in/seo-company-in-chennai"

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
        page: "brandstory.in/seo-company-in-chennai"
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


  onSubmitauditForm() {
    this.submitted = true;
    this.arr = this.auditForm.value;
    debugger;
    if (this.auditForm.invalid) {
      return;
    }

    const firstName = this.auditForm.value.firstName;
    const email = this.auditForm.value.email;

    debugger;

    this.httpClient.post('https://brandstory.in/assets/seo_thankyou.php',
      {
        name: firstName,
        email: email,
        page: "brandstory.in/seo-company-in-chennai"

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
        name: firstName,
        email: email,
        page: "brandstory.in/seo-company-in-chennai"
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


