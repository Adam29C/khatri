import { downloadAPK } from "../../Helpers/DownloadAPK";
import menimage from "../../../images/bhau-images/Men Image.svg";
import countingimage from "../../../images/bhau-images/Counting.svg";

const Section2 = () =>{

  const download = async () => {
    await downloadAPK();
  };

  return (
    <>
    
      <div className="container">
        <div className="banner-container">
          <div className="row main-contain-row">
            <div className="col-lg-12 order-1 order-lg-1 d-flex  justify-content-center">
              <div className="banner-left">
                <div className="button-sec">
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="banner-text-section"
                  
                      >

                        <h1 >Play Games Win Money On BHAU777</h1>
                    
                      </div>
                    </div>
                  </div>
                  <img
                    className="count-img"
                    src={countingimage}
                    alt="Alternative Text Here"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-12 order-2 order-lg-2 text-center margin-t-15">
              <img
                className="banner-img"
                src={menimage}
                alt="Illustration of a scene with various elements"
              />
            </div>
          </div>
          <div className="download-now-btn move-color-animation d-flex justify-content-center align-items-center ">
            <h1
              className="mb-0 font-400 curser-pointer custom-font-size "
              onClick={() => download()}
            >
              <i class="fa fa-hand-o-right hand-icon" aria-hidden="true"></i>
              Download App
              {/* <i class="fa fa-hand-o-right margin-l-10" aria-hidden="true"></i> */}
              <i class="fa fa-hand-o-left hand-icon" aria-hidden="true"></i>

            </h1>
            {/* <i className="fa-2x fa fa-download ms-4" aria-hidden="true"></i> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
