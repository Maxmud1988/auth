// app.config.ts

export default () => ({
  appName: 'My NestJS App',
  port: process.env.PORT || 3000,
  database: {
    db_host: process.env.DB_HOST || 'localhost',
    db_port: process.env.DB_PORT || 5432,
    db_username: process.env.DB_USERNAME || 'root',
    db_password: process.env.DB_PASSWORD || 'root',
    db_name: process.env.DB_DATABASE || 'auth',
  },
  jwtSecret: process.env.JWT_SECRET || 'mysecretkey',
});
