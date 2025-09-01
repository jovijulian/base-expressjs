const userRepository = require('../repositories/user.repository');
const { formatDateTime } = require("../helpers/dataHelpers");
const { knexConnection } = require('../../config/database');
class UserService {

    async getAll(request) {
        const queryParams = request.query;
        return userRepository.findAllWithFilters(queryParams);
    }

    async detail(id) {
        // const data = await userRepository.findByIdWithRelations(id, '[]'); if relation
        const data = await userRepository.findById(id)
        if (!data) {
            const error = new Error('User not found.');
            error.statusCode = 404;
            throw error;
        }
        return data;
    }

    async create(request) {
        const { name, email, password, phone } = request.body;
        return knexConnection.transaction(async (trx) => {
            const existingUser = await userRepository.findByEmail(email);
            if (existingUser) {
                const error = new Error('Email already in use.');
                error.statusCode = 409;
                throw error;
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await userRepository.create({
                name,
                email,
                password: hashedPassword,
                phone,
                role: request.body.role ? request.body.role : 2,
                created_at: formatDateTime(),
                updated_at: formatDateTime(),
            });

            return newUser;
        });
    }

    async update(id, request) {
        await this.detail(id);
        const payload = request.body;
        return knexConnection.transaction(async (trx) => {
            payload.updated_at = formatDateTime();

            const data = await userRepository.update(id, payload, trx);
            return data;
        });
    }

    async delete(id) {
        await this.detail(id);
        return knexConnection.transaction(async (trx) => {
            // const data = await userRepository.update(id, { is_active: 0, updated_at: formatDateTime() }, trx); if softdelete
            const data = await userRepository.delete(id, trx);

            if (!data) {
                const error = new Error('Failed to delete user.');
                error.statusCode = 500;
                throw error;
            }

            return { message: 'User has been delete successfully.' };
        });
    }
}

module.exports = new UserService();