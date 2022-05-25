const express = require("express");
const router = express.Router();
const lambdaService = require("./src/customerGetOp/getCustomerAll");
const lambdaService2 = require("./src/Bquerylist/getstatequerylist");
const lambdaService3 = require("./src/Bquerylist/FetchReasonQuery");
const lambdaService4 = require("./src/Bquerylist/GetCountryDetailsQry");
const lambdaService5 = require("./src/customer/putCustomerinsert");
const lambdaService6 = require("./src/customer/putCustomerupdate");
const lambdaService7 = require("./src/customer/putcustomeraddressinsert");
const lambdaService8 = require("./src/customer/putcustomeraddressupdate");
const lambdaService9 = require("./src/customer/GetCustLatng");
const lambdaService10 = require("./src/schedule/putschedulesinsert");
const lambdaService11 = require("./src/schedule/putschedulesupdate");
const lambdaService12 = require("./src/schedule/putschedulelinesinsert");
const lambdaService13 = require("./src/schedule/putschedulelinesupdate");
const lambdaService14 = require("./src/picklsthdr/putpicklistinsert");
const lambdaService15 = require("./src/picklsthdr/putpicklistupdate");
const lambdaService16 = require("./src/picklsthdr/putpicklistLineinsert");
const lambdaService17 = require("./src/picklsthdr/putpicklistLineupdate");
const lambdaService18 = require("./src/person/newpersoninsert");
const lambdaService19 = require("./src/person/newpersonupdate");
const lambdaService20 = require("./src/vehicle/newvehicleinsert");
const lambdaService21 = require("./src/vehicle/newvehicleupdate");
const lambdaService22 = require("./src/person/persnvehclrelinsert");
const lambdaService23 = require("./src/customer/putCustomerBulk");
const lambdaService24 = require("./src/person/newpersonvehiclecreate");
const lambdaService25 = require("./src/Bquerylist/CustmrAmountFetch");
const lambdaService26 = require("./src/Bquerylist/sample");
const lambdaService27 = require("./src/schedule/putschlnorddtlrelinsert");
const lambdaService28 = require("./src/Bquerylist/getcustomerclustercount");
const lambdaService29 = require("./src/Bquerylist/getS3OrionKeys");
const lambdaService30 = require("./src/Bquerylist/getpreviousschedules");
const lambdaService31 = require("./src/GetOPenOrders/getopenorders");
const countryfetch = require("./src/Countrydtls/countryFetch");
const reasonFetch = require("./src/ReasonFetch/fetchReason");
const States = require("./src/state/stateList");
const loginDtls = require("./src/LoginedPerson/loginedPrsnDtls");
const SchdlFetch = require("./src/SchdlWthInv/schdlFetch");
const moblogfetch = require("./src/MobileLog/getMobLog");
const mobLogInsert = require("./src/MobileLog/postMobLog");
const mobLogUpdate = require("./src/MobileLog/putMobLog");
const mobLogBulkInsrt = require("./src/MobileLog/bulkInsrtMobLog");
const backupLog = require("./src/backupLogWrite/backupLog");
const lambdaAlias = "dev";

