function studyMaterial () {
  return {
    nptel (req, res) {
      res.render('studyMaterial/nptel/nptel', {
        title: 'NPTEL',
        layout: './layouts/studyMaterialLayout'
      })
    },

    thirdSem (req, res) {
      res.render('studyMaterial/thirdSem/thirdSem', {
        title: '3rd Sem',
        layout: './layouts/studyMaterialLayout'
      })
    },

    entre (req, res) {
      res.render('studyMaterial/entrepen/entrepen', {
        title: 'Entrepreneurship',
        layout: './layouts/studyMaterialLayout'
      })
    },

    aiml (req, res) {
      res.render('studyMaterial/AIML/aiml', {
        title: 'AIML',
        layout: './layouts/studyMaterialLayout'
      })
    },

    firstSem (req, res) {
      res.render('studyMaterial/firstSem/firstSem', {
        title: 'First Sem',
        layout: './layouts/studyMaterialLayout'
      })
    },
    gp (req, res) {
      res.render('studyMaterial/gp/gpMain', {
        title: 'GP',
        layout: './layouts/studyMaterialLayout'
      })
    }
  }
}

module.exports = studyMaterial
