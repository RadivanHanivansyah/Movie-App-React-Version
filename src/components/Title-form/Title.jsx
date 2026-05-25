export default function Title({ title, dectitle }) {
  return (
    <div className="masuk mt-4 text-nowrap text-[#FFFFFF] flex flex-col items-center justify-center gap-2">
      <h3 className="font-lato font-bold text-3xl max-sm:text-lg max-sm:tracking-[0.2px]">
        {title}
      </h3>
      <p className="font-normal text-[16px] max-sm:text-[10px] tracking-[0.2px]">
        {dectitle}
      </p>
    </div>
  );
}
