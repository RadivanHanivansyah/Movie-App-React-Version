import Card from "../components/Card/Card";
import HeaderAdmin from "../components/Header-Admin/HeaderAdmin";

export default function Admin() {
  return (
    <div className="bg-slate-200 w-full flex justify-center">
      <div className="border border-slate-400 rounded-xl py-4 px-4 w-3/4">
        <HeaderAdmin />
        <div className="flex flex-wrap gap-x-2 gap-y-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
