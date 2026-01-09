export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <rect width="40" height="40" rx="10" fill="url(#logoGradient)" />
      
      {/* Inner shadow effect */}
      <rect x="2" y="2" width="36" height="36" rx="8" fill="url(#innerGradient)" fillOpacity="0.5" />
      
      {/* Chart line */}
      <path
        d="M10 26L16 18L22 22L28 12L34 16"
        stroke="url(#lineGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* End point glow */}
      <circle cx="34" cy="16" r="4" fill="#C9A86E" />
      <circle cx="34" cy="16" r="2.5" fill="#E8D5A8" />
      
      {/* Subtle grid lines */}
      <path
        d="M10 30h24M10 22h24M10 14h24"
        stroke="#C9A86E"
        strokeWidth="0.5"
        strokeOpacity="0.2"
      />
      
      <defs>
        <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0D2240" />
          <stop offset="100%" stopColor="#0A1A2F" />
        </linearGradient>
        <linearGradient id="innerGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C9A86E" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#C9A86E" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineGradient" x1="10" y1="20" x2="34" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C9A86E" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#C9A86E" />
          <stop offset="100%" stopColor="#E8D5A8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 15L7 7L11 11L15 3L19 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="19" cy="9" r="1.5" fill="currentColor" />
    </svg>
  )
}
