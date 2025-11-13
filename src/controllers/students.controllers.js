import studentDaos from "../daos/students.daos.js";
const studentControllers = {};
studentControllers.getAll = (req,res) => {
    //aquí le vamos a pedir los datos al DAO
    studentDaos.getAll()
        .then((students) => {
            
           res.render("index.ejs", {students});

        })
        .catch((err) => {
            res.status(500).json({
                message:"An error has occurred",
                error:err
            })
        });
    //aqui vamos a responder al cliente{
   
};


studentControllers.getOne = async(req,res)=>{
    studentDaos.getOne(req.params.student_id)
    .then((student) => {
        if(student){
            res.render("edit.ejs" , {student});
        }else{
            res.status(404).json({message:"Student not found"})
        }
    })
    .catch((error) => {
        res.status(500).json({message: error.message});
    });
};

studentControllers.insertOne=async(req, res) => {
    studentDaos.insertOne (req.body)
    .then((newStudent)=>{
        res.redirect("/api/students/getAll");
    })
    .catch((error)=>{
        res.status(500).json({message:error.message});
    });
};

studentControllers.updateOne=(req,res)=>{
    studentDaos.updateOne(req.params.student_id,req.body)
.then((updatedStudent)=>{
    if (updatedStudent) {
        res.redirect("/api/students/getAll");
    }
})
.catch((error) => {
    res.status(500).json({ message: error.message });
        });
};

studentControllers.deleteOne = (req, res) => {
studentDaos.deleteOne (req.params.student_id)
.then((deletedStudent) => {
        if (deletedStudent) {
             res.redirect("/api/students/getAll");
        } else {
            res.status(404).json({ message: "Student not found" });
        }
})
.catch((error) => {
    res.status (500).json({ message: error.message });
    });
};

export default studentControllers;
