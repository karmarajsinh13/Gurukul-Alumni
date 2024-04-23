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
  const query = `select *,DATE_FORMAT(deadline, "%y-%m-%d") AS deadline from job where job_id=?`;

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deletejob = (req, res) => {
  const query = "DELETE FROM job where job_id= ?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("job has been deleted");
  });
};

export const insertjob = (req, res) => {
  const query =
    "INSERT INTO job(`title`,`description`,`salary`,`locationn`,`deadline`,`status`,`entry_by`,`entry_date`) values(?)";
    const date = new Date();
  const values = [
     req.body.title,
     req.body.description,
     req.body.salary,
     req.body.locationn,
     req.body.deadline,
     req.body.status,
     req.body.entry_by,
     date,
 
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
    "UPDATE `job` SET `title`=?,`description`=?,`salary`=?,`locationn`=?,`deadline`=?,`status`=?,`entry_by`=?,`entry_date`=? where job_id=?";
  const values = [
    req.body.title,
     req.body.description,
     req.body.salary,
     req.body.locationn,
     req.body.deadline,
     req.body.status,
     req.body.entry_by,
     new Date(),
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("job data has been updated");
  });
};
