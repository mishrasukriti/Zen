CREATE DATABASE social_app;
USE social_app;
create table profile_status (
userId varchar(20),
is_active varchar(10),
is_complete varchar(10));

insert into profile_status (userId, is_active, is_complete) VALUES ("user1@gmail.com", "Active", "COMPLETED");
SELECT * FROM profile_status;
insert into profile_status (userId, is_active, is_complete) VALUES ("user2@gmail.com", "Active", "INCOMPLETE");
insert into profile_status (userId, is_active, is_complete) VALUES ("user3@gmail.com", "Active", "COMPLETED");
insert into profile_status (userId, is_active, is_complete) VALUES ("user4@gmail.com", "Inactive", "COMPLETED");
insert into profile_status (userId, is_active, is_complete) VALUES ("user5@gmail.com", "Active", "COMPLETED");
SELECT * FROM profile_status;
