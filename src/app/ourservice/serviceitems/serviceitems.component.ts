import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { NgForm } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-serviceitems',
  templateUrl: './serviceitems.component.html',
  styleUrls: ['./serviceitems.component.css']
})
export class ServiceitemsComponent implements OnInit {
  enquiryModal: any = FormGroup;
  submitted = false;
  arr: any[] = [];
  isFirstOpen = false;
  constructor(private meta: Meta, private title: Title, private route: ActivatedRoute, private httpClient: HttpClient, private modalService: BsModalService, private formBuilder: FormBuilder) { }

  filteredData: any;

  myBlogItems = [
    {
      'url': 'online-branding-identity',
      'img': '',
      'title': 'Online Branding Identity',
      'overview': '',
      'content': `<p><a href="https://brandstory.in/services/online-brand-engagement/">Branding</a> is a way of storytelling, and we are the crafters of your story- creating stories that embed into your user’s brand experience and become a part of their everyday lives. We do this using brand narratives, experienced designing and engineering along with intuition to tap into the minds of your users to understand what they are interested in, what is upcoming in the market and how deep we can anchor your brand into it. If you’re in it for the long term; if you’re looking for a way for your brand to stand apart and get good ROI, then establishing your brand’s value into the market is of crucial importance. </p>
      <p>Creating an identity for a brand is like taking a normal citizen and making him a celebrity. It is more than just a catchy tag line or an attractive or creative logo. It is creating the very molecule of your brand, the foundation on which all your strategies are developed, the first solid step to your growth. Any engagement with consumers or any promotion or any method of strategic planning that your brand carries out requires a visual identity that people can relate to. It is important what you project on behalf of the brand so it makes it equally important that your brand stays up to date on the changes and trends in the market, remaining relevant. On your step from just existence to discovery, a brand identity can make or break your image so you might want to be careful when it comes to relying on the right people to do it. </p>`,
      'metaTitle': 'online Brand identity | Online Brand Creation | Online Branding',
      'metaDescription': 'online brand identity , online brand engagement , online brand creation, online branding , online Brand Marketing, online lead generation',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'online Brand identity | Online Brand Creation | Online Branding',
      'ogDescription': 'online brand identity , online brand engagement , online brand creation, online branding , online Brand Marketing, online lead generation',
      'ogUrl': 'https://brandstory.in/services/online-branding-identity/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'online brand identity , online brand engagement , online brand creation, online branding , online Brand Marketing, online lead generation',
      'twitterTitle': 'online Brand identity | Online Brand Creation | Online Branding'

    },

    {
      'url': 'go-to-market',
      'img': '',
      'title': 'Go to Market',
      'overview': '',
      'content': `<p><span class="bs-nor-txt-color">Adding value to your target clients, connecting with potential customers and fulfillment of your brand’s promise is all part of the GTM strategy. The GTM strategy that we define for you brings together all the primary elements that drive your business: sales, marketing, pricing, brand development, distribution, consumer and competitive analysis. This strategy<br>
      clearly defines your approach to the customer base and how you intend to compete in the market. </p>
      <p><span class="bs-nor-txt-color">With a highly specialized GTM strategy, we help your business reduce time to market, increase ability to adapt to change in the market, reduce costs linked to product launch failures, manage challenges that come with innovation, avoid taking the wrong path in the market, ensure effective customer experience, ensure regulatory compliance, clarify direction for every step and establish a path for growth. You should consider your GTM strategy as an investment in time and resource which is laying the pathway to ensuring a viable path to market success. </p>
      <div class="row serviceimg"> <div class="col-md-6 col-sm-12"><ul>
      <li>Identify and brainstorm micro markets that you want your product / service to prevail in.</li>
      <li>Brainstorm the right target customer base that you want to sell your product/service to.</li>
      <li>Choosing the channel where your customers will buy your product/service and where you will be promoting it.</li>
      <li>Defining what unique value your products or services bring into the market.</li>
      <li>Determining the charge or rate of your product or service and differentiating it as per consumer base with thorough market study.</li>
      <li>Defining your brand positioning and primary differentiation in the market.</li>
      </ul></div>
      <div class="col-md-6 col-sm-12">
      <img class="serviceimg"  src="assets/images/wp-content/uploads/2018/04/Go-to-market.png" alt="Digital marketing Agency in Bangalore" >
      </div>
      </div>`,
      'metaTitle': 'Digital marketing Agency in Bangalore | Online Marketing Company',
      'metaDescription': 'Digital marketing agency , Digital marketing Company in Bangalore , Lead Generation Company in Bangalore , Online lead generation Company In Bangalore',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Digital marketing Agency in Bangalore | Online Marketing Company',
      'ogDescription': 'Digital marketing agency , Digital marketing Company in Bangalore , Lead Generation Company in Bangalore , Online lead generation Company In Bangalore',
      'ogUrl': 'https://brandstory.in/services/go-to-market/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Digital marketing agency , Digital marketing Company in Bangalore , Lead Generation Company in Bangalore , Online lead generation Company In Bangalore',
      'twitterTitle': 'Digital marketing Agency in Bangalore | Online Marketing Company'
    },

    {
      'url': 'online-brand-engagement',
      'img': 'assets/images/wp-content/uploads/2018/04/Brand-engagement-page.jpg',
      'title': 'Online Brand Engagement',
      'overview': '',
      'content': `<p>Your target audience has to understand you, get comfortable with your presence and then involve themselves in defining your identity. With engagement, we have to build your value one experience at a time, mapping your path forward in contributing to the creation of your brand identity. What we set out for you is a brand framework that clearly dictates&nbsp;brand components like proposition, positioning statements and marketing messages.</p>
      <p class="text-center">Along with concept development, consistent execution and communications planning, our concentrations include</p>
      <h3>Brand Positioning</h3>
      <p>Your positioning is what defines you and marks your foot landing in the market. A positioning statement is what defines a brand’s uniqueness, niche that you’re centered in, audience that you have targeted, benefits that your product or service offers and how it makes your client’s life better and easier.</p>
      <p>With BrandStory, you can be sure that there will be plenty of occasions where we can innovate opportunities for you and then take those opportunities to innovate for you.</p>
      <h3>Internal Branding</h3>
      <p>Having a strong internal branding isn’t just having an appealing logo on a fancy business card or a tagline that your company lives by. It’s the values and principles that your company lives, breathes and thinks by. It is what makes your company different and builds the foundation that your company thrives on. Internal branding can be seen as the ideology, principle, ideal and ethics that bind the company together, and more importantly, strengthen it to flourish to its prime.</p>
      <h3>Brand Architecture</h3>
      <p>All your sub-brands and umbrella brands need to follow up on your branding with the same essence as the parent brand. The overall look and feel is managed by us, to define and formulate the relationship between the brands and establish a firm interaction base with the consumers and shareholders of your company. We design your brand identity, develop logos, construct your brand portfolios while retaining the brand essence throughout in order to anchor all your brands for continuous success.</p>
      <h3>Tagline</h3>
      <p>To begin with, you need that one line that says it all. Taglines establish your presence in the minds of people. It is what they subconsciously connect to and recall in their heads when they hear your brand name. Now when it’s something of that big a significance, you might want to make sure you get it right on every angle. It’s summarizing your product features, brand value, brand identity and niche into one single subtle line. It is the statement that people know your company by; it is what defines your identity authentically and reinforces your proposition and corporate persona.</p>
      <h3>Key Messaging</h3>
      <p>When we use the term ‘anchoring down’ we mean to make sure that your company stays stable, doesn’t drift away or worse, drift apart due to latest fads and trends in the market. This is where key messages come in, creating an impression with your target audience, giving all your advantages the correct highlight they require and acknowledging your business objectives. What is essential for any initiative is that there is absolute clarity and 100% elimination of any confusion when it comes to value and philosophy and guidelines of the brand.</p>
      <h3>User Profiles</h3>
      <p>The most effective way to gain insight on the needs of users who are interacting with your brand, website or service and to influence them is through the insights gained from user profiles. They are like guideposts to understand all you need for user-based development and a peep into their behavior patterns. They allow the brand to understand the complete user-interaction lifecycle from brand discovery and participation to purchase and brand enthusiasm. BrandStory develops and recovers your user profiles through research, surveys and existing insights to give the insights that your brand requires.</p>
      <h3>Brand Guidelines</h3>
      <p>Building visual identity systems are essential in creating a crystal clear image of your brand in the user’s minds. Brand guidelines are the thread on which your external branding and internal branding are tied to on either end. This can only be done if every single element of your brand is broken down into minuscule components and defined likewise. Brand guidelines are the compass pointing out the direction for your identity, offerings, imagery, content and marketing and this direction is what will give you a tangible result as per brand engagement terms.</p>
      <h3>Video/Motion Design</h3>
      <p>Compelling and interactive videos engage clients, entertain them and provide them with pieces of information. Videos are a visually appealing way to communicate your portfolio, services or simply your brand enthusiasm. Branded video content is a neat way to propose your product/service to the client and sweep them off their feet. This is an active way to engage them into your call-to-action and drive them towards being your faithful audience, giving the consumers a taste of your brand.</p>
      <h3>Reports and Investor Communication Design</h3>
      <p>Brand Engagement is not only restricted to your consumers but also within the organization and investors. Thus, your reports and analytic need to look sharp and cutting edge when they are being presented and this happens to be something that we have expertise on: annual report designs and investor communications that effectively relay your message across. We work with special attention to designs for reports such as Annual Reports, Online Annual Reports, Video Annual Reports, Corporate Social Responsibility (CSR), Fact Sheets and IR Collateral, Investor Presentations, Investor Relations Apps, Investor Websites, IPO Communications, Shareholder Meeting Support and Sustainability Reports.</p>
            `,
      'metaTitle': 'Brand engagement | Online Brand engagement marketing Solutions',
      'metaDescription': 'Brand engagement , Online Brand Marketing in Bangalore , online Brand engagement,Online Brand Reputation management,online Brand popularity, brand development',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Digital marketing Agency in Bangalore | Online Marketing Company',
      'ogDescription': 'Brand engagement , Online Brand Marketing in Bangalore , online Brand engagement,Online Brand Reputation management,online Brand popularity, brand development',
      'ogUrl': 'https://brandstory.in/services/online-brand-engagement/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Brand engagement , Online Brand Marketing in Bangalore , online Brand engagement,Online Brand Reputation management,online Brand popularity, brand development',
      'twitterTitle': 'Digital marketing Agency in Bangalore | Online Marketing Company'
    },

    {
      'url': 'growth-hacking-agency-in-bangalore',
      'img': 'assets/images/wp-content/uploads/2018/04/Competitive-analysis.jpg',
      'title': 'Growth Hhacking Agency in Bangalore',
      'overview': '',
      'content': `<p>Keep your friends close and your enemies closer. Competitive Analysis is what we see as step one to formulating a killer business strategy. What can otherwise be termed as Competitive Intelligence, is more than just collection and analysis of your competitor’s data and activity- it is evaluation of past market disruptions, predicting the future of competitor’s activities and events.</p>
      <p>Competitive Intelligence is an important analysis to procure insight into the marketplace activity and challenges in a systematic manner using trusted and ethical sources.</p>
      <p>Strategic planning with competitor analysis includes using external competitive and market forces to generate strategically relevant insights from the analysis in a structured and research oriented manner, reduces decision risk and eliminates uncertainties involving external developments. It magnifies financial returns, marketing, operations and strategic planning with the understanding gained from CI. Now, more importantly, we recommend BrandStory to do this for you is because we use the most ethical and lawfully complying methods to do your competitor’s analysis with utmost corporate code of behavior.</p>
      <p>Along with assessing the internal strengths and weakness, potential opportunities and current market competition, we follow the entire process of developing new methods to leverage success and market visibility and taking every insight to your company’s advantage. This process determines where your brand is heading to and attaining that direction is of utmost priority. Following this, comes the process of collecting all necessary tools to compile your competitor’s data including articles, recent reports, and public data to our advantage.</p>
      <img  src="assets/images/wp-content/uploads/2018/04/Competitive-analysis.jpg"  alt="Growth Hhacking Agency in Bangalore" >
      `,
      'metaTitle': 'Growth hacking Agency In Bangalore | Online Reputation management',
      'metaDescription': 'Growth hacking Agency in Bangalore , online reputation management company in Bangalore, Social Media Growth hacking Agency in Bangalore',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Growth hacking Agency In Bangalore | Online Reputation management',
      'ogDescription': 'Growth hacking Agency in Bangalore , online reputation management company in Bangalore, Social Media Growth hacking Agency in Bangalore',
      'ogUrl': 'https://brandstory.in/services/growth-hacking-agency-in-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Growth hacking Agency in Bangalore , online reputation management company in Bangalore, Social Media Growth hacking Agency in Bangalore',
      'twitterTitle': 'Growth hacking Agency In Bangalore | Online Reputation management'
    },

    {
      'url': 'website-development-company-in-bangalore',
      'img': '',
      'title': 'Website Development Company In Bangalore',
      'overview': '',
      'content': `
      <p>Along with making sure that your website is universally compatible and user friendly, an exclusive expert team of designers and developers are you assigned to to ensure that not only the plan goes according to a timeline but also that your approval is taken at every step. We will work closely with you to make sure that your website is just as you had dreamt and better. Keeping in mind that the main purpose of a website is to increase your visibility, your website is made search-engine friendly. Your brand identity and core value is prominently flown into the screens and pages of your website with ease.</p>
      <p>A set process is followed for good quality <a href="https://brandstory.in/services/best-web-design-company-bangalore/">website development</a>, and strictly, come what may.The project will be divided into different stages, and a report is sent to you on the completion of every stage to get your approval.</p>
      <p>This ranges from discussions, approvals, feedbacks, incorporating your vision for your website, lining the same flow of images, vectors and text to go in with your company goals and values.</p>
      <p>What we strive to do when we build you a website is to turn the website visitor into a buyer of your product or client of your service; and the content, look and feel is thereby infused into the theme.</p>
       `,
      'metaTitle': 'Website Development Company in Bangalore | Web Development Bangalore',
      'metaDescription': 'Website Development Company in Bangalore, Web development Company in Bangalore, Best Website Development Company in Bangalore, Website Development Bangalore',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Website Development Company in Bangalore | Web Development Bangalore',
      'ogDescription': 'Website Development Company in Bangalore, Web development Company in Bangalore, Best Website Development Company in Bangalore, Website Development Bangalore',
      'ogUrl': 'https://brandstory.in/services/website-development-company-in-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Website Development Company in Bangalore, Web development Company in Bangalore, Best Website Development Company in Bangalore, Website Development Bangalore',
      'twitterTitle': 'Website Development Company in Bangalore | Web Development Bangalore'
    },

    {
      'url': 'ecommerce-website-development-company-bangalore',
      'img': '',
      'title': 'Ecommerce Website Development',
      'overview': '',
      'content': `<p>If you’re looking for an <a href="https://brandstory.in/services/website-development-company-in-bangalore/">E-commerce Web Development Company in Bangalore</a>, we provide you with a wide range of end to end eCommerce solutions. Online shopping has gripped our nation as an obsession and rightfully so. With high-speed internet and popularity of smartphones, every individual has the comfort of browsing through hundreds of options in every category, checking reviews, comparing prices and features with a full 360-degree virtual view of the product along with crisp specifications. With all this available with just a few clicks and swipe-throughs, the need to step out and go through the items one-by-one is eliminated.</p>
      <p>Our expert web designers and developers are highly skilled in CMS like Magento, Joomla, WordPress, Shopify, Drupal and Prestashop for your e-commerce web development needs.</p>
      <h4>Ecommerce website development</h4>
      <p>Bringing the clients and the dealers at a single platform, with the comfort of both customers and merchants is the solution that we have to offer to your e-commerce needs. It goes without saying, that e-commerce provides the maximum comfort for customers with a huge variety of options at home, home delivery, cash payment options, customer reviews and complete information on the products.</p>
      <p>The same can be said for the merchants using e-commerce as there is no need to own land or pay rent, feedback from customers, product catalog translation, transaction control, stacking flexibility and the best of all, managing an entire business with a few clicks that are completely future-oriented. To make sure the entire process moves forward as smoothly as possible, we have an exclusive Magento developer along with a website developer and an assigned e-commerce web designer for creating an effective user-friendly design.</p>
      `,
      'metaTitle': 'Ecommerce Web Development Company in Bangalore | UI Design',
      'metaDescription': 'Ecommerce Web Development Company in Bangalore India, Web design Company in Bangalore, Ecommerce Web development, Web Design Agency in Bangalore, Affordable Ecommerce Website Development Company in Bangalore',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Ecommerce Web Development Company in Bangalore | UI Design',
      'ogDescription': 'Ecommerce Web Development Company in Bangalore India, Web design Company in Bangalore, Ecommerce Web development, Web Design Agency in Bangalore, Affordable Ecommerce Website Development Company in Bangalore',
      'ogUrl': 'https://brandstory.in/services/ecommerce-website-development-company-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Ecommerce Web Development Company in Bangalore India, Web design Company in Bangalore, Ecommerce Web development, Web Design Agency in Bangalore, Affordable Ecommerce Website Development Company in Bangalore',
      'twitterTitle': 'Ecommerce Web Development Company in Bangalore | UI Design'
    },

    {
      'url': 'mobile-app-development-company-in-bangalore',
      'img': '',
      'title': 'Mobile App Development Company In Bangalore',
      'overview': '',
      'content': `<p>We are a Bangalore (India) and Dubai (UAE) based mobile App Development Company that is skillful and professional in developing Mobile application for our clients on iOS, Android and Windows Phone, as well as being experts in social applications and API integration.</p>
      <h2 id="app-store-optimization" class="text-center" style="font-weight:normal;">App store optimisation</h2>
      <p>App Store Optimization (ASO) services are basically seen as SEO for apps. With every brand releasing an app; looking the same as the other, it’s hard to have a unique looking app. With the help of professional ASO service, you build a solid platform to maximize discovery on app stores and to dominate in the market. Creating a premium brand value comes as a part of the package with good ASO. Your app goes through all the filters that limit its discovery in the app store.</p>
      <p>If gaining maximum visibility and getting on high selling charts is along the lines of what you’re looking at, then it is important that you get professional help. We believe that by availing our services before launching your app, you can increase future downloads of the app and get on to the top charts from the start.</p>
      <h4>App Title</h4>
      <p>One glance- that’s all you’ll get to tell your user what your app does. You have to capture the user’s attention and will them to download your app within one glance. An app title is the most important ASO factor because if the user can’t tell what your app does through the title, they will skip it. So, you have to sent a clear message within 255 characters. We advise you on the best from all aspects-for you and the user. Some may hoard the available space with keywords but that is only going to chase away your user.</p>
      <h4>App Keywords</h4>
      <p>Another restriction- within 100 characters, the best keywords have to be selected. For this a detailed understanding of your user base, market study, competitors study and popular search keywords study is required, before finalizing. This is not a one-time task as the study needs to stay in current terms with the current statistics. We use data collected over our experience to make this task easier for you. The perfect App keywords are not too long or too generic.</p>
      <h4>App reviews & ratings</h4>
      <p>We are on the constant lookout for your review and ratings, as this is of the most critical value. With correct page optimization, your reviews can increase your app store search ranking. Our in-house tools give us a background insight on key themes and narratives from feedbacks.</p>
      <h4>App Description</h4>
      <p>When you get a view on your description, it is as good as getting someone aboard on your website. It means you’ve gotten through the initial customer attraction process and now you need to get them to download your app. Strong optimization starts here. This is where you sell your app for downloads; this is where the customer sees the features of your app and sets an expectation of what is inside it. Your app description should be crisp, with no exaggeration or underestimation. You can rely on us for that, as we do it just right.</p>
      <h4>App Logo</h4>
      <p>3 seconds- that’s how long you get to make a first impression to capture the user’s interest through a list of other apps they’re viewing under the same category. The logo has to communicate what your app does through an icon that look effortless yet composed with perfect design, symmetry and creative portions.</p>
      <h4>App Screenshots</h4>
      <p>This is the trailer to the movie. The neatest shots of the exclusive features and functionality are highlighted here, with a small description of each shot. We go as the old saying goes that people judge a book by its cover, so we use your best screen display to put on a show here.</p>
      <h4>App Publisher Name</h4>
      <p>The brand name goes here, irrespective of what you are naming your app since people might look for you along with the app. So if you have multiple app, this comes to great use as all your apps will line down, as soon as someone types in your name in the search bar.</p>
      <h4>App Category</h4>
      <p>Primary, Secondary and Tertiary category is what decide where your app falls under. This is of high importance as it determines the success of your app. The right category gets you to your right customer base or target audience and vice versa, while the wrong category lands you with zero results.</p>

      `,
      'metaTitle': 'Mobile App Development Company in Bangalore | IOS App development',
      'metaDescription': 'Mobile App Development Company in Bangalore India, Android App development company in Bangalore , Best mobile app Development company in Bangalore India',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Mobile App Development Company in Bangalore | IOS App development',
      'ogDescription': 'Mobile App Development Company in Bangalore India, Android App development company in Bangalore , Best mobile app Development company in Bangalore India',
      'ogUrl': 'https://brandstory.in/services/mobile-app-development-company-in-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Mobile App Development Company in Bangalore India, Android App development company in Bangalore , Best mobile app Development company in Bangalore India',
      'twitterTitle': 'Mobile App Development Company in Bangalore | IOS App development'
    },

    {
      'url': 'design-studio-in-bangalore',
      'img': '',
      'title': 'Web UI/UX Design Company in Bangalore',
      'overview': '',
      'content': `<p>As an user-centric <a href="https://brandstory.in/services/ui-ux-design-development-company-bangalore/">design agency</a> in Bangalore, India, we create functionally beautiful digital experiences that highly engage with your target audience. We tend to create meaningful relationships amidst brands and their consumers through inspiring design. Our first preferences towards design is the user centered design (USD) which is focused on human tendencies and behavior. We are compassionate towards consumers and have dedication for challenges with smart, well conceptualized designs.</p>
      <p>As a <a href="https://brandstory.in/services/ui-ux-design-development-company-bangalore/">UI design agency</a> in Bangalore, India, we create functionally beautiful digital experiences that highly engage with your target audience. We tend to create meaningful relationships amidst brands and their consumers through inspiring design. Our first preferences towards design are the user-centered design (USD) which is focused on human tendencies and behavior. We are compassionate towards consumers and have a dedication for challenges with smart, well-conceptualized designs Our first step lies in creating the blueprint of your web UI that sets the stage to establish your brand anchoring with your target audience. We ensure that the usability of the Web UI design is preserved while the designers set their mark to develop an aesthetically good looking UI page. We strive to get you the genuine results by transforming your passive viewers to active users. We also ensure that the design is minimal and follows the international design standards that has been used widely among global brands.</p>
      <p>With today’s Digital presence of a brand which can make or break a business, we ensure the UI and the design aspirations of the brand online are a delight to the customer.</p>
       `,
      'metaTitle': 'Design Studio in Bangalore | Web UI/UX Design Company Bangalore',
      'metaDescription': 'Best Design Studio in Bangalore , Best UI Design Company in Bangalore , Design Studio in Bangalore , App ui design in Bangalore , Mobile Ui Design in Bangalore',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Design Studio in Bangalore | Web UI/UX Design Company Bangalore',
      'ogDescription': 'Best Design Studio in Bangalore , Best UI Design Company in Bangalore , Design Studio in Bangalore , App ui design in Bangalore , Mobile Ui Design in Bangalore',
      'ogUrl': 'https://brandstory.in/services/design-studio-in-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Best Design Studio in Bangalore , Best UI Design Company in Bangalore , Design Studio in Bangalore , App ui design in Bangalore , Mobile Ui Design in Bangalore',
      'twitterTitle': 'Design Studio in Bangalore | Web UI/UX Design Company Bangalore'
    },

    {
      'url': 'online-reputation-management',
      'img': '',
      'title': 'Online reputation management',
      'overview': '',
      'content': `<p><a href="https://brandstory.in/orm-company-bangalore-india/">Online reputation management</a> includes managing your business and its brand value across every review and rating forum to every social media platform. It is ideally required&nbsp;for 3 major purposes adding to the growth of your business</p>
      <p>1. Informative- Keep your business aware of the online environment and potential customer and client expectation along with their reaction.<br>
      2. Reactive – Respond to generate positivity. Responses help the business to connect with the readers as they feel emotionally connected.<br>
      3. Proactive – Take control of the discussion and keep consumer aware of the development and happening of the business. Let the customers take a sneak peek into the&nbsp;organization.</p>
      <p>It also helps the business as the viewers understand the values and the principals of the people behind the business.&nbsp;Your review, rating and feedback exist forever over the World Wide Web, Everyone is searching your business, all the time. Does your result on the search appear encouraging or&nbsp;disappointing?</p>
      <p>When a consumer or a client gains interest in your business, the first thing they look for is the trustworthiness of the company. Don’t let negative or careless brand reputation&nbsp;harm your business and deploy resources on <a href="https://brandstory.in/orm-company-bangalore-india/"><em>Online Reputation Management</em></a> as it plays a vital role in the growth of your business.</p>
      <h3>Monitor/ Observe</h3>
      <p>In the age of fast growing internet time is the key when it comes to Online Reputation Management, a slight delay in response or moderation and result in catastrophic image destruction for any business. Monitoring every online presence and feedback about your business, be it social media platform or review forums is our uttermost priority. We keep a regular check on all online activity and respond to any suspicious or concerning situation.</p>
      <h3>Crisis control</h3>
     <p>In second’s business reputation, a brand image can be sabotages which took years to build and gain customers trust. Managing and taking appropriate action against negative reviews feedbacks and comments by our expert PR team is our expertise. We also ensure that the negative reviews feedbacks or comments are organic and not fabricated to sabotage business reputation. We also expertise in building and planning a recovery strategy if our client is currently witnessing any crisis. When required our devoted PR team and BrandStory resources are always available at dispose for our client.</p>
     <h3>Positive Regulation</h3>
     <p>Use Proactive techniques to engage with consumers and clients. We alert and moderate discussions on the online platform when visitors are talking about your business. We engaging with the audience and deliver responses which don’t look fabricated or machine generated but closely resemble to human like interaction. The audience feels they are interacting with a human and not with a company or business. Personifying your business helps building emotional connect with the audience on personal level.</p> `,
      'metaTitle': 'Online Reputation Management Bangalore- ORM Services India Bangalore',
      'metaDescription': 'Online Reputation Management Bangalore,India, ORM Services Bangalore,India, Best Online Reputation Management Bangalore. ORM Services India',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Online Reputation Management Bangalore- ORM Services India Bangalore',
      'ogDescription': 'Online Reputation Management Bangalore,India, ORM Services Bangalore,India, Best Online Reputation Management Bangalore. ORM Services India',
      'ogUrl': 'https://brandstory.in/services/online-reputation-management/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Online Reputation Management Bangalore,India, ORM Services Bangalore,India, Best Online Reputation Management Bangalore. ORM Services India',
      'twitterTitle': 'Online Reputation Management Bangalore- ORM Services India Bangalore'
    },

    {
      'url': 'online-presence-creation',
      'img': '',
      'title': 'Online reputation management',
      'overview': '',
      'content': `<h3>We target your audience right</h3>
      <p>We get to know who your customers really are, what interests them, what captures their attention best. If you haven’t identified your customer’s personas yet, then that should be your immediate priority. Without a clear vision of your target audience, your message might get lost in the masses.</p>
      <p>One major advantage of <a href="https://brandstory.in/digital-marketing-company-agency-bangalore-india/">digital marketing</a> is that it lets you connect to every customer/address your content to them as individuals. By knowing your customer’s statistics of parameters like age, location, profession, interests, computer literacy, personal needs &amp; preferences, education level and lifestyle. We get your content to the right people and build a solid relationship. The connections we build catapult your business into online presence success.</p>
      <h3>Content Creation</h3>
      <p>We understand that you want your online presence to be visually vibrant and appealing but that can’t get you much further without a solid structure and compelling content. Beauty is nothing without brains, a pretty website is nothing without substance. More importantly, with good content, you cannot get consumer to stay on your website long enough for them to grasp your content, which is a no-brainer.</p>
      <p>By substance, we mean actionable, informational educational content that is written in a plan first and then broken down for the end audience. Exclude this is your content and people will exclude you from their interests. We include all these elements into your content through visual graphics, easy links and a crystal clear cut structure to navigate the users around your content.</p>

      `,
      'metaTitle': 'online presence Creation | Online Brand Creation in Bangalore',
      'metaDescription': 'Brand Engagement , online Branding and identity , online Brand presence Creation , online presence creation in Bangalore, online Brand marketing Company',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'online presence Creation | Online Brand Creation in Bangalore',
      'ogDescription': 'Brand Engagement , online Branding and identity , online Brand presence Creation , online presence creation in Bangalore, online Brand marketing Company',
      'ogUrl': 'https://brandstory.in/services/online-presence-creation/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Brand Engagement , online Branding and identity , online Brand presence Creation , online presence creation in Bangalore, online Brand marketing Company',
      'twitterTitle': 'online presence Creation | Online Brand Creation in Bangalore'
    },

    {
      'url': 'search-engine-optimization-company-in-bangalore',
      'img': '',
      'title': 'Search Engine Optimization',
      'overview': '',
      'content': `<p>A <a href="https://brandstory.in/seo-company-bangalore/">Search Engine Optimization</a> (SEO) program increases overall visibility of your business across all search engine platform. It provides an opportunities for brands to create acquisitions&nbsp;(sales, leads, inquiries etc.), and help consumers to engage with your brand, building intent and driving people further along their user journey towards that valuable First Moment of&nbsp;Truth, which is ensured as they find your business on the first page of the search result across all search engine platform.<br>
      With rapid evolution in search engine algorithm, BrandStory’s approach to SEO is built on a unique blend of best practice, clear process and ingrained innovation, providing maximum&nbsp;value and measurable results. We have a dedicated team using white hat tools to organically increase your SEO rating and ensure it’s on the first page of the search engine.</p>
      <h3>Keyword Research</h3>
      <p>The most important task is to find how consumer search for your industry, and that’s where keywords come to play. Identifying the most apt keyword across search engine platforms relevant to the industry is only beginning of the work. Focusing on the search volume and frequency of the keywords gives an insight about what are the most used and appropriate keywords.</p>
      <p>Every industry has a perception about keywords and they often use the same without proper research. The consumers and visitors might not have the same set of thought and this results in poor SEO rating effecting the business search on the web. Keywords are evolving process and are effected by market shift and consumer demand. Ensuring the research is apt and regularly updated is our expertise.</p>

<h3>Technical Optimization</h3>
<p>SEO technical audit to identify any obstacle at set up phase, plus on-going technical support. Technical optimization consists of two major activities<p>
<ul><li> On site SEO –This involves planning, research and implementation during building of website. It is also essential for all websites and is a prerequisite for the second aspect of SEO.</li></ul>
The main component are:
<ul><li> Site architecture: It signifies that the site is built in a hierarchical manner with proper structure and the internal links are relevant.</li>
<li> Keyword research: The keywords used are both relevant and highly used for the business search.</li>
<li> Content: The content is highly optimised and as per SEO requirements</li>
<li> Offsite SEO – This involves acquiring links to give an added advantage over your competitor to ensure that the website is highly optimised.</li>
<li> Link Building: Building appropriate links to improve website SEO rating</li>
<li> Blogging and article: Develop educative and inspiring blog to optimise the search engine</li>
<li> Social media bookmarking: Creating presence across multiple social media platform</li></ul>
<p>These are only a few of the many task performed to optimise the search engine, SEO rating are governed by many other factors and we dedicate our resources to achieve the best for
our client.</p>

<h3>Content Optimization</h3>
<p>SEO content audit, then on-going content support. It involves creation of creative content with respect to the business, it not only draws visitors but also influences the SEO rating influencing the business growth. The major activities of content include:</p>
<ul><li> Blog writing</li>
<li> Videos</li>
<li> Infographic exemplars</li>
<li> Articles and public posts</li>
<li> Case studies and guided book</li></ul>
<p>Developing and regularly updating social media content is also our expertise and we dedicate and build a timeline to never miss an opportunity to share and engage with audience. We ensure that that every content is original and there are no copyright or plagiarism claims, our content is educative and beautifully written in first hand. Content optimization might not directly affect the sales but it adds to the brand value and increases online presence of the business making it more trustworthy, and the most important SEO rating.</p>

<h3>Authority Optimization</h3>
<p>Authority audit, with a monthly activity designed to enhance the authority of your content both on-site and across the internet. The focus is to discover related and most frequently used keywords pertaining to the industry and regularly updating the business online platform not only to assure the best SEO rating but also generate the right traffic for the website.</p>
<p>The Optimization is phased as follows:</p>
<ul><li> SEO campaign strategy and planning (1-2 months)</li>
<li> SEO campaign management (2nd month onwards, then on-going)</li></ul>

<h3>SEO Strategy</h3>
<p>SEO Strategy is a holistic approach where we plan, design and layout the complete schedule of activities to be carried out for improving the website rating. Research processes underpin the fundamentals of our strategic focus under which main highlighting areas are:</p>
<ul><li> Keyword- Discovering the relevant and most searched keywords related to the business.</li>
<li> Content Development – Content is the core essence of a website. Designing the content schedule and including the appropriate keyword is not only important SEO but an
appealing educative content attracts consumers and reduces bounce rate.</li>
<li> Developing tailor campaign optimization (best blend of technical, content and authority optimization) to meet agreed goals.</li></ul>

<h3>SEO Planning</h3>
<p>The entire growth strategy is evenly distributed and at BrandStory SEO campaigns encompasses that we deliver our clients within the time frame. The planning is scheduled on the following parameters</p>
<ul><li> Key audit deliverables: Developing a progress report for every phase of the work</li>
<li> Technical Support: We work on strict deadline to ensure that the client is delivered as promised.</li>
<li> Content and authority optimization: Tactics are planned and executed to fulfil agreed strategic objectives. The content is closely monitored and the topics are strategically planned.</li></ul>

<h3>SEO Management</h3>
<p>Every search engine is regularly updating their algorithm. We at BrandStory assure that our clients do not stay behind in the race as we regularly examine and update our work, as per industry standards. Once audits are completed, we embark on rolling monthly campaign management. This will focus towards off-site activity (authority optimization), and on-site technical and content support.</p>
  `,
      'metaTitle': 'Search Engine Optimization Company in Bangalore ( SEO )',
      'metaDescription': 'Search engine optimization company in Bangalore, Search engine optimisation company in Bangalore, Search Engine Marketing Company in Bangalore',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Search Engine Optimization Company in Bangalore ( SEO )',
      'ogDescription': 'Search engine optimization company in Bangalore, Search engine optimisation company in Bangalore, Search Engine Marketing Company in Bangalore',
      'ogUrl': 'https://brandstory.in/services/search-engine-optimization-company-in-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Search engine optimization company in Bangalore, Search engine optimisation company in Bangalore, Search Engine Marketing Company in Bangalore',
      'twitterTitle': 'Search Engine Optimization Company in Bangalore ( SEO )'
    },

    {
      'url': 'social-media-marketing-company-in-bangalore',
      'img': '',
      'title': 'Social Media Marketing Services',
      'overview': '',
      'content': `<p>We provide expertise in design implementation providing a full range of <a href="https://brandstory.in/services/social-media-marketing-agency-bangalore/">social media marketing services</a>(SMM) bounding in popular social media platforms, content generation, creatives ideation, social branding techniques. Holding it all together by the seam,we manage your online reputation management for you to build profitable and promising relationships with your existing clients as well as potential leads.</p>
      <p>Maintaining an online presence requires caliber and consistency which you will find with our team comprising of a content strategist, who will generate as well as document your content marketing strategies a copywriter who help you build up on content, a social media marketing strategist who will guide you through an exclusively customized social media strategy and set of graphic designers who create and define your brand identity and establish it through recognizable and related creatives. People won’t know they need you, unless you tell them that.</p>
      <p>Another important segment that we counsel you on, is the right platform for your business. This entirely depends on who your target audience is and which social media platforms they utilize. Only brands with visual content work well on Instagram and Pinterest whereas companies reaching out to a more serious, career-oriented crowd will perform better on LinkedIn.</p>
      <p>Facebook is perfect for small-medium businesses and Twitter allows you to reach to your consumer base directly. <a href="https://brandstory.in/services/social-media-marketing-agency-bangalore/">Social media marketing</a> revolves around consistency, valuable content, availability and driving traffic to the desired destinations-landing page or website.</p>
      <p>Remember: You only have eight seconds to grab your viewer’s attention.</p>
      <h4>Social presence creation</h4>
      <p>Facebook, Twitter, Linkedin, Youtube, Instagram, Pinterest are all great social platforms. But do you know all platforms can’t sell any product or a great service? Often selling and high ROI expectations are expected out of social platform even before your brand stabilizes and attracts visitors.</p>
      <p>It is wise to choose platforms which amplify your brand’s value, purpose and significance through its philosophy.</p>
      <p>After a thorough understanding of your brand’s vision we create a social presence based on target audience persona, demographics and promotion budget spend.</p>
      <h4>Strategy</h4>
      <p>While identifying the social channel to be present in be the first step, having a strategy for engagement with the identified audience should be the second most important in your checklist. We develop strategies to grind level right from content, supporting visual, customer listening, product listing through targeting for the right reach and impressions.</p>
      <p>Understanding the impact, measuring the reactions and listening to the audience come as a part of testing and iterating our strategies to enhance and see what works better for your brand.</p>

      <h4>Targeted ADS</h4>
      <p>With great content comes great audience attraction. We help you understand the methods and means of how different platforms enable advertising beyond your organic followers. The objective of Ads could be vast. They help you increase your followers base, drive traffic to your websites, increase impressions on your every day content, increase app downloads, or simply increase the reach and spread of your post to a specific set of audience who could be your potential buyers.</p>
      <p>At BrandStory studio, bunch of creative geeks, help solve your design needs to develop creative content, copies and display them to the right set of audience and split the result to a comprehensive data that will help you plan further on your existing understanding of your brand’s social strengths.</p>
      <h4>Influencer marketing</h4>
      <p>Influencers can be a great catalyst to introduce your product or service to a larger follower base of similar interest. Essentially identifying the right influencer who has the credential, active profile and good social listening, relevant content conversation on their feed are ideal profiles that BrandStory keeps a track of and engages on behalf of your product.</p>
      <p>We track influencer’s feeds and introduce your product or service at the right given opportunity which can spike your reach, profile visits and impressions organically.</p>

      `,
      'metaTitle': 'Social Media marketing Company in Bangalore | online marketing',
      'metaDescription': 'Social Media Marketing Company in Bangalore, Social Media Optimization Company in Bangalore, Social Media Marketing Services in Bangalore, Social Media Marketing Agency in Bangalore, Top Social Media Marketing Companies in Bangalore, SMM Agency / Company in Bangalore.',
      'metaKeyword': 'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
      'ogTitle': 'Social Media marketing Company in Bangalore | online marketing',
      'ogDescription': 'Social Media Marketing Company in Bangalore, Social Media Optimization Company in Bangalore, Social Media Marketing Services in Bangalore, Social Media Marketing Agency in Bangalore, Top Social Media Marketing Companies in Bangalore, SMM Agency / Company in Bangalore.',
      'ogUrl': 'https://brandstory.in/services/social-media-marketing-company-in-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Social Media Marketing Company in Bangalore, Social Media Optimization Company in Bangalore, Social Media Marketing Services in Bangalore, Social Media Marketing Agency in Bangalore, Top Social Media Marketing Companies in Bangalore, SMM Agency / Company in Bangalore.',
      'twitterTitle': 'Social Media marketing Company in Bangalore | online marketing'
    },
    /*
        {
          'url':'social-media-marketing-agency-bangalore',
          'img':'',
          'title':'Social Media Marketing Company in Bangalore',
          'overview' : '',
          'content' : `
          <p>Social media is a big trend, probably the biggest trend in this current era. Exploiting social media to position your business across your target market is the real challenge. But most of the businesses are overwhelmed by this social media phenomenon and tend to lose out on their grip to leverage its potential. People have this vague restricted idea that social media is limited to social networking only like Facebook, Twitter etc.</p>
    <p>It is true that social media platforms like Facebook, Twitter, Instagram, Pinterest etc. are very effective ways to target and engage your audience/customers but social media is much more than that. It includes blogs, forums etc. too. Basically, social media encompasses all the platforms where you can have interaction with other individuals as well as businesses via some communication medium.</p>
    <p>Brandstory is the leading top and best social media agency in Bangalore. We will check your web design audit for products and services offered by you.&nbsp;Based on that, Our social media marketing team have well knowledge in finding right target audience in various social media channels, social media channels management, content creation, artwork creation, social media conversion/lead tracking, monthly report sharing etc.</p>
    <h2>Social Media Marketing Services in Bangalore</h2>
    <p>Brandstory will ensure that your business is properly placed in a social media marketplace, based on that we will devise result-oriented social media marketing strategy/techniques to increase your wider brand visibility and increased sales across social media platforms. As the top marketing companies in Bangalore, our social media marketing process includes creating business-oriented social profiles, social media community management, social media content creation &amp; distribution, social media advertising &amp; media services,&nbsp;social media strategy creation,&nbsp;full service&nbsp;social media management, landing page web design management,&nbsp;creates&nbsp;content for the post, managing social media page for search engine ranking and Influencer Marketing. Brandstory digital marketing company is also one of the best social media marketing companies in&nbsp;Bangalore, India. Our social media marketing company will devices, social media marketing strategies to find the right target audience on social networks platforms like Facebook, Twitter, LinkedIn, Pinterest, Instagram etc. We will also be managing social media accounts for you.</p>
    <div></div>
    <p>At Brandstory, we create ROI based social media marketing campaigns to interact with the community to gain new customers and make existing customer to return. We also increase your website traffic in both organic ways as well as by the paid ways, which will lead to more conversion or lead generation.</p>

    <p>BrandStory understands these complexities of Social Media and strives to be the best Social Media Marketing Company in Bangalore. Social media marketing involves managing the social media presence of a company across social media platforms. It requires the perfect blend of focus and attitude to keep putting up unique engaging content and constantly interacts with the target audience.</p>
    <p>As a leading Social media marketing company in Bangalore, we understand the mindset of the audience and our strategies are built from the ground up to maximize your social media results. We can provide effective guidance across the rapidly changing digital landscape and ensure that your company is tapping into the power of social media. We enable you to utilize this valuable opportunity to build your brand, develop trust, communicate with your target audience and build a community across social media platforms.</p>
    <p>There are companies who don’t even have the basic idea about what to do in the social media arena. And then, some companies have an idea of what they should be doing but lack the resources or don’t have the time. BrandStory Social Media Marketing Company in Bangalore presents you with the perfect solution to these problems as we believe in going that extra mile to provide you with the riches that social media can offer. Our social media marketing services are well known for their Bull’s eye approach and the success stories of our clients speak for themselves.</p>
    <p><b>Some of our social media offerings include:</b></p>
    <ul>
    <li >Social Strategizing</li>
    <li >Social Media Platform Selection &amp; Development</li>
    <li >Content Development, Curation, and Distribution</li>
    <li >Influencer Marketing</li>
    <li >Community Management</li>
    <li >Social Media Monitoring and Analytics</li>
    </ul>
    <p>If you are looking to solidify your presence in social media, BrandStory Social Media Marketing Company is at your service.</p>
    <h2>Social Media Marketing Packages and Reporting</h2>
    <p>Brandstory is the top-rated SMM Services Company in Bangalore. Our social media campaigns have to be executed with different social media marketing strategy with different SMM Packages. Our sales and marketing companies in Bangalore will clearly monitor your various social media page analytics information’s, based on that our social media marketing team will provide a goal or conversion report. As top digital marketing companies in Bangalore, we also provide a weekly report, monthly report, the page followers and likes report, monthly invoice report for paid social media marketing campaigns.</p>

          `,
          'metaTitle' : 'Social Media Marketing Company in Bangalore | Social Media Agencies',
          'metaDescription':'Social Media Marketing Company in Bangalore, Social Media Marketing Agencies in Bangalore, Top and Best Social Media Marketing Services Company/Agency in Bangalore',
          'metaKeyword':'Digital Marketing Company in Bangalore, Digital Marketing Agency in Bangalore, SEO Company in Bangalore, SEO Agency in Bangalore, Online Marketing Company in Bangalore, Internet Marketing Company in Bangalore, UI UX Design Company in Bangalore, Web Design Company in Bangalore',
          'ogTitle':'Social Media Marketing Company in Bangalore | Social Media Agencies',
          'ogDescription':'Social Media Marketing Company in Bangalore, Social Media Marketing Agencies in Bangalore, Top and Best Social Media Marketing Services Company/Agency in Bangalore',
          'ogUrl':'https://brandstory.in/services/social-media-marketing-agency-bangalore/',
          'ogSiteName' :'Digital Marketing Company in Bangalore | Digital Marketing Agency',
          'twitterDescription':'Social Media Marketing Company in Bangalore, Social Media Marketing Agencies in Bangalore, Top and Best Social Media Marketing Services Company/Agency in Bangalore',
          'twitterTitle' : 'Social Media Marketing Company in Bangalore | Social Media Agencies'
        },*/

    {
      'url': 'best-web-design-company-bangalore',
      'img': '',
      'title': 'Web Design Company in Bangalore',
      'overview': '',
      'content': `
      <p> Design trends often span across several years and even last for more than decades, but when it comes to  <i> Web design </i> , the trends keep changing and growing really quickly in this industry. In a digital savvy generation of brilliant and innovative Web designs, BrandStory strives to deliver the design that not only bears all the functional aspects and delivers the aesthetic appeal as well. Web design is essential aspect of Web Development and BrandStory is one of the best Web Design Company in Bangalore with excellent Web Design services. Our Web Design services look into the intricate details of Web Development to provide the aesthetic appeal to the overall website content. </p>
      <p> Choosing the <a href="https://brandstory.in/services/website-development-company-in-bangalore/">Best Web Design Company in Bangalore</a> can be a complicated task with so many players in the market, but we ensure that our website designs adds value to the website the way that gives you an individualistic stand out of the crowd website across the innumerable websites over the Internet. Our brilliant web designs are characterized by the following features: </p>
      <ul >
      <li> Intuitive structural design and clarity of site navigation. </li>
      <li> Clarity of projection of the business objective customized as per demands </li>
      <li> Brand essence and persona intact and designed with relatable colors and designs </li>
      <li> Interactive and informative medium to extensively understand the objectives. </li>
      <li> Smart User Experience Design to attract, engage and drive audiences </li>
      <li> Eminent focus on individual elements to fulfill the overall design requirements. </li>
      <li> Rich and subtle animations to gain attention </li>
      <li> Equal importance to the looks as well as the functioning of the website </li>
      <li> Budget pricing with high-quality assurance </li>
      <li> World class client service and customer satisfaction guaranteed </li>
      <li>On-time delivery of projects </li>
      </ul>
      <p>Our website designs tend to fulfill that significant requirement for any website of being interactive with the help of our experienced team of UI/UX web designers. We provide support for developing customized sites based on the client’s requirements and strive to maintain the operations and the look and feel of the website to keep the engagement level of the website with the audiences at maximum. Our web design solutions are complete and they guarantee effective customer engagement and relay the business goals in concordance with the needs of the target audience.</p>
      <p>Brand Story is the Best <a href="https://brandstory.in/services/website-development-company-in-bangalore/">Web Design Company in Bangalore</a> and it is popular for content-rich, graphics specific and visually appealing web designs. Our web designing experts integrate interactive designs in the wireframes to ensure visually pleasing website designs to keep the customers engaged. We believe in Responsive web designing both for desktops and mobiles to make sure that the website is responsive to the fast-paced tech-savvy individuals. We believe in smart technology and thereby our strategy depicts a story that reflects your brand image and validates your offerings, products as well as services.</p>
      <p>Brand Story has established itself as one of the best Web Design Company in Bangalore within a short period of time. We design and build websites that fulfill your needs and justifies your budget expenditure. Our experienced team will manage your online presence as our primary field of expertise is <a href="https://brandstory.in/orm-company-bangalore-india/">Online Reputation Management</a> throughout the digital space and keep your website up to date with ever-changing user behavior.<br>
      For more information on our services and other offerings, send an email to  <a href="mailto:vaishnavi@brandstory.in">vaishnavi@brandstory.in</a> or call at +91 9901663463.</p>

      `,
      'metaTitle': 'Best Web Design Company Bangalore | website design in Bangalore',
      'metaDescription': 'Best web design company in Bangalore, website design company in Bangalore, Best web design and web development in Bangalore India',
      'metaKeyword': 'Best web design company in Bangalore, website design company in Bangalore, Best web design and web development in Bangalore India',
      'ogTitle': 'Best Web Design Company Bangalore | website design in Bangalore',
      'ogDescription': 'Best web design company in Bangalore, website design company in Bangalore, Best web design and web development in Bangalore India',
      'ogUrl': 'https://brandstory.in/services/best-web-design-company-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Best web design company in Bangalore, website design company in Bangalore, Best web design and web development in Bangalore India',
      'twitterTitle': 'Best Web Design Company Bangalore | website design in Bangalore'
    },

    {
      'url': 'digital-marketing-company-bangalore',
      'img': '',
      'title': 'Digital Marketing Company Bangalore',
      'overview': '',
      'content': `
      <p> In this current scenario, ignoring <a href="https://brandstory.in/">Digital marketing</a> is like owning a business but not telling anyone about it. And in a place like Bangalore, the hub of IT companies and startups in India, digital marketing has become one of the most important necessities for any business. We at Brand Story is one of the leading Digital Marketing Company in Bangalore striving to help the clients achieve popularity and business across the digital platform. We are a one-stop complete Digital solutions company offering full Digital transformation for all companies, both existing corporates and SMEs as well as new startups. With a multi-dimensional experience of working with top clients worldwide, our team of dynamic and skillful individuals is committed to providing you with the holistic experience of seamless, effective and integrated growth. </p>
<p> We have a reputed client base from all over the country and also from Singapore and Middle East countries. As a leading Digital Marketing Company in Bangalore, we are specialized in all kinds of offerings related to Digital marketing which includes <a href="https://brandstory.in/services/website-development-company-in-bangalore/">Web Design and Development</a>, Search Engine Optimization (SEO), Social Media Marketing (SMM), Email marketing and many more.  </p>
<p> Why is digital marketing important and what services do we provide? </p>
<p><b>Search Engine Optimization</b></p>
<p> If you want to appear in Google search results, then you need to invest in SEO i.e. <a href="https://brandstory.in/seo-company-bangalore/">Search Engine Optimization</a>. BrandStory Digital Marketing Company in Bangalore has a brilliant SEO program which provides opportunities for brands to create acquisitions (sales, leads, inquiries etc), and help consumers engage with your brand, building intent and driving people further along their user journey towards that valuable First Moment of Truth.  </p>
<p> With rapid evolution across search and social environments by Google, Bing, Yahoo and other search engines, BrandStory’s approach to SEO is built on a unique blend of best practice, clear process and ingrained innovation, providing maximum value and measurable results.  </p>
<p><b>Social Media Marketing</b></p>
<p> Social media is a big trend, probably the biggest trend in this current era. Exploiting social media to position your business across your target market is the real challenge and BrandStory Digital Marketing Company understands these complexities of Social Media and strives to provide the best value with smart, engaging and genuinely useful digital content, deployed over core platforms such as Facebook, Twitter, Google+ and Pinterest. <a href="https://brandstory.in/services/social-media-marketing-company-in-bangalore/">Social media marketing</a> requires the perfect blend of focus and attitude to keep putting up unique engaging content and constantly interact with the target audience.If you want to involve your potential customer at a more casual and personal level, SMM is the key. </p>
<p><b>PPC (Pay-per-click) Campaigns</b></p>
<p> Creating successful paid search campaigns is an art and it takes a lot of creativity to design compelling ads that drive customers to visit your website. A team of creative and analytically sound professionals is a necessity to ensure that the ads appear at the right place and is enhanced by a deep strategic knowledge for developing a relevant landing environment. </p>
<p> Brandstory has been doing paid search successfully since the paid search began. Our campaigns are self-financing, scalable and get results for our clients. We design the map and build the roads to lead our clients and their customers in the right direction. <a href="https://brandstory.in/pay-per-click-ppc-services-in-bangalore/">Pay Per Click (PPC)</a> campaigns provide the opportunity to generate acquisitions (sales, leads, inquiries etc), in volume, at a fixed Cost Per Acquisition (CPA). </p>
<p><b>Online reputation management </b></p>
<p> ORM is all about establishing yourself as a credible, authoritative and relevant resource across the digital arena. Whenever there is a request across the search engine for any information related to you or your company, it is important to make sure that only useful and positive results come from the top search results. ORM is all about controlling what shows up when someone Googles about you. ORM is a big part of Digital marketing and BrandStory Digital Marketing Company in Bangalore are well known for being specialists in <a href="https://brandstory.in/orm-company-bangalore-india/">Online Reputation Management.</a> </p>
<p> We will promote all types of positive content to the top of search results and push down all the unwanted content that includes negative, irrelevant and failures to ensure a positive brand image. We can support or fully manage your presence across all key social media platforms. We use insight gained from listening, and content guided by data, to build advocacy across Facebook, Twitter, Google+, blogs and across the social landscape. For example, We can manage your Facebook environment, provide content, and respond to inquiries made on your Facebook page, moderate comments and responses. We can also act as the first line of customer service across the social networks. We can alert you when people are talking about your products and when you need to know about it. </p>
<p> Digital marketing is a targeted means to drive awareness and market your offerings which are easily affordable and can be measured with time, which makes it so crucial for businesses. Our services are aligned with the market trend to ensure that there is a semantic relationship consistent to deliver results across digital space. Digital marketing is not just limited to companies solely dedicated to e-commerce. It is not just about selling your products and services online, but it has more to do with selling the idea of your products and service and creating a transparent and interactive medium to communicate to the target customers and audience.  </p>
<p> As a leading Digital marketing company in Bangalore, BrandStory understands how to manifest and diversify the offerings of the businesses using strategies that are built from ground up to maximize your presence across the digital space. Our prime offering as a Digital marketing company in Bangalore is complete Online reputation Management. We devise an effective marketing plan to manage the presence and deliverability of your products/services across the digital platform and enhance your accessibility to your target audience across the rapidly changing digital landscape. We enable you to utilize this valuable opportunity to build your brand, develop trust, communicate with your target audience and build a community across social media platforms.  <br>
 We help to take your business to the next level. So, feel free to contact us via email to  <a href="mailto:vaishnavi@brandstory.in"> vaishnavi@brandstory.in </a>  or call +91 9901663463. </p>
      `,
      'metaTitle': 'Top Digital Marketing Company Bangalore | Digital Marketing Agency',
      'metaDescription': 'Brandstory as a top Digital Marketing Company Bangalore, we built digital marketing like SMM(Social Media Marketing), Online marketing, Email Marketing.',
      'metaKeyword': 'Brandstory as a top Digital Marketing Company Bangalore, we built digital marketing like SMM(Social Media Marketing), Online marketing, Email Marketing.',
      'ogTitle': 'Top Digital Marketing Company Bangalore | Digital Marketing Agency',
      'ogDescription': 'Brandstory as a top Digital Marketing Company Bangalore, we built digital marketing like SMM(Social Media Marketing), Online marketing, Email Marketing.',
      'ogUrl': 'https://brandstory.in/services/digital-marketing-company-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Brandstory as a top Digital Marketing Company Bangalore, we built digital marketing like SMM(Social Media Marketing), Online marketing, Email Marketing.',
      'twitterTitle': 'Top Digital Marketing Company Bangalore | Digital Marketing Agency'
    },

    {
      'url': 'growth-hacking-company-in-bangalore-india',
      'img': '',
      'title': 'Growth hacking Company in Bangalore',
      'overview': '',
      'content': `
      <p>Growth hacking is a perfect blend of Technology and Marketing with an essence of Intelligence. Core marketing is disrupted by growth hacking, where you can attract potential consumers at a lower cost and enormous reach. All it needs is to master the art of creativity and apply the same with the technical and marketing knowledge.</p>
<p>The benefit of using the techniques is, you can test, measure, scale and track every individual campaign using digital tools unlike traditional marketing where the measurement can be done only for the entire campaign and promotion. It helps you to get an insight and deploy resources to the areas where the company is being benefited the most.</p>
<p>Product Market Fit is the ideal state of achievement where the product and the consumers are in perfect sync with one another. In is an ongoing process where the business or business model needs to regular update and change until they acquire consumers will and positive response from the people who follow them. Growth hacking ensures that your business is focussed on resolving consumers real life problems, by delivering real life solution rather than a hypothetical assurances, no matter how many times your business delivery platform needs refinement in the process.</p>
<h2>Exploring the Growth Hack for your business</h2>
<p>In traditional marketing where business focus on masses and not specific targets, growth hacking tools and methodologies focuses on specific targets, and that is what we aspire to achieve for our clients. Targeting the most potential segment and getting the maximum conversion. This involves trying and testing various growth hacking methods and evaluating the results using growth hacking tools to obtain the most prominent approach for your business, satisfying the growth.</p>
<h2>Retention and Optimization: 360° Approach</h2>
<p>Once we begin with an activity we need to conclude the same with positive results and the loop should continue perpetually, and this is what growth hacking tools master in. We undertake measures to monitor the conversion rate and also keep a watch on the visitor’s behaviour to understand their psychology. The focus is also on retaining and enriching consumer experience and create lifelong loyalists.</p>
<h2>Evolving and added Service</h2>
<p>Growth hacking is an ever-going methodology and technique, One needs to keep updating as per the industry standards. More than keeping up with the race it’s all about exploring and going beyond the race in search of finding the “next big thing”. We have an expert team who are dedicated and motivated to find the "next big thing" and help your business "Be the First" to receive the service.</p>
<h2 class="text-center">Your glossary to growth hack</h2>
<div class="row">
<div class="col-md-4 col-sm-12"><h3>Sales Funnel</h3>
<p>Sales Funnel is a series of steps to find potential leads and convert most of them, not only one time consumers but a brand loyalist. The funnel open at prospecting a client to inquiring and eventually setting a proposal for sale attracting new customers.  A few of popular techniques used are:</p>
<ul><li>Discounts</li>
<li>Reward</li>
<li>Special offers</li></ul>
<p>The entire process is dedicated to calculate and quantify the number of customers at every level of sale.</p>
</div>

<div class="col-md-4 col-sm-12"><h3>Stickiness</h3>
<p>Stickiness is nothing but creating a positive addiction towards your product or offerings. It is the measure of how likely the consumers buys your product and then rebuys from your business over and over again. According to top analysist Chip and Dan Hearth, sticky idea and product trend to be simple, unexpected and credible with concrete details, an emotional undertow and a memorable story line.</p>

<p>When consumer sign-up for your product or service, how often they use it, how often they select but do not make a final purchase, Growth hacking helps us to establish a measure to analyse the same and develop appropriate actions plan.</p>
</div>

<div class="col-md-4 col-sm-12"><h3>Bounce rate</h3>
<p>Bounce rate is an objective measure of your website or application stickiness, do visitors often skip the site and leave immediately or they spend time to explore the offerings. If the bounce rate is high you need to ask yourself the following questions:</p>

<ul><li>Is the website design unattractive?<li>
<li>Are you targeting the wrong users?</li>
<li>Are you promoting at the wrong place?</li></ul>
<p>These are just a few basic questions, apart from this many other aspects are considered while evaluating Bounce rate. However the conclusion is the same if your answer is “Yes” for any of the above question, or any other reason resulting in visitors skipping your website you need to redesign the entire Product Marketing mix model.</p>
</div>

<div class="col-md-4 col-sm-12"><h3>Cohort analysis</h3>
<p>Cohort analysis is a method where we use data from web application gathered using growth hacking tools and segregate them into related groups, rather than looking and analysing them as one whole data set. It helps us to analyse and look into every consumer group separately for better understanding and designing of promotion offers targeting every specific group individually.</p>
</div>

<div class="col-md-4 col-sm-12"><h3>Conversion rate</h3>
<p>It is the count of number of people who visit and view your offerings and eventually complete the process with the desired action (register, purchase, email, share, Promote etc.). Growth hacking tools helps to closely monitor the conversion rate, as this is the goal for the entire process. Calculating the percentage of leads converted at the end of the day helps us to verify the implementation of various strategies and decide whether it’s a good investment or not.</p>
</div>

<div class="col-md-4 col-sm-12"><h3>Growth hacker</h3>
<p>A growth hacker is an individual who has understood and mastered the art of growing the business by means of marketing, technology and creative intelligence. Their goal is to develop marketing innovative ideas and use effective tools to “attract”, “convert” and “retain” consumers. They apply the principle of hypothesising, testing and iteration of different versions, and at the end they develop an effective and efficient way of growing the business.</p>
</div>

<div class="col-md-4 col-sm-12"><h3>Minimum viable product</h3>
<p>Minimum viable product is an early version of the product that allows business to gather relevant data about their prospective consumers in limited time and effort. It helps the company to identify the shortcoming of the product by analysing the consumer response. In the process the business do not launch the final product but let the product evolve with the consumer’s requirement.</p>
</div>

<div class="col-md-4 col-sm-12"><h3>Pivot</h3>
<p>Pivot as per definition is a “structured course correction designed to test new fundamental hypothesis about product, strategy and engine of growth”. It basically involves restructuring or changing your product as per consumers demand or response. Some product may not be accepted in the market as they exist in the current form but might be highly successful if they understand the consumer and change accordingly.</p>
</div>

<div class="col-md-4 col-sm-12"><h3>Product Market Fit</h3>
<p>Product Market Fit is the ideal state of achievement where the product and the consumers are in perfect sync with one another. In is an ongoing process where the business or business model needs to regular update and change until they acquire consumers attention and positive response from the people who follow them. Growth hacking ensures that your business is focused on resolving consumers real life problems, no matter how many times your business platform needs a refinement in the process.</p>
</div>

<div class="col-md-4 col-sm-12"><h3>Publicity</h3>
<p>It is an approach to attract and grab maximum attention in short span of time. Publicity includes talking or trying something new to get an edge over the competitors and get a way into consumers mind. It helps to disrupt the existing industry and viral the new offering. Ola for example disrupted the entire taxi industry with its stunts and publicity, they provided “Ola boats” during Chennai flood in the year 2015. Such stunts grab public immediate attention and help the business grow exponentially.</p>
</div>

<div class="col-md-4 col-sm-12"><h3>A/B Testing</h3>
<p>A/B testing which is often referred as “split testing” is the method where we test and compare two different versions of the same website to choose the best alternative for the business. Publishing both the version for the web page and allowing visitors choose which one is the best alternative, A or B by gathering data while they use both the versions. Quantifying your results will give you an added advantage over instinct.</p>
</div>

<div class="col-md-4 col-sm-12"><h3>Bootstrapping</h3>
<p>Also referred as “self-stating process” is a situation where entrepreneur self-fund the business rather than seeking for investors. In the era where every company is heavily investing on marketing, especially start-ups who are in the race to attract investors and venture capitalists, Bootstrapping is an alternative solution. It aims at developing a process where the business activity including marketing campaign is self-sufficient and pays for itself or runs on a very low budget. Every single penny invested assuring a return.</p>
</div>

<div class="col-md-4 col-sm-12"><h3>Vanity metrics</h3>
<p>Vanity metrics are the metric that incorporate deceiving superficial data which can help your business boast in the community. It includes data like number of people visiting your website, number of website click. However it ignores the essential factors like bounce rate, conversion rate etc. which the business should actually look for. But as mentioned above it can be used to boast and popularise the website by boosting deceiving numbers. Be careful how you use this data.</p>
</div>

<div class="col-md-4 col-sm-12"><h3>Viral loop</h3>
<p>A Viral loop is a chain of action from consumers noticing your product and service for the first time to using and eventually sharing experience of the same with others, suggesting and endorsing the product and service thereby your company.</p>
</div>

</div>
`,
      'metaTitle': 'Growth hacking Company in Bangalore | Online Growth Hacking',
      'metaDescription': 'Growth Hacking Company , online Growth hacking Agency In Bangalore, Growth Hacking company in Bangalore India, Best Growth Hacking Agency',
      'metaKeyword': 'Growth Hacking Company , online Growth hacking Agency In Bangalore, Growth Hacking company in Bangalore India, Best Growth Hacking Agency',
      'ogTitle': 'Growth hacking Company in Bangalore | Online Growth Hacking',
      'ogDescription': 'Growth Hacking Company , online Growth hacking Agency In Bangalore, Growth Hacking company in Bangalore India, Best Growth Hacking Agency',
      'ogUrl': 'https://brandstory.in/services/growth-hacking-company-in-bangalore-india/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Growth Hacking Company , online Growth hacking Agency In Bangalore, Growth Hacking company in Bangalore India, Best Growth Hacking Agency',
      'twitterTitle': 'Growth hacking Company in Bangalore | Online Growth Hacking'
    },

    {
      'url': 'online-brand-management',
      'img': '',
      'title': 'Online brand management',
      'overview': '',
      'content': `
      <p> Online brand management is a critical aspect of digital marketing and it acts as the focal point for all marketers. The success or failure of most businesses are guided by the management of the brand across the online platform and it gives a guided perspective on customers’ decision-making process. So, what exactly is <a href="https://brandstory.in/services/online-branding-identity/">Online brand management</a>? It is all about   establishing yourself as a credible, authoritative and relevant resource across the digital arena. It involves monitoring and guiding the digital presence to carefully project only the necessary and positive aspects of the brand across the online platform.  </p>
      <p> It’s all-encompassing – including any and all avenues for public perception, such as your website, social reach, third-party articles, online reviews, search engine results and anywhere you can find online conversations. </p>
      <p> Because there are so many factors in play, managing your online brand is extremely important. A study by the market research firm Ipsos found that 78% of consumers are influenced by online research. Get a handle on how your audience perceives your brand, products and services. By managing your online brand, you can leave a positive lasting impression and drive brand growth and customer reach. </p>
      <p> BrandStory believes in making a strong connect with the customers and business networks and forge a bond through clear and precise communication about the company, their brand, corporate culture, strong corporate ethics and values, corporate social responsibility towards a good cause and for the betterment of the community.  </p>
      <p> We do an in-depth study on the brand’s attributes like its theme, concept, about the company, its functions, target audience, how it can be achieved and much more. As per the client’s requirement, we prepare a strategy to re-invent, innovate and propagate the brand. We plan competitive positioning of the brand and develop testimonials. Content is created for media publicity, tie-ups, digital branding, advertising and marketing campaigns. </p>
      <p> Creating an identity of the brand is the integral aspect and it’s majorly done through a unique logo with a different color palette, font, layout and a slogan. We help the client in conceptualizing and propagating the identity of the company or the brand by making an appropriate plan for the visual promotion of their logo and slogan. </p>

`,
      'metaTitle': 'Online Brand Engagement and Management | Online Brand Management',
      'metaDescription': 'Online brand management, Online Reputation Management (ORM), Brand Management, Online branding management, Online Lead generation, Brand marketing. Online Brand Creation.',
      'metaKeyword': 'Online brand management, Online Reputation Management (ORM), Brand Management, Online branding management, Online Lead generation, Brand marketing. Online Brand Creation.',
      'ogTitle': 'Online Brand Engagement and Management | Online Brand Management',
      'ogDescription': 'Online brand management, Online Reputation Management (ORM), Brand Management, Online branding management, Online Lead generation, Brand marketing. Online Brand Creation.',
      'ogUrl': 'https://brandstory.in/services/online-brand-management/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Online brand management, Online Reputation Management (ORM), Brand Management, Online branding management, Online Lead generation, Brand marketing. Online Brand Creation.',
      'twitterTitle': 'Online Brand Engagement and Management | Online Brand Management'
    },

    {
      'url': 'seo-agency-in-bangalore',
      'img': '',
      'title': 'SEO Agency in Bangalore',
      'overview': '',
      'content': `
      <p> Whenever you are searching for something on Google or Bing or any other search engine, most users tend to visit those sites which are ranked higher on the search engines as in which appear in the 1  st   two pages of the search engine. So, it becomes essential to have a high volume of traffic on your website, which requires you to concentrate on your website’s Search engine ranking. BrandStory aims at helping clients to provide complete digital solutions as per their requirements. As one of the best  SEO Agency in Bangalore , we make sure that our clients’ website gets noticed as per the SEO Guidelines of different search engines with the help of our Search Engine Optimization efforts. </p>
<p> With the rapid evolution in Search engine algorithms, BrandStory’s approach to SEO as the best  <b>SEO Agency in Bangalore</b>  is built on a unique blend of best practice, clear process and ingrained innovation, providing maximum value and measurable results. We have a dedicated team using white hat tools to organically increase your SEO rating and ensure it’s on the first page of the search engine. </p>
<p> BrandStory,  <b>SEO Agency in Bangalore</b>  believe that no two websites are same and hence using common strategies for all would do no good for their optimization across the search engine. Hence, we make it a point to develop and use the right Search Engine Optimization strategies specific to your particular brand. We at BrandStory are dedicated to delivering the best SEO results for our clients which requires time and effort to understand their business requirements and thereby optimize the web content to make it search engine friendly. With these ideas, we develop an SEO strategy that would provide top rankings, maximum traffic and good revenue. </p>
<p> Search Engine Optimization is all about how interactive your website is with respect to the search engines. SEO is all about finding your website on the World Wide Web with the right keywords on the right search page list. Our team of SEO Analysts devises an organized plan of action by researching, analyzing and evaluating your Search engine listing position as per latest Google algorithm updates. Then, they benchmark against the existing top rankers and execute the plan to enhance the visibility of a website and reach the top in the search engine results. </p>
<p> Our approach as the <a href="https://brandstory.in/seo-company-bangalore/">best SEO Agency in Bangalore</a> is as follows: </p>
<p><b>Keyword Research:</b></p>
<p> The most important task is to find how consumer search for your industry, and that’s where keywords come to play. Identifying the most apt keyword across search engine platforms relevant to the industry is only beginning of the work. Keywords are evolving process and are affected by market shift and consumer demand. Ensuring the research is apt and regularly updated is our expertise. </p>
<p><b>Content Optimization:</b></p>
<p> SEO content audit, then on-going content support. It involves the creation of creative content with respect to the business, it not only draws visitors but also influences the SEO rating influencing the business growth. The major activities of content include: </p>
<ul>
<li > Blog writing </li>
<li > Videos </li>
<li > Infographic exemplars </li>
<li > Articles and public posts </li>
<li > Case studies and guided book </li>
</ul>
<p> We ensure that every content is original and there are no copyright or plagiarism claims, our content is educative and beautifully written in first hand. Content optimization might not directly affect the sales but it adds to the brand value and increases the <a href="https://brandstory.in/services/online-presence-creation/">online presence</a> of the business making it more trustworthy, and the most important SEO rating. </p>
<p><b>Technical Optimization</b></p>
<p> SEO technical audit to identify any obstacle at set up phase, plus on-going technical support. Technical optimization consists of two major activities </p>
<ul>
<li ><b>On-site SEO</b>  –This involves planning, research and implementation during the building of the website. It is essential for all websites and is a prerequisite for all aspects of SEO. </li>
<li ><b>Off-site SEO</b>  – This involves acquiring links to give an added advantage over your competitor to ensure that the website is highly optimized. It includes link building, blogging, guest articles etc. </li>
</ul>
<p><b>Authority Optimization</b></p>
<p> Authority audit, with a monthly activity designed to enhance the authority of your content both on-site and across the internet. The focus is to discover related and most frequently used keywords pertaining to the industry and regularly updating the business online platform not only to assure the best SEO rating but also generate the right traffic for the website.  </p>
<p> The Optimization is phased as follows: </p>
<ul>
<li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEO campaign strategy and planning (1-2 months) </li>
<li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEO campaign management (2  nd   month onwards, then on-going) </li>
</ul>
<p><b>SEO Strategy</b></p>
<p> SEO Strategy is a holistic approach where we plan, design and layout the complete schedule of activities to be carried out for improving the website rating. Research processes underpin the fundamentals of our strategic focus under which main highlighting areas are: </p>
<ul>
<li ><b>Keyword</b>  – Discovering the relevant and most searched keywords related to the business. &nbsp; </li>
<li ><b>Content Development</b>  – Content is the core essence of a website. Designing the content schedule and including the appropriate keyword is not only important SEO but an appealing educative content attracts consumers and reduces bounce rate. </li>
<li ><b>Developing tailor-made campaign optimization</b>  (best blend of technical, content and authority optimization) to meet agreed goals. </li>
</ul>
<p><b>SEO Planning</b></p>
<p> The entire growth strategy is evenly distributed and at BrandStory SEO campaigns encompasses that we deliver our clients within the time frame. The planning is scheduled on the following parameters </p>
<ul>
<li ><b>Key audit deliverables</b> : Developing a progress report for every phase of the work </li>
<li ><b>Technical Support:</b>  We work on strict deadline to ensure that client is delivered as promised. </li>
<li ><b>Content and authority optimization:</b>  Tactics are planned and executed to fulfill agreed strategic objectives. The content is closely monitored and the topics are strategically planned. </li>
</ul>
<p><b>SEO Management</b></p>
<p> Every search engine is regularly updating their algorithm. We at BrandStory assure that our clients do not stay behind in the race as we regularly examine and update our work, as per industry standards. </p>
<p> Once audits are completed, we embark on rolling monthly campaign management. This will focus towards off-site activity (authority optimization), and on-site technical and content support. </p>
<p> So, if you are looking for <a href="https://brandstory.in/seo-company-bangalore">SEO Agency in Bangalore</a>, BrandStory is the place to be. Feel free to contact us! </p>
`,
      'metaTitle': 'SEO Agency in Bangalore | SEO Company in Bangalore | Brandstory',
      'metaDescription': 'SEO Agency in Bangalore, Best seo company in Bangalore , Top SEO Agency in Bangalore, Get guarantee SEO results on 60 days, SEO Company in Bangalore, India.',
      'metaKeyword': 'SEO Agency in Bangalore, Best seo company in Bangalore , Top SEO Agency in Bangalore, Get guarantee SEO results on 60 days, SEO Company in Bangalore, India.',
      'ogTitle': 'SEO Agency in Bangalore | SEO Company in Bangalore | Brandstory',
      'ogDescription': 'SEO Agency in Bangalore, Best seo company in Bangalore , Top SEO Agency in Bangalore, Get guarantee SEO results on 60 days, SEO Company in Bangalore, India.',
      'ogUrl': 'https://brandstory.in/services/seo-agency-in-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'SEO Agency in Bangalore, Best seo company in Bangalore , Top SEO Agency in Bangalore, Get guarantee SEO results on 60 days, SEO Company in Bangalore, India.',
      'twitterTitle': 'SEO Agency in Bangalore | SEO Company in Bangalore | Brandstory'
    },

    {
      'url': 'seo-company-in-bangalore',
      'img': '',
      'title': 'SEO Company in Bangalore',
      'overview': '',
      'content': `
      <p> Whenever you are searching for something on Google or Bing or any other search engine, most users tend to visit those sites which are ranked higher on the search engines as in which appear in the 1  st   two pages of the search engine. So, it becomes essential to have a high volume of traffic on your website, which requires you to concentrate on your website’s Search engine ranking. BrandStory aims at helping clients to provide complete digital solutions as per their requirements. As one of the best  SEO Company in Bangalore , we make sure that our clients’ website gets noticed as per the SEO Guidelines of different search engines with the help of our Search Engine Optimization efforts. </p>
      <p> With the rapid evolution in Search engine algorithms, BrandStory’s approach to SEO as the best  SEO Company in Bangalore  is built on a unique blend of best practice, clear process and ingrained innovation, providing maximum value and measurable results. We have a dedicated team using white hat tools to organically increase your SEO rating and ensure it’s on the first page of the search engine. </p>
      <p> BrandStory,  <a href="https://brandstory.in/seo-company-bangalore"><em>SEO Company in Bangalore</em></a>  believe that no two websites are same and hence using common strategies for all would do no good for their optimization across the search engine. Hence, we make it a point to develop and use the right Search Engine Optimization strategies specific to your particular brand. We at BrandStory are dedicated to delivering the best SEO results for our clients which requires time and effort to understand their business requirements and thereby optimize the web content to make it search engine friendly. With these ideas, we develop an SEO strategy that would provide top rankings, maximum traffic and good revenue. </p>
      <p> Search Engine Optimization is all about how interactive your website is with respect to the search engines. SEO is all about finding your website on the World Wide Web with the right keywords on the right search page list. Our team of SEO Analysts devises an organized plan of action by researching, analyzing and evaluating your Search engine listing position as per latest Google algorithm updates. Then, the benchmark against the existing top rankers and execute the plan to enhance the visibility of a website and reach the top in the search engine results. </p>
      <p> Our approach as an  SEO Company in Bangalore  is as follows: </p>
      <p><b>Keyword Research</b></p>
      <p> The most important task as an <a href="https://brandstory.in/seo-company-bangalore">SEO Company</a> is to find how consumer search for your industry, and that’s where keywords come to play. Identifying the aptest keyword across search engine platforms relevant to the industry is only beginning of the work. Keywords are evolving process and are affected by market shift and consumer demand. Ensuring the research is apt and regularly updated is our expertise. </p>
      <p><b>Content Optimization</b></p>
      <p> SEO content audit, then on-going content support. It involves creation of creative content with respect to the business, it not only draws visitors but also influences the SEO rating influencing the business growth. The major activities of content include: </p>
      <ul>
      <li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blog writing </li>
      <li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Videos </li>
      <li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Infographic exemplars </li>
      <li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Articles and public posts </li>
      <li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Case studies and guided book </li>
      </ul>
      <p> We ensure that every content is original and there are no copyright or plagiarism claims, our content is educative and beautifully written in first hand. Content optimization might not directly affect the sales but it adds to the brand value and increases the <a href="https://brandstory.in/services/online-presence-creation/">online presence</a> of the business making it more trustworthy, and the most important SEO rating. </p>
      <p><b>Technical Optimization</b></p>
      <p> SEO technical audit to identify any obstacle at set up phase, plus on-going technical support. Technical optimization consists of two major activities </p>
      <ul>
      <li ><b>On-site SEO</b>  –This involves planning, research and implementation during the building of the website. It is also essential for all websites and is a prerequisite for the second aspect of SEO. </li>
      <li ><b>Off-site SEO</b>  – This involves acquiring links to give an added advantage over your competitor to ensure that the website is highly optimized. It includes link building, blogging, guest articles etc. </li>
      </ul>
      <p><b>Authority Optimization</b></p>
      <p> Authority audit, with a monthly activity designed to enhance the authority of your content both on-site and across the internet. The focus is to discover related and most frequently used keywords pertaining to the industry and regularly updating the business online platform not only to assure the best SEO rating but also generate the right traffic for the website.  </p>
      <p> The Optimization is phased as follows: </p>
      <ul>
      <li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEO campaign strategy and planning (1-2 months) </li>
      <li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEO campaign management (2  nd   month onwards, then on-going) </li>
      </ul>
      <p><b>SEO Strategy</b></p>
      <p> SEO Strategy is a holistic approach where we plan, design and layout the complete schedule of activities to be carried out for improving the website rating. Research processes underpin the fundamentals of our strategic focus under which main highlighting areas are: </p>
      <ul>
      <li ><b>Keyword</b>  – Discovering the relevant and most searched keywords related to the business. &nbsp; </li>
      </ul>
      <ul>
      <li ><b>Content Development</b>  – Content is the core essence of a website. Designing the content schedule and including the appropriate keyword is not only important SEO but an appealing educative content attracts consumers and reduces bounce rate. </li>
      <li ><b>Developing tailor-made campaign optimization</b>  (the best blend of technical, content and authority optimization) to meet agreed goals. </li>
      </ul>
      <p><b>SEO Planning</b></p>
      <p> The entire growth strategy is evenly distributed and at BrandStory, SEO campaigns ensure that we deliver our clients within the time frame. The planning is scheduled for the following parameters: </p>
      <ul>
      <li ><b>Key audit deliverables</b> : Developing a progress report for every phase of the work </li>
      </ul>
      <ul>
      <li ><b>Technical Support:</b>  We work on strict deadlines to ensure delivery to the client as promised. </li>
      <li ><b>Content and authority optimization:</b>  Plans are tactically executed to fulfil agreed strategic objectives. The content and topics are closely monitored and strategically planned. </li>
      </ul>
      <p><b>SEO Management</b></p>
      <p> Search engines keep updating their algorithms. We at BrandStory ensure that our clients do not stay behind in the race by constantly examining and updating our work, as per industry standards. </p>
      <p> Once audits are completed, we embark on rolling monthly campaign management. This will focus towards off-site activity (authority optimization), and on-site technical and content support. </p>
      <p> So, if you are looking for <a href="https://brandstory.in">SEO Company in Bangalore</a>, BrandStory is the place to be. Feel free to contact us! </p>
`,
      'metaTitle': 'SEO Company in Bangalore | Top SEO Agency in Bangalore Brandstory',
      'metaDescription': 'SEO Company in Bangalore, Top SEO Company in Bangalore, SEO Services in Bangalore, SEO Agency in Bangalore, Top 10 SEO Company in Bangalore, Best SEO Company in Bangalore.',
      'metaKeyword': 'SEO Company in Bangalore, Top SEO Company in Bangalore, SEO Services in Bangalore, SEO Agency in Bangalore, Top 10 SEO Company in Bangalore, Best SEO Company in Bangalore.',
      'ogTitle': 'SEO Company in Bangalore | Top SEO Agency in Bangalore Brandstory',
      'ogDescription': 'SEO Company in Bangalore, Top SEO Company in Bangalore, SEO Services in Bangalore, SEO Agency in Bangalore, Top 10 SEO Company in Bangalore, Best SEO Company in Bangalore.',
      'ogUrl': 'https://brandstory.in/services/seo-company-in-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'SEO Company in Bangalore, Top SEO Company in Bangalore, SEO Services in Bangalore, SEO Agency in Bangalore, Top 10 SEO Company in Bangalore, Best SEO Company in Bangalore.',
      'twitterTitle': 'SEO Company in Bangalore | Top SEO Agency in Bangalore Brandstory'
    },

    {
      'url': 'seo-services-bangalore',
      'img': '',
      'title': 'SEO Services Bangalore',
      'overview': '',
      'content': `
      <p> BrandStory is a <a href="https://brandstory.in/digital-marketing-company-agency-bangalore-india/">Digital Solutions Company</a> which believes that no two websites are same and hence using common strategies for all would do no good for their optimization across the search engine. Hence, we make it a point to develop and use the right Search Engine Optimization strategies specific to your particular brand. We at BrandStory are dedicated to delivering the best SEO services for our clients which requires time and effort to understand their business requirements and thereby optimize the web content to make it search engine friendly. Our SEO services are developed based on an SEO strategy that would provide top rankings, maximum traffic and good revenue in terms of conversions. </p>
      <p> Search Engine Optimization is all about how interactive your website is with respect to the search engines. SEO is all about finding your website on the World Wide Web with the right keywords on the right search page list. Our team of SEO Analysts devises an organized plan of action by researching, analyzing and evaluating your Search engine listing position as per latest Google algorithm and other popular search engine updates. Then, the benchmark against the existing top rankers and execute the plan to enhance the visibility of a website and reach the top in the search engine results. </p>
      <p> Our SEO services in Bangalore constitute the following: </p>
      <p><b>Keyword Research:</b></p>
      <p> The most important task of SEO service is to find how consumer search for your industry, and that’s where keywords come into play. Identifying the aptest keywords across search engine platforms relevant to the industry is only the beginning of SEO service. Keyword research is an evolving process and is highly affected by market shift and consumer demand. Ensuring the research is apt and adaptable to the changing norms is our expertise. </p>
      <p><b>Content Optimization:</b></p>
      <p> SEO content audits as much important as the on-going content support. It involves the creation of SEO specific content with respect to the business; it not only draws visitors but also influences the SEO rating supporting the growth of the business. The major activities of this SEO service include: </p>
      <ul>
      <li > Blog writing </li>
      <li > Videos </li>
      <li > Infographic exemplars </li>
      <li > Articles and public posts </li>
      <li > Case studies and guided book </li>
      </ul>
      <p> We ensure that every content is original and keyword specific with no copyright or plagiarism claims. Content optimization might not directly affect the sales but it adds to the brand value and enhances the online presence of the business making it more trustworthy. </p>
      <p><b>Technical Optimization</b></p>
      <p> SEO technical audit is a very important SEO service to identify any obstacle at the setup phase, plus providing on-going technical support. Technical optimization consists of two major activities </p>
      <ul>
      <li ><b>On-site SEO</b>  –This involves planning, research and implementation during the building of the website. It is also essential for all websites and is a prerequisite for the second aspect of SEO. </li>
      <li ><b>Off-site SEO</b>  – This involves acquiring links to give an added advantage over your competitor to ensure that the website is highly optimized. It includes link building, blogging, guest articles etc. </li>
      </ul>
      <p><b>Authority Optimization</b></p>
      <p> Authority audit, with a monthly activity designed to enhance the authority of your content both on-site and across the internet. The focus is to discover related and most frequently used keywords pertaining to the industry and regularly updating the business online platform not only to assure the best SEO rating but also generate the right traffic for the website.  </p>
      <p> The Optimization is phased as follows: </p>
      <ul>
      <li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEO campaign strategy and planning (1-2 months) </li>
      <li>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEO campaign management (2  nd   month onwards, then on-going) </li>
      </ul>
      <p><b>SEO Strategy</b></p>
      <p> SEO Strategy is a holistic approach where we plan, design and layout the complete schedule of activities to be carried out for improving the website rating. Research processes underpin the fundamentals of our strategic focus under which main highlighting areas are: </p>
      <ul>
      <li ><b>Keyword</b>  – Discovering the relevant and most searched keywords related to the business. &nbsp; </li>
      </ul>
      <ul>
      <li ><b>Content Development</b>  – Content is the core essence of a website. Designing the content schedule and including the appropriate keyword is not only important SEO but an appealing educative content attracts consumers and reduces bounce rate. </li>
      <li ><b>Developing tailor-made campaign optimization</b>  (the best blend of technical, content and authority optimization) to meet agreed goals. </li>
      </ul>
      <p><b>SEO Planning</b></p>
      <p> The entire growth strategy is evenly distributed and at BrandStory, SEO campaigns ensure that we deliver SEO services to our clients within the time frame. The planning is scheduled based on following parameters: </p>
      <ul>
      <li ><b>Key audit deliverables</b> : Developing a progress report for every phase of the work </li>
      </ul>
      <ul>
      <li ><b>Technical Support:</b>  We work on strict deadlines to ensure delivery to a client as promised. </li>
      <li ><b>Content and authority optimization:</b>  Plans are tactically executed to fulfill agreed strategic objectives. The content and topics are closely monitored and strategically planned. </li>
      </ul>
      <p><b>SEO Management</b></p>
      <p> Search engines keep updating their algorithms. We at BrandStory ensure that our clients do not stay behind in the race by constantly examining and updating our work, as per industry standards. </p>
      <p> Once audits are completed, we embark on rolling monthly campaign management. This will focus towards off-site activity (authority optimization), and on-site technical and content support. </p>
      <p> So, if you are looking for the <a href="https://brandstory.in/seo-company-bangalore">best SEO Services in Bangalore</a>, BrandStory is the place to be. Feel free to contact us at  <a href="mailto:vaishnavi@brandstory.in"> vaishnavi@brandstory.in </a>  or call us at +91   9901663463 </p>
`,
      'metaTitle': 'SEO Services Bangalore | Bangalore SEO Company list | SEO Service',
      'metaDescription': 'SEO Services Bangalore, Best SEO Company in Bangalore, SEO Bangalore, Search Engine Optimization(SEO) Company & Agency in Bangalore, Top SEO Company Bangalore.',
      'metaKeyword': 'SEO Services Bangalore, Best SEO Company in Bangalore, SEO Bangalore, Search Engine Optimization(SEO) Company & Agency in Bangalore, Top SEO Company Bangalore.',
      'ogTitle': 'SEO Services Bangalore | Bangalore SEO Company list | SEO Service',
      'ogDescription': 'SEO Services Bangalore, Best SEO Company in Bangalore, SEO Bangalore, Search Engine Optimization(SEO) Company & Agency in Bangalore, Top SEO Company Bangalore.',
      'ogUrl': 'https://brandstory.in/services/seo-services-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'SEO Services Bangalore, Best SEO Company in Bangalore, SEO Bangalore, Search Engine Optimization(SEO) Company & Agency in Bangalore, Top SEO Company Bangalore.',
      'twitterTitle': 'SEO Services Bangalore | Bangalore SEO Company list | SEO Service'
    },

    {
      'url': 'web-design-company-bangalore',
      'img': '',
      'title': 'Web Design Company Bangalore',
      'overview': '',
      'content': `
      <p> BrandStory strives to deliver the Functional aspect that transforms art into a design. Web design is an essential aspect of <a href="https://brandstory.in/services/website-development-company-in-bangalore/">Web Development</a> and BrandStory is a leading Web Design Company in Bangalore with excellent Web Design services. Our Web Design services look into the intricate details of Web Development to provide the aesthetic appeal to the overall website content. We make sure that our website design enables you to stand out in the crowd of innumerable websites floating across the internet.  </p>
      <p> As a leading Web Design Company in Bangalore, we ensure that our website designs add value to the website in following ways: </p>
      <ul>
      <li > Facilitate an enriching online experience for the visitors with the help of intuitive structure and clear navigations. </li>
      <li > Interactive and informative medium to extensively understand the objectives. </li>
      <li > Transmit the brand value through effective design. For e.g. By using corporate colors specific to your business, allows visitors to relate to you effectively and reinforce desired emotional response through the appropriate use of color, imagery and other elements. </li>
      </ul>
      <p> Our website designs tend to fulfill that significant requirement for any website of being interactive with the help of our experienced team of <a href="https://brandstory.in/services/ui-ux-design-development-company-bangalore/">UI/UX web designers</a>. We provide support for developing customized sites based on the client’s requirements and strive to maintain the operations and the look and feel of the website to keep the engagement level of the website with the audiences at maximum. Our web design solutions are complete and they guarantee effective customer engagement and relay the business goals in concordance with the needs of the target audience. Our team of dynamic individuals   leverages the usability testing methodology to understand how users will interact with your offerings to maximize user engagement and satisfaction.  </p>
      <p> Web Designing and Brand Story! Why??? </p>
      <ul>
      <li > Budget pricing </li>
      <li > Quick Turnaround time </li>
      <li > 24*7 support </li>
      <li > High-Quality Standards assured </li>
      <li > Full transparency throughout the phase </li>
      <li > Excellent track record of timely delivery  </li>
      <li > Clients all across the globe </li>
      <li > Excellent track record of delivering projects on time </li>
      <li > World class customer service and client satisfaction </li>
      <li > 100% Satisfaction Guaranteed. </li>
      </ul>
      <p> Brand Story <a href="https://brandstory.in/services/web-design-company-bangalore/">Web Design Company in Bangalore</a> is popular for content-rich, graphics specific and visually appealing web designs. Our web designing experts integrate interactive designs in the wireframes to ensure visually pleasing website designs to keep the customers engaged. We believe in Responsive web designing both for desktops and mobiles to make sure that the website is responsive to the fast-paced tech-savvy individuals. We believe in smart technology and thereby our strategy depicts a story that reflects your brand image and validates your offerings, products as well as services. </p>
      <p> Brand Story has established itself as a leading Web Design Company in Bangalore within a short period of time. Our efficient and visually appealing website designs have proven to generate maximum returns on your investment and generate effective leads for the businesses. We design and build websites that fulfill your needs and justifies your budget expenditure.   Our experienced team will manage your online presence as our primary field of expertise is <a href="https://brandstory.in/orm-company-bangalore-india/">Online Reputation Management</a> throughout the digital space and keep your website up to date with ever-changing user behavior. </p>
      <p> For more information on our services and other offerings, send an email to  <a href="mailto:vaishnavi@brandstory.in"> vaishnavi@brandstory.in </a>  or call +91 9901663463. </p>
      `,
      'metaTitle': 'Web Design Company Bangalore | UI design studio Bangalore India',
      'metaDescription': 'Web Design Company Bangalore, UI(User Interface) designer in Bangalore, UI/UX Services in Bangalore, User experience design based website development.',
      'metaKeyword': 'Web Design Company Bangalore, UI(User Interface) designer in Bangalore, UI/UX Services in Bangalore, User experience design based website development.',
      'ogTitle': 'Web Design Company Bangalore | UI design studio Bangalore India',
      'ogDescription': 'Web Design Company Bangalore, UI(User Interface) designer in Bangalore, UI/UX Services in Bangalore, User experience design based website development.',
      'ogUrl': 'https://brandstory.in/services/web-design-company-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Web Design Company Bangalore, UI(User Interface) designer in Bangalore, UI/UX Services in Bangalore, User experience design based website development.',
      'twitterTitle': 'Web Design Company Bangalore | UI design studio Bangalore India'
    },

    {
      'url': 'web-development-company-in-bangalore',
      'img': '',
      'title': 'Web Design Company Bangalore',
      'overview': '',
      'content': `
      <p> Web Development is an integrated process which encompasses a dedicated methodology to develop a website over the internet which amalgamates fulfillment of Business objectives with customers’ needs. In a place where everybody claims to be the best, how to find the real <em>best </em> <em>Web Development Company in Bangalore</em> ? Well, the truth is no one company is the best fit for all <a href="https://brandstory.in/services/website-development-company-in-bangalore/">web development</a> related functions. It varies from company to company depending on their specific requirements. One who doesn’t have an extensive methodology can never understand their clients and thereby never deliver assured performance. So, choosing the best  web development company in Bangalore  depends on how the company plans to give solutions to your web development requirements and the success associated with it.  </p>
<p> BrandStory is a leading  Web Development Company in Bangalore  and we promise to deliver comprehensive, planned and unique Web development services depending upon the client’s’ requirements. Our services range from custom website design to development of complex enterprise Web applications. Our Web development services support guaranteed high-quality, consistent and cost-effective results to maximize clients’ competitive advantage and productivity.  </p>
<p> As a leading  <a href="https://brandstory.in/services/website-development-company-in-bangalore/">Web Development company in Bangalore</a><b>,</b>  we follow an Agile methodology of Website design and development with constant interaction with the clients throughout the development process to ensure them with the best web development service. We provide a wide range of <a href="https://brandstory.in/services/website-development-company-in-bangalore/">Web Development Services</a> which is essential encompasses all aspects of Digital Transformation. Brand Story is a complete Digital Solutions company and we know that your website needs to be developing strategies to ensure unique positioning across a digital platform to deliver effective interactive communication to stay ahead in this competitive market. </p>
<p><b>What is Our Web Development Methodology?</b></p>
<p><b>Website Planning: </b> &nbsp;It involves identifying the business objective and formulating a strategy that reflects your corporate image and validates your product/service offerings to the targeted customers. </p>
<p><b>Website Content: </b> Content is the King. And it is our job to formulate the king in the most unique and royal way. It is our job to make sure that the website content caters to all information needs of the customers and compel them to choose you for their need fulfillment. </p>
<p><b>Website Design: </b> Our web designing experts integrate interactive designs in the wireframes to ensure visually pleasing website designs to keep the customers engaged. We also make sure that the website is responsive in this mobile-friendly era. </p>
<p><b>Website Construction and Testing: </b> Website construction involves converting the content and design into web code based on conformance with certain guidelines that include: </p>
<ul>
<li style="list-style-type: none;">
<ul>
<li > Browser Compatibility </li>
<li > Screen Resolution </li>
<li > Web Accessibility </li>
<li > Other related essentials viz. Metadata, character set, analytics etc. </li>
</ul>
</li>
</ul>
<p> This is followed by Website Testing which involves testing the website against the above guidelines. This ranges from a simple spell-check testing to full functionality and security review followed by real-time operational monitoring. </p>
<p><b>Website Maintenance and Review: </b> Web Development doesn’t stop with the launch of a website. The real development begins after the site is live and website maintenance is an ongoing process to manage the operational aspect of <a href="https://brandstory.in">web development</a> and maintain the online presence of the company. The purpose of a website review is to establish if Website Goals are being achieved and, if not, what corrective action is needed. It is important to review the contribution of the website in attaining the goals and propose and make any further changes or adjustments as per the requirements. </p>
<p> We at BrandStory can help you design and develop end-to-end digital solutions which involve blogging websites, e-commerce websites, information websites, online brochure/ catalog websites and much more with all essential accessibility features including high-volume transaction management, authentication and secured communication, automated workflow, data and content management, and payment gateway integration. With our expertise in content, design and development, we assure to build customized websites with visually pleasing designs and manage your online presence with respect to the ever-changing user behavior. </p>
<p> If you are looking for a Web Development Company in Bangalore that offers the best services as per your demands, you are welcome at BrandStory. Contact us at  <a href="mailto:vaishnavi@brandstory.in"> vaishnavi@brandstory.in </a>  or call +91 9901663463. </p>
`,
      'metaTitle': 'Web Development Company in Bangalore | Web Designing Company Bangalore',
      'metaDescription': 'Web Development Company in Bangalore, Web Designing development Bangalore, Web Designing Bangalore, Best web development Company, Web design Company in Bangalore',
      'metaKeyword': 'Web Development Company in Bangalore, Web Designing development Bangalore, Web Designing Bangalore, Best web development Company, Web design Company in Bangalore',
      'ogTitle': 'Web Development Company in Bangalore | Web Designing Company Bangalore',
      'ogDescription': 'Web Development Company in Bangalore, Web Designing development Bangalore, Web Designing Bangalore, Best web development Company, Web design Company in Bangalore',
      'ogUrl': 'https://brandstory.in/services/web-development-company-in-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'Web Development Company in Bangalore, Web Designing development Bangalore, Web Designing Bangalore, Best web development Company, Web design Company in Bangalore',
      'twitterTitle': 'Web Development Company in Bangalore | Web Designing Company Bangalore'
    },

    {
      'url': 'ui-ux-design-development-company-bangalore',
      'img': '',
      'title': 'Best UX / UI Design Company Bangalore',
      'overview': '',
      'content': `
      <p>As an user-centric <a href="https://brandstory.in/services/design-studio-in-bangalore/">design agency in Bangalore</a>, India, we create functionally beautiful digital experiences that highly engage with your target audience. We tend to create meaningful relationships amidst brands and their consumers through inspiring design. Our first preferences towards design are the user-centered design (USD) which is focused on human tendencies and behavior. We are compassionate towards consumers and have a dedication to challenges with smart, well-conceptualized designs.</p>
      <h2>App UI UX Design</h2>
      <p>As a <a href="https://brandstory.in/services/design-studio-in-bangalore/">UI design agency in Bangalore</a>, India, we create functionally beautiful digital experiences that highly engage with your target audience. We tend to create meaningful relationships amidst brands and their consumers through inspiring design. Our first preferences towards design is the user centred design (USD) which is focused on human tendencies and behaviour. We are compassionate towards consumers and have dedication for challenges with smart, well conceptualized designs Our first step lies in creating the blueprint of your web UI that sets the stage to establish your brand anchoring with your target audience. We ensure that the usability of the Web UI design is preserved while the designers set their mark to develop an aesthetically good looking UI page. We strive to get you the genuine results by transforming your passive viewers to active users. We also ensure that the design is minimal and follows the international design standards that has been used widely among global brands.</p>
      <p>With today’s Digital presence of a brand which can make or break a business, we ensure the UI and the design aspirations of the brand online are a delight to the customer.</p>
      `,
      'metaTitle': 'UX UI Design Company Bangalore |Web Mobile UI Development Company',
      'metaDescription': 'UI design company Bangalore , Web and App UI UX Development Bangalore India, ui developments companies in Bangalore India, UI design studio Bangalore',
      'metaKeyword': 'UI design company Bangalore , Web and App UI UX Development Bangalore India, ui developments companies in Bangalore India, UI design studio Bangalore',
      'ogTitle': 'UX UI Design Company Bangalore |Web Mobile UI Development Company',
      'ogDescription': 'UI design company Bangalore , Web and App UI UX Development Bangalore India, ui developments companies in Bangalore India, UI design studio Bangalore',
      'ogUrl': 'https://brandstory.in/services/ui-ux-design-development-company-bangalore/',
      'ogSiteName': 'Digital Marketing Company in Bangalore | Digital Marketing Agency',
      'twitterDescription': 'UI design company Bangalore , Web and App UI UX Development Bangalore India, ui developments companies in Bangalore India, UI design studio Bangalore',
      'twitterTitle': 'UX UI Design Company Bangalore |Web Mobile UI Development Company'
    }
  ];




