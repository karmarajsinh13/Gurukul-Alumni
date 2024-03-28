import { db } from "../db.js";

export const getEvents = (req, res) => {
  const query1 = "SELECT * FROM event";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getEvent = (req, res) => {
  const query = "select * from event where event_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteEvent = (req, res) => {
  const query = "DELETE FROM event where event_id= ?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Event has been deleted");
  });
};

export const insertEvent = (req, res) => {
  const query =
    "INSERT INTO event(`event_name`,`date`,`location`,`image`,`description`,`start_time`,`end_time`,`entry_by`,`entry_date`,`update_date`,`status`) values(?)";
  const values = [
    req.body.event_name,
    req.body.date,
    req.body.location,
    req.body.image,
    req.body.description,
    req.body.start_time,
    req.body.end_time,
    req.body.entry_by,
    req.body.entry_date,
    req.body.update_date,
    req.body.status,
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
    "UPDATE `event` SET `event_name`=?,`date`=?,`location`=?,`image`=?,`description`=?,`start_time`=?,`end_time`=?,`entry_by`=?,`entry_date`=?,`update_date`=?,`status`=? where event_id=?";
  const values = [
    req.body.event_name,
    req.body.date,
    req.body.location,
    req.body.image,
    req.body.description,
    req.body.start_time,
    req.body.end_time,
    req.body.entry_by,
    req.body.entry_date,
    req.body.update_date,
    req.body.status,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Event data has been updated");
  });
};
