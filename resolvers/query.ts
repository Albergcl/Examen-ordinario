import { ContactModel, ContactModelType } from "../db/contact.ts";
import { Contact } from "../types.ts";
import mongoose from "npm:mongoose@7.6.3";

export const Query = {

    contacts: async(): Promise<Contact[]> => {
        const contacts = await ContactModel.find();
        return contacts;
    },

    contact: async(_: unknown, args: {id: String}): Promise<ContactModelType> => {
        const contact = await ContactModel.findById(args.id);
        return contact;
    }
};