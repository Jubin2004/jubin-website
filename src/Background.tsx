import "./App.css";

interface Props{
    windowHeight: string;
}

export function Background1(props: Props) {
  const bubbles = Array.from({ length: 160 }, (_, i) => ({
    id: i,
    // Random number for the CSS variable (--i)
    iValue: Math.floor(Math.random() * 30) + 5, // between 5 and 35
  }));

  return (
    <div
      className="bubbles"
      style={{
        position: "relative",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          style={{ "--i": bubble.iValue,
                   "--start-y": props.windowHeight
          } as React.CSSProperties}
        ></span>
      ))}
    </div>
  );
}


interface Props2{
    windowHeight: number;
}


export function Background2(props: Props2) {
  // Generate an array of "bubbles" with random data
  const bubbles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    iValue: Math.floor(Math.random() * 40) + 5, // random CSS var (--i)
    top: `${Math.floor(Math.random() * props.windowHeight)}px`, // random vertical position
    left: `${Math.floor(Math.random() * 1900)}px`, // random horizontal position
  }));

  return (
    <div className="bubbles-big">
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          style={
            {
              "--i": bubble.iValue,
              top: bubble.top,
              left: bubble.left,
              position: "absolute", // ensure placement works
            } as React.CSSProperties
          }
        ></span>
      ))}
    </div>
  );
}
