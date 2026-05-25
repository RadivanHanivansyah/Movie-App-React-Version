import Auth_link from "./component/Auth-Link";
import Button from "./component/Button";
import LabelInput from "./component/Label-input";
export default function Form({ type, piece, linksize, sizeButton }) {
  return (
    <>
      <form>
        <LabelInput valueLabel={"Username"} value={"text"} piece={piece} />
        <LabelInput
          valueLabel={"Kata Sandi"}
          value={"password"}
          piece={piece}
        />
        {type == "Masuk" ? (
          <LabelInput
            valueLabel={"Konfirmasi Kata Sandi"}
            value={"password"}
            piece={piece}
          />
        ) : (
          ""
        )}
        <Auth_link type={type} linksize={linksize} />
        <Button sizeButton={sizeButton} />
      </form>
    </>
  );
}
