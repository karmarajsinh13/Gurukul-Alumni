import { db } from "../db.js";

export const getAdmins = (req, res) => {
  const query1 = "SELECT * FROM admin";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getAdmin = (req, res) => {
  const query = "select * from admin where admin_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteAdmin = (req, res) => {
  const query = "DELETE FROM admin where admin_id= ?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Admin has been deleted");
  });
};

export const insertAdmin = (req, res) => {
  const query =
    "INSERT INTO admin(`firstname`,`lastname`,`email`,`username`,`password`,`confirm_password`,`address`,`number`,`photo`,`gender`,`dob`) values(?)";
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.username,
    req.body.password,
    req.body.confirm_password,
    req.body.address,
    req.body.number,
    req.file?.filename,
    req.body.gender,
    req.body.dob
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New Admin has been added");
  });
};
export const updateAdmin = (req, res) => {
  const query =
    "UPDATE `admin` SET `firstname`=?,`lastname`=?,`email`=?,`username`=?,`password`=?,`confirm_password`=?,`address`=?,`number`=?,`photo`=?,`gender`=?,`dob`=? where admin_id=?";
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.username,
    req.body.password,
    req.body.confirm_password,
    req.body.address,
    req.body.number,
    req.file?.filename || req.body.photo,
    req.body.gender,
    req.body.dob,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Admin data has been updated");
  });
};
