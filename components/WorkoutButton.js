export default function WorkoutButton({ toggleModal, day, workout }) {
  return (
    <button
      onClick={toggleModal}
      // onKeyPress={toggleModalKeyPress}
      className="bg-gray-900 rounded-xl p-5 flex flex-col justify-center items-center transform transition-transform hover:scale-105 hover:shadow-lg"
    >
      <h3 className="font-semibold text-lg text-center">
        <div>{`Day ${day}`}</div>
        {workout.name}
      </h3>
    </button>
  );
}
