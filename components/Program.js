export default function Program({ program }) {
  return (
    <section className="mx-auto max-w-5xl border border-gray-400 ">
      <h2>{program.title}</h2>
      <div className="grid grid-cols-7 grid-rows-4"></div>
    </section>
  );
}
