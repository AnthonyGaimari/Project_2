DROP DATABASE IF EXISTS adoption_org;
CREATE database adoption_org;
USE adoption_org;

CREATE TABLE users
(
user_id int(11),
username varchar(256),
user_email varchar(256),
primary key (user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE dogs
(
dog_id int(11),
dog_name varchar(256),
dog_breed varchar(256),
dog_age int(3),
dog_img_url varchar (256),
dog_blurb text,
is_adopted boolean default false,
primary key (dog_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE favorites(
fav_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
dog_id int(11),
user_id int(11),
KEY dog_id (dog_id),
CONSTRAINT dog_id FOREIGN KEY (dog_id) REFERENCES dogs (dog_id) ON DELETE CASCADE ON UPDATE CASCADE,
KEY user_id (user_id),
CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;