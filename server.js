/**
 * Created by shawn on 2014/7/21 19:20.
 */
var express = require('express'),
	app = express();

app.use(express.static(__dirname+'/public'));


app.listen(3000);