import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass?.length || pass?.legth < 5) {
          new Error("Password must be ay least 5 characters");
        }
      },
    },
  },
  { timestamps: true }
);

export const User = models?.User || model("User", UserSchema);
