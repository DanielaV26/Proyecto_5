export const UserSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24" className="w-10"
    {...props}
  >
    <path
      fill="#939ca5"
      fillOpacity={0.24}
      d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
    />
    <circle cx={12} cy={10} r={4} fill="#713ABE" />
    <path
      fill="#713ABE"
      fillRule="evenodd"
      d="M18.22 18.246c.06.097.041.22-.04.297A8.969 8.969 0 0 1 12 21a8.969 8.969 0 0 1-6.18-2.457.239.239 0 0 1-.04-.297C6.942 16.318 9.291 15 12 15c2.708 0 5.057 1.318 6.22 3.246Z"
      clipRule="evenodd"
    />
  </svg>
)
