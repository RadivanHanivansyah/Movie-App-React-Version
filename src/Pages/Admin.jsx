import Card from "../components/Card/Card";
import HeaderAdmin from "../components/Header-Admin/HeaderAdmin";
import imgAdmin1 from "../assets/admin movie 1.jpg";
import imgAdmin2 from "../assets/admin movie 2.jpg";
import imgAdmin3 from "../assets/admin movie 3.png";
import imgAdmin4 from "../assets/admin movie 4.jpg";
import imgAdmin5 from "../assets/admin movie 5.jpg";
import imgAdmin6 from "../assets/admin movie 8.jpg";

const dataMovie = [
  {
    id: Math.floor(Date.now() * Math.random()),
    judul: "My Hero Academia",
    gambar: imgAdmin1,
    tahun: "2016",
    rating: "8.2",
  },
  {
    id: Math.floor(Date.now() * Math.random()),
    judul: "Demon Slayer",
    gambar: imgAdmin2,
    tahun: "2019",
    rating: "8.6",
  },
  {
    id: Math.floor(Date.now() * Math.random()),
    judul: "Mushoku Tensei",
    gambar: imgAdmin3,
    tahun: "2021",
    rating: "8.2",
  },
  {
    id: Math.floor(Date.now() * Math.random()),
    judul: "Oshi no Ko",
    gambar: imgAdmin4,
    tahun: "2023",
    rating: "8.3",
  },
  {
    id: Math.floor(Date.now() * Math.random()),
    judul: "Sword Art Online",
    gambar: imgAdmin5,
    tahun: "2012",
    rating: "7.5",
  },
  {
    id: Math.floor(Date.now() * Math.random()),
    judul: "Sousou no Frieren",
    gambar: imgAdmin6,
    tahun: "2023",
    rating: "8.9",
  },
];

function handleEdit(item) {
  console.log(item);
}
export default function Admin() {
  return (
    <div className="bg-slate-200 w-full flex justify-center">
      <div className="border border-slate-400 rounded-xl py-4 px-4 w-3/4 max-sm:w-[90%]">
        <HeaderAdmin />
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-4">
          {dataMovie.map((item, index) => {
            return (
              <Card
                key={index}
                judul={item.judul}
                gambar={item.gambar}
                tahun={item.tahun}
                rating={item.rating}
                handleEdit={() => handleEdit(item)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
