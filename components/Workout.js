import { useState } from "react";
import Exercise from "../components/Exercise";
import CloseButton from "../components/CloseButton";

export default function Workout({ workout, day }) {
  const [isWorkoutOpen, setWorkoutOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  console.log(isWorkoutOpen);

  function toggleWorkout() {
    return setWorkoutOpen(!isWorkoutOpen);
  }

  function toggleWorkoutKeyPress() {
    return setWorkoutOpen(!isWorkoutOpen);
  }

  function toggle() {
    return setOpen(!isOpen);
  }

  return (
    <>
      <button
        onClick={toggleWorkout}
        onKeyPress={toggleWorkoutKeyPress}
        className="bg-gray-900 rounded-xl p-5 flex flex-col justify-center items-center transform transition-transform hover:scale-105 relative"
      >
        <h3 className="font-semibold text-lg text-center">
          {" "}
          <div>{`Day ${day}`}</div>
          {workout.name}
        </h3>
      </button>
      <div
        className={`fixed top-0 inset-x-0 p-2 transition duration-200 transform ${
          isWorkoutOpen
            ? "z-20 ease-out opacity-100 scale-100"
            : "z-0 ease-in opacity-0 scale-0"
        }`}
      >
        <div
          className="flex flex-col justify-center items-center bg-blue-800 mx-auto py-5 rounded-xl max-w-sm mt-10"
          // style={{ height: "80vh" }}
        >
          <div className="flex w-full justify-end px-5 mb-3">
            <CloseButton
              toggle={toggleWorkout}
              toggleWorkoutKeyPress={toggleWorkoutKeyPress}
            />
          </div>
          <h4 className="font-semibold text-lg mb-3">{workout.name}</h4>
          {workout.exercises ? (
            workout.exercises.map((exercise, i) => (
              <Exercise key={i} exercise={exercise} />
            ))
          ) : (
            <div>Have a great day off!</div>
          )}
          <button
            onClick={toggle}
            className="bg-green-600 px-4 py-2 mt-10 rounded-lg shadow-lg hover:bg-green-700"
          >
            Start Workout
          </button>
        </div>

        <div
          className={`fixed top-0 inset-x-0 p-2 transition duration-200 transform ${
            isOpen
              ? "z-20 ease-out translate-0"
              : "z-0 ease-in translate-y-full"
          }`}
        >
          <div className="flex flex-col bg-blue-800 mx-auto p-5 rounded-xl max-w-sm h-screen">
            <div className="flex w-full justify-end px-5 mb-3">
              {/* <CloseButton
                toggle={toggleWorkout}
                toggleWorkoutKeyPress={toggleWorkoutKeyPress}
              /> */}
            </div>
            <h4 className="font-semibold text-lg mb-3">{workout.name}</h4>
            {workout.exercises ? (
              workout.exercises.map((exercise, i) => (
                <Exercise key={i} exercise={exercise} />
              ))
            ) : (
              <div>Have a great day off!</div>
            )}
            <button
              onClick={toggle}
              className="bg-green-600 px-4 py-2 mt-10 rounded-lg shadow-lg hover:bg-green-700"
            >
              Finish Workout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
