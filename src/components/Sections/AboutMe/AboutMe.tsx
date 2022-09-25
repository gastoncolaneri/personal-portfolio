import { Divider, Typography } from "@mui/material";
import { spanishData } from "../../../data/data";
import { IListItems } from "../../../interfaces/navbar/listItems";
import TitleSections from "../../TitleSections/TitleSections";
import DownloadButton from "../../DownloadButton";

import "../sections.css";
import "./about.css";

const AboutMe = ({ id }: IListItems) => {
  return (
    <div id={id} className="sections background-1">
      <TitleSections
        mainTitle={spanishData?.navList[1].title}
        backgroundTitle={spanishData?.subNavList[0]}
      />
      <div className="about__container">
        <div className="about__text">
          <Typography variant="h4" className="mb-20 text-grey">
            Soy
            <span className="text-green"> Gastón Colaneri</span>, un
            desarrollador de software.
          </Typography>
          <Typography variant="h6" className="mb-20 text-grey">
            Me considero una persona responsable, entusiasta y comprometida.
            Debido a mi experiencia académica y laboral, he adquirido excelentes
            habilidades organizativas y puedo desempeñarme eficientemente tanto
            de forma individual como formando parte de un equipo.
          </Typography>
          <Typography variant="h6" className="text-grey">
            Me encanta aprender, disfruto superando desafíos y tengo un gran
            interés en seguir mejorando mis habilidades tecnológicas,
            aprendiendo y desarrollando mi carrera profesional como
            desarrollador de software.
          </Typography>
        </div>
        <div className="info__container">
          <div className="info__text">
            <div>
              {spanishData?.personalData.map((item, index) => {
                return (
                  <>
                    <div className="d-flex text-grey">
                      <Typography variant="h6" className="info__label">
                        {`${spanishData?.personalDataLabel[index]}:`}
                      </Typography>
                      <Typography variant="h6"> {item}</Typography>
                    </div>
                    <Divider className="divider" />
                  </>
                );
              })}
            </div>
            <DownloadButton customClassname="button__about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
