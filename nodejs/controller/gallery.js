import { db } from "../db.js";

export const getgallerys = (req, res) => {
  const query1 = "SELECT * FROM gallery";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getgallery = (req, res) => {
  const query = "select * from gallery where id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deletegallery = (req, res) => {
  const query = "DELETE FROM gallery where id= ?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("gallery has been deleted");
  });
};

export const insertgallery = (req, res) => {
  const query =
    "INSERT INTO gallery(`image`,`title`,`description`) values(?)";
  const values = [
        req.body.image,
        req.body.title,
        req.body.description,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New gallery has been added");
  });
};
export const updategallery = (req, res) => {
  const query =
    "UPDATE `gallery` SET `image`=?,`title`=?,`description`=?  where id=?";
  const values = [
        req.body.image,
        req.body.title,
        req.body.description,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("gallery data has been updated");
  });
};
