import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutPlusCounters extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_plus_counters';
  info: {
    description: '';
    displayName: 'About Plus Counters';
    icon: 'user';
  };
  attributes: {
    Badge: Schema.Attribute.String;
    Counters: Schema.Attribute.Component<'shared.counter-item', true>;
    Description: Schema.Attribute.RichText & Schema.Attribute.Required;
    Img: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_sections';
  info: {
    displayName: 'About Section';
    icon: 'file';
  };
  attributes: {
    Banner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Description: Schema.Attribute.RichText & Schema.Attribute.Required;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedAddressDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_address_details';
  info: {
    description: 'Address information with embedded map';
    displayName: 'Address Details';
    icon: 'map-marker';
  };
  attributes: {
    Address: Schema.Attribute.Text & Schema.Attribute.Required;
    contactInfo: Schema.Attribute.Component<'shared.contact-info', true>;
    embeddedMapLink: Schema.Attribute.Text;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedAppDownload extends Struct.ComponentSchema {
  collectionName: 'components_shared_app_downloads';
  info: {
    displayName: 'App Download';
    icon: 'cast';
  };
  attributes: {
    Images: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCardFlightBlock extends Struct.ComponentSchema {
  collectionName: 'components_deal_card_flight_blocks';
  info: {
    displayName: 'Card Flight Block';
  };
  attributes: {
    flightItems: Schema.Attribute.Component<'shared.flight-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    topImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedCardHotelBlock extends Struct.ComponentSchema {
  collectionName: 'components_deal_card_hotel_blocks';
  info: {
    displayName: 'Card Hotel Block';
  };
  attributes: {
    hotelSlides: Schema.Attribute.Component<'shared.hotel-slide', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    topImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedCategoryItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_category_items';
  info: {
    description: '';
    displayName: 'Category Item';
    icon: 'folder';
  };
  attributes: {
    ButtonLink: Schema.Attribute.String;
    ButtonText: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    description: 'Contact information details';
    displayName: 'Contact Info';
    icon: 'phone';
  };
  attributes: {
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    Value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCounterItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_counter_items';
  info: {
    description: '';
    displayName: 'Counter Item';
    icon: 'clock';
  };
  attributes: {
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    Value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCurrentOpening extends Struct.ComponentSchema {
  collectionName: 'components_shared_current_openings';
  info: {
    description: 'Section containing title and a list of opening details';
    displayName: 'Current Opening';
    icon: 'folder';
  };
  attributes: {
    Details: Schema.Attribute.Component<'shared.opening-detail', true>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCustomerCare extends Struct.ComponentSchema {
  collectionName: 'components_shared_customer_cares';
  info: {
    description: '';
    displayName: 'Customer Care';
  };
  attributes: {
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedDownloadAppSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_download_app_sections';
  info: {
    description: '';
    displayName: 'Download App Section';
  };
  attributes: {
    Banner: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Description: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    DownloadLinks: Schema.Attribute.Component<'shared.image-link', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Header: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SharedFamousPerson extends Struct.ComponentSchema {
  collectionName: 'components_shared_famous_people';
  info: {
    displayName: 'Famous Person';
    icon: 'user';
  };
  attributes: {
    Description: Schema.Attribute.RichText & Schema.Attribute.Required;
    Images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFlightItem extends Struct.ComponentSchema {
  collectionName: 'components_deal_flight_items';
  info: {
    displayName: 'Flight Item';
  };
  attributes: {
    airlineLogo: Schema.Attribute.Media<'images'>;
    from: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.String & Schema.Attribute.Required;
    to: Schema.Attribute.String & Schema.Attribute.Required;
    travelDate: Schema.Attribute.String;
  };
}

export interface SharedFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'Footer Links';
  };
  attributes: {
    Footer_Link: Schema.Attribute.Component<'shared.navigation', true>;
    Heading: Schema.Attribute.String;
  };
}

export interface SharedHotelSlide extends Struct.ComponentSchema {
  collectionName: 'components_deal_hotel_slides';
  info: {
    displayName: 'Hotel Slide';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Book Now'>;
    description: Schema.Attribute.Text;
    hotelImage: Schema.Attribute.Media<'images'>;
    hotelName: Schema.Attribute.String & Schema.Attribute.Required;
    location: Schema.Attribute.String;
  };
}

export interface SharedImageLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_image_links';
  info: {
    description: '';
    displayName: 'Image Link';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String;
  };
}

export interface SharedItineraryDay extends Struct.ComponentSchema {
  collectionName: 'components_shared_itinerary_days';
  info: {
    displayName: 'Itinerary Day';
    icon: 'calendar';
  };
  attributes: {
    dayLabel: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedJourneyBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_journey_blocks';
  info: {
    description: '';
    displayName: 'Journey Block';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedJourneySection extends Struct.ComponentSchema {
  collectionName: 'components_shared_journey_sections';
  info: {
    description: '';
    displayName: 'Journey Section';
  };
  attributes: {
    AirlineLinks: Schema.Attribute.Component<'shared.image-link', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Description: Schema.Attribute.String;
    Header: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedNavigation extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigations';
  info: {
    displayName: 'Navigation';
    icon: 'arrowLeft';
  };
  attributes: {
    Icon: Schema.Attribute.String;
    OpenInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    URL: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedNewsletterSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_newsletter_sections';
  info: {
    description: '';
    displayName: 'Newsletter Section';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    Header: Schema.Attribute.String;
  };
}

export interface SharedOpeningDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_opening_details';
  info: {
    description: 'Career opening details';
    displayName: 'Opening Detail';
    icon: 'briefcase';
  };
  attributes: {
    Date: Schema.Attribute.Date;
    Description: Schema.Attribute.RichText;
    Mail: Schema.Attribute.Email;
    Openings: Schema.Attribute.Integer;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPartnerSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_partner_sections';
  info: {
    description: '';
    displayName: 'Partner Section';
  };
  attributes: {
    Banner: Schema.Attribute.Media<'images'>;
    Description: Schema.Attribute.RichText;
    Details: Schema.Attribute.Component<'shared.perfect-block', true>;
    Header: Schema.Attribute.String;
  };
}

export interface SharedPerfectBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_perfect_blocks';
  info: {
    description: '';
    displayName: 'Perfect Block';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPinboxItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_pinbox_items';
  info: {
    description: '';
    displayName: 'Pinbox Item';
    icon: 'pin';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images'>;
    Label: Schema.Attribute.String & Schema.Attribute.Required;
    Link: Schema.Attribute.String;
    Value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPromotionBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_promotion_banners';
  info: {
    description: '';
    displayName: 'Promotion Banner';
  };
  attributes: {
    Banner: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SharedQrDownloadLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_qr_download_links';
  info: {
    description: '';
    displayName: 'QR Download Link';
  };
  attributes: {
    qrImage: Schema.Attribute.Media<'images'>;
    storeImage: Schema.Attribute.Media<'images'>;
    storeLink: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_services_sections';
  info: {
    description: '';
    displayName: 'Services Section';
    icon: 'cog';
  };
  attributes: {
    ContactItems: Schema.Attribute.Component<'shared.pinbox-item', true>;
    Description: Schema.Attribute.RichText & Schema.Attribute.Required;
    SubTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'dashboard';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    Link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    OpenInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    Title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface SharedStorySection extends Struct.ComponentSchema {
  collectionName: 'components_shared_story_sections';
  info: {
    description: '';
    displayName: 'Story Section';
    icon: 'book';
  };
  attributes: {
    CategoryItems: Schema.Attribute.Component<'shared.category-item', true>;
    Description: Schema.Attribute.RichText & Schema.Attribute.Required;
    SubTitle: Schema.Attribute.String;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTabSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_tab_sections';
  info: {
    displayName: 'Tab Section';
    icon: 'layer';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    tabId: Schema.Attribute.String;
    tabTitle: Schema.Attribute.String;
  };
}

export interface SharedTextBox extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_boxes';
  info: {
    displayName: 'TextBox';
  };
  attributes: {
    Textbox: Schema.Attribute.String;
  };
}

export interface SharedTitleDescription extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_descriptions';
  info: {
    displayName: 'Title-Description';
    icon: 'book';
  };
  attributes: {
    Description: Schema.Attribute.RichText & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTravelAgencyInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_travel_agency_infos';
  info: {
    description: '';
    displayName: 'Travel Agency Info';
  };
  attributes: {
    details: Schema.Attribute.RichText;
    logo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTravelSlide extends Struct.ComponentSchema {
  collectionName: 'components_shared_travel_slides';
  info: {
    description: '';
    displayName: 'Travel Slide';
  };
  attributes: {
    country: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedUspItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_usp_items';
  info: {
    description: '';
    displayName: 'USP Item';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-plus-counters': SharedAboutPlusCounters;
      'shared.about-section': SharedAboutSection;
      'shared.address-details': SharedAddressDetails;
      'shared.app-download': SharedAppDownload;
      'shared.card-flight-block': SharedCardFlightBlock;
      'shared.card-hotel-block': SharedCardHotelBlock;
      'shared.category-item': SharedCategoryItem;
      'shared.contact-info': SharedContactInfo;
      'shared.counter-item': SharedCounterItem;
      'shared.current-opening': SharedCurrentOpening;
      'shared.customer-care': SharedCustomerCare;
      'shared.download-app-section': SharedDownloadAppSection;
      'shared.famous-person': SharedFamousPerson;
      'shared.flight-item': SharedFlightItem;
      'shared.footer-links': SharedFooterLinks;
      'shared.hotel-slide': SharedHotelSlide;
      'shared.image-link': SharedImageLink;
      'shared.itinerary-day': SharedItineraryDay;
      'shared.journey-block': SharedJourneyBlock;
      'shared.journey-section': SharedJourneySection;
      'shared.media': SharedMedia;
      'shared.navigation': SharedNavigation;
      'shared.newsletter-section': SharedNewsletterSection;
      'shared.opening-detail': SharedOpeningDetail;
      'shared.partner-section': SharedPartnerSection;
      'shared.perfect-block': SharedPerfectBlock;
      'shared.pinbox-item': SharedPinboxItem;
      'shared.promotion-banner': SharedPromotionBanner;
      'shared.qr-download-link': SharedQrDownloadLink;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.services-section': SharedServicesSection;
      'shared.slider': SharedSlider;
      'shared.social-link': SharedSocialLink;
      'shared.story-section': SharedStorySection;
      'shared.tab-section': SharedTabSection;
      'shared.text-box': SharedTextBox;
      'shared.title-description': SharedTitleDescription;
      'shared.travel-agency-info': SharedTravelAgencyInfo;
      'shared.travel-slide': SharedTravelSlide;
      'shared.usp-item': SharedUspItem;
    }
  }
}
