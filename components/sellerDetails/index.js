import React from "react";
import Image from "next/image";
import Avatar from "../../assets/avatar.png";
import { GrLocation } from "react-icons/gr";

function SellerDetails({ title, location }) {
  return (
    <div>
      {/* <h1 className="font-bold text-xl leading-10 pt-8 text-black">
        SellerDetails
      </h1> */}
      <div className="flex space-x-2 items-center">
        <Image src={Avatar} height={30} width={30} />
        <div className="flex flex-col">
          <p className="font-medium text-lg text-black">{title}</p>
          <div className="flex space-x-2">
            <GrLocation />
            <p className="font-medium text-sm text-black">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
SellerDetails.defaultProps = {};

export default SellerDetails;
