import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dmb',
  templateUrl: './dmb.component.html',
  styleUrls: ['./dmb.component.css']
})
export class DmbComponent implements OnInit {
  registerForm: any = FormGroup;
  bannerModalForm: any = FormGroup;
  ProductCategory: any = '';
  AbmCategory: any = '';
  Leadgen: any = '';
  Conclusion: any = '';

  submitted = false;
  arr: any[] = [];
  isFirstOpen = false;

  constructor(meta: Meta, title: Title, private modalService: BsModalService, private httpClient: HttpClient, private router: Router, private formBuilder: FormBuilder) {
    title.setTitle('What is Digital Marketing | Importance of Digital Marketing Agency');

    meta.addTags([
      {
        name: 'description',
        content: 'What is digital marketing? Importance of Digital Marketing Agency? Types of Digital Marketing Services? How to Grow your Business Through Digital Marketing?'
      },
      {
        name: 'keywords',
        content: 'Email Marketing Services In Bangalore, Email Marketing Company in Bangalore, email marketing service providers,Email Marketing Services In Bangalore'
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: 'What is Digital Marketing | Importance of Digital Marketing Agency'
      },
      {
        name: 'og:description',
        content: 'What is digital marketing? Importance of Digital Marketing Agency? Types of Digital Marketing Services? How to Grow your Business Through Digital Marketing?	'
      },
      {
        name: 'og:url',
        content: 'https://brandstory.in/digital-marketing/'
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
        content: 'What is digital marketing? Importance of Digital Marketing Agency? Types of Digital Marketing Services? How to Grow your Business Through Digital Marketing?	'
      },
      {
        name: 'twitter:title',
        content: 'What is Digital Marketing | Importance of Digital Marketing Agency'
      }
    ]);
  }

