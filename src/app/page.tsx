import Release from "@/components/release";
import RELEASES from "@/data/releases";
import Live from "@/components/live";

export const metadata = {
  title: "Cutie Hack 2025",
  description: "Legends, Logic, and Lore Await!",
};

const Page = () => {
  return (
    <div className="w-full">
      <Release release={RELEASES["/"]}>
        <Live />
      </Release>
    </div>
  );
};

export default Page;

export const dynamic = "force-dynamic";
