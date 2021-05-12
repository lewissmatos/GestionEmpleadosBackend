const express = require('express')
const cors = require('cors')

const empleadoRoute = require('./routes/empleado.routes')

const {dbConnection} = require('./database/config.databse')
require('colors')


class Server {

    constructor(){
        this.app = express()

        this.database()

        //ROUTES
        this.empPath = '/api/v1/empleados'


        this.port = process.env.PORT;

        this.middlewares()

        this.routes()
    }
    
    async database(){
        await dbConnection()
    }

    listen(){
        this.app.listen(this.port, () => console.log(`Server at ${this.port}`.bgBlue));
    }

    routes(){
        this.app.get('/', (req, res) => res.send('API gestion emepleados'))

        this.app.use(this.empPath, empleadoRoute)
    }

    middlewares(){
        this.app.use(   cors()  );

        //Lecturay prseo del body
        this.app.use(  express.json()  );
    }
}

module.exports = Server