// backup log
router.get("/backupLog", async (req, res) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/writeBackupLog";
    _REQUEST.body = req.body;
    const retData = await backupLog.backupLogHandler(_REQUEST);
    console.log("ret");
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

//  bulk insert moblog
router.post("/mobileLogBulkInsert", async (req, res) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/mobileLog";
    _REQUEST.body = req.body;
    const retData = await mobLogBulkInsrt.mobLogHandler(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

//  put moblog
router.put("/mobileLog", async (req, res) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/mobileLog";
    _REQUEST.body = req.body;
    const retData = await mobLogUpdate.mobLogHandler(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

//  post moblog
router.post("/mobileLog", async (req, res) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/insertMobLog";
    _REQUEST.body = req.body;
    const retData = await mobLogInsert.mobLogHandler(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

// get mobilelog
router.get("/mobileLog", async (req, res) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/getMobLog";
    _REQUEST.body = req.body;
    const retData = await moblogfetch.mobLogHandler(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

// Schedule wit Invoice
router.get("/ScheduleWithInvoice", async (req, res) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/schdlWthInv";
    _REQUEST.body = req.body;
    const retData = await SchdlFetch.SchdlInvHandler(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

// logined person details
router.get("/loginedPersonDetails", async (req, res) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/logPrsn";
    _REQUEST.body = req.body;
    const retData = await loginDtls.loginDtlsHandler(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

// statelist
router.get("/stateList", async (req, res) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/statelist";
    _REQUEST.body = req.body;
    const retData = await States.stateListHandler(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

// reasonfetch
router.get("/reason", async (req, res) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/reasonfetch";
    _REQUEST.body = req.body;
    const retData = await reasonFetch.reasonFetchHandler(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

// countryfetch
router.get("/countryFetch", async (req, res) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/getCountry";
    _REQUEST.body = req.body;
    const retData = await countryfetch.countryFetchHandler(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

// router.post("/getCustomer/{custid}", (req, res, next) => {
//   try {
//     //console.log('Router');
//     let _REQUEST = req;
//     _REQUEST.stageVariables = {
//       lambdaAlias,
//     };
//     _REQUEST.resource = "/getCustomer";
//     _REQUEST.body = JSON.stringify(req.body);
//     lambdaService.hello(_REQUEST, {}, (error, response) => {
//       if (error) {
//         return res.status(500).json(JSON.parse(error.body));
//       }
//       //console.log(response)
//       return res.status(response.statusCode).json(JSON.parse(response.body));
//     });

//   } catch (err) {
//     return res.status(500).json({
//       status: "FAILED",
//       error: err,
//     });
//   }
// });

router.get("/getCustomer/:custid", async (req, res, next) => {
  try {
    // console.log('Router');
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/getCustomer";
    _REQUEST.body = JSON.stringify(req.body);
    const retData = await lambdaService.hello(_REQUEST);
    console.log(retData);
    return res.status(retData.statusCode).json(JSON.parse(retData.body));
    // lambdaService.hello(_REQUEST, {}, (error, response) => {
    //   if (error) {
    //     return res.status(500).json(JSON.parse(error.body));
    //   }
    //   console.log(response)
    //   return res.status(response.statusCode).json(JSON.parse(response.body));
    // });
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.get("/getstatequerylist/:id", async (req, res, next) => {
  try {
    // console.log('Router');
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/getstatequerylist";
    _REQUEST.body = req.body;
    const retData = await lambdaService2.hello(_REQUEST);
    console.log(retData);
    return res.send(retData);
    // lambdaService.hello(_REQUEST, {}, (error, response) => {
    //   if (error) {
    //     return res.status(500).json(JSON.parse(error.body));
    //   }
    //   console.log(response)
    //   return res.status(response.statusCode).json(JSON.parse(response.body));
    // });
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.get("/FetchReasonQuery/:id", async (req, res, next) => {
  try {
    // console.log('Router');
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/FetchReasonQuery";
    _REQUEST.body = req.body;
    const retData = await lambdaService3.hello(_REQUEST);
    console.log(retData);
    return res.send(retData);
    // lambdaService.hello(_REQUEST, {}, (error, response) => {
    //   if (error) {
    //     return res.status(500).json(JSON.parse(error.body));
    //   }
    //   console.log(response)
    //   return res.status(response.statusCode).json(JSON.parse(response.body));
    // });
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.get("/GetCountryDetailsQry", async (req, res, next) => {
  try {
    // console.log('Router');
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/GetCountryDetailsQry";
    _REQUEST.body = req.body;
    const retData = await lambdaService4.hello(_REQUEST);
    console.log(retData);
    return res.send(retData);
    // lambdaService.hello(_REQUEST, {}, (error, response) => {
    //   if (error) {
    //     return res.status(500).json(JSON.parse(error.body));
    //   }
    //   console.log(response)
    //   return res.status(response.statusCode).json(JSON.parse(response.body));
    // });
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

// router.put("/customer/:id", async (req, res, next) => {
//   try {
//     //console.log(req.body);
//     console.log('Router');
//     let _REQUEST = req;
//     _REQUEST.stageVariables = {
//       lambdaAlias,
//     }
//     _REQUEST.resource = "/customer";
//     _REQUEST.body = req.body;
//     console.log("At request pass");
//     console.log(_REQUEST.body);
//     console.log("Enter")
//     // console.log(_REQUEST);
//     const retData = await lambdaService6.hello(_REQUEST);
//     console.log("Welcome2");
//     console.log(retData);
//     return res.send(retData);
//     //return res.status(retData.statusCode).json(JSON.parse(retData.body));

//   } catch (err) {
//     return res.status(500).json({
//       status: "FAILED",
//       error: err,
//     });
//   }
// });

router.post("/customer", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/customer";
    _REQUEST.body = req.body;
    const retData = await lambdaService5.Customerinsert(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.put("/customer", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/customer";
    _REQUEST.body = req.body;
    const retData = await lambdaService6.Customerupdate(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.post("/custaddress", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/custaddress";
    _REQUEST.body = req.body;
    const retData = await lambdaService7.custaddressinsert(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.put("/custaddress", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/custaddress";
    _REQUEST.body = req.body;
    const retData = await lambdaService8.custaddressupdate(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.get("/custlatlong", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/custlatlong";
    _REQUEST.body = req.body;
    const retData = await lambdaService9.custmrgetlatlang(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.post("/schedule", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/schedule";
    _REQUEST.body = req.body;
    const retData = await lambdaService10.scheduleinsert(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.put("/schedule", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/schedule";
    _REQUEST.body = req.body;
    const retData = await lambdaService11.scheduleupdate(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.post("/scheduleline", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/scheduleline";
    _REQUEST.body = req.body;
    const retData = await lambdaService12.schedulelineinsert(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.put("/scheduleline", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/scheduleline";
    _REQUEST.body = req.body;
    const retData = await lambdaService13.schedulelineupdate(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.post("/picklist", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/picklist";
    _REQUEST.body = req.body;
    const retData = await lambdaService14.picklistinsert(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.put("/picklist", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/picklist";
    _REQUEST.body = req.body;
    const retData = await lambdaService15.picklistupdate(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.post("/picklistline", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/picklistline";
    _REQUEST.body = req.body;
    const retData = await lambdaService16.picklstlninsert(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.put("/picklistline", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/picklistline";
    _REQUEST.body = req.body;
    const retData = await lambdaService17.picklstlnupdate(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.post("/person", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/person";
    _REQUEST.body = req.body;
    const retData = await lambdaService18.personinsert(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.put("/person", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/person";
    _REQUEST.body = req.body;
    const retData = await lambdaService19.personupdate(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.post("/vehicle", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/vehicle";
    _REQUEST.body = req.body;
    const retData = await lambdaService20.vehicleinsert(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.put("/vehicle", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/vehicle";
    _REQUEST.body = req.body;
    const retData = await lambdaService21.vehicleupdate(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.post("/personvehiclerel", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/personvehiclerel";
    _REQUEST.body = req.body;
    const retData = await lambdaService22.persnvehclrelinsert(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.post("/customerbulk", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/customerbulk";
    _REQUEST.body = req.body;
    const retData = await lambdaService23.uploadCustomer(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.post("/NewPersonCreate", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/NewPersonCreate";
    _REQUEST.body = req.body;
    const retData = await lambdaService24.Newpersonvehiclecreate(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.get("/customeramount", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/customeramount";
    _REQUEST.body = req.body;
    const retData = await lambdaService25.hello(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});
router.get("/sample", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/sample";
    _REQUEST.body = req.body;
    const retData = await lambdaService26.hello(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.post("/schlnordrdtlrln", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/schlnordrdtlrln";
    _REQUEST.body = req.body;
    const retData = await lambdaService27.schlnorddtlrelinsert(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.get("/custclustercnt", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/custclustercnt";
    _REQUEST.body = req.body;
    const retData = await lambdaService28.getcustomerclustercount(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.get("/orionkeys", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/orionkeys";
    _REQUEST.body = req.body;
    const retData = await lambdaService29.orionkeys(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.get("/schedulehistory", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/schedulehistory";
    _REQUEST.body = req.body;
    const retData = await lambdaService30.getpreviousschedules(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

router.get("/openorders", async (req, res, next) => {
  try {
    let _REQUEST = req;
    _REQUEST.stageVariables = {
      lambdaAlias,
    };
    _REQUEST.resource = "/openorders";
    _REQUEST.body = req.body;
    const retData = await lambdaService31.getopenorders(_REQUEST);
    console.log(retData);
    return res.send(retData);
  } catch (err) {
    return res.status(500).json({
      status: "FAILED",
      error: err,
    });
  }
});

module.exports = router;
