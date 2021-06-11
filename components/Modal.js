import CloseButton from "./CloseButton";
import Exercise from "./Exercise";
import Overlay from "./Overlay";

export default function Modal({
  workout,
  isModalOpen,
  toggleModal,
  toggleModalKeyPress,
  toggleDrawer,
}) {
  return (
    <>
      <div
        className={`fixed top-0 inset-x-0 p-2 transition duration-300 transform ${
          isModalOpen
            ? "z-20 ease-out opacity-100 scale-100"
            : "z-0 ease-in opacity-0 scale-0"
        }`}
      >
        <div className="flex flex-col justify-center items-center bg-blue-800 mx-auto py-5 rounded-xl max-w-sm mt-10">
          <div className="flex w-full justify-end px-5 mb-3">
            <CloseButton
              toggle={toggleModal}
              // toggleKeyPress={toggleModalKeyPress}
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
            onClick={toggleDrawer}
            className="bg-green-600 px-4 py-2 mt-10 rounded-lg shadow-lg hover:bg-green-700"
          >
            Start Workout
          </button>
        </div>
      </div>
      <Overlay isOpen={isModalOpen} toggle={toggleModal} />
    </>
  );
}
