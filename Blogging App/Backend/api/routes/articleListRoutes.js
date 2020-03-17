
module.exports = function(app){
    // import controller into route function
    var articleList = require('../controllers/articleListController');
    // create route for get and post requests on articles
    app
    .route('/articles')
    .get(articleList.listAllArticles)
    .post(articleList.createNewArticle);

    //route for get, put, delete
    app
    .route('/articles/:articleid')
    .get(articleList.readArticle)
    .put(articleList.updateArticle)
    .delete(articleList.deleteArticle);

    app
    .route("/articles/by/:tag")
    .get(articleList.listTagArticles)
}