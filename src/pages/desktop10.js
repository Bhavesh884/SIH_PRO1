import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Desktop10 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    // Please sync "Desktop - 4" to the project
  }, []);

  const onTodayTextClick = useCallback(() => {
    // Please sync "Desktop - 11" to the project
  }, []);

  const onEmergencyContactsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCustomerImageClick = useCallback(() => {
    // Please sync "Desktop - 12" to the project
  }, []);

  return (
    <div className="relative [background:linear-gradient(180deg,_#799dc8,_#fff)] w-full h-[1024px] overflow-hidden text-left text-5xl text-black font-inter">
      <b className="absolute top-[268px] left-[457px] text-[32px] inline-block w-[1206px] h-[137px]">
        EMERGENCY CONTACTS
      </b>
      <div className="absolute top-[337px] left-[378px] rounded-[20px] bg-white w-[619px] h-[401px]" />
      <div className="absolute top-[367px] left-[688px] font-medium">
        +91 9876549876
      </div>
      <div className="absolute top-[445px] left-[720px] font-medium">
        +91 9876549876
      </div>
      <div className="absolute top-[515px] left-[719px] font-medium">
        +91 9876549876
      </div>
      <div className="absolute top-[597px] left-[723px] font-medium">
        +91 9876549876
      </div>
      <div className="absolute top-[675px] left-[723px] font-medium">
        +91 9876549876
      </div>
      <div className="absolute top-[367px] left-[429px] font-medium">{`Department of xyx: `}</div>
      <div className="absolute top-[515px] left-[423px] font-medium">{`Department of xyx: `}</div>
      <div className="absolute top-[597px] left-[423px] font-medium">{`Department of xyx: `}</div>
      <div className="absolute top-[673px] left-[417px] font-medium">{`Department of xyx: `}</div>
      <div className="absolute top-[439px] left-[429px] font-medium">{`Department of xyx: `}</div>
      <img
        className="absolute top-[173px] left-[0px] w-[1434px] h-0.5"
        alt=""
        src="/line-7.svg"
      />
      <img
        className="absolute top-[173px] left-[0px] w-[1434px] h-0.5"
        alt=""
        src="/line-7.svg"
      />
      <img
        className="absolute top-[173px] left-[0px] w-[1434px] h-0.5"
        alt=""
        src="/line-7.svg"
      />
      <img
        className="absolute top-[868px] left-[0px] w-[1434.2px] h-0.5"
        alt=""
        src="/line-6.svg"
      />
      <div className="absolute top-[938px] left-[801px] text-xl font-light">
        <p className="m-0">footer</p>
      </div>
      <div className="absolute top-[938px] left-[910px] text-xl font-light">
        <p className="m-0">footer</p>
      </div>
      <div className="absolute top-[938px] left-[429px] text-xl font-light">
        <p className="m-0">footer</p>
      </div>
      <div className="absolute top-[938px] left-[688px] text-xl font-light">
        <p className="m-0">footer</p>
      </div>
      <div className="absolute top-[938px] left-[554px] text-xl font-light">
        <p className="m-0">footer</p>
      </div>
      <div
        className="absolute top-[68px] left-[164px] text-8xl cursor-pointer"
        onClick={onHomeTextClick}
      >
        <Link to={"/home"}>Home</Link>
      </div>
      <div className="absolute top-[73px] left-[803px] text-8xl inline-block w-[73px] h-[29px]">
        News
      </div>
      <div
        className="absolute top-[70px] left-[277px] text-8xl inline-block w-[79px] h-[29px] cursor-pointer"
        onClick={onTodayTextClick}
      >
        <Link to={"/today"}>Today</Link>
      </div>
      <div className="absolute top-[70px] left-[394px] text-8xl inline-block w-[84px] h-[29px]">
        Hourly
      </div>
      <div className="absolute top-[72px] left-[535px] text-8xl inline-block w-[63px] h-[29px]">
        Daily
      </div>
      <div
        className="absolute top-[58px] left-[933px] text-8xl inline-block w-[151px] h-[58px] cursor-pointer"
        onClick={onEmergencyContactsTextClick}
      >
        <Link to={"/contacts"}>
          <p className="m-0">{`Emergency `}</p>
          <p className="m-0">Contacts</p>
        </Link>
      </div>
      <Link to={"/profile"}>
        <img
          className="absolute top-[35px] left-[1239px] w-24 h-24 object-cover cursor-pointer"
          alt=""
          src="/customer@2x.png"
          onClick={onCustomerImageClick}
        />
      </Link>
      <div className="absolute top-[73px] left-[640px] text-8xl inline-block w-[104px] h-[29px]">{`Monthly `}</div>
      <div className="absolute top-[73px] left-[1136px] text-8xl inline-block w-[59px] h-[29px]">
        Help
      </div>
    </div>
  );
};

export default Desktop10;
