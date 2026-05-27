import Navbar from "../components/Navbar/Navbar";
import MainFilmPage from "../components/Main-Film-Page/Main_Film_Page";

function Beranda() {
  return (
    <body className="overflow-x-hidden">
      <div className="container-box bg-[#181A1C] w-[1440px] max-sm:w-[360px]">
        <Navbar />
        <MainFilmPage />
      </div>
    </body>
  );
}

export default Beranda;
