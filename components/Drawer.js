import Exercise from "./Exercise";

export default function Drawer({
  isOpen,
  workout,
  toggleDrawer,
  toggleDrawerKeyPress,
}) {
  console.log(toggleDrawerKeyPress);

  return (
    <div
      className={`fixed top-0 inset-x-0 p-2 transition duration-200 transform ${
        isOpen ? "z-20 ease-out translate-0" : "z-0 ease-in translate-y-full"
      }`}
    >
      <div className="flex flex-col bg-blue-800 mx-auto p-5 rounded-xl max-w-sm h-screen">
        <h4 className="font-semibold text-lg mb-3">{workout.name}</h4>
        {workout.exercises ? (
          workout.exercises.map((exercise, i) => (
            <Exercise key={i} exercise={exercise} />
          ))
        ) : (
          <div>Have a great day off!</div>
        )}
        <button
          onClick={toggleDrawer}
          //   onKeyPress={toggleDrawerKeyPress}
          className="bg-green-600 px-4 py-2 mt-10 rounded-lg shadow-lg hover:bg-green-700"
        >
          Finish Workout
        </button>
      </div>
    </div>
  );
}
