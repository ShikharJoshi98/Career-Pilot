const User = require("../models/user.model");
const CrudRepository = require("./CrudRepository");

class AuthRepository extends CrudRepository{
    constructor() {
        super(User);
    }

    async findByEmail(email) {
        const response = await User.findOne({ email });
        return response;
    }
}

module.exports = AuthRepository;