import { Component, OnInit,TemplateRef  } from '@angular/core';
//import { CategoryPipe } from './category.pipes';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title, Meta} from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-casestudies',
  templateUrl: './casestudies.component.html',
  styleUrls: ['./casestudies.component.css']
})
export class CasestudyComponent implements OnInit {
  ProductCategory:any = '';
  submitted = false;
  enquiryModal:any = FormGroup;
  arr: any[]=[];
  constructor(meta:Meta, title:Title,private modalService: BsModalService,private httpClient: HttpClient,private router: Router,private formBuilder: FormBuilder) {
    title.setTitle('SEO Case Study | SEO and Campaign Management Case Studies');

    meta.addTags([
      {
        name: 'description',
        content: 'Learn more about the search engine optimization and campaign management case studies for interior design company, real estate company, b2b, a technology company, university case study etc.'
        },
      {
        name: 'keywords',
        content: 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'SEO Case Study | SEO and Campaign Management Case Studies'
      },
      {
        name: 'og:description',
        content: 'Learn more about the search engine optimization and campaign management case studies for interior design company, real estate company, b2b, a technology company, university case study etc.'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/resources/casestudies/'
      },
      {
        name: 'og:site_name',
        content: 'Digital Marketing Agency | Digital Marketing Company Bangalore | SEO Company'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:description',
        content: 'Learn more about the search engine optimization and campaign management case studies for interior design company, real estate company, b2b, a technology company, university case study etc.'
      },
      {
        name: 'twitter:title',
        content:'SEO Case Study | SEO and Campaign Management Case Studies'
      }
    ]);
  }

  ngOnInit() {
    this.ProductCategory = 'seo';
    this.enquiryModal = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone:  ['', [Validators.required,  Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      organisation: ['', [Validators.required]],
      fService: ['', Validators.required],
      fMessage: ['', Validators.required]
    });
  }

  get fenquiryModal() { return this.enquiryModal.controls; }

