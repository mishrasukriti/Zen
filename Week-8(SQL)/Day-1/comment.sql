USE social_app;
create table  Post_Comment(
userId varchar(20),
postId  varchar(20),
friend_Id  varchar(20),
friend_comment varchar(200));

insert into Post_Comment (userId, postId, friend_Id, friend_comment) VALUES ("user1@gmail.com", "123456", "user3@gmail.com","some encrypted data ####");
insert into Post_Comment (userId, postId, friend_Id, friend_comment) VALUES ("user2@gmail.com", "673456","user4@gmail.com", "some encrypted data ####");
insert into Post_Comment (userId, postId, friend_Id, friend_comment) VALUES ("user3@gmail.com", "7893402","user5@gmail.com", "some encrypted data ####");
insert into Post_Comment (userId, postId, friend_Id, friend_comment) VALUES ("user4@gmail.com", "6478295","user2@gmail.com", "some encrypted data ####");
insert into Post_Comment (userId, postId, friend_Id, friend_comment) VALUES ("user5@gmail.com", "4029932","user1@gmail.com", "some encrypted data ####");
insert into Post_Comment (userId, postId, friend_Id, friend_comment) VALUES ("user1@gmail.com", "56093456", "user3@gmail.com","some encrypted data ####");
insert into Post_Comment (userId, postId, friend_Id, friend_comment) VALUES ("user1@gmail.com", "358590662", "user3@gmail.com","some encrypted data ####");
insert into Post_Comment (userId, postId, friend_Id, friend_comment) VALUES ("user1@gmail.com", "760982748", "user3@gmail.com","some encrypted data ####");
insert into Post_Comment (userId, postId, friend_Id, friend_comment) VALUES ("user1@gmail.com", "27389595", "user3@gmail.com","some encrypted data ####");
insert into Post_Comment (userId, postId, friend_Id, friend_comment) VALUES ("user1@gmail.com", "90848495", "user3@gmail.com","some encrypted data ####");
select * from Post_Comment;