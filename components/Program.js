import Workout from "../components/Workout";

export default function Program({ program }) {
  return (
    <section className="mx-auto w-full md:max-w-5xl rounded-xl bg-blue-900 text-gray-50 px-5 py-10 flex flex-col ">
      <h2 className="mx-auto font-bold text-xl py-5">{program.title}</h2>
      <div className="grid md:grid-cols-7 grid-rows-4 gap-3">
        {program.workouts.map((workout, i) => (
          <Workout key={i} workout={workout} day={i + 1} />
        ))}
      </div>
    </section>
  );
}
