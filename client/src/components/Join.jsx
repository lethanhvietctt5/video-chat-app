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
        <div>
          <form>
            <input name="id" type="text" onChange={handleChange} placeholder="Enter room's id ..." className="rounded-lg p-2 focus:outline-none" />
            <Link to={`/rooms/${id}`}>
              <button type="submit" className="bg-blue-500 text-white ml-4 text-lg py-2 px-3 rounded-xl">
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
