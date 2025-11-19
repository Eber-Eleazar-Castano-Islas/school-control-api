import teachersDAOs from "../DAOs/teachers.daos.js";

const teacherControllers ={};
teacherControllers.getAll =(req,res) =>{
    teachersDAOs.getAll()
    .then((teachers)=>{
        res.render("index.teachers.ejs",{teachers});
         
    })
    .catch((err)=>{
        res.status(500).json({
            message:"An error has occurred",
            error:err
                        
        })

    });
};

teacherControllers.getOne = async(req,res)=>{
    teachersDAOs.getOne(req.params.teacher_id)
    .then((teacher) => {
        if(teacher){
            res.render("edit.teacher.ejs" , {teacher});
        }else{
            res.status(404).json({message:"Teacher not found"})
        }
    })
    .catch((error) => {
        res.status(500).json({message: error.message});
    });
};

teacherControllers.insertOne=async(req, res) => {
    teachersDAOs.insertOne (req.body)
    .then((newTeacher)=>{
        res.redirect("/api/teachers/getAll");
    })
    .catch((error)=>{
        res.status(500).json({message:error.message});
    });
};

teacherControllers.updateOne=(req,res)=>{
    teachersDAOs.updateOne(req.params.teacher_id,req.body)
.then((updatedTeacher)=>{
    if (updatedTeacher) {
        res.redirect("/api/teachers/getAll");
    }
})
.catch((error) => {
    res.status(500).json({ message: error.message });
        });
};

teacherControllers.deleteOne = (req, res) => {
teachersDAOs.deleteOne (req.params.teacher_id)
.then((deletedTeacher) => {
        if (deletedTeacher) {
             res.redirect("/api/teachers/getAll");
        } else {
            res.status(404).json({ message: "Student not found" });
        }
})
.catch((error) => {
    res.status (500).json({ message: error.message });
    });
};

export default teacherControllers;
