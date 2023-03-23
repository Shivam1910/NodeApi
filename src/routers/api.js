const express = require("express");
const Student = require("../models/student");

const router = new express.Router();

router.post("/students", async (req, res) => {
    console.log(req.body)
    const { name, email, phone, address } = req.body;

    try {
        const newUser = new Student();
        newUser.name = name;
        newUser.email = email;
        newUser.phone = phone;
        newUser.address = address;
        await newUser.save();
        res.status(201).json(newUser);
        // res.send("hello from the another side,");
    } catch (error) {
        res.status(400).json({ error })
    }

})
// read the data of register student
router.get("/students", async (req, res) => {
    try {
        const studentData = await Student.find();
        res.send(studentData);
    } catch (e) {
        res.send(e);
    }
})
// get indivisual student data using Id
router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentsData = await Student.findById({ _id });
        console.log(studentsData);
        if (!studentsData) {
            return res.status(404).send();
        }
        else {
            res.send(studentsData);
        }
    } catch (e) {
        res.status(500).send(e);
    }

})
// update the students by its id
router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateStudent);

    } catch (e) {
        res.status(400).send(e);
    }
})
// delete the student by id
router.delete("/students/:id", async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        else {
            res.send(deleteStudent);
        }
    } catch (e) {
        res.status(500).send(e);

    }

})


module.exports = router;