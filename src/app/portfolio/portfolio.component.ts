import { Component, OnInit, TemplateRef } from '@angular/core';
import { CategoryPipe } from './category.pipe';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  ProductCategory: any = '';
  submitted = false;
  enquiryModal: any = FormGroup;
  arr: any[] = [];
  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('Online Reputation Management | Online Marketing Company');

    meta.addTags([
      {
        name: 'description',
        content: 'Online Reputation Management, Online Marketing Company, Best Online Marketing Company in Bangalore, Online Lead Generation Company'
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
        content: 'Google Adwords PPC Company in Bangalore | PPC Agency Bangalore'
      },
      {
        name: 'og:description',
        content: 'Best Social Media Marketing Company in Bangalore, SMM Services Bangalore, Top and Best Social Media Marketing Company / Agency in Bangalore, India. SMM Companies in Bangalore, Facebook, Twitter, LinkedIn, Youtube Marketing Company in Bangalore.'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/our-portfolio/'
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
        content: 'Online Reputation Management, Online Marketing Company, Best Online Marketing Company in Bangalore, Online Lead Generation Company'
      },
      {
        name: 'twitter:title',
        content: 'Online Reputation Management | Online Marketing Company'
      }
    ]);
  }

  ngOnInit() {
    this.ProductCategory = 'socialmedia';
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

  myPortfolioItems = [
    {
      'category': 'design',
      'url': 'ati-technologies',
      'img': 'assets/images/wp-content/uploads/2018/07/Ati_Img1-230x180.png',
      'title': 'ATI Technologies',
      'image': [
        'assets/images/wp-content/uploads/2018/07/Ati_Img1.png', 'assets/images/wp-content/uploads/2018/07/Ati_Img2.png', 'assets/images/wp-content/uploads/2018/07/Ati_Img3.png', 'assets/images/wp-content/uploads/2018/07/Ati_Img4.png',
      ],
      'metaTitle': 'ATI Technologies Portfolio',
      'metaDescription': 'Brandstory provides search engine marketing services for ATI Technologies to increase their business revenue',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'ATI Technologies Portfolio',
      'ogDescription': 'Brandstory provides search engine marketing services for ATI Technologies to increase their business revenue',
      'ogUrl': 'https://brandstory.in/portfolio/ati-technologies/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory provides search engine marketing services for ATI Technologies to increase their business revenue',
      'twitterTitle': 'ATI Technologies Portfolio'

    },
    {
      'category': 'design',
      'url': 'arpedio',
      'img': 'assets/images/wp-content/uploads/2017/10/arpedio-img1-230x180.png',
      'title': 'Arpedio',
      'image': [
        'assets/images/wp-content/uploads/2017/10/arpedio-img1.png', 'assets/images/wp-content/uploads/2017/10/arpedio-img2.png', 'assets/images/wp-content/uploads/2017/10/arpedio-img3.png', 'assets/images/wp-content/uploads/2017/10/arpedio-img4.png'
      ],
      'metaTitle': 'Arpedia Portfolio | Brochure Design Company in Bangalore',
      'metaDescription': 'Brandstory Brochure Design Company in Bangalore have designed the brochure for Arpedia.',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Arpedia Portfolio | Brochure Design Company in Bangalore',
      'ogDescription': 'Brandstory Brochure Design Company in Bangalore have designed the brochure for Arpedia.',
      'ogUrl': 'https://brandstory.in/portfolio/arpedio/',
      'ogSiteName': 'Digital Marketing Agency | Digital Marketing Company Bangalore | SEO Company',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory Brochure Design Company in Bangalore have designed the brochure for Arpedia.',
      'twitterTitle': 'Arpedia Portfolio | Brochure Design Company in Bangalore'
    },
    {
      'category': 'design',
      'url': 'springdays',
      'img': 'assets/images/wp-content/uploads/2017/10/Springdays-8-230x180.png',
      'title': 'Springdays',
      'image': [
        'assets/images/wp-content/uploads/2017/10/Spring-Days-1.png', 'assets/images/wp-content/uploads/2017/10/Springdays-2.png', 'assets/images/wp-content/uploads/2017/10/Spring-Days-3.png', 'assets/images/wp-content/uploads/2017/10/Spring-days-4.png',
        'assets/images/wp-content/uploads/2017/10/Spring-days-5.png',
        'assets/images/wp-content/uploads/2017/10/Springdays-6.png', 'assets/images/wp-content/uploads/2017/10/Springdays-7.png', 'assets/images/wp-content/uploads/2017/10/Springdays-8.png'

      ],
      'metaTitle': 'Springdays School Portfolio | Brochure Design | Visiting Card Design',
      'metaDescription': 'Brandstory designed, brochure design and visiting card designs to spring days CBSE school in Vellore',
      'metaKeyword': '',
      'ogTitle': 'Springdays School Portfolio | Brochure Design | Visiting Card Design',
      'ogDescription': 'Brandstory designed, brochure design and visiting card designs to spring days CBSE school in Vellore',
      'ogUrl': 'https://brandstory.in/portfolio/springdays/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory designed, brochure design and visiting card designs to spring days CBSE school in Vellore',
      'twitterTitle': 'Springdays School Portfolio | Brochure Design | Visiting Card Design'
    },
    {
      'category': 'design',
      'url': 'tasqar',
      'img': 'assets/images/wp-content/uploads/2018/05/TasqarBranding-4new-230x180.png',
      'title': 'TASQAR',
      'image': [
        'assets/images/wp-content/uploads/2018/05/tasqar_Cover-11.png', 'assets/images/wp-content/uploads/2018/05/TasqarBranding1.png', 'assets/images/wp-content/uploads/2018/05/Final-03_new.png', 'assets/images/wp-content/uploads/2018/05/TasqarFinal-04.png', 'assets/images/wp-content/uploads/2018/05/Logo_gif.gif', 'assets/images/wp-content/uploads/2018/05/TasqarBranding-4new.png', 'assets/images/wp-content/uploads/2018/05/Tasqar-Cover-08new.png', 'assets/images/wp-content/uploads/2018/05/tasqarFinal-10.png', 'src="assets/images/wp-content/uploads/2018/05/Final-09-_logo_option.png"'
      ],
      'metaTitle': 'Tasqar Augmented Reality for Today&#039;s Enterprises | UI Designer Bangalore',
      'metaDescription': 'Tasqar Augmented Reality for Today&#039;s Enterprises. Tasqar UI UX Designed by Brandstory UI UX Designers Bangalore',
      'metaKeyword': 'Tasqar Augmented Reality for Today&#039;s Enterprises. Tasqar UI UX Designed by Brandstory UI UX Designers Bangalore',
      'ogTitle': 'Tasqar Augmented Reality for Today&#039;s Enterprises | UI Designer Bangalore',
      'ogDescription': 'Tasqar Augmented Reality for Today&#039;s Enterprises. Tasqar UI UX Designed by Brandstory UI UX Designers Bangalore',
      'ogUrl': 'https://brandstory.in/portfolio/tasqar/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Tasqar Augmented Reality for Today&#039;s Enterprises. Tasqar UI UX Designed by Brandstory UI UX Designers Bangalore',
      'twitterTitle': 'Tasqar Augmented Reality for Today&#039;s Enterprises | UI Designer Bangalore'
    },
    {
      'category': 'design',
      'url': 'jugaad',
      'img': 'assets/images/wp-content/uploads/2018/05/Jugaad-12-230x180.png',
      'title': 'Jugaad',
      'image': [
        'assets/images/wp-content/uploads/2018/05/Jugaad-02.png', 'assets/images/wp-content/uploads/2018/05/Jugaad-03.png', 'assets/images/wp-content/uploads/2018/05/Jugaad-04.png', 'assets/images/wp-content/uploads/2018/05/Jugaad-05.png', 'assets/images/wp-content/uploads/2018/05/Jugaad-06.png', 'assets/images/wp-content/uploads/2018/05/Jugaad-07.png', 'assets/images/wp-content/uploads/2018/05/Jugaad-08.png', 'assets/images/wp-content/uploads/2018/05/1st.gif', 'assets/images/wp-content/uploads/2018/05/Jugaad-11-new.png', 'assets/images/wp-content/uploads/2018/05/Jugaad-12.png', 'assets/images/wp-content/uploads/2018/05/Jugaad-10.png', 'assets/images/wp-content/uploads/2018/05/Jugaad-11.png', 'assets/images/wp-content/uploads/2018/05/2nd.gif'

      ],
      'metaTitle': 'Jugaad Portfolio | Brandstory UI UX Designer',
      'metaDescription': 'As a UI UX Designer in Bangalore, We designed the logo, UI UX Designs and Social Media marketing services for Jugaad.',
      'metaKeyword': 'Digital Marketing Agency in Bangalore, Digital Marketing Company in Bangalore, Digital Marketing Companies in Bangalore, Digital Marketing Agencies in Bangalore, seo company in bangalore, seo agency in bangalore, ui ux design company in bangalore',
      'ogTitle': 'Jugaad Portfolio | Brandstory UI UX Designer',
      'ogDescription': 'As a UI UX Designer in Bangalore, We designed the logo, UI UX Designs and Social Media marketing services for Jugaad.',
      'ogUrl': 'https://brandstory.in/portfolio/jugaad/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'As a UI UX Designer in Bangalore, We designed the logo, UI UX Designs and Social Media marketing services for Jugaad.',
      'twitterTitle': 'Jugaad Portfolio | Brandstory UI UX Designer'
    },


    {
      'category': 'socialmedia',
      'url': 'vymo',
      'img': 'assets/images/wp-content/uploads/2017/10/Artboard-88-1-230x180.png',
      'title': 'Vymo',
      'image': [
        'assets/images/wp-content/uploads/2017/10/Artboard-88-copy.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-1.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-2-1.png'
      ],
      'metaTitle': 'Vymo Portfolio | Social Media Marketing Company in Bangalore',
      'metaDescription': 'Brandstory, Social Media Marketing Company in Bangalore have created huge impact within few weeks. Higher meeting and higher conversion',
      'metaKeyword': '',
      'ogTitle': 'Vymo Portfolio | Social Media Marketing Company in Bangalore',
      'ogDescription': 'Brandstory, Social Media Marketing Company in Bangalore have created huge impact within few weeks. Higher meeting and higher conversion',
      'ogUrl': 'https://brandstory.in/portfolio/vymo/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory, Social Media Marketing Company in Bangalore have created huge impact within few weeks. Higher meeting and higher conversion',
      'twitterTitle': 'Vymo Portfolio | Social Media Marketing Company in Bangalore'
    },

    {
      'category': 'socialmedia',
      'url': 'angadi-galleria',
      'img': 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-2-230x180.png',
      'title': 'Angadi Galleria',
      'image': [
        'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-2.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-3.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-4.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-15.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-16.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-17.png', 'assets/images/wp-content/uploads/2017/10/Artboard-88-copy-18.png'
      ],
      'metaTitle': 'Angadi Galleria Portfolio | Social Media Marketing Services',
      'metaDescription': 'Brandstory provides a number of services to Angadi Galleria like UI UX design, Website Development, Digital Marketing and Social Media Marketing Services.',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Angadi Galleria Portfolio | Social Media Marketing Services',
      'ogDescription': 'Brandstory provides a number of services to Angadi Galleria like UI UX design, Website Development, Digital Marketing and Social Media Marketing Services.',
      'ogUrl': 'https://brandstory.in/portfolio/angadi-galleria/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory provides a number of services to Angadi Galleria like UI UX design, Website Development, Digital Marketing and Social Media Marketing Services.',
      'twitterTitle': 'Angadi Galleria Portfolio | Social Media Marketing Services'
    },

    {
      'category': 'socialmedia',
      'url': 'planet-education',
      'img': 'assets/images/wp-content/uploads/2018/04/Plannet-education-port-img1-230x180.png',
      'title': 'Planet Education',
      'image': [
        'assets/images/wp-content/uploads/2018/04/Plannet-education-port-img1.png', 'assets/images/wp-content/uploads/2018/04/Plannet-education-port-img2.png', 'assets/images/wp-content/uploads/2018/04/Plannet-education-port-img3.png', 'assets/images/wp-content/uploads/2018/04/Plannet-education-port-img4.png', 'assets/images/wp-content/uploads/2018/04/Plannet-education-port-img5.png'
      ],
      'metaTitle': 'Planet Education Portfolio | Digital Marketing Company in Bangalore',
      'metaDescription': 'Brandstory digital marketing company provides social media marketing services and digital marketing services for Planet Education.',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Planet Education Portfolio | Digital Marketing Company in Bangalore',
      'ogDescription': 'Brandstory digital marketing company provides social media marketing services and digital marketing services for Planet Education.',
      'ogUrl': 'https://brandstory.in/portfolio/planet-education/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory digital marketing company provides social media marketing services and digital marketing services for Planet Education.',
      'twitterTitle': 'Planet Education Portfolio | Digital Marketing Company in Bangalore'
    },

    {
      'category': 'socialmedia',
      'url': 'longitude',
      'img': 'assets/images/wp-content/uploads/2018/04/longtitude-port-img1-230x180.png',
      'title': 'Longitude',
      'image': [
        'assets/images/wp-content/uploads/2018/04/longtitude-port-img1.png', 'assets/images/wp-content/uploads/2018/04/longtitude-port-img2.png', 'assets/images/wp-content/uploads/2018/04/longtitude-port-img3.png'
      ],
      'metaTitle': 'Longitude Interiors Portfolio | Social Media Marketing Services Bangalore',
      'metaDescription': 'Brandstory provides social media marketing services in Bangalore for Longitude Interiors to increase their business revenue.',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Longitude Interiors Portfolio | Social Media Marketing Services Bangalore',
      'ogDescription': 'Brandstory provides social media marketing services in Bangalore for Longitude Interiors to increase their business revenue.',
      'ogUrl': 'https://brandstory.in/portfolio/longitude/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory provides social media marketing services in Bangalore for Longitude Interiors to increase their business revenue.',
      'twitterTitle': 'Longitude Interiors Portfolio | Social Media Marketing Services Bangalore'
    },

    {
      'category': 'socialmedia',
      'url': 'healthi',
      'img': 'assets/images/wp-content/uploads/2018/04/healthi-port-img1-230x180.png',
      'title': 'Healthi',
      'image': [
        'assets/images/wp-content/uploads/2018/04/healthi-port-img1.png', 'assets/images/wp-content/uploads/2018/04/healthi-port-img7.png', 'assets/images/wp-content/uploads/2018/04/healthi-port-img8.png', 'assets/images/wp-content/uploads/2018/04/healthi-port-img6.png', 'assets/images/wp-content/uploads/2018/04/healthi-port-img2.png', 'assets/images/wp-content/uploads/2018/04/3.png', 'assets/images/wp-content/uploads/2018/04/Artboard-88-copy-16.png', 'assets/images/wp-content/uploads/2018/04/healthi-port-img4.png', 'assets/images/wp-content/uploads/2018/04/healthi-port-img5.png'
      ],
      'metaTitle': 'Healthi Portfolio | Brandstory Social Media Marketing Company Bangalore',
      'metaDescription': 'Brandstory designed social media marketing post images for Healthi online brands awareness. Social Media Marketing Company Bangalore.',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Healthi Portfolio | Brandstory Social Media Marketing Company Bangalore',
      'ogDescription': 'Brandstory designed social media marketing post images for Healthi online brands awareness. Social Media Marketing Company Bangalore.',
      'ogUrl': 'https://brandstory.in/portfolio/healthi/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory designed social media marketing post images for Healthi online brands awareness. Social Media Marketing Company Bangalore.',
      'twitterTitle': 'Healthi Portfolio | Brandstory Social Media Marketing Company Bangalore'
    },

    {
      'category': 'socialmedia',
      'url': 'jain-heights',
      'img': 'assets/images/wp-content/uploads/2018/04/jainheights-port-img1-230x180.png',
      'title': 'Jain Heights',
      'image': [
        'assets/images/wp-content/uploads/2018/04/jainheights-port-img1.png', 'assets/images/wp-content/uploads/2018/04/jainheights-port-img2.png', 'assets/images/wp-content/uploads/2018/04/jainheights-port-img3.png'
      ],
      'metaTitle': 'Jain Heights - Portfolio | Brandstory Social Media Marketing Company',
      'metaDescription': 'Brandstory digital marketing company provides social media marketing services and digital marketing services for Jain heights.',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Jain Heights - Portfolio | Brandstory Social Media Marketing Company',
      'ogDescription': 'Brandstory digital marketing company provides social media marketing services and digital marketing services for Jain heights.',
      'ogUrl': 'https://brandstory.in/portfolio/jain-heights/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory digital marketing company provides social media marketing services and digital marketing services for Jain heights.',
      'twitterTitle': 'Jain Heights - Portfolio | Brandstory Social Media Marketing Company'
    },

    {
      'category': 'socialmedia',
      'url': 'cloutlearn-2',
      'img': 'assets/images/wp-content/uploads/2018/07/cloutlear_socialmedia_img1-230x180.png',
      'title': 'Cloutlearn',
      'image': [
        'assets/images/wp-content/uploads/2018/07/cloutlear_socialmedia_img2.png', 'assets/images/wp-content/uploads/2018/07/cloutlearn-banner3.jpg'
      ],
      'metaTitle': 'Cloutlearn Portfolio | Brandstory Website Development Company',
      'metaDescription': 'Brandstory solution have done website designs, UI UX designs, SEO services, social media marketing for Cloutlearn',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Cloutlearn Portfolio | Brandstory Website Development Company',
      'ogDescription': 'Brandstory solution have done website designs, UI UX designs, SEO services, social media marketing for Cloutlearn',
      'ogUrl': 'https://brandstory.in/portfolio/cloutlearn-2/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory solution have done website designs, UI UX designs, SEO services, social media marketing for Cloutlearn',
      'twitterTitle': 'Cloutlearn Portfolio | Brandstory Website Development Company'
    },

    {
      'category': 'socialmedia',
      'url': 'pathak-builders',
      'img': 'assets/images/wp-content/uploads/2018/07/pathak_developers_img1-230x180.png',
      'title': 'Pathak Builders',
      'image': [
        'assets/images/wp-content/uploads/2018/07/pathak_developers_img1.png', 'assets/images/wp-content/uploads/2018/07/pathak_developers_img2.png', 'assets/images/wp-content/uploads/2018/07/pathak_developers_img3.png', 'assets/images/wp-content/uploads/2018/07/pathak_developers_img4.gif'
      ],
      'metaTitle': 'Pathak Builders Portfolio',
      'metaDescription': 'Brandstory provides search engine marketing services for Pathak builders to increase their business revenue',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Pathak Builders Portfolio',
      'ogDescription': 'Brandstory provides search engine marketing services for Pathak builders to increase their business revenue',
      'ogUrl': 'https://brandstory.in/portfolio/pathak-builders/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory provides search engine marketing services for Pathak builders to increase their business revenue',
      'twitterTitle': 'Pathak Builders Portfolio'
    },

    {
      'category': 'socialmedia',
      'url': 'jd-institute-of-fashion-technology',
      'img': 'assets/images/wp-content/uploads/2018/07/JD_Inst_Img1-230x180.jpg',
      'title': 'JD Institute',
      'image': [
        'assets/images/wp-content/uploads/2018/07/Facebook%20Video%20JD.mp4', 'assets/images/wp-content/uploads/2018/07/JD_Inst_Img1.jpg', 'assets/images/wp-content/uploads/2018/07/JD_Inst_Img2.jpg', 'assets/images/wp-content/uploads/2018/07/JD_Inst_Img3.jpg', 'assets/images/wp-content/uploads/2018/07/JD_Inst_Img4.png', 'assets/images/wp-content/uploads/2018/07/JD_Inst_Img5.png', 'assets/images/wp-content/uploads/2018/07/JD_Inst_Img6.jpg'
      ],
      'metaTitle': 'JD Institute of Fashion Technology Portfolio',
      'metaDescription': 'Brandstory provides social media marketing services and search engine marketing services for JD Institute of Fashion Technology.',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'JD Institute of Fashion Technology Portfolio',
      'ogDescription': 'Brandstory provides social media marketing services and search engine marketing services for JD Institute of Fashion Technology.',
      'ogUrl': 'https://brandstory.in/portfolio/jd-institute-of-fashion-technology/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory provides social media marketing services and search engine marketing services for JD Institute of Fashion Technology.',
      'twitterTitle': 'JD Institute of Fashion Technology Portfolio'
    },

    {
      'category': 'uiux',
      'url': 'ayyan-fireworks',
      'img': 'assets/images/wp-content/uploads/2018/04/ios-img1-230x180.png',
      'title': 'Ayyan Fireworks',
      'image': [
        'assets/images/wp-content/uploads/2018/04/ios-img1.png', 'assets/images/wp-content/uploads/2018/04/ios-img2.png', 'assets/images/wp-content/uploads/2018/04/ios-img3.png'
      ],
      'metaTitle': 'Ayyan Fireworks - Portfolio | UI UX Design Company in Bangalore',
      'metaDescription': 'Brandstory UI UX Design Company in Bangalore have done UI UX design for Ayyan Fireworks. SEO friendly layout, Seamless functionality across all browsers.',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Ayyan Fireworks - Portfolio | UI UX Design Company in Bangalore',
      'ogDescription': 'Brandstory UI UX Design Company in Bangalore have done UI UX design for Ayyan Fireworks. SEO friendly layout, Seamless functionality across all browsers.',
      'ogUrl': 'https://brandstory.in/portfolio/ayyan-fireworks/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory UI UX Design Company in Bangalore have done UI UX design for Ayyan Fireworks. SEO friendly layout, Seamless functionality across all browsers.',
      'twitterTitle': 'Ayyan Fireworks - Portfolio | UI UX Design Company in Bangalore'
    },
    {
      'category': 'uiux',
      'url': 'new-horizon-college-of-engineering',
      'img': 'assets/images/wp-content/uploads/2018/04/android-img1-230x180.png',
      'title': 'NHCE',
      'image': [
        'assets/images/wp-content/uploads/2018/04/android-img1.png', 'assets/images/wp-content/uploads/2018/04/android-img2.png', 'assets/images/wp-content/uploads/2018/04/android-img3.png'

      ],
      'metaTitle': 'New Horizon College of Engineering Portfolio | Digital Marketing Company',
      'metaDescription': 'Brandstory provides a number of services to NHCE like UI UX design, Website Development, Digital Marketing Services and Social Media Marketing Services.',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'New Horizon College of Engineering Portfolio | Digital Marketing Company',
      'ogDescription': 'Brandstory provides a number of services to NHCE like UI UX design, Website Development, Digital Marketing Services and Social Media Marketing Services.',
      'ogUrl': 'https://brandstory.in/portfolio/new-horizon-college-of-engineering/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory provides a number of services to NHCE like UI UX design, Website Development, Digital Marketing Services and Social Media Marketing Services.',
      'twitterTitle': 'New Horizon College of Engineering Portfolio | Digital Marketing Company'
    },
    {
      'category': 'uiux',
      'url': 'my-dukaan',
      'img': 'assets/images/wp-content/uploads/2018/04/hybrid-img1-230x180.png',
      'title': 'My Dukaan',
      'image': [
        'assets/images/wp-content/uploads/2018/04/hybrid-img1.png', 'assets/images/wp-content/uploads/2018/04/hybrid-img2.png', 'assets/images/wp-content/uploads/2018/04/hybrid-img3.png'

      ],
      'metaTitle': 'My Dukaan Portfolio | UI UX Design Company in Bangalore',
      'metaDescription': 'Brandstory has developed 100% mobile responsive UI UX Designs for My Dukaan Application. SEO friendly layout, Seamless functionality across all browsers.',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'My Dukaan Portfolio | UI UX Design Company in Bangalore',
      'ogDescription': 'Brandstory has developed 100% mobile responsive UI UX Designs for My Dukaan Application. SEO friendly layout, Seamless functionality across all browsers.',
      'ogUrl': 'https://brandstory.in/portfolio/my-dukaan/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory has developed 100% mobile responsive UI UX Designs for My Dukaan Application. SEO friendly layout, Seamless functionality across all browsers.',
      'twitterTitle': 'My Dukaan Portfolio | UI UX Design Company in Bangalore'
    },


    {
      'category': 'Web',
      'url': 'hola-connect',
      'img': 'assets/images/wp-content/uploads/2017/10/Artboard-5-copy-3-1-230x180.png',
      'title': 'Hola Connect',
      'image': [
        'assets/images/wp-content/uploads/2017/10/Artboard-5-copy-3-1.png'
      ],
      'metaTitle': 'Hola Connect Portfolio | Brandstory Website Development Company Bangalore',
      'metaDescription': 'Brandstory has developed 100% mobile responsive website for Hola Connect. SEO friendly layout, Seamless functionality across all browsers.',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Hola Connect Portfolio | Brandstory Website Development Company Bangalore',
      'ogDescription': 'Brandstory has developed 100% mobile responsive website for Hola Connect. SEO friendly layout, Seamless functionality across all browsers.',
      'ogUrl': 'https://brandstory.in/portfolio/hola-connect/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory has developed 100% mobile responsive website for Hola Connect. SEO friendly layout, Seamless functionality across all browsers.',
      'twitterTitle': 'Hola Connect Portfolio | Brandstory Website Development Company Bangalore'
    },


    {
      'category': 'Web',
      'url': 'cloutlearn',
      'img': 'assets/images/wp-content/uploads/2017/10/Cloutport-img1-230x180.png',
      'title': 'Cloutlearn',
      'image': [
        'assets/images/wp-content/uploads/2017/10/Cloutport-img1.png', 'assets/images/wp-content/uploads/2017/10/Cloutport-img2.png', 'assets/images/wp-content/uploads/2017/10/Cloutport-img3.png', 'assets/images/wp-content/uploads/2017/10/Cloutport-img4.png'
      ],
      'metaTitle': 'Clout Learn Digital Marketing Training Institute Portfolio | Brandstory',
      'metaDescription': 'Brandstory has developed 100% mobile responsive website for Clout Learn. SEO friendly layout, Seamless functionality across all browsers',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Clout Learn Digital Marketing Training Institute Portfolio | Brandstory',
      'ogDescription': 'Brandstory has developed 100% mobile responsive website for Clout Learn. SEO friendly layout, Seamless functionality across all browsers',
      'ogUrl': 'https://brandstory.in/portfolio/cloutlearn/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory has developed 100% mobile responsive website for Clout Learn. SEO friendly layout, Seamless functionality across all browsers',
      'twitterTitle': 'Clout Learn Digital Marketing Training Institute Portfolio | Brandstory'
    },


    {
      'category': 'Web',
      'url': 'atom-interiors',
      'img': 'assets/images/wp-content/uploads/2017/10/Artboard-5-copy-230x180.png',
      'title': 'Atom Interiors',
      'image': [
        'assets/images/wp-content/uploads/2017/10/Artboard-5.png', 'assets/images/wp-content/uploads/2017/10/Artboard-5-copy.png'
      ],
      'metaTitle': 'Atom Interiors Portfolio | Brandstory Online Marketing Company Bangalore',
      'metaDescription': 'Brandstory has developed 100% mobile responsive website for Atom Interiors. SEO friendly layout, seamless functionality across all browsers.',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Atom Interiors Portfolio | Brandstory Online Marketing Company Bangalore',
      'ogDescription': 'Brandstory has developed 100% mobile responsive website for Atom Interiors. SEO friendly layout, seamless functionality across all browsers.',
      'ogUrl': 'https://brandstory.in/portfolio/atom-interiors/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory has developed 100% mobile responsive website for Atom Interiors. SEO friendly layout, seamless functionality across all browsers.',
      'twitterTitle': 'Atom Interiors Portfolio | Brandstory Online Marketing Company Bangalore'
    },
    {
      'category': 'Web',
      'url': 'springdays-school',
      'img': 'assets/images/wp-content/uploads/2017/10/Springdays-8-230x180.png',
      'title': 'Springdays',
      'image': [
        'assets/images/wp-content/uploads/2017/10/Artboard-5-copy-2.png', 'assets/images/wp-content/uploads/2017/10/Artboard-5-copy-3.png'

      ],
      'metaTitle': 'Springdays School Portfolio | Digital Marketing Agency Bangalore',
      'metaDescription': 'Brandstory has developed 100% mobile responsive website for spring days school. SEO friendly layout, seamless functionality across all browsers.',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Springdays School Portfolio | Digital Marketing Agency Bangalore',
      'ogDescription': 'Brandstory has developed 100% mobile responsive website for spring days school. SEO friendly layout, seamless functionality across all browsers.',
      'ogUrl': 'https://brandstory.in/portfolio/springdays-school/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterCard': 'summary',
      'twitterDescription': 'Brandstory has developed 100% mobile responsive website for spring days school. SEO friendly layout, seamless functionality across all browsers.',
      'twitterTitle': 'Springdays School Portfolio | Digital Marketing Agency Bangalore'
    }
  ];
  updateProductCategory(stringCategory: string) {
    this.ProductCategory = stringCategory;
  }

  showAllCategory() {

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

    const formName = this.enquiryModal.value.fName;
    const formEmail = this.enquiryModal.value.fEmail;
    const formPhone = this.enquiryModal.value.fPhone;
    const organisation = this.enquiryModal.value.organisation;
    const formService = this.enquiryModal.value.fService;
    const formMessage = this.enquiryModal.value.fMessage;


    // this.httpClient.post('https://brandstory.in/assets/thank-you-enquiry-modal.php',
    this.httpClient.post('https://brandstory.in/assets/thank-you-enquiry-home.php',
      {
        name: formName,
        email: formEmail,
        phone: formPhone,
        company: organisation,
        service: formService,
        message: formMessage,
        page: "brandstory.in/blogs"

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
        page: "brandstory.in/blogs"

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
