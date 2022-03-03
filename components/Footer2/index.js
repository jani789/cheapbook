import React from "react";
import Image from "next/image";

import BgImg2 from "../../assets/bg2.png";
import Video from "../../assets/video.png";

function Footer2() {
  return (
    <>
      <div className="relative overflow-hidden max-w-7xl mx-auto">
        <Image src={BgImg2} className="w-full" />
        <div className="absolute top-0 left-0 px-6 py-4 p-6 grid md:grid-cols-2 grid-cols-1 justify-between">
          <div className="text-white col-md-7 offset-md-2 ">
            <p className="font-bold md:text-3xl text-sm font-raleway text-center ">
              Why <br />
              CheapBookDeals?
            </p>
            <p className="font-roboto leading-3 text-md font-normal">
              Readers are the Leader. Almost everyone read books/Textbooks and
              spent a lot of money on books, and after reading, it sit's on your
              shelf. We are here to help people to make books available for them
              at afordable price and helping people who wants to sell their
              books. We believe Knowledge and Education should not be expensive
              it should be sharable, So Sign up now for Free and start Trade in
              your Books.
            </p>
          </div>

          <div className="col-md-5">
            <div style={{ marginTop: "2rem" }}>
              <iframe
                width="500"
                height="210"
                src="https://www.youtube.com/embed/fPPNK9lBShc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer2;
