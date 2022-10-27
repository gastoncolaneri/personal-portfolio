import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import { IListItems } from "interfaces/sections/navbar";
import TitleSections from "components/TitleSections";
import CustomAlert from "components/CustomAlert";
import FormContact from "components/Sections/Contact/components/FormContact";
import { contactLayout, spanishConstants } from "utils/constants";
import { spanishData } from "data";

import "./contact.css";

const Contact = ({ id }: IListItems) => {
  const addressData = spanishData.personalData.address;
  const mailContact = spanishData.contactOptions.email;
  const phoneContact = spanishData.contactOptions.phone;
  const socialNetwork = spanishData.socialNetworks;

  const [isOpenSuccessAlert, setIsOpenSuccessAlert] = useState<boolean>(false);
  const [isOpenErrorAlert, setIsOpenErrorAlert] = useState<boolean>(false);

  const onCloseSuccess = () => setIsOpenSuccessAlert(false);
  const onCloseError = () => setIsOpenErrorAlert(false);

  return (
    <div id={id} className="sections background-2">
      <TitleSections
        fadedTitle={spanishData?.navList[4].title}
        title={spanishData?.subNavList[3]}
      />
      <Box className="section__container contact__container" sx={contactLayout}>
        <div className="info-contact__container">
          <div className="d-flex flex-column mb-30 align-start">
            <Typography
              variant="h5"
              className="titles__info-contact text-white"
            >
              {spanishConstants.contactTitle.address}
            </Typography>
            <IconButton
              aria-label={addressData.value}
              href={addressData.link}
              target="_blank"
              className="d-flex p-left-0 justify-start"
              disableRipple
            >
              <HomeIcon className="contact__icons" />
              <Typography className="titles__info-contact text-grey">
                {addressData.value}
              </Typography>
            </IconButton>
          </div>
          <div className="emai-phone__container">
            <IconButton
              aria-label={mailContact.value}
              href={mailContact.link}
              target="_blank"
              className="d-flex p-left-0"
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
              className="d-flex p-left-0"
              disableRipple
            >
              <PhoneIphoneIcon className="contact__icons" />
              <Typography className="text-grey">+34 722 185276</Typography>
            </IconButton>
          </div>
          <div className="newtork__container">
            <Typography
              variant="h5"
              className="titles__info-contact text-white"
            >
              {spanishConstants.contactTitle.networks}
            </Typography>
            <div className="d-flex">
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
        <FormContact
          openSuccessAlert={setIsOpenSuccessAlert}
          openErrorAlert={setIsOpenErrorAlert}
        />
      </Box>
      <CustomAlert
        open={isOpenSuccessAlert}
        onClose={onCloseSuccess}
        type="success"
        message={spanishConstants.alertMessage.success}
      />
      <CustomAlert
        open={isOpenErrorAlert}
        onClose={onCloseError}
        type="error"
        message={spanishConstants.alertMessage.error}
      />
    </div>
  );
};

export default Contact;
