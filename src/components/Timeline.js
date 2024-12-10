import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6">My Journey</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          date="Nov 2021 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="text-lg font-bold">Software Engineer</h3>
          <p>HCLTech - Chennai</p>
          <p>With 3 years of experience as a Frontend Developer, I’ve developed dynamic, responsive user interfaces, optimized performance using React.memo and code-splitting, handled Error Boundaries and API errors with Axios, and worked with Redux, React Router, maintaining code consistency through collaborative reviews and best practices.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="June 2020 - July 2020"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="text-lg font-bold">Full Stack Developer Intern</h3>
          <p>Techciti Technologies - Bengaluru</p>
          <p>Designed and developed an e-commerce website for a smooth user journey.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
