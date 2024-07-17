import { Button } from "../button";

const Header = () => {
  return (
    <div className="p-3 shadow-sm flex justify-between items-centers px-5">
      <img src="/logo.svg" alt="" />
      <div className="">
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
