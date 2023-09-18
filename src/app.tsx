import { useEffect, useMemo } from "preact/hooks";

interface StarProps {
  size: number;
  top: number;
  left: number;
}
function Star({ size, top, left }: StarProps) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    top: `${top}%`,
    left: `${left}%`,
  };

  return <div className="star" style={starStyle}></div>;
}
export function App() {
  const generateStars = () => {
    const newStars = [];
    for (let i = 0; i < 200; i++) {
      const size = Math.random() * 4 + 0.1;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      newStars.push({ size, top, left });
    }
    return newStars;
  };

  const stars = useMemo(() => generateStars(), []);

  useEffect(() => {
    document.body.style.background =
      window.location.href.includes("iframeUrl")? "transparent": "#1c1917";
  }, []);
  return (
    <>
      <div className="stars">
        {stars.map((star, index) => (
          <Star key={index} {...star} />
        ))}
      </div>
      <div className="container relative w-40 h-40">
        <div className="sun absolute top-15 left-13 w-10 h-10 rounded-full shadow-2xl bg-yellow-300"></div>
        <div className="earth absolute top-5 left-3 w-30 h-30 border-solid border-white border-t-0.1 border-r-0.1 rounded-full animate-orbit">
          <div className="moon absolute top-0 left-21 w-9 h-9 border-solid border-white border-t-0.1 border-r-0.1 rounded-full animate-orbit"></div>
        </div>
        <style>{`
          .container {
            font-size: 10px;
            width: 40em;
            height: 40em;
            position: relative;
          }
          .star{
            position:absolute;
            background-color:white;
            border-radius:50%;
            z-index:-1;
          }
          .sun {
            position: absolute;
            top: 15em;
            width: 10em;
            height: 10em;
            border-radius: 50%;
            box-shadow: 0 0 3em white;
            background-color: yellow;
            left: 13em;
          }
          .earth,
          .moon {
            position: absolute;
            border-style: solid;
            border-color: white transparent transparent transparent;
            border-width: 0.1em 0.1em 0 0;
            border-radius: 50%;
          }
          .earth {
            top: 5em;
            left: 3em;
            position: relative;
            width: 30em;
            animation: orbit 36.5s linear infinite;
            height: 30em;
          }
          .moon {
            top: 0em;
            left: 21em;
            width: 9em;
            animation: orbit 2.7s linear infinite;
            height: 9em;
          }
          .earth::before,
          .moon::before {
            content: "";
            position: absolute;
            border-radius: 50%;
          }
          .earth::before {
            top: 2.8em;
            right: 2.8em;
            width: 3em;
            height: 3em;
            background-color: aqua;
          }
          .moon::before {
            top: 0.8em;
            right: 0.2em;
            width: 1.2em;
            height: 1.2em;
            background-color: silver;
          }
          @keyframes orbit {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>

      <p className="z-10">Made by Harsh with ❤️</p>
    </>
  );
}
