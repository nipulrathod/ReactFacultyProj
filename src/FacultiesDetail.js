import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import { Link } from "react-router-dom";

const FacultyDetail = () => {
  const [Faculty, setFaculty] = useState({});
  let params = useParams();

  useEffect(() => {
    fetch("https://62db7ea0e56f6d82a7735107.mockapi.io/faculties/" + params.id)
      .then((responce) => {
        return responce.json();
      })
      .then((responce) => {
        setFaculty(responce);
      });
  });

  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
          <div class="Card1 col-md-3">
            <div class="Card-Details">
              <div class="profile">
                <img src={Faculty.FacultyImage} alt="---" />
              </div>
              <div class="Data">
                <div class="Name col-md-12 content">{Faculty.FacultyName}</div>
                <div class="Role col-md-12 content">
                  {Faculty.FacultyDesignation}
                </div>
                <hr />
                <div class="Education col-md-12 content">
                  {Faculty.FacultyHighestEducation}
                </div>
                <hr />
                <div class="Other row">
                  <div class="col-md-6 content">
                    <div class="row o1">
                      <div class="OtherTitle">Experience</div>
                      <div class="ExpData content">
                        <div class="ExpData1">
                          {Faculty.FacultyExperienceInYears}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 content">
                    <div class="row o2">
                      <div class="OtherTitle">Working Since</div>
                      <div class="since content">
                        <div class="sinceData">
                          {Faculty.FacultyWorkingSince}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-9 float-right">
            <div class="para">
              <br />
              <h5>Profile</h5>
              <p>{Faculty.FacultyProfileDescription}</p>
            </div>
            <br />
            <div>
              <h5>Mobile Number</h5>
              {Faculty.FacultyMobileNumber}
            </div>
            <br />
            <div>
              <h5>Email Address</h5>
              {Faculty.FacultyEmailAddress}
            </div>
            <br />
            <div>
              <h5>Seating</h5>
              {Faculty.FacultySeating}
            </div>
            <br />
            <div>
              <h5>Specialization</h5>
              {Faculty.FacultyAreaSpecialization}
            </div>
            <br />
            <div>
              <h5>Subjects Taught</h5>
              {Faculty.FacultySubjectsTaught}
            </div>
          </div>
        </div>
        <div>
          <Link to="../faculties">
            <button value="Back" class="btn">
              Back
            </button>
          </Link>
        </div>
        <div>
          <Link to="../faculties">
            <button value="Delete" class="btn">
              Delete
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FacultyDetail;
