import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { NextApiRequest, NextApiResponse } from "next";
import firebaseConfig from "../../../files/firebaseConfig.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const id = req.query.id ? String(req.query.id) : null;
  if (id === null) {
    return res.status(400).json({ error: "id not supplied" });
  }

  const firebaseApp = initializeApp(firebaseConfig);
  const database = getDatabase(firebaseApp);

  return get(ref(database, id)).then((snapshot) => {
    const resJSON: any = {};
    resJSON[id] = snapshot.val();
    res.status(200).json(resJSON);
    
  });
}
