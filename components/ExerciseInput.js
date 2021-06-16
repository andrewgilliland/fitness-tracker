import { list } from "postcss";

export default function ExerciseInput({ exercise }) {
  console.log(exercise.sets);

  const getSetInputs = (exercise) => {
    let content = [];

    for (let i = 1; i < exercise.sets + 1; i++) {
      content.push(
        <li className="my-2" key={i}>
          <span className="bg-black px-2 py-1 rounded ">{i}</span>
          <span>
            <input
              className="bg-gray-300 text-black rounded border shadow w-10 ml-4 px-1"
              type="text"
            />{" "}
          </span>
          <span>
            <input
              className="bg-gray-300 text-black rounded border shadow w-10 ml-4 px-1"
              type="text"
              placeholder={exercise.sets}
            />{" "}
          </span>
          <span>
            <input
              className="ml-8"
              type="checkbox"
            />{" "}
          </span>
        </li>
      );
    }
    return content;
  };

  return (
    <div className="my-3">
      <div className="font-semibold">{exercise.name}</div>
      <div className="mx-auto my-3">
        <span>Set</span>
        <span className="ml-5">lbs</span>
        <span className="ml-10">Reps</span>
        <span className="ml-8">Completed</span>
      </div>
      <ul>{getSetInputs(exercise)}</ul>
    </div>
  );
}
