-- added the UNIQUE constraint to burger_name column to prevent duplicate burgers
-- Try the command below to keep from deleting the db everytime the file is run.
-- CREATE DATABASE IF NOT EXISTS `burgers_db`;
DROP DATABASE IF EXISTS `burger2_db`;
CREATE DATABASE `burger2_db`;
USE `burger2_db`;

-- CREATE TABLE burger (
--   id int AUTO_INCREMENT,
--   burger_name VARCHAR(50) NOT NULL UNIQUE,
--   devoured BOOLEAN NOT NULL,
--   PRIMARY KEY(id)
-- );
