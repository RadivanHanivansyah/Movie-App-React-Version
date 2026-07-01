export default function ModalEdit() {
  return (
    <div className="bg-black w-[980px] h-screen py-4 max-sm:w-10/12 absolute flex items-center lg:top-[14%] sm:top-1/12 sm:w-3/4 sm:-translate-x-4 max-sm:top-1/12 opacity-90">
      <main className="bg-white h-fit py-8 px-6 border rounded-lg w-2/3 max-sm:w-3/4 translate-x-1/4 max-sm:translate-x-[15%]">
        <div className="title flex justify-between text-lg font-lato mb-8">
          <h1 className="font-bold">Edit Movie</h1>
          <button className="font-medium hover:cursor-pointer">X</button>
        </div>
        <form action="" className="font-lato">
          <label htmlFor="judul" className="text-base mr-8 font-semibold">
            Judul
          </label>
          <input
            type="text"
            placeholder="input judul"
            id="judul"
            className="placeholder:text-lg placeholder:text-black py-1 px-2 tracking-wide outline-red-400 border-2 rounded-md w-10/12 max-sm:w-full mb-6"
          />
          <label htmlFor="Tahun Rilis" className="text-base mr-7 font-semibold">
            Tahun
          </label>
          <input
            type="number"
            placeholder="input tahun rilis"
            id="Tahun Rilis"
            className="placeholder:text-lg placeholder:text-black py-1 px-2 tracking-wide outline-red-400 border-2 rounded-md w-10/12 max-sm:w-full mb-6"
          />
          <label htmlFor="rating" className="text-base mr-7 font-semibold">
            Rating
          </label>
          <input
            type="text"
            placeholder="input rating"
            id="rating"
            className="placeholder:text-lg placeholder:text-black py-1 px-2 tracking-wide outline-red-400 border-2 rounded-md w-10/12 max-sm:w-full mb-6"
          />
          <label htmlFor="file" className="text-base mr-5 font-semibold">
            gambar
          </label>
          <input
            type="file"
            id="file"
            className="placeholder:text-lg file:hidden placeholder:text-black py-1 px-2 tracking-wide outline-red-400 border-2 rounded-md w-1/3 max-sm:w-full mb-6"
          />
        </form>
        <div className="button font-lato font-semibold gap-5 flex justify-end max-sm:justify-evenly">
          <button className="border hover:cursor-pointer bg-slate-200 py-1 px-7 rounded-lg">
            Cancel
          </button>
          <button className="border hover:cursor-pointer text-white bg-blue-800 rounded-lg py-1 px-7">
            Update
          </button>
        </div>
      </main>
    </div>
  );
}
