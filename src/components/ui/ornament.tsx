export default function Ornament() {
  return (
    <svg
      viewBox="0 0 600 24"
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
        {/* Main horizontal line */}
        <line x1="5" y1="12" x2="295" y2="12" />
        <line x1="305" y1="12" x2="595" y2="12" />
        {/* Center dot */}
        <circle cx="300" cy="12" r="2.5" fill="currentColor" stroke="none" />
        {/* Left dot */}
        <circle cx="15" cy="12" r="3.5" fill="currentColor" stroke="none" />
        {/* Right dot */}
        <circle cx="585" cy="12" r="3.5" fill="currentColor" stroke="none" />
        {/* Left curved ends */}
        <path d="M12 12 h12" /> {/* short connector */}
        <path d="M12 12 q-3 -5 0 -10" /> {/* top outward curve */}
        <path d="M12 12 q-3 5 0 10" /> {/* bottom outward curve */}
        <path d="M24 12 h24" /> {/* bridge into main line */}
        {/* Right curved ends */}
        <path d="M588 12 h-12" /> {/* short connector */}
        <path d="M588 12 q3 -5 0 -10" /> {/* top outward curve */}
        <path d="M588 12 q3 5 0 10" /> {/* bottom outward curve */}
        <path d="M576 12 h-24" /> {/* bridge into main line */}
      </g>
    </svg>
  );
}
