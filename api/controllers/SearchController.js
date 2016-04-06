/**
 * SearchController
 *
 * @description :: Server-side logic for managing searches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'search' : function(req, res){
        $scope.search=searchService.search;
        return res.view('/user/searchResult');
    },
    'book' : function(req, res){
        $scope.search=searchService.search;
        return res.view('/user/book');
    }
};

