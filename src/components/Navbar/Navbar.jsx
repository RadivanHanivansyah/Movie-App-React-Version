import account from "../../assets/image account.png";
import Logo from "../Logo/Logo";
import { part } from "../Logo/partLogo.js";
function Navbar() {
  return (
    <nav class="py-6 px-20 flex justify-around items-center max-sm:justify-evenly max-sm:pl-10 max-sm:gap-3">
      <div class="box-flex flex items-center gap-20 max-sm:gap-4">
        <Logo
          valueContainer={part.containerHomePage}
          valueChill={part.chillBeranda}
          chillImg={part.chillBerandaImg}
          valueClip={part.clipBeranda}
          clipImg={part.clipBerandaImg}
        />
        <ul className="navbar font-lato font-medium max-sm:text-[10px] text-lg flex max-sm:gap-3 gap-20 text-white">
          <li>Series</li>
          <li>Film</li>
          <li>Daftar Saya</li>
        </ul>
      </div>
      <div className="account flex justify-center items-start flex-row gap-2 max-sm:gap-1">
        <img
          src={account}
          alt="akun"
          className="w-10 h-10 max-sm:w-5 max-sm:h-5"
        />
        <button className="text-2xl max-sm:text-xs text-white">&#8964;</button>
      </div>
    </nav>
  );
}

export default Navbar;
