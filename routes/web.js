const homepageController = require('../app/http/controllers/homepage');
const developerController = require('../app/http/controllers/developers');
const aboutController = require('../app/http/controllers/about');
const gpController = require('../app/http/controllers/gpRoutes');


const studyMaterial = require('../app/http/controllers/studyMaterial')



const init = app => {
    
    app.get('/', homepageController().index)
    app.get('/study_material', homepageController().studyMaterial)
    app.get('/community', homepageController().communtiy)
    app.get('/doubts', homepageController().doubts)
    app.get('/contest', homepageController().contest)

    app.get('/developers', developerController().index);
    app.get('/about', aboutController().index)


    app.get('/studyMaterial/nptel', studyMaterial().nptel)
    app.get('/studyMaterial/thirdSem', studyMaterial().thirdSem)
    app.get('/studyMaterial/entrepreneurship', studyMaterial().entre)
    app.get('/studyMaterial/3rdSem-aiml', studyMaterial().aiml)
    app.get('/studyMaterial/1stSem', studyMaterial().firstSem)
    app.get('/studyMaterial/gp', studyMaterial().gp)

    app.get('/studyMaterial/gp/jobhunter', gpController().jobHunter)
}


module.exports = init;