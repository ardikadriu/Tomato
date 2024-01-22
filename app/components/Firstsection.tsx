const Firstsection = () => {
  return (
    <div className="w-[1248px] flex justify-between mt-[56px] mb-4">
      <div className="flex items-end">
        <h1 className="text-[64px] leading-[76px]tracking-[-1.28px] font-Newsreader">
          Produce
        </h1>
        <p className="leading-[26px] font-medium text-[20px] mb-[27px] ml-[24px]">
          Fresh —{" "}
          <span className=" text-gray-600 font-light ">August 21, 2023</span>
        </p>
      </div>
      <div className="items-center flex">
        <button className="rounded-[20px] px-4 py-[9.5px]  border-[1px] border-[#C2C2C2] hover:bg-[#426B1F] hover:text-white">
          Default
        </button>
        <button className="rounded-[20px] px-4 py-[9.5px]  border-[1px] border-[#C2C2C2] hover:bg-[#426B1F] hover:text-white mx-4">
          A-Z
        </button>
        <button className="rounded-[20px] px-4 py-[9.5px]  border-[1px] border-[#C2C2C2] hover:bg-[#426B1F] hover:text-white">
          List view
        </button>
      </div>
    </div>
  );
};

export default Firstsection;
