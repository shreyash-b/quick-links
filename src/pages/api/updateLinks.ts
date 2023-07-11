import { initializeApp } from "firebase/app";
import { NextApiRequest, NextApiResponse } from "next";
import config from "../../files/firebaseConfig.json"
import { get, getDatabase, ref, set } from "firebase/database";

export default function hander(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }
    
    const params = JSON.parse(req.body)
    const id = params.id
    const data = params.data; 
    
    if(!data){
        return res.status(400).json({"error": "data not supplied"});
    }
    
    // const newVals = JSON.parse(data)
    const firebaseApp = initializeApp(config);
    const db = getDatabase(firebaseApp);
    const idRef = ref(db, id)
    
    set(idRef, data);
    return res.send({"result": "done"});

}
