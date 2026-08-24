import 'dotenv/config';

import app from './app.js';
import connectDb from './db/db.js';

connectDb();

app.listen(3000,()=>{
    console.log("Server is connected at 3000 Port");
})