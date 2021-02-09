import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-smm',
  templateUrl: './smm.component.html',
  styleUrls: ['./smm.component.css']
})
export class SmmComponent implements OnInit {
  enquiryModal: any = FormGroup;
  fbannermodal: any = FormGroup;
  submitted = false;
  arr: any[] = [];
  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {

    title.setTitle('Best Social Media Marketing Company in Bangalore | SMM Services');

    meta.addTags([
      {
        name: 'description',
        content: 'Best Social Media Marketing Company in Bangalore, SMM Services Bangalore, Top and Best Social Media Marketing Company / Agency in Bangalore, India. SMM Companies in Bangalore, Facebook, Twitter, LinkedIn, Youtube Marketing Company in Bangalore.'
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
        content: 'Best Social Media Marketing Company in Bangalore | SMM Services'
      },
      {
        name: 'og:description',
        content: 'Best Social Media Marketing Company in Bangalore, SMM Services Bangalore, Top and Best Social Media Marketing Company / Agency in Bangalore, India. SMM Companies in Bangalore, Facebook, Twitter, LinkedIn, Youtube Marketing Company in Bangalore.'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/digital/smm/'
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
        content: 'Best Social Media Marketing Company in Bangalore, SMM Services Bangalore, Top and Best Social Media Marketing Company / Agency in Bangalore, India. SMM Companies in Bangalore, Facebook, Twitter, LinkedIn, Youtube Marketing Company in Bangalore.'
      },
      {
        name: 'twitter:title',
        content: 'Best Social Media Marketing Company in Bangalore | SMM Services'
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
      fMessage: ['', [Validators.required]]
    });
  }

  get fenquiryModal() { return this.enquiryModal.controls; }

  mySlideOptions: OwlOptions = {
    items: 4, dots: true, nav: false, loop: true,
    // responsiveClass:true,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
        dots: false,
        nav: true

      },
      // breakpoint from 480 up
      480: {
        items: 2,

      },
      // breakpoint from 768 up
      768: {
        items: 4,
      }
    }
  };


  modalRef: any = BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }


  myPortfolioItems = [
    {
      'category': 'design',
      'url': 'ati-technologies',
      'img': 'assets/images/wp-content/uploads/2018/07/Ati_Img1-230x180.png',
      'title': 'ATI Technologies',
      'image': [
        'assets/images/wp-content/uploads/2018/07/Ati_Img1.png', 'assets/images/wp-content/uploads/2018/07/Ati_Img2.png', 'assets/images/wp-content/uploads/2018/07/Ati_Img3.png', 'assets/images/wp-content/uploads/2018/07/Ati_Img4.png',
      ]
    },
    {
      'category': 'design',
      'url': 'arpedio',
      'img': 'assets/images/wp-content/uploads/2017/10/arpedio-img1-230x180.png',
      'title': 'Arpedio',
      'image': [
        'assets/images/wp-content/uploads/2017/10/arpedio-img1.png', 'assets/images/wp-content/uploads/2017/10/arpedio-img2.png', 'assets/images/wp-content/uploads/2017/10/arpedio-img3.png', 'assets/images/wp-content/uploads/2017/10/arpedio-img4.png'
      ]
    },
    {
      'category': 'design',
      'url': 'tasqar',
      'img': 'assets/images/wp-content/uploads/2018/05/TasqarBranding-4new-230x180.png',
      'title': 'TASQAR',
      'image': [
        'assets/images/wp-content/uploads/2018/05/tasqar_Cover-11.png', 'assets/images/wp-content/uploads/2018/05/TasqarBranding1.png', 'assets/images/wp-content/uploads/2018/05/Final-03_new.png', 'assets/images/wp-content/uploads/2018/05/TasqarFinal-04.png', 'assets/images/wp-content/uploads/2018/05/Logo_gif.gif', 'assets/images/wp-content/uploads/2018/05/TasqarBranding-4new.png', 'assets/images/wp-content/uploads/2018/05/Tasqar-Cover-08new.png', 'assets/images/wp-content/uploads/2018/05/tasqarFinal-10.png', 'src="assets/images/wp-content/uploads/2018/05/Final-09-_logo_option.png"'

      ]
    },


    {
      'category': 'socialmedia',
      'url': 'vymo',
      'img': 'assets/images/wp-content/uploads/2017/10/Artboard-88-1-230x180.png',
      'title': 'Vymo',
      'image': [
        'assets/images/wp-content/uploads/2017/10/Artboard-88-copy.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-1.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-2-1.png'
      ]
    },

    {
      'category': 'socialmedia',
      'url': 'angadi-galleria',
      'img': 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-2-230x180.png',
      'title': 'Angadi Galleria',
      'image': [
        'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-2.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-3.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-4.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-15.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-16.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-17.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-18.png'
      ]
    },

    {
      'category': 'socialmedia',
      'url': 'planet-education',
      'img': 'assets/images/wp-content/uploads/2018/04/Plannet-education-port-img1-230x180.png',
      'title': 'Planet Education',
      'image': [
        'assets/images/wp-content/uploads/2018/04/Plannet-education-port-img1.png', 'assets/images/wp-content/uploads/2018/04/Plannet-education-port-img2.png', 'assets/images/wp-content/uploads/2018/04/Plannet-education-port-img3.png', 'assets/images/wp-content/uploads/2018/04/Plannet-education-port-img4.png', 'assets/images/wp-content/uploads/2018/04/Plannet-education-port-img5.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-16.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-17.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-18.png'
      ]
    },

    {
      'category': 'socialmedia',
      'url': 'longitude',
      'img': 'assets/images/wp-content/uploads/2018/04/longtitude-port-img1-230x180.png',
      'title': 'Longitude',
      'image': [
        'assets/images/wp-content/uploads/2018/04/longtitude-port-img1.png', 'assets/images/wp-content/uploads/2018/04/longtitude-port-img2.png', 'assets/images/wp-content/uploads/2018/04/longtitude-port-img3.png'
      ]
    },
    {
      'category': 'socialmedia',
      'url': 'healthi',
      'img': 'assets/images/wp-content/uploads/2018/04/jainheights-port-img1-230x180.png',
      'title': 'Healthi',
      'image': [
        'assets/images/wp-content/uploads/2018/04/jainheights-port-img1.png', 'assets/images/wp-content/uploads/2018/04/jainheights-port-img2.png', 'assets/images/wp-content/uploads/2018/04/jainheights-port-img3.png'
      ]
    },



    {
      'category': 'socialmedia',
      'url': 'pathak-builders',
      'img': 'assets/images/wp-content/uploads/2018/07/pathak_developers_img1-230x180.png',
      'title': 'Pathak Builders',
      'image': [
        'assets/images/wp-content/uploads/2018/07/Facebook%20Video%20JD.mp4', 'assets/images/wp-content/uploads/2018/07/JD_Inst_Img1.jpg', 'assets/images/wp-content/uploads/2018/07/JD_Inst_Img2.jpg', 'assets/images/wp-content/uploads/2018/07/JD_Inst_Img3.jpg', 'assets/images/wp-content/uploads/2018/07/JD_Inst_Img4.png', 'assets/images/wp-content/uploads/2018/07/JD_Inst_Img5.png', 'assets/images/wp-content/uploads/2018/07/JD_Inst_Img6.jpg'
      ]
    },

    {
      'category': 'uiux',
      'url': 'ayyan-fireworks',
      'img': 'assets/images/wp-content/uploads/2018/04/ios-img1-230x180.png',
      'title': 'Ayyan Fireworks',
      'image': [
        'assets/images/wp-content/uploads/2018/04/ios-img1.png', 'assets/images/wp-content/uploads/2018/04/ios-img2.png', 'assets/images/wp-content/uploads/2018/04/ios-img3.png'
      ]
    },
    {
      'category': 'uiux',
      'url': 'new-horizon-college-of-engineering',
      'img': 'assets/images/wp-content/uploads/2018/04/android-img1-230x180.png',
      'title': 'NHCE',
      'image': [
        'assets/images/wp-content/uploads/2018/04/android-img1.png', 'assets/images/wp-content/uploads/2018/04/android-img2.png', 'assets/images/wp-content/uploads/2018/04/android-img3.png'

      ]
    },
    {
      'category': 'uiux',
      'url': 'my-dukaan',
      'img': 'assets/images/wp-content/uploads/2018/04/hybrid-img1-230x180.png',
      'title': 'My Dukaan',
      'image': [
        'assets/images/wp-content/uploads/2018/04/hybrid-img1.png', 'assets/images/wp-content/uploads/2018/04/hybrid-img2.png', 'assets/images/wp-content/uploads/2018/04/hybrid-img3.png'

      ]
    },


    {
      'category': 'Web',
      'url': 'hola-connect',
      'img': 'assets/images/wp-content/uploads/2017/10/Artboard-5-copy-3-1-230x180.png',
      'title': 'Hola Connect',
      'image': [
        'assets/images/wp-content/uploads/2017/10/Artboard-5-copy-3-1.png'
      ]
    },


    {
      'category': 'Web',
      'url': 'cloutlearn',
      'img': 'assets/images/wp-content/uploads/2017/10/Cloutport-img1-230x180.png',
      'title': 'Cloutlearn',
      'image': [
        'assets/images/wp-content/uploads/2017/10/Cloutport-img1.png', 'assets/images/wp-content/uploads/2017/10/Cloutport-img2.png', 'assets/images/wp-content/uploads/2017/10/Cloutport-img3.png', 'assets/images/wp-content/uploads/2017/10/Cloutport-img4.png'
      ]
    },


    {
      'category': 'Web',
      'url': 'atom-interiors',
      'img': 'assets/images/wp-content/uploads/2017/10/Artboard-5-copy-230x180.png',
      'title': 'Atom Interiors',
      'image': [
        'assets/images/wp-content/uploads/2017/10/Artboard-5.png', 'assets/images/wp-content/uploads/2017/10/Artboard-5-copy.png'
      ]
    },
    {
      'category': 'Web',
      'url': 'springdays-school',
      'img': 'assets/images/wp-content/uploads/2017/10/Springdays-8-230x180.png',
      'title': 'Springdays',
      'image': [
        'assets/images/wp-content/uploads/2017/10/Artboard-5-copy-2.png', 'assets/images/wp-content/uploads/2017/10/Artboard-5-copy-3.png'

      ]
    }
  ];



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
        page: "brandstory.in/development/smm/"

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
        page: "brandstory.in/development/smm/"

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
