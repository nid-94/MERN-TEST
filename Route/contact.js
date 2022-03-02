// require express
const express = require("express");
const { findOneAndDelete } = require("../model/Contact");
// express router
const router = express.Router();

// model
const Contact = require("../model/Contact");

// ---------Routes-------------//
/**
 * test
 * @method :get
 * @path : http://localhost:5000/api/contacts/test
 * no data
 */
router.get("/test", (req, res) => {
    res.send("helloooo");
});

/**
 * ajout du contact
 * @method :post
 * @path : http://localhost:5000/api/contacts/
 * req.body
 */
router.post("/", async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const newContact = new Contact({
            name,
            email,
            phone,
        });
        await newContact.save();
        return res.status(200).send({ msg: "contact added", newContact });
    } catch (error) {
        return res.status(400).send({ msg: "can't add this contact", error });
    }
});
/**
 * get all
 * @method :get
 * @path : http://localhost:5000/api/contacts/all
 * none
 */
router.get("/", async (req, res) => {
    try {
        const contactList = await Contact.find();
        return res.status(200).send({ msg: "contact list :", contactList });
    } catch (error) {
        return res.status(400).send({ msg: "sorry can't show you your list" });
    }
});
/**
 * get one contact
 * @method :get
 * @path : http://localhost:5000/api/contacts/:_id
 * req.params
 */
router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const contactToGet = await Contact.findOne({ _id });
        return res.status(200).send({ msg: `this the contact with the id:${_id}`, contactToGet });
    } catch (error) {
        return res.status(400).send({ msg: "sorry can't show you your contact" });
    }
});
/**
 * update contact
 * @method :put
 * @path : http://localhost:5000/api/contacts/edit/:_id
 * req.params && req.body
 */
router.put("/edit/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { name, email, phone } = req.body;
        const contactToupdate = await Contact.updateOne({ _id }, { $set: { ...req.body } }).find();

        return res.status(200).send({ msg: "contact updated", contactToupdate });
    } catch (error) {
        return res.status(400).send({ msg: "update failed" });
    }
});
/**
 * delete contact
 * @method :delete
 * @path : http://localhost:5000/api/contacts/dele/:_id
 * req.params
 */
router.delete("/dele/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const contactToDelete = await Contact.findOneAndDelete({ _id });
        return res.status(200).send({ msg: "contact deleted" });
    } catch (error) {
        return res.status(400).send({ msg: "delete failed" });
    }
});

module.exports = router;
