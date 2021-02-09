import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-roi-seo-pune',
  templateUrl: './roi-seo-pune.component.html',
  styleUrls: ['./roi-seo-pune.component.css']
})

export class RoiSeoPuneComponent implements OnInit {
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
      title: 'Do you offer digital marketing services?',
      sub_text: '',
      message_list: ['Apart from SEO services we offer digital marketing services which include content marketing, PPC, SEO, social media marketing, email marketing, etc. We also offer website development and design services. We are proud to have a team that is proficient in the most advanced programming languages.'],

    },
    {
      title: 'What makes us the best SEO company in India?',
      sub_text: '',
      message_list: ['We have been in the industry for years now and have constantly delivered excellent work. We have an excellent work ethic and keep our clients in the know at all times. We have only ever received positive reviews from our customers, check out our client feedback to verify.',
        'We have won several awards for our work in SEO. We have a diverse team with a combined experience of 108 years.'],

    },
    {
      title: 'What are the different SEO services and which one will benefit me? ',
      sub_text: '',
      message_list: ['There are several SEO services like local SEO, eCommerce SEO, global SEO, and more. We are capable of doing all these types of SEO for your company. After a thorough analysis of your website, your niche market, and your target audience, we can then guide you regarding what kind of SEO will benefit your business.'],

      last_text: ''

    },
    {
      title: 'What do we do? ',
      sub_text: '',
      message_list: ["We are an SEO agency that offers SEO services. SEO stands for search engine optimization. You cannot escape the term SEO in today's world. SEO plays a crucial role in making your website rank on Google search results.",
        "We help you navigate this tricky world of SEO and help your websites rank. Our ultimate goal is to increase your sales, and if you let us, we will definitely help you reach the sales target for the year!"]
    },
  ]

  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('SEO Company in Pune | SEO Agency Pune | SEO Services Pune');

    meta.addTags([
      {
        name: 'description',
        content: 'Best SEO Company in Pune, SEO Services in Pune, SEO Agency in Pune, SEO Services Company in Pune, SEO Experts in Pune'
      },
      {
        name: 'keywords',
        content: 'Best SEO Company in Pune, SEO Services in Pune, SEO Agency in Pune, SEO Services Company in Pune, SEO Experts in Pune'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Best SEO Company in Pune, SEO Services in Pune, SEO Agency in Pune, SEO Services Company in Pune, SEO Experts in Pune'
      },
      {
        name: 'og:description',
        content: 'Best SEO Company in Pune, SEO Services in Pune, SEO Agency in Pune, SEO Services Company in Pune, SEO Experts in Pune'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/seo-company-in-pune/'
      },
      {
        name: 'og:site_name',
        content: 'SEO Company in Pune | SEO Services in Pune'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:description',
        content: 'Best SEO Company in Pune, SEO Services in Pune, SEO Agency in Pune, SEO Services Company in Pune, SEO Experts in Pune'
      },
      {
        name: 'twitter:title',
        content: 'SEO Company in Pune | SEO Services in Pune'
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
