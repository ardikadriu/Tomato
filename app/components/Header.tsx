const Header = () => {
  return (
    <div className="flex justify-between w-[1248px] py-[32px]">
      <h1 className="text-[32px] text-[#426B1F] font-medium font-Newsreader tracking-[-0.32px]">
        World Peas
      </h1>
      <div className="flex leading-[20px] items-center w-[600px] justify-between">
        <h4 className="leading-[20px] hover:cursor-pointer">Shop</h4>
        <h4 className="hover:cursor-pointer">Newstand</h4>
        <h4 className="hover:cursor-pointer">Who are we</h4>
        <h4 className="hover:cursor-pointer">My profile</h4>
        <button className="bg-[#426B1F] rounded-[8px] px-[23px] py-[13.5px] text-[16px] font-semibold text-white">
          Basket (3)
        </button>
      </div>
    </div>
  );
};

export default Header;
