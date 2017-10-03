module.exports = (req, res) => {
  res.status(404)
  res.send('URL cannot found' + JSON.stringify({ url: req.protocol + '://' + req.get('host') + req.originalUrl }))
}
