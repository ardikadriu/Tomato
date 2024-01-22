import Image from "next/image";
import Tomato from "@/public/Tomato.png";
const Secondsection = () => {
  return (
    <div className="w-[1248px] text-left pb-[150px] mt-[40px]">
      <div className="bg-[#FAFAF5] pb-[28px] rounded-[24px] w-[395px]">
        <Image
          className="rounded-t-[24px]"
          src={Tomato}
          width={395}
          height={296}
          alt="tomato"
        />
        <div className="ml-[24px] mt-[24px]">
          <h2 className="text-[20px] font-semibold leading-[26px]">
            Heirloom tomato
          </h2>
          <h3 className="text-[#426B1F] font-semibold leading-[26px]">
            $5.99 / lb
          </h3>
          <p className="text-[#6D6D6D] leading-[24px] mt-4">
            Grown in San Juan Capistrano, CA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
