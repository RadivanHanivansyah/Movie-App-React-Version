import chill from "../../assets/CHILL.png";
import clip from "../../assets/clip.png";
export default function Logo({ valueContainer, valueChill, valueClip }) {
  console.log(valueContainer);

  return (
    <div className={`${valueContainer}`}>
      <img src={clip} alt="clip" className={`${valueClip}`} />
      <img src={chill} alt="chill" className={`${valueChill}`} />
    </div>
  );
}
