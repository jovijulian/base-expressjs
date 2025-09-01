const userService = require('../services/user.service');
const { success, error, paginated } = require('../../utils/response');

class UserController {

    async create(req, res) {
        try {
            const data = await userService.create(req);
            return success(res, 201, data, 'User created successfully');
        } catch (err) {
            return error(res, err.statusCode || 500, err);
        }
    }

    async getAll(req, res) {
        try {
            const paginatedData = await userService.getAll(req);
            return paginated(res, 200, paginatedData, 'Users retrieved successfully');
        } catch (err) {
            return error(res, 500, err);
        }
    }

    async detail(req, res) {
        try {
            const id = req.params.id;
            const data = await userService.detail(id);
            return success(res, 200, data, 'User retrieved successfully');
        } catch (err) {
            return error(res, err.statusCode || 500, err);
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const request = req;
            const data = await userService.update(id, request);
            return success(res, 200, data, 'User updated successfully');
        } catch (err) {
            return error(res, err.statusCode || 500, err);
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;
            await userService.delete(id);
            return success(res, 200, null, 'User data deleted successfully.');
        } catch (err) {
            return error(res, err.statusCode || 500, err);
        }
    }
}

module.exports = new UserController();