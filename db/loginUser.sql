SELECT *
FROM users
WHERE user_name = $1 AND user_password = $2;