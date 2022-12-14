const createError = require('http-errors');
const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');

const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const profileRouter = require('./routes/profile');
const entrarRouter = require('./routes/entrar');
const tramposRouter = require('./routes/trampos');
const editProfileRouter = require('./routes/editProfile');
const profileContratanteRouter = require('./routes/profileContratante');
const addTrampoRouter = require('./routes/addTrampo');
const pagamentoRouter = require('./routes/pagamento');
const profilePublicRouter = require('./routes/profilePublic');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/profile', profileRouter); 
app.use('/entrar', entrarRouter); 
app.use('/trampos', tramposRouter); 
app.use('/editProfile', editProfileRouter); 
app.use('/profileContratante', profileContratanteRouter); 
app.use('/addTrampo', addTrampoRouter); 
app.use('/pagamento', pagamentoRouter); 
app.use('/profilePublic', profilePublicRouter); 

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
