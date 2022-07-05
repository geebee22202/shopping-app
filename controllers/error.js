exports.get404 = (req, res, next) => {
  //the way you pass in data doesn't change with diff templates, will still be pageTitle: xyz
  res.status(404).render("404", { pageTitle: "Page not found" });
};