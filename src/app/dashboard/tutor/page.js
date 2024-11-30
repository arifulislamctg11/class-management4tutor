"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const Tutor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("http://localhost:3000/api/dashboard/tutor", data)
      .then((response) => {
        if (response.data.insertedId) {
          toast.success("You have successfully added");
        }
        console.log(response);
      })
      .catch((error) => {
        toast.error("There was an error adding the data");
        console.log(error);
      });

    reset();
    setIsOpen(false);
  };
  return (
    <div>
      <Table>
        <TableCaption>A list of your Classes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] flex items-center gap-2">
              Classes{" "}
              <button
                onClick={() => setIsOpen(true)}
                className="btn btn-sm btn-success text-white"
              >
                {" "}
                create class
              </button>
            </TableHead>
            <TableHead>Enrolled Students</TableHead>
            <TableHead>Performance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* Modal */}
      {isOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add Class Details</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/**class tittle */}

              <div>
                <label className="label">
                  <span className="label-text">Class Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter class Title"
                  className={`input input-bordered w-full ${
                    errors.classTitle ? "input-error" : ""
                  }`}
                  {...register("classTitle", {
                    required: "Class Title are required",
                  })}
                />
                {errors.classTitle && (
                  <span className="text-red-500 text-sm">
                    {errors.classTitle.message}
                  </span>
                )}
              </div>

              {/* Class Details */}
              <div>
                <label className="label">
                  <span className="label-text">Class Details</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter class details"
                  className={`input input-bordered w-full ${
                    errors.classDetails ? "input-error" : ""
                  }`}
                  {...register("classDetails", {
                    required: "Class details are required",
                  })}
                />
                {errors.classDetails && (
                  <span className="text-red-500 text-sm">
                    {errors.classDetails.message}
                  </span>
                )}
              </div>

              {/* Materials */}
              <div>
                <label className="label">
                  <span className="label-text">Materials</span>
                </label>
                <textarea
                  placeholder="Enter materials"
                  className={`textarea textarea-bordered w-full ${
                    errors.materials ? "textarea-error" : ""
                  }`}
                  {...register("materials", {
                    required: "Materials are required",
                  })}
                ></textarea>
                {errors.materials && (
                  <span className="text-red-500 text-sm">
                    {errors.materials.message}
                  </span>
                )}
              </div>

              {/* Schedule */}
              <div>
                <label className="label">
                  <span className="label-text">Schedule</span>
                </label>
                <input
                  type="date" // Ensures users pick a valid date and time
                  className={`input input-bordered w-full ${
                    errors.schedule ? "input-error" : ""
                  }`}
                  {...register("schedule", {
                    required: "Schedule is required", // Required validation
                    validate: (value) => {
                      if (!value || isNaN(new Date(value).getTime())) {
                        return "Please provide a valid date and time";
                      }
                      return true;
                    },
                  })}
                />
                {errors.schedule && (
                  <span className="text-red-500 text-sm">
                    {errors.schedule.message}
                  </span>
                )}
              </div>

              {/* Modal Actions */}
              <div className="modal-action">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tutor;
