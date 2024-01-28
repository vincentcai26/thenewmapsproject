import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function About() {
  return (
    <div id="about">
      <div className="page-header">
        <h2>About</h2>
        <p>About The New Maps Project</p>
        <div className="background" style={{backgroundImage: 'url("/images/about.jpg")'}}></div>

      </div>
      <section id="about-paragraph">
        The New Maps Project is a software project created by Vincent Cai to
        draw legislative districts and fight gerrymandering. The goal of The New
        Maps Project is to provide everyone with access to flexible and
        interactive map drawing resources, as well as to aid in the redistricting
        process following the 2020 US Census. On this website, there is an
        interactive Editing Suite to visualize, analyze and draw districts with
        an integrated algorithm optimized for compactness, continuity, and
        population distribution. The New Maps Project's website also has
        flexible tools to support custom demographic data and statistical
        analysis. All these resources can be accessed by anyone, for free in a
        web browser.
      </section>
      <section className="links">
        <Link href="/editingsuite">
          <span>Editing Suite <FontAwesomeIcon  className="icon" icon={faArrowRight}></FontAwesomeIcon></span>
        </Link>
        <Link href="/documentation">
          <span>Documentation <FontAwesomeIcon  className="icon" icon={faArrowRight}></FontAwesomeIcon></span>
        </Link>
      </section>
    </div>
  );
}
