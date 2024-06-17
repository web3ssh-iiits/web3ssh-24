import { m } from 'framer-motion';
import { GlareCard } from '../components/ui/glare-card';
import teamData from '../data/team.json';

export default function TeamPage() {
  return (
    <>
      <section className="pt-28 ">
        {teamData.map((role, index) => (
          <>
            <div key={index} className="container px-6 py-10 mx-auto">
              <h1 className="text-2xl font-semibold text-center  capitalize lg:text-5xltext-white">
                {role.role}
              </h1>
              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4 items-center">
                {role.members.map((member, idx) => (
                  <>
                    <GlareCard
                      key={idx}
                      className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-purple-600 border-gray-700 "
                    >
                      <img
                        className="object-cover w-[14rem] h-[14rem] rounded-full ring-4 ring-gray-300 mt-3"
                        src={
                          member.profilePic ||
                          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Lc3_2018_%28263682303%29_%28cropped%29.jpeg/330px-Lc3_2018_%28263682303%29_%28cropped%29.jpeg'
                        }
                        alt="member profile pic"
                      />
                      <h1 className="mt-10 text-2xl font-semibold  capitalize text-white group-hover:text-white text-center">
                        {member.name}
                      </h1>
                    </GlareCard>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
}
