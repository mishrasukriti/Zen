USE social_app;
create table Friends (
userId varchar(20),
friend_Id  varchar(20));
insert into Friends  (userId, friend_Id) VALUES ("user1@gmail.com", "user3@gmail.com");
insert into Friends  (userId, friend_Id) VALUES ("user1@gmail.com", "user5@gmail.com");
insert into Friends  (userId, friend_Id) VALUES ("user5@gmail.com", "user1@gmail.com");
insert into Friends  (userId, friend_Id) VALUES ("user2@gmail.com", "user3@gmail.com");
insert into Friends  (userId, friend_Id) VALUES ("user3@gmail.com", "user1@gmail.com");
insert into Friends  (userId, friend_Id) VALUES ("user4@gmail.com", "user2@gmail.com");
insert into Friends  (userId, friend_Id) VALUES ("user3@gmail.com", "user2@gmail.com");
insert into Friends  (userId, friend_Id) VALUES ("user2@gmail.com", "user4@gmail.com");
SELECT * FROM Friends;

