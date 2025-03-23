import React from "react";
import { Col, Row } from "react-bootstrap";

function MessageSections() {
  return (
    <div>
      <div className="header-section">heder</div>
      <div className="message-body">
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <p className="text-primary fw-bold">Hello Folks!</p>
            <h1 className="fw-bold display-4">
              I’m Matt Marlow, <br /> Freelance UI/UX Designer!
            </h1>
            <p className="text-muted">
              I’m a creative designer based in New York, and I’m very passionate
              and dedicated to my work.
            </p>
            <button variant="primary" className="btn-lg mt-3 shadow-sm">
              {/* Read More <FaArrowRight className="ms-2" /> */}
            </button>
          </Col>
          <Col
            md={6}
            className="position-relative d-flex justify-content-center"
          >
            <div className="image-container position-relative">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Freelance UI/UX Designer"
                className="rounded-circle img-fluid shadow-lg"
              />
              {/* Floating Info Boxes */}
              <div className="info-box top-right shadow">
                <p className="mb-0 fw-bold">2k+</p>
                <span className="text-muted">Happy Customers</span>
              </div>
              <div className="info-box bottom-left shadow">
                <p className="mb-0 fw-bold">🏆 Best Design Award</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MessageSections;
