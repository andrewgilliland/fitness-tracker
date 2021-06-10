export default function CloseButton({ toggle, toggleKeyPress }) {
  return (
    <button
      type="button"
      className="rounded-sm p-2 inline-flex items-center justify-center text-gray-100 hover:border focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
      aria-expanded="false"
      onClick={toggle}
      onKeyPress={toggleKeyPress}
    >
      <span className="sr-only">Close main menu</span>
      <svg
        className="h-8 w-8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
