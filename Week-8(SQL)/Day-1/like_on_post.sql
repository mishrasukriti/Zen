USE social_app;
create table Like_on_Post (
userId varchar(20),
postId  varchar(20),
friend_Id  varchar(20));

insert into Like_on_Post (userId, postId, friend_Id) VALUES ("user1@gmail.com", "123456", "user3@gmail.com");
insert into Like_on_Post (userId, postId, friend_Id) VALUES ("user2@gmail.com", "673456","user4@gmail.com");
insert into Like_on_Post (userId, postId, friend_Id) VALUES ("user3@gmail.com", "7893402","user5@gmail.com" );
insert into Like_on_Post (userId, postId, friend_Id) VALUES ("user4@gmail.com", "6478295","user2@gmail.com" );
insert into Like_on_Post (userId, postId, friend_Id) VALUES ("user5@gmail.com", "4029932","user1@gmail.com" );
insert into Like_on_Post (userId, postId, friend_Id) VALUES ("user1@gmail.com", "56093456", "user3@gmail.com");
insert into Like_on_Post (userId, postId, friend_Id) VALUES ("user1@gmail.com", "358590662", "user3@gmail.com");
insert into Like_on_Post (userId, postId, friend_Id) VALUES ("user1@gmail.com", "760982748", "user3@gmail.com");
insert into Like_on_Post (userId, postId, friend_Id) VALUES ("user1@gmail.com", "27389595", "user3@gmail.com");
insert into Like_on_Post (userId, postId, friend_Id) VALUES ("user1@gmail.com", "90848495", "user3@gmail.com");
select * from Like_on_Post;