import { doc, getFirestore, setDoc } from "firebase/firestore";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { app } from "../../../utils/firebase";
import { spanishData } from "../../../data/data";
import { IListItems } from "../../../interfaces/navbar/listItems";
import TitleSections from "../../TitleSections/TitleSections";

import "./contact.css";
import { spanishConstants } from "../../../utils/constants";

const Contact = ({ id }: IListItems) => {
  const mailContact = spanishData.contactOptions.email;
  const phoneContact = spanishData.contactOptions.phone;
  const socialNetwork = spanishData.socialNetworks;

  const firebase = getFirestore(app);
  const pruebaDB = doc(firebase, "contacto/1");

  const pruebaFirebase = () => {
    setDoc(pruebaDB, { name: "Prueba", description: "Esto es una prueba 2" });
  };

  pruebaFirebase();
  return (
    <div id={id} className="sections background-2">
      <TitleSections
        mainTitle={spanishData?.navList[4].title}
        backgroundTitle={spanishData?.subNavList[3]}
      />
      <Button onClick={pruebaFirebase}>Prueba</Button>
      <div className="section__container contact__container">
        <div className="info-contact__container">
          <div className="emai-phone__container">
            <IconButton
              aria-label={mailContact.value}
              href={mailContact.link}
              target="_blank"
              className="data__contact p-left-0"
              disableRipple
            >
              <EmailIcon className="contact__icons" />
              <Typography className="text-grey">
                colaneri.gaston@hotmail.com
              </Typography>
            </IconButton>
            <IconButton
              aria-label={phoneContact.value}
              href={phoneContact.link}
              target="_blank"
              className="data__contact p-left-0"
              disableRipple
            >
              <PhoneIphoneIcon className="contact__icons" />
              <Typography className="text-grey">+34 722 185276</Typography>
            </IconButton>
          </div>
          <div className="newtork__container">
            <Typography className="titles__info-contact text-grey">
              {spanishConstants.contactTitle.networks}
            </Typography>
            <div className="network-icon__container">
              <IconButton
                aria-label={socialNetwork.linkedin}
                href={socialNetwork.linkedin}
                target="_blank"
                disableRipple
                className="p-left-0"
              >
                <LinkedInIcon className="network__icons" />
              </IconButton>
              <IconButton
                aria-label={socialNetwork.github}
                href={socialNetwork.github}
                target="_blank"
                disableRipple
                className="p-left-0"
              >
                <GitHubIcon className="network__icons" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="form__contact">
          <div className="input__row">
            <TextField
              required
              id="outlined-required"
              label="Nombre"
              size="small"
              className="name__input"
              fullWidth
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              size="small"
              className="email__input"
              fullWidth
            />
          </div>
          <div className="input__row">
            <TextField
              required
              id="outlined-required"
              label="Mensaje"
              size="small"
              className="message__input"
              fullWidth
              multiline
              rows={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
