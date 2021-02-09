import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

// declare var $owl:any;

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.css']
})
export class BrandingComponent implements OnInit {
  submitted = false;
  enquiryModal: any = FormGroup;
  arr: any[] = [];
  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('Top and Best Branding Company in Bangalore | Brand Design Company');

    meta.addTags([
      {
        name: 'description',
        content: 'Top and Best Branding Company in Bangalore. We offer Logo Design, Stationaries and Collaterals Designs, Vehicle Designs, Uniform Branding Services in Bangalore India. Brand Design Company in Bangalore, Brand Marketing Company / Agency in Bangalore.'
      },
      {
        name: 'keywords',
        content: 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore'
      },
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:title',
        content: 'Top and Best Branding Company in Bangalore | Brand Design Company'
      },
      {
        name: 'og:description',
        content: 'Top and Best Branding Company in Bangalore. We offer Logo Design, Stationaries and Collaterals Designs, Vehicle Designs, Uniform Branding Services in Bangalore India. Brand Design Company in Bangalore, Brand Marketing Company / Agency in Bangalore.'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/design/branding/'
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
        content: 'Top and Best Branding Company in Bangalore. We offer Logo Design, Stationaries and Collaterals Designs, Vehicle Designs, Uniform Branding Services in Bangalore India. Brand Design Company in Bangalore, Brand Marketing Company / Agency in Bangalore.'
      },
      {
        name: 'twitter:title',
        content: 'Top and Best Branding Company in Bangalore | Brand Design Company'
      }
    ]);


  }

  ngOnInit() {
    this.enquiryModal = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      organisation: ['', [Validators.required]],
      fService: ['', Validators.required],
      fMessage: ['', Validators.required]
    });
  }

  get fenquiryModal() { return this.enquiryModal.controls; }

  images = [
    {
      "url": "assets/images/wp-content/uploads/2018/04/1-Brand-Identity.png",
    },
    {
      "url": "assets/images/wp-content/uploads/2018/04/3-Brand-Identity.png",
    },
    {
      "url": "assets/images/wp-content/uploads/2018/04/2-Brand-Identity.png",
    },
  ];


  brandimages = [
    {
      "url": "assets/images/wp-content/uploads/2018/04/1-Brand-Image.png",
    },
    {
      "url": "assets/images/wp-content/uploads/2018/04/2-Brand-Image.png",
    },
    {
      "url": "assets/images/wp-content/uploads/2018/04/3-Brand-Image.png",
    },

  ];

  brandpositionimages = [
    'assets/images/wp-content/uploads/2018/04/1-Brand-Positioning-Visual-Identity.png',
    'assets/images/wp-content/uploads/2018/04/2-Brand-Positioning-Visual-Identity.png',
    'assets/images/wp-content/uploads/2018/04/3-Brand-Positioning-Visual-Identity.png'
  ];



  mySlideOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }

  myCarouselOptions: OwlOptions = { items: 3, dots: true, nav: true };

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  modalRef: any = BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }





  onSubmitEnquiryModal() {
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


    //this.httpClient.post('https://brandstory.in/assets/thank-you-enquiry-modal.php',
    this.httpClient.post('https://brandstory.in/assets/thank-you-enquiry-home.php',
      {
        name: formName,
        email: formEmail,
        phone: formPhone,
        company: organisation,
        service: formService,
        message: formMessage,
        page: "brandstory.in/design/branding/"

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
        page: "brandstory.in/design/branding/"

      })
      .subscribe(
        (data:any) => {
          //this.modalRef.hide();
         // this.router.navigate(['thank-you']);
        //  window.location.href = "https://brandstory.in/thank-you"
          // console.log(data);
        }
      )


  }

}
