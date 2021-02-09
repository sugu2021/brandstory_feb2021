import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {
  submitted = false;
  enquiryModal: any = FormGroup;
  arr: any[] = [];
  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {

    title.setTitle('Marketing Collaterals | Creative Retainer Package | Brandstory');

    meta.addTags([
      {
        name: 'description',
        content: 'Marketing Collaterals, Our Creative Retainer Package includes Decks and Presentations, Case Studies and Whitepapers, Graphics and Images, Videos, Brochures and Posters and Landing Pages. Digital Marketing Company / Agency in Bangalore India.'
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
        content: 'Marketing Collaterals | Creative Retainer Package | Brandstory'
      },
      {
        name: 'og:description',
        content: 'Marketing Collaterals, Our Creative Retainer Package includes Decks and Presentations, Case Studies and Whitepapers, Graphics and Images, Videos, Brochures and Posters and Landing Pages. Digital Marketing Company / Agency in Bangalore India.'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/design/marketing-collaterals/'
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
        content: 'Marketing Collaterals, Our Creative Retainer Package includes Decks and Presentations, Case Studies and Whitepapers, Graphics and Images, Videos, Brochures and Posters and Landing Pages. Digital Marketing Company / Agency in Bangalore India.'
      },
      {
        name: 'twitter:title',
        content: 'Marketing Collaterals | Creative Retainer Package | Brandstory'
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

  mySlideImages1 = [
    'assets/images/wp-content/uploads/2018/04/1-Decks.png',
    'assets/images/wp-content/uploads/2018/04/2-Decks.png',
    'assets/images/wp-content/uploads/2018/04/3-Decks.png'
  ];

  mySlideImages2 = [
    'assets/images/wp-content/uploads/2018/04/1-Case-Study.png',
    'assets/images/wp-content/uploads/2018/04/2-Case-Study-.png'
  ];

  mySlideImages3 = [
    'assets/images/wp-content/uploads/2018/04/1-Graphics.png',
    'assets/images/wp-content/uploads/2018/04/2-Graphics-.png',
    'assets/images/wp-content/uploads/2018/04/3-Graphics-.png'
  ];

  mySlideImages4 = [
    'assets/images/wp-content/uploads/2018/04/video-popopimg1.png',
    'assets/images/wp-content/uploads/2018/04/video-popopimg2.png'
  ];

  mySlideImages5 = [
    'assets/images/wp-content/uploads/2018/04/Brochure-1.png',
    'assets/images/wp-content/uploads/2018/04/Brochure-2.png',
    'assets/images/wp-content/uploads/2018/04/Brochure-3.png'
  ];

  mySlideImages6 = [
    'assets/images/wp-content/uploads/2018/04/mc-lp-img.png',
    'assets/images/wp-content/uploads/2018/04/L-Img3.png'
  ];



  mySlideOptions: OwlOptions = {
    items: 1, dots: true, nav: false, loop: true, autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
  };

  myCarouselOptions: OwlOptions = { items: 3, dots: true, nav: true };



  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  modalRef: any = BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  get fenquiryModal() { return this.enquiryModal.controls; }


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
        page: "brandstory.in/careers"

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
        page: "brandstory.in/careers"

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
