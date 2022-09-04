import { useEffect, useState } from "react";
import Card from "./Card";
import "./styles.css";
import FacultiesDetail from "./FacultiesDetail";

function Faculties() {
  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    fetch("https://62db7ea0e56f6d82a7735107.mockapi.io/faculties")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFaculties(res);
      });
  }, []);

  var formatedFaculty = faculties.map((f) => {
    return (
      <>
        <Card
          obj={f}
          image={f.FacultyImage}
          name={f.FacultyName}
          role={f.FacultyDesignation}
          edu={f.FacultyHighestEducation}
          exp={f.FacultyExperienceInYears}
          sin={f.FacultyWorkingSince}
        />
      </>
    );
  });

  return <div className="row cardCon">{formatedFaculty}</div>;
}

export default Faculties;
