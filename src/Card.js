import { Link } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  return (
    <div class="Card1 col-md-3">
      <div class="Card-Details">
        <div class="profile">
          <img src={props.image} alt="---" />
        </div>
        <div class="Data">
          <div class="Name col-md-12 content">{props.name}</div>
          <div class="Role col-md-12 content">{props.role}</div>
          <hr />
          <div class="Education col-md-12 content">{props.edu}</div>
          <hr />
          <div class="Other row">
            <div class="col-md-6 content">
              <div class="row o1">
                <div class="OtherTitle">Experience</div>
                <div class="ExpData content">
                  <div class="ExpData1">{props.exp}</div>
                </div>
              </div>
            </div>
            <div class="col-md-6 content">
              <div class="row o2">
                <div class="OtherTitle">Working Since</div>
                <div class="since content">
                  <div class="sinceData">{props.sin}</div>
                </div>
              </div>
            </div>
            <div class="view">
              <Link to={"../faculty/" + props.obj.id}>
                <p>View Profile &#8594;</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
