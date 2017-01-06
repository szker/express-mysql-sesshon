create table account (
  user_id varchar(32) not null primary key,
  user_name varchar(32) not null,
  password_md5 varchar(128) not null
);
