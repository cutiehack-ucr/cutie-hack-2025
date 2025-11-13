import Details from "./details";
import NewTeam from "./new";
import { getSession } from "@/utils/auth";
import { fetchTeam } from "../actions/fetchTeam";
import Header from "../header";
import PageHeader from "../pageHeader";

const Team = async () => {
  const session = await getSession();

  if (!session?.user) return <></>;

  const team = session.user.team;

  const details = await fetchTeam(team);

  return (
    <div className="flex h-[calc(100vh-48px)] w-full flex-col p-4 md:gap-y-20">
      <PageHeader pageTitle="Teams" />
      <Header />

      <div className="m-auto flex h-1/2 w-full translate-y-48 flex-col items-center justify-center rounded-lg sm:w-1/2 md:translate-y-0">
        {team === "" ? <NewTeam /> : <Details team={details} />}
      </div>
    </div>
  );
};

export default Team;
