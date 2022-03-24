//for cron actions
var cron = require("node-cron");
//get models from sequelize
import { Payment, Lastpayment } from "./db/models";
//fot hanlde dates
var dayjs = require("dayjs");
//get sequelize
const { Op } = require("sequelize");


/**
 * Set function to execute every 23 minutes and 8 hours
 * 
 */
cron.schedule("23 8 * * *", async () => {
  try {
    //clean table
    let dropped = await Lastpayment.destroy({
      truncate: true,
    });
    if (dropped) {
      console.log("Table cleaned");
    }
    //set now date
    const today = dayjs();
    //Get all payments
    let payments = await Payment.findAll({
      where: {
        createdAt: {
          [Op.gte]: today.subtract(1, "day").toISOString(), //one day ago
        },
      },
    });

    //verify if there are records
    if (payments.length !== 0) {
      //define the data to insert
      let dataBulk = [];
      //set the data structure
      for (let a in payments) {
        dataBulk.push({
          paymentId: payments[a].dataValues.paymentId,
        });
      }
      //bulk all payments from one day ago
      const captains = await Lastpayment.bulkCreate(dataBulk, {
        fields: ["paymentId"],
      });
      //if there are records
      if (captains.length !== 0) {
        console.log("records created");
      }
      //console.log(captains)
    }
  } catch (e) {
    console.log(e);
  }
});
