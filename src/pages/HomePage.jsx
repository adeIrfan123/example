import React, { useEffect } from "react";
import logoTokped from "../assets/logos/tokopedia.png";
import logoShopee from "../assets/logos/shopee.png";
import logoLazada from "../assets/logos/lazada.png";
import logoAmazon from "../assets/logos/amazon.png";
import bgCard1 from "../assets/Image/image.jpg";

const HomePage = () => {
  // useEffect(() => {
  //   const logo = document.querySelector(".logo").cloneNode(true);
  //   document.querySelector(".logo-container").appendChild(logo);
  // }, [logo]);
  return (
    <div className="">
      <div className="bg-image">
        <div className="container  mx-auto">
          <div className="px-4 pt-56">
            <h1 className="font-bold text-white text-4xl md:w-full md:text-5xl">
              Premium <br /> Merch For Your{" "}
              <span className="text-6xl text-[#9c6c64]">Style</span>
            </h1>
            <p className=" mt-4 text-white md:w-[550px] md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, dolore. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Deserunt rerum cumque aspernatur quae
              perferendis laboriosam amet, dolor exercitationem odio sit?
            </p>
            <button className="bg-slate-300 bg-opacity-90 p-4 my-3 font-bold text-2xl hover:shadow-md hover:shadow-slate-500 hover:bg-opacity-100  transition-all active:bg-slate-600 active:text-white active:shadow-sm active:shadow-slate-500 active:translate-y-1 rounded-lg">
              Start Design
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-white to-slate-200 h-max">
        <div className="container mx-auto">
          <div className="text-center md:text-center md:mt-4 lg:flex lg:gap-10">
            <h3 className="my-5 font-bold text-4xl md:mx-auto md:w-[700px] lg:w-[450px] xl:w-[350px]">
              Trusred By
            </h3>
            <div className="logo-container overflow-hidden">
              <div className="logo mx-auto gap-[4rem] flex items-center ">
                <img src={logoTokped} alt="" className="w-32 h-24" />
                <img src={logoShopee} alt="" className="w-20 h-24" />
                <img src={logoLazada} alt="" className="w-56 h-16" />
                <img src={logoAmazon} alt="" className="w-44 h-10" />
                <img src={logoAmazon} alt="" className="w-44 h-10" />
                <img src={logoAmazon} alt="" className="w-44 h-10" />
                <img src={logoAmazon} alt="" className="w-44 h-10" />
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-24 px-4 lg:flex ">
            <div className="md:w-[70%] lg:w-[40%]">
              <h2 className="mb-2 font-medium text-xl md:text-2xl">
                Case Studies
              </h2>
              <h3 className="mb-4 font-semibold text-3xl md:text-4xl">
                How the best brands use Assimbly
              </h3>
              <p className="mb-8 font-medium md:w-[68%] md:text-xl  lg:w-[95%]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia maiores, reiciendis debitis quo aperiam magni impedit
                explicabo similique.
              </p>
              <a
                href=""
                className="font-semibold text2 md:font-bold md:text-2xl"
              >
                Discover more stories <i class="ri-arrow-right-line"></i>
              </a>
            </div>
            <div className="w-[100%] min-h-max overflow-x-scroll">
              <div className="w-max mt-4 grid grid-cols-3 gap-4  lg:grid-cols-2 ">
                <div className="card1 w-72 relative group rounded-lg overflow-hidden">
                  {/* <img src={bgCard1} alt="" className="h-72 rounded-lg" /> */}
                  <h4 className="absolute text-white bottom-0 left-4 font-bold text-3xl">
                    Art Basel
                  </h4>
                  <div className="bg-slate-300 absolute top-3 left-3 px-3 py-1 flex items-center gap-1 rounded-full">
                    <i class="ri-circle-fill"></i>
                    <p className="font-semibold ">T-Shirt</p>
                  </div>
                  <div className="bg-zinc-300 absolute bottom-0 px-3 pt-4 translate-y-96 group-hover:translate-y-0  transition-all duration-500">
                    <h4 className="text-3xl font-bold mb-4">Art Basel</h4>
                    <p className="pb-12">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est obcaecati,
                    </p>
                  </div>
                </div>
                <div className="card2 w-72 h-96 relative group rounded-lg overflow-hidden">
                  {/* <img src={bgCard1} alt="" className="h-72 rounded-lg" /> */}
                  <h4 className="absolute text-white bottom-0 left-4 font-bold text-3xl">
                    Art Basel
                  </h4>
                  <div className="bg-slate-300 absolute top-3 left-3 px-3 py-1 flex items-center gap-1 rounded-full">
                    <i class="ri-circle-fill"></i>
                    <p className="font-semibold ">T-Shirt</p>
                  </div>
                  <div className="bg-zinc-300 absolute bottom-0 px-3 pt-4 translate-y-96 group-hover:translate-y-0  transition-all duration-500">
                    <h4 className="text-3xl font-bold mb-4">Art Basel</h4>
                    <p className="pb-12">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est obcaecati,
                    </p>
                  </div>
                </div>
                <div className="card1 w-72 relative group rounded-lg overflow-hidden">
                  {/* <img src={bgCard1} alt="" className="h-72 rounded-lg" /> */}
                  <h4 className="absolute text-white bottom-0 left-4 font-bold text-3xl">
                    Art Basel
                  </h4>
                  <div className="bg-slate-300 absolute top-3 left-3 px-3 py-1 flex items-center gap-1 rounded-full">
                    <i class="ri-circle-fill"></i>
                    <p className="font-semibold ">T-Shirt</p>
                  </div>
                  <div className="bg-zinc-300 absolute bottom-0 px-3 pt-4 translate-y-96 group-hover:translate-y-0  transition-all duration-500">
                    <h4 className="text-3xl font-bold mb-4">Art Basel</h4>
                    <p className="pb-12">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est obcaecati,
                    </p>
                  </div>
                </div>
                <div className="card1 w-72 relative group rounded-lg overflow-hidden">
                  {/* <img src={bgCard1} alt="" className="h-72 rounded-lg" /> */}
                  <h4 className="absolute text-white bottom-0 left-4 font-bold text-3xl">
                    Art Basel
                  </h4>
                  <div className="bg-slate-300 absolute top-3 left-3 px-3 py-1 flex items-center gap-1 rounded-full">
                    <i class="ri-circle-fill"></i>
                    <p className="font-semibold ">T-Shirt</p>
                  </div>
                  <div className="bg-zinc-300 absolute bottom-0 px-3 pt-4 translate-y-96 group-hover:translate-y-0  transition-all duration-500">
                    <h4 className="text-3xl font-bold mb-4">Art Basel</h4>
                    <p className="pb-12">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est obcaecati,
                    </p>
                  </div>
                </div>
                <div className="card1 w-72 relative group rounded-lg overflow-hidden">
                  {/* <img src={bgCard1} alt="" className="h-72 rounded-lg" /> */}
                  <h4 className="absolute text-white bottom-0 left-4 font-bold text-3xl">
                    Art Basel
                  </h4>
                  <div className="bg-slate-300 absolute top-3 left-3 px-3 py-1 flex items-center gap-1 rounded-full">
                    <i class="ri-circle-fill"></i>
                    <p className="font-semibold ">T-Shirt</p>
                  </div>
                  <div className="bg-zinc-300 absolute bottom-0 px-3 pt-4 translate-y-96 group-hover:translate-y-0  transition-all duration-500">
                    <h4 className="text-3xl font-bold mb-4">Art Basel</h4>
                    <p className="pb-12">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est obcaecati,
                    </p>
                  </div>
                </div>
                <div className="card1 w-72 relative group rounded-lg overflow-hidden">
                  {/* <img src={bgCard1} alt="" className="h-72 rounded-lg" /> */}
                  <h4 className="absolute text-white bottom-0 left-4 font-bold text-3xl">
                    Art Basel
                  </h4>
                  <div className="bg-slate-300 absolute top-3 left-3 px-3 py-1 flex items-center gap-1 rounded-full">
                    <i class="ri-circle-fill"></i>
                    <p className="font-semibold ">T-Shirt</p>
                  </div>
                  <div className="bg-zinc-300 absolute bottom-0 px-3 pt-4 translate-y-96 group-hover:translate-y-0  transition-all duration-500">
                    <h4 className="text-3xl font-bold mb-4">Art Basel</h4>
                    <p className="pb-12">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est obcaecati,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
