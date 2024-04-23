
import { db } from "../db.js";

export const getEvents = (req, res) => {
  const query1 = `SELECT *,DATE_FORMAT(date, "%y-%m-%d") AS date FROM events`;
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getEvent = (req, res) => {
  const query = `select *,DATE_FORMAT(date, "%y-%m-%d") AS date from events where event_id=?`;

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteEvent = (req, res) => {
  const query = "DELETE FROM events where event_id= ?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Event has been deleted");
  });
};

export const insertEvent = (req, res) => {
  const query =
    "INSERT INTO events(`ename`,`date`,`locationn`,`image`,`description`,`start_time`,`end_time`,`entry_date`,`status`) values(?)";
  const date = new Date();
  const values = [
    req.body.ename,
    req.body.date,
    req.body.locationn,
    req.file?.filename,
    req.body.description,
    req.body.start_time,
    req.body.end_time,
    date,
   req.body.status
  ];

  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    
    return res.json("New Event has been added");
  });
};
export const updateEvent = (req, res) => {
  const query =
    "UPDATE `events` SET `ename`=?,`date`=?,`locationn`=?,`image`=?,`description`=?,`start_time`=?,`end_time`=?,`entry_date`=?,`status`=? where event_id=?";
  const values = [
    req.body.ename,
    req.body.date,
    req.body.locationn,
    req.file?.filename || req.body.image,
    req.body.description,
    req.body.start_time,
    req.body.end_time,
    new Date(),
    req.body.status,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Event data has been updated");
  });
};
