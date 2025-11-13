import Subjects from "../models/subject.model.js";
const subjectDAOS = {};

subjectDAOS.getAll = async()=>{
    const subjects = await Subjects.find();
    return Subjects
};