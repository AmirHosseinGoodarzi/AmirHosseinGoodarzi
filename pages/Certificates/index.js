//============== React & Next ================
import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./Certificates.module.scss";
//============== images & icons ==============
//============== in Components ===============
//============== ex Components ===============
//================= redux ====================
//============================================
function Certificates() {
  return (
    <>
      <Head>
        <title>Certificates</title>
      </Head>
      <section className={styles.wrapper}>
        <div className="max_width_rule px-5 py-24">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2 p-3">
              <Image
                src="/assets/images/certificates/sharif.png"
                loading="lazy"
                layout="intrinsic"
                alt="sharif University"
                width={800}
                height={600}
              />
            </div>
            <div className="w-full md:w-1/4 mt-auto p-3">
              <Image
                src="/assets/images/certificates/meta-frontEnd-intro.jpg"
                loading="lazy"
                layout="intrinsic"
                alt="meta-frontEnd-intro"
                width={800}
                height={600}
              />
            </div>
            <div className="w-full md:w-1/4 mt-auto p-3">
              <Image
                src="/assets/images/certificates/tehran.png"
                loading="lazy"
                layout="intrinsic"
                alt="University of tehran"
                width={800}
                height={600}
              />
            </div>
            <div className="w-full md:w-1/5 p-3">
              <Image
                src="/assets/images/certificates/html.png"
                loading="lazy"
                layout="intrinsic"
                alt="SoloLearn Academy"
                width={800}
                height={600}
              />
            </div>
            <div className="w-full md:w-1/5 p-3">
              <Image
                src="/assets/images/certificates/css.png"
                loading="lazy"
                layout="intrinsic"
                alt="SoloLearn Academy"
                width={800}
                height={600}
              />
            </div>
            <div className="w-full md:w-1/5 p-3">
              <Image
                src="/assets/images/certificates/js.png"
                loading="lazy"
                layout="intrinsic"
                alt="SoloLearn Academy"
                width={800}
                height={600}
              />
            </div>
            <div className="w-full md:w-1/5 p-3">
              <Image
                src="/assets/images/certificates/jquery.png"
                loading="lazy"
                layout="intrinsic"
                alt="SoloLearn Academy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificates;
