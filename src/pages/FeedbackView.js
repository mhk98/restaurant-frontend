import React, { useEffect, useState } from "react";
import { public_api } from "../Endpoints/http.service";

const FeedbackView = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const getAllFeedback = async () => {
    const res = await public_api.get("/feedback");
    setFeedbacks(res.data);
    console.log("getAllFeedback", res.data);
  };
  useEffect(() => {
    getAllFeedback();
  }, []);
  return (
    <div class="flex flex-col justify-center items-center h-full w-full ">
      <div class="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <div class="font-semibold text-gray-800">Feedbacks</div>
        </header>

        <div class="overflow-x-auto p-3">
          <table class="table-auto w-full">
            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th class="p-2">
                  <div class="font-semibold text-left">Name</div>
                </th>
                {/* <th class="p-2">
                    <div class="font-semibold text-left">Brand</div>
                  </th> */}
                <th class="p-2">
                  <div class="font-semibold text-left">Feedback</div>
                </th>
                <th class="p-2">
                  <div class="font-semibold text-left">Ratings</div>
                </th>
              </tr>
            </thead>

            <tbody class="text-sm divide-y divide-gray-100">
              {feedbacks.map(({ name, feedback, ratings }) => (
                <tr>
                  <td class="p-2">
                    <div class="font-medium text-gray-800">{name}</div>
                  </td>

                  <td class="p-2">
                    <div class="text-left font-medium text-indigo-500">
                      {feedback}
                    </div>
                  </td>
                  <td class="p-2">
                    <div class="text-left font-medium text-indigo-500">
                      {ratings}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeedbackView;
