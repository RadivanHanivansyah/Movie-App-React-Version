import movie1 from "../../assets/admin movie 2.jpg";
export default function Card() {
  const name = "a";
  return (
    <div className="card max-sm:w-full border rounded-sm pb-2 max-sm:pb-0 sm:w-[320px] sm:h-auto max-sm:flex max-sm:gap-x-2">
      <img src={movie1} className="aspect-video max-sm:w-1/2" />
      <div className="detail mt-1 sm:mt-3">
        <h1 className="Title">The Dark Night</h1>
        <h3 className="Year">{`Year :`}</h3>
      </div>
    </div>
  );
}
