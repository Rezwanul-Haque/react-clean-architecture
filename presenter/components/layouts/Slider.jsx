import React from 'react';
import ReactCompareImage from 'react-compare-image';

export default function Slider() {
  return (
    <section className="">
      <div className="hero-body">
        <div className="container">
          <ReactCompareImage leftImage="https://picsum.photos/id/1018/1000/600/" rightImage="https://picsum.photos/id/1015/1000/600/"/>
        </div>
      </div>
    </section>
  )
}
