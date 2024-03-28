import { db } from "../db.js";

export const getjobs = (req, res) => {
  const query1 = "SELECT * FROM job";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getjob = (req, res) => {
  const query = "select * from job where job_id=?";

  db.query(query, [req.params.job_id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deletejob = (req, res) => {
  const query = "DELETE FROM job where job_id= ?";
  db.query(query, [req.params.job_id], (err, data) => {
    if (err) return res.json(err);
    return res.json("job has been deleted");
  });
};

export const insertjob = (req, res) => {
  const query =
    "INSERT INTO job(`title`,`description`,`category`,`salary`,`location`,`deadline`,`entry_by`,`entry_date`,`update_date`) values(?)";
  const values = [
     req.body.title,
     req.body.description,
     req.body.category,
     req.body.salary,
     req.body.location,
     req.body.deadline,
     req.body.entry_by,
     req.body.entry_date,
     req.body.update_date,       
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New job has been added");
  });
};
export const updatejob = (req, res) => {
  const query =
    "UPDATE `job` SET `image`=?,`title`=?,`description`=?  where job_id=?";
  const values = [
        req.body.image,
        req.body.title,
        req.body.description,
  ];
  console.log(query);
  db.query(query, [...values, req.params.job_id], (err, data) => {
    if (err) return res.json(err);
    return res.json("job data has been updated");
  });
};
