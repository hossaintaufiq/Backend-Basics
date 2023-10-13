const express = require ('express');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 5000;



// middleware

app.use(cors());
app.use(express.json());//to convert front end data to backend


const users = [
    {id:1, name:'sabana', email: 'sabana@gmail.com'},
    {id:1, name:'sabnur', email: 'sabnur@gmail.com'},
    {id:1, name:'alia', email: 'alia@gmail.com'},
    {id:1, name:'vutto', email: 'vutto@gmail.com'},

]


app.get('/', (req, res) => {
    res.send("users management server is running")
})

app.get('/users', (req,res)=>{
    res.send(users)
})

app.post('/users', (req,res)=>{
    console.log('post api hiting ')
    // console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length+1;
    users.push(newUser);
    res.send(newUser);

})


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})