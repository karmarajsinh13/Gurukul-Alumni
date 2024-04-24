import { db } from "../db.js";
export const Pastevent = (req, res) => {
    const query = "SELECT * FROM events where status=0";
    // in (select event_id from event_participate where user_id=?)
    db.query(query, (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(data);
      }
    });
  };