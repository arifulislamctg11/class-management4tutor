import React from "react";

const Feedback = async () => {
  const data = await fetch("http://localhost:3000/api/dashboard/feedback");
  const posts = await data.json();
  console.log(posts);

  return (
    <>
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Student Feedback
      </h2>
      <div classNameName="grid grid-cols-2">
        {" "}
        {posts.data.map((res) => (
          <div
            key={res.id}
            className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md w-full gap-5"
          >
            <div className="border-t border-b py-4 mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-sm text-gray-600">jane.smith@example.com</p>

              <p className="mt-2 text-gray-700">{res.feedback}</p>
              <p className="mt-2 text-gray-700">{res.grade}</p>
            </div>

            <div className="flex justify-center mt-6">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                See More Feedback
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Feedback;
