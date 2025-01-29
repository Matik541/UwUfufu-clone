USE quiz_platform_keyspace;

CREATE TABLE IF NOT EXISTS quiz_platform_keyspace.quiz
(
    id       int PRIMARY KEY,
    title    text,
    subtitle text
);