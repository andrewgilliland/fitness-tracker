import Exercise from "../components/Exercise";

export default function Workout({ workout, day }) {
  return (
    <div className="bg-gray-900 rounded-xl p-5 flex flex-col justify-center items-center transform transition-transform hover:scale-105">
      <h3 className="font-semibold text-lg text-center">
        {" "}
        <div>{`Day ${day}`}</div>
        {workout.name}
      </h3>
      {/* <div className="flex flex-col">
        {workout.exercises.map((exercise, i) => (
          <Exercise key={i} exercise={exercise} />
        ))}
      </div> */}
    </div>
  );
}
