export function GeorgiaSeal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 235 270"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
    >
      <g transform="translate(-5 0) scale(1.18 1)">
        <path
          d="M20 18L83 14C86 14 86 16 83 20L78 27C76 30 78 33 82 36L89 41C92 43 95 43 98 44C101 47 103 52 105 57C107 62 111 61 112 66C114 69 117 70 119 74L126 82C129 86 134 87 138 89L139 97C141 101 145 104 147 109L153 112C156 114 158 117 160 121L166 124L167 133C168 137 172 138 176 139L180 144C182 148 182 155 182 160L187 164L193 164C195 165 195 168 192 168C187 169 185 175 183 181L177 198L171 216C169 223 170 230 171 236L162 238C157 238 151 232 147 234C143 236 143 244 145 250L146 256C146 260 143 261 137 260C134 255 135 247 133 242L51 242C47 240 48 235 45 232C45 228 42 226 42 221C38 218 40 214 37 211C33 207 36 201 35 198L37 184C38 179 34 174 34 169C34 161 40 157 39 151C43 147 36 143 40 139C44 135 37 132 36 127C35 121 31 120 30 116L12 20Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M20 18L83 14C86 14 86 16 83 20L78 27C76 30 78 33 82 36L89 41C92 43 95 43 98 44C101 47 103 52 105 57C107 62 111 61 112 66C114 69 117 70 119 74"
          stroke="currentColor"
          strokeWidth="7"
          opacity="0.12"
        />
        <circle
          cx="85"
          cy="67"
          r="8"
          className="fill-charcoal text-charcoal"
          opacity="0.12"
        />
        <circle cx="85" cy="67" r="4.5" className="fill-brass text-brass" />
        <path
          d="M85 55V59M85 75V79M73 67H77M93 67H97"
          className="text-brass"
          stroke="currentColor"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
