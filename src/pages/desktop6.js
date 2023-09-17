import { useCallback } from "react";

const Desktop6 = () => {
  const onREGISTERText1Click = useCallback(() => {
    // Please sync "Desktop - 4" to the project
  }, []);

  return (
    <div className="relative [background:linear-gradient(180deg,_#799dc8_51.33%,_rgba(121,_157,_200,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1024px] overflow-hidden text-left text-xl text-white font-inter">
      <b className="absolute top-[207px] left-[605px] text-[36px]">REGISTER</b>
      <div className="absolute top-[279px] left-[505px] bg-lavenderblush w-[430px] h-[39px]" />
      <div className="absolute top-[354px] left-[505px] bg-lavenderblush w-[430px] h-10" />
      <div className="absolute top-[429px] left-[505px] bg-lavenderblush w-[430px] h-[41px]" />
      <div className="absolute top-[504px] left-[505px] bg-lavenderblush w-[430px] h-[43px]" />
      <div className="absolute top-[579px] left-[505px] bg-lavenderblush w-[430px] h-10" />
      <div className="absolute top-[636px] left-[640px] bg-steelblue w-[134px] h-[45px]" />
      <div
        className="absolute top-[646px] left-[653px] font-semibold cursor-pointer"
        onClick={onREGISTERText1Click}
      >
        REGISTER
      </div>
      <div className="absolute top-[286px] left-[535px] font-semibold text-dimgray-300">
        Name
      </div>
      <div className="absolute top-[361px] left-[535px] font-semibold text-dimgray-100">
        Mobile number
      </div>
      <div className="absolute top-[436px] left-[535px] font-semibold text-dimgray-100">
        Country
      </div>
      <div className="absolute top-[511px] left-[536px] font-semibold text-dimgray-200">{`Pin Code `}</div>
      <div className="absolute top-[586px] left-[535px] font-semibold text-dimgray-200 inline-block w-[195px]">
        Address
      </div>
      <img
        className="absolute top-[199px] left-[804px] w-[55px] h-[52px] object-cover"
        alt=""
        src="/image-9@2x.png"
      />
      <img
        className="absolute top-[207px] left-[520px] w-[72px] h-[49px] object-cover"
        alt=""
        src="/image-10@2x.png"
      />
      <div className="absolute top-[174.5px] left-[428.5px] box-border w-[568px] h-px border-t-[1px] border-solid border-black" />
      <img
        className="absolute top-[713px] left-[429px] w-[567px] h-[1.09px]"
        alt=""
        src="/line-28.svg"
      />
      <div className="absolute top-[174.5px] left-[428.5px] box-border w-px h-[540px] border-r-[1px] border-solid border-black" />
      <div className="absolute top-[166.5px] left-[995.5px] box-border w-px h-[548px] border-r-[1px] border-solid border-black" />
    </div>
  );
};

export default Desktop6;
