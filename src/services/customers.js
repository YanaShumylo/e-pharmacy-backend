import { CustomersCollection } from "../db/models/customer.js";

export const getCustomerById = async (customerId) => {
    const customer = await CustomersCollection.findById(customerId);
    return customer;
}