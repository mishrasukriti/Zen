USE social_app;
create table User_login_details (
userId varchar(20),
userPassword  varchar(20));
insert into User_login_details  (userId, userPassword) VALUES ("user1@gmail.com", "abc123");
insert into User_login_details  (userId, userPassword) VALUES ("user2@gmail.com", "def123");
insert into User_login_details  (userId, userPassword) VALUES ("user3@gmail.com", "ghj123");
insert into User_login_details  (userId, userPassword) VALUES ("user4@gmail.com", "qwe123");
insert into User_login_details  (userId, userPassword) VALUES ("user5@gmail.com", "tyu123");
select * from User_login_details;
