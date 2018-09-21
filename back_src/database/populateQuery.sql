PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

INSERT INTO casino_games (id, casino_id, game_id, created, updated, deleted) VALUES (1, 1, 1, '2018-09-14 00:00:00', '2018-09-24 00:00:00', NULL);
INSERT INTO casino_games (id, casino_id, game_id, created, updated, deleted) VALUES (2, 1, 2, '2018-09-15 00:00:00', '2018-09-15 00:00:00', NULL);
INSERT INTO casino_games (id, casino_id, game_id, created, updated, deleted) VALUES (3, 2, 1, '2018-09-16 00:00:00', '2018-09-24 00:00:00', NULL);
INSERT INTO casino_games (id, casino_id, game_id, created, updated, deleted) VALUES (4, 3, 3, '2018-09-18 00:00:00', '2018-09-18 00:00:00', NULL);
INSERT INTO casino_games (id, casino_id, game_id, created, updated, deleted) VALUES (5, 4, 4, '2018-09-20 00:00:00', '2018-09-22 00:00:00', NULL);
INSERT INTO casino_games (id, casino_id, game_id, created, updated, deleted) VALUES (6, 4, 5, '2018-09-22 00:00:00', '2018-09-30 00:00:00', NULL);
INSERT INTO casino_games (id, casino_id, game_id, created, updated, deleted) VALUES (7, 1, 4, '2018-09-23 00:00:00', '2018-09-25 00:00:00', NULL);
INSERT INTO casino_games (id, casino_id, game_id, created, updated, deleted) VALUES (8, 3, 5, '2018-09-24 00:00:00', '2018-09-24 00:00:00', NULL);

INSERT INTO casinos (id, name, code, active, created, updated, deleted) VALUES (1, 'Slot House', 'SHO', 1, '2018-09-01 00:00:00', '2018-09-02 00:00:00', NULL);
INSERT INTO casinos (id, name, code, active, created, updated, deleted) VALUES (2, 'Game Bet', 'GMB', 0, '2018-09-02 00:00:00', '2018-09-11 00:00:00', NULL);
INSERT INTO casinos (id, name, code, active, created, updated, deleted) VALUES (3, 'Royal Casino', 'RCA', 0, '2018-09-03 00:00:00', '2018-09-03 00:00:00', '');
INSERT INTO casinos (id, name, code, active, created, updated, deleted) VALUES (4, 'House of Poker', 'HOP', 1, '2018-09-04 00:00:00', '2018-09-12 00:00:00', '');

INSERT INTO countries (id, name, code, created, updated, deleted) VALUES (1, 'Brazil', 'BRA', '2018-09-11 00:00:00', '2018-09-11 00:00:00', NULL);
INSERT INTO countries (id, name, code, created, updated, deleted) VALUES (2, 'Malta', 'MLT', '2018-09-13 00:00:00', '2018-09-13 00:00:00', NULL);

INSERT INTO country_games (id, game_id, country_id, created, updated, deleted) VALUES (1, 1, 1, '2018-09-11 00:00:00', '2018-09-11 00:00:00', NULL);
INSERT INTO country_games (id, game_id, country_id, created, updated, deleted) VALUES (2, 3, 1, '2018-09-12 00:00:00', '2018-09-12 00:00:00', NULL);
INSERT INTO country_games (id, game_id, country_id, created, updated, deleted) VALUES (3, 5, 1, '2018-09-14 00:00:00', '2018-09-17 00:00:00', NULL);
INSERT INTO country_games (id, game_id, country_id, created, updated, deleted) VALUES (4, 2, 2, '2018-09-15 00:00:00', '2018-09-27 00:00:00', NULL);
INSERT INTO country_games (id, game_id, country_id, created, updated, deleted) VALUES (5, 3, 2, '2018-09-16 00:00:00', '2018-09-24 00:00:00', NULL);
INSERT INTO country_games (id, game_id, country_id, created, updated, deleted) VALUES (6, 4, 2, '2018-09-18 00:00:00', '2018-09-21 00:00:00', NULL);

