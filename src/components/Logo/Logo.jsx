export default function Logo({
  valueContainer,
  valueChill,
  valueClip,
  clipImg,
  chillImg,
}) {
  return (
    <div className={`${valueContainer}`}>
      <img src={clipImg} alt="clip" className={`${valueClip}`} />
      <img src={chillImg} alt="chill" className={`${valueChill}`} />
    </div>
  );
}
