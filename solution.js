module.exports.sumarize = function ( array ) {
	        if ( array === null ) {

			                return 0
			        } else {

					                var s = 0
					                for ( var num of array ) {
								                        s = s + num
								                }

					                return s
					        }
}
