import React from "react";
import { Photoselector } from "../../components/photoselector/Photoselector";
import "../create/create.css";
import { Tools } from "../../components/tools/Tools";
import { Classic } from "../../components/classic/Classic";
import { Slider } from "../../components/slider/Slider";

export const Create = () => {
  const photoEditingItems = [
    {
      image: "/assets/images/assets-cached (79).jpg",
      text: "Blur",
    },
    {
      image: "/assets/images/assets-cached - 2024-03-20T213119.762.jpg",
      text: "Color Splash",
    },
    {
      image: "/assets/images/assets-cached (41).jpg",
      text: "Motion",
    },
    {
      image: "/assets/images/assets-cached - 2024-03-20T213140.742.jpg",
      text: "Low key",
    },
    {
      image: "/assets/images/assets-cached (83).jpg",
      text: "High key",
    },
    {
      image: "/assets/images/assets-cached (51).jpg",
      text: "Sepia",
    },
    {
      image: "/assets/images/assets-cached (49).jpg",
      text: "Black & White",
    },
    

  ];
  const profileItems = [
    {
      image: "/assets/images/assets-cached (59).jpg",
    },
    {
      image: "/assets/images/assets-cached (69).jpg",
    },
    {
      image: "/assets/images/assets-cached (70).jpg",
    },
    {
      image: "/assets/images/assets-cached - 2024-03-23T020216.472.jpg",
    },
    {
      image: "/assets/images/assets-cached - 2024-03-23T020247.832.jpg",
    },
    {
      image: "/assets/images/assets-cached - 2024-03-23T020329.215.jpg",
    },
    {
      image: "/assets/images/assets-cached - 2024-03-23T020531.330.jpg",
    },
    {
      image: "/assets/images/assets-cached - 2024-03-23T020610.643.jpg",
    },
    {
      image: "/assets/images/assets-cached - 2024-03-23T021017.986.jpg",
    },
    {
      image: "/assets/images/assets-cached - 2024-03-23T021053.851.jpg",
    },
    {
      image: "/assets/images/assets-cached - 2024-03-23T021128.172.jpg",
    },
  ];

  const marketplaceItems = [
    {
      image: "/assets/images/facebook.svg",
      class:"icon-image",
      text:"Facebook Marketplace",
    },
    {
      image: "/assets/images/shopping.svg",
      class:"icon-image",
      text:"eBay",

    },
    {
      image: "/assets/images/poshmark.svg",
      class:"icon-image",
      text:"Poshmark",
    },
    {
      image: "/assets/images/depop.svg",
      class:"icon-image",
      text:"Depop",
    },
    {
      image: "/assets/images/mercari.svg",
      class:"icon-image",
      text:"Mercari",
    },
    {
      image: "/assets/images/MercadoLibre.svg",
      class:"icon-image",
      text:"Mercari",
    },
    {
      image: "/assets/images/shoppe.svg",
      class:"icon-image",
      text:"Mercari",
    },
    {
      image: "/assets/images/lazada.svg",
      class:"icon-image",
      text:"Mercari",
    },
    {
      image: "/assets/images/etsy.svg",
      class:"icon-image",
      card:"card-height",
      text:"Mercari",
    },
    {
      image: "/assets/images/vinted.svg",
      class:"icon-image",
      card:"card-height",
      text:"Mercari",
    },
    {
      image: "/assets/images/amazon.svg",
      class:"icon-image",
      text:"Mercari",
    },
    {
      image: "/assets/images/shopify.svg",
      class:"icon-image",
      text:"Shopify",
     
    },
    {
      image: "/assets/images/shopify.svg",
      class:"icon-image",
      card:"card-shopify",
      text:"Shopify",
    },
    {
      image: "/assets/images/shopify.svg",
      class:"icon-image",
      card:"card-shopify-final",
      text:"Shopify",
    },
  ];

  const socialItems = [
    {
      image: "/assets/images/instagram.svg",
      class:"icon-image",
      text:"Facebook Marketplace",
      card:"instagram-card-height",
    },
    {
      image: "/assets/images/instagram.svg",
      class:"icon-image",
      text:"instagram",

    },
    {
      image: "/assets/images/instagram.svg",
      class:"icon-image",
      text:"instagram",
      card:"instagram-card-height",
    },
    {
      image: "/assets/images/tiktok.svg",
      class:"icon-image",
      text:"tiktok",
      card:"instagram-card-height",
    },
    {
      image: "/assets/images/tiktok.svg",
      class:"icon-image",
      text:"tiktok",
      card:"card-tiktok-thumbnail",
    },
    {
      image: "/assets/images/youtube.svg",
      class:"icon-image",
      text:"youtube",
      card:"card-youtube",
    },
    {
      image: "/assets/images/youtube.svg",
      class:"icon-image",
      text:"youtube",
      card:"card-youtube",
    },
    {
      image: "/assets/images/facebook.svg",
      class:"icon-image",
      text:"facebook",
      card:"card-facebook",
    },
    {
      image: "/assets/images/facebook.svg",
      class:"icon-image",
      text:"facebook",
      card:"card-youtube",
    },
    {
      image: "/assets/images/linkedin.svg",
      class:"icon-image",
      text:"Linkedin",
      card:"card-facebook",
    },
    {
      image: "/assets/images/linkedin.svg",
      class:"icon-image",
      text:"Mercari",
    },
    {
      image: "/assets/images/whatapp.svg",
      class:"icon-image",
      text:"Shopify",
     
    },
    {
      image: "/assets/images/pintsrest.svg",
      class:"icon-image",
      text:"pinterest",
      card:"card-pinterest",
    },
  ];
  const canvasItems = [
    {
      image: "/assets/images/gallery.svg",
      class:"icon-image",
      text:"instagram",
      id:"pro"

    },
    {
      image: "/assets/images/gallery.svg",
      class:"icon-image",
      text:"Landscape",
      card:"Landscape-card",
    },
    {
      image: "/assets/images/gallery.svg",
      class:"icon-image",
      text:"Landscape",
      card:"card-gallery",
    },
    {
      image: "/assets/images/gallery.svg",
      class:"icon-image",
      text:"tiktok",
    },
   
    
  ];

  return (
    <div className="create-section">
      <Photoselector />
      <Tools />
      <Classic />
      <h5 className="mb-3 mt-4">Photo Editing Classics</h5>
      <Slider sliderItems={photoEditingItems} swiperName="swiper1" />
      <h5 className="mb-3 mt-4">Profile Pics</h5>
      <Slider sliderItems={profileItems} swiperName="swiper2"/>
      <h5 className="mb-3 mt-4">Marketplaces</h5>
      <Slider sliderItems={marketplaceItems} swiperName="swiper3" />
      <h5 className="mb-3 mt-4">Social Networks</h5>
      <Slider sliderItems={socialItems} swiperName="swiper4" />
      <h5 className="mb-3 mt-4">Start from a Blank Canvas</h5>
      <Slider sliderItems={canvasItems} swiperName="swiper5" />
    </div>
  );
};
