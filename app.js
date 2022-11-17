const mongoClient = require('mongodb').MongoClient;

// const mongoClient = mongo.MongoClient;
// const ObjectID = mongo.ObjectID;

const url = 'mongodb://127.0.0.1:27017';
const dbname = 'mongo-project';

mongoClient.connect(url, {}, (error,client) =>{
    if (error){
        console.log('Nie mozna polaczyc z baza');
    }

    const db = client.db(dbname);

    //users dodawanie
    // db.collection('users').insertOne({
    //     name: 'John',
    //     age: 23
    // }, (error,result)=>{
    //     if(error)
    //         console.log('nie dodano',error);

    //     console.log(result);
    // })

    // db.collection('users').insertMany([
    //     {name: 'Peter',
    //     age: 25},
    //     {name: 'George',
    //     age: 26},
    //     {name: 'Gregory',
    //     age: 27}
    // ], (error,result)=>{
    //     if(error)
    //         console.log('nie dodano',error);

    //     console.log(result);
    // })


    // wyszukiwanie
    // db.collection('users').find({
    //     name: 'John'
    // }).toArray((error,results) =>{
    //     console.log(results);
    // })

    //szukajka bez parametrow czyli wszystkich pobiera
    // db.collection('users').find({}).toArray((error,results) =>{
    //     console.log(results);
    // })

    //liczba uzytkownikow
    // db.collection('users').find({}).count((error,results) =>{
    //     console.log(results);
    // })

    //wyszukanie z parametrem
    // db.collection('users').find({
    //     age: {$gt: 26}
    // }).toArray((error,results) =>{
    //     console.log(results);
    // })

    //aktualizacja uzytkownika
    // db.collection('users').updateOne({age:27},{
    //     $set: {
    //         age: 42
    //     }
    // })
    // db.collection('users').find({
    //     age: {$gt: 30}
    // }).toArray((error,results) =>{
    //     console.log(results);
    // })

    //usuwanie
    // db.collection('users').deleteOne({
    //     age:23
    // }, (error,result)=>{
    //     if(error)
    //         console.log('nie usunieto',error);
    
    //     console.log(result);
    // })


    db.collection('archived-comments').insertOne({
        idComment: 32432423
    }, (error,result)=>{
        if(error)
            console.log('nie dodano',error);

        console.log(result);
    })
    db.collection('archived-posts').insertOne({
        idPost: 32423432
    }, (error,result)=>{
        if(error)
            console.log('nie dodano',error);

        console.log(result);
    })
    db.collection('comments').insertOne({
        name: 'John',
        autorId: 3242342,
        content: 'It\'s good idea',
        archiveStatus: 'niezarchiwizowany'
        
    }, (error,result)=>{
        if(error)
            console.log('nie dodano',error);

        console.log(result);
    })
    db.collection('files').insertOne({
        name: 'pliiik.txt',
        path: '/files/pliik.txt',
        addDate: 2022-11-05
    }, (error,result)=>{
        if(error)
            console.log('nie dodano',error);

        console.log(result);
    })
    db.collection('permissions').insertOne({
        name: 'addPost'
    }, (error,result)=>{
        if(error)
            console.log('nie dodano',error);

        console.log(result);
    })
    db.collection('posts').insertOne({
        autorName: 'John',
        autorId: 32432423,
        postContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
        file: null,
        status: 'open',
        archiveStatus: 'niezarchiwizowany'

    }, (error,result)=>{
        if(error)
            console.log('nie dodano',error);

        console.log(result);
    })
    db.collection('ranks').insertOne({
        rank: 'user',
        permissions: ['addPost', 'deleteMyPost', 'addComment'] 
    }, (error,result)=>{
        if(error)
            console.log('nie dodano',error);

        console.log(result);
    })
    db.collection('reported-posts').insertOne({
        idPost: 23423442,
        submitterId: 3243242342,
        status: 'zgłoszone'
    }, (error,result)=>{
        if(error)
            console.log('nie dodano',error);

        console.log(result);
    })
    db.collection('users').insertOne({
        name: 'John',
        lastName: 'Johanson',
        mail:  'jjohanson@student.polsl.p',
        rank:  'user',
        password: '1234',
        verificationCode: 543453,
        kierunek: 'informatyka',
        semestr: 3
    }, (error,result)=>{
        if(error)
            console.log('nie dodano',error);

        console.log(result);
    })
    db.collection('users-reports').insertOne({
        name: 'John',
        lastName: 'Johanson',
        mail:  'jjohanson@student.polsl.p',
        submitterId: 4234234
    }, (error,result)=>{
        if(error)
            console.log('nie dodano',error);

        console.log(result);
    })


    // const id = new ObjectID();
    // console.log(id);

    console.log('udalo sie polaczyc');
});