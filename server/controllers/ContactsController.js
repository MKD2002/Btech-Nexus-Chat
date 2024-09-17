import User from '../models/UserModel.js'
export const searchContacts = async(request,response,next) => {
    try{
        const {searchTerm} = request.body;
        if(searchTerm ===undefined || searchTerm === null){
            return response.status(400).send("searchTerm is Required")
        }
        const sanitizedSearchTerm = searchTerm.replace(
            /[.*+?^${}()|[\]\\]/g,
            "\\$&"
        );

        const regex = new RegExp(sanitizedSearchTerm,"i");

        const contacts = await User.find({
            $and:[
                {_id:{$ne:request.userId}},
                {
                    $or:[{firstName:regex},{lastname:regex},{email:regex}],
                },
            ],
        });

        return response.status(200).json({contacts});
    }catch(error){
        console.log({error});
        return response.status(500).json({error:"Internal Server error"});
    }
};