const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.lrfif.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log('Connected to MongoDB');
    
    for (let i = 0; i < 10; i++) {
        let account = []
        const username = `${faker.name.firstName()} ${faker.name.lastName()}`;
        const email = faker.internet.email()
        const avatar = faker.internet.avatar()
        const user_password = faker.internet.password();
        const user_address =   faker.address.city();
        const saltRounds = 10
    
        bcrypt.genSalt(saltRounds, function (saltError, salt){
            if(saltError){
                throw saltError
            }else{
                bcrypt.hash(user_password, salt, function(hashError, hash){
                    if (hashError){
                        throw hashError
                    }else {
                        //console.log(hash)
                        const hash_password = hash
                        
                        //console.log(new_password)
                        account.push({ username, avatar, user_address,email, hash_password});
                        client.db("fake_account").collection("sample_user").insertMany(account).then(result => {
                            console.log(result);
                        
                        });
                    }
                })
            }
    
        })
    }
    });
