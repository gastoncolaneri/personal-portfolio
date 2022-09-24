import { Button, Divider, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { spanishData } from "../../../data/data";
import { IListItems } from "../../../interfaces/navbar/listItems";
import TitleSections from "../../TitleSections/TitleSections";

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
          <Typography
            variant="h4"
            style={{ fontWeight: 700, color: "#fffff3", marginBottom: "20px" }}
          >
            Soy
            <span style={{ color: "#20c997" }}> Gastón Colaneri</span>, un
            desarrollador de software.
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "#fffff3ab",
              marginBottom: "20px",
            }}
          >
            Me considero una persona responsable, entusiasta y comprometida.
            Debido a mi experiencia académica y laboral, he adquirido excelentes
            habilidades organizativas y puedo desempeñarme eficientemente tanto
            de forma individual como formando parte de un equipo.
          </Typography>
          <Typography variant="h6" style={{ color: "#fffff3ab" }}>
            Me encanta aprender, disfruto superando desafíos y tengo un gran
            interés en seguir mejorando mis habilidades tecnológicas,
            aprendiendo y desarrollando mi carrera profesional como
            desarrollador de software.
          </Typography>
        </div>
        <div className="info__container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div>
              {spanishData?.personalData.map((item, index) => {
                return (
                  <>
                    <div
                      style={{
                        display: "flex",
                        color: "#fffff3ab",
                      }}
                    >
                      <Typography
                        variant="h6"
                        style={{
                          marginRight: "5px",
                          fontWeight: 600,
                        }}
                      >
                        {`${spanishData?.personalDataLabel[index]}:`}
                      </Typography>
                      <Typography variant="h6"> {item}</Typography>
                    </div>
                    <Divider
                      sx={{
                        borderColor: "#3e4449",
                        marginTop: "5px",
                        marginBottom: "5px",
                      }}
                    />
                  </>
                );
              })}
            </div>
            <Button
              variant="contained"
              endIcon={<FileDownloadIcon />}
              href={spanishData?.resumeDownloadLink?.link}
              target="_blank"
              download={spanishData?.resumeDownloadLink?.label}
              className="download__button"
            >
              Descargar CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
