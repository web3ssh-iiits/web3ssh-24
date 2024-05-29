import SpeakerCard from "./SpeakerCard"
import Speakers from "../../storage/speakerlist_days.json"
import { useState } from "react";


const days = [];

Object.keys(Speakers).forEach((day) => {
  const slots = [];
  Object.keys(Speakers[day]).forEach((slot) => {
    slots.push(Speakers[day][slot]);
  });
  days.push(slots);
});

export default function CarouselPanel() {
  const [sliderIndex, setSliderIndex] = useState(0);

  function showNextSlide() {
    setSliderIndex(idx => {
      if (idx == days.length - 1) return 0
      return idx + 1
    })
  }

  function showPrevSlide() {
    setSliderIndex(idx => {
      if (idx === 0) return days.length - 1;
      return idx - 1;
    })
  }

  function showSlide(idx) {
    setSliderIndex(() => idx)
  }

  // <SpeakerCard imgSrc="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" title="Introduction to web3" date="19-02-97" speaker="Laisha Wadhwa" />

  return (
    <div className="flex-col w-full h-full flex justify-center items-center py-20 ">
      <div className="w-full flex justify-center">
        <button onClick={() => showSlide(0)}> day1 </button>
        <button onClick={() => showSlide(1)}> day2 </button>
        <button onClick={() => showSlide(2)}> day3 </button>
        <button onClick={() => showSlide(3)}> day4 </button>
      </div>
      <div className="w-full flex shrink-0 overflow-hidden">
        {
          days.map((day, idx) => {
            return (
              <div key={idx} className="flex flex-wrap gap-10 object-cover justify-center w-full h-full shrink-0 grow-0 transition-all duration-300 ease-in-out" style={{ translate: `${-100 * sliderIndex}%` }} >
                {
                  day.map((slot, idx) => {
                    return (<SpeakerCard key={idx} imgSrc={slot.imgUrl} title={slot.title} date={slot.time} speaker={slot.name} />
                    )
                  })
                }
              </div>
            )
          })
        }

      </div>
    </div>
  )
}
