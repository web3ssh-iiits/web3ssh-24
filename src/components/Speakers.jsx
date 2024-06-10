import SpeakerCardV2 from "./daywiseoverview/SpeakerCardV2"
import speakers from "../data/speakers.json"
import clsx from "clsx"

export default function SpeakersPanel({ className }) {
  return (
    <div className={clsx("w-full flex flex-col justify-center items-center", className)}>
      <div className="text-white text-9xl mb-24">
        <h1>Speakers!</h1>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center">
        {
          speakers.map((e) => {
            return (
              <SpeakerCardV2
                title={e.name}
                experience={e.experience}
                imgSrc={e.imageUrl}
                className="m-2"
              />
            )
          })
        }
      </div>

    </div>
    // <SpeakerCardV2
    //   title="Laisha Wadhwa"
    //   experience="Lead Researcher, Samsung India"
    //   imgSrc="/speakers/laisha_wadhwa.png"
    // />
  );
}
