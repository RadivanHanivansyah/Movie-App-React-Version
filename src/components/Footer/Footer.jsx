import logoFooter from "../../assets/Logo footer.png";
export default function Footer() {
  return (
    <footer class="mt-20 px-20 py-[60px] max-sm:px-5 max-sm:py-5 flex justify-between max-sm:flex-col max-sm:gap-10">
      <header class="logo-footer max-sm:w-80 max-sm:h-14">
        <img
          src={logoFooter}
          alt="footer-logo"
          class="max-sm:w-20 max-sm:h-6 max-sm:mb-4 mb-6"
        />
        <p class="font-lato font-normal max-sm:text-xs text-base text-[#C1C2C4]">
          @2023 Chill All Rights Reserved.
        </p>
      </header>
      <section class="link-info flex max-sm:flex-col justify-around flex-row sm:w-[814px]">
        <div class="genre max-sm:flex max-sm:justify-between max-sm:items-center max-sm:mb-2 sm:w-[514px] sm:h-[164px]">
          <h1 class="text-white max-sm:font-medium font-bold font-lato text-base mb-4">
            Genre
          </h1>
          <ul class="grid grid-cols-4 grid-rows-4 max-sm:hidden font-lato font-medium text-base text-[#C1C2C4]">
            <li>Aksi</li>
            <li>Drama</li>
            <li>Komedi</li>
            <li>Sains & Alam</li>
            <li>Anak-anak</li>
            <li>Fantasi Ilmiah & Fantasi</li>
            <li>Petualangan</li>
            <li>Thriller</li>
            <li>Anime</li>
            <li>Kejahatan</li>
            <li>Perang</li>
            <li>Britania</li>
            <li>KDrama</li>
            <li>Romantis</li>
          </ul>
          <span class="arrow text-white text-xs sm:hidden">&#11166;</span>
        </div>
        <div class="help max-sm:flex max-sm:justify-between max-sm:items-center">
          <h1 class="text-white max-sm:font-medium font-bold font-lato text-base mb-4">
            Bantuan
          </h1>
          <ul class="flex flex-col gap-3 font-lato font-medium text-base text-[#C1C2C4] max-sm:hidden">
            <li>FAQ</li>
            <li>Kontak Kami</li>
            <li>Privasi</li>
            <li>Syarat & Ketentuan</li>
          </ul>
          <span class="arrow text-white text-xs sm:hidden">&#11166;</span>
        </div>
      </section>
    </footer>
  );
}
