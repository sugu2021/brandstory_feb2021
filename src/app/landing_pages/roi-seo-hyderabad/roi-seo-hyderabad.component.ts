import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-roi-seo-hyderabad',
  templateUrl: './roi-seo-hyderabad.component.html',
  styleUrls: ['./roi-seo-hyderabad.component.css']
})
export class RoiSeoHyderabadComponent implements OnInit {

  registerForm:any = FormGroup;
  bannerModalForm:any = FormGroup;

  submitted = false;
  arr: any[] = [];
  isFirstOpen = true;

  isCollapsed = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  
  selectedTab: any = '1';

  isShown: boolean = false;

  faq_array: any[] = [
    {
      title: 'What is the time estimation for SEO to work?',
      sub_text: '',
      message_list: ['Professional services take at least 3 to 6 months to deliver satisfying results in SEO. The outcomes are never instant. A lot of technical improvements, off-page, and on-page developments are necessary to improve the web page quality overall. Your brand and services also play a role to increase credibility. '],

    },
    {
      title: 'Why would I need SEO services?',
      sub_text: "SEO services improve your website's ranking and results. Therefore, it is a wise investment. Besides, you need SEO because:",
      message_list: ['SEO strategies are meant for a long term approach in a business.',
        'It helps to find the right audience without wasting time on irrelevant places.',
        'You can stay ahead of your competitors by using SEO services. ',
        'Your website becomes more optimized than others who are without SEO services. '],
    },
    {
      title: 'Does SEO matter? ',
      sub_text: 'Every business needs SEO services for certain reasons:',
      message_list: ['It boosts business performance both offline and online.',
        'Since SEO increases the approach of a business, it targets a lot of other creators for collaboration which in turn can increase your network.',
        'SEO gives you detail information about the users, competitors, and their interests.'],
    },
    {
      title: 'What does a professional SEO Agency do?',
      sub_text: '',
      message_list: ['An SEO agency sets up your website to help you achieve your goals. ']
    },
    {
      title: 'How to know if the SEO Agency is promising with services?',
      sub_text: 'A promising SEO agency will always commit to the following:',
      sub_text1: 'Keyword analysis and strategies',
      message_list: ['Initial Auditing',
        'Web page optimization',
        'Improving the technical site structure and speed',
        'Local linking to other similar businesses of your industry',
        'Track performances to generate new strategies for maximum leads']
    },

  ]

  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('SEO Services in Hyderabad | SEO Company in Hyderabad');

    meta.addTags([
      {
        name: 'description',
        content: 'SEO Services in Hyderabad, Best SEO Company in Hyderabad, Top SEO Agency in Hyderabad, SEO Experts in Hyderabad, SEO Consultants Hyderabad'
      },
      {
        name: 'keywords',
        content: 'SEO Services in Hyderabad, Best SEO Company in Hyderabad, Top SEO Agency in Hyderabad, SEO Experts in Hyderabad, SEO Consultants Hyderabad'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'SEO Services in Hyderabad, Best SEO Company in Hyderabad, Top SEO Agency in Hyderabad, SEO Experts in Hyderabad, SEO Consultants Hyderabad'
      },
      {
        name: 'og:description',
        content: 'SEO Services in Hyderabad, Best SEO Company in Hyderabad, Top SEO Agency in Hyderabad, SEO Experts in Hyderabad, SEO Consultants Hyderabad'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/orm-company-bangalore-india/'
      },
      {
        name: 'og:site_name',
        content: 'SEO Services in Hyderabad | SEO Company in Hyderabad'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:description',
        content: 'SEO Services in Hyderabad, Best SEO Company in Hyderabad, Top SEO Agency in Hyderabad, SEO Experts in Hyderabad, SEO Consultants Hyderabad'
      },
      {
        name: 'twitter:title',
        content: 'SEO Services in Hyderabad | SEO Company in Hyderabad'
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
    this.bannerModalForm = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      fService: ['', [Validators.required]],
      fMessage: ['', [Validators.required]]
    });

    this.faq_click(0);

  }
  get f() { return this.registerForm.controls; }
  get fbannermodal() { return this.bannerModalForm.controls; }

  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  modalRef:any = BsModalRef;

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
        page: "brandstory.in/orm-company-bangalore-india/"

      })
      .subscribe(
        (data: any) => {
          //this.modalRef.hide();
          // this.router.navigate(['thank-you']);
          window.location.href = "https://brandstory.in/thank-you"
          console.log(data);
        }
      )
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
  onSubmitBannerModal() {
    this.submitted = true;
    this.arr = this.bannerModalForm.value;

    //console.log(JSON.stringify( this.arr));
    //console.log(JSON.stringify( form.value));
    //console.log(JSON.stringify( form.value.fName));
    if (this.bannerModalForm.invalid) {
      return;
    }
    const formName = this.bannerModalForm.value.fName;
    const formEmail = this.bannerModalForm.value.fEmail;
    const formPhone = this.bannerModalForm.value.fPhone;
    const formService = this.bannerModalForm.value.fService;
    const formMessage = this.bannerModalForm.value.fMessage;


    this.httpClient.post('https://brandstory.in/assets/thank-you-banner-modal.php',
      {
        name: formName,
        email: formEmail,
        phone: formPhone,
        service: formService,
        message: formMessage,
        page: "brandstory.in/orm-company-bangalore-india/"

      })
      .subscribe(
        (data: any) => {
          this.modalRef.hide();
          // this.router.navigate(['thank-you']);
          window.location.href = "https://brandstory.in/thank-you"
          console.log(data);
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
