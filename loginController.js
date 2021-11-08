const User = require('./models')
const Collection = require('./Collection_model')
const UserSchema = require('./user_model')

exports.verifyUser = async function (req, res) {
    const response = await User.findOne({Username : req.body.username})
    // console.log(response)
    if(response) {
        if(req.body.password === response.Password) {
            res.send(response._id)
        } else {
            res.send('invalid password')
        }
    } else {
        res.send("invalid username")
    }
    res.end
}

exports.getCompleteCollectionData = async function(req,res){
    const stat = {active : false}
    const response = await Collection.find(stat)
    // console.log('In controller complete ',response)
    if(response){
        res.send(response)
    }else{
        console.log('could not find completed request')
    }
}
exports.getActiveCollectionData = async function(req,res){
    const stat = {active : true}
    const response = await Collection.find(stat)
    // console.log("In controller active", response)
    if(response){
        res.send(response)
    }
    else{
        console.log("Could not find active request")
    }
}
// exports.getData = async function(req, res){
//     // const stat = {req.body.}
//     // console.log(req.body.userID)
//     const response = await UserSchema.findById(req.body.userID)
//     if(response){
//         res.send(response)
//     }else{
//         console.log('could not find id of the user')
//     }
// }

exports.getData = async function(req, res){
    // console.log(req.body.id)
    const response = await UserSchema.findOne({collection_requests : req.body.id}, (err,UserInfo) => {

        if (err){
            console.log(err)
        }}).clone()
    // console.log(response)
    if(response){
        res.send(response)
    }else{
        console.log('could not find id of the user')
    }
    res.end
}

exports.setApproveRequest = async function(req, res){
    const response = await Collection.updateOne({_id : req.body.id}, {active : false, status : "Approved"}, (err) => {
        if(err){
            console.log(err)
        }
    }).clone()
    if(response){
        res.send(response)
    }
    res.end
}
exports.setRejectRequest = async function(req,res){
    // console.log(req.body.requestID)
    const response = await Collection.updateOne({_id : req.body.requestID}, {active : false, status : "Rejected"}, (err)=> {
        if(err){
            console.log(err)
        }
    }).clone()
    if(response){
        res.send(response)
    }
    res.end
}

exports.getCollectionRequest = async function(req,res){
    // console.log('in login controller', req.body.requestID)
    const response = await Collection.findById(req.body.requestID).clone()
    if(response){
        console.log('in login controller', response)
        res.send(response)
    }
    else{
        console.log('user request id not found in collection schema')
    }
    res.end
}



// exports.setUser = async function(req, res){
//     const username = 'Username 1'
//     const passwordHash = 'somehash'
//     const age = 25
//     const gender = 'M'
//     const contact = 1234567890
//     const name = 'name_1'
//     const address = 'add_1'

//     const user = new UserSchema({
//         username,
//         passwordHash,
//         age,
//         gender,
//         contact,
//         name,
//         address

//     })

//     await user.save((err,result)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log('Saved')
//         }
//     })

// }


// exports.setCollectionData = async function(req,res){
    
//     const medicineName = "med1"
//     const quantity = 5
//     const weight = 50
//     const companyName = "com1"
//     // const userID = "id1"
//     const active = true
//     const status = ""
//     const date = "1-1-2021"
//     const request = [{medicineName, quantity, weight, companyName}

//     ]
//     console.log(request)
//     const collection = new Collection({
//         request,
//         active,
//         status,
//         date
//     })
//     await collection.save((err, result) => {
//         if(err){
//             console.log(err)
//         }else{
//             console.log(result)
//         }
//     })
// }

// exports.getActiveCollectionData = async function(req,res){
    //     const stat = {active : true}
    
//     // const response = await Collection.findOne({medicinename : "med1"},function (err, result){
//     //     if(err){
//     //         console.log(err)
//     //     }else{
//     //         console.log(result)
//     //     }
//     // })
//     const response = await Collection.find(stat)
//     // const response = await Collection.find(stat, (err,result) => {
//     //     if(err){
//     //         console.log(err)
//     //     }
//     //     else{
//     //         console.log(result)
//     //     }
//     // })
//     console.log("In controller ", response)
//     if(response){
//         res.send(response)
//     }
//     else{
//         console.log("Could not find active request")
//     }
//     // res.end
// }
