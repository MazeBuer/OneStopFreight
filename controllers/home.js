module.exports = {
    getIndex: (req, res) => {
      res.render("index.ejs");
    },
    getLanding: (req,res) => {
      res.render('landing.ejs')
    },
    getPort: (req,res) => {
      res.render('portCode.ejs')
    },
};
