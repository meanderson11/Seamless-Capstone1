CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(45),
  email VARCHAR(60),
  password TEXT,
  confPasword TEXT,
);

INSERT INTO users (
  name,
  email,
  password,
  confPassword
) values (
  'Maria Anderson',
  'manderson@gmail.com',
  'password',
  'password'
);

