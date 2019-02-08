drop table if exists sim3_users;

create table sim3_users(
    id serial primary key,
    username varchar(20) not null,
    hash varchar(200) not null,
    profile_pic varchar(100)
);