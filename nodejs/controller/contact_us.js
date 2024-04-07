import { db } from "../db.js";

export const getContacts = (req, res) => {
  const query1 = "SELECT * FROM contact_us";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getContact = (req, res) => {
  const query = "select * from contact_us where contact_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteContact = (req, res) => {
  const query = "DELETE FROM contact_us where contact_id= ?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Contact has been deleted");
  });
};

export const insertContact = (req, res) => {
  const query =
    "INSERT INTO contact_us(`name`,`email`,`description`) values(?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.description,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New contact has been added");
  });
};
export const updateContact = (req, res) => {
  const query =
    "UPDATE `contact_us` SET `name`=?, `email`=?, `description`=? where contact_id=?";
  const values = [
    req.body.name,
    req.body.email,
    req.body.description,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Contact data has been updated");
  });
};