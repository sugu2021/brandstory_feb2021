import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-videoproduction',
  templateUrl: './videoproduction.component.html',
  styleUrls: ['./videoproduction.component.css']
})
export class VideoproductionComponent implements OnInit {

  registerForm: any = FormGroup;
  submitted = false;
  isFirstOpen = false;
  arr: any[] = [];

  myPortfolioItems = [
    {
      url: 'https://player.vimeo.com/video/335140059',
    },
    {
      url: 'https://player.vimeo.com/video/335138900',
    },
    {
      url: 'https://player.vimeo.com/video/333045212',
    },
    {
      url: 'https://player.vimeo.com/video/335139822',
    },
    {
      url: 'https://player.vimeo.com/video/335138830',
    },
    {
      url: 'https://player.vimeo.com/video/333046100',
    },
    {
      url: 'https://player.vimeo.com/video/335139976',
    },
    {
      url: 'https://player.vimeo.com/video/335139019',
    },
    {
      url: 'https://player.vimeo.com/video/335162733',
    },
    {
      url: 'https://player.vimeo.com/video/335138779',
    },
  ];

  AllVideos: any[] = [];


  constructor(meta: Meta, title: Title, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder, public embedService: EmbedVideoService,) {

    title.setTitle('Video Production Company in Bangalore | Corporate Video Production');

    meta.addTags([
      {
        name: 'description',
        content: 'Top Quality Corporate video production company in Bangalore & 2d Animation, Explainer video agency in Bangalore. We are the best product & corporate video production service in Bangalore'
      },
      {
        name: 'keywords',
        content: 'Top Quality Corporate video production company in Bangalore & 2d Animation, Explainer video agency in Bangalore. We are the best product & corporate video production service in Bangalore'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'Video Production Company Bangalore | Branding | Corporate Videos '
      },
      {
        name: 'og:description',
        content: 'Top Quality Corporate video production company in Bangalore & 2d Animation, Explainer video agency in Bangalore. We are the best product & corporate video production service in Bangalore'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/contact-us/'
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
        content: 'Top Quality Corporate video production company in Bangalore & 2d Animation, Explainer video agency in Bangalore. We are the best product & corporate video production service in Bangalore'
      },
      {
        name: 'twitter:title',
        content: 'Video Production Company Bangalore | Branding | Corporate Videos '
      }
    ]);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      organisation: ['', Validators.required],
      password: ['', [Validators.required]]
    });


    if (this.myPortfolioItems.length > 0) {


      this.myPortfolioItems.forEach(element => {

        element.url = element.url.replace('https://player.vimeo.com/video/', 'https://vimeo.com/')

        if (element.url) {

          if (this.isValidURL(element.url)) {


            let videoObj: any = {
              video_src: this.embedService.embed(element.url, {
                attr: { width: 200, height: 200 }
              })
              // video_src: element.url
            };

            this.AllVideos.push(videoObj);
          }

        }

      });



    }


  }
  get f() { return this.registerForm.controls; }


  // ngAfterViewInit(): void {

  //   if (this.myPortfolioItems.length > 0) {


  //     this.myPortfolioItems.forEach(element => {

  //       element.url = element.url.replace('https://player.vimeo.com/video/', 'https://vimeo.com/')

  //       if (element.url) {

  //         if (this.isValidURL(element.url)) {


  //           let videoObj: any = {
  //             video_src: this.embedService.embed(element.url,{
  //               attr: { width: 200, height: 200 }
  //             })
  //             // video_src: element.url
  //           };

  //           this.AllVideos.push(videoObj);
  //         }

  //       }

  //     });



  //   }

  // }

  isValidURL(str: any) {

    var n = str.includes("https://");

    return n;

  };


  onSubmits() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.arr = this.registerForm.value;
    const firstName = this.registerForm.value.firstName;
    const email = this.registerForm.value.email;
    const formPhone = this.registerForm.value.lastName;
    const formService = this.registerForm.value.organisation;
    const formMessage = this.registerForm.value.password;


    this.httpClient.post('https://brandstory.in/assets/thank-you-company.php',
      {
        name: firstName,
        email: email,
        phone: formPhone,
        organisation: formService,
        message: formMessage,
        page: "brandstory.in/digital/video-production"

      })
      .subscribe(
        (data: any) => {

          window.location.href = "https://brandstory.in/thank-you"
          console.log(data);
        }
      )

    this.httpClient.post('https://brandstory.in/assets/customer_mail_2021.php',
      {
        name: firstName,
        email: email,
        phone: formPhone,
        organisation: formService,
        message: formMessage,
        page: "brandstory.in/digital/video-production"

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

  mySlideOptions: OwlOptions = {
    items: 3,
    dots: true,
    nav: false,
    loop: true,
    // responsiveClass:true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 3,
        dotsEach: 4,
        // nav:false,

      },
      // breakpoint from 480 up
      480: {
        items: 2,
        dotsEach: 5

      },
      // breakpoint from 768 up
      768: {
        items: 3,
      }
    }
  };


}
