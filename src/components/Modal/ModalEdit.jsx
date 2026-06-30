export default function ModalEdit() {
  return (
    <div className="bg-black w-[980px] max-sm:w-10/12 absolute flex lg:top-1/6 sm:top-1/12 sm:w-3/4 sm:-translate-x-4 max-sm:top-1/12 opacity-80">
      <form
        action=""
        className="bg-white border w-2/3 max-sm:w-3/4 translate-x-1/4 max-sm:translate-x-[15%]"
      >
        <input type="text" className="border" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  );
}
