express= require('express');


app.use('/users', usersRouter);
app.use('/api/exam',examrouter);

app.use('/api/paper',paperrouter);
app.use('/', indexRouter);

app.use('/univeradd',univrouter);

app.use('/test',examdisplayer);

app.use('/userss',usersRouter);


app.use('/cou_v1',courserouter);