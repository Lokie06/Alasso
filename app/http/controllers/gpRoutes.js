function gpRoutes () {
  return {
    jobHunter (req, res) {
      res.render('studyMaterial/gp/job-hunter', {
        title: 'Job HUnter',
        layout: './layouts/studyMaterialLayout'
      })
    }
  }
}

module.exports = gpRoutes
