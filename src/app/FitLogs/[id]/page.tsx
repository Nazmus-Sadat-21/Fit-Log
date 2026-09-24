import NotFound from "@/app/NotFound";
import FitDetails from "@/components/shared/FitDetails";
import { Exercise } from "@/types/type";

export interface ExerciseCardProps {
  params: Promise<{
    id: string;
  }>;
}

const data = async (): Promise<Exercise[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}`);
  const data = await response.json();
  return data as Exercise[];
};

const page = async ({ params }: ExerciseCardProps) => {
  const { id } = await params;
  const FitData: Exercise[] = await data();

  const FindFitLog = FitData.find(
    (data: Exercise) => String(data.id) === id,
  ) as Exercise;

  if(FindFitLog == null){
    return (
      <NotFound></NotFound>
    )
  }

  return (
    <main className="min-h-screen bg-[#07080a]">
      <FitDetails key={FindFitLog.id} exercise={FindFitLog} />
    </main>
  );
};

export default page;