INSERT INTO games (id, name, code, type, active, created, updated, deleted) VALUES (1, 'Poker Start', 'PKS', 'POKER', 0, '2018-09-11 00:00:00', '2018-09-13 00:00:00', '');
INSERT INTO games (id, name, code, type, active, created, updated, deleted) VALUES (2, 'Slot Today', 'SLT', 'SLOT', 1, '2018-09-12 00:00:00', '2018-09-12 00:00:00', '');
INSERT INTO games (id, name, code, type, active, created, updated, deleted) VALUES (3, 'Slot Max', 'SLM', 'SLOT', 1, '2018-09-18 00:00:00', '2018-09-19 00:00:00', '');
INSERT INTO games (id, name, code, type, active, created, updated, deleted) VALUES (4, 'Slooots', 'SOO', 'SLOT', 1, '2018-09-20 00:00:00', '2018-09-20 00:00:00', '');
INSERT INTO games (id, name, code, type, active, created, updated, deleted) VALUES (5, 'Bet Win', 'BTW', 'BET', 1, '2018-09-24 00:00:00', '2018-09-29 00:00:00', '');

INSERT INTO player_favorite_games (id, game_id, player_id, created, updated, deleted) VALUES (1, 1, 1, '2018-09-11 00:00:00', '2018-09-11 00:00:00', NULL);
INSERT INTO player_favorite_games (id, game_id, player_id, created, updated, deleted) VALUES (2, 3, 1, '2018-09-12 00:00:00', '2018-09-25 00:00:00', NULL);
INSERT INTO player_favorite_games (id, game_id, player_id, created, updated, deleted) VALUES (3, 1, 2, '2018-09-12 00:00:00', '2018-09-22 00:00:00', NULL);
INSERT INTO player_favorite_games (id, game_id, player_id, created, updated, deleted) VALUES (4, 5, 2, '2018-09-15 00:00:00', '2018-09-22 00:00:00', NULL);
INSERT INTO player_favorite_games (id, game_id, player_id, created, updated, deleted) VALUES (5, 4, 3, '2018-09-17 00:00:00', '2018-09-22 00:00:00', NULL);
INSERT INTO player_favorite_games (id, game_id, player_id, created, updated, deleted) VALUES (6, 2, 4, '2018-09-18 00:00:00', '2018-09-27 00:00:00', NULL);

INSERT INTO players (id, name, email, password, country_id, created, updated, deleted) VALUES (1, 'Marcelo Junior', 'marceloadsj1@gmail.com', '$2y$12$7konADu/rBkNxSLVKwl/euualDnlWKcciK0z2nyqjleJtLZea1XU6
', 1, '2018-09-12 00:00:00', '2018-09-15 00:00:00', NULL);
INSERT INTO players (id, name, email, password, country_id, created, updated, deleted) VALUES (2, 'Suellen Siqueira', 'contato@susiqueira.com', '$2y$12$.VTMveGk6REmMnYpv3JeNOFTXLtuhNkZn/Y5yNdwgZ2yw.ZzQq.NW
', 1, '2018-09-18 00:00:00', '2018-09-27 00:00:00', NULL);
INSERT INTO players (id, name, email, password, country_id, created, updated, deleted) VALUES (3, 'Pablo Passariello', 'pablo@fakeemail.com', '$2y$12$jYUSf6uQJ115Uma8WmMtm.JPxN9Wh3yGgFkVNx2b8BxQ7X8W/kPoW
', 2, '2018-09-24 00:00:00', '2018-09-25 00:00:00', NULL);
INSERT INTO players (id, name, email, password, country_id, created, updated, deleted) VALUES (4, 'Dan Abramov', 'dan@reactjs.org', '$2y$12$1AUmbVBcVAymcMSAQj5PuOHTk9.OEpWsASR3lS.5ROLTSsUA51R2q
', 2, '2018-09-27 00:00:00', '2018-09-28 00:00:00', NULL);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
