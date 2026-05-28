import { dataImage } from "../dataFilm";

export default function FilmSecondaryContent({ value }) {
  function getText() {
    switch (value) {
      case "topRating":
        return "Top Rating Film dan Series Hari ini";
      case "trending":
        return "Film Trending";
      case "topRilis":
        return "Rilis Baru";
    }
  }
  return (
    <section className="Secondary-content max-sm:mb-9 w-full h-[512px] py-10 px-10 max-sm:py-5 max-sm:px-5 max-sm:w-[428px] max-sm:h-[189px]">
      <h1 className="rating-title title-main-content text-3xl max-sm:text-xl">
        {getText()}
      </h1>
      <div className="top-rating-film-image relative flex w-[1280px] h-[365px] max-sm:w-80 max-sm:h-[145px] gap-7 max-sm:gap-4 max-sm:overflow-hidden">
        {dataImage[value].map((item, index) => {
          return <img key={index} src={item} alt="" />;
        })}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="arrow=left w-11 h-11 hover:fill-blue-500 absolute left-0 top-1/2 -translate-x-[60%] max-sm:hidden"
        >
          <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM199 303L279 223C288.4 213.6 303.6 213.6 312.9 223C322.2 232.4 322.3 247.6 312.9 256.9L273.9 295.9L424 295.9C437.3 295.9 448 306.6 448 319.9C448 333.2 437.3 343.9 424 343.9L273.9 343.9L312.9 382.9C322.3 392.3 322.3 407.5 312.9 416.8C303.5 426.1 288.3 426.2 279 416.8L199 336.8C189.6 327.4 189.6 312.2 199 302.9z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 640"
          className="arrow-right w-11 h-11 hover:fill-blue-500 absolute right-0 top-1/2 translate-x-[60%] max-sm:hidden"
        >
          <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM361 417C351.6 426.4 336.4 426.4 327.1 417C317.8 407.6 317.7 392.4 327.1 383.1L366.1 344.1L216 344.1C202.7 344.1 192 333.4 192 320.1C192 306.8 202.7 296.1 216 296.1L366.1 296.1L327.1 257.1C317.7 247.7 317.7 232.5 327.1 223.2C336.5 213.9 351.7 213.8 361 223.2L441 303.2C450.4 312.6 450.4 327.8 441 337.1L361 417.1z" />
        </svg>
      </div>
    </section>
  );
}
