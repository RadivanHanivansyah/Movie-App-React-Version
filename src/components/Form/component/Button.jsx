import google from "../../../assets/google.png";
export default function Button({ sizeButton }) {
  return (
    <section
      className={`daftar flex flex-col justify-center items-center px-7 ${sizeButton} max-sm:gap-y-1 gap-y-[6px]`}
    >
      <button
        type="submit"
        className="py-3 px-5 max-sm:px-[11.55px] max-sm:py-[8.09px] text-base font-semibold max-sm:text-[10px] text-white bg-[#3D4142] h-[40px] max-sm:h-[28px] w-[410px] max-sm:w-[250px] rounded-3xl border border-[#E7E3FC3B] flex justify-center items-center hover:cursor-pointer"
        onClick={(e) => e.preventDefault()}
      >
        Masuk
      </button>
      <p className="max-sm:text-[10px] text-sm text-[#9D9EA1]">Atau</p>
      <button
        onClick={(e) => e.preventDefault()}
        type="submit"
        className="py-3 px-5 max-sm:px-[11.55px] max-sm:py-[8.09px] text-base font-semibold max-sm:text-[10px] w-[410px] max-sm:w-[210px] text-white bg-transparent h-[40px] max-sm:h-[28px] rounded-3xl border border-[#E7E3FC3B] flex justify-center items-center gap-x-3 hover:cursor-pointer"
      >
        <img src={google} className="max-sm:w-[10px] w-[18px]" alt="" />
        <span className="max-sm:text-[10px] text-base font-semibold">
          Masuk dengan Google
        </span>
      </button>
    </section>
  );
}
