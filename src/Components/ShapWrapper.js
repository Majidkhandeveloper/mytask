import React from 'react';
import group2 from "../Images/img.jpg"; // Example local image import

const ShapWrapper = ({ children ,group=group2}) => {
  return (
    <div >
      <svg
        width="371"
        height="464"
        viewBox="0 0 371 464"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M0.999982 51.0002L0.999998 412.271C0.999999 439.885 23.3857 462.271 50.9999 462.271L319.901 462.271C347.515 462.271 369.901 439.885 369.901 412.271L369.901 140.605C369.901 115.465 349.521 95.0848 324.381 95.0848C299.241 95.0848 278.861 74.7047 278.861 49.5646L278.861 48.0424C278.861 22.0617 257.799 1.00011 231.818 1.00011L51 1.00012C23.3857 1.00012 0.999981 23.3859 0.999982 51.0002Z"
          fill="url(#pattern0_1_154)"
          stroke="#0851DF"
          strokeWidth="2"
        />
        <defs>
          <pattern
            id="pattern0_1_154"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <image
              id="image0_1_154"
              width="1"
              height="1"
              preserveAspectRatio="none"
              xlinkHref={group}
            />
          </pattern>
        </defs>
      </svg>
      {children}
    </div>
  );
};

export default ShapWrapper;
