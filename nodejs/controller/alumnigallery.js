import { db } from "../db.js";


export const getgalleryss = (req, res) => {
  const query1 = 'SELECT *,DATE_FORMAT(entry_date, "%d-%m-%y") AS entry_date FROM gallerys';
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
export const Totalimages = (req, res) => {
    const query4 = "SELECT count(*) FROM gallerys";
    
    db.query(query4, (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(data);
      }
    });
  };

export const getgallerys = (req, res) => {
  const query = 'select *,DATE_FORMAT(entry_date, "%d-%m-%y") AS entry_date from gallerys where img_id=?';

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deletegallerys = (req, res) => {
  const query = "DELETE FROM gallerys where img_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("gallery has been deleted");
  });
};

export const insertgallerys = (req, res) => {
  const query =
    "INSERT INTO gallerys(`img`,`title`,`entry_date`,`des`) values(?)";
    const date = new Date();
  const values = [
        req.file?.filename,
        req.body.title,
        date,
        req.body.des,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New gallery has been added");
  });
};
export const updategallerys = (req, res) => {
  const query =
    "UPDATE `gallerys` SET `img`=?,`title`=? ,`entry_date`=?,`des`=?  where img_id=?";
  const values = [
         req.file?.filename || req.body.img,
         req.body.title,
        new Date(),
        req.body.des,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("gallery data has been updated");
  });
};
