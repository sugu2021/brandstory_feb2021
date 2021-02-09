// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Location, PathLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { MetaService } from './meta.service';
import { OwlModule } from 'ngx-owl-carousel';
import { from } from 'rxjs';


// Components
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { BrandingComponent } from './design/branding/branding.component';
import { MarketingComponent } from './design/marketing/marketing.component';
import { HeaderComponent } from './header/header.component';

import { CasestudyComponent } from './casestudies/casestudies.component';
import { NhcecampaignmanagementComponent } from './casestudies/campaignmanagement/nhce-campaign-management/nhce-campaign-management-case-study.component';
import { SlateCampaignManagement } from './casestudies/campaignmanagement/slate-campaign-management/slate-campaign-management.component';
import { NaturalRemediesCampaignManagement } from './casestudies/campaignmanagement/natural-remedies-campaign-management/natural-remedies-campaign-management.component';
import { CarafinaCampaignManagement } from './casestudies/campaignmanagement/carafina-campaign-management/carafina-campaign-management.component';
import { HashedinSEO } from './casestudies/seocasestudies/hashedin-seo/hashedin-seo.component';
import { SobhaCampaignmanagement } from './casestudies/campaignmanagement/sobha-campaign-management/sobha-campaign-management.component';
import { AdarshSEO } from './casestudies/seocasestudies/adarsh-seo/adarsh-seo.component';
import { CarafinaSEO } from './casestudies/seocasestudies/carafina-seo/carafina-seo.component';
import { DesignArcSEO } from './casestudies/seocasestudies/design-arc-seo/design-arc-seo.component';
import { RedSeerSEO } from './casestudies/seocasestudies/redseer-seo/redseer-seo.component';
import { NaturalRemedySEO } from './casestudies/seocasestudies/natural-remedy-seo/natural-remedy-seo.component';


import { PortfolioComponent } from './portfolio/portfolio.component';
import { MobileappComponent } from './uiux/mobileapp/mobileapp.component';
import { WebComponent } from './uiux/web/web.component';
import { WebsiteComponent } from './development/website/website.component';
import { SeoComponent } from './digital/seo/seo.component';
import { SmmComponent } from './digital/smm/smm.component';
import { VideoproductionComponent } from './digital/videoproduction/videoproduction.component';
import { GooglemarketingComponent } from './digital/googlemarketing/googlemarketing.component';
import { ContactComponent } from './contact/contact.component';
import { MynewComponent } from './mynew/mynews.component';
import { BlogsComponent } from './blogs/blogs.component';

