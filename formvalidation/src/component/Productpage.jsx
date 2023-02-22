import React from "react";
import { Link } from "react-router-dom";
import style from "../style/product.module.css";

const Productpage = () => {
  return (
    <div>
      <div>
        <h1> SAMSUNG S22 ULTRA</h1>
        <p id={`${style.p1}`}>
          The Galaxy S23 series will be powered by the Snapdragon 8 Gen 2
          processor with at least 8GB RAM and 128GB of internal storage on the
          base variant. Now, whether Samsung makes tweaks to the top-end
          Qualcomm chipset is something that we will have to wait and see. All
          three variants of the Galaxy S23 are also expected to pack an improved
          camera system with better low-light photography. The floating camera
          design of the S22 Ultra is expected on the S23+ and S23 variants as
          well.
        </p>
        <img
          src="https://cdn.dxomark.com/wp-content/uploads/medias/post-106688/Samsung-Galaxy-S22-Ultra-featured-image-packshot-review-Recovered-1024x691.jpg"
          alt=""
        />

        <Link to={"/comment"}>
          <button id={`${style.btn}`}>comment</button>
        </Link>
      </div>
    </div>
  );
};

export default Productpage;
