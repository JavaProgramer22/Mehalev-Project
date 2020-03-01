import React from "react";

const FooterPage = () => {
  return (
    <>
      <footer className="page-footer fixed-bottom font-small bg-light pt-2">
        <div className="container-fluid text-center text-md-left"></div>
        <div className="footer-copyright text-center py-3">
          © 2019 Copyright:
          <a href="/"> Jeries Zamel & Saheer Jacob</a>
        </div>
      </footer>
      {/* <MDBBadge color="default">
        <MDBIcon fab icon="facebook-f" />
      </MDBBadge>
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 2</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 3</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter> */}
    </>
    // <>
    //   <MDBBtn floating size="lg" gradient="purple">
    //     <MDBIcon icon="bolt" />
    //   </MDBBtn>
    //   <MDBBtn rounded size="lg" color="info">
    //     Button
    //     <MDBIcon icon="heart" className="ml-2" />
    //   </MDBBtn>
    //   <MDBBtn rounded outline color="info">
    //     <MDBIcon far icon="gem" className="mr-2" />
    //     Button
    //   </MDBBtn>
    //   <MDBBtn size="md" color="indigo">
    //     Button
    //     <MDBIcon icon="thumbs-up" className="ml-2" />
    //   </MDBBtn>
    //   <MDBBtn outline rounded size="sm" color="warning">
    //     <MDBIcon icon="user" className="mr-2" />
    //     Button
    //   </MDBBtn>
    // </>
  );
};

export default FooterPage;
