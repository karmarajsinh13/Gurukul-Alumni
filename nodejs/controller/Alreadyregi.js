import { db } from "../db.js";
export const Alyreadyreg = (req, res) => {
  const query1 = "SELECT * FROM event_participate where user_id=? and event_id=?";
  db.query(query1, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};