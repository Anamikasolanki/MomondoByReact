import React from "react";
import Layout from "../Layout/Layout";
import banner from "../../../public/img/banner.jpg";
import Fun from "./Fun";
import News from "./News";
import Popular from "./Popular";
import Estimate from "./Estimate";
import Latest from "./Latest";

function Home() {
  return (
    <Layout>
      <div style={{ background: `URL(${banner})`, backgroundSize: "cover" }}>
        <div className="container">
          <div className="row py-5">
            <div className="col py-5 my-5">
              <h1 className="text-white fs-2 fw-bold">
                "The best place to find <br /> the cheapest airfares"
              </h1>
              <h1 className="fw-bold fs-5 text-white">-every single time</h1>
            </div>
          </div>
        </div>
      </div>
      <Fun/>
      <News/>
      <Popular/>
      <Estimate/>
      <Latest/>
    </Layout>
  );
}
export default Home;
