import  express  from "express";
import cors from "cors";
import router1 from "./models/r_contact_us.js";
import router4 from "./models/r_event.js";
import router5 from "./models/r_gallery.js";
import router7 from "./models/r_user.js";
import router3 from "./models/r_event_participate.js";
import router6 from "./models/r_job.js";
import router2 from "./models/r_admin.js";

const app = express();
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use("/gurukulalumni/contact_us", router1);
app.use("/gurukulalumni/event", router4);
app.use("/gurukulalumni/gallery", router5);
app.use("/gurukulalumni/user", router7);
app.use("/gurukulalumni/event_participate", router3);
app.use("/gurukulalumni/job", router6);
app.use("/gurukulalumni/admin", router2);

app.listen(3000, () => {
    console.log("Server is running on 3000 port...");
  });
  