  ngOnInit() {
    let ids = this.myBlogItems.map(item => item.url);
    this.filteredData = this.myBlogItems.filter(x => x.url === this.route.snapshot.params['url']);

    this.title.setTitle(this.filteredData[0].metaTitle);

    this.meta.addTags([
      {
        name: 'description',
        content: this.filteredData[0].metaDescription
      },
      {
        name: 'keywords',
        content: this.filteredData[0].metaKeyword
      },
      {
        name: 'og:type',
        content: 'article'
      },
      {
        name: 'og:title',
        content: this.filteredData[0].metaTitle
      },
      {
        name: 'og:description',
        content: this.filteredData[0].metaDescription
      },
      {
        name: 'og:url',
        content: this.filteredData[0].ogUrl
      },
      {
        name: 'og:site_name',
        content: this.filteredData[0].ogSiteName
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:description',
        content: this.filteredData[0].twitterDescription
      },
      {
        name: 'twitter:title',
        content: this.filteredData[0].twitterTitle
      }
    ]);

    this.enquiryModal = this.formBuilder.group({
      fName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
      fEmail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      fPhone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10,11}$')]],
      organisation: ['', [Validators.required]],
      fService: ['', Validators.required],
      fMessage: ['', Validators.required]
    });

  }
  modalRef: any = BsModalRef;

  get fenquiryModal() { return this.enquiryModal.controls; }
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


    //this.httpClient.post('https://brandstory.in/assets/thank-you-enquiry-modal.php',
    this.httpClient.post('https://brandstory.in/assets/thank-you-enquiry-home.php',
      {
        name: formName,
        email: formEmail,
        phone: formPhone,
        company: organisation,
        service: formService,
        message: formMessage,
        page: "servicepages"

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
        page: "servicepages"

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
