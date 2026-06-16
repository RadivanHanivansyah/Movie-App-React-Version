export default function HeaderAdmin() {
  return (
    <div className="flex justify-between font-lato text-xl mb-8">
      <h1 className="font-semibold">All Movies</h1>
      <button className="font-medium border bord text-white bg-blue-700 px-4 py-1 rounded-lg hover:cursor-pointer shadow-md active:shadow-inner shadow-blue-700">
        +Add Movie
      </button>
    </div>
  );
}