import { BlogitemsComponent } from './blogs/blogitems/blogitems.component';
import { CategoryPipe } from './portfolio/category.pipe';
import { PortfolioitemsComponent } from './portfolio/portfolioitems/portfolioitems.component';
import { SeocampComponent } from './seocamp/seocamp.component';
import { SeocampaignComponent } from './seocampaign/seocampaign.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { ServiceitemsComponent } from './ourservice/serviceitems/serviceitems.component';
import { CareersComponent } from './careers/careers.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { SeomasterComponent } from './seocampaignnew/seomaster/seomaster.component';
import { SeocompanybangaloreComponent } from './seocampaignnew/seocompanybangalore/seocompanybangalore.component';
import { SeocompanyinbangaloreComponent } from './seocampaignnew/seocompanyinbangalore/seocompanyinbangalore.component';
import { PpcservicesinbangaloreComponent } from './seocampaignnew/ppcservicesinbangalore/ppcservicesinbangalore.component';
import { SocialmediamarketingagencybangaloreComponent } from './seocampaignnew/socialmediamarketingagencybangalore/socialmediamarketingagencybangalore.component';
import { WebsitedevelopmentcompanyinbangaloreComponent } from './seocampaignnew/websitedevelopmentcompanyinbangalore/websitedevelopmentcompanyinbangalore.component';
import { UidesigncompanybangaloreComponent } from './seocampaignnew/uidesigncompanybangalore/uidesigncompanybangalore.component';
import { UxuidesigncompanymumbaiComponent } from './seocampaignnew/uxuidesigncompanymumbai/uxuidesigncompanymumbai.component';
import { UxuidesigncompanydelhiComponent } from './seocampaignnew/uxuidesigncompanydelhi/uxuidesigncompanydelhi.component';
import { UxuidesigncompanychennaiComponent } from './seocampaignnew/uxuidesigncompanychennai/uxuidesigncompanychennai.component';
import { UxuidesigncompanypuneComponent } from './seocampaignnew/uxuidesigncompanypune/uxuidesigncompanypune.component';
import { MobileappdevelopmentcompanybangaloreComponent } from './seocampaignnew/mobileappdevelopmentcompanybangalore/mobileappdevelopmentcompanybangalore.component';
import { OrmbangaloreComponent } from './seocampaignnew/ormbangalore/ormbangalore.component';
import { EmailmarketingComponent } from './seocampaignnew/emailmarketing/emailmarketing.component';
import { DmbComponent } from './seocampaignnew/dmb/dmb.component';
import { WebuidesignComponent } from './seocampaignnew/webuidesign/webuidesign.component';
import { UxUidesignCompanyinHyderabadComponent } from './seocampaignnew/uxuidesigncompanyinhyderabad/uxuidesigncompanyinhyderabad.component';
import { B2bLeadGenerationComponent } from './seocampaignnew/b2bleadgeneration/b2bleadgeneration.component';
import { GdppcComponent } from './seocampaignnew/gdppc/gdppc.component';
import { CampaignComponent } from './seocampaignnew/campaignmanagement/campaign.component';
import { dmarketingComponent } from './seocampaignnew/digitalmarketing/dmarketing.component';
import { ContentwritingComponent } from './seocampaignnew/contentwriting/contentwriting.component';
import { B2bcontentComponent } from './seocampaignnew/b2bcontent/b2bcontent.component';
import { TechnologycontentComponent } from './seocampaignnew/technologycontent/technologycontent.component';
import { B2bmarketingComponent } from './seocampaignnew/b2bmarketing/b2bmarketing.component';
import { SeoenterpriseComponent } from './enterprise/seoenterprise/seoenterprise.component';
import { B2bemailmarketingComponent } from './enterprise/b2bemailmarketing/b2bemailmarketing.component';
import { SeoemailmarketingComponent } from './enterprise/seoemailmarketing/seoemailmarketing.component';
import { SeoenterpriseTestComponent } from './enterprise/seoenterprisetest/seoenterprisetest.component';
import { SteamComponent } from './steam/steam.component';

// Brandstory Landing-pages -> dec-2020
import { AccountMarketingComponent } from '../app/landing_pages/account-marketing/account-marketing.component';
import { CampMarketingComponent } from '../app/landing_pages/camp-marketing/camp-marketing.component';
import { EventmarketComponent } from '../app/landing_pages/eventmarket/eventmarket.component';
import { ContentMarketingComponent } from '../app/landing_pages/content-marketing/content-marketing.component';
import { ProdmarketComponent } from '../app/landing_pages/prodmarket/prodmarket.component';
import { LinkedinComponent } from '../app/landing_pages/linkedin/linkedin.component';
import { InboundComponent } from '../app/landing_pages/inbound/inbound.component';
import { EmployerbrandComponent } from '../app/landing_pages/employerbrand/employerbrand.component';
import { CreativeComponent } from '../app/landing_pages/creative/creative.component';
import { CorporateBrandComponent } from '../app/landing_pages/corporate-brand/corporate-brand.component';
import { PhotographyComponent } from '../app/landing_pages/photography/photography.component';

