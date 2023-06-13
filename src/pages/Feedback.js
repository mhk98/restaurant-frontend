import React from "react";
import { public_api } from "../Endpoints/http.service";
import { toast } from "react-hot-toast";

const Feedback = () => {
  const createFeedback = async (event) => {
    event.preventDefault();

    let data = {
      name: event.target.name.value,
      ratings: event.target.ratings.value,
      feedback: event.target.feedback.value,
    };

    const res = await public_api.post("feedback", data);
    if (res.data.status === "Success") {
      toast.success("Successfully added your");
    }
  };
  return (
    <div className="grid grid-cols-1 place-items-center mt-20">
      <h2 className="text-white text-xl font-bold mb-8">
        Please drop your valuable comments
      </h2>
      <form onSubmit={createFeedback}>
        <div className="form-control w-96">
          <label className="label">
            <span className="label-text text-white">What is your name?</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text text-white">
              Rating your experience
            </span>
          </label>
          <input
            type="number"
            name="ratings"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text text-white">Feedback</span>
          </label>
          <textarea
            name="feedback"
            placeholder="Bio"
            className="textarea textarea-bordered textarea-md w-full max-w-xs"
          ></textarea>
        </div>

        <input
          className="btn w-28 mt-4 text-white bg-[#101418] hover:bg-[#C6A87D] "
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Feedback;
