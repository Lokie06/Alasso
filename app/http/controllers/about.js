function aboutPage(){
    return {
        index(req, res){
            return res.render('about',  {title: 'About'});
        }
    }
}

module.exports = aboutPage;