import { useState } from "react";
import Drawer from "./Drawer";
import Modal from "./Modal";

export default function Workout({ workout, day }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  function toggleModal() {
    return setModalOpen(!isModalOpen);
  }

  function toggleModalKeyPress() {
    return setModalOpen(!isModalOpen);
  }

  function toggleDrawer() {
    return setDrawerOpen(!isDrawerOpen);
  }

  function toggleDrawerKeyPress() {
    return setDrawerOpen(!isDrawerOpen);
  }

  return (
    <>
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

      <Modal
        workout={workout}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        toggleModalKeyPress={toggleModalKeyPress}
        toggleDrawer={toggleDrawer}
      />

      <Drawer
        workout={workout}
        isOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        toggleDrawerKeyPress={toggleDrawerKeyPress}
      />
    </>
  );
}
