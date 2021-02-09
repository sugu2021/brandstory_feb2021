import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-mobileapp',
  templateUrl: './mobileapp.component.html',
  styleUrls: ['./mobileapp.component.css']
})
export class MobileappComponent implements OnInit {
  submitted = false;
  enquiryModal: any = FormGroup;
  arr: any[] = [];
  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {

    title.setTitle('Mobile App UI UX Design Company in Bangalore | IOS UI UX Design');

    meta.addTags([
      {
        name: 'description',
        content: 'Top and Best Mobile App UI UX Design Company in Bangalore, Top and Best Android / IOS Mobile App UI UX Design Company in Bangalore, Hybrid App UI UX Designer'
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
        content: 'Mobile App UI UX Design Company in Bangalore | IOS UI UX Design'
      },
      {
        name: 'og:description',
        content: 'Top and Best Mobile App UI UX Design Company in Bangalore, Top and Best Android / IOS Mobile App UI UX Design Company in Bangalore, Hybrid App UI UX Designer'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/uiux/mobile-app/'
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
        content: 'Top and Best Mobile App UI UX Design Company in Bangalore, Top and Best Android / IOS Mobile App UI UX Design Company in Bangalore, Hybrid App UI UX Designer'
      },
      {
        name: 'twitter:title',
        content: 'Mobile App UI UX Design Company in Bangalore | IOS UI UX Design'
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

  mySlideImagesSteps = [
    {
      'img': 'assets/images/wp-content/uploads/2018/04/app-process1.png',
      'img2': 'assets/images/wp-content/uploads/2018/04/app-process2.png',
      'img3': 'assets/images/wp-content/uploads/2018/04/app-process3.png',
      'txt': 'Step 1',
      'subtxt': 'User Research',
      'content': 'User acquisition and retention are key resonance on what users think of the product. A detailed research and best understanding of user behavior help us lay basic foundation for a great experience and interface.'
    },
    {
      'img': 'assets/images/wp-content/uploads/2018/04/app-process2.png',
      'img2': 'assets/images/wp-content/uploads/2018/04/app-process3.png',
      'img3': 'assets/images/wp-content/uploads/2018/04/app-process4.png',
      'txt': 'Step 2',
      'subtxt': 'Work and User Flow',
      'content': 'A sequence of movements or actions of users is staged where the goal is to optimize users ability to accomplish a task with the least amount of effort. At this stage, multiple such scenarios are challenged and best possible solutions are devised.'
    },
    {
      'img': 'assets/images/wp-content/uploads/2018/04/app-process3.png',
      'img2': 'assets/images/wp-content/uploads/2018/04/app-process4.png',
      'img3': 'assets/images/wp-content/uploads/2018/04/app-process5.png',
      'txt': 'Step 3',
      'subtxt': 'Wireframing & Skinning',
      'content': 'Based on the finalized user flow and scenarios, the architecture of screens is created. At this step, the ideas are presented to the client and an initial understanding is established between UX, UI and development teams. The UI team develops the final GUI for the finalized screens.'
    },
    {
      'img': 'assets/images/wp-content/uploads/2018/04/app-process4.png',
      'img2': 'assets/images/wp-content/uploads/2018/04/app-process5.png',
      'img3': 'assets/images/wp-content/uploads/2018/04/app-process1.png',
      'txt': 'Step 4',
      'subtxt': 'Prototyping',
      'content': 'Before the development and after the GUI, the designs are prototyped to look out for frictions, practical user tests. Appropriate feedback and results of user testing are implemented in the design.'
    },
    {
      'img': 'assets/images/wp-content/uploads/2018/04/app-process5.png',
      'img2': 'assets/images/wp-content/uploads/2018/04/app-process1.png',
      'img3': 'assets/images/wp-content/uploads/2018/04/app-process2.png',
      'txt': 'Step 5',
      'subtxt': 'Front End Development',
      'content': 'The finalized designs are developed in HTML, compatible with various devices and resolutions.'
    }
  ];


  mySlideImages1 = [
    'assets/images/wp-content/uploads/2018/04/ios-img1.png',
    'assets/images/wp-content/uploads/2018/04/ios-img2.png',
    'assets/images/wp-content/uploads/2018/04/ios-img3.png'
  ];



  mySlideImages2 = [
    'assets/images/wp-content/uploads/2018/04/android-img1.png',
    'assets/images/wp-content/uploads/2018/04/android-img2.png',
    'assets/images/wp-content/uploads/2018/04/android-img3.png'
  ];




  mySlideImages3 = [
    'assets/images/wp-content/uploads/2018/04/hybrid-img1.png',
    'assets/images/wp-content/uploads/2018/04/hybrid-img2.png',
    'assets/images/wp-content/uploads/2018/04/hybrid-img3.png'
  ];



  mySlideOptions: OwlOptions = { items: 1, dots: true, nav: false };

  mySlideOptionsNew: OwlOptions = { items: 1, dots: true, nav: false };

  myCarouselOptions: OwlOptions = {
    items: 3, dots: true, nav: false, loop: true, autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
  };

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
        page: "brandstory.in/uiux/mobile-app/"

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
        page: "brandstory.in/uiux/mobile-app/"
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
