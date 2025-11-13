export default function OrnamentSide() {
  return (
    <svg
      viewBox="0 0 200 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="h-6 w-full text-[#EDEAE0]"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        {/* Main horizontal lines*/}
        <line x1="30" y1="12" x2="110" y2="12" />
        <line x1="120" y1="12" x2="200" y2="12" />
        {/* Decorative dots */}
        <circle cx="115" cy="12" r="2" fill="currentColor" stroke="none" />{" "}
        {/* center dot */}
        <circle
          cx="38"
          cy="12"
          r="2.5"
          fill="currentColor"
          stroke="none"
        />{" "}
        {/* left dot */}
        <circle
          cx="192"
          cy="12"
          r="2.5"
          fill="currentColor"
          stroke="none"
        />{" "}
        {/* right dot */}
        {/* Left curved end */}
        <path d="M35 12 q-3 -5 0 -10" />
        <path d="M35 12 q-3  5 0  10" />
        {/* Right curved end (mirror) */}
        <path d="M195 12 q3 -5 0 -10" />
        <path d="M195 12 q3  5 0  10" />
      </g>
    </svg>
  );
}
