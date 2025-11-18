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

teacherControllers.getOne

export default teacherControllers;
