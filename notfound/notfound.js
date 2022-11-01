const notfound = (req, res) => {
  res.status(400).send("ROUTE NOT FOUND");
};

module.exports = notfound;