  myPortfolioItems =  [
      {
        'category':'seo',
        'url':'seocasestudies/interior-design-company/',
        'title':'Interior Design Company' ,
		'description':'We increased lead conversion by 300% and organic traffic to a website by 150% for an Interior Design firm',
        'metaTitle' : 'Interior Design Company seo case study',
        'metaDescription':'Brandstory provides search engine marketing services for Interior Design Company to increase business revenue',
        'metaKeyword':'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
        'ogTitle':'Interior Design Company seo case study',
        'ogDescription':'Brandstory provides search engine marketing services for Interior Design Company to increase their business revenue',
        'ogUrl':'https://brandstory.in/resources/casestudies/seocasestudies/interior-design-company/',
        'ogSiteName' :'Digital Marketing Company in Bangalore | Digital Marketing Agency',
        'twitterCard' :'summary',
        'twitterDescription':'Brandstory provides search engine marketing services for Interior Design Company to increase their business revenue',
        'twitterTitle' : 'Interior Design Company seo case study'

      },
  {
        'category':'seo',
        'url':'seocasestudies/lifesciences-pharma-company/',
        'title':'Lifesciences & Pharma Company' ,
		'description':'BrandStory’s SEO strategy increases organic traffic by 300% in less than 7 months for Pharma Company',
        'metaTitle' : 'Lifesciences & Pharma Company seo case study',
        'metaDescription':'Brandstory provides search engine marketing services for Lifesciences & Pharma Company to increase business revenue',
        'metaKeyword':'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
        'ogTitle':'Lifesciences & Pharma Company seo case study',
        'ogDescription':'Brandstory provides search engine marketing services for Lifesciences & Pharma Company to increase their business revenue',
        'ogUrl':'https://brandstory.in/resources/casestudies/seocasestudies/lifesciences-pharma-company/',
        'ogSiteName' :'Digital Marketing Company in Bangalore | Digital Marketing Agency',
        'twitterCard' :'summary',
        'twitterDescription':'Brandstory provides search engine marketing services for Lifesciences & Pharma Company to increase their business revenue',
        'twitterTitle' : 'Lifesciences & Pharma Company seo case study'

      },
  {
        'category':'seo',
        'url':'seocasestudies/management-consulting-firm/',
        'title':'Management Consulting Firm' ,
		'description':'Lead generation increased by 15% for a management consulting firm by BrandStory',
        'metaTitle' : 'Management Consulting Firm seo case study',
        'metaDescription':'Brandstory provides search engine marketing services for Management Consulting Firm to increase business revenue',
        'metaKeyword':'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
        'ogTitle':'Management Consulting Firm seo case study',
        'ogDescription':'Brandstory provides search engine marketing services for Management Consulting Firm to increase their business revenue',
        'ogUrl':'https://brandstory.in/resources/casestudies/seocasestudies/management-consulting-firm/',
        'ogSiteName' :'Digital Marketing Company in Bangalore | Digital Marketing Agency',
        'twitterCard' :'summary',
        'twitterDescription':'Brandstory provides search engine marketing services for Management Consulting Firm to increase their business revenue',
        'twitterTitle' : 'Management Consulting Firm seo case study'

      },
  {
        'category':'seo',
        'url':'seocasestudies/interior-design-company-seo/',
        'title':'Interior Design Company' ,
		'description':'BrandStory increases lead conversion by 300% and organic traffic by 350%',
        'metaTitle' : 'Interior Design Company seo case study',
        'metaDescription':'Brandstory provides search engine marketing services for Interior Design Company to increase business revenue',
        'metaKeyword':'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
        'ogTitle':'Interior Design Company seo case study',
        'ogDescription':'Brandstory provides search engine marketing services for Interior Design Company to increase their business revenue',
        'ogUrl':'https://brandstory.in/resources/casestudies/seocasestudies/interior-design-company-seo/',
        'ogSiteName' :'Digital Marketing Company in Bangalore | Digital Marketing Agency',
        'twitterCard' :'summary',
        'twitterDescription':'Brandstory provides search engine marketing services for Interior Design Company to increase their business revenue',
        'twitterTitle' : 'Interior Design Company seo case study'

      },
  {
        'category':'seo',
        'url':'seocasestudies/real-estate-company/',
        'title':'Real-Estate Company' ,
		'description':'BrandStory’s SEO strategy saves a real-estate giant INR 15,00,000 per annum and organically gains 100+ qualified leads',
        'metaTitle' : 'Real-Estate Company seo case study',
        'metaDescription':'Brandstory provides search engine marketing services for Real-Estate Company to increase business revenue',
        'metaKeyword':'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
        'ogTitle':'Real-Estate Company seo case study',
        'ogDescription':'Brandstory provides search engine marketing services for Real-Estate Company to increase their business revenue',
        'ogUrl':'https://brandstory.in/resources/casestudies/seocasestudies/real-estate-company/',
        'ogSiteName' :'Digital Marketing Company in Bangalore | Digital Marketing Agency',
        'twitterCard' :'summary',
        'twitterDescription':'Brandstory provides search engine marketing services for Real-Estate Company to increase their business revenue',
        'twitterTitle' : 'Real-Estate Company seo case study'

      },
  {
        'category':'seo',
        'url':'seocasestudies/technology-company/',
        'title':'Technology Company' ,
		'description':'By ranking 80+ primary keywords on Page 1 of Google, BrandStory increases web traffic by 50% for a Tech Enterprise',
        'metaTitle' : 'Technology Company seo case study',
        'metaDescription':'Brandstory provides search engine marketing services for Technology Company to increase business revenue',
        'metaKeyword':'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
        'ogTitle':'Technology Company seo case study',
        'ogDescription':'Brandstory provides search engine marketing services for Technology Company to increase their business revenue',
        'ogUrl':'https://brandstory.in/resources/casestudies/seocasestudies/technology-company/',
        'ogSiteName' :'Digital Marketing Company in Bangalore | Digital Marketing Agency',
        'twitterCard' :'summary',
        'twitterDescription':'Brandstory provides search engine marketing services for Technology Company to increase their business revenue',
        'twitterTitle' : 'Technology Company seo case study'

      },
  {
        'category':'campaign',
        'url':'campaignmanagement/real-estate-company/',
        'title':'Real-Estate Company' ,
		'description':'BrandStory increases Marketing Qualified Leads by 30% from 10% for a Real Estate Giant',
        'metaTitle' : 'Real-Estate Company campaign case study',
        'metaDescription':'Brandstory provides search engine marketing services for Real-Estate Company to increase business revenue',
        'metaKeyword':'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
        'ogTitle':'Real-Estate Company campaign case study',
        'ogDescription':'Brandstory provides search engine marketing services for Real-Estate Company to increase their business revenue',
        'ogUrl':'https://brandstory.in/resources/casestudies/campaignmanagement/real-estate-company/',
        'ogSiteName' :'Digital Marketing Company in Bangalore | Digital Marketing Agency',
        'twitterCard' :'summary',
        'twitterDescription':'Brandstory provides search engine marketing services for Real-Estate Company to increase their business revenue',
        'twitterTitle' : 'Real-Estate Company campaign case study'

      },
  {
        'category':'campaign',
        'url':'campaignmanagement/interior-design-company/',
        'title':'Interior Design Company' ,
		'description':'BrandStory increases traffic to a website by 75% month on month for an Interior Design Firm',
        'metaTitle' : 'Interior Design Company campaign case study',
        'metaDescription':'Brandstory provides search engine marketing services for Interior Design Company to increase business revenue',
        'metaKeyword':'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
        'ogTitle':'Interior Design Company campaign case study',
        'ogDescription':'Brandstory provides search engine marketing services for Interior Design Company to increase their business revenue',
        'ogUrl':'https://brandstory.in/resources/casestudies/campaignmanagement/interior-design-company/',
        'ogSiteName' :'Digital Marketing Company in Bangalore | Digital Marketing Agency',
        'twitterCard' :'summary',
        'twitterDescription':'Brandstory provides search engine marketing services for Interior Design Company to increase their business revenue',
        'twitterTitle' : 'Interior Design Company campaign case study'

      },
  {
        'category':'campaign',
        'url':'campaignmanagement/lifesciences-pharma-company/',
        'title':'Lifesciences & Pharma Company' ,
		'description':'From INR 11 to 90 Paise, BrandStory optimizes Cost per click for a Pharma Company',
        'metaTitle' : 'Lifesciences & Pharma Company campaign case study',
        'metaDescription':'Brandstory provides search engine marketing services for Lifesciences & Pharma Company to increase business revenue',
        'metaKeyword':'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
        'ogTitle':'Lifesciences & Pharma Company campaign case study',
        'ogDescription':'Brandstory provides search engine marketing services for Lifesciences & Pharma Company to increase their business revenue',
        'ogUrl':'https://brandstory.in/resources/casestudies/campaignmanagement/lifesciences-pharma-company/',
        'ogSiteName' :'Digital Marketing Company in Bangalore | Digital Marketing Agency',
        'twitterCard' :'summary',
        'twitterDescription':'Brandstory provides search engine marketing services for Lifesciences & Pharma Company to increase their business revenue',
        'twitterTitle' : 'Lifesciences & Pharma Company campaign case study'

      },
  {
        'category':'campaign',
        'url':'campaignmanagement/b2b-campaign/',
        'title':'B2B' ,
		'description':'BrandStory increases sales conversion by 30% in 3 months for an Accounting Firm',
        'metaTitle' : 'B2B campaign case study',
        'metaDescription':'Brandstory provides search engine marketing services for B2B to increase business revenue',
        'metaKeyword':'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
        'ogTitle':'B2B campaign case study',
        'ogDescription':'Brandstory provides search engine marketing services for B2B to increase their business revenue',
        'ogUrl':'https://brandstory.in/resources/casestudies/campaignmanagement/b2b-campaign/',
        'ogSiteName' :'Digital Marketing Company in Bangalore | Digital Marketing Agency',
        'twitterCard' :'summary',
        'twitterDescription':'Brandstory provides search engine marketing services for B2B to increase their business revenue',
        'twitterTitle' : 'B2B campaign case study'

      },
  {
        'category':'campaign',
        'url':'campaignmanagement/university/',
        'title':'University' ,
		'description':'BrandStory increases conversion ratio for MQL increased from 15% to 40% for an autonomous university during peak admission season',
        'metaTitle' : 'University campaign case study',
        'metaDescription':'Brandstory provides search engine marketing services for University to increase business revenue',
        'metaKeyword':'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
        'ogTitle':'University campaign case study',
        'ogDescription':'Brandstory provides search engine marketing services for University to increase their business revenue',
        'ogUrl':'https://brandstory.in/resources/casestudies/campaignmanagement/university/',
        'ogSiteName' :'Digital Marketing Company in Bangalore | Digital Marketing Agency',
        'twitterCard' :'summary',
        'twitterDescription':'Brandstory provides search engine marketing services for University to increase their business revenue',
        'twitterTitle' : 'University campaign case study'

      }
  ];
updateProductCategory(stringCategory: string) {
  this.ProductCategory = stringCategory;
  }

