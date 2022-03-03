import React from 'react'
import Link from "next/link"
import { sectionBeforeFooterData } from './SectionBeforeFooterData';
import { 
  TO_ABOUT_PAGE,
  TO_HOME_PAGE,
  TO_CONTACTUS_PAGE,
  To_Testimonials_PAGE,
  TO_BookResearch_PAGE,
  TO_FeedBack_PAGE,
  TO_FAQ_PAGE } from "../constants";

const companyInfoData = {
  title: "Company Info",
  links: [
    {label:"Home", slug:TO_HOME_PAGE},
    {label:"About Us", slug:TO_ABOUT_PAGE},
    {label:"Testimonials", slug:To_Testimonials_PAGE},
    
  ],
    
};
const data = {
  title: "Company Info",
  links: [
    {label:"Home", slug:"/"},
    {label:"About Us", slug:"/about"},
    {label:"Testimonials", slug:"testimonials"},
    {label:"FAQ", slug:"faq"},
    {label:"BookReaserch", slug:"bookresearch"},
    {label:"Contact Us", slug:"contact-form"},
    {label:"Feedback", slug:"https://us1.list-manage.com/survey?u=24dc39f132c498d9e38ad1665&id=bae23faa1d&attribution=false"}
  ],
    
};
const learnMoredata = {
  title: "Learn More",
  links: [
    {label:"Pricing", slug:"/"},
    {label:"Licensing", slug:"/about"},
    {label:"Terms of Use", slug:"testimonials"},
    {label:"Privacy Policy", slug:"faq"},
   
  ],
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
  title: "Need Help",
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
     <section className="section-before-footer" style={{backgroundColor:"#eee", paddingTop:"1rem"}}  >
  <div className="container">
    <div className="row" >
    <div className="col-md-5" >
     
      <h2 className="text-center">{sectionBeforeFooterData.title}</h2>
      <h4 className="sectionBeforeFooterDescription text-center w-100"
          >{sectionBeforeFooterData.description}</h4>
     
  
    </div>
    <div className="col-md-5 offset-md-2">
   {/* <div className="col-lg-4  col-md-5 col-sm-6 md-pb col1"> */}
      <div style={{marginTop:"2rem"}}>
      <iframe width="500" height="280" src="https://www.youtube.com/embed/fPPNK9lBShc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      
      {/* </div> */}
    </div>
    </div>
  
 
   
  
    
  </div>
</section>



    </>
  )
}

export default Footer
