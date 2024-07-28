import React from "react";

export default function Loading() {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 backdrop-opacity-15 backdrop-invert bg-white/30'>
      <div className='music-waves-2'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
