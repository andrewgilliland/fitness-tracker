import { list } from "postcss";

export default function ExerciseInput({ exercise }) {
  const sets = exercise.sets;

  return (
    <div className="my-3">
      <div className="font-semibold">{exercise.name}</div>
      <div className="my-3">
        <span>Set</span>
        <span className="ml-5">lbs</span>
        <span className="ml-8">Reps</span>
        <span className="ml-10">Completed</span>
      </div>

      {sets.map((set, i) => (
        <div key={i} className="mt-2">
          <div className="bg-black px-2 py-1 rounded inline-block">
            {set.setNumber}
          </div>
          <input
            className="bg-gray-300 text-black placeholder-gray-500 rounded border shadow w-10 ml-4 px-1"
            type="text"
            placeholder={set.resistance}
          />
          <input
            className="bg-gray-300 text-black placeholder-gray-500 rounded border shadow w-10 ml-4 px-1"
            type="text"
            placeholder={set.reps}
          />
          <input
            className="ml-8"
            type="checkbox"
            // checked={set.isCompleted}
          />
        </div>
      ))}
    </div>
  );
}
