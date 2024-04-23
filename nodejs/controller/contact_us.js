import { db } from "../db.js";

export const getContacts = (req, res) => {
  const query1 = `SELECT *,DATE_FORMAT(entry_date, "%d-%m-%y") AS entry_date FROM contact_us`;
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getContact = (req, res) => {
  const query = `select *,DATE_FORMAT(entry_date, "%y-%m-%d") AS entry_date from contact_us where contact_id=?`;

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};
// export const getContact = (req, res) => {
//   const query = "select a.user_name , b.user_email , b.description from contact_us b , user a where b.user_phone = a.user_phone and b.contact_id=?";

//   db.query(query, [req.params.id], (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data[0]);
//   });
// };

export const deleteContact = (req, res) => {
  const query = "DELETE FROM contact_us where contact_id= ?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Contact has been deleted");
  });
};

export const insertContact = (req, res) => {
  const query =
    "INSERT INTO contact_us(`user_name`,`user_phone`,`user_email`,`description`,`entry_date`) values(?)";
  const date = new Date();
  const values = [
    req.body.user_name,
    req.body.user_phone,
    req.body.user_email,
    req.body.description,
    date,
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
    "UPDATE `contact_us` SET `user_name`=? ,`user_phone`=?, `user_email`=?, `description`=? ,`entry_date`=? where contact_id=?";
  const values = [
    req.body.user_name,
    req.body.user_phone,
    req.body.user_email,
    req.body.description,
    new Date(),
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Contact data has been updated");
  });
};
