export default function GeorgiaServiceAreaMap() {
  const places = [
    ["Auburn, Georgia", "Home base"],
    ["Barrow County", "Primary local area"],
    ["Gwinnett County", "Nearby businesses and service companies"],
    ["Hall County", "Gainesville and the surrounding market"],
  ] as const;

  return (
    <div className="georgia-map">
      <div className="georgia-map__canvas">
        <svg
          viewBox="0 0 520 500"
          role="img"
          aria-label="Simplified outline of Georgia emphasizing Auburn and nearby North Georgia counties"
          className="h-auto w-full"
        >
          <defs>
            <clipPath id="georgia-state-clip">
              <path d="M119 42L333 42L354 65L369 94L391 120L400 151L421 185L426 219L449 250L445 285L460 318L446 350L451 385L432 421L393 435L352 453L300 449L251 456L201 448L153 452L115 433L98 393L90 352L78 311L74 269L70 227L81 186L87 143L101 101Z" />
            </clipPath>
            <linearGradient id="north-focus" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.25" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M119 42L333 42L354 65L369 94L391 120L400 151L421 185L426 219L449 250L445 285L460 318L446 350L451 385L432 421L393 435L352 453L300 449L251 456L201 448L153 452L115 433L98 393L90 352L78 311L74 269L70 227L81 186L87 143L101 101Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-charcoal/55"
          />
          <g clipPath="url(#georgia-state-clip)" className="text-foothill">
            <rect
              x="60"
              y="35"
              width="410"
              height="175"
              fill="url(#north-focus)"
            />
            <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.34">
              <path d="M42 150C112 104 168 137 227 96C282 58 345 82 490 38" />
              <path d="M36 174C106 128 171 160 236 119C293 83 354 105 496 62" />
              <path d="M31 199C106 153 178 184 245 144C306 107 365 130 502 89" />
              <path d="M27 224C103 181 184 207 253 169C317 134 376 155 508 116" />
            </g>
          </g>
          <g className="georgia-map__region" fill="none" stroke="currentColor">
            <path
              d="M179 139L214 116L254 126L272 159L247 181L202 177Z"
              strokeWidth="1.5"
              strokeDasharray="4 5"
            />
            <path d="M212 151L312 151" strokeWidth="1" />
            <rect
              x="312"
              y="126"
              width="143"
              height="50"
              rx="3"
              strokeWidth="1"
            />
            <path d="M312 140H455" strokeWidth="1" opacity="0.45" />
            <circle cx="226" cy="151" r="6" fill="currentColor" stroke="none" />
          </g>
          <g fill="currentColor" className="text-charcoal">
            <text x="327" y="157" fontSize="11" letterSpacing="1.5">
              BASED / AUBURN, GA
            </text>
            <text x="151" y="106" fontSize="10" letterSpacing="1.2">
              NORTH GEORGIA
            </text>
            <text x="198" y="198" fontSize="9" letterSpacing="1">
              BARROW
            </text>
            <text x="132" y="176" fontSize="9" letterSpacing="1">
              GWINNETT
            </text>
            <text x="257" y="109" fontSize="9" letterSpacing="1">
              HALL
            </text>
          </g>
        </svg>
        <p className="absolute bottom-4 right-4 text-[0.58rem] uppercase tracking-[0.16em] text-taupe">
          Simplified regional illustration
        </p>
      </div>
      <dl className="georgia-map__places">
        {places.map(([place, context]) => (
          <div key={place} className="border-t border-charcoal/15 py-4">
            <dt className="text-xs font-semibold uppercase tracking-[0.13em] text-charcoal">
              {place}
            </dt>
            <dd className="mt-1 text-xs text-taupe">{context}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function GeorgiaSeal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 110"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M25 8H66L73 17L78 30L86 43L85 57L91 70L85 83L76 93L62 99L48 98L35 100L23 94L19 82L16 68L15 52L18 37L20 21Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M18 37C34 27 48 36 61 26C70 20 78 22 84 20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      <circle cx="46" cy="35" r="3.5" className="fill-brass text-brass" />
    </svg>
  );
}
