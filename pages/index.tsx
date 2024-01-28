import Head from "next/head";
import Image from "next/image";
import { useContext, useState } from "react";
import Scaffold from "../components/Scaffold";
import PContext from "../services/context";
import ReactMarkdown from "react-markdown";
import HomeOptions from "../components/HomeOptions";
import ArrowLink from "../components/ArrowLink";
import Link from "next/link";
import SvgMap from "../components/SvgMap";


export default function Home() {
  return (
    <div>
      <section id="home-section">
        <p>
          An Interactive Online Tool to Visualize, Analyze, and Draw
          Congressional Districts
        </p>
      </section>
      <section id="jumbotron">
        <div id="jumbo1">
          <div className="jimage1"></div>
          <h4>Submitted Maps</h4>
          <p>
            Legislative district map proposal submitted directly to a state
            legislature or published on a public redistricting portal.
          </p>
          <ArrowLink href="/submitted" text="View All"></ArrowLink>
        </div>
        <div id="jumbo2">
          {/* <div className="jimage2"></div> */}
          <SvgMap/>
          <div className="text2">
            <h4>Draw a Map</h4>
            <p>
              Create and analyze your own legislative districts. Visualize The
              New Maps Project's algorithm on your map.
            </p>
            <Link href="editingsuite"
              className="sb">Start Now
            </Link>
          </div>
        </div>
      </section>
      <HomeOptions
        urlParams={{}}
        isPopup={false}
        xFunction={() => {}}
        showComponent={true}
      ></HomeOptions>
      <section id="home-section2">
        <div className="top-part">
          <h3>What is The New Maps Project?</h3>
          <p>It's many things. </p>
          <ArrowLink href="/about" text="About Page"></ArrowLink>
        </div>
        <ul>
          <li>
            <h5>A Project to Help Democracy</h5>
            <p>
              Above all, The New Maps Project creates maps for state
              legislatures and the public to see in order to work towards fair
              representation in the 2021 legislative redistricting cycle.
            </p>
            <ArrowLink href="/submitted" text="View Submitted Maps"></ArrowLink>
          </li>
       
          <li>
            <h5>An Online Tool to Draw Districts</h5>
            <p>
              The New Maps Project provides software, 100% free and accessible through a web browser, for the public to draw legislative districts through the Editing Suite. Maps can be visualized, interactively edited, and analyzed with statistics.
            </p>
            <ArrowLink href="/editingsuite" text="Editing Suite"></ArrowLink>
          </li>
        
          <li>
            <h5>An Algorithm</h5>
            <p>The New Maps Project has it's own Algorithm to redraw legislative districts that is completely integrated into the Editing Suite. This algorithm can be visualized, in real time, on any map in the Editing Suite.</p>
            <ArrowLink href="/documentation/algorithm" text="How the Algorithm Works"></ArrowLink>
          </li>
          </ul>
      </section>
      <section id="additional-links">
        <h3>Additional Links</h3>
        <ul>
        <li>
            <h5>GitHub</h5>
            <p>
              Code repository for The New Maps Project
            </p>
            <ArrowLink href="https://github.com/" text="GitHub Organization"></ArrowLink>
          </li>
       
          <li>
            <h5>Datastore</h5>
            <p>
              Download the files for all the premade options in the Editing Suite.  
            </p>
            <ArrowLink href="/datastore" text="Datastore"></ArrowLink>
          </li>
        
          <li>
            <h5>Documentation</h5>
            <p>Full documentation for all of The New Maps Project's software on this website</p>
            <ArrowLink href="/documentation" text="Documentation"></ArrowLink>
          </li>

          {/* <li>
            <h5>Legacy Website</h5>
            <p>(May be dysfunctional) The New Maps Project's old website and software (Not used anymore)</p>
            <ArrowLink href="https://thenewmapsproject.netlify.app" text="Visit Legacy Site"></ArrowLink>
          </li> */}
          </ul>
      </section>
    </div>
  );
}
