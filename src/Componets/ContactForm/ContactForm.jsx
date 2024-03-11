import { useState } from "react";
import "./ContactForm.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    text: "",
  });

  const changeData = () => {
    setName(inputValue.name);
    setEmail(inputValue.email);
    setText(inputValue.text);
  };

  return (
    <div className="contact-form">
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Button
            text={"VIA SUPPORT CHAT"}
            icon={<MdMessage />}
            isOutline={true}
          />
          <Button text={"VIA CALL"} icon={<FaPhoneAlt />} isOutline={true} />
        </div>
        <Button text={"VIA EMAIL FORM"} icon={<HiMail />} isOutline={false} />
        <div>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label>Name</label>
            <input
              type="text"
              value={inputValue.name}
              onChange={(e) => {
                setInputValue({ ...inputValue, name: e.target.value });
              }}
            />
            <label>E-mail</label>
            <input
              type="email"
              value={inputValue.email}
              onChange={(e) => {
                setInputValue({ ...inputValue, email: e.target.value });
              }}
            />
            <label>Text</label>
            <textarea
              value={inputValue.text}
              onChange={(e) => {
                setInputValue({ ...inputValue, text: e.target.value });
              }}
            ></textarea>
          </form>
        </div>
        <Button
          text={"Submit"}
          isOutline={true}
          isRight={true}
          onClick={changeData}
        />
        <>
          <h5>{name}</h5>
          <h5>{email}</h5>
          <h5>{text}</h5>
        </>
      </div>
      <img src="image/contact.svg" alt="" />
    </div>
  );
};

export default ContactForm;
