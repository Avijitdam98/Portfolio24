import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2019 - 2022"
            iconStyle={{ background: " #138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              B.P. Poddar Institute of Management and Technology,Kolkata
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2016 - 2019"
            iconStyle={{ background: " #138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Diploma in Electrical Enginnering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Kingston Educational Institute Educational,Kolkata
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
