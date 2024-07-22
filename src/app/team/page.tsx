import TeamSection from './TeamSection';
import teamData from '@data/team.json';

export default function Page() {
  return <TeamSection teamData={teamData} />;
}