const createError = require('http-errors');
const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const logMiddleware = require('./src/middlewares/log');




const mainRouter = require('./src/routes/main');;
const profileRouter = require('./src/routes/profile');
const entrarRouter = require('./src/routes/entrar');
const tramposRouter = require('./src/routes/trampos');
const profileContratanteRouter = require('./src/routes/profileContratante');
const pagamentoRouter = require('./src/routes/pagamento');
const profilePublicRouter = require('./src/routes/profilePublic');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', mainRouter);
app.use('/profile', profileRouter); 
app.post('/foto', profileRouter); 
app.post('/fotoService', profileRouter); 
app.post('/fotoCont', profileContratanteRouter); 
app.use('/profileContratante', profileContratanteRouter); 
app.use('/profilePublic', profilePublicRouter); 
app.use('/entrar', entrarRouter); 
app.use('/servico', tramposRouter); 
app.use('/pagamento', pagamentoRouter); 


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

app.listen(3030, ()=> console.log('Servidor rodando na porta 3030'))
module.exports = app;
