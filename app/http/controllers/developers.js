const developerData = require('../../jsonData/devdatas')


function developersPage(){

    return{
        async index(req, res){
            // const developerData = await devData.find();
            return res.render('developers',  {developerData, title: 'Developers - Alasso'});
        }
    }

}

module.exports = developersPage