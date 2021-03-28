import { useState } from "react";
import { Link } from "react-router-dom";

function Join() {
  let [id, setId] = useState();

  function handleChange(e) {
    e.preventDefault();
    setId(e.target.value);
  }

  return (
    <div className="w-full h-full flex justify-center items-center bg-img-background bg-cover bg-no-repeat">
      <div>
        <div className="text-white text-5xl">Join A Room</div>
        <div>
          <form>
            <input
              name="id"
              type="text"
              value={id}
              onChange={handleChange}
              placeholder="Enter room's id ..."
              className="border-gray-400 border rounded-lg p-4 outline-none"
            />
            <Link to={`/rooms/${id}`}>
              <button
                type="submit"
                className="bg-blue-500 text-white ml-4 text-xl p-2 rounded-xl"
              >
                JOIN
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Join;
