import { getCustomerById } from "../services/customers.js";
import createHttpError from 'http-errors';

export const getCustomerByIdController = async (req, res, next) => {
try {
            const { customerId } = req.params;
            if (!customerId) {
                throw createHttpError(400).json({ message: 'CustomerId is required' });
            }

            const customer = await getCustomerById(customerId);
            if (!customer) {
                throw createHttpError(404).json({ message: 'Customer not found' });
            }

            res.status(200).json({
                status: 200,
                message: `Successfully found customer with id ${customerId}!`,
                data: customer,
            });
        } catch (err) {
            next(err);
        }
};

