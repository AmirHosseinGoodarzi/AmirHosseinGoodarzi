import "./certificates.scss";
import html from "~/assets/images/certificates/html.png";
import css from "~/assets/images/certificates/css.png";
import js from "~/assets/images/certificates/js.png";
import jquery from "~/assets/images/certificates/jquery.png";
import sharif from "~/assets/images/certificates/sharif.png";
import tehran from "~/assets/images/certificates/tehran.png";
import jsAlgorithms from "~/assets/images/certificates/jsAlgorithms.png";
import responsive from "~/assets/images/certificates/responsive.png";
import meta from "~/assets/images/certificates/meta-frontEnd-intro.jpg";
import AbsoluteShape from "~/components/AbsoluteShape";

const Certificates = () => {
  return (
    <div className="container">
      <AbsoluteShape
        position="top_left"
        colors="from-orangeGradEnd via-purpleGradStart to-blueGradStart"
      />
      <div className="certificates_wrapper">
        <div className="section_title">
          <h1 className="text_simple_grad">Certificates</h1>
          <p className="description">
            I have completed several online courses on web front-end development and
            programming languages.
          </p>
        </div>
        <div className="cert_cards_wrapper">
          <div id="gallery">
            <div>
              <img src={jsAlgorithms} />
            </div>
            <div className="col-span-4 row-span-3">
              <img src={meta} />
            </div>
            <div>
              <img src={js} />
            </div>
            <div>
              <img src={jquery} />
            </div>
            <div className="col-span-2 row-span-2">
              <img src={sharif} />
            </div>
            <div>
              <img src={html} />
            </div>
            <div>
              <img src={tehran} />
            </div>
            <div>
              <img src={responsive} />
            </div>
            <div>
              <img src={css} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
