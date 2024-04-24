
import { db } from "../db.js";
export const Upcomingevent = (req, res) => {
    const query2 = "SELECT * FROM events where status=1";
    // in (select event_id from event_participate where user_id=?)
    db.query(query2, (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(data);
      }
    });
  };