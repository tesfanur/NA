var mongoose = require('mongoose');
var paginator = require('mongoose-paginate');
/*Ticket:
======================
ticketid:Number
ticketType:String
price:Number
status: Enum//=[unused || used]
passengerId: Number
sourceStationId: Number
destinationStationId: Number
dateTicketBought:Date
dateTicketReturned: Date*/

var Schema = mongoose.Schema;

var TicketSchema = new Schema({
    ticketid    : {type: Number, required: true,unique:true},
    ticketType : {type: String, required: true},
    price : {type: Number, required: true},
    status: {type: String},//refer how to use enumeration types using mongoose
    passengerId : {type: String},
    sourceStationId    : {type: String, required: true,unique:true},
    destinationStationId : {type: Date, required: true},
    dateTicketBought : {type: Date, required: true},
    dateTicketReturned: {type: Date},
    //are the following fields required or already included by the above fields
    createdAt :{type:Date, default:Date.now},
    modifiedAt :{type:Date, default:Date.now}

});

//Add mongoose paginate
TicketSchema.plugin(paginator);

//export user model
module.exports = mongoose.model('Ticket', TicketSchema);
