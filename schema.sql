CREATE database travelApp_db;

USE travelApp_db;
CREATE TABLE destinations (
	id INTEGER AUTO_INCREMENT NOT NULL,
	PRIMARY KEY (id),
	destination VARCHAR(100) NOT NULL,
	themeParks INTEGER NOT NULL,
	roadTrip INTEGER NOT NULL,
	nightlife INTEGER NOT NULL,
	crowds INTEGER NOT NULL,
	warm INTEGER NOT NULL,
	sports INTEGER NOT NULL,
	outdoor INTEGER NOT NULL,
	water INTEGER NOT NULL,
	cities INTEGER NOT NULL,
	historic INTEGER NOT NULL,
	photo VARCHAR(100) NOT NULL,
	blurb VARCHAR(255) NOT NULL,
	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)



