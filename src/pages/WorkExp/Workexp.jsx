import React from "react";
import "./Workexp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LiaReact } from "react-icons/lia";

const Workexp = () => {
  return (
    <>
      <div className="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="2022 - 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<LiaReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Project Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Wipro Ltd, Kolkata</h4>
              <p>Python Scripting, API Testing, Manual Testing</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{
                borderRight: "7px solid white",
              }}
              date="2023 - 2024"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<LiaReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Mern Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Bavsitech Pvt Ltd</h4>
              <p>Teamcenter, JavaScript, ReactJs, MongoDB, Opcenter</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Workexp;
