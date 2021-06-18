import Workout from "../components/Workout";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";



export default function Program({ program }) {
  // const [current, send] = useMachine(workoutMachine);

  return (
    <section className="mx-auto w-full md:max-w-5xl rounded-xl bg-blue-800 text-gray-50 px-5 py-10 flex flex-col">
      <h2 className="mx-auto font-bold text-xl py-5">{program.name}</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 grid-rows-4 gap-3">
        {program.workouts.map((workout, i) => (
          <Workout key={i} workout={workout} day={i + 1} />
        ))}
      </div>
    </section>
  );
}
