import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-roi-seo-kochi',
  templateUrl: './roi-seo-kochi.component.html',
  styleUrls: ['./roi-seo-kochi.component.css']
})
export class RoiSeoKochiComponent implements OnInit {

  registerForm:any = FormGroup;
  bannerModalForm:any = FormGroup;

  isCollapsed = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  
  submitted = false;
  arr: any[] = [];
  isFirstOpen = true;

  selectedTab: any = '1';

  isShown: boolean = false;

  faq_array: any[] = [
    {
      title: 'What is SEO?',
      sub_text: '',
      message_list: ['SEO stands for Search Engine Optimization. It is the most important branch of Digital Marketing in the modern marketing era. The importance of having an SEO optimized website is to keep the trendy keywords on the internet linked with your website. this way maximum users will access your website in the SERP.'],

    },
    {
      title: 'Who uses SEO?',
      sub_text: '',
      message_list: ['Every online business and service uses SEO to increase their profit and values in the market. when a specific group of potential customers identifies a certain brand, the keyword analysis helps in predicting the kinds of search queries they can put in the search bar. Both SEO and SEM uses the same technique in different measures to generate more traffic to a website.'],

    },
    {
      title: 'Will SEO help a small business? ',
      sub_text: '',
      message_list: ['Small businesses need SEO as much a medium scale business organization needs. SEO can build a network comprising potential investors, buyers, and distributors over the internet which a small business might lack. If you have just started with your business, get in touch with the professionals of Kochi for eminent quality SEO services right from the beginning. '],
    },
    {
      title: 'How does SEO bring me leads? ',
      sub_text: '',
      message_list: ["Yes. The entire purpose of implementing SEO is to bring leads. The marketing techniques use and create traffic to give you a maximum business in a shorter span. "]
    },
  ]

  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('SEO Company in Kochi | SEO Services in Kochi | SEO Agency');

    meta.addTags([
      {
        name: 'description',
        content: 'Best SEO Company in Kochi, SEO Services in Kochi, Best SEO Agency in Kochi, Best SEO Services Company in Cochin Ernakulam'
      },
      {
        name: 'keywords',
        content: 'Best SEO Company in Kochi, SEO Services in Kochi, Best SEO Agency in Kochi, Best SEO Services Company in Cochin Ernakulam'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Best SEO Company in Kochi, SEO Services in Kochi, Best SEO Agency in Kochi, Best SEO Services Company in Cochin Ernakulam'
      },
      {
        name: 'og:description',
        content: 'Best SEO Company in Kochi, SEO Services in Kochi, Best SEO Agency in Kochi, Best SEO Services Company in Cochin Ernakulam'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/orm-company-bangalore-india/'
      },
      {
        name: 'og:site_name',
        content: 'SEO Company in Kochi | SEO Services in Kochi | SEO Agency'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:description',
        content: 'Best SEO Company in Kochi, SEO Services in Kochi, Best SEO Agency in Kochi, Best SEO Services Company in Cochin Ernakulam'
      },
      {
        name: 'twitter:title',
        content: 'SEO Company in Kochi | SEO Services in Kochi | SEO Agency'
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
