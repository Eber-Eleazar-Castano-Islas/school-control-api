import Students from "../models/Students.models.js";
const studentDaos = {};
studentDaos.getAll = async() =>{
//Yo poner modelo de monsoose aqui
//para tener aqui studiantes de cluster
const students = await Students.find();
return students
};

// student for ID
studentDaos.getOne =async(student_id) =>{
    const student = await Students.findOne({student_id : student_id});
    return student;        
    };

// new data student
studentDaos.insertOne = async (studentData) => {
    const newStudent = new Students(studentData);
    return await newStudent.save();
};


studentDaos.updateOne = async (student_id, updateData) =>{
    const updatedStudent = await Students.findOneAndUpdate({
        student_id: student_id},
    updateData
    );
    return updatedStudent;
};


studentDaos.deleteOne = async (student_id) => {
    const deletedStudent = await Students.findOneAndDelete({student_id: student_id});
    return deletedStudent;
};


export default studentDaos;