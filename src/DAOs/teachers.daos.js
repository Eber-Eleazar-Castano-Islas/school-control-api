import Teachers from "../models/teachers.model.js";
const teachersDAOs = {};

teachersDAOs.getAll = async() =>{
    const teachers = await Teachers.find();
    return teachers
};

teachersDAOs.getOne = async(teacher_id)=>{
  const teacher = await Teachers.findOne({teacher_id:teacher_id});
  return teacher;  
};

teachersDAOs.insertOne = async(teachersData)=>{
    const newTeacher = new Teachers(teachersData);
    return await newTeacher.save();
};

teachersDAOs.updateOne =async(teacher_id, updateData)=>{
    const updateTeacher = await Teachers.findOneAndUpdate({
        teacher_id: teacher_id},
    updateData);
    return updateTeacher;
};

teachersDAOs.deleteOne = async(teacher_id)=>{
    const deletedTeacher = await Teachers.findOneAndDelete({teacher_id:teacher_id});
    return deletedTeacher;
};

export default teachersDAOs;