  showAllCategory(){

  }


  modalRef:any = BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


 onSubmitEnquiryModal( ) {
  this.submitted = true;
  this.arr = this.enquiryModal.value;

  if (this.enquiryModal.invalid) {
    return;
}
  //console.log(JSON.stringify( this.arr));
  //console.log(JSON.stringify( form.value));
  //console.log(JSON.stringify( form.value.fName));

  const formName = this.enquiryModal.value.fName;
  const formEmail = this.enquiryModal.value.fEmail;
  const formPhone = this.enquiryModal.value.fPhone;
  const organisation = this.enquiryModal.value.organisation;
  const formService = this.enquiryModal.value.fService;
  const formMessage = this.enquiryModal.value.fMessage;


 // this.httpClient.post('https://brandstory.in/assets/thank-you-enquiry-modal.php',
 this.httpClient.post('https://brandstory.in/assets/thank-you-enquiry-home.php',
  {
    name:formName,
    email: formEmail,
    phone: formPhone,
    company: organisation,
    service: formService,
    message: formMessage,
    page:"brandstory.in/blogs"

  })
  .subscribe(
    (data:any) => {
      this.modalRef.hide();
     // this.router.navigate(['thank-you']);
     window.location.href = "https://brandstory.in/thank-you"
      console.log(data);
    }
  )

  this.httpClient.post('https://brandstory.in/assets/customer_mail_2021.php',
  {
    name:formName,
    email: formEmail,
    phone: formPhone,
    company: organisation,
    service: formService,
    message: formMessage,
    page:"brandstory.in/blogs"
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
}
