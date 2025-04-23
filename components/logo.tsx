export default function Logo() {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-red-600 rounded-md">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path
          d="M22.5 12.5C22.5 13.33 21.83 14 21 14C20.17 14 19.5 13.33 19.5 12.5C19.5 11.67 20.17 11 21 11C21.83 11 22.5 11.67 22.5 12.5Z"
          fill="currentColor"
        />
        <path
          d="M4.5 12.5C4.5 13.33 3.83 14 3 14C2.17 14 1.5 13.33 1.5 12.5C1.5 11.67 2.17 11 3 11C3.83 11 4.5 11.67 4.5 12.5Z"
          fill="currentColor"
        />
        <path d="M21 8L19 5H5L3 8L1.5 11H22.5L21 8Z" fill="currentColor" />
        <path d="M17 9H7V6H17V9Z" fill="#DC2626" />
      </svg>
    </div>
  )
}
