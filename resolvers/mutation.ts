import { ContactModel, ContactModelType } from "../db/contact.ts";
import { Contact } from "../types.ts";
import { GraphQLError } from "npm:graphql@^16.8.1";
import mongoose from "npm:mongoose@7.6.3";

export const Mutation = {

    addContact: async(_: unknown, args: {nombre: String, tlf: String}): Promise<ContactModelType> => {
        const contact = {
            nombre: args.nombre,
            tlf: args.tlf,
        };

        const newContact = await ContactModel.create(contact);
        return newContact;
    },


    deleteContact: async(_: unknown, args: {id: ID}): Promise<ContactModelType> => {
        if(!args.id){
            throw new GraphQLError("Contacto no encontrado");
        }

        const contact = await ContactModel.findByIdAndDelete(args.id);
        console.log("El contacto se ha borrado correctamente");
    },


    updateContact: async(_: unknown, args: {id: ID, name: String, tlf: String}): Promise<ContactModelType> => {
        const contact = {
            id: args.id,
            name: args.name,
            tlf: args.tlf,
        };

        const updateContact = await ContactModel.findByIdAndUpdate(contact);
        return updateContact;
    }
}