import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    classTitle: { type: String, required: true },
    classDetails: { type: String, required: true },
    materials: { type: String, required: true },
    schedule: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ClassModel =
  mongoose.models.Product || mongoose.model("Classes", productSchema);
export default ClassModel;
