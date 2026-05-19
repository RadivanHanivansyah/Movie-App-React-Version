import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import vectorImg from "../../../assets/Vector.png";

export default function LabelInput({ valueLabel, value }) {
  const [isActive, setIsActive] = useState(false);

  function Type() {
    if (value === "text") {
      return "text";
    } else {
      return isActive ? "password" : "text";
    }
  }

  return (
    <div className="flex flex-col gap-[6px] px-6 relative m-9">
      <label
        htmlFor={Type()}
        className="font-medium text-white max-sm:text-[10px] text-base"
      >
        {valueLabel}
      </label>
      <input
        type={Type()}
        name={Type()}
        id={Type()}
        placeholder={`Masukukkan ${valueLabel}`}
        className="rounded-3xl border-[0.58px] outline-[#E7E3FC3B] focus:outline-none focus:ring-0 placeholder-[#C1C2C4] max-sm:px-[8.09px] max-sm:py-[11.55px] px-5 py-3 max-sm:h-[28px] h-[40px] max-sm:text-[9.24px] text-base text-white"
        required
      />
      {value === "password" ? (
        <FontAwesomeIcon
          onClick={() => setIsActive(!isActive)}
          icon={isActive ? faEyeSlash : faEye}
          className="md:text-2xl max-sm:text-lg sm:text-xl absolute max-sm:top-[55%] sm:top-3/5 md:top-[55%] right-4 -translate-x-full hover:cursor-pointer inline-block"
        />
      ) : (
        ""
      )}
    </div>
  );
}
