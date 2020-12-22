create table types(id int primary key auto_increment, user_type varchar(20));

create table users(id int primary key auto_increment, name varchar(50), email varchar(50), phone_number varchar(10), password varchar(50), user_type int, foreign key(user_type) references types(id))