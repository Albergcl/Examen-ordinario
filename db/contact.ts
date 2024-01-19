import mongoose from "npm:mongoose@8.1.0";
import { Contact } from "../types.ts";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    nombre: { type: String, required: true },
    tlf: { type: String, required: true, unique: true },
    pais: { type: String, required: true },
    hora: { type: String, required: true },
},
    {timestamps: true}
);

export type ContactModelType = mongoose.Document & Omit<Contact, "id">;
export default mongoose.model<ContactModelType>("Contact", contactSchema);