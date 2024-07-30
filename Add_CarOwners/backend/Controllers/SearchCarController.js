

async function searchcarController(req,res){
    try{
        

    }catch(err){
        res.status(500).json({
            success:false,
            error:true,
            message:err.message
        })
    }
}