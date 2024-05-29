import SpeakerCard from "./SpeakerCard"
import Speakers from "../../storage/speakerlist_days.json"
import { useState } from "react";
import DayButton from "./dayButton";


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

  function showSlide(idx) {
    setSliderIndex(() => idx)
  }


  return (
    <div className="flex-col w-full h-full flex justify-center items-center">
      <div className="w-full flex justify-center gap-[40px] py-10">
        <DayButton onClick={() => showSlide(0)}> DAY 1 </DayButton>
        <DayButton onClick={() => showSlide(1)}> DAY 2 </DayButton>
        <DayButton onClick={() => showSlide(2)}> DAY 3 </DayButton>
        <DayButton onClick={() => showSlide(3)}> DAY 4 </DayButton>
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
