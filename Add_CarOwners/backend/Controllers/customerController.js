import Customer from '../models/customerModel.js';
import { errorHandler } from '../utils/error.js'
//import bcryptjs from 'bcryptjs'

export const viewProfile = async (req, res, next) => {
    const id = req.params.id;

    try{
        const customer = await Customer.findById(id).select('-password');
        if(!customer){
            return next(errorHandler(404,'Customer not found'));
        }

        res.status(200).json(customer);
    } catch(error) {
        next(error);
    }
};

export const updateCustomerProfile = async (req, res, next) => {
    const id = req.params.id;
    const { username, firstName, lastName, email, mobile, nic, age } = req.body;
    
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(
            id,
            { username, firstName, lastName, email, mobile, nic, age },
        ).select('-password');

        if(!updatedCustomer){
            return next(errorHandler(404,'Customer not found'));
        }

        res.status(200).json({ message: 'Customer profile updated successfully', data: updatedCustomer });
    } catch(error){
        next(error);
    }
};

export const deleteCustomer = async (req, res, next) => {
    const id = req.user.id;
    
    try{
        const deletedCustomer = await Customer.findByIdAndDelete(req.user.id);
        if(!deletedCustomer){
            return next(errorHandler(404, 'Customer not found'));
        }

        res.status(200).json({ message: 'Profile deleted successfully' });
    } catch (error) {
        next(error);
    }
};
