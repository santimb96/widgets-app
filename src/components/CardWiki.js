import React from "react";
import PropTypes from "prop-types";

const CardWiki = ({ title, content, pageid }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center mt-1 mb-1">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body p-4">
          <div className="h-25">
            <div className="d-flex justify-content-center">
              <h5 className="card-title">{title}</h5>
            </div>
            <div className="d-flex justify-content-center">
              <h6 className="card-subtitle mb-2 text-muted">Descripción</h6>
            </div>
          </div>
          <div className="text-center">
            <div>
              <span
                dangerouslySetInnerHTML={{ __html: content }}
                className="card-text lead"
                style={{ fontSize: "0.8rem" }}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <button
              className="btn btn-info w-100"
              onClick={() =>
                (window.location.href = `https://es.wikipedia.org?curid=${pageid}`)
              }
            >
              {title} Wiki
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardWiki.defaultProps = {
  title: "Error",
  content: "Error de obtención de datos",
  pageid: 0,
};

CardWiki.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  pageid: PropTypes.number.isRequired,
};

export default CardWiki;
