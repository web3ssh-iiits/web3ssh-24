import React, { useEffect, useRef, useState } from 'react';

const InteractiveBubble = () => {
  const interBubbleRef = useRef(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setTgX(event.clientX);
      setTgY(event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const move = () => {
      setCurX((prevCurX) => prevCurX + (tgX - prevCurX) / 20);
      setCurY((prevCurY) => prevCurY + (tgY - prevCurY) / 20);
      if (interBubbleRef.current) {
        interBubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [curX, curY, tgX, tgY]);

  return (
    <div
      className="interactive w-16 h-16 bg-blue-500 rounded-full"
      ref={interBubbleRef}
    ></div>
  );
};

export default InteractiveBubble;
