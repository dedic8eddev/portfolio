import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ProgressBar = ({ value, maxValue = 100 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      setWidth((value / maxValue) * 100);
    }
  }, [inView, value, maxValue]);

  return (
    <div ref={ref} style={{ height: '100%' }}>
      <div
        className="progress-bar"
        style={{ width: `${width}%`, transition: 'width 2s' }}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax={maxValue}
      >
        <span className="progressbar-front-text">{value}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
