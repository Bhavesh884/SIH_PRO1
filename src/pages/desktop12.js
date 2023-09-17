import { useCallback } from "react";
import { Link } from "react-router-dom";

const Desktop12 = () => {
  const onHomeTextClick = useCallback(() => {
    // Please sync "Desktop - 4" to the project
  }, []);

  const onTodayTextClick = useCallback(() => {
    // Please sync "Desktop - 11" to the project
  }, []);

  const onEmergencyContactsTextClick = useCallback(() => {
    // Please sync "Desktop - 10" to the project
  }, []);

  return (
    <div className="relative bg-steelblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[1024px] overflow-hidden text-left text-8xl text-black font-inter">
      <img
        className="absolute top-[342px] left-[609px] w-[102px] h-[72px] object-cover"
        alt=""
        src="/customer@2x.png"
      />
      <img
        className="absolute top-[331px] left-[581px] w-[158px] h-[94px] object-cover"
        alt=""
        src="/circle@2x.png"
      />
      <div className="absolute top-[453px] left-[481px] bg-white w-[429px] h-[46px]" />
      <div className="absolute top-[527px] left-[481px] bg-white w-[429px] h-[46px]" />
      <div className="absolute top-[601px] left-[481px] bg-white w-[429px] h-[46px]" />
      <div className="absolute top-[465px] left-[495px] text-xl inline-block w-[114px] h-[34px]">
        Name
      </div>
      <div className="absolute top-[540px] left-[488px] text-xl inline-block w-[210px] h-[34px]">
        Mobile No.
      </div>
      <div className="absolute top-[613px] left-[486px] text-xl inline-block w-[163px] h-[34px]">
        Address
      </div>
      <div className="absolute top-[397px] left-[709px] text-[24px] text-white inline-block w-12 h-[25px]">
        edit
      </div>
      <img
        className="absolute top-[400px] left-[739px] w-[54px] h-[25px] object-cover"
        alt=""
        src="/edit@2x.png"
      />
      <img
        className="absolute top-[187px] left-[3px] w-[1434px] h-0.5"
        alt=""
        src="/line-5.svg"
      />
      <img
        className="absolute top-[187px] left-[3px] w-[1434px] h-0.5"
        alt=""
        src="/line-5.svg"
      />
      <img
        className="absolute top-[187px] left-[0px] w-[1433px] h-0.5"
        alt=""
        src="/line-11.svg"
      />
      <img
        className="absolute top-[187px] left-[0px] w-[1433px] h-0.5"
        alt=""
        src="/line-11.svg"
      />
      <img
        className="absolute top-[187px] left-[0px] w-[1433px] h-0.5"
        alt=""
        src="/line-11.svg"
      />
      <div
        className="absolute top-[76px] left-[153px] cursor-pointer"
        onClick={onHomeTextClick}
      >
        <Link to={"/home"}>Home</Link>
      </div>
      <div className="absolute top-[81px] left-[792px] inline-block w-[73px] h-[29px]">
        News
      </div>
      <div
        className="absolute top-[78px] left-[266px] inline-block w-[79px] h-[29px] cursor-pointer"
        onClick={onTodayTextClick}
      >
        <Link to={"/today"}>Today</Link>
      </div>
      <div className="absolute top-[78px] left-[383px] inline-block w-[84px] h-[29px]">
        Hourly
      </div>
      <div className="absolute top-[80px] left-[524px] inline-block w-[63px] h-[29px]">
        Daily
      </div>
      <div
        className="absolute top-[66px] left-[922px] inline-block w-[151px] h-[58px] cursor-pointer"
        onClick={onEmergencyContactsTextClick}
      >
        <Link to={"/contacts"}>
          <p className="m-0">{`Emergency `}</p>
          <p className="m-0">Contacts</p>
        </Link>
      </div>
      <img
        className="absolute top-[43px] left-[1228px] w-24 h-24 object-cover"
        alt=""
        src="/customer1@2x.png"
      />
      <div className="absolute top-[81px] left-[629px] inline-block w-[104px] h-[29px]">{`Monthly `}</div>
      <div className="absolute top-[81px] left-[1125px] inline-block w-[59px] h-[29px]">
        Help
      </div>
    </div>
  );
};

export default Desktop12;
