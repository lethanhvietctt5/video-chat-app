function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center text-white bg-img-background bg-cover bg-no-repeat">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="animate-spin iconify iconify--mdi-light"
          width="200"
          height="200"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M11.5 4A8.5 8.5 0 0 0 3 12.5H2A9.5 9.5 0 0 1 11.5 3v1z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Loading;
