import React, { Fragment } from 'react';
import ParticlesBg from 'particles-bg';

import Slider from '../components/Layouts/Slider';
import HomeContent from '../components/HomeContent';

export default function Home() {
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [.1, 0.4],
    position: "all",
    color: ["random", "#ff0000"],
    cross: "dead",
    // emitter: "follow",
    random: 15
  };

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      }
    });
  }

  return (
    <Fragment>
      {/* <ReactCompareImage leftImage="https://picsum.photos/id/1018/1000/600/" rightImage="https://picsum.photos/id/1015/1000/600/"/> */}
      <Slider />
      <div className="box cta">
        <ParticlesBg type="custom" config={config} bg={true} />
      </div>
      <HomeContent />
    </Fragment>
  )
}
