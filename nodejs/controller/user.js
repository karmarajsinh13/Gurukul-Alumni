import { db } from "../db.js";

export const getusers = (req, res) => {
  const query1 = "SELECT * FROM user";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getuser = (req, res) => {
  const query = "select * from user where user_id=?";

  db.query(query, [req.params.user_id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteuser = (req, res) => {
  const query = "DELETE FROM user where user_id= ?";
  db.query(query, [req.params.user_id], (err, data) => {
    if (err) return res.json(err);
    return res.json("user has been deleted");
  });
};

export const insertuser = (req, res) => {
  const query =
    "INSERT INTO user(`firstname`,`lastname`,`phone`,`username`,`email`,`password`,`confirm_password`,`graduted_year`,`dob`,`photo`,`address`,`gender`) values(?)";
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.phone,
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.confirm_password,
    req.body.graduted_year,
    req.body.dob,
    req.body.photo,
    req.body.address,
    req.body.gender,     
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New user has been added");
  });
};
export const updateuser = (req, res) => {
  const query =
    "UPDATE `user` SET `firstname`=?,`lastname`=?,`phone`=?,`username`=?,`email`=?,`password`=?,`confirm_password`=?,`graduted_year`=?,`dob`=?,`photo`=?,`address`=?,`gender`=?  where user_id=?";
  const values = [
      req.body.firstname,
    req.body.lastname,
    req.body.phone,
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.confirm_password,
    req.body.graduted_year,
    req.body.dob,
    req.body.photo,
    req.body.address,
    req.body.gender,   
  ];
  console.log(query);
  db.query(query, [...values, req.params.user_id], (err, data) => {
    if (err) return res.json(err);
    return res.json("user data has been updated");
  });
};
