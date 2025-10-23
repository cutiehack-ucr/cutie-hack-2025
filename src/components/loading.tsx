import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center">
      <p className="font-inknut text-2xl font-bold text-hackathon-gray-400">
        Loading...
      </p>
      <LoaderCircle
        size={45}
        className="mt-2 animate-spin text-hackathon-gray-400"
      />
    </div>
  );
};

export default Loading;
