const CollectionReference = require('../model/mongoose');

module.exports.createHabit = async function(req,res){
    try{
        let date = new Date(req.body.date).toLocaleDateString();
        let habit = CollectionReference.create({habit : req.body.habit, date : date});
        // res.flash(success ,"Habit Created");
        console.log(habit);
        return res.status(200).json({
            message: "Data added successfully",
        });
    }
    catch(err){
        console.log('error in creating habit',err);
        // res.flash(success, "Habit Created");
        return res.status(400).json({
            message: "Error while updating status",
        });
    }
}


module.exports.getCreateHabitPage = function (req, res) {
    return res.render('createHabit.ejs');
}