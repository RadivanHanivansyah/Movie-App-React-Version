import Navbar from "../components/Navbar/Navbar.jsx";
import MainFilmPage from "../components/Main-Film-Page/Main_Film_Page.jsx";
import FilmContinue from "../components/Film-Continue/FilmContinue.jsx";
import FilmSecondaryContent from "../components/Film-Secondary-Content/FilmSecondaryContent.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Beranda() {
  return (
    <body className="overflow-x-hidden w-[1440px] max-sm:w-[360px]">
      <div className="container-box bg-[#181A1C] max-sm:min-h-screen">
        <Navbar />
        <MainFilmPage />
        <main className="main-content">
          <FilmContinue />
          <FilmSecondaryContent value={"topRating"} />
          <FilmSecondaryContent value={"trending"} />
          <FilmSecondaryContent value={"topRilis"} />
        </main>
        <Footer />
      </div>
    </body>
  );
}

export default Beranda;
