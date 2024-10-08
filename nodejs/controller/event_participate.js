import { db } from "../db.js";

export const getevent_participates = (req, res) => {
  const query1 = "SELECT * FROM event_participate";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getevent_participate = (req, res) => {
  const query = "select * from event_participate where ep_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};
// export const Alyreadyreg = (req, res) => {
//   const query1 = "SELECT count(*) FROM event_participant where user_id=? and event_id=?";
//   // in (select event_id from event_participate where user_id=?)
//   db.query(query1, (err, data) => {
//     if (err) {
//       return res.json(err);
//     } else {
//       return res.json(data);
//     }
//   });
// };




export const deleteevent_participate = (req, res) => {
  const query = "DELETE FROM event_participate where ep_id= ?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Event has been deleted");
  });
};

export const insertevent_participate = (req, res) => {
  const query =
    "INSERT INTO event_participate(`user_id`,`event_id`,`ep_name`,`ep_email`,`number`,`invite`) values(?)";
  const values = [
      req.body.user_id,
      req.body.event_id,
      req.body.ep_name,
      req.body.ep_email,
      req.body.number,
      req.body.invite,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New Event has been added");
  });
};
export const updateevent_participate = (req, res) => {
  const query =
    "UPDATE `event_participate` SET `user_id`=?,`event_id`=?,`ep_name`=?,`ep_email`=?,`number`=?,`invite`=?  where ep_id=?";
  const values = [
      req.body.user_id,
      req.body.event_id,
      req.body.ep_name,
      req.body.ep_email,
      req.body.number,
      req.body.invite,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Event data has been updated");
  });
};
