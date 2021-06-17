export default function Exercise({ exercise }) {
  return (
    <div>
      <div>
        <span>{exercise.name}</span> -{" "}
        <span>{exercise.sets.length} x Sets</span>
      </div>
    </div>
  );
}