// ORM ROI SEO pages -> dec-2020
import { RoiSeoPuneComponent } from '../app/landing_pages/roi-seo-pune/roi-seo-pune.component';
import { RoiSeoDelhiComponent } from '../app/landing_pages/roi-seo-delhi/roi-seo-delhi.component';
import { RoiSeoHyderabadComponent } from '../app/landing_pages/roi-seo-hyderabad/roi-seo-hyderabad.component';
import { RoiSeoKochiComponent } from '../app/landing_pages/roi-seo-kochi/roi-seo-kochi.component';
import { RoiSeoKolkataComponent } from '../app/landing_pages/roi-seo-kolkata/roi-seo-kolkata.component';
import { RoiSeoCoimbatoreComponent } from '../app/landing_pages/roi-seo-coimbatore/roi-seo-coimbatore.component';
import { RoiSeoChennaiComponent } from '../app/landing_pages/roi-seo-chennai/roi-seo-chennai.component';



const _orig_prepareExternalUrl = PathLocationStrategy.prototype.prepareExternalUrl;

PathLocationStrategy.prototype.prepareExternalUrl = function (internal) {
  const url = _orig_prepareExternalUrl.call(this, internal);

  if (url === '') {
    return url;
  }

  console.log('For ' + internal + ' we generated ' + url);
  if (url.endsWith('.html')) {
    return url;
  }

  if (url.endsWith('/')) {
    return url;
  }

  return url + '/';

};

