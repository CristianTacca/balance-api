import app from "./app";
import Logger from "./logs";
import { AppDataSource } from "./data-source";

(async () => {
  await AppDataSource.initialize()
    .then(() => {
      Logger.info("Data Source initialized");
    })
    .catch((err) => {
      Logger.error("Error during Data Source initialization", err);
    });

  app.listen(process.env.PORT || 3000);
})();
