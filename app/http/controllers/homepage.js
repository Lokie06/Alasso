const skillCourse = require('../../jsonData/communities')
const doubt = require('../../jsonData/doubts')
const studyMaterial = require('../../jsonData/studymaterials')
const axios = require('axios')

function homeController () {
  return {
    index (req, res) {
      return res.render('home', { title: 'Home - Alasso' })
    },

    studyMaterial (req, res) {
      return res.render('studyMaterial', {
        studyMaterial,
        title: 'Study Material - Alasso'
      })
    },

    communtiy (req, res) {
      return res.render('community', {
        skillCourse,
        title: 'Community - Alasso'
      })
    },

    async doubts (req, res) {
      return res.render('doubts', { doubt, title: 'Doubts - Alasso' })
    },

    contest (req, res) {
      axios.get('https://kontests.net/api/v1/all').then(response => {
        const contest = response.data;
        res.render('contests', { contest, title: 'Contests - Alasso' })
      })

    }
  }
}

module.exports = homeController
