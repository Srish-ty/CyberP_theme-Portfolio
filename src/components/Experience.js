import "./styles/Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as WorkIcon } from "../images/work.svg";
import { ReactComponent as SchoolIcon } from "../images/school.svg";
import experiences from "../config/experience/Experience";
import { useState } from "react";

function Experience() {
  return (
    <div id="experience" className="container-fluid">
      <h2 className="topic-head">Experience</h2>
      {/* Create a timeline here */}
      <VerticalTimeline lineColor="#b46fd9">
        {experiences.map((e) => {
          const id = experiences.indexOf(e);
          const Icon = e.type === "work" ? WorkIcon : SchoolIcon;
          const alignment = id % 2 === 0 ? "left" : "right";
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(80, 40, 128)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(80, 40, 128)",
              }}
              date={e.date}
              iconStyle={{ background: "rgb(203, 158, 255)", color: "#fff" }}
              icon={<Icon />}
              position={alignment}
            >
              <h3 className="vertical-timeline-element-title">{e.heading}</h3>
              <h4 className="vertical-timeline-element-subtitle">{e.sub}</h4>
              <p>{e.description}</p>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(80, 40, 128)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(80, 40, 128)" }}
          date="2020 - present"
          iconStyle={{ background: "rgb(203, 158, 255)", color: "#fff" }}
          icon={<WorkIcon />}
          position={"right"}
        >
          <h3 className="vertical-timeline-element-title">Executive Member</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Google Developer Student Club
          </h4>
          <p>
            Worked to organize various seminars and events which were attended
            by over 150 students.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
