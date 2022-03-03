import Image from "next/image";
import Heart from "../../assets/heart.png";

function Card({ mainLabel, data, className }) {
  return (
    <div>
      <h3 className="font-roboto text-xl font-medium leading-4 pt-7 pb-7">
        {mainLabel}
      </h3>
      <div className={className}>
        {data?.map((v) => {
          return (
            <div className="font-roboto " key={v.title}>
              <div className="relative">
                <div className="">

                <Image src={v.src} alt="" />
                </div>
                {/* <div className="flex items-center justify-center bg-gray-400 w-8 h-8 rounded-full">
                  <Image
                    src={Heart}
                    className="p-4"
                  />
                </div> */}
                {/* <button className="md:hidden absolute inline-flex h-8 items-center px-8 py-1 text-sm font-medium rounded-lg shadow-sm text-white bg-orange-100 focus:outline-none hover:shadow">
                  chat
                </button> */}
              </div>
              <p className="font-medium text-md">{v.title}</p>
              <p className="font-normal text-sm text-gray-400">{v.subtitle}</p>
              <div className="flex justify-between">
                <p className="font-medium text-md">$ {v.price}</p>
                <button className="sm:hidden md:block inline-flex h-8 items-center px-8 py-1 text-sm font-medium rounded-lg shadow-sm text-white bg-orange-100 focus:outline-none hover:shadow">
                  chat
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
Card.defaultProps = {
  className: "grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-8 items-start",
};
export default Card;
