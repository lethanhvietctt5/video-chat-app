function Message() {
  return (
    <div className="h-screen w-1/3 border-2 m-4 rounded-lg border-blue-600">
      <div className="h-5/6">Message</div>
      <div className="flex w-full h-1/6 items-center justify-center p-2">
        <div className="w-5/6 h-full border-2 border-blue-400 rounded-xl">
          <textarea className="h-full w-full p-2 no-scrollbar outline-none rounded-xl" type="text" />
        </div>
        <div className="w-1/6 flex justify-center items-center bg-blue-400 text-white mx-2 p-2 rounded-2xl">
          <div className="text-2xl">
            <svg width="1em" height="1em" viewBox="0 0 32 32">
              <path
                d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l9.6 3.84l3.84 9.6a1 1 0 0 0 .9.63a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05zM19 24.2l-2.79-7L21 12.41L19.59 11l-4.83 4.83L7.8 13l17.53-6.33z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
