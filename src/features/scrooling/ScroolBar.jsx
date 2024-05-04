import React, { useEffect, useRef } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export default function ScroolBar() {
  const scroolBar = useRef(null);
  const toGoleft = 336;

  useEffect(() => {
    const id = setInterval(() => {
      if (scroolBar.current) {
        if (
          Math.round(scroolBar.current.scrollWidth) ==
          scroolBar.current.scrollLeft + scroolBar.current.clientWidth
        ) {
          scroolBar.current.scrollBy({
            top: 0,
            left: -(
              scroolBar.current.scrollLeft + scroolBar.current.clientWidth
            ),
            behavior: 'smooth',
          });
          return;
        }
        scroolBar.current.scrollBy({
          top: 0,
          left: toGoleft,
          behavior: 'smooth',
        });
      }
      console.log(
        scroolBar.current.scrollWidth,
        scroolBar.current.scrollLeft + scroolBar.current.clientWidth,
      );
    }, 5000);
    return () => {
      clearInterval(id);
    };
  }, []);

  const scrollRight = () => {
    if (scroolBar.current) {
      scroolBar.current.scrollBy({
        top: 0,
        left: toGoleft,
        behavior: 'smooth',
      });
    }
    console.log(scroolBar.current.scrollLeft);
  };

  const scrollLeft = () => {
    if (scroolBar.current) {
      scroolBar.current.scrollBy({
        top: 0,
        left: -toGoleft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mb-5 flex gap-4">
      <button onClick={scrollLeft}>
        <GrFormPrevious />
      </button>
      <div className=" flex gap-3 overflow-auto" ref={scroolBar}>
        <img
          src="https://cdn.getir.com/misc/658aab81da8f5800287d102b_picUrl_tr_1703589440256.jpeg"
          alt=""
          className="w-80 object-contain"
        />
        <img
          src="https://cdn.getir.com/misc/657bfb2d98f7be41a7e036f4_picUrl_tr_1702894385426.jpeg"
          alt=""
          className="w-80 object-contain"
        />
        <img
          src="https://cdn.getir.com/misc/65007e120c168e12aa8f804d_picUrl_tr_1699441887426.jpeg"
          alt=""
          className="w-80 object-contain"
        />
        <img
          src="https://cdn.getir.com/misc/658aab81da8f5800287d102b_picUrl_tr_1703589440256.jpeg"
          alt=""
          className="w-80 object-contain"
        />
        <img
          src="https://cdn.getir.com/misc/658aab81da8f5800287d102b_picUrl_tr_1703589440256.jpeg"
          alt=""
          className="w-80 object-contain"
        />
        <img
          src="https://cdn.getir.com/misc/658aab81da8f5800287d102b_picUrl_tr_1703589440256.jpeg"
          alt=""
          className="w-80 object-contain"
        />
      </div>
      <button onClick={scrollRight}>
        <GrFormNext />
      </button>
    </div>
  );
}
