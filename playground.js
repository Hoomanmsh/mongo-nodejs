const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017"

const dbName = "test"

// Connect using MongoClient
MongoClient.connect(url, function(err, client) {
    
    //checking connection
    if(err){
        return console.log("Unable To Connect Mongo DataBase",err);
    }
    else{
        console.log("Connected succefull !");
    }

    const db = client.db(dbName);

    db.collection('Todos').insert({
        Name : "Hooman",
        Age : 21
    },(err,result)=>{
        if(err){
            return console.log("Unable to insert : ",err);
        }
        else{
            console.log("succefull insert : ",JSON.stringify(result.ops));
            
        }
    })

    client.close();
    });
