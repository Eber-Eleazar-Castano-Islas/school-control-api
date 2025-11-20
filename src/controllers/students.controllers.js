import studentDaos from "../DAOs/students.daos.js";
const studentControllers = {};
studentControllers.getAll = (req,res) => {
    //aquí le vamos a pedir los datos al DAO
    studentDaos.getAll()
        .then((students) => {
            
           //res.render("index.ejs", {students});
           res.json({data:students});

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
            res.json({data:students});
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
        res.json({data:newStudent});
    })
    .catch((error)=>{
        res.status(500).json({message:error.message});
    });
};

studentControllers.updateOne=(req,res)=>{
    studentDaos.updateOne(req.params.student_id,req.body)
.then((updatedStudent)=>{
    if (updatedStudent) {
        res.json({data:updatedStudent});
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
             res.json({data:deletedStudent});
        } else {
            res.status(404).json({ message: "Student not found" });
        }
})
.catch((error) => {
    res.status (500).json({ message: error.message });
    });
};

export default studentControllers;
