import {Schema, model} from "mongoose";
// const {Schema} = mongoose
const userSchemas = new Schema({
	name:{
		type:String,
		require:true,
		minLength:2,
		maxLength:20
	},
	surname:{
		type:String,
		require:true,
		minLength:4,
		maxLength:50
	},
	email:{
		type:String,
		require:true,
	},
	password:{
		type:String,
		require:true,
	}
})
const userModel= model('user',userSchemas)
export default userModel

