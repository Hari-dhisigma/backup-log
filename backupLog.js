const Joi = require("joi");
const token = require("../Shared/config/tokenValidation");
const handler = require("../Shared/errorHandler");
const fs = require("fs");
var moment = require("moment");
/**
 *
 * @param {token,orgid,data} writeBackupLog | writng backup log to a file
 * @returns done file
 */
module.exports.backupLogHandler = async (event) => {
  await token.tokenValidation({
    token: event.headers.token,
    orgid: event.body.orgid,
  });
  var path = process.env.Path;
  console.log(path);

  var data = event.body.data;
  await validateSchema(event.body);
  var jsonContent = JSON.stringify(data);
  fs.writeFile(
    event.body.data.Persn + "_" + moment().format("DDMMYYYYHHMMSS") + ".txt",
    jsonContent,
    function (err) {
      if (err) throw err;
      else {
        fs.writeFile("done.txt", "", function (error) {
          if (error) throw err;
        });
      }
    }
  );

  return {
    statusCode: 200,
    body: jsonContent,
    isBase64Encoded: false,
  };

  async function validateSchema(dat) {
    const schema = Joi.object({
      data: Joi.required(),
      orgid: Joi.required(),
    });
    try {
      await schema.validateAsync(dat);
      return true;
    } catch (err) {
      console.log("validationerror");
      throw handler.handleError(1003, err.message);
    }
  }
};
