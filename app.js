const createError = require('http-errors');
const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const logMiddleware = require('./src/middlewares/log');
const session = require('express-session');




const mainRouter = require('./src/routes/main');
const profileRouter = require('./src/routes/profile');
const entrarRouter = require('./src/routes/entrar');
const tramposRouter = require('./src/routes/trampos');
const profilePublicRouter = require('./src/routes/profilePublic');
const profileContratanteRouter = require('./src/routes/profileContratante');
const pagamentoRouter = require('./src/routes/pagamento');
const chatRouter = require('./src/routes/chat');


const testeRouter = require('./src/routes/testeRouter');


const app = express();

              /*   CONFIG DO CHAT */

const server = require('http').createServer(app)
const io = require('socket.io')(server);

let messages = [];

io.on('connection', socket => {
console.log(`Socket Conectado: ${socket.id}`)

socket.emit('previousMessages', messages);


socket.on('sendMessage', data =>{
  messages.push(data)
  socket.broadcast.emit('receivedMessage', data);
})
});



// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(logMiddleware);
app.use(session({secret: "TramPro Inc",
                  resave:false,
                  saveUninitialized:false})) // Indicação de uso de session a nivel de aplicação
app.use(function(req, res, next) {
  res.locals.userLogged = req.session.userLogged;
  next();
});




app.use('/', mainRouter);
app.use('/profile', profileRouter); 
app.use('/profileContratante', profileContratanteRouter); 
app.use('/profilePublic', profilePublicRouter); 

app.use('/entrar', entrarRouter); 
app.use('/servico', tramposRouter); 
app.use('/pagamento', pagamentoRouter); 
app.use('/chat', chatRouter); 

app.use('/teste', testeRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(3030, ()=> console.log('Servidor rodando na porta 3030'))
module.exports = app;
