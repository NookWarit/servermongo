const app = {
  db: {
    host: "ds129811.mlab.com",
    port: 29811,
    name: "server",
    username: "admin",
    password: "nook2525"
  },
  jwt: {
    APP_SECRET: "NookWarit",
    EXPIRE_IN: "7d"
  }
};

export const database = app.db;
export default app;
