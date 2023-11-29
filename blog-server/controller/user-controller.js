
import user from "../model/user.js";

export const singupUser = async (request, response) => {
    try {
        const user = request.body;

        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({ msg: 'Signup successfull' });
    } catch(error) {
        return response.status(500).json({ msg: 'Error while signing up user' });
    }

}