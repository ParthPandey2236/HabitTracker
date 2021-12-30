const CollectionReference = require('../model/mongoose');
const mongoose = require('mongoose');

module.exports.getSchedule = async function(req,res){
    // console.log(req);
    try{
        console.log(req.body.date);
        let date = new Date(req.body.date).toLocaleDateString();
        console.log('print something ',date);
        let habits = await CollectionReference.find({date : date});
        
        return res.status(200).json({
            message : "Got it",
            data : {
                habits : habits
            },
        });
    }
    catch(err){
        return res.status(400).json({
            message: "Got iller",
        });
    }
}

module.exports.scheduleHomePage= function(req,res){
    return res.render('goto.ejs');
}

module.exports.updateStatus = async function(req,res){
    try{
        let arr = req.body;
        console.log('Update Array',req.body);
        for(let i in arr){
            console.log(i);
            
                let habit = await CollectionReference.findByIdAndUpdate(i, { status: arr[i] });
            
        }
        return res.status(200).json({
            message : "Data added successfully",
        });
    }
    catch(e){
        console.log("Error while updating status",e);
        return res.status(400).json({
            message: "Error while updating status",
        });

    }
}