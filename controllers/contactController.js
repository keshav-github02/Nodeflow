//@desc Get all contacts    
//@route GET /api/contacts
//@access Public

const getContacts = async(req, res) => {
    res.status(200).json({ message: "Get All Contacts" });
};


//@desc  create new contacts    
//@route POST /api/contacts
//@access Public

const createContacts = async(req, res) => {
    console.log("The request given by the user is :",req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("Please add all the fields");
    }
    res.status(201).json({message : "Create Contact"});
};
//@desc  get contact by id
//@route GET /api/contacts/:id
//@access Public

const getContact= async(req, res) => {
    res.status(200).json({message : `Get Contact for  ${req.params.id}`});
};

//@desc  update contact by id
//@route PUT /api/contacts/:id
//@access Public
const updateContact = async(req, res) => {
    res.status(200).json({message : `Update Contact for  ${req.params.id}`});
};

//@desc  delete contact by id

//@route DELETE /api/contacts/:id
//@access Public


const deleteContact = async(req, res) => { 
    res.status(200).json({message : `Delete Contact for  ${req.params.id}`});
};



module.exports = {
    getContacts,
    createContacts,
    getContact,
    updateContact,
    deleteContact
    };
