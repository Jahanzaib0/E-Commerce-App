import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="container my-4">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12 mt-4 pt-2">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/09/28/02/17/shopping-bag-1699644_960_720.png"
                        alt="React Logo"
                        className="img-fluid"
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>
                  <div className="col-12"></div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/04/01/08/32/carry-1298786_960_720.png"
                        className="img-fluid"
                        alt="Image"
                        style={{height : "300px"}}
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>
                      <div className="img-overlay bg-dark">
                      </div></div>
                </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div className="section-title ml-lg-5">
              <h5 className="text-custom font-weight-normal mb-3">About Us</h5>
              <h4 className="title mb-4">
                Our mission is to <br />
                make your life easier.
              </h4>
              <p className="text-muted mb-0">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit quod
                debitis praesentium pariatur temporibus ipsa, cum quidem
                obcaecati sunt?
              </p>

              <div className="row">
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="fa fa-play h4 mb-0 text-custom"></i>
                    <h6 className="ml-3 mb-0">
                      <p  className="text-dark">
                        Make Shopping Easier
                      </p>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="fa fa-file-download h4 mb-0 text-custom"></i>
                    <h6 className="ml-3 mb-0">
                      <p className="text-dark">
                        Support Our Employes
                      </p>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="fa fa-user h4 mb-0 text-custom"></i>
                    <h6 className="ml-3 mb-0">
                      <p  className="text-dark">
                        Support Our Customer
                      </p>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="fa fa-image h4 mb-0 text-custom"></i>
                    <h6 className="ml-3 mb-0">
                      <p  className="text-dark">
                        creativity
                      </p>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
