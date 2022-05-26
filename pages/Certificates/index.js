//============== React & Next ================
import React from "react";
import Head from "next/head";
import styles from "./Certificates.module.scss";
//============== images & icons ==============
//============== in Certificates ===============
//============== ex Certificates ===============
//================= redux ====================
//============================================
function Certificates() {
  return (
    <>
      <Head>
        <title>Certificates</title>
      </Head>
      <section className={styles.wrapper}>
        <div className="max_width_rule px-5 py-24 flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full md:w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/assets/images/certificates/html.png"
                />
              </div>
              <div className="md:p-2 p-1 w-full md:w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/assets/images/certificates/css.png"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="/assets/images/certificates/sharif.png"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="/assets/images/certificates/tehran.png"
                />
              </div>
              <div className="md:p-2 p-1 w-full md:w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/assets/images/certificates/js.png"
                />
              </div>
              <div className="md:p-2 p-1 w-full md:w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/assets/images/certificates/jquery.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificates;
