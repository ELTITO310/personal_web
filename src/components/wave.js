const Wave = ({ color, className }) => {
  return (
    <div style={{ height: "150px", overflow: "hidden" }} className={className}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M-0.00,50.06 C149.99,150.22 349.21,-50.06 500.00,50.06 L500.00,150.22 L-0.00,150.22 Z"
          style={{ stroke: "none", fill: color }}
        />
      </svg>
    </div>
  );
};

export default Wave;
