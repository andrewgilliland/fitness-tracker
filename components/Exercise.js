export default function Exercise({ exercise }) {
  return (
    <div>
      <span>{exercise.name}</span> <span>{exercise.sets} x Sets</span>
    </div>
  );
}
