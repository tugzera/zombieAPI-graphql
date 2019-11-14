const moment = require("moment");

const dateNow = () => {
  var format = "YYYY-MM-DD HH:mm:ss+00";
    const date = new Date(
      moment(Date.now())
        .locale("pt-br")
        .format(format)
    );
  return date
};

module.exports = { dateNow };