  ngOnInit() {
    this.ProductCategory = 'retargeting-ads';
    this.AbmCategory = 'starting';
    this.Leadgen = "firstcontent";
    this.Conclusion = "teamwork";

    this.registerForm = this.formBuilder.group({
      fService: ['', [Validators.required]],
      fnature: ['', [Validators.required]],
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      organisation: ['', [Validators.required]]
    });

    this.bannerModalForm = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      fService: ['', [Validators.required]],
      fMessage: ['', [Validators.required]]
    });
  }

  mySlideOptions = {
    items: 3, dots: false, nav: true, loop: true, responsiveClass: true,
    navText: ['<img src="assets/images/dmb/prev.png" alt="prev" width="40px">', '<img src="assets/images/dmb/next.png" alt="next" width="40px">'],
    responsive: {
      // breakpoint from 0 up
      0: { items: 1, dotsEach: 1, nav: true },
      // breakpoint from 480 up
      480: { items: 1, dotsEach: 1 },
      // breakpoint from 768 up
      768: { items: 3 }
    }
  };
  myfsdma: OwlOptions = {
    items: 3, dots: false, nav: true, loop: true,
    // responsiveClass: true,
    navText: ['<img src="assets/images/dmb/prev.png" alt="prev" width="40px">', '<img src="assets/images/dmb/next.png" alt="next" width="40px">'],
    responsive: {
      // breakpoint from 0 up
      0: { items: 1, dotsEach: 1, nav: true },
      // breakpoint from 480 up
      480: { items: 1, dotsEach: 1 },
      // breakpoint from 768 up
      768: { items: 3 }
    }
  };

  my3rdslider: OwlOptions = {
    items: 1, dots: false, nav: true, loop: true,
    //  responsiveClass: true,
    navText: ['<img src="assets/images/dmb/prev2.png" alt="prev" width="40px">', '<img src="assets/images/dmb/next2.png" alt="next" width="40px">'],
    responsive: {
      // breakpoint from 0 up
      0: { items: 1, dotsEach: 1, nav: true },
      // breakpoint from 480 up
      480: { items: 1, dotsEach: 1 },
      // breakpoint from 768 up
      768: { items: 1 }
    }
  };
  my4thslider = {
    items: 2, dots: false, nav: true, loop: true, responsiveClass: true,
    navText: ['<img src="assets/images/dmb/prev3.png" alt="prev" width="40px">', '<img src="assets/images/dmb/next3.png" alt="next" width="40px">'],
    responsive: {
      // breakpoint from 0 up
      0: { items: 1, dotsEach: 1, nav: true },
      // breakpoint from 480 up
      480: { items: 1, dotsEach: 1 },
      // breakpoint from 768 up
      770: { items: 2 }
    }
  };
  mywebdesign = {
    items: 1, dots: true, nav: false, loop: true, responsiveClass: true,
    responsive: {
      // breakpoint from 0 up
      0: { items: 1, dotsEach: 1, nav: true },
      // breakpoint from 480 up
      480: { items: 1, dotsEach: 1 },
      // breakpoint from 768 up
      768: { items: 1 }
    }
  };
  myicadm:OwlOptions = {
    items: 1, dots: true, nav: false, loop: true,
    //  responsiveClass: true,
    responsive: {
      // breakpoint from 0 up
      0: { items: 1, dotsEach: 1, nav: true },
      // breakpoint from 480 up
      480: { items: 1, dotsEach: 1 },
      // breakpoint from 768 up
      768: { items: 1 }
    }
  };


  mysecond: OwlOptions = {
    items: 1, dots: false, nav: true, loop: true,
    // responsiveClass: true,
    navText: ['<img src="assets/images/dmb/prev.png" alt="prev" width="40px">',
      '<img src="assets/images/dmb/next.png" alt="next" width="40px">'],
    responsive: {
      // breakpoint from 0 up
      0: { items: 1, dotsEach: 1, nav: true },
      // breakpoint from 480 up
      480: { items: 1, dotsEach: 1 },
      // breakpoint from 768 up
      768: { items: 1 }
    }
  };

  mysecond1: OwlOptions = {
    items: 3, dots: false, nav: true, loop: true,
    // responsiveClass: true,
    navText: ['<img src="assets/images/dmb/prev.png" alt="prev" width="40px">',
      '<img src="assets/images/dmb/next.png" alt="next" width="40px">'],
    responsive: {
      // breakpoint from 0 up
      0: { items: 3, dotsEach: 1, nav: true },
      // breakpoint from 480 up
      480: { items: 1, dotsEach: 1 },
      // breakpoint from 768 up
      768: { items: 3 }
    }
  };





  myagmarket = {
    items: 1, dots: true, nav: false, loop: true, responsiveClass: true,
    responsive: {
      // breakpoint from 0 up
      0: { items: 1, dotsEach: 1, nav: true },
      // breakpoint from 480 up
      480: { items: 1, dotsEach: 1 },
      // breakpoint from 768 up
      768: { items: 1 }
    }
  };

  brandpositionimages_old = [
    {
      'url': "assets/images/dmb/mysecond-image1.png",
      'alt': "Let Clients be aware of your presence",
      'heading': "Let Clients be aware of your presence",
      'Text': " As to make yourself available to the people you are trying to prospect in order to provide services and your product, think of advertising. The range of your business can spread outside your boundaries. By embracing prospects that are native, you're prepared to entice audience than you may. Your business is open for business even if it is closed, by creating an atmosphere where your clients can come at any time of the day or night.",
      'Text1': "Digital Marketing lets you socialize together with your prospects. You can get to know them and what they're hoping to locate on networking, or you will start a voice communicating. Run a questionnaire or attempt to get to grasp them. Pay attention to their answers or opinions.",
      'Text2': "You may begin to understand what they're searching for by interacting with individuals digitally. Where's the business pain point? What's keeping them up at night? What alternatives can you provide to them? Rather than trying to guess marketing enables you to utilize strategies and resources for finding your customers that are desirable out.",
    },
    {
      'url': "assets/images/dmb/mysecond-image2.png",
      'alt': "Your competitors will be online",
      'heading': "Your competitors will be online",
      'Text': "For the business to attain success, you have to pay attention to your competitors as well. If your prospects start to look for a business like yours and can discover your competitors’ site but not your business, you are not in the race. If they do not understand about you, your prospects can not pick you. Your opponents have won no matter if they have a productive site or a message that was crystal clear.",
      'Text1': "",
      'Text2': "",
    },
    {
      'url': "assets/images/dmb/mysecond-image3.png",
      'alt': "Be available to your clients",
      'heading': "Be available to your clients",
      'Text': "In the modern digital world, the consumer look for what they need online. Whatever service or product they are looking for, they will begin their search. You will not be discovered if you don’t have an internet presence in any way, you can not compete. Simple queries your prospects may want answers to ought such as you are put to be determinable online, what your working hours are and where your main focus is. By detecting your internet site along with your competitors’ websites facet, your prospects need to be in a position to compare special offers, costs, hours and much more.",
      'Text1': "",
      'Text2': "",
    },
    {
      'url': "assets/images/dmb/mysecond-image4.png",
      'alt': "Your customers will be online",
      'heading': "Your customers will be online",
      'Text': "When someone has a liking or an interest to your business, services or products, be it your specialty or if they are generally interested in your brand, the very first thing they will do is study online and find out what they can figure out about you. If a customer can not find you on the internet, they might conclude that your business does not seem to be valid. A likelihood is that lots of these potential clients could choose not to take your business seriously and choose to go to different resources and they won’t return to your own site or other assets you’ve built online.",
      'Text1': "",
      'Text2': "",
    },
  ]

  slider_2 = [
    {
      'color': "firstbox",
      'img_url': "assets/images/dmb/digitalinfra-structure.png",
      'alt': "Digital Infrastructure analysis",
      'heading': "Digital Infrastructure analysis",
      'text': "The infrastructure of a website provides information to search engines about what we are looking for when crawling a site."
    },
    {
      'color': "secondtbox",
      'img_url': "assets/images/dmb/link-profile-audit.png",
      'alt': "Link profile audit",
      'heading': "Link profile audit",
      'text': "SEO audits help you understand the source of your backlinks and the type of sites that are closely related to your content."
    },
    {
      'color': "thirdbox",
      'img_url': "assets/images/dmb/link-profile-audit.png",
      'alt': "UX evaluation",
      'heading': "UX evaluation",
      'text': "A key factor that is overlooked surprisingly is that of the UX Design. To prioritize rankings, search engines have recently been giving importance to site user experience."
    },
    {
      'color': "fourthbox",
      'img_url': "assets/images/dmb/infographics.png",
      'alt': "UX evaluation",
      'heading': "Infographics",
      'text': "Infographics are the key to skyrocket the number of shares you get on your content if done correctly. On average, infographics get the highest number of shares."
    },
    {
      'color': "fifthbox",
      'img_url': "assets/images/dmb/pageviews.png",
      'alt': "Pageviews",
      'heading': "Pageviews",
      'text': "The top of the funnel metrics like page views can make a noticeable difference to your bottom line if the rest of the funnel is in place."
    },
    {
      'color': "sixthbox",
      'img_url': "assets/images/dmb/searches.png",
      'alt': "Searches",
      'heading': "Searches",
      'text': "The number of visitors on your website or your infographic may be kept track of using Google Analytics."
    },
    {
      'color': "sevenbox",
      'img_url': "assets/images/dmb/average-time-on-page.png",
      'alt': "Average time on page",
      'heading': "Average time on page",
      'text': "Again, using Google Analytics, we may get appropriate statistics on the average time a user spends on a particular page. If there is any boost in the engagement, then it may be measured using Google Analytics."
    },

  ]

  slider_3 = [
    {
      'img_url': "assets/images/dmb/ux-and-design.png",
      'alt': "UX and design strategy",
      'heading': "UX and design strategy",
    },
    {
      'img_url': "assets/images/dmb/content-strategy.png",
      'alt': "Content strategy",
      'heading': "Content strategy",
    },
    {
      'img_url': "assets/images/dmb/psa.png",
      'alt': "Paid search ads",
      'heading': "Paid search ads",
    },
    {
      'img_url': "assets/images/dmb/ppc-ads.png",
      'alt': "PPC Advertising",
      'heading': "PPC Advertising",
    },
    {
      'img_url': "assets/images/dmb/web-design.png",
      'alt': "Web design",
      'heading': "Web design",
    },
    {
      'img_url': "assets/images/dmb/re-targeting.png",
      'alt': "Re-targeting",
      'heading': "Re-targeting",
    },
    {
      'img_url': "assets/images/dmb/marketing-analysis.png",
      'alt': "Marketing Analytics",
      'heading': "Marketing Analytics",
    },
    {
      'img_url': "assets/images/dmb/web-technology.png",
      'alt': "Web technology",
      'heading': "Web technology",
    },
    {
      'img_url': "assets/images/dmb/sem-strategy.png",
      'alt': "SEM strategy",
      'heading': "SEM strategy",
    },
    {
      'img_url': "assets/images/dmb/social-media-strategy.png",
      'alt': "Social media strategy",
      'heading': "Social media strategy",
    },
    {
      'img_url': "assets/images/dmb/seo-strategy.png",
      'alt': "SEO strategy",
      'heading': "SEO strategy",
    },
  ]

  slider_4 = [
    {
      'img_url': "assets/images/dmb/3rdslider1.png",
      'alt': "Real_Time Results",
      'heading': "Real_Time Results",
      'text': "There are various factors that determine the success or failure of a product or service. This can be judged easily with the help of digital marketing in real-time, which proves to be an enormous advantage to us. Some of these factors which you can know through online marketing are",
      'text2': "",
      'list_array': ['The site traffic', 'the increase in subscribers', 'peak trading times', 'conversion rates', 'rise and fall of website traffic', 'bounce rate']
    },
    {
      'img_url': "assets/images/dmb/3rdslider2.png",
      'alt': "Outreach can be improved",
      'heading': "Outreach can be improved",
      'text': "The sky’s the limit in digital marketing as the service is online, it can be accessed globally. When traditional marketing constricts you to one geographic area, digital marketing can help you interact with customers from any geographic location quite easily. To sum it up, it is like having your store open for 24 hours. With the help of digital marketing specialists and analysts, it is possible to reach a global platform and optimally reach your targets in the digital spectrum.",
      'text2': "",
      'list_array': ['', '', '', '', '', '']
    },
    {
      'img_url': "assets/images/dmb/3rdslider3.png",
      'alt': "Gain Knowledge of your Competitors",
      'heading': "Gain Knowledge of your Competitors",
      'text': "Analyzing and strategizing plays a vital role in digital marketing. Observe the strategies and techniques implemented by your competitors, and thus you can gain the upper hand and reach more customers. This helps to cash in on possible opportunities at the right time.",
      'text2': "Digital marketing’s importance also lies in the fact that it lets you compete directly with big brands and large corporations. Irrespective of the size of your company or cooperation, with the help of digital marketing, it is possible to make your product or service available on a global platform.",
      'list_array': ['', '', '', '', '', '']
    },
    {
      'img_url': "assets/images/dmb/3rdslider4.png",
      'alt': "Ensure Online Business Survival",
      'heading': "Ensure Online Business Survival",
      'text': "A target audience is the most efficient way to market a product. Thus, by implementing smart tactics such as creating videos, blogs and overall content on social media which is made with the appropriate target audience in mind, we can ensure that the online business will not only survive but thrive.",
      'text2': "",
      'list_array': ['', '', '', '', '', '']
    },
    {
      'img_url': "assets/images/dmb/3rdslider5.png",
      'alt': "Greater ROI on Campaigns",
      'heading': "Greater ROI on Campaigns",
      'text': "The objective of any business is to generate a high ROI. Using digital marketing, this is easily possible. Many results are analyzed and monitored using some of the techniques of digital marketing. It helps the organizations to take necessary measures as soon as possible.",
      'text2': "",
      'list_array': ['', '', '', '', '', '']
    },
  ]

  slider_5 = [
    {
      'color': "firstbox",
      'heading': "B2B Marketing Web Design",
      'text': "Your B2B Marketing Website is a living, breathing part of your digital marketing presence where your target audience is going to fall in (or out of) love with you - so it is important that you get it right to generate the right leads through your digital marketing strategy. Failing to get your B2B Marketing Website right will see you lose business to your competitors. Nobody wants that."
    },
    {
      'color': "secondbox",
      'heading': "B2B Social Media Marketing",
      'text': "Many corporations and companies have adopted B2B marketing services for a period of time now. However, many companies are not getting it right or are spending too much time on menial tasks that are part of a fad and aren’t likely to get much, if any, traction. Thus hiring a B2B agency is a step in the right direction."
    },
    {
      'color': "thirdbox",
      'heading': "B2B Influencer Marketing",
      'text': "Influencer Marketing has become so famous recently, but it isn’t for everyone. Nor is it as complicated as some Marketing Agencies and Marketing Consultants like to make out. Hence it is ideal for working with a B2B marketing agency to identify whether B2B Influencer Marketing is for you, which Influencers you should be looking to collaborate with, how to approach them, and how to know whether your Influencer Marketing is effective."
    },
    {
      'color': "fourthbox",
      'heading': "B2B Content Marketing",
      'text': "B2B Content Marketing comes in many different guises and a range of formats, building compelling B2B Marketing Content that attracts the right target audience into our clients’ sales and marketing pipeline and accelerates them through the pipeline."
    },
    {
      'color': "cfivethbox",
      'heading': "B2B Case Studies",
      'text': "The first thing most businesses need to do is prove themselves through examples of previous work, previous clients, and previous successes. In some instances, a simple portfolio will suffice, but for many businesses to business decision-makers, more significant effort is required. That’s where B2B Case Studies come into the equation."
    },
    {
      'color': "wsixthbox",
      'heading': "B2B White Papers",
      'text': "Content is king, right? We’ve all heard it before. It’s nothing new. But few businesses are acting on it. Producing informative, insightful and thought-provoking White Papers is an effective way of not only building brand awareness but positioning and keeping your business front-of-mind with prospects, customers, clients, and partners alike."
    },
    {
      'color': "cseventhbox",
      'heading': "B2B Community Management",
      'text': "B2B Marketing has evolved over the last few years, and it is only going to accelerate. One-way messages are becoming less acceptable to customers and increasingly less effective. Customers and clients now want to feel like they belong. They want to feel like they are part of your journey. This is just the beginning."
    },
  ]

  slider_6 = [
    {
      'img': "assets/images/dmb/icadm1.png",
      'alt': "Advertisement Network",
      'heading': "Advertisement Network",
      'text': "A monthly fee is frequently included by the commission/CPM model overriding in AdTech. By way of instance, commission charges in your spend per month. If you invest $25,000, the cost is $2,500. This is the procedure of evaluation and collection of information in addition to the generation of  accounts. Web analytics are utilized for market and company research and also to evaluate and enhance  a website's effectiveness. Web analytics may consist of platforms such as the ones that provide       attributes, and Piwik PRO, for example, maps. Likewise, a huge majority of AdTech options are       predicated on third party info (e.g. third-party cookies), whereas MarTech options can tap to some   combo of first-party biscuits and assorted private data (or even identifiable data ) like mails and   titles which are generally supplied by the users when they download a free ebook or whitepaper. This   can be to nurture the present customer base, a technique.",
      'text1': "Platforms function in an environment. With all the steps in the consumer travel, MarTech deals this manner by converting them to customers and finally attaining audiences. It places the consumers, who entered the marketing funnel by downloading an ebook or subscribing to a newsletter. Advertising technology is intended to help advertising agencies and advertisers produce, run, quantify, and manage online marketing campaigns across several programs or sites. It helps publishers (sites and programs ) to market their available ad space, also called stock, to a significant number of advertisers. This may be achieved via screen advertisements or search engine marketing (SEM). Specialized AdTech platforms cope with affirmation, attribution and viewability.",
      'text2': "",
    },
    {
      'img': "assets/images/dmb/icadm2.png",
      'alt': "Personalization",
      'heading': "Personalization",
      'text': "Never has there been a solid focus on our lifestyles, consumer behavior, and preferences. Algorithms work anonymously, drawing on advice about how we want to devote our own time. There are reasons that the library of Netflix ensures artwork mixes to its own user preferences, and Coca Cola established its much-lauded “Name Branded” drinks range. Personalization can be really actually a strong tool at the age of “Ad Fatigue.” Adjusting to a position to pack a punch using adverts that induce significance to the consumers they’re targeting has revolutionized how entrepreneurs participate together with their own consumers.",
      'text1': "Personalization could be seeking to remain heard at the electronic age, as well as the brakes are in motion. After we asked consumers if they’d seen a billboard advertising on television, 59 percent said they had. But more seriously, of those people having said that they’d, just 20 percent could recall what the product or brand was associated with. It appears advertising demands sticking capability to allow new voices to be heard ",
      'text2': "Inherently, advertisements usually entail pitching to unidentified prospects based on specific targeting parameters (location, browser history, behaviour, etc.) while marketing is much more about nurturing a particular group of individuals who have specifically expressed interest in your services or products.",
    },
    {
      'img': "assets/images/dmb/icadm3.png",
      'alt':"The Platform",
      'heading': "The Platform",
      'text': "The number of advertising programs that are available makes your head spin, as well as your own financial plan, seem miniature. You do not have to utilize every media option readily available to  generate a profitable advertising effort. You might actually be given better results by narrowing your choices down. Understanding advertisement options and to pick the best ones help increase earnings.  App books, magazines, direct mail, catalogs, and newspapers let prospects spend so much because they   desire with your own ad, if it is seen by them, they go back to it. It's crucial that you employ  someone knowledgeable about design and advertisements layout to make your advertising as you're    competing with text and content as well as along different advertisements. Predicated on the number of  hours people invest in the web every day, advertisements are currently finding its way on smartphones  and people's monitors.",
      'text1': "Is there confusion in the first place? Options derive from the concept of automating the process of targeting and purchasing of advertisements. The billing version for this would be to charge a fee at the top or a commission. Marketing automation is the umbrella term involving a range of different MarTech programs (such as those listed above).",
      'text2': "",
    },
    {
      'img': "assets/images/dmb/icadm4.png",
      'alt': "Martech + AdTech",
      'heading': "Martech + AdTech",
      'text': "Advertising technology has revolutionized the way brands connect with their audiences and the way advertisers and publishers interact with each other. MarTech, on the other hand, is much more about trimming your trees. While advertising agencies have been a vital component to marketing campaigns, the rising popularity of AdTech has jeopardized their function. AdTech sellers attempt to market to    manufacturers mixing elements of MarTech to secure their gain. A DSP is a technology platform which    allows advertising campaigns to conduct and purchase stock from SSPs and advertisement exchanges via a  single user interface. DSPs are an integral part of the bidding procedure, which enables advertisers   to get press. To help enhance targeting and improve media purchases, DSPs frequently utilize data from  data-management programs (DMPs) and information brokers.",
      'text1': "Let us look at the five places that highlight the differences between MarTech and AdTech. An advertisement server is an online technology platform accountable for making decisions regarding which ads to display on a web site, serving them, and collecting and reporting the information (for instance, impressions, clicks, etc.). Ad servers would be to advertisements. The platform assists publishers to market their stock on lots of different advertisement exchanges within an automatic manner. Though publishers do not have to use an SSP so as to market their stock on the advertising exchange, the technologies utilized with SSPs supplies them with many advantages that permit them to obtain the maximum yield in their stock and gain better insights in their audience.",
      'text2': "",
    },
  ]

  myPortfolioItems = [
    {
      'category': 'retargeting-ads',
      'title': 'Retargeting Ads',
      'content': 'Retargeting Ads Generation of a great amount of traffic is vital for a company’s online success. This is no longer something that can be added on but is now considered to be a vital aspect of creating a brand name and value. The leads that could be possibly generated by a certain marketing campaign on the digital spectrum, which is an essentiality in all forms of the spectrum. The process of creating retargeted ads is useful. This is because an advert searched may reappear on different social media platforms as an indication of perseverance from the company’s point of view.'

    },
    {
      'category': 'Return-investment',
      'title': 'Yield a High Return on Investment (ROI)',
      'content': 'In this field, it is possible to have a greater return on investment with low risk. This is one in which when an organic SEO is done. The waiting period may be somewhere between 6 months to a year which is considered a long period of time. This is considered to be a long term investment. The paid SEO is one in which gets us immediate results but can get quite expensive. This is done for a short period of time as it is not economical, nor is it suitable to have this as long term strategy. Thus the organic way to go has a great return on investments as such.'

    },
    {
      'category': 'Track-success',
      'title': 'Track Success & Adjust Campaigns',
      'content': 'Analytics plays a vital role in the digital marketing domain as it is important for us to understand if the efforts that are being made are matched with the given results. Tracking success is very crucial as it allows us to judge and assess the direction in which the campaign must further progress, this is one in which if the path being taken is not in the right direction then it is necessary to optimize and change the path of the flow of events that are taking place.'

    },
    {
      'category': 'Social-Selling',
      'title': 'Social Selling Can Connect & Convert',
      'content': 'By using various social media platforms, we are able to gain visibility to a particular company or brand which can be further used to generate traffic to a particular website and thus cause a lot of users to gain foot traffic on the website or the point of sales. This is done with the help of placing the point of contact on the given website, which is used to generate leads. This is further done by creating these assets on other social media platforms.'

    }

  ];


  myAbm = [
    {
      'category': 'starting',
      'heading': 'Starting too soon',
      'img1': 'assets/images/dmb/section18icon1.png',
      'content': 'There’s a lot to feel enthusiastic about when reading the success stories of ABM, but don’t let that stop you from sufficient planning. It’s no secret that strategic ABM is resource-intensive. You need to be realistic about how much time your team can dedicate to the programme, and what you can deliver. “When I go to meet organisations, there’s often a need to reset expectations. They may have started to engage with wider stakeholders and have been setting unrealistic expectations to gain buy-in” Andy says. Remember, ABM is a marathon, not a sprint, and you need to buy yourself time to build and test a long term strategy rather than get caught up in short-term random acts of tactical activity.'

    },
    {
      'category': 'overselling',
      'heading': 'Overselling',
      'img1': 'assets/images/dmb/section18icon2.png',
      'content': 'Obviously, buy-in to an ABM programme, especially from sales, is crucial to getting the green light, but marketing teams can approach in this the wrong way. Marketing is often on the back foot, so believe they must sell ABM to the sales team to gain commitment. This means they often make promises they don’t know if they can keep. “It’s not about that,” says Andy. “Gaining buy-in is actually the easy bit, but you do need to be honest and let the benefits of ABM speak for themselves. The tricky bit is the ongoing process of building alignment.'

    },
    {
      'category': 'selecting',
      'heading': 'Selecting too many accounts',
      'img1': 'assets/images/dmb/section18icon3.png',
      'content': 'The pressure to meet overarching business requirements can drive marketers to push lots of accounts into their ABM programme in an attempt to get as many results back as possible. This is resource-intensive, will most likely mean accounts receive a half-hearted ABM campaign and ultimately defeat the object of strategic ABM. It’s important to shake the mass marketing/demand gen mindset, and start small. “Prioritise,” warns Andy. “We advocate doing between four and six accounts (for one-to-one) or one or two clusters (for one-to-few) until you have established the programme and are ready to scale.” ',
      'content2': 'Many marketers look at ABM as the answer to an under-performing demand gen programme, so they default to a one-to-many ABM approach. This may work for them, but they really miss out on the long-term value and experience that a strategic ABM programme can deliver.'

    },
    {
      'category': 'insufficient',
      'heading': 'Insufficient Research',
      'img1': 'assets/images/dmb/section18icon4.png',
      'content': 'The cornerstone of ABM is account insight. Without this, it will be impossible to develop a bespoke proposition that says what the target needs to hear, rather than conveying a generic message based on what you want to say.',
      'content2': 'There is no way to cut the corner and expect ABM to be any better than whatever you were doing before. While sales teams, your CRM and MA will tell you a certain amount, sales are rarely the ‘font of all knowledge’ (and they may not have dialogue across the wider business). Marketing can add significant value by bringing fresh insight to the table.'

    }

  ];
  myleadgen = [
    {
      'category': 'firstcontent',
      'title': 'Make Sure Your Site is Mobile-Friendly',
      'content': "Majority of online users access the internet using their mobile phones. An audit can be a great way to evaluate your current standing, find gaps in your strategy, and identify opportunities for improvement both onsite and offsite as well.",
      'content1': " Just because you have got a site, does not signify it is optimized for tablet computers and mobiles. When it may require a little additional design work, these ten motives to get a mobile-friendly website make it worthwhile. ",
      'content2': " Google prioritizes mobile-friendly sites over the ones which are not in search outcomes. The Google algorithm change that happened in 2015 tweaked how Google displays cellular search outcomes. Rank better. ",
      'content3': "People everywhere use cellular devices to perform everything from simple online searches to buying large ticket items and a whole lot more. The reason? It is effortless and quick. Get, and consumers in each industry want to join exactly what they are searching for fast. Then you can not provide your clients support if you are not optimized for mobile.",
      'content4': "It makes it possible to build credibility together with your customers, customers, and influencers on your business. Having a site that is friendly that is cellular, anybody who attempts to stop by your website is going to have an expertise, and that will encourage you to be seen by them as a source for products, advice and services.",
      'content5': "It is turning into a standard best practice. Websites have been mobile-friendly with more and more coming online daily. Web layout that was responsively available to everybody and has made optimization more straight forward, which means users have started to anticipate this level of performance when surfing on their devices, to come regularly. Creating your site mobile-friendly automatically opens your client base up to anyone doing a cell search. And clients will not need to search in the URL for your website or type to locate it they can execute an internet search to locate you easily and fast.",
      'content6': "You will create your clients considerably when a client or a possible customer accesses your website in order to find information or try to find something that you sell; you want the encounter to become nothing short of good. Just a site can promise to provide that expertise. Since a lot of men and women use mobile devices to access the net, customers will go back to your website and inform others about how good it is. Clients will do the reverse.",
      'content7': "Since Google wants you to take action, webmasters understand when Google urges you to do something, you really ought to try to get it done. This is how it is with making. Google has clarified why cellular is indeed important within their own words, and also the number one reason they mention is everybody has smartphones, plus they are always using them to hunt.",
      'content8': "Your site will look good and work well on almost any apparatus, as long as you use responsive site design to construct or redesign your website. Why take chances when it comes to optimization that is cellular? To the device an individual is using to get your website, your site will react with a layout and operate, and it all render to appear well."

    },
    {
      'category': 'secondcontent',
      'title': 'Audit and Find Opportunities to Improve',
      'content': 'An audit can be a great way to evaluate your current standing, find gaps in your strategy, and identify opportunities for improvement both onsite and offsite.'

    },
    {
      'category': 'thirdcontent',
      'title': 'Ways to Boost Your Mobile Content',
      'content': 'Ignoring cellular optimization isn ot just a poor thought for SEO reasons, but it could also result in your website to shed countless earnings. Do not worry. It is not tough now to produce some improvements.',
      'content2': 'Individuals on cellular devices are a lot more finicky than people on desktops. As a person, I understand that I am trying to get what I want on the move. If they are not done, pop-ups can be a mistake.',
      'content3': 'This is not always true on cellular, although it is usually clear to shut a window which looks. Google has stated in an official statement these cellular advertisements, called"interstitials" will probably be penalized if they hurt the user experience. ',
      'content4': 'Will harm your SEO, although wont damage your position. While the consumer is on the webpage, you should avoid covering the content. ',
      'content5': 'Something like this should be set up, In case you have got a motif, but it is very good to know just how. When you are using CSS style sheets, you can define the width of components like images or columns predicated on two things: pixels or a percentage. For example, if you set the width, it is going to produce. This guarantees your users will not need to scroll horizontally, which is annoying. ',
      'content6': 'The width of these components will not change with the display dimensions, in which case you might wind up getting the incorrect dimensions on devices if you decide to place the width according to pixels. If you are utilizing media queries, It is possible to use dimensions. ',
      'content7': 'Media questions may be employed to create your site responsive to cellular devices, but they are not for novices. These are methods used programming which enables you to alter things such as width, but also the form of the components as well as the material.',
      'content8': 'Many WordPress topics for producing a site will have this sort of responsiveness set up. If you use these kinds of queries, however, you can find a bit more flexibility. You are able to think to present your website the ability to stretch or shrink depending on, to split them down a bit more.',
      'content9': ' These questions may be used to alter how small or big text is giving you the capability to tailor the experience. You want your customers to easily and rapidly get into your articles. You have to be certain they are not being attacked by components at the same time to accomplish this aim. This is particularly true if these components load causing the page.',
      'content10': 'A complete example of something which may go is that we used to get. The media questions may be used to eliminate elements. These webpages have a frame that gives a user experience and enhances speed. It is possible to get comparable results with optimizations that are hefty, but this offers an accessible and easy way to earn your content.',
      'content11': 'Notions similar to this can allow you to stay ahead of this curve, and Google is displaying AMPs from the research results. Have a look at this manual about the best way best to earn AMP pages to begin. Such as this, remain on the lookout for inventions meanwhile.'
    },
    {
      'category': 'fourthcontent',
      'title': 'Redesign ASAP',
      'content': 'Mobile devices will be the approach. Because of this, search engines such as Google are currently taking note. Everything from online surfing to purchases is occurring on tablet computers and mobiles, and you do not need your business to be discounted.'

    },
    {
      'category': 'fivethcontent',
      'title': ' Target Long-Tail Keywords',
      'content': 'The keywords which prove to be extremely specific to a particular domain or vertical is what a long-tail keyword is. Three reasons to aim long-tail keywords! ',
      'content1': 'Targeting prospective prospects that are "late" at the purchasing cycle using long-tail keywords, using Wordtracker - the key keyword research tool. Simply take the trial.',
      'content2': 'Seasoned professionals at the area of website marketing understand it is smart to utilize keywords that target potential prospects that are "overdue" at the purchasing cycle. How can you learn what these keywords are?. .and why are they important? ',
      'content3': 'That which we have been speaking about this is the idea of targeting tail keywords.',
      'content4': 'Long-tail keywords are the ones four and three keyword phrases that are very, very special to everything you are attempting to sell. You see, they have a tendency to be searching for what they are planning to purchase each time an individual employs a key term. In every situation, special searches that are such are a lot more inclined to convert compared to typical searches which often be geared toward the sort of research to earnings before making a purchasing decision that consumers do.',
      'content5': 'California Rock Climbing excursions newcomer Mountain-climbing at California led Rock Climbing excursions bracket Shasta household climbing excursions All these are merely a couple instances. I am confident that you may think of more. The purpose is twofold;',
      'content6': 'The lengthy tail keywords are a lot easier to rank for. Individuals who hunt by utilizing long-tail keywords are a lot more prone to get buyers eventually! More good thing.',
      'content7': 'Of course, this shows you need to really be creating pages which zero on snagging searchers using long-tail keywords. And, as there are so many different long-tail mixes which searchers can use to get what you give, which usually means you are probably be creating pages.',
      'content8': 'The products news is that Google loves sites which do have significantly more pages. It would make the website appear more ordinary, larger, and more real in the planets most widely used internet search engines opinion. Remember your"specific" pages need just be variations of ones principal offering(therefore ) but centred on a particular long-tail niche.',
      'content9': 'So, every page and each is going to have a name, description meta tag header label, using the tail keyword that you select for every page that is particular and body material which highlights your offering. It does work at the stage of the purchasing procedure, although It is not rocket science!.',
      'content10': 'There is no replacement for study In the long run, there is not any replacement to get doing your keyword research and discovering which keywords have sufficient traffic to generate sure they are worth going later. Together with doing all of all your intelligence search to ascertain which keywords you are going to be ready to position for predicated on the internet web sites you do need to compete, and that attempt has to be dovetailed.',
      'content11': 'Wordtracker is your spot to discover a collection of keywords that are related in addition to learn just how much traffic each is very likely to give your website. For a number of the websites we manage, at least one out of two of our customer traffic stems out of terms -- and also traffic has a tendency to convert in a higher degree than keywords and key terms or more than one.'

    },
    {
      'category': 'sixthcontent',
      'title': 'Update Existing Content That Has Performed ',
      'content': 'Search engines utilize web-crawlers (such as bots, robots, or"google-bots"), which can be only high-tech programs that scan the net for internet sites. The internet crawler "indicators" a website depending upon lots of algorithmic facets depending on the internet search engine provider.',
      'content1': 'A website might be indexed in relation to a mix of incoming links to the site is amount, a web page is upgraded, and also variety and the selection of topic keywords utilized. Every single time you create an upgrade the internet search engine rearranges the rank of your site and takes note. If you do like to boost ones websites odds getting a higher position, then upgrade this article to ensure your rank will be reassessed by an internet search engine. ',
      'content2': 'Keep in mind articles is not the important thing here, calibre is. Yes, it is a fantastic idea to upgrade but maintain your articles standards. If you burst your page using a lot of quality articles that are low stuffed with keywords, you are getting to be penalized.',
      'content3': 'Google Loves Frequent Upgrades',
      'content4': 'Definitely, one of the internet search engines is Google. While the king of search engines, Google has internet sites are all assembled as well as an effect on webmasters. This really can be just really an indication you ought to add content for your site If Google conveys its love for sites that update often.',
      'content5': 'You should not make modifications, developments, or even postings every hour. But at least twice to 3 times every week, or a website that is updated once every time, is recognized as a frequently updated blog. The"Googlebot" that crawls the net is constantly looking for webpages that are fresh or upgraded and subsequently adds the brand new content into your Google index. Then you have got a better likelihood of Google rank your website with each upgrade In case you update your articles with invaluable and reliable info. ',
      'conten6': 'Put in a picture, a guide or create some modification in your own website. Most effective way & the simplest will always be to bring a site and keep to include. That counts as an upgrade in your own website. Should they touch upon those articles, write something which may find the awareness of start helping with your upgrades.',

    },
    {
      'category': 'seventhcontent',
      'title': 'More Posts, More Keywords',
      'content': 'Whenever you publish content that is new, you present more chances for the internet website in order to contain keywords. Keywords are at the top of the algorithm graph for ranking and search engine optimization. Often articles, such as article or site postings, lets you optimize this content. ',
      'content1': 'As an example, in case you operate an insurance plan quote internet site and upgrade a few times each week with fresh posts, then you are able to focus each article on a different feature of insurance, for example as"automobile liability insurance" or even"universal life insurance policy policies coverage plan " Each time you comprise search phrases that aid your site is recognized by a search engine for a location searchers could see for their insurance requirements.',
      'content2': 'You must bear in mind how many keywords your web site has Google will not base a bunch of weight. Google is currently appearing at excellent content, rather than crap content if it suggests a website.',
      'content3': 'You can not build your search engine optimization effort around a keyword or keyword term, although yes, keywords are part of your search engine optimization plan. Create excellent articles which yes, includes your keywords but only as long as they are naturally set. Write content which explains the way to do something answers some questions or provides quality advice which they need. Usually do not write content on just what the reader wants to write it. Take advantage of your metatags, name tags and descriptions for the keywords, but make the articles at a natural condition.',

    },
    {
      'category': 'eightthcontent',
      'title': 'Maintain Your Portfolio Informed and Upgraded ',
      'content': 'Yet another reason to upgrade your internet site is always to keep current readers, in addition, to provide data for traffic to convert customers. You can start using an RSS that all upgrade subscribers every time you print content. You develop devotion, which translates into returning traffic which adds value by maintaining your audience participated. ',
      'content1': 'Likewise, your content that is always might offer details regarding your business as well as your services or products to customers. When a guest has been directed to your website through a search engine connection, then you definitely want to convince them that the product is your ideal selection for these in relation to the thousands (or millions!) Of results. Give articles about client care to them. In form them about your products benefits. Help them know just why they want your merchandise. The further details a consumer can get, the more likely he or she will be in a position to generate an educated decision to buy. ',
      'content2': 'Updating your web site is not going to garner devotion and admiration but can put you.',
      'content3': 'When a visitor begins examining your material and sees your website and discovers it really is obsolete, you believe that they are going to go or stay? What could you do? I would not order anything from somebody who did post from 2011. I do like to be aware that the company is busy worthy.',

    },
    {
      'category': 'ninetthcontent',
      'title': 'Use Your Competition’s Keywords as a Roadmap',
      'content': 'Those numbers are increasing getting the benchmark. That is a whole lot more compared to conventional 350 to 600 words which people were taught was that the very best clinic back in 2013.',
      'content1': 'Three decades back, when affiliate advertising was youthful, this clinic was powerful. It’s the principle we utilized to make ourselves and articles for our clientele. We’d utilize our resources (funding, time, etc.) to print two to three brief blog posts per week. With more businesses (and bigger businesses at that) embracing inbound advertising, both contents exchanged, and competition has considerably improved.',
      'content2': 'Since 2013, the search engines have become full of short-form blog posts seeking to rank for every single keyword under the sunlight -- and frankly, the majority of these posts suck. So, Google had an issue: consumers were looking at Google searching for answers, and they all had been finding was this brief, poorly-written (although keyword-optimized) articles with cheap copywriters.',
      'content3': 'Determined by the consumer, as Google has ever been, the group made many algorithm adjustments to deliver excellent articles into the very top of the search positions. Now, when you ask Google a query, it is going to return what it considers is the maximum quality article that answers your query, and in virtually every circumstance, it is long-form content, over 2,000 phrases.',
      'content4': 'This has created a challenge for entrepreneurs.',
      'content5': 'If we would like to outrank the contest, we have to make the content of the maximum quality. It has to provide more value than some of the other search results attempting to rank #1 to the identical keyword. The more aggressive the keyword, the more precious the material.',
      'content6': 'Length is often considered a high-quality factor, therefore if the very best search result you are attempting to unseat is a high quality, 3,000-word masterpiece, so do not think you will outrank it using a 500 word bit -- even in the event that you’ve used every SEO best practice.',
      'content7': 'Bearing this in mind, the budgets of many of IMPACT’s client have changed. Rather than delivering three articles each week, we might just send 2-4 articles per month to the budget.',
      'content8': 'The ROI with this change has been enormous.',
      'content9': 'That is what you are asking yourself right now, and I have asked the exact same thing.',
      'content10': 'Quite honestly, they likely won’t (not in a single sitting), but regardless of the length, individuals are also more inclined to share long-form posts and return to your own site to learn more later on.',

    },

    {
      'category': 'tenthcontent',
      'title': 'Create Long-Form Content',
      'content': 'All webmasters make an effort to become the "authority" from Googles eyes eventually. The overriding technique to becoming a power site is by simply abiding by the search engine optimization Ad Age," content is king" The further enlightening articles you can publish that pertains the larger capacity possibility your site likes.',
      'content1': 'Additionally, should you examine your competitors sites, you may realize that the authority websites in your industry have thousands and thousands of pages indexed by Google, that measures value. The further valuable articles you print, the higher your odds to become a power website.',
      'content2': 'Furthering this endeavour publishing industry news upgrades is just another strategy in becoming a power website. Whenever you upgrade your site, found and the following page is established by Google.',
      'content3': 'The further you write on a topic, you grow to be an authority, and people start to trust everything you state. The longer they expect you, the more inclined that they are to get from you personally. Social networking platforms really are a terrific spot to start establishing authority. Answering questions posting articles that are invaluable in your own blog or commenting something blogs can build your reputation and profit you.',
      'content4': 'Users will get loyal In the event that you write excellent content. Loyalty is, therefore, the little businesses have an opportunity to take on their industrys big dogs.'

    },

    {
      'category': 'eleventhcontent',
      'title': 'Composing long-form permits you to have a reader from beginner.',
      'content': 'In other words, articles that are long-form permits you to provide value. A post’s purpose is not to reach a word count for the word count’s interest, but rather to supply information it exceeds or reaches a word count.',
      'content1': 'Composing long-form permits you to have a reader from beginner.',
      'content2': 'Providing that type of value motivates them to discuss it with other people brings visitors to your articles, and places your brand. In reality, BuzzSumo discovered who “the more the material, the more stocks it receives, together with 3000-10000 term bits obtaining the maximum typical stocks (8859 total average stocks ).”',


    },

    {
      'category': 'twelvetthcontent',
      'title': 'Long-form Is Very Good for SEO',
      'content': 'All those extra phrases in long-form posts supply more chances to rank for long-tail keywords and become found in search engines.',
      'content1': 'SerpIQ did a research of the ordinary length of their content at the top ten results of search questions and discovered that on average they had been over 2,000 words.',
      'content2': 'Part of this rationale long-form content plays so well on Google is that folks are spending more time in your site. Google variables this to their algorithm, they have demonstrated a preference for articles which retains attention.',
      'content3': 'Consider the most reliable names in your business. Who would people turn to when they want expert advice?',
      'content4': 'One thing these authorities all have in common is that they create content. (Not that so they do not produce short-form content, too.) ',
      'content5': 'Long-form content such as that generated by these government is generally comprehensive articles; covering all you would have to understand about a subject and leaving no questions unanswered.',
      'content6': 'As soon as it is possible to provide a policy that is comprehensive, this can help explain yourself.'

    }

  ];

  myconclusion = [
    {
      'category': 'survey_gizmo',
      'content': 'Notice that we have chosen to concentrate on the approaches of marketing instead of this plan. We found our present and possible clients were frequently looking for "poll examples," however our current offerings were not doing a fantastic job of fulfilling that need. It is just a method. How nimble teams operate becomes clear once you look at what exactly is normally recorded as the "worth" of Agile marketing. By abiding by the methods found by programmers (with our very own spins, naturally), entrepreneurs may open up completely new ways to achieve our viewers and our objectives. These vary from two to fourteen days. Some larger initiatives will not fit into one sprint, which means you will want to split up those into bite-sized pieces which you are able to handle sprint.'

    },
    {
      'category': 'stand_meeting',
      'content': 'Each day that your staff should get together and have a very short check-in. Each group member goes over exactly what they did the day before, what they are likely to do now, and also any blocks they have struck. Blocks must be addressed straight away.'

    },
    {
      'category': 'job_progress',
      'content': 'Whether it is the fantastic whiteboard with sticky notes, a pleasant and easy Trello plank, or large fancy technical applications, you want a centralized approach to keep track of your sprint which everybody has access to.'

    },
    {
      'category': 'teamwork',
      'content': 'While a person may have a job, the failure or success of this rush rests on all of the group members. Everybody needs to be ready to collaborate and help in the Agile frame. More than a staff member has struck an obstruction, either inner (a client needs my help!) Or outside (my puppy ate a sock!), and they are able to instantly bring it to the staff who will rally round the compromised project to be certain that it does not endure. Over the duration of a one-week dash, we wrote six guides to shared survey kinds and generated templates for all those surveys that our clients can increase their own account with one click. The page views for our cases landing page increased 252%, skyrocketed 810 per cent. We are going to go into more detail about this definition of Agile marketing beneath, in addition, to outline a few. This is beginning to seem. All staff members are current on progress and projects.',
      'content2': 'Therefore we are empowered to create certain things get done. Are you prepared to reply? You certainly require an overarching strategy to underpin your Agile procedures, but the plan is something which each marketing department ought to be concentrated on no matter how they intend to execute it. Teams utilize sprints (brief, finite intervals of intensive labour) to finish those jobs cooperatively. After each rush, they improve the outcomes with time and quantify the effect of the jobs and continuously. Whether you utilize collaborative or top-down procedures to produce your strategy, it is still possible to bring it to life using Agile techniques. Agile marketing interrupts failure provided that it includes lessons and generates jobs that are successful. Cost and customer are the two pillars of digital marketing.'

    }

  ];

  updateProductCategory(stringCategory: string) {
    this.ProductCategory = stringCategory;
  }
  updateAbmCategory(stringCategory: string) {
    this.AbmCategory = stringCategory;
  }
  updateleadgen(stringCategory: string) {
    this.Leadgen = stringCategory;
  }
  updateConclusion(stringCategory: string) {
    this.Conclusion = stringCategory;
  }
  get f() { return this.registerForm.controls; }
  get fbannermodal() { return this.bannerModalForm.controls; }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  modalRef: any = BsModalRef;

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
    const services = this.registerForm.value.fService;
    const nature = this.registerForm.value.fnature;
    const formName = this.registerForm.value.firstName;
    const formEmail = this.registerForm.value.email;
    const formPhone = this.registerForm.value.lastName;
    const formMessage = this.registerForm.value.password;
    const organisation = this.registerForm.value.organisation;
    const website = this.registerForm.value.website;


    this.httpClient.post('https://brandstory.in/assets/thank-you-banner-dm-page.php',
      {
        services: services,
        nature: nature,
        name: formName,
        email: formEmail,
        phone: formPhone,
        message: formMessage,
        organisation: organisation,
        page: "brandstory.in/digital-marketing/"

      })
      .subscribe(
        (data: any) => {
          //this.modalRef.hide();
          // this.router.navigate(['thank-you']);
          window.location.href = "https://brandstory.in/thank-you"
          console.log(data);
        }
      )

      this.httpClient.post('https://brandstory.in/assets/customer_mail_2021.php',
      {
        services: services,
        nature: nature,
        name: formName,
        email: formEmail,
        phone: formPhone,
        message: formMessage,
        organisation: organisation,
        page: "brandstory.in/digital-marketing/"
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
        page: "brandstory.in/digital-marketing/"

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
        service: formService,
        message: formMessage,
        page: "brandstory.in/digital-marketing/"
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
