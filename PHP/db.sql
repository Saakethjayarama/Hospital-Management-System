create table types(id int primary key auto_increment, user_type varchar(20));

create table users(id int primary key auto_increment, name varchar(50), email varchar(50), phone_number varchar(10), password varchar(50), user_type int, foreign key(user_type) references types(id))

create table appointments(id int primary key auto_increment, doctor_id int, patient_id int, appointment_date date, status int, foreign key(doctor_id) references users(id), foreign key(patient_id) references users(id));