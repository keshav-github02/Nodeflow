const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// const { constants } = require('../constants');

//@desc Get all contacts    
//@route GET /api/contacts
//@access Public


const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});


//@desc  create new contacts    
//@route POST /api/contacts
//@access Public

const createContacts = asyncHandler(async(req, res) => {
    console.log("The request given by the user is :",req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("Please add all the fields");
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    });

    res.status(201).json(contact);
});
//@desc  get contact by id
//@route GET /api/contacts/:id
//@access Public

const getContact= asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
  
});

//@desc  update contact by id
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(req
        .params.id,
        req.body,
        {new : true}
    );
    if(!updatedContact){
        res.status(400);
        throw new Error("Contact not found");
    }
    res.status(200).json(updatedContact);
    
});

//@desc  delete contact by id

//@route DELETE /api/contacts/:id
//@access Public


const deleteContact = asyncHandler(async(req, res) => { 
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
   await Contact.deleteOne({_id: req.params.id});
    res.status(200).json(contact);
});



module.exports = {
    getContacts,
    createContacts,
    getContact,
    updateContact,
    deleteContact
    };
