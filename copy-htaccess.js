const fs = require('fs-extra');

fs.copy('public/.htaccess', 'dist/.htaccess', err => {
  if (err) return console.error(err);
  console.log('Assets copied successfully!');
});