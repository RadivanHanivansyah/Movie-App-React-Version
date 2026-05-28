import image_home from "../../assets/main image home.png";
import mute from "../../assets/mute.png";
import { dataImage } from "../dataFilm";
export default function MainFilmPage() {
  return (
    <section className="main-view-film relative">
      <div className="box-main-view w-fit">
        <img src={image_home} alt="Duty After School" className="main-film" />
        <div className="box-attribute-film absolute bottom-20 max-sm:top-14 max-sm:bottom-10 mx-20 max-sm:mx-5 text-white w-[1280px] max-sm:w-80 font-lato">
          <h1 className="title font-bold text-5xl max-sm:text-2xl mb-5 max-sm:mb-3">
            Duty After School
          </h1>
          <p className="synopsis font-medium max-sm:truncate text-wrap font-medium text-lg max-sm:text-xs w-[668px] max-sm:w-80">
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
          <div className="info flex items-center relative mt-10 max-sm:mt-3 gap-2">
            <button className="start font-lato bg-[#0F1E93] w-[93px] h-11 max-sm:w-14 max-sm:h-6 rounded-[48px] text-base max-sm:text-xs font-bold">
              Mulai
            </button>
            <button className="info-full w-[185px] h-11 max-sm:w-[120px] max-sm:h-6 bg-[#22282A] flex items-center gap-[3px] px-7 max-sm:px-3 py-1 rounded-[48px] text-base max-sm:text-xs font-bold">
              <svg
                className="info-symbols max-sm:w-3 max-sm:h-3 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
              </svg>
              <span className="font-lato">Selengkapnya</span>
            </button>
            <span className="font-lato info-age border rounded-3xl border-[#C1C2C4] text-[#C1C2C4] p-2 w-[52px] max-sm:w-[30px] max-sm:h-6 text-lg max-sm:text-xs max-sm:p-1">
              18+
            </span>
            <img
              src={mute}
              alt=""
              className="hover:bg-black rounded-full absolute max-sm:right-0 right-20 max-sm:w-6 max-sm:h-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
