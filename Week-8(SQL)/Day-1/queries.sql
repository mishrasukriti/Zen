USE social_app;
SELECT * FROM Friends WHERE userId="user3@gmail.com";

SELECT * FROM POST WHERE userId="user5@gmail.com";

SELECT * FROM profile_status WHERE userId LIKE "%gmail%";

SELECT * FROM Post_Comment  WHERE friend_Id="user3@gmail.com" LIMIT 5 ;

SELECT user_profile.userId, user_name, DOB, address, is_active, is_complete, userPassword FROM user_profile 
INNER JOIN profile_status ON user_profile.userId=profile_status.userId 
INNER JOIN User_login_details ON User_login_details.userId=profile_status.userId ;