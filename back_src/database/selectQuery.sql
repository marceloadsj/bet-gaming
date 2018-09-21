-- Query to select players that has at least one SLOT type game as favorite
SELECT DISTINCT p.* FROM players as p
  INNER JOIN player_favorite_games as pfg ON p.id = pfg.player_id
  INNER JOIN games as g ON g.id = pfg.game_id WHERE g.type = "SLOT"