Location.stripTrailingSlash = function (url) {
  const /** @type {?} */ match = url.match(/#|\?|$/);
  const /** @type {?} */ pathEndIdx = match && match.index || url.length;
  const /** @type {?} */ droppedSlashIdx = pathEndIdx - (url[pathEndIdx - 1] === '/' ? 1 : 0);
  const first = url.slice(0, droppedSlashIdx);
  const last = url.slice(pathEndIdx);

  if (first.endsWith('.html')) {
    return first + last;
  }

  return first + '/' + last;

};




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BrandingComponent,
    CasestudyComponent,
    NhcecampaignmanagementComponent,
    SlateCampaignManagement,
    NaturalRemediesCampaignManagement,
    CarafinaCampaignManagement,
    HashedinSEO,
    SobhaCampaignmanagement,
    AdarshSEO,
    CarafinaSEO,
    DesignArcSEO,
    RedSeerSEO,
    NaturalRemedySEO,
    PortfolioComponent,
    MarketingComponent,
    MobileappComponent,
    WebComponent,
    WebsiteComponent,
    SeoComponent,
    VideoproductionComponent,
    SmmComponent,
    GooglemarketingComponent,
    ContactComponent,
    MynewComponent,
    BlogsComponent,
    BlogitemsComponent,
    CategoryPipe,
    PortfolioitemsComponent,
    SeocampComponent,
    SeocampaignComponent,
    OurserviceComponent,
    ServiceitemsComponent,
    CareersComponent,
    SteamComponent,
    ThankyouComponent,
    SeomasterComponent,
    SeocompanybangaloreComponent,
    SeocompanyinbangaloreComponent,
    PpcservicesinbangaloreComponent,
    SocialmediamarketingagencybangaloreComponent,
    WebsitedevelopmentcompanyinbangaloreComponent,
    UidesigncompanybangaloreComponent,
    UxuidesigncompanymumbaiComponent,
    UxuidesigncompanydelhiComponent,
    UxuidesigncompanychennaiComponent,
    UxuidesigncompanypuneComponent,
    UxUidesignCompanyinHyderabadComponent,
    MobileappdevelopmentcompanybangaloreComponent,
    SeoenterpriseComponent,
    SeoenterpriseTestComponent,
    B2bemailmarketingComponent,
    B2bLeadGenerationComponent,
    SeoemailmarketingComponent,
    VideoproductionComponent,
    OrmbangaloreComponent,
    EmailmarketingComponent,
    B2bmarketingComponent,
    WebuidesignComponent,
    GdppcComponent,
    DmbComponent,
    CampaignComponent,
    dmarketingComponent,
    ContentwritingComponent,
    B2bcontentComponent,
    TechnologycontentComponent,

    // Landing-Pages -> dec-2020
    AccountMarketingComponent,
    CampMarketingComponent,
    EventmarketComponent,
    ContentMarketingComponent,
    ProdmarketComponent,
    LinkedinComponent,
    InboundComponent,
    EmployerbrandComponent,
    CreativeComponent,
    CorporateBrandComponent,
    PhotographyComponent,
    RoiSeoPuneComponent,
    RoiSeoDelhiComponent,
    RoiSeoHyderabadComponent,
    RoiSeoKochiComponent,
    RoiSeoKolkataComponent,
    RoiSeoCoimbatoreComponent,
    RoiSeoChennaiComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'design/branding',
        component: BrandingComponent
      },
      {
        path: 'resources/casestudies',
        component: CasestudyComponent
      },
      {
        path: 'resources/casestudies/campaignmanagement/university',
        component: NhcecampaignmanagementComponent
      },
      {
        path: 'resources/casestudies/campaignmanagement/b2b-campaign',
        component: SlateCampaignManagement
      },
      {
        path: 'resources/casestudies/campaignmanagement/lifesciences-pharma-company',
        component: NaturalRemediesCampaignManagement
      },
      {
        path: 'resources/casestudies/campaignmanagement/interior-design-company',
        component: CarafinaCampaignManagement
      },
      {
        path: 'resources/casestudies/seocasestudies/technology-company',
        component: HashedinSEO
      },
      {
        path: 'resources/casestudies/campaignmanagement/real-estate-company',
        component: SobhaCampaignmanagement
      },
      {
        path: 'resources/casestudies/seocasestudies/real-estate-company',
        component: AdarshSEO
      },
      {
        path: 'resources/casestudies/seocasestudies/interior-design-company-seo',
        component: CarafinaSEO
      },
      {
        path: 'resources/casestudies/seocasestudies/interior-design-company',
        component: DesignArcSEO
      },
      {
        path: 'resources/casestudies/seocasestudies/management-consulting-firm',
        component: RedSeerSEO
      },
      {
        path: 'resources/casestudies/seocasestudies/lifesciences-pharma-company',
        component: NaturalRemedySEO
      },

      {
        path: 'steam/',
        component: SteamComponent
      },
      {
        path: 'design/marketing-collaterals',
        component: MarketingComponent
      },
      {
        path: 'uiux/mobile-app',
        component: MobileappComponent
      },
      {
        path: 'uiux/web',
        component: WebComponent
      },
      {
        path: 'our-portfolio',
        component: PortfolioComponent
      },
      {
        path: 'development/website',
        component: WebsiteComponent
      },
      {
        path: 'digital/seo',
        component: SeoComponent
      },
      {
        path: 'digital/smm',
        component: SmmComponent
      },
      {
        path: 'digital/google-marketing',
        component: GooglemarketingComponent
      },
      {
        path: 'contact-us',
        component: ContactComponent
      },
      {
        path: 'blogs',
        component: BlogsComponent
      },
      {
        path: 'careers',
        component: CareersComponent
      },
      {
        path: 'thank-you',
        component: ThankyouComponent
      },
      {
        path: 'careers/',
        component: CareersComponent
      },
      {
        path: 'thank-you/',
        component: ThankyouComponent
      },
      {
        path: 'blogs/',
        component: BlogsComponent
      },
      {
        path: 'blogs/:url',
        component: BlogitemsComponent
      },

      {
        path: 'blogs/:url/',
        component: BlogitemsComponent
      },
      {
        path: 'portfolio/:url',
        component: PortfolioitemsComponent
      },
      {
        path: 'services',
        component: OurserviceComponent
      },
      {
        path: 'services/',
        component: OurserviceComponent
      },

      {
        path: 'services/social-media-marketing-agency-bangalore/',
        component: SocialmediamarketingagencybangaloreComponent
      },

      {
        path: 'services/:url',
        component: ServiceitemsComponent
      },
      {
        path: 'services/:url/',
        component: ServiceitemsComponent
      },
      {
        path: 'seocamp',
        component: SeocampComponent
      },
      {
        path: ':url',
        component: SeocampaignComponent
      },
      {
        path: 'design/branding/',
        component: BrandingComponent
      },
      {
        path: 'resources/casestudies/',
        component: CasestudyComponent
      },
      {
        path: 'resources/casestudies/campaignmanagement/university/',
        component: NhcecampaignmanagementComponent
      },
      {
        path: 'resources/casestudies/campaignmanagement/b2b-campaign/',
        component: SlateCampaignManagement
      },
      {
        path: 'resources/casestudies/campaignmanagement/lifesciences-pharma-company/',
        component: NaturalRemediesCampaignManagement
      },
      {
        path: 'resources/casestudies/campaignmanagement/interior-design-company/',
        component: CarafinaCampaignManagement
      },
      {
        path: 'resources/casestudies/seocasestudies/technology-company/',
        component: HashedinSEO
      },
      {
        path: 'resources/casestudies/campaignmanagement/real-estate-company/',
        component: SobhaCampaignmanagement
      },
      {
        path: 'resources/casestudies/seocasestudies/real-estate-company/',
        component: AdarshSEO
      },
      {
        path: 'resources/casestudies/seocasestudies/interior-design-company-seo/',
        component: CarafinaSEO
      },
      {
        path: 'resources/casestudies/seocasestudies/interior-design-company/',
        component: DesignArcSEO
      },
      {
        path: 'resources/casestudies/seocasestudies/management-consulting-firm/',
        component: RedSeerSEO
      },
      {
        path: 'resources/casestudies/seocasestudies/lifesciences-pharma-company/',
        component: NaturalRemedySEO
      },
      {
        path: 'seo-company-bangalore/',
        component: SeocompanybangaloreComponent
      },
      {
        path: 'seo-company-in-bangalore/',
        component: SeocompanyinbangaloreComponent
      },
      {
        path: 'pay-per-click-ppc-services-in-bangalore/',
        component: PpcservicesinbangaloreComponent
      },
      {
        path: 'website-development-company-in-bangalore/',
        component: WebsitedevelopmentcompanyinbangaloreComponent
      },
      {
        path: 'ui-design-company-bangalore/',
        component: UidesigncompanybangaloreComponent
      },
      {
        path: 'ux-ui-design-company-in-mumbai/',
        component: UxuidesigncompanymumbaiComponent
      },
      {
        path: 'ux-ui-design-company-in-delhi/',
        component: UxuidesigncompanydelhiComponent
      },
      {
        path: 'ux-ui-design-company-in-chennai/',
        component: UxuidesigncompanychennaiComponent
      },
      {
        path: 'ux-ui-design-company-in-pune/',
        component: UxuidesigncompanypuneComponent
      },
      {
        path: 'ux-ui-design-company-in-hyderabad/',
        component: UxUidesignCompanyinHyderabadComponent
      },
      {
        path: 'mobile-app-development-company-bangalore/',
        component: MobileappdevelopmentcompanybangaloreComponent
      },
      {
        path: 'orm-company-bangalore-india/',
        component: OrmbangaloreComponent
      },
      {
        path: 'email-marketing-services-in-bangalore/',
        component: EmailmarketingComponent
      },
      {
        path: 'digital-marketing/',
        component: DmbComponent
      },

      {
        path: 'b2b-marketing-companies-in-bangalore/',
        component: B2bmarketingComponent
      },
      {
        path: 'b2b-lead-generation-companies-in-bangalore/',
        component: B2bLeadGenerationComponent
      },

      {
        path: 'web-ui-design-bangalore/',
        component: WebuidesignComponent
      },
      {
        path: 'digital/video-production/',
        component: VideoproductionComponent
      },
      {
        path: 'enterprise/seo/',
        component: SeoenterpriseComponent
      },
      {
        path: 'enterprise/b2b-email-marketing/',
        component: B2bemailmarketingComponent
      },
      {
        path: 'enterprise/enterprise-seo-services/',
        component: SeoemailmarketingComponent
      },
      {
        path: 'enterprise-seo-services-company-in-bangalore/',
        component: SeoenterpriseTestComponent
      },

      {
        path: 'design/marketing-collaterals/',
        component: MarketingComponent
      },

      {
        path: 'google-adwords-ppc-campaign-management-services/',
        component: GdppcComponent
      },
      {
        path: 'multichannel-or-cross-channel-campaign-management/',
        component: CampaignComponent
      },
      {
        path: 'best-digital-marketing-company-for-educational-institutes-in-bangalore/',
        component: dmarketingComponent
      },
      {
        path: 'content-writing-agency-in-bangalore/',
        component: ContentwritingComponent
      },
      {
        path: 'b2b-content-writing-company-in-bangalore/',
        component: B2bcontentComponent
      },
      {
        path: 'technology-content-writing-company-in-bangalore/',
        component: TechnologycontentComponent
      },

      {
        path: 'uiux/mobile-app/',
        component: MobileappComponent
      },
      {
        path: 'uiux/web/',
        component: WebComponent
      },
      {
        path: 'our-portfolio/',
        component: PortfolioComponent
      },
      {
        path: 'development/website/',
        component: WebsiteComponent
      },
      {
        path: 'digital/seo/',
        component: SeoComponent
      },
      {
        path: 'digital/smm/',
        component: SmmComponent
      },
      {
        path: 'digital/google-marketing/',
        component: GooglemarketingComponent
      },
      {
        path: 'contact-us/',
        component: ContactComponent
      }, {
        path: 'mynew/',
        component: MynewComponent
      },
      {
        path: 'portfolio/:url/',
        component: PortfolioitemsComponent
      },
      {
        path: 'seocamp/',
        component: SeocampComponent
      },

      // Landing-Pages -> -> dec-2020
      { path: 'account-based-marketing/', component: AccountMarketingComponent },
      { path: 'campaign-management-360/', component: CampMarketingComponent },
      { path: 'event-marketing/', component: EventmarketComponent },
      { path: 'content-marketing/', component: ContentMarketingComponent },
      { path: 'product-marketing/', component: ProdmarketComponent },
      { path: 'linkedin-marketing/', component: LinkedinComponent },
      { path: 'inbound-marketing/', component: InboundComponent },
      { path: 'employer-branding/', component: EmployerbrandComponent },
      { path: 'creative-agency/', component: CreativeComponent },
      { path: 'corporate-branding/', component: CorporateBrandComponent },
      { path: 'photography/', component: PhotographyComponent },

      // ORM ROI SEO Pages -> dec-2020
      { path: 'seo-company-in-pune/', component: RoiSeoPuneComponent },
      { path: 'seo-company-delhi/', component: RoiSeoDelhiComponent },
      { path: 'seo-services-in-hyderabad/', component: RoiSeoHyderabadComponent },
      { path: 'seo-company-in-kochi/', component: RoiSeoKochiComponent },
      { path: 'seo-company-in-kolkata/', component: RoiSeoKolkataComponent },
      { path: 'seo-company-in-coimbatore/', component: RoiSeoCoimbatoreComponent },
      { path: 'seo-company-in-chennai/', component: RoiSeoChennaiComponent },



      // all component we declare above SeocampaignComponent
      {
        path: ':url/',
        component: SeocampaignComponent
      },

      {
        path: '**',
        redirectTo: '',
        component: HomeComponent
      }

    ], { scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' }),
    TransferHttpCacheModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule,
    OwlModule,
    EmbedVideo,
    CollapseModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MetaService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
