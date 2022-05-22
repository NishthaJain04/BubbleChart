import { getRandomNum } from "./utils";

const Circle = ({ x, y, z, title }) => {
  const scaledX = (x / 25) * (window.innerWidth / 15);
  const scaledY = (y / 25) * (window.innerHeight / 15);

  return (
    <div
      className="circle"
      style={{
        width: `${z}px`,
        height: `${z}px`,
        zIndex: 1,
        opacity: 0.85,
        bottom: `${scaledY}px`,
        left: `${scaledX}px`,
        lineHeight: `${z}px`,
        background: `rgba(${getRandomNum(200)}, ${getRandomNum(
          200
        )}, ${getRandomNum(200)}, ${getRandomNum(200)})`
      }}
    >
      {title}
    </div>
  );
};

export default Circle;
