const Article = require('../models/Article');
// List all Articles
exports.listAllArticles =(req, res) => {
    Article.find({}, (err, article) => {
        if (err) {
            res.status(500).send(err);
        } 
            res.status(200).json(article);
           });
};

exports.listTagArticles = (req, res) => {
    // Article.$where('this.firstname === this.lastname')
    Article.find({tag:req.params.tag}, (err, article) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(article);
    });
  };

// Create new articles
exports.createNewArticle = (req, res) => {
    let newArticle = new Article(req.body);
    newArticle.save((err, article) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(article);
    });
};

// Read Articles
exports.readArticle = (req, res) => {
    Article.findById(req.params.articleid, (err, article) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(article);
    });
};

// update articles
exports.updateArticle = (req,res) => {
    Article.findOneAndUpdate({
        _id: req.params.articleid
    },
    req.body,
    {new: true},
    (err, article) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(article);
    }
    );
};

// delete articles
exports.deleteArticle = (req,res) => {
    Article.remove({
        _id: req.params.articleid
    }, (err, article) => {
        if (err) {
            res.status(404).send(err);
        }
        res.status(200).json({ message: 'Article successfully deleted'});
    });
};