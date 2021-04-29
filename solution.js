function sumarize(array) {
//CASO: Nulo 
if ( array === null ) {
return 0
} else {
let s = 0
//CASO: Elemento es, a su vez, un Arreglo
for (var num of array) {
if (typeof num == "string") {
num = parseInt(num)
}
if (typeof num == "boolean"){
num = 0
}
let isArray = Array.isArray(num)
if (isArray){
num = sumarize(num)
}
if(typeof num != "number"){
	num = 0
}
//const obj = {} 
//if(num = obj){
//	num = 0
//}
s = s + num
}
return s
}
}

module.exports = {
sumarize
}
