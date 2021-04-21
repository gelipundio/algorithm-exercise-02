module.exports.sumarize = function ( array ) {
	if (  array === "null" ) {
		return 0
	} else if {
		var s = 0
		for ( var num of array ) {
			if ( typeof num == "array" ) {
				num = this.sumarize( num )
			} else if ( typeof num == "string" ) {
				num = 0
			}
			s = s + num
		}
		return s
	}
}
