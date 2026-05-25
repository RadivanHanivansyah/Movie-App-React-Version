export default function Auth_link({ type, linksize }) {
  return (
    <div
      className={`choice flex flex-row justify-between gap-[6px] ${linksize}  max-sm:text-[10px] text-base
`}
    >
      <p className="sm:text-nowrap text-[#C1C2C4]">
        {type === "Daftar" ? "Belum" : "Sudah"} punya akun?
        <a href="index.html" className="text-white hover:cursor-pointer">
          {type}
        </a>
      </p>
      {type === "Daftar" ? (
        <a href="#" className="sm:text-nowrap text-white hover:cursor-pointer">
          Lupa kata sandi
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
