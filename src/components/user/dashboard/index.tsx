import Header from "../header";
import UserDataBook from "../userData";
import PageHeader from "../pageHeader";

const DashboardWrapper = async () => {
  return (
    <div className="flex h-[calc(100vh-48px)] w-full flex-col p-4 md:gap-y-20">
      <PageHeader pageTitle="Home" />
      <Header />
      <div className="flex translate-y-48 justify-center md:translate-y-0">
        <UserDataBook />
      </div>
    </div>
  );
};

export default DashboardWrapper;
