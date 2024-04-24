import { db } from "../db.js";
export const Totalinvite = (req, res) => {
  const query1 = "SELECT sum(invite) FROM event_participate  where event_id=?";

  db.query(query1, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};
