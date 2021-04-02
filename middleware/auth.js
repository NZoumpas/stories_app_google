module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      //αν η απαντηση(req) ειναι αυθεντικη τοτε γυρνα next()
      return next();
    } else {
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect("/dashboard");
    } else {
      return next();
    }
  },
};
