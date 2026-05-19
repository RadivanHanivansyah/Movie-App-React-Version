import LabelInput from "./component/Label-input";
export default function Form() {
  return (
    <>
      <form>
        <LabelInput valueLabel={"Username"} value={"text"} />
        <LabelInput valueLabel={"Kata Sandi"} value={"password"} />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          kirim
        </button>
      </form>
    </>
  );
}
