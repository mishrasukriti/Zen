USE social_app;
create table user_profile (
userId varchar(20),
user_name  varchar(15),
DOB varchar(15),
address varchar(50));

insert into user_profile  (userId, user_name, DOB, address) VALUES ("user1@gmail.com", "John", "02-04-1991", "House no-321,Beverly Hills");
SELECT * FROM user_profile;
insert into user_profile  (userId, user_name, DOB, address) VALUES ("user2@gmail.com", "Alan Harper", "02-07-1992", "House no-456,Beverly Hills");
insert into user_profile  (userId, user_name, DOB, address) VALUES ("user3@gmail.com", "Mia", "07-11-1991", "House no-893,New Hampshire");
insert into user_profile  (userId, user_name, DOB, address) VALUES ("user4@gmail.com", "Walden", "13-12-1998", "House no-284,Los Angeles");
insert into user_profile  (userId, user_name, DOB, address) VALUES ("user5@gmail.com", "Lindesey", "25-06-1985", "House no-935,Tokyo");
SELECT * FROM user_profile;