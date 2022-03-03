import React from "react";
import { TestimonialData } from "./TestimonialData";

import Image from "next/image";
import classes from "./testimonials.module.css"

const TestimonialComponent = () => {
  return (
    <>
      <div className="row" style={{marginBottom:"2rem"}}>
        <div className="col-12">
          <h4 className={`${classes.page_title} text-center`}>
            <span>
              <i className="fa fa-user t-icon" />
              <b>Testimonials</b>
            </span>
          </h4>
        </div>
      </div>
      <div className="row">
        {TestimonialData.map((el, index) => {
          return (
            <div key={index} className={`row ${classes.testimonial}`} style={{padding:0, margin: 0, justifyContent:"center" }}>

                <div className="col-2 " style={{ padding: 0, marginTop:"1rem", textAlign:"center" }}>
                  <Image
                    src={el.img}
                    alt="profile-pic"
                    width={150}
                    height={150}
                    
            
                   
                  />
                </div>
                <div className="col-6">
                  <h3 className={classes.t_title}>{el.title}</h3>
                  <span>
                    {el.rating <= el.ratingOutOf && (
                      <>
                        {Array.from(Array(el.rating), (e, i) => {
                          return (
                            <>
                              <span className={`fa fa-star ${classes.checked}`} key={i}></span>
                            </>
                          );
                        })}
                        {Array.from(Array(el.ratingOutOf - el.rating), (e, i) => {
                          return (
                            <>
                              <span className="fa fa-star" key={i}></span>
                            </>
                          );
                        })}
                      </>
                    )}
                  </span>

                  <p className={`${classes.comment}`}>{el.comment}</p>
                  <h5 className={`${classes.name}`}>{el.name}</h5>
                  {
                    (TestimonialData.length -1 !== index)?(<hr/>):(null)
                  }
                  
                </div>
           
            </div>
          );
        })}
      </div>
    
    </>
  );
};

export default TestimonialComponent;
