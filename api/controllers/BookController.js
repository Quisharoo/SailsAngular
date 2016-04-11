/**
 * BookController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create : function(req, res, next){
        Book.create( req.params.all(), function bookCreated (err, book) {

			//if there's an error
			if (err) {
				console.log(err);
				req.session.flash = {
					err: err
				};

				return res.redirect('/user/show');
			}
        
        }
    )},
    
    show : function(req, res, next){
        
    },
    
    destroy : function(req, res, next){
        
    }
};

