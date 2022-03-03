import React from 'react'
import Link from "next/link"

import { 
  TO_ABOUT_PAGE,
  TO_HOME_PAGE,
  TO_CONTACTUS_PAGE,
  To_Testimonials_PAGE,
  TO_BookResearch_PAGE,
  TO_FeedBack_PAGE,
  TO_FAQ_PAGE } from "../constants";

const companyInfoData = {
  title: <h2>Company Info</h2>,
  links: [
    {label: "Home", slug:TO_HOME_PAGE},
    {label:"About Us", slug:TO_ABOUT_PAGE},
    {label:"Testimonials", slug:To_Testimonials_PAGE},
    
  ],
    
};
const data = {
  title: <h2>Company Info</h2>,
  links: [
    {label: "Home", slug:"/"},
    {label:"About Us", slug:"/about"},
    {label:"Testimonials", slug:"testimonials"},
    {label:"FAQ", slug:"faq"},
    {label:"BookReaserch", slug:"bookresearch"},
    {label:"Contact Us", slug:"contact-form"},
    {label:"Feedback", slug:"https://us1.list-manage.com/survey?u=24dc39f132c498d9e38ad1665&id=bae23faa1d&attribution=false"}
  ],
    
};
const learnMoredata = {
  title: <h2>Learn More</h2>,
  links:[
    //{label:"Pricing", slug:"/pricing"},
    //{label:"Licensing", slug:"/about"},
    {label: "Offer Details", slug:"/offerdetails"},
    {label:"Terms of Use", slug:"/termsofUse"},
    {label:"Privacy Policy", slug:"/privacypolicy"},
  ]

  // links: [
  //   "Pricing",
  //   "Licensing",
  //   "Terms of Use",
  //   "Privacy Policy"
  // ],
};
// const needHelpData = {
//   title: "Need Help",
//   links: [
//     //{label:"Contact Us", slug:TO_CONTACTUS_PAGE},
//     { text: "99 Address XYZ. USA", icon: "/location.svg" },
//     { text: "(1234) 654-00000", icon: "/phone.svg" },
//     { text: "support@cheapbookdeals.com", icon: "/inbox.svg" },
//     { text: "Mon - Sat 09:00 - 17:00", icon: "/time.svg" },
//   ]
// };

const needHelpData = {
  title: <h2>Need Help</h2>,
  links: [
   
    {label:"FAQ", slug:TO_FAQ_PAGE},
    {label:"BookReaserch", slug:TO_BookResearch_PAGE},
    {label:"Contact Us", slug:TO_CONTACTUS_PAGE},
    {label:"Feedback", slug:TO_FeedBack_PAGE}
  ],
    
};

const Footer = () => {
  return (
    <>
   

 <section className="footerSection "  >
  <div className="footerDiv container">
    <div className="text-center">
      <h1 className="footerTitle" >World{`'`}s 1<sup>st</sup> Books Marketplace</h1>
    </div>
    <div className="row">
   
      <div className="col-6 offset-3">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <h2 className="footerLinkTitle">Company Info</h2>
            <br />
            <div className="row">
             
              {
                companyInfoData.links.map((el,index) => {
                  return (
                    <div className="col-lg-12 col-md-12 col-sm-12" key={index}>
                  <h5 className="footerLinks">
                <Link href={el.slug}>
                <a style={{textDecoration: 'none'}} className="footerLinks">{el.label}</a>
</Link>
                 
                </h5>
                  </div>
                  )
                })
              }
            
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 md-pb">
            <h2 className="footerLinkTitle">Learn More</h2>
            <br />
            <div className="row">

            
              {
            learnMoredata.links.map((el,indx) => {
                  return ( <div className="col-lg-12 col-md-12 col-sm-12" key={indx}>
                    <h5 className="footerLinks">
                 
                  {/* <a style={{textDecoration: 'none'}} className="footerLinks">{el}</a> */}
                  <Link href={el.slug}>
                <a style={{textDecoration: 'none'}} className="footerLinks">{el.label}</a>
</Link>
  
                   
                  </h5>
                    </div>
                  )
                })
              }
           
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 md-pb img_cls">
            <h2 className="footerLinkTitle">Need Help </h2>
            <br />
            <div className="row">
            
            {
                needHelpData.links.map((el,index) => {
                  return (
                    <div className="col-lg-12 col-md-12 col-sm-12" key={index}>
                  <h5 className="footerLinks">
                <Link href={el.slug}>
                <a style={{textDecoration: 'none'}} className="footerLinks">{el.label}</a>
</Link>
                 
                </h5>
                  </div>
                  )
                })
              }
             
         
           
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Footer
