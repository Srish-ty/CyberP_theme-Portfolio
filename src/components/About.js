import myImg from "./myImg.png";
import "./styles/About.css";
import {
  Image,
  MB2,
  Emb,
  FlexCont,
  Summary,
  AboutContainer,
} from "./styles/About.styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <AboutContainer className="container-fluid">
      <h2 className="topic-head">About Me</h2>
      <div className="row">
        <Image
          data-aos="fade-right"
          data-aos-once="true"
          src={myImg}
          alt="I, in the flesh."
          className="col-lg-4 image"
        />
        <Summary
          className="col-lg-8 d-flex justify-content-center flex-column summary"
          data-aos-once="true"
          data-aos="fade-up"
        >
          <FlexCont>
            <MB2>
              Hey there, I'm Srishty. I’ve always been a technocrat since
              childhood. As a child, I was fascinated by tech and internet in
              general. Because of that influence, I became interested in
              exploring how internet and work (and how to break them). This
              passion led me to create my first startup TheCodeWorld. Currently,
              I'm in National Institute of Technology, Rourkela, where I am
              currently pursuing my bTech degree.
            </MB2>
            <MB2>
              I'm skilled at <Emb>Python, JavaScript, Bash, C++ </Emb>
              and <Emb>GoLang </Emb>
              I've worked on many project in full-stack using{" "}
              <Emb>MERN stack. REST and GraphQL</Emb>. and I am currently
              exploring <Emb> DevOps and Cloud. </Emb> I've learnt and created
              projects in <Emb>Deep Learning with Python</Emb>. I'm an active
              Open-Source contributor.
            </MB2>
          </FlexCont>
          <a
            className="button-link cool-btn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/drive/folders/19JnK8c2cq0SniX_DRKrVu_LJ35JI9Pwh?usp=sharing"
          >
            Download Resume
          </a>
        </Summary>
      </div>
    </AboutContainer>
  );
}

export default About;
