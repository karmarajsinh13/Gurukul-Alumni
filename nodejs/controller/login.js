
import { db } from "../db.js";

export const getUser = (req, res) => {
  //   const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM users WHERE user_id = ?"
  //const user_id = req.params.id;
  const username = req.query.username;
  const password = req.query.password;
  const query =
    "SELECT user_id  FROM `user` WHERE username='" +
    username +
    "' AND password='" +
    password +
    "'";

  console.log(query);

  try {
    db.query(query, (err, data) => {
      console.log(data.length);
      //console.log(data[0].user_id)
      if (err) return res.json(err);
      else {
        if (data.length == 0) return res.json(0);
        else return res.json(data[0].user_id);
      }

      //   if(err) return res.json(err)
      //   return res.json(data[0].user_id)
    });
  } catch (error) {
    return res.json(0);
  }
};
