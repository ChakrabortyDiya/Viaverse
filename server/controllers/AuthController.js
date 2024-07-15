import User from "./models/UserModel";

export const signup = async (request,response,next) => {
    try{
        const { email,password } = req.body;
        if(!email || !password) {
            return response.status(400).send("Email and Password is required.")
        }
        const user = await User.create({emal,password});

    }
    catch(error){
        console.log({error});
        return response.status(500).send("Internal Server Error.");
    }
}