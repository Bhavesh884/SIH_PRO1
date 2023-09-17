import { useCallback } from "react";
import { Link } from "react-router-dom";

const Desktop5 = () => {
  const onLOGINText1Click = useCallback(() => {
    // Please sync "Desktop - 4" to the project
  }, []);

  const onNotAUserClick = useCallback(() => {
    // Please sync "Desktop - 6" to the project
  }, []);

  return (
    <div className="relative [background:linear-gradient(180deg,_#799dc8_34.89%,_rgba(121,_157,_200,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1024px] overflow-hidden text-left text-xl text-lavenderblush-100 font-inter">
      <img
        className="absolute top-[273.01px] left-[646px] w-[115px] h-[76px] object-cover"
        alt=""
        src="/image-8@2x.png"
      />
      <b className="absolute top-[349.01px] left-[639px] text-[36px] inline-block w-[353px] h-[33px]">
        LOGIN
      </b>
      <div className="absolute top-[528.01px] left-[653px] bg-steelblue w-[148px] h-[42px]" />
      <div
        className="absolute top-[534.01px] left-[687px] text-[24px] font-medium inline-block w-[353px] h-[33px] cursor-pointer"
        onClick={onLOGINText1Click}
      >
        <Link to={"/home"}> LOGIN </Link>
      </div>
      <div
        className="absolute top-[573.01px] left-[636px] inline-block w-[310px] h-[29px] cursor-pointer text-black"
        onClick={onNotAUserClick}
      >
        <span>{`not a user? `}</span>
        <span className="text-blueviolet">
          <Link to={"/register"}>register</Link>
        </span>
      </div>
      <div className="absolute top-[415.01px] left-[497px] bg-lavenderblush-200 w-[460px] h-[33px]" />
      <div className="absolute top-[471.01px] left-[497px] bg-lavenderblush-200 w-[460px] h-8" />
      <div className="absolute top-[421.01px] left-[523px] font-semibold text-dimgray-200 inline-block w-[84px] h-[21px]">
        Name
      </div>
      <div className="absolute top-[476.01px] left-[523px] font-semibold text-dimgray-100 inline-block w-[189px] h-[22px]">
        Mobile number
      </div>
      <div className="absolute top-[250.51px] left-[456.5px] box-border w-[548px] h-px border-t-[1px] border-solid border-black" />
      <div className="absolute top-[639.51px] left-[456.5px] box-border w-[548px] h-px border-t-[1px] border-solid border-black" />
      <img
        className="absolute top-[251px] left-[1002.5px] w-[1.5px] h-[389.01px]"
        alt=""
        src="/line-24.svg"
      />
      <div className="absolute top-[250.51px] left-[456.5px] box-border w-px h-[390px] border-r-[1px] border-solid border-black" />
    </div>
  );
};

export default Desktop5;
