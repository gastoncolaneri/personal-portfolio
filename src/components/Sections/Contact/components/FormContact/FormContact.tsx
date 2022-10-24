import { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import emailjs from "@emailjs/browser";
import { v4 as uuidv4 } from "uuid";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../../../../../utils/firebase";
import { spanishConstants } from "../../../../../utils/constants";
import { emailValidator } from "../../../../../utils/validators";

import "./formContact.css";

interface IFormContact {
  openSuccessAlert: React.Dispatch<React.SetStateAction<boolean>>;
  openErrorAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormContact = ({ openSuccessAlert, openErrorAlert }: IFormContact) => {
  const firebase = getFirestore(app);

  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [finalEmailInput, setFinalEmailInput] = useState<string>("");
  const [messageInput, setMessageInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const addMessage = doc(firebase, `contacto/${uuidv4()}`);

  const configEmail = (templateId: string, params: any) => {
    emailjs
      .send("service_l1m7qbg", templateId, params, "n5nyG923UmFV8QVG9")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const sendEmail = () => {
    const personalTemplate = {
      name: nameInput,
      email: finalEmailInput,
      message: messageInput,
    };
    const externalTemplate = {
      name: nameInput,
    };
    configEmail("template_cxkbfpc", personalTemplate);
    configEmail("template_2btheoc", externalTemplate);
  };

  const checkEmailInput = (data: string) => {
    setEmailInput(data);
    if (data === "") {
      return setErrorEmail(false);
    }
    if (emailValidator(data)) {
      setErrorEmail(false);
      return setFinalEmailInput(data);
    }
    setFinalEmailInput("");
    return setErrorEmail(true);
  };

  const handleClick = () => {
    if (!nameInput?.length || !messageInput?.length || !emailInput?.length) {
      setErrorName(!nameInput?.length);
      setErrorMessage(!messageInput?.length);
      setErrorEmail(!emailInput?.length);
      return;
    }

    setErrorName(false);
    setErrorMessage(false);
    setIsLoading(true);
    const formData = {
      name: nameInput,
      email: finalEmailInput,
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
      <Grid container spacing={2} className="d-flex mb-20">
        <Grid item xs={12} md={6}>
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
            error={errorName}
            helperText={errorName && spanishConstants.errorHelpers.contact.name}
          />
        </Grid>
        <Grid item xs={12} md={6}>
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
            onChange={(e) => checkEmailInput(e.target.value)}
            error={errorEmail}
            helperText={
              errorEmail && spanishConstants.errorHelpers.contact.email
            }
          />
        </Grid>
      </Grid>
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
          error={errorMessage}
          helperText={
            errorMessage && spanishConstants.errorHelpers.contact.message
          }
        />
      </div>
      <div className="d-flex mb-20 justify-center">
        <LoadingButton
          variant="contained"
          className="green__button button form-contact__button"
          onClick={handleClick}
          // disabled={isDisabled()}
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
