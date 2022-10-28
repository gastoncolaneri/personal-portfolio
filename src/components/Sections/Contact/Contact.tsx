import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import HomeIcon from "@mui/icons-material/Home";
import { IListItems } from "interfaces/sections/navbar";
import TitleSections from "components/TitleSections";
import CustomAlert from "components/CustomAlert";
import FormContact from "components/Sections/Contact/components/FormContact";
import SocialNetworkIcons from "components/Navbar/SocialNetworkIcons";
import { contactLayout, spanishConstants, subtitles } from "utils/constants";
import { spanishData } from "data";

import "./contact.css";

const Contact = ({ id }: IListItems) => {
  const addressData = spanishData.personalData.address;
  const mailContact = spanishData.contactOptions.email;
  const phoneContact = spanishData.contactOptions.phone;

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
      <Box className="section__container d-flex w-100" sx={contactLayout}>
        <div className="flex-1 d-flex flex-column mb-30">
          <div className="d-flex flex-column align-start">
            <Typography className="font-bolder text-grey" sx={subtitles}>
              {spanishConstants.contactTitle.address}
            </Typography>
            <IconButton
              aria-label={addressData.value}
              href={addressData.link}
              target="_blank"
              className="d-flex p-left-0 justify-start"
              disableRipple
            >
              <HomeIcon className="mr-15 text-green" />
              <Typography className="text-grey">{addressData.value}</Typography>
            </IconButton>
          </div>
          <div className="d-flex flex-column align-start mb-30">
            <IconButton
              aria-label={mailContact.value}
              href={mailContact.link}
              target="_blank"
              className="d-flex p-left-0"
              disableRipple
            >
              <EmailIcon className="mr-15 text-green" />
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
              <PhoneIphoneIcon className="mr-15 text-green" />
              <Typography className="text-grey">+34 722 185276</Typography>
            </IconButton>
          </div>
          <div>
            <Typography className="text-grey font-bolder" sx={subtitles}>
              {spanishConstants.contactTitle.networks}
            </Typography>
            <div className="d-flex">
              <SocialNetworkIcons />
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
