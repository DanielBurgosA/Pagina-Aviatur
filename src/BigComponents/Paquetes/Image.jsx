import React from "react";

const Image = ({ src, w, h }) => {
    return (
      <div style={{ width: w, height: h,  }}>
        <img src={src} alt="Gallery" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius:"15px" }} />
      </div>
    );
  }

export default Image;