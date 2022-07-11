const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:{
      type: String, 
        minlength : 4,
         maxlength: 50,
          required: true
    },
    lastName:{
        type: String,
        minlength: 3,
        maxlength: 60,
        required: true
    },
    role:{
        type: String,
        enum: ['admin','writer','guest']
    },
    createdAt: {type: Date, default: new Date},
    numberOfArticles: {type:Number, default: 0},
    nickname: String
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = (id)=>{
    return User.findById(id)
}
module.exports.addUser = (user)=>{
    return User.create(user)
}
module.exports.updateUserById = (user,id)=>{
    return User.findByIdAndUpdate(id, user, {new:true})
}
module.exports.deleteUserById = (id)=>{
    return User.findByIdAndDelete(id)
}

