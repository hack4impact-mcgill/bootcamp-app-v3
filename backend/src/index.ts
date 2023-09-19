import app from "./app";
import { AppDataSource } from "./data-source";
AppDataSource.initialize();
app.listen(3001, () => {
    console.log(`API listening on port 3001`)
})