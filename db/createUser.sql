INSERT into users
    (user_name,user_password,user_picture)
VALUES($1, $2, $3)
RETURNING *;