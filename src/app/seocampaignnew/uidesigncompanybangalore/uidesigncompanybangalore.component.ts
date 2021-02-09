import { Component, OnInit,TemplateRef  } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title ,Meta} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-uidesigncompanybangalore',
  templateUrl: './uidesigncompanybangalore.component.html',
  styleUrls: ['./uidesigncompanybangalore.component.css']
})
export class UidesigncompanybangaloreComponent implements OnInit {
  registerForm:any = FormGroup;

  bannerModalForm:any = FormGroup;

  submitted = false;
  arr: any[]=[];
  isFirstOpen = true;

  constructor(meta:Meta, title:Title,private modalService: BsModalService,private httpClient: HttpClient,private router: Router,private formBuilder: FormBuilder) {
    title.setTitle('UI UX Design Company in Bangalore | UI UX Design Agency in Bangalore');

    meta.addTags([
      {
        name: 'description',
        content: 'UI UX Design Company in Bangalore, UI UX Design Studio in Bangalore, Top and Best UI UX Design Agency in Bangalore, UI UX Development Companies in Bangalore.'
        },
      {
        name: 'keywords',
        content: 'UI UX Design Company in Bangalore, UI UX Design Studio in Bangalore, Top and Best UI UX Design Agency in Bangalore, UI UX Development Companies in Bangalore.'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'UI UX Design Company in Bangalore | UI UX Design Agency in Bangalore'
      },
      {
        name: 'og:description',
        content: 'UI UX Design Company in Bangalore, UI UX Design Studio in Bangalore, Top and Best UI UX Design Agency in Bangalore, UI UX Development Companies in Bangalore.'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/digital/seo/'
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
        content: 'UI UX Design Company in Bangalore, UI UX Design Studio in Bangalore, Top and Best UI UX Design Agency in Bangalore, UI UX Development Companies in Bangalore.'
      },
      {
        name: 'twitter:title',
        content:'UI UX Design Company in Bangalore | UI UX Design Agency in Bangalore'
      }
    ]); }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      lastName: ['', [Validators.required,  Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      organisation: ['', [Validators.required]],
      website: ['', [Validators.required]]
  });
  this.bannerModalForm = this.formBuilder.group({
    fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
    fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    fPhone:  ['', [Validators.required,  Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
    fService: ['', [Validators.required]],
    fMessage: ['', [Validators.required]]
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

  get f() { return this.registerForm.controls; }
  get fbannermodal() { return this.bannerModalForm.controls; }


  scrollToElement($element:any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
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
        name:formName,
        email: formEmail,
        phone: formPhone,
        message: formMessage,
        organisation: organisation,
        website: website,
        page:"brandstory.in/ui-design-company-bangalore/"

      })
      .subscribe(
        (data:any) => {
          //this.modalRef.hide();
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
        message: formMessage,
        organisation: organisation,
        website: website,
        page:"brandstory.in/ui-design-company-bangalore/"
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
      name:formName,
      email: formEmail,
      phone: formPhone,
      service: formService,
      message: formMessage,
      page:"brandstory.in/ui-design-company-bangalore/"

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
      service: formService,
      message: formMessage,
      page:"brandstory.in/ui-design-company-bangalore/"
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
