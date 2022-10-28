import { Box, Divider, Typography } from "@mui/material";
import { spanishData } from "data";
import TitleSections from "components/TitleSections";
import DownloadButton from "components/DownloadButton";
import { normalText, normalTitle, sectionsLayout } from "utils/constants";
import { IListItems } from "interfaces/sections/navbar";

import "./about.css";

const AboutMe = ({ id }: IListItems) => {
  const personalData = spanishData?.personalData?.aboutData;

  return (
    <div id={id} className="sections background-1">
      <TitleSections
        fadedTitle={spanishData?.navList[1].title}
        title={spanishData?.subNavList[0]}
      />
      <Box className="d-flex section__container" sx={sectionsLayout}>
        <div className="about__text w-100">
          <Typography className="mb-20 text-grey" sx={normalTitle}>
            Soy
            <span className="text-green"> Gastón Colaneri</span>, un
            desarrollador de software.
          </Typography>
          <Typography className="mb-20 text-grey" sx={normalText}>
            Me considero una persona responsable, entusiasta y comprometida.
            Debido a mi experiencia académica y laboral, he adquirido excelentes
            habilidades organizativas y puedo desempeñarme eficientemente tanto
            de forma individual como formando parte de un equipo.
          </Typography>
          <Typography className="text-grey" sx={normalText}>
            Me encanta aprender, disfruto superando desafíos y tengo un gran
            interés en seguir mejorando mis habilidades tecnológicas,
            aprendiendo y desarrollando mi carrera profesional como
            desarrollador de software.
          </Typography>
        </div>
        <div className="info__container w-100">
          <div className="space-between d-flex flex-column h-100 ">
            <div className="mb-30">
              {personalData?.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="d-flex text-grey">
                      <Typography sx={normalTitle} className="font-bolder mr-5">
                        {`${spanishData?.personalDataLabel[index]}:`}
                      </Typography>
                      <Typography sx={normalTitle}> {item}</Typography>
                    </div>
                    <Divider className="divider" />
                  </div>
                );
              })}
            </div>
            <DownloadButton customClassname="green__button" />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default AboutMe;
