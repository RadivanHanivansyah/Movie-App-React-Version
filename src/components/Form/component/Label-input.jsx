export default function LabelInput({ vector }) {
  return (
    <div className="flex flex-col gap-[6px] px-6 relative">
      <label
        for={vector}
        className="font-medium text-white max-sm:text-[10px] text-base"
      >
        Kata Sandi
      </label>
      <input
        type="password"
        name="text"
        id="password"
        placeholder="Masukkan kata sandi"
        className="rounded-3xl border-[0.58px] outline-[#E7E3FC3B] focus:outline-none focus:ring-0 placeholder-[#C1C2C4] max-sm:px-[8.09px] max-sm:py-[11.55px] px-5 py-3 max-sm:h-[28px] h-[40px] max-sm:text-[9.24px] text-base text-white"
      />
    </div>
  );
}
