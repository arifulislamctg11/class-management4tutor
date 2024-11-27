import React from "react";

const UpcomingClasses = () => {
  const classes = [
    { title: "Math 101", schedule: "Mon, 10:00 AM", id: 1 },
    { title: "Science 201", schedule: "Wed, 2:00 PM", id: 2 },
    { title: "History 301", schedule: "Fri, 1:00 PM", id: 3 },
  ];

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Class List</h1>
      {/* Horizontal Scroll or Grid */}
      <div className="flex gap-4 overflow-x-auto">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="min-w-[250px] bg-white rounded-lg shadow-md border border-gray-200 p-4"
          >
            <h2 className="text-lg font-semibold">{classItem.title}</h2>
            <p className="text-sm text-gray-500">{classItem.schedule}</p>
            <div className="mt-4 flex justify-between">
              <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md">
                View Details
              </button>
              <button className="px-3 py-1 bg-green-500 text-white text-sm rounded-md">
                Start Class
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingClasses;
