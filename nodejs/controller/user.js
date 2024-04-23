
import { db } from "../db.js";

export const getUsers = (req, res) => {
  const query1 = `SELECT *,DATE_FORMAT(dob, "%y-%m-%d") AS dob FROM user`;
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const TotalUsers = (req, res) => {
  const query1 = "SELECT count(*) FROM user where status=1";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getUser = (req, res) => {
  const query = `select *,DATE_FORMAT(dob, "%y-%m-%d") AS dob from user where user_id=?`;

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteUser = (req, res) => {
  const query = "DELETE FROM user where user_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("user has been deleted");
  });
};

export const insertUser = (req, res) => {
  const query =
    "INSERT INTO user(firstname,lastname,phone,username,email,password,passing_year,gender,dob,photo,city,state,address,entry_date,status) values(?)";
  const date = new Date();
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.phone,
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.passing_year,
    req.body.gender,
    req.body.dob,
    req.file?.filename || req.body.photo,
    req.body.city,
    req.body.state,
    req.body.address,
    date,
    req.body.status,
  ];

  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    
    return res.json("New user has been added");
  });
};
export const updateUser = (req, res) => {
  const query =
    "UPDATE `user` SET `firstname`=?,`lastname`=?,`phone`=?,`username`=?,`email`=?,`password`=?,`passing_year`=?,`gender`=?,`dob`=?,`photo`=?,`city`=?,`state`=?,`address`=?,`entry_date`=?,`status`=? where user_id=?";
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.phone,
    req.body.username,
    req.body.email,
    req.body.password,
    req.body.passing_year,
    req.body.gender,
    req.body.dob,
    req.file?.filename || req.body.photo,
    req.body.city,
    req.body.state,
    req.body.address,
    new Date(),
    req.body.status,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("user data has been updated");
  });
};
