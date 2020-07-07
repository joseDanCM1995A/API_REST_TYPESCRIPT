// confifuaración de la aplicación

import express from "express"; // instalar @types/express
import morgan from "morgan";
import path from 'path';
import indexRoutes from './routes/index.routes'

// initializations
const app = express(); 

app.set('port', process.env.PORT||3000); // setting port

// middlewares
app.use(morgan('dev')); // watching petitions http
app.use(express.json()); // for communication

// routes
app.use('/api', indexRoutes);

// folder for public files and storage files
app.use('/uploads', express.static(path.resolve('uploads')));


export default app;