import Form from "../components/Form/Form.jsx";
import Logo from "../components/Logo/Logo.jsx";
import { part } from "../components/Logo/partLogo.js";
import Title from "../components/Title-form/Title.jsx";
import { size, sizeButton, sizeLink } from "./sizeKind.js";
function Register() {
  return (
    <div className="bg-[url(./src/assets/background.jpg)] grid place-content-center max-sm:px-4 bg-cover overflow-hidden h-screen bg-center bg-no-repeat relative">
      <div
        className="container w-[306px] h-[450px] sm:w-[390px] sm:h-[500px] md:w-[500px] md:h-[550px] bg-[#181A1CD6] rounded-2xl
"
      >
        <Logo
          valueContainer={part.containerLoginRegister}
          valueChill={part.chillLoginRegister}
          valueClip={part.clipLoginRegister}
          clipImg={part.clipLoginRegisterImg}
          chillImg={part.chillLoginRegisterImg}
        />
        <Title title={"Daftar"} dectitle={"Selamat datang!"} />
        <Form
          type={"Masuk"}
          piece={size.Register}
          linksize={sizeLink.Register}
          sizeButton={sizeButton.Register}
        />
      </div>
    </div>
  );
}
export default Register;
