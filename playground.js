const {MongoClient,ObjectID} = require('mongodb');

const url = "mongodb://localhost:27017"

const dbName = "test"


//////////////////////////////////////////////////////////insert

// MongoClient.connect(url, function(err, client) {
    
//     //checking connection
//     if(err){
//         return console.log("Unable To Connect Mongo DataBase",err);
//     }
//     else{
//         console.log("Connected succefull !");
//     }

//     const db = client.db(dbName);

//     db.collection('Todos').insert({
//         Name : "Hooman",
//         Age : 21
//     },(err,result)=>{
//         if(err){
//             return console.log("Unable to insert : ",err);
//         }
//         else{
//             console.log("succefull insert : ",result.ops[0]._id.getTimestamp());
            
//         }
//     })

//     client.close();
//     });


////////////////////////////////////////////////fetch

// MongoClient.connect(url,(err,client)=>{
//     //checking connection
//     if(err){
//         return console.log("Unable To Connect Mongo DataBase",err);
//     }
//     else{
//         console.log("Connected succefull !");
//     }

//     const db=client.db(dbName);

//     db.collection('Todos').find().toArray().then((val)=>{
//         console.log(val);
        
//     },(er)=>{
//         console.log(er);
        
//     })

//     client.close();

// })


/////////////////////////////////////////////////////delete

// MongoClient.connect(url,(err,client)=>{

//     if(err){
//         return console.log("Unable To Connect Mongo DataBase",err);
//     }
//     else{
//         console.log("Connected succefull !");
//     }

//     const db=client.db(dbName);

//     db.collection('Todos').deleteOne({Name : "Hamid"}).then((res)=>{
//         console.log(res);
//     })

//     client.close();

// })


///////////////////////////////////////////////////////// update

MongoClient.connect(url,(err,client)=>{
    if(err){
        return console.log("Unable to connect Mongo DataBase",err);
    }
    else{
        console.log("Connected succefull !");
    }

    const db=client.db(dbName);

    db.collection("Todos").findOneAndUpdate({Name:"Hooman"},{
        $set:{Age:30}
    }).then((res)=>{
        console.log("response :    ",res);
        
    })

    client.close();
})