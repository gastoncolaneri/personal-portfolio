import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import emailjs from "@emailjs/browser";
import { v4 as uuidv4 } from "uuid";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../../../../../utils/firebase";
import { spanishConstants } from "../../../../../utils/constants";

import "./formContact.css";

interface IFormContact {
  openSuccessAlert: React.Dispatch<React.SetStateAction<boolean>>;
  openErrorAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormContact = ({ openSuccessAlert, openErrorAlert }: IFormContact) => {
  const firebase = getFirestore(app);

  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [messageInput, setMessageInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addMessage = doc(firebase, `contacto/${uuidv4()}`);

  const isDisabled = () => {
    if (nameInput?.length && emailInput?.length && messageInput?.length) {
      return false;
    }
    return true;
  };

  const sendEmail = () => {
    debugger;
    const templateParams = {
      name: nameInput,
      email: emailInput,
      message: messageInput,
    };
    emailjs
      .send(
        "service_l1m7qbg",
        "template_cxkbfpc",
        templateParams,
        "n5nyG923UmFV8QVG9"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const handleClick = () => {
    setIsLoading(true);
    const formData = {
      name: nameInput,
      email: emailInput,
      description: messageInput,
    };
    setDoc(addMessage, formData)
      .then(() => {
        openSuccessAlert(true);
        setNameInput("");
        setEmailInput("");
        setMessageInput("");
        sendEmail();
      })
      .catch(() => {
        openErrorAlert(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form className="form__contact">
      <div className="d-flex mb-20">
        <Typography variant="h5" className="text-white">
          {spanishConstants.contactTitle.message}
        </Typography>
      </div>
      <div className="d-flex mb-20">
        <TextField
          required
          id="outlined-required"
          label={spanishConstants.contactLabels.name}
          size="small"
          className="name__input"
          name="name"
          fullWidth
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label={spanishConstants.contactLabels.email}
          size="small"
          className="email__input"
          name="email"
          type="email"
          fullWidth
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
      </div>
      <div className="d-flex mb-20">
        <TextField
          required
          id="outlined-required"
          label={spanishConstants.contactLabels.message}
          size="small"
          className="message__input"
          name="message"
          fullWidth
          multiline
          rows={4}
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
      </div>
      <div className="d-flex mb-20 justify-center">
        <LoadingButton
          variant="contained"
          className="green__button button form-contact__button"
          onClick={handleClick}
          disabled={isDisabled()}
          loading={isLoading}
          loadingPosition="start"
        >
          {spanishConstants.buttonContact}
        </LoadingButton>
      </div>
    </form>
  );
};

export default FormContact;
