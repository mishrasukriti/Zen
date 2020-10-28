USE social_app;
create table Post (
userId varchar(20),
postId  varchar(20),
post varchar(200));
insert into Post  (userId, postId, post) VALUES ("user1@gmail.com", "123456", "some encrypted data ####");
insert into Post  (userId, postId, post) VALUES ("user2@gmail.com", "673456", "some encrypted data ####");
insert into Post  (userId, postId, post) VALUES ("user3@gmail.com", "783456", "some encrypted data ####");
insert into Post  (userId, postId, post) VALUES ("user4@gmail.com", "357484488", "some encrypted data ####");
insert into Post  (userId, postId, post) VALUES ("user5@gmail.com", "36475234", "some encrypted data ####");
insert into Post  (userId, postId, post) VALUES ("user1@gmail.com", "48903456", "some encrypted data ####");
select * from Post;
