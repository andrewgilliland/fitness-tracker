import { useState } from "react";
import Exercise from "../components/Exercise";

export default function Workout({ workout, day }) {
  const [isWorkoutOpen, setWorkoutOpen] = useState(false);

  console.log(isWorkoutOpen);

  function openWorkout() {
    return setWorkoutOpen(!isWorkoutOpen);
  }

  return (
    <>
      <button
        onClick={openWorkout}
        className="bg-gray-900 rounded-xl p-5 flex flex-col justify-center items-center transform transition-transform hover:scale-105 relative"
      >
        <h3 className="font-semibold text-lg text-center">
          {" "}
          <div>{`Day ${day}`}</div>
          {workout.name}
        </h3>
      </button>
      <div
        className={`absolute top-0 inset-x-0 p-2 transition duration-200 transform ${
          isWorkoutOpen
            ? "z-20 ease-out opacity-100 scale-100"
            : "z-0 ease-in opacity-0 scale-90"
        }`}
      >
        <div className="flex flex-col justify-center items-center bg-blue-800 py-5">
          {workout.exercises.map((exercise, i) => (
            <Exercise key={i} exercise={exercise} />
          ))}
        </div>
      </div>
    </>
  );
}
