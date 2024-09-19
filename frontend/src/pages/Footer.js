import React from 'react';

const Footer = () => {
  return (
    <footer className="blog-footer bg-light text-dark">
      <div className="container py-0">
        <div className="row px-0">
          {/* site label */}
          <div className="col-10 px-0 my-auto text-left">
            <p>©Dog</p>
          </div>

          {/* channels */}
          <div className="col-2 px-0 text-right">
            <a className="mx-2" href="https://www.facebook.com/moneysart">
              <i className="fab fa-facebook fa-3x" style={{ color: '#1A77F2' }} aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;