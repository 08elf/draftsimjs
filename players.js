// players.js
const players = [
    {
        "player_id": "CD_I1023261",
        "name": "Nick Daicos",
        "dob": "2003-01-03",
        "fantasy_average": 108.8,
        "team": "CW",
        "rank": 1,
        "career_avg": 97.2381,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 1.12
    },
    {
        "player_id": "CD_I1013128",
        "name": "Errol Gulden",
        "dob": "2002-07-18",
        "fantasy_average": 112.5,
        "team": "SY",
        "rank": 2,
        "career_avg": 91.0968,
        "positions": [
            "MID"
        ],
        "rankADP": 2.12
    },
    {
        "player_id": "CD_I1009528",
        "name": "Tom Green",
        "dob": "2001-01-23",
        "fantasy_average": 110.6,
        "team": "GWS",
        "rank": 3,
        "career_avg": 86.0476,
        "positions": [
            "MID"
        ],
        "rankADP": 3.18
    },
    {
        "player_id": "CD_I1004592",
        "name": "Tim English",
        "dob": "1997-08-10",
        "fantasy_average": 118.7,
        "team": "WB",
        "rank": 4,
        "career_avg": 88.6535,
        "positions": [
            "RUC"
        ],
        "rankADP": 3.87
    },
    {
        "player_id": "CD_I1009420",
        "name": "Caleb Serong",
        "dob": "2001-02-09",
        "fantasy_average": 108.1,
        "team": "FR",
        "rank": 5,
        "career_avg": 88.1667,
        "positions": [
            "MID"
        ],
        "rankADP": 5.17
    },
    {
        "player_id": "CD_I1002232",
        "name": "Andrew Brayshaw",
        "dob": "1999-11-08",
        "fantasy_average": 110.3,
        "team": "FR",
        "rank": 6,
        "career_avg": 91.3802,
        "positions": [
            "MID"
        ],
        "rankADP": 6.17
    },
    {
        "player_id": "CD_I1001299",
        "name": "Connor Rozee",
        "dob": "2000-01-22",
        "fantasy_average": 105.9,
        "team": "PA",
        "rank": 8,
        "career_avg": 80.14,
        "positions": [
            "MID"
        ],
        "rankADP": 8.04
    },
    {
        "player_id": "CD_I1006094",
        "name": "Sam Walsh",
        "dob": "2000-07-02",
        "fantasy_average": 94.6,
        "team": "CA",
        "rank": 7,
        "career_avg": 96.1146,
        "positions": [
            "MID"
        ],
        "rankADP": 8.71
    },
    {
        "player_id": "CD_I1006121",
        "name": "Zak Butters",
        "dob": "2000-09-08",
        "fantasy_average": 99.5,
        "team": "PA",
        "rank": 9,
        "career_avg": 78.023,
        "positions": [
            "MID"
        ],
        "rankADP": 10.17
    },
    {
        "player_id": "CD_I992242",
        "name": "Jordan Dawson",
        "dob": "1997-04-09",
        "fantasy_average": 113.4,
        "team": "AD",
        "rank": 10,
        "career_avg": 90.8426,
        "positions": [
            "MID"
        ],
        "rankADP": 10.49
    },
    {
        "player_id": "CD_I1023518",
        "name": "Harry Sheezel",
        "dob": "2004-10-13",
        "fantasy_average": 97.3,
        "team": "NM",
        "rank": 11,
        "career_avg": 97.3478,
        "positions": [
            "DEF"
        ],
        "rankADP": 11.75
    },
    {
        "player_id": "CD_I992468",
        "name": "Rowan Marshall",
        "dob": "1995-11-24",
        "fantasy_average": 115.8,
        "team": "SK",
        "rank": 14,
        "career_avg": 92.9907,
        "positions": [
            "RUC"
        ],
        "rankADP": 12.38
    },
    {
        "player_id": "CD_I998172",
        "name": "Tim Taranto",
        "dob": "1998-01-28",
        "fantasy_average": 112.4,
        "team": "RI",
        "rank": 12,
        "career_avg": 97.9134,
        "positions": [
            "MID"
        ],
        "rankADP": 14.01
    },
    {
        "player_id": "CD_I297373",
        "name": "Marcus Bontempelli",
        "dob": "1995-11-24",
        "fantasy_average": 117,
        "team": "WB",
        "rank": 16,
        "career_avg": 97.9804,
        "positions": [
            "MID"
        ],
        "rankADP": 14.05
    },
    {
        "player_id": "CD_I298210",
        "name": "Christian Petracca",
        "dob": "1996-01-04",
        "fantasy_average": 106,
        "team": "ME",
        "rank": 13,
        "career_avg": 88.4518,
        "positions": [
            "MID"
        ],
        "rankADP": 17.42
    },
    {
        "player_id": "CD_I992016",
        "name": "Zach Merrett",
        "dob": "1995-10-03",
        "fantasy_average": 112.9,
        "team": "ES",
        "rank": 17,
        "career_avg": 103.5297,
        "positions": [
            "MID"
        ],
        "rankADP": 18.12
    },
    {
        "player_id": "CD_I996701",
        "name": "Clayton Oliver",
        "dob": "1997-07-22",
        "fantasy_average": 113.8,
        "team": "ME",
        "rank": 20,
        "career_avg": 102.9539,
        "positions": [
            "MID"
        ],
        "rankADP": 18.16
    },
    {
        "player_id": "CD_I994389",
        "name": "Jack Sinclair",
        "dob": "1995-02-12",
        "fantasy_average": 102.2,
        "team": "SK",
        "rank": 21,
        "career_avg": 77.1481,
        "positions": [
            "DEF"
        ],
        "rankADP": 18.21
    },
    {
        "player_id": "CD_I297566",
        "name": "James Sicily",
        "dob": "1995-01-06",
        "fantasy_average": 104.5,
        "team": "HW",
        "rank": 22,
        "career_avg": 83.0992,
        "positions": [
            "DEF"
        ],
        "rankADP": 19.81
    },
    {
        "player_id": "CD_I993834",
        "name": "Josh Dunkley",
        "dob": "1997-01-09",
        "fantasy_average": 104.4,
        "team": "BL",
        "rank": 15,
        "career_avg": 96.8254,
        "positions": [
            "MID"
        ],
        "rankADP": 20.49
    },
    {
        "player_id": "CD_I1009256",
        "name": "Hayden Young",
        "dob": "2001-04-11",
        "fantasy_average": 89.2,
        "team": "FR",
        "rank": 23,
        "career_avg": 81.3455,
        "positions": [
            "DEF"
        ],
        "rankADP": 22.78
    },
    {
        "player_id": "CD_I993817",
        "name": "Darcy Parish",
        "dob": "1997-07-25",
        "fantasy_average": 106.9,
        "team": "ES",
        "rank": 18,
        "career_avg": 85.9184,
        "positions": [
            "MID"
        ],
        "rankADP": 23.77
    },
    {
        "player_id": "CD_I998659",
        "name": "Luke Ryan",
        "dob": "1996-02-06",
        "fantasy_average": 99.4,
        "team": "FR",
        "rank": 24,
        "career_avg": 83.3154,
        "positions": [
            "DEF"
        ],
        "rankADP": 24.93
    },
    {
        "player_id": "CD_I1015507",
        "name": "Nasiah Wanganeen-Milera",
        "dob": "2003-02-22",
        "fantasy_average": 91.3,
        "team": "SK",
        "rank": 31,
        "career_avg": 79.5897,
        "positions": [
            "DEF"
        ],
        "rankADP": 25.36
    },
    {
        "player_id": "CD_I1009199",
        "name": "Noah Anderson",
        "dob": "2001-02-17",
        "fantasy_average": 100.5,
        "team": "GC",
        "rank": 19,
        "career_avg": 86.358,
        "positions": [
            "MID"
        ],
        "rankADP": 25.5
    },
    {
        "player_id": "CD_I998145",
        "name": "Sean Darcy",
        "dob": "1998-06-12",
        "fantasy_average": 95.4,
        "team": "FR",
        "rank": 25,
        "career_avg": 80.6771,
        "positions": [
            "RUC"
        ],
        "rankADP": 25.92
    },
    {
        "player_id": "CD_I298268",
        "name": "Liam Duggan",
        "dob": "1996-12-11",
        "fantasy_average": 96.3,
        "team": "WC",
        "rank": 27,
        "career_avg": 71.7237,
        "positions": [
            "DEF"
        ],
        "rankADP": 28.06
    },
    {
        "player_id": "CD_I295467",
        "name": "Jack Macrae",
        "dob": "1994-08-03",
        "fantasy_average": 91.8,
        "team": "WB",
        "rank": 26,
        "career_avg": 102.8716,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 30.29
    },
    {
        "player_id": "CD_I1006314",
        "name": "Dylan Moore",
        "dob": "1999-08-04",
        "fantasy_average": 88,
        "team": "HW",
        "rank": 30,
        "career_avg": 80.5067,
        "positions": [
            "FWD"
        ],
        "rankADP": 30.85
    },
    {
        "player_id": "CD_I295136",
        "name": "Caleb Daniel",
        "dob": "1996-07-07",
        "fantasy_average": 89.9,
        "team": "WB",
        "rank": 29,
        "career_avg": 81.0788,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 31.3
    },
    {
        "player_id": "CD_I994295",
        "name": "Dan Houston",
        "dob": "1997-05-12",
        "fantasy_average": 92.7,
        "team": "PA",
        "rank": 35,
        "career_avg": 81.0432,
        "positions": [
            "DEF"
        ],
        "rankADP": 32.79
    },
    {
        "player_id": "CD_I1002267",
        "name": "Luke Davies-Uniacke",
        "dob": "1999-06-08",
        "fantasy_average": 97.4,
        "team": "NM",
        "rank": 34,
        "career_avg": 76.2824,
        "positions": [
            "MID"
        ],
        "rankADP": 33.43
    },
    {
        "player_id": "CD_I1009260",
        "name": "Sam Flanders",
        "dob": "2001-07-24",
        "fantasy_average": 89.6,
        "team": "GC",
        "rank": 47,
        "career_avg": 62.6977,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 33.52
    },
    {
        "player_id": "CD_I296205",
        "name": "Jack Steele",
        "dob": "1995-12-13",
        "fantasy_average": 97.9,
        "team": "SK",
        "rank": 32,
        "career_avg": 97.3484,
        "positions": [
            "MID"
        ],
        "rankADP": 34.19
    },
    {
        "player_id": "CD_I1009399",
        "name": "Luke Jackson",
        "dob": "2001-09-29",
        "fantasy_average": 84.7,
        "team": "FR",
        "rank": 48,
        "career_avg": 70.0714,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 36.28
    },
    {
        "player_id": "CD_I1002239",
        "name": "Adam Cerra",
        "dob": "1999-10-07",
        "fantasy_average": 96.6,
        "team": "CA",
        "rank": 36,
        "career_avg": 75.9381,
        "positions": [
            "MID"
        ],
        "rankADP": 39.1
    },
    {
        "player_id": "CD_I1008436",
        "name": "Kieren Briggs",
        "dob": "1999-10-06",
        "fantasy_average": 94.1,
        "team": "GWS",
        "rank": 39,
        "career_avg": 79.9565,
        "positions": [
            "RUC"
        ],
        "rankADP": 39.2
    },
    {
        "player_id": "CD_I993993",
        "name": "Shai Bolton",
        "dob": "1998-12-08",
        "fantasy_average": 86.8,
        "team": "RI",
        "rank": 44,
        "career_avg": 71.5333,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 39.7
    },
    {
        "player_id": "CD_I992049",
        "name": "Jayden Short",
        "dob": "1996-01-24",
        "fantasy_average": 92.5,
        "team": "RI",
        "rank": 46,
        "career_avg": 79.0699,
        "positions": [
            "DEF"
        ],
        "rankADP": 41.11
    },
    {
        "player_id": "CD_I293222",
        "name": "Rory Laird",
        "dob": "1993-12-29",
        "fantasy_average": 109.2,
        "team": "AD",
        "rank": 33,
        "career_avg": 96.2212,
        "positions": [
            "MID"
        ],
        "rankADP": 41.58
    },
    {
        "player_id": "CD_I296347",
        "name": "Josh Kelly",
        "dob": "1995-02-12",
        "fantasy_average": 97.9,
        "team": "GWS",
        "rank": 43,
        "career_avg": 95.776,
        "positions": [
            "MID"
        ],
        "rankADP": 42.4
    },
    {
        "player_id": "CD_I997078",
        "name": "Mason Redman",
        "dob": "1997-08-26",
        "fantasy_average": 85.8,
        "team": "ES",
        "rank": 53,
        "career_avg": 72.0594,
        "positions": [
            "DEF"
        ],
        "rankADP": 43.96
    },
    {
        "player_id": "CD_I1012014",
        "name": "Chad Warner",
        "dob": "2001-05-19",
        "fantasy_average": 92.7,
        "team": "SY",
        "rank": 40,
        "career_avg": 83.6182,
        "positions": [
            "MID"
        ],
        "rankADP": 45.36
    },
    {
        "player_id": "CD_I1006130",
        "name": "Bailey Smith",
        "dob": "2000-12-07",
        "fantasy_average": 83.3,
        "team": "WB",
        "rank": 61,
        "career_avg": 82.25,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 45.94
    },
    {
        "player_id": "CD_I1008550",
        "name": "Will Day",
        "dob": "2001-06-05",
        "fantasy_average": 95.3,
        "team": "HW",
        "rank": 45,
        "career_avg": 74.7037,
        "positions": [
            "MID"
        ],
        "rankADP": 46.11
    },
    {
        "player_id": "CD_I294307",
        "name": "Brad Crouch",
        "dob": "1994-01-14",
        "fantasy_average": 103.3,
        "team": "SK",
        "rank": 37,
        "career_avg": 97.7468,
        "positions": [
            "MID"
        ],
        "rankADP": 48.27
    },
    {
        "player_id": "CD_I1004965",
        "name": "Tristan Xerri",
        "dob": "1999-03-15",
        "fantasy_average": 66,
        "team": "NM",
        "rank": 49,
        "career_avg": 54.0303,
        "positions": [
            "RUC"
        ],
        "rankADP": 48.3
    },
    {
        "player_id": "CD_I1020895",
        "name": "Jai Newcombe",
        "dob": "2001-08-02",
        "fantasy_average": 93.3,
        "team": "HW",
        "rank": 54,
        "career_avg": 86.56,
        "positions": [
            "MID"
        ],
        "rankADP": 52.08
    },
    {
        "player_id": "CD_I295344",
        "name": "Toby Greene",
        "dob": "1993-09-25",
        "fantasy_average": 88.5,
        "team": "GWS",
        "rank": 28,
        "career_avg": 85.7582,
        "positions": [
            "FWD"
        ],
        "rankADP": 52.86
    },
    {
        "player_id": "CD_I996731",
        "name": "Charlie Curnow",
        "dob": "1997-02-03",
        "fantasy_average": 86.8,
        "team": "CA",
        "rank": 79,
        "career_avg": 73.2523,
        "positions": [
            "FWD"
        ],
        "rankADP": 52.97
    },
    {
        "player_id": "CD_I1009253",
        "name": "Lachie Ash",
        "dob": "2001-06-21",
        "fantasy_average": 84.3,
        "team": "GWS",
        "rank": 64,
        "career_avg": 70.8533,
        "positions": [
            "DEF"
        ],
        "rankADP": 53.16
    },
    {
        "player_id": "CD_I298539",
        "name": "Isaac Heeney",
        "dob": "1996-05-05",
        "fantasy_average": 80,
        "team": "SY",
        "rank": 69,
        "career_avg": 82.6319,
        "positions": [
            "FWD"
        ],
        "rankADP": 54.46
    },
    {
        "player_id": "CD_I998102",
        "name": "Andrew McGrath",
        "dob": "1998-06-02",
        "fantasy_average": 81.8,
        "team": "ES",
        "rank": 62,
        "career_avg": 77.0305,
        "positions": [
            "DEF"
        ],
        "rankADP": 56.1
    },
    {
        "player_id": "CD_I298272",
        "name": "Touk Miller",
        "dob": "1996-02-22",
        "fantasy_average": 96.2,
        "team": "GC",
        "rank": 55,
        "career_avg": 90.7514,
        "positions": [
            "MID"
        ],
        "rankADP": 56.98
    },
    {
        "player_id": "CD_I298174",
        "name": "Toby Nankervis",
        "dob": "1994-08-12",
        "fantasy_average": 102.3,
        "team": "RI",
        "rank": 41,
        "career_avg": 84.0656,
        "positions": [
            "RUC"
        ],
        "rankADP": 57.47
    },
    {
        "player_id": "CD_I990291",
        "name": "Darcy Cameron",
        "dob": "1995-07-18",
        "fantasy_average": 84,
        "team": "CW",
        "rank": 52,
        "career_avg": 73.2813,
        "positions": [
            "RUC"
        ],
        "rankADP": 57.65
    },
    {
        "player_id": "CD_I298279",
        "name": "Angus Brayshaw",
        "dob": "1996-01-09",
        "fantasy_average": 85.3,
        "team": "ME",
        "rank": 68,
        "career_avg": 81.0506,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 58.39
    },
    {
        "player_id": "CD_I1009208",
        "name": "Matt Rowell",
        "dob": "2001-07-01",
        "fantasy_average": 92,
        "team": "GC",
        "rank": 56,
        "career_avg": 77.1452,
        "positions": [
            "MID"
        ],
        "rankADP": 61.99
    },
    {
        "player_id": "CD_I1005054",
        "name": "Josh Daicos",
        "dob": "1998-11-26",
        "fantasy_average": 94.7,
        "team": "CW",
        "rank": 57,
        "career_avg": 77.2421,
        "positions": [
            "MID"
        ],
        "rankADP": 62.47
    },
    {
        "player_id": "CD_I996708",
        "name": "Bailey Dale",
        "dob": "1996-07-22",
        "fantasy_average": 85.3,
        "team": "WB",
        "rank": 73,
        "career_avg": 71.784,
        "positions": [
            "DEF"
        ],
        "rankADP": 62.77
    },
    {
        "player_id": "CD_I1006059",
        "name": "Keidean Coleman",
        "dob": "2000-03-31",
        "fantasy_average": 69.6,
        "team": "BL",
        "rank": 65,
        "career_avg": 62.9434,
        "positions": [
            "DEF"
        ],
        "rankADP": 64.32
    },
    {
        "player_id": "CD_I1023272",
        "name": "Mitch Owens",
        "dob": "2003-09-24",
        "fantasy_average": 73.9,
        "team": "SK",
        "rank": 92,
        "career_avg": 68.7931,
        "positions": [
            "FWD"
        ],
        "rankADP": 64.42
    },
    {
        "player_id": "CD_I993946",
        "name": "Ben Keays",
        "dob": "1997-02-23",
        "fantasy_average": 77.3,
        "team": "AD",
        "rank": 78,
        "career_avg": 79.1239,
        "positions": [
            "FWD"
        ],
        "rankADP": 64.86
    },
    {
        "player_id": "CD_I1017051",
        "name": "Josh Rachele",
        "dob": "2003-04-11",
        "fantasy_average": 71.9,
        "team": "AD",
        "rank": 81,
        "career_avg": 64.2941,
        "positions": [
            "FWD"
        ],
        "rankADP": 65.52
    },
    {
        "player_id": "CD_I1006103",
        "name": "Jye Caldwell",
        "dob": "2000-09-28",
        "fantasy_average": 75.1,
        "team": "ES",
        "rank": 91,
        "career_avg": 70.4444,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 65.63
    },
    {
        "player_id": "CD_I1001026",
        "name": "Jordan Ridley",
        "dob": "1998-10-20",
        "fantasy_average": 80.8,
        "team": "ES",
        "rank": 75,
        "career_avg": 75.619,
        "positions": [
            "DEF"
        ],
        "rankADP": 66.3
    },
    {
        "player_id": "CD_I294305",
        "name": "Lachie Whitfield",
        "dob": "1994-07-18",
        "fantasy_average": 94.7,
        "team": "GWS",
        "rank": 63,
        "career_avg": 90.4742,
        "positions": [
            "DEF"
        ],
        "rankADP": 67.24
    },
    {
        "player_id": "CD_I1000978",
        "name": "Hugh McCluggage",
        "dob": "1998-03-03",
        "fantasy_average": 89.3,
        "team": "BL",
        "rank": 58,
        "career_avg": 86.0979,
        "positions": [
            "MID"
        ],
        "rankADP": 68.86
    },
    {
        "player_id": "CD_I291969",
        "name": "Stephen Coniglio",
        "dob": "1993-12-15",
        "fantasy_average": 101.6,
        "team": "GWS",
        "rank": 38,
        "career_avg": 94.2402,
        "positions": [
            "MID"
        ],
        "rankADP": 71.38
    },
    {
        "player_id": "CD_I297907",
        "name": "Nic Newman",
        "dob": "1993-01-15",
        "fantasy_average": 98,
        "team": "CA",
        "rank": 51,
        "career_avg": 86.4231,
        "positions": [
            "DEF"
        ],
        "rankADP": 74.16
    },
    {
        "player_id": "CD_I1017094",
        "name": "Connor Macdonald",
        "dob": "2003-01-13",
        "fantasy_average": 70.7,
        "team": "HW",
        "rank": 100,
        "career_avg": 63.775,
        "positions": [
            "FWD"
        ],
        "rankADP": 74.67
    },
    {
        "player_id": "CD_I1023517",
        "name": "Will Ashcroft",
        "dob": "2004-05-06",
        "fantasy_average": 82.9,
        "team": "BL",
        "rank": 59,
        "career_avg": 82.8889,
        "positions": [
            "MID"
        ],
        "rankADP": 75.52
    },
    {
        "player_id": "CD_I293957",
        "name": "Brodie Grundy",
        "dob": "1994-04-15",
        "fantasy_average": 75,
        "team": "SY",
        "rank": 42,
        "career_avg": 98.0703,
        "positions": [
            "RUC"
        ],
        "rankADP": 77.77
    },
    {
        "player_id": "CD_I291800",
        "name": "Tom Stewart",
        "dob": "1993-03-15",
        "fantasy_average": 96.3,
        "team": "GE",
        "rank": 66,
        "career_avg": 86.4925,
        "positions": [
            "DEF"
        ],
        "rankADP": 78.06
    },
    {
        "player_id": "CD_I1008280",
        "name": "Ed Richards",
        "dob": "1999-07-03",
        "fantasy_average": 79.8,
        "team": "WB",
        "rank": 93,
        "career_avg": 59.901,
        "positions": [
            "DEF"
        ],
        "rankADP": 78.16
    },
    {
        "player_id": "CD_I1000860",
        "name": "Lachie Schultz",
        "dob": "1997-11-30",
        "fantasy_average": 78.5,
        "team": "CW",
        "rank": 106,
        "career_avg": 62.6477,
        "positions": [
            "FWD"
        ],
        "rankADP": 79.73
    },
    {
        "player_id": "CD_I1006152",
        "name": "Jordan Clark",
        "dob": "2000-10-16",
        "fantasy_average": 76.5,
        "team": "FR",
        "rank": 94,
        "career_avg": 71.6892,
        "positions": [
            "DEF"
        ],
        "rankADP": 79.92
    },
    {
        "player_id": "CD_I298421",
        "name": "Jade Gresham",
        "dob": "1997-08-24",
        "fantasy_average": 73.6,
        "team": "ES",
        "rank": 102,
        "career_avg": 72.2593,
        "positions": [
            "FWD"
        ],
        "rankADP": 80.03
    },
    {
        "player_id": "CD_I1000981",
        "name": "Daniel Rioli",
        "dob": "1997-04-16",
        "fantasy_average": 80.3,
        "team": "RI",
        "rank": 74,
        "career_avg": 61.9932,
        "positions": [
            "DEF"
        ],
        "rankADP": 80.28
    },
    {
        "player_id": "CD_I1026850",
        "name": "Nic Martin",
        "dob": "2001-04-03",
        "fantasy_average": 85.2,
        "team": "ES",
        "rank": 76,
        "career_avg": 82.5909,
        "positions": [
            "MID"
        ],
        "rankADP": 81.75
    },
    {
        "player_id": "CD_I993998",
        "name": "Jy Simpkin",
        "dob": "1998-03-05",
        "fantasy_average": 75.8,
        "team": "NM",
        "rank": 60,
        "career_avg": 74.7985,
        "positions": [
            "MID"
        ],
        "rankADP": 82.45
    },
    {
        "player_id": "CD_I990704",
        "name": "Patrick Cripps",
        "dob": "1995-03-18",
        "fantasy_average": 88.4,
        "team": "CA",
        "rank": 72,
        "career_avg": 93.0222,
        "positions": [
            "MID"
        ],
        "rankADP": 83.43
    },
    {
        "player_id": "CD_I1023492",
        "name": "Harley Reid",
        "dob": "2005-04-17",
        "fantasy_average": 0,
        "team": "WC",
        "rank": 82,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 84.09
    },
    {
        "player_id": "CD_I998130",
        "name": "Ben Ainsworth",
        "dob": "1998-02-10",
        "fantasy_average": 74.1,
        "team": "GC",
        "rank": 107,
        "career_avg": 67.7778,
        "positions": [
            "FWD"
        ],
        "rankADP": 85.79
    },
    {
        "player_id": "CD_I1002312",
        "name": "Zac Bailey",
        "dob": "1999-09-23",
        "fantasy_average": 72.4,
        "team": "BL",
        "rank": 103,
        "career_avg": 65.0283,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 85.81
    },
    {
        "player_id": "CD_I1007881",
        "name": "Wil Powell",
        "dob": "1999-08-26",
        "fantasy_average": 82.1,
        "team": "GC",
        "rank": 101,
        "career_avg": 63.5747,
        "positions": [
            "DEF"
        ],
        "rankADP": 86.24
    },
    {
        "player_id": "CD_I1023500",
        "name": "Bailey Humphrey",
        "dob": "2004-09-11",
        "fantasy_average": 51.3,
        "team": "GC",
        "rank": 99,
        "career_avg": 51.3158,
        "positions": [
            "FWD"
        ],
        "rankADP": 87.14
    },
    {
        "player_id": "CD_I296359",
        "name": "Christian Salem",
        "dob": "1995-07-15",
        "fantasy_average": 77.5,
        "team": "ME",
        "rank": 96,
        "career_avg": 76.5973,
        "positions": [
            "DEF"
        ],
        "rankADP": 90.11
    },
    {
        "player_id": "CD_I298630",
        "name": "Kyle Langford",
        "dob": "1996-12-01",
        "fantasy_average": 73,
        "team": "ES",
        "rank": 105,
        "career_avg": 71.1783,
        "positions": [
            "FWD"
        ],
        "rankADP": 92
    },
    {
        "player_id": "CD_I1017088",
        "name": "Ben Hobbs",
        "dob": "2003-09-16",
        "fantasy_average": 76.5,
        "team": "ES",
        "rank": 86,
        "career_avg": 69.2353,
        "positions": [
            "MID"
        ],
        "rankADP": 94.62
    },
    {
        "player_id": "CD_I1004938",
        "name": "Gryan Miers",
        "dob": "1999-03-30",
        "fantasy_average": 75.5,
        "team": "GE",
        "rank": 109,
        "career_avg": 66.6022,
        "positions": [
            "FWD"
        ],
        "rankADP": 94.83
    },
    {
        "player_id": "CD_I295518",
        "name": "Sam Docherty",
        "dob": "1993-10-17",
        "fantasy_average": 104.5,
        "team": "CA",
        "rank": 70,
        "career_avg": 93.2744,
        "positions": [
            "MID"
        ],
        "rankADP": 94.86
    },
    {
        "player_id": "CD_I993107",
        "name": "Harry Himmelberg",
        "dob": "1996-05-08",
        "fantasy_average": 72.3,
        "team": "GWS",
        "rank": 97,
        "career_avg": 62.529,
        "positions": [
            "DEF"
        ],
        "rankADP": 97.63
    },
    {
        "player_id": "CD_I994185",
        "name": "Jordan De Goey",
        "dob": "1996-03-15",
        "fantasy_average": 86.8,
        "team": "CW",
        "rank": 85,
        "career_avg": 78.2621,
        "positions": [
            "MID"
        ],
        "rankADP": 98.12
    },
    {
        "player_id": "CD_I1023785",
        "name": "Elijah Tsatas",
        "dob": "2004-10-18",
        "fantasy_average": 64.3,
        "team": "ES",
        "rank": 104,
        "career_avg": 64.25,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 99.02
    },
    {
        "player_id": "CD_I1011640",
        "name": "Jason Horne-Francis",
        "dob": "2003-06-21",
        "fantasy_average": 68,
        "team": "PA",
        "rank": 87,
        "career_avg": 65.5641,
        "positions": [
            "MID"
        ],
        "rankADP": 99.68
    },
    {
        "player_id": "CD_I294518",
        "name": "Joe Daniher",
        "dob": "1994-03-04",
        "fantasy_average": 76.2,
        "team": "BL",
        "rank": 80,
        "career_avg": 67.6845,
        "positions": [
            "FWD"
        ],
        "rankADP": 99.98
    },
    {
        "player_id": "CD_I1009378",
        "name": "Trent Rivers",
        "dob": "2001-07-30",
        "fantasy_average": 76.5,
        "team": "ME",
        "rank": 114,
        "career_avg": 62.0714,
        "positions": [
            "DEF"
        ],
        "rankADP": 100.67
    },
    {
        "player_id": "CD_I297523",
        "name": "Reilly O'Brien",
        "dob": "1995-08-20",
        "fantasy_average": 88.4,
        "team": "AD",
        "rank": 83,
        "career_avg": 89.66,
        "positions": [
            "RUC"
        ],
        "rankADP": 101.66
    },
    {
        "player_id": "CD_I297354",
        "name": "Karl Amon",
        "dob": "1995-08-19",
        "fantasy_average": 86.8,
        "team": "HW",
        "rank": 98,
        "career_avg": 78.4071,
        "positions": [
            "MID"
        ],
        "rankADP": 102.23
    },
    {
        "player_id": "CD_I296324",
        "name": "Jesse Hogan",
        "dob": "1995-02-12",
        "fantasy_average": 73.9,
        "team": "GWS",
        "rank": 110,
        "career_avg": 74.8088,
        "positions": [
            "FWD"
        ],
        "rankADP": 102.42
    },
    {
        "player_id": "CD_I999827",
        "name": "Zac Fisher",
        "dob": "1998-06-15",
        "fantasy_average": 69,
        "team": "NM",
        "rank": 111,
        "career_avg": 62.2056,
        "positions": [
            "FWD"
        ],
        "rankADP": 103.18
    },
    {
        "player_id": "CD_I290847",
        "name": "Dustin Martin",
        "dob": "1991-06-26",
        "fantasy_average": 90,
        "team": "RI",
        "rank": 77,
        "career_avg": 95.6381,
        "positions": [
            "FWD"
        ],
        "rankADP": 107.82
    },
    {
        "player_id": "CD_I1002222",
        "name": "James Worpel",
        "dob": "1999-01-24",
        "fantasy_average": 86.3,
        "team": "HW",
        "rank": 117,
        "career_avg": 80.35,
        "positions": [
            "MID"
        ],
        "rankADP": 108.25
    },
    {
        "player_id": "CD_I993794",
        "name": "Blake Hardwick",
        "dob": "1997-02-05",
        "fantasy_average": 81,
        "team": "HW",
        "rank": 112,
        "career_avg": 68.6966,
        "positions": [
            "DEF"
        ],
        "rankADP": 108.32
    },
    {
        "player_id": "CD_I1001195",
        "name": "Izak Rankine",
        "dob": "2000-04-23",
        "fantasy_average": 74.2,
        "team": "AD",
        "rank": 141,
        "career_avg": 59.5882,
        "positions": [
            "FWD"
        ],
        "rankADP": 109.06
    },
    {
        "player_id": "CD_I293535",
        "name": "Lachie Neale",
        "dob": "1993-05-24",
        "fantasy_average": 97,
        "team": "BL",
        "rank": 71,
        "career_avg": 99.0093,
        "positions": [
            "MID"
        ],
        "rankADP": 109.31
    },
    {
        "player_id": "CD_I1015873",
        "name": "Archie Perkins",
        "dob": "2002-03-26",
        "fantasy_average": 67.3,
        "team": "ES",
        "rank": 115,
        "career_avg": 59.55,
        "positions": [
            "FWD"
        ],
        "rankADP": 111.58
    },
    {
        "player_id": "CD_I298524",
        "name": "Lachie Weller",
        "dob": "1996-02-23",
        "fantasy_average": 83.8,
        "team": "GC",
        "rank": 123,
        "career_avg": 72.8971,
        "positions": [
            "DEF"
        ],
        "rankADP": 111.76
    },
    {
        "player_id": "CD_I1005729",
        "name": "Tarryn Thomas",
        "dob": "2000-03-25",
        "fantasy_average": 79.3,
        "team": "NM",
        "rank": 127,
        "career_avg": 65.6812,
        "positions": [
            "MID"
        ],
        "rankADP": 111.79
    },
    {
        "player_id": "CD_I296254",
        "name": "Jarman Impey",
        "dob": "1995-07-09",
        "fantasy_average": 80.6,
        "team": "HW",
        "rank": 113,
        "career_avg": 63.716,
        "positions": [
            "DEF"
        ],
        "rankADP": 111.81
    },
    {
        "player_id": "CD_I291902",
        "name": "Jack Viney",
        "dob": "1994-04-13",
        "fantasy_average": 100,
        "team": "ME",
        "rank": 89,
        "career_avg": 87.3871,
        "positions": [
            "MID"
        ],
        "rankADP": 112.72
    },
    {
        "player_id": "CD_I295898",
        "name": "Tim Kelly",
        "dob": "1994-07-26",
        "fantasy_average": 98.7,
        "team": "WC",
        "rank": 90,
        "career_avg": 88.5714,
        "positions": [
            "MID"
        ],
        "rankADP": 112.8
    },
    {
        "player_id": "CD_I296422",
        "name": "Callum Wilkie",
        "dob": "1996-03-10",
        "fantasy_average": 87.2,
        "team": "SK",
        "rank": 124,
        "career_avg": 66.3302,
        "positions": [
            "DEF"
        ],
        "rankADP": 114.16
    },
    {
        "player_id": "CD_I993905",
        "name": "Callum Mills",
        "dob": "1997-04-02",
        "fantasy_average": 84.1,
        "team": "SY",
        "rank": 126,
        "career_avg": 84.6259,
        "positions": [
            "MID"
        ],
        "rankADP": 114.25
    },
    {
        "player_id": "CD_I295342",
        "name": "Jake Lloyd",
        "dob": "1993-09-20",
        "fantasy_average": 89.7,
        "team": "SY",
        "rank": 67,
        "career_avg": 89.932,
        "positions": [
            "DEF"
        ],
        "rankADP": 116.15
    },
    {
        "player_id": "CD_I1000223",
        "name": "Liam Baker",
        "dob": "1998-01-27",
        "fantasy_average": 69.8,
        "team": "RI",
        "rank": 132,
        "career_avg": 67.3824,
        "positions": [
            "DEF",
            "FWD"
        ],
        "rankADP": 116.36
    },
    {
        "player_id": "CD_I1006058",
        "name": "Bailey Scott",
        "dob": "2000-07-09",
        "fantasy_average": 85.6,
        "team": "NM",
        "rank": 118,
        "career_avg": 66.4935,
        "positions": [
            "MID"
        ],
        "rankADP": 116.45
    },
    {
        "player_id": "CD_I998128",
        "name": "Alex Witherden",
        "dob": "1998-09-10",
        "fantasy_average": 78.4,
        "team": "WC",
        "rank": 125,
        "career_avg": 83.4,
        "positions": [
            "DEF"
        ],
        "rankADP": 117.19
    },
    {
        "player_id": "CD_I1023477",
        "name": "George Wardlaw",
        "dob": "2004-06-11",
        "fantasy_average": 65,
        "team": "NM",
        "rank": 88,
        "career_avg": 65,
        "positions": [
            "MID"
        ],
        "rankADP": 119.53
    },
    {
        "player_id": "CD_I1015889",
        "name": "Max Holmes",
        "dob": "2002-08-29",
        "fantasy_average": 75.9,
        "team": "GE",
        "rank": 128,
        "career_avg": 68.4091,
        "positions": [
            "MID"
        ],
        "rankADP": 123.31
    },
    {
        "player_id": "CD_I1003130",
        "name": "Patrick Lipinski",
        "dob": "1998-07-17",
        "fantasy_average": 69.7,
        "team": "CW",
        "rank": 135,
        "career_avg": 70.4471,
        "positions": [
            "FWD"
        ],
        "rankADP": 125.66
    },
    {
        "player_id": "CD_I1000887",
        "name": "Mitch Lewis",
        "dob": "1998-10-14",
        "fantasy_average": 71.9,
        "team": "HW",
        "rank": 136,
        "career_avg": 59.0606,
        "positions": [
            "FWD"
        ],
        "rankADP": 127.07
    },
    {
        "player_id": "CD_I296294",
        "name": "Blake Acres",
        "dob": "1995-10-07",
        "fantasy_average": 87.8,
        "team": "CA",
        "rank": 129,
        "career_avg": 74.3714,
        "positions": [
            "MID"
        ],
        "rankADP": 127.61
    },
    {
        "player_id": "CD_I1004095",
        "name": "Jack Lukosius",
        "dob": "2000-08-09",
        "fantasy_average": 72.1,
        "team": "GC",
        "rank": 138,
        "career_avg": 68.0632,
        "positions": [
            "FWD"
        ],
        "rankADP": 129.35
    },
    {
        "player_id": "CD_I290799",
        "name": "Tom Liberatore",
        "dob": "1992-05-16",
        "fantasy_average": 103.3,
        "team": "WB",
        "rank": 121,
        "career_avg": 87.6782,
        "positions": [
            "MID"
        ],
        "rankADP": 130.24
    },
    {
        "player_id": "CD_I1013133",
        "name": "Braeden Campbell",
        "dob": "2002-02-04",
        "fantasy_average": 65.2,
        "team": "SY",
        "rank": 131,
        "career_avg": 57.4286,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 130.54
    },
    {
        "player_id": "CD_I290528",
        "name": "Max Gawn",
        "dob": "1991-12-30",
        "fantasy_average": 92.1,
        "team": "ME",
        "rank": 50,
        "career_avg": 97.6032,
        "positions": [
            "RUC"
        ],
        "rankADP": 131.62
    },
    {
        "player_id": "CD_I998529",
        "name": "Ivan Soldo",
        "dob": "1996-04-14",
        "fantasy_average": 78.6,
        "team": "PA",
        "rank": 137,
        "career_avg": 59.9074,
        "positions": [
            "RUC"
        ],
        "rankADP": 132.02
    },
    {
        "player_id": "CD_I297401",
        "name": "Matt Crouch",
        "dob": "1995-04-21",
        "fantasy_average": 89.3,
        "team": "AD",
        "rank": 144,
        "career_avg": 93.5956,
        "positions": [
            "MID"
        ],
        "rankADP": 133.18
    },
    {
        "player_id": "CD_I291776",
        "name": "Taylor Adams",
        "dob": "1993-09-20",
        "fantasy_average": 76.5,
        "team": "SY",
        "rank": 108,
        "career_avg": 92.5525,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 133.98
    },
    {
        "player_id": "CD_I1020670",
        "name": "Elijah Hewett",
        "dob": "2004-05-27",
        "fantasy_average": 46.3,
        "team": "WC",
        "rank": 139,
        "career_avg": 46.2857,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 134.46
    },
    {
        "player_id": "CD_I992010",
        "name": "Brayden Maynard",
        "dob": "1996-09-20",
        "fantasy_average": 74.6,
        "team": "CW",
        "rank": 142,
        "career_avg": 73.5407,
        "positions": [
            "DEF"
        ],
        "rankADP": 135.65
    },
    {
        "player_id": "CD_I294674",
        "name": "Nick Vlastuin",
        "dob": "1994-04-19",
        "fantasy_average": 81.2,
        "team": "RI",
        "rank": 130,
        "career_avg": 71.7538,
        "positions": [
            "DEF"
        ],
        "rankADP": 135.8
    },
    {
        "player_id": "CD_I992059",
        "name": "Sam Switkowski",
        "dob": "1996-11-20",
        "fantasy_average": 63.1,
        "team": "FR",
        "rank": 140,
        "career_avg": 59.8485,
        "positions": [
            "FWD"
        ],
        "rankADP": 136.6
    },
    {
        "player_id": "CD_I1023025",
        "name": "Reuben Ginbey",
        "dob": "2004-09-10",
        "fantasy_average": 57.9,
        "team": "WC",
        "rank": 120,
        "career_avg": 57.9412,
        "positions": [
            "MID"
        ],
        "rankADP": 137.77
    },
    {
        "player_id": "CD_I291790",
        "name": "Adam Treloar",
        "dob": "1993-03-09",
        "fantasy_average": 105.3,
        "team": "WB",
        "rank": 122,
        "career_avg": 102.565,
        "positions": [
            "MID"
        ],
        "rankADP": 138.98
    },
    {
        "player_id": "CD_I1000072",
        "name": "John Noble",
        "dob": "1997-03-25",
        "fantasy_average": 81,
        "team": "CW",
        "rank": 157,
        "career_avg": 72.1059,
        "positions": [
            "DEF"
        ],
        "rankADP": 139.45
    },
    {
        "player_id": "CD_I1005988",
        "name": "Liam Henry",
        "dob": "2001-08-28",
        "fantasy_average": 76.8,
        "team": "SK",
        "rank": 145,
        "career_avg": 53.381,
        "positions": [
            "MID"
        ],
        "rankADP": 141.48
    },
    {
        "player_id": "CD_I1020137",
        "name": "Mattaes Phillipou",
        "dob": "2004-12-27",
        "fantasy_average": 52.2,
        "team": "SK",
        "rank": 134,
        "career_avg": 52.2174,
        "positions": [
            "FWD"
        ],
        "rankADP": 142.48
    },
    {
        "player_id": "CD_I293845",
        "name": "Jeremy Cameron",
        "dob": "1993-04-01",
        "fantasy_average": 83,
        "team": "GE",
        "rank": 133,
        "career_avg": 72.9146,
        "positions": [
            "FWD"
        ],
        "rankADP": 143.4
    },
    {
        "player_id": "CD_I1024272",
        "name": "Colby McKercher",
        "dob": "2005-04-12",
        "fantasy_average": 0,
        "team": "NM",
        "rank": 143,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 144.22
    },
    {
        "player_id": "CD_I1004863",
        "name": "Mitchell Hinge",
        "dob": "1998-06-26",
        "fantasy_average": 75.7,
        "team": "AD",
        "rank": 163,
        "career_avg": 67.2558,
        "positions": [
            "DEF"
        ],
        "rankADP": 145.61
    },
    {
        "player_id": "CD_I1023266",
        "name": "Finn Callaghan",
        "dob": "2003-04-26",
        "fantasy_average": 75.8,
        "team": "GWS",
        "rank": 153,
        "career_avg": 71.087,
        "positions": [
            "MID"
        ],
        "rankADP": 145.67
    },
    {
        "player_id": "CD_I998205",
        "name": "Harry Perryman",
        "dob": "1998-12-19",
        "fantasy_average": 70.5,
        "team": "GWS",
        "rank": 154,
        "career_avg": 73.8265,
        "positions": [
            "DEF"
        ],
        "rankADP": 145.82
    },
    {
        "player_id": "CD_I993903",
        "name": "Jacob Hopper",
        "dob": "1997-02-06",
        "fantasy_average": 80.8,
        "team": "RI",
        "rank": 149,
        "career_avg": 79.4103,
        "positions": [
            "MID"
        ],
        "rankADP": 148.15
    },
    {
        "player_id": "CD_I296296",
        "name": "Dom Sheed",
        "dob": "1995-04-10",
        "fantasy_average": 89.6,
        "team": "WC",
        "rank": 148,
        "career_avg": 79.4552,
        "positions": [
            "MID"
        ],
        "rankADP": 148.95
    },
    {
        "player_id": "CD_I994386",
        "name": "Tom Atkins",
        "dob": "1995-09-18",
        "fantasy_average": 79.9,
        "team": "GE",
        "rank": 146,
        "career_avg": 67.3579,
        "positions": [
            "MID"
        ],
        "rankADP": 150.18
    },
    {
        "player_id": "CD_I261224",
        "name": "Dayne Zorko",
        "dob": "1989-02-09",
        "fantasy_average": 84.8,
        "team": "BL",
        "rank": 116,
        "career_avg": 94.0676,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 151.08
    },
    {
        "player_id": "CD_I291856",
        "name": "Tom Mitchell",
        "dob": "1993-05-31",
        "fantasy_average": 91.8,
        "team": "CW",
        "rank": 119,
        "career_avg": 106.0924,
        "positions": [
            "MID"
        ],
        "rankADP": 152.32
    },
    {
        "player_id": "CD_I1006028",
        "name": "Nick Blakey",
        "dob": "2000-02-27",
        "fantasy_average": 71.4,
        "team": "SY",
        "rank": 159,
        "career_avg": 61.75,
        "positions": [
            "DEF"
        ],
        "rankADP": 152.57
    },
    {
        "player_id": "CD_I1007124",
        "name": "Conor Nash",
        "dob": "1998-07-28",
        "fantasy_average": 82,
        "team": "HW",
        "rank": 150,
        "career_avg": 63.1429,
        "positions": [
            "MID"
        ],
        "rankADP": 152.88
    },
    {
        "player_id": "CD_I1005521",
        "name": "Oscar McInerney",
        "dob": "1994-07-10",
        "fantasy_average": 82.7,
        "team": "BL",
        "rank": 84,
        "career_avg": 68.6957,
        "positions": [
            "RUC"
        ],
        "rankADP": 154.07
    },
    {
        "player_id": "CD_I1017110",
        "name": "Josh Ward",
        "dob": "2003-08-15",
        "fantasy_average": 74.9,
        "team": "HW",
        "rank": 170,
        "career_avg": 73.3667,
        "positions": [
            "MID"
        ],
        "rankADP": 154.72
    },
    {
        "player_id": "CD_I1005992",
        "name": "Joel Jeffrey",
        "dob": "2002-03-12",
        "fantasy_average": 51.4,
        "team": "GC",
        "rank": 162,
        "career_avg": 47,
        "positions": [
            "DEF",
            "FWD"
        ],
        "rankADP": 155.36
    },
    {
        "player_id": "CD_I296420",
        "name": "Alex Neal-Bullen",
        "dob": "1996-01-09",
        "fantasy_average": 72.7,
        "team": "ME",
        "rank": 164,
        "career_avg": 68.049,
        "positions": [
            "FWD"
        ],
        "rankADP": 155.46
    },
    {
        "player_id": "CD_I296355",
        "name": "Luke McDonald",
        "dob": "1995-02-09",
        "fantasy_average": 75.2,
        "team": "NM",
        "rank": 158,
        "career_avg": 69.8523,
        "positions": [
            "DEF"
        ],
        "rankADP": 155.74
    },
    {
        "player_id": "CD_I990882",
        "name": "Wayne Milera",
        "dob": "1997-09-14",
        "fantasy_average": 71.4,
        "team": "AD",
        "rank": 156,
        "career_avg": 66.4583,
        "positions": [
            "DEF"
        ],
        "rankADP": 155.94
    },
    {
        "player_id": "CD_I998484",
        "name": "Cameron Zurhaar",
        "dob": "1998-05-22",
        "fantasy_average": 64.5,
        "team": "NM",
        "rank": 168,
        "career_avg": 58.2828,
        "positions": [
            "FWD"
        ],
        "rankADP": 156.2
    },
    {
        "player_id": "CD_I1006126",
        "name": "James Rowbottom",
        "dob": "2000-09-19",
        "fantasy_average": 79.3,
        "team": "SY",
        "rank": 152,
        "career_avg": 72.8046,
        "positions": [
            "MID"
        ],
        "rankADP": 156.88
    },
    {
        "player_id": "CD_I292128",
        "name": "Elliot Yeo",
        "dob": "1993-10-01",
        "fantasy_average": 70.1,
        "team": "WC",
        "rank": 95,
        "career_avg": 82.9191,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 157.18
    },
    {
        "player_id": "CD_I1013224",
        "name": "Heath Chapman",
        "dob": "2002-01-31",
        "fantasy_average": 60.3,
        "team": "FR",
        "rank": 160,
        "career_avg": 64.6667,
        "positions": [
            "DEF"
        ],
        "rankADP": 158.45
    },
    {
        "player_id": "CD_I1001396",
        "name": "Isaac Cumming",
        "dob": "1998-08-11",
        "fantasy_average": 68.3,
        "team": "GWS",
        "rank": 161,
        "career_avg": 77.4571,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 159.32
    },
    {
        "player_id": "CD_I1006114",
        "name": "Bailey J. Williams",
        "dob": "2000-04-17",
        "fantasy_average": 76.7,
        "team": "WC",
        "rank": 165,
        "career_avg": 61.7755,
        "positions": [
            "RUC"
        ],
        "rankADP": 160.53
    },
    {
        "player_id": "CD_I1002251",
        "name": "Brent Daniels",
        "dob": "1999-03-09",
        "fantasy_average": 70.2,
        "team": "GWS",
        "rank": 167,
        "career_avg": 56.6267,
        "positions": [
            "FWD"
        ],
        "rankADP": 161.7
    },
    {
        "player_id": "CD_I295461",
        "name": "Adam Saad",
        "dob": "1994-07-23",
        "fantasy_average": 73.9,
        "team": "CA",
        "rank": 151,
        "career_avg": 67.422,
        "positions": [
            "DEF"
        ],
        "rankADP": 162.38
    },
    {
        "player_id": "CD_I996464",
        "name": "Darcy Macpherson",
        "dob": "1997-10-29",
        "fantasy_average": 76.1,
        "team": "GC",
        "rank": 166,
        "career_avg": 69.086,
        "positions": [
            "DEF"
        ],
        "rankADP": 163.01
    },
    {
        "player_id": "CD_I993902",
        "name": "Matt Flynn",
        "dob": "1997-09-13",
        "fantasy_average": 73.8,
        "team": "WC",
        "rank": 179,
        "career_avg": 70.4848,
        "positions": [
            "RUC"
        ],
        "rankADP": 164.66
    },
    {
        "player_id": "CD_I294318",
        "name": "Ollie Wines",
        "dob": "1994-10-07",
        "fantasy_average": 77.7,
        "team": "PA",
        "rank": 147,
        "career_avg": 92.0231,
        "positions": [
            "MID"
        ],
        "rankADP": 165.54
    },
    {
        "player_id": "CD_I281065",
        "name": "Mitch Duncan",
        "dob": "1991-06-10",
        "fantasy_average": 91.3,
        "team": "GE",
        "rank": 171,
        "career_avg": 95.9602,
        "positions": [
            "DEF"
        ],
        "rankADP": 166.08
    },
    {
        "player_id": "CD_I1012218",
        "name": "Luke Pedlar",
        "dob": "2002-05-17",
        "fantasy_average": 58.2,
        "team": "AD",
        "rank": 172,
        "career_avg": 54.8333,
        "positions": [
            "FWD"
        ],
        "rankADP": 166.51
    },
    {
        "player_id": "CD_I1023270",
        "name": "Marcus Windhager",
        "dob": "2003-05-16",
        "fantasy_average": 63.2,
        "team": "SK",
        "rank": 169,
        "career_avg": 57.1143,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 166.59
    },
    {
        "player_id": "CD_I998215",
        "name": "Will Setterfield",
        "dob": "1998-02-05",
        "fantasy_average": 92,
        "team": "ES",
        "rank": 176,
        "career_avg": 69.8333,
        "positions": [
            "MID"
        ],
        "rankADP": 166.83
    },
    {
        "player_id": "CD_I1000953",
        "name": "Harry McKay",
        "dob": "1997-12-24",
        "fantasy_average": 69.6,
        "team": "CA",
        "rank": 178,
        "career_avg": 64.3238,
        "positions": [
            "FWD"
        ],
        "rankADP": 168.14
    },
    {
        "player_id": "CD_I294472",
        "name": "Rory Atkins",
        "dob": "1994-07-12",
        "fantasy_average": 74.7,
        "team": "GC",
        "rank": 155,
        "career_avg": 70.8819,
        "positions": [
            "DEF"
        ],
        "rankADP": 168.36
    },
    {
        "player_id": "CD_I1002404",
        "name": "Aaron Naughton",
        "dob": "1999-11-30",
        "fantasy_average": 66.9,
        "team": "WB",
        "rank": 180,
        "career_avg": 62.0172,
        "positions": [
            "FWD"
        ],
        "rankADP": 168.82
    },
    {
        "player_id": "CD_I1000972",
        "name": "Willem Drew",
        "dob": "1998-10-01",
        "fantasy_average": 76.9,
        "team": "PA",
        "rank": 175,
        "career_avg": 74.5263,
        "positions": [
            "MID"
        ],
        "rankADP": 169.57
    },
    {
        "player_id": "CD_I1008089",
        "name": "Isaac Quaynor",
        "dob": "2000-01-15",
        "fantasy_average": 68.5,
        "team": "CW",
        "rank": 191,
        "career_avg": 64.1688,
        "positions": [
            "DEF"
        ],
        "rankADP": 169.87
    },
    {
        "player_id": "CD_I1001017",
        "name": "Nick Larkey",
        "dob": "1998-06-06",
        "fantasy_average": 60,
        "team": "NM",
        "rank": 184,
        "career_avg": 51.9149,
        "positions": [
            "FWD"
        ],
        "rankADP": 170.71
    },
    {
        "player_id": "CD_I996554",
        "name": "Jake Waterman",
        "dob": "1998-05-06",
        "fantasy_average": 74.1,
        "team": "WC",
        "rank": 185,
        "career_avg": 59.9125,
        "positions": [
            "FWD"
        ],
        "rankADP": 171.72
    },
    {
        "player_id": "CD_I1004912",
        "name": "Tom De Koning",
        "dob": "1999-07-16",
        "fantasy_average": 66.3,
        "team": "CA",
        "rank": 181,
        "career_avg": 59.5789,
        "positions": [
            "RUC"
        ],
        "rankADP": 173.31
    },
    {
        "player_id": "CD_I994385",
        "name": "Jayden Hunt",
        "dob": "1995-04-03",
        "fantasy_average": 76.7,
        "team": "WC",
        "rank": 192,
        "career_avg": 59.1053,
        "positions": [
            "DEF"
        ],
        "rankADP": 177.34
    },
    {
        "player_id": "CD_I990827",
        "name": "Jack Graham",
        "dob": "1998-02-25",
        "fantasy_average": 61,
        "team": "RI",
        "rank": 186,
        "career_avg": 70.7736,
        "positions": [
            "FWD"
        ],
        "rankADP": 178.19
    },
    {
        "player_id": "CD_I1008384",
        "name": "Riley Thilthorpe",
        "dob": "2002-07-07",
        "fantasy_average": 52.9,
        "team": "AD",
        "rank": 177,
        "career_avg": 53.413,
        "positions": [
            "FWD"
        ],
        "rankADP": 178.31
    },
    {
        "player_id": "CD_I1000963",
        "name": "Harry Morrison",
        "dob": "1998-11-12",
        "fantasy_average": 76.5,
        "team": "HW",
        "rank": 183,
        "career_avg": 68.5795,
        "positions": [
            "MID"
        ],
        "rankADP": 181.99
    },
    {
        "player_id": "CD_I998103",
        "name": "Oliver Florent",
        "dob": "1998-07-22",
        "fantasy_average": 71,
        "team": "SY",
        "rank": 197,
        "career_avg": 65.9779,
        "positions": [
            "DEF"
        ],
        "rankADP": 182.73
    },
    {
        "player_id": "CD_I1005577",
        "name": "Sam Draper",
        "dob": "1998-09-28",
        "fantasy_average": 66.6,
        "team": "ES",
        "rank": 199,
        "career_avg": 59.4107,
        "positions": [
            "RUC"
        ],
        "rankADP": 183.96
    },
    {
        "player_id": "CD_I294557",
        "name": "Lachie Hunter",
        "dob": "1994-12-13",
        "fantasy_average": 79.2,
        "team": "ME",
        "rank": 174,
        "career_avg": 87.4262,
        "positions": [
            "MID"
        ],
        "rankADP": 184.1
    },
    {
        "player_id": "CD_I1008312",
        "name": "Liam Stocker",
        "dob": "2000-01-23",
        "fantasy_average": 70.5,
        "team": "SK",
        "rank": 193,
        "career_avg": 59.72,
        "positions": [
            "DEF"
        ],
        "rankADP": 185
    },
    {
        "player_id": "CD_I298111",
        "name": "Jeremy Finlayson",
        "dob": "1996-02-09",
        "fantasy_average": 72.6,
        "team": "PA",
        "rank": 211,
        "career_avg": 63.7941,
        "positions": [
            "FWD"
        ],
        "rankADP": 187.81
    },
    {
        "player_id": "CD_I294036",
        "name": "George Hewett",
        "dob": "1995-12-29",
        "fantasy_average": 74.1,
        "team": "CA",
        "rank": 194,
        "career_avg": 71.226,
        "positions": [
            "MID"
        ],
        "rankADP": 188.42
    },
    {
        "player_id": "CD_I1011659",
        "name": "Tom Powell",
        "dob": "2002-03-02",
        "fantasy_average": 57.4,
        "team": "NM",
        "rank": 198,
        "career_avg": 59.8667,
        "positions": [
            "FWD"
        ],
        "rankADP": 188.86
    },
    {
        "player_id": "CD_I1001398",
        "name": "Matthew Kennedy",
        "dob": "1997-04-06",
        "fantasy_average": 74.6,
        "team": "CA",
        "rank": 187,
        "career_avg": 72.6154,
        "positions": [
            "MID"
        ],
        "rankADP": 188.92
    },
    {
        "player_id": "CD_I1013409",
        "name": "James Jordon",
        "dob": "2000-12-20",
        "fantasy_average": 50.3,
        "team": "SY",
        "rank": 210,
        "career_avg": 65.2,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 190.62
    },
    {
        "player_id": "CD_I1023494",
        "name": "Zane Duursma",
        "dob": "2005-08-28",
        "fantasy_average": 0,
        "team": "NM",
        "rank": 202,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 190.98
    },
    {
        "player_id": "CD_I1004870",
        "name": "Zach Guthrie",
        "dob": "1998-06-30",
        "fantasy_average": 70.1,
        "team": "GE",
        "rank": 200,
        "career_avg": 60.3768,
        "positions": [
            "DEF"
        ],
        "rankADP": 194.16
    },
    {
        "player_id": "CD_I1027935",
        "name": "Josh Weddle",
        "dob": "2004-05-25",
        "fantasy_average": 64.5,
        "team": "HW",
        "rank": 189,
        "career_avg": 64.4706,
        "positions": [
            "DEF"
        ],
        "rankADP": 196.77
    },
    {
        "player_id": "CD_I280506",
        "name": "Taylor Walker",
        "dob": "1990-04-25",
        "fantasy_average": 80.4,
        "team": "AD",
        "rank": 209,
        "career_avg": 71.6772,
        "positions": [
            "FWD"
        ],
        "rankADP": 197.1
    },
    {
        "player_id": "CD_I295584",
        "name": "Bradley Hill",
        "dob": "1993-07-09",
        "fantasy_average": 74.5,
        "team": "SK",
        "rank": 215,
        "career_avg": 74.7981,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 197.51
    },
    {
        "player_id": "CD_I296351",
        "name": "Jack Billings",
        "dob": "1995-08-18",
        "fantasy_average": 60.7,
        "team": "ME",
        "rank": 225,
        "career_avg": 83.4837,
        "positions": [
            "FWD"
        ],
        "rankADP": 197.57
    },
    {
        "player_id": "CD_I293871",
        "name": "Jack Crisp",
        "dob": "1993-10-02",
        "fantasy_average": 82.9,
        "team": "CW",
        "rank": 182,
        "career_avg": 89.0792,
        "positions": [
            "MID"
        ],
        "rankADP": 197.69
    },
    {
        "player_id": "CD_I997142",
        "name": "Peter Ladhams",
        "dob": "1998-01-14",
        "fantasy_average": 76.2,
        "team": "SY",
        "rank": 207,
        "career_avg": 69.6458,
        "positions": [
            "RUC"
        ],
        "rankADP": 197.91
    },
    {
        "player_id": "CD_I260257",
        "name": "Scott Pendlebury",
        "dob": "1988-01-07",
        "fantasy_average": 88,
        "team": "CW",
        "rank": 195,
        "career_avg": 100.1364,
        "positions": [
            "MID"
        ],
        "rankADP": 198.46
    },
    {
        "player_id": "CD_I290778",
        "name": "Luke Parker",
        "dob": "1992-10-25",
        "fantasy_average": 89.9,
        "team": "SY",
        "rank": 201,
        "career_avg": 96.5236,
        "positions": [
            "MID"
        ],
        "rankADP": 198.72
    },
    {
        "player_id": "CD_I998133",
        "name": "Jarrod Berry",
        "dob": "1998-02-05",
        "fantasy_average": 73.8,
        "team": "BL",
        "rank": 203,
        "career_avg": 71.5702,
        "positions": [
            "MID"
        ],
        "rankADP": 199.45
    },
    {
        "player_id": "CD_I1020339",
        "name": "Angus Sheldrick",
        "dob": "2003-11-07",
        "fantasy_average": 62.4,
        "team": "SY",
        "rank": 173,
        "career_avg": 58.125,
        "positions": [
            "MID"
        ],
        "rankADP": 199.88
    },
    {
        "player_id": "CD_I291975",
        "name": "Jarrod Witts",
        "dob": "1992-09-13",
        "fantasy_average": 90.8,
        "team": "GC",
        "rank": 196,
        "career_avg": 84.2727,
        "positions": [
            "RUC"
        ],
        "rankADP": 200.42
    },
    {
        "player_id": "CD_I1017109",
        "name": "Jake Soligo",
        "dob": "2003-01-25",
        "fantasy_average": 67.6,
        "team": "AD",
        "rank": 218,
        "career_avg": 63.4324,
        "positions": [
            "MID"
        ],
        "rankADP": 203.49
    },
    {
        "player_id": "CD_I295340",
        "name": "Mason Wood",
        "dob": "1993-09-13",
        "fantasy_average": 91.6,
        "team": "SK",
        "rank": 204,
        "career_avg": 68.9211,
        "positions": [
            "MID"
        ],
        "rankADP": 204.69
    },
    {
        "player_id": "CD_I1008454",
        "name": "Connor Budarick",
        "dob": "2001-04-06",
        "fantasy_average": 73.5,
        "team": "GC",
        "rank": 230,
        "career_avg": 50.4286,
        "positions": [
            "DEF"
        ],
        "rankADP": 205.18
    },
    {
        "player_id": "CD_I296733",
        "name": "Mark Blicavs",
        "dob": "1991-03-28",
        "fantasy_average": 81.5,
        "team": "GE",
        "rank": 206,
        "career_avg": 74.7027,
        "positions": [
            "MID",
            "RUC"
        ],
        "rankADP": 205.62
    },
    {
        "player_id": "CD_I297899",
        "name": "James Harmes",
        "dob": "1995-10-05",
        "fantasy_average": 46.8,
        "team": "WB",
        "rank": 208,
        "career_avg": 72.2324,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 207.43
    },
    {
        "player_id": "CD_I1012805",
        "name": "Tanner Bruhn",
        "dob": "2002-05-27",
        "fantasy_average": 70.7,
        "team": "GE",
        "rank": 231,
        "career_avg": 56.7174,
        "positions": [
            "MID"
        ],
        "rankADP": 207.5
    },
    {
        "player_id": "CD_I290550",
        "name": "Cameron Guthrie",
        "dob": "1992-08-19",
        "fantasy_average": 86.8,
        "team": "GE",
        "rank": 235,
        "career_avg": 80.6667,
        "positions": [
            "MID"
        ],
        "rankADP": 207.95
    },
    {
        "player_id": "CD_I1024023",
        "name": "Daniel Curtin",
        "dob": "2005-03-08",
        "fantasy_average": 0,
        "team": "AD",
        "rank": 212,
        "career_avg": 0,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 208.13
    },
    {
        "player_id": "CD_I294613",
        "name": "Jaeger O'Meara",
        "dob": "1994-02-23",
        "fantasy_average": 75.4,
        "team": "FR",
        "rank": 188,
        "career_avg": 88.2086,
        "positions": [
            "MID"
        ],
        "rankADP": 208.72
    },
    {
        "player_id": "CD_I1009241",
        "name": "Brodie Kemp",
        "dob": "2001-05-01",
        "fantasy_average": 70.1,
        "team": "CA",
        "rank": 205,
        "career_avg": 65.25,
        "positions": [
            "DEF"
        ],
        "rankADP": 209.32
    },
    {
        "player_id": "CD_I993940",
        "name": "Corey Wagner",
        "dob": "1997-03-23",
        "fantasy_average": 72.8,
        "team": "FR",
        "rank": 224,
        "career_avg": 54.1429,
        "positions": [
            "DEF"
        ],
        "rankADP": 209.98
    },
    {
        "player_id": "CD_I295067",
        "name": "James Aish",
        "dob": "1995-10-08",
        "fantasy_average": 73.5,
        "team": "FR",
        "rank": 216,
        "career_avg": 68.8333,
        "positions": [
            "MID"
        ],
        "rankADP": 213.07
    },
    {
        "player_id": "CD_I1017939",
        "name": "Ryley Sanders",
        "dob": "2005-01-21",
        "fantasy_average": 0,
        "team": "WB",
        "rank": 234,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 213.74
    },
    {
        "player_id": "CD_I1016825",
        "name": "Matthew Johnson",
        "dob": "2003-03-16",
        "fantasy_average": 56.7,
        "team": "FR",
        "rank": 221,
        "career_avg": 56.7222,
        "positions": [
            "MID"
        ],
        "rankADP": 216.16
    },
    {
        "player_id": "CD_I1027033",
        "name": "Ethan Read ",
        "dob": "2005-07-07",
        "fantasy_average": 0,
        "team": "GC",
        "rank": 282,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 217.65
    },
    {
        "player_id": "CD_I1004364",
        "name": "Liam Ryan",
        "dob": "1996-10-02",
        "fantasy_average": 72.3,
        "team": "WC",
        "rank": 238,
        "career_avg": 57.5663,
        "positions": [
            "FWD"
        ],
        "rankADP": 218.88
    },
    {
        "player_id": "CD_I291748",
        "name": "Brodie Smith",
        "dob": "1992-01-14",
        "fantasy_average": 81.4,
        "team": "AD",
        "rank": 229,
        "career_avg": 77.7961,
        "positions": [
            "DEF"
        ],
        "rankADP": 219.47
    },
    {
        "player_id": "CD_I1006143",
        "name": "Max King",
        "dob": "2000-07-07",
        "fantasy_average": 57.7,
        "team": "SK",
        "rank": 226,
        "career_avg": 54.3824,
        "positions": [
            "FWD"
        ],
        "rankADP": 219.83
    },
    {
        "player_id": "CD_I1000864",
        "name": "Lachlan Bramble",
        "dob": "1998-04-19",
        "fantasy_average": 62.2,
        "team": "WB",
        "rank": 217,
        "career_avg": 63.6,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 220.7
    },
    {
        "player_id": "CD_I1012829",
        "name": "Will Phillips",
        "dob": "2002-05-22",
        "fantasy_average": 66.8,
        "team": "NM",
        "rank": 227,
        "career_avg": 55.9667,
        "positions": [
            "MID"
        ],
        "rankADP": 220.9
    },
    {
        "player_id": "CD_I1003203",
        "name": "Hayden McLean",
        "dob": "1999-01-20",
        "fantasy_average": 65.6,
        "team": "SY",
        "rank": 272,
        "career_avg": 57.7347,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 222.59
    },
    {
        "player_id": "CD_I1020250",
        "name": "Neil Erasmus",
        "dob": "2003-12-02",
        "fantasy_average": 51.7,
        "team": "FR",
        "rank": 220,
        "career_avg": 53,
        "positions": [
            "MID"
        ],
        "rankADP": 224.46
    },
    {
        "player_id": "CD_I1006096",
        "name": "Xavier Duursma",
        "dob": "2000-07-07",
        "fantasy_average": 66.3,
        "team": "ES",
        "rank": 219,
        "career_avg": 66.9104,
        "positions": [
            "MID"
        ],
        "rankADP": 225.49
    },
    {
        "player_id": "CD_I1006133",
        "name": "Jack Ross",
        "dob": "2000-09-03",
        "fantasy_average": 71.6,
        "team": "RI",
        "rank": 223,
        "career_avg": 62.7193,
        "positions": [
            "MID"
        ],
        "rankADP": 226.84
    },
    {
        "player_id": "CD_I298289",
        "name": "Peter Wright",
        "dob": "1996-09-08",
        "fantasy_average": 58,
        "team": "ES",
        "rank": 228,
        "career_avg": 65.9661,
        "positions": [
            "FWD"
        ],
        "rankADP": 227.59
    },
    {
        "player_id": "CD_I290629",
        "name": "Dyson Heppell",
        "dob": "1992-05-14",
        "fantasy_average": 81.6,
        "team": "ES",
        "rank": 241,
        "career_avg": 94.6489,
        "positions": [
            "DEF"
        ],
        "rankADP": 227.64
    },
    {
        "player_id": "CD_I290627",
        "name": "Dion Prestia",
        "dob": "1992-10-12",
        "fantasy_average": 75.9,
        "team": "RI",
        "rank": 222,
        "career_avg": 89.9643,
        "positions": [
            "MID"
        ],
        "rankADP": 228.66
    },
    {
        "player_id": "CD_I996765",
        "name": "Tom Papley",
        "dob": "1996-07-13",
        "fantasy_average": 66.2,
        "team": "SY",
        "rank": 243,
        "career_avg": 67.6974,
        "positions": [
            "FWD"
        ],
        "rankADP": 229.67
    },
    {
        "player_id": "CD_I297452",
        "name": "Nick Hind",
        "dob": "1994-08-19",
        "fantasy_average": 69.1,
        "team": "ES",
        "rank": 214,
        "career_avg": 69.325,
        "positions": [
            "DEF"
        ],
        "rankADP": 230.15
    },
    {
        "player_id": "CD_I270917",
        "name": "Patrick Dangerfield",
        "dob": "1990-04-05",
        "fantasy_average": 79.9,
        "team": "GE",
        "rank": 239,
        "career_avg": 99.2749,
        "positions": [
            "MID"
        ],
        "rankADP": 231.64
    },
    {
        "player_id": "CD_I1001024",
        "name": "Ned Reeves",
        "dob": "1998-10-31",
        "fantasy_average": 60.9,
        "team": "HW",
        "rank": 246,
        "career_avg": 61.3421,
        "positions": [
            "RUC"
        ],
        "rankADP": 232.23
    },
    {
        "player_id": "CD_I298264",
        "name": "Ed Langdon",
        "dob": "1996-02-01",
        "fantasy_average": 72.4,
        "team": "ME",
        "rank": 236,
        "career_avg": 78.44,
        "positions": [
            "MID"
        ],
        "rankADP": 232.91
    },
    {
        "player_id": "CD_I1002235",
        "name": "Cam Rayner",
        "dob": "1999-10-21",
        "fantasy_average": 63.7,
        "team": "BL",
        "rank": 266,
        "career_avg": 57.4615,
        "positions": [
            "FWD"
        ],
        "rankADP": 235.13
    },
    {
        "player_id": "CD_I294685",
        "name": "Zac Williams",
        "dob": "1994-09-20",
        "fantasy_average": 0,
        "team": "CA",
        "rank": 213,
        "career_avg": 74.728,
        "positions": [
            "DEF"
        ],
        "rankADP": 236.27
    },
    {
        "player_id": "CD_I1004385",
        "name": "Oscar Allen",
        "dob": "1999-03-19",
        "fantasy_average": 64.1,
        "team": "WC",
        "rank": 253,
        "career_avg": 58.6914,
        "positions": [
            "FWD"
        ],
        "rankADP": 236.63
    },
    {
        "player_id": "CD_I294101",
        "name": "Jason Johannisen",
        "dob": "1992-11-08",
        "fantasy_average": 73.5,
        "team": "WB",
        "rank": 245,
        "career_avg": 70.2151,
        "positions": [
            "DEF"
        ],
        "rankADP": 237.01
    },
    {
        "player_id": "CD_I1008541",
        "name": "Kysaiah Pickett",
        "dob": "2001-06-02",
        "fantasy_average": 63.1,
        "team": "ME",
        "rank": 273,
        "career_avg": 56.3333,
        "positions": [
            "FWD"
        ],
        "rankADP": 241.53
    },
    {
        "player_id": "CD_I1011936",
        "name": "Justin McInerney",
        "dob": "2000-08-18",
        "fantasy_average": 70.8,
        "team": "SY",
        "rank": 247,
        "career_avg": 66.3582,
        "positions": [
            "MID"
        ],
        "rankADP": 242.91
    },
    {
        "player_id": "CD_I1017067",
        "name": "Darcy Wilmot",
        "dob": "2003-12-31",
        "fantasy_average": 60.7,
        "team": "BL",
        "rank": 190,
        "career_avg": 60.6957,
        "positions": [
            "DEF"
        ],
        "rankADP": 243.02
    },
    {
        "player_id": "CD_I1009301",
        "name": "Jamarra Ugle-Hagan",
        "dob": "2002-04-04",
        "fantasy_average": 60,
        "team": "WB",
        "rank": 286,
        "career_avg": 53.5349,
        "positions": [
            "FWD"
        ],
        "rankADP": 244.88
    },
    {
        "player_id": "CD_I1002253",
        "name": "Kane Farrell",
        "dob": "1999-03-17",
        "fantasy_average": 64.5,
        "team": "PA",
        "rank": 240,
        "career_avg": 56.1449,
        "positions": [
            "DEF"
        ],
        "rankADP": 245.79
    },
    {
        "player_id": "CD_I293713",
        "name": "Brandon Ellis",
        "dob": "1993-08-03",
        "fantasy_average": 75.6,
        "team": "GC",
        "rank": 237,
        "career_avg": 86.0829,
        "positions": [
            "MID"
        ],
        "rankADP": 245.95
    },
    {
        "player_id": "CD_I993820",
        "name": "Tom Cole",
        "dob": "1997-05-28",
        "fantasy_average": 65.9,
        "team": "WC",
        "rank": 248,
        "career_avg": 54.3488,
        "positions": [
            "DEF"
        ],
        "rankADP": 246.56
    },
    {
        "player_id": "CD_I993799",
        "name": "Brayden Fiorini",
        "dob": "1997-08-22",
        "fantasy_average": 70.8,
        "team": "GC",
        "rank": 250,
        "career_avg": 85.4505,
        "positions": [
            "MID"
        ],
        "rankADP": 247.5
    },
    {
        "player_id": "CD_I1020695",
        "name": "Tom Emmett",
        "dob": "2001-11-30",
        "fantasy_average": 71.5,
        "team": "FR",
        "rank": 249,
        "career_avg": 71.5,
        "positions": [
            "FWD"
        ],
        "rankADP": 250.02
    },
    {
        "player_id": "CD_I998114",
        "name": "Jack Scrimshaw",
        "dob": "1998-09-04",
        "fantasy_average": 66.5,
        "team": "HW",
        "rank": 252,
        "career_avg": 67.6386,
        "positions": [
            "DEF"
        ],
        "rankADP": 250.47
    },
    {
        "player_id": "CD_I291570",
        "name": "Nat Fyfe",
        "dob": "1991-09-18",
        "fantasy_average": 49.3,
        "team": "FR",
        "rank": 265,
        "career_avg": 92.6584,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 250.5
    },
    {
        "player_id": "CD_I1023167",
        "name": "Brady Hough",
        "dob": "2003-03-05",
        "fantasy_average": 61.5,
        "team": "WC",
        "rank": 262,
        "career_avg": 56.1333,
        "positions": [
            "DEF"
        ],
        "rankADP": 250.95
    },
    {
        "player_id": "CD_I280965",
        "name": "Steele Sidebottom",
        "dob": "1991-01-02",
        "fantasy_average": 78.8,
        "team": "CW",
        "rank": 242,
        "career_avg": 95.2938,
        "positions": [
            "MID"
        ],
        "rankADP": 250.99
    },
    {
        "player_id": "CD_I1023537",
        "name": "Jhye Clark",
        "dob": "2004-07-23",
        "fantasy_average": 36,
        "team": "GE",
        "rank": 233,
        "career_avg": 36,
        "positions": [
            "MID"
        ],
        "rankADP": 251.22
    },
    {
        "player_id": "CD_I1002256",
        "name": "Paddy Dow",
        "dob": "1999-10-16",
        "fantasy_average": 56.7,
        "team": "SK",
        "rank": 232,
        "career_avg": 53.0857,
        "positions": [
            "MID"
        ],
        "rankADP": 251.7
    },
    {
        "player_id": "CD_I993878",
        "name": "Shaun Mannagh",
        "dob": "1997-08-06",
        "fantasy_average": 0,
        "team": "GE",
        "rank": 244,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 252.74
    },
    {
        "player_id": "CD_I1006203",
        "name": "Chayce Jones",
        "dob": "2000-01-14",
        "fantasy_average": 67.3,
        "team": "AD",
        "rank": 254,
        "career_avg": 49.44,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 253.4
    },
    {
        "player_id": "CD_I1002264",
        "name": "Hunter Clark",
        "dob": "1999-03-26",
        "fantasy_average": 67.8,
        "team": "SK",
        "rank": 271,
        "career_avg": 66.25,
        "positions": [
            "MID"
        ],
        "rankADP": 255.24
    },
    {
        "player_id": "CD_I992128",
        "name": "Ryan Burton",
        "dob": "1997-01-31",
        "fantasy_average": 64.2,
        "team": "PA",
        "rank": 255,
        "career_avg": 71.3077,
        "positions": [
            "DEF"
        ],
        "rankADP": 256.2
    },
    {
        "player_id": "CD_I992351",
        "name": "Bailey Williams",
        "dob": "1997-10-10",
        "fantasy_average": 69.9,
        "team": "WB",
        "rank": 269,
        "career_avg": 65.2397,
        "positions": [
            "MID"
        ],
        "rankADP": 256.34
    },
    {
        "player_id": "CD_I1023473",
        "name": "Nick Watson",
        "dob": "2005-02-24",
        "fantasy_average": 0,
        "team": "HW",
        "rank": 306,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 257.81
    },
    {
        "player_id": "CD_I993832",
        "name": "Jacob Weitering",
        "dob": "1997-11-23",
        "fantasy_average": 70.4,
        "team": "CA",
        "rank": 270,
        "career_avg": 59.8462,
        "positions": [
            "DEF"
        ],
        "rankADP": 258.01
    },
    {
        "player_id": "CD_I271129",
        "name": "Todd Goldstein",
        "dob": "1988-07-01",
        "fantasy_average": 73.3,
        "team": "ES",
        "rank": 251,
        "career_avg": 88.0175,
        "positions": [
            "RUC"
        ],
        "rankADP": 262.15
    },
    {
        "player_id": "CD_I997033",
        "name": "Brennan Cox",
        "dob": "1998-08-13",
        "fantasy_average": 69.9,
        "team": "FR",
        "rank": 274,
        "career_avg": 57.52,
        "positions": [
            "DEF"
        ],
        "rankADP": 262.81
    },
    {
        "player_id": "CD_I1004848",
        "name": "Dylan Stephens",
        "dob": "2001-01-08",
        "fantasy_average": 54.9,
        "team": "NM",
        "rank": 276,
        "career_avg": 56,
        "positions": [
            "MID"
        ],
        "rankADP": 264.63
    },
    {
        "player_id": "CD_I1012825",
        "name": "Jake Bowey",
        "dob": "2002-09-12",
        "fantasy_average": 62.3,
        "team": "ME",
        "rank": 299,
        "career_avg": 61.9048,
        "positions": [
            "DEF"
        ],
        "rankADP": 264.98
    },
    {
        "player_id": "CD_I1006136",
        "name": "Lachlan Sholl",
        "dob": "2000-03-07",
        "fantasy_average": 67.8,
        "team": "AD",
        "rank": 283,
        "career_avg": 63.7308,
        "positions": [
            "MID"
        ],
        "rankADP": 265.12
    },
    {
        "player_id": "CD_I297255",
        "name": "Mitch McGovern",
        "dob": "1994-10-11",
        "fantasy_average": 70.7,
        "team": "CA",
        "rank": 263,
        "career_avg": 60.4135,
        "positions": [
            "DEF"
        ],
        "rankADP": 266.65
    },
    {
        "player_id": "CD_I294859",
        "name": "Jeremy McGovern",
        "dob": "1992-04-15",
        "fantasy_average": 70.3,
        "team": "WC",
        "rank": 291,
        "career_avg": 67.8625,
        "positions": [
            "DEF"
        ],
        "rankADP": 266.86
    },
    {
        "player_id": "CD_I290832",
        "name": "David Swallow",
        "dob": "1992-11-19",
        "fantasy_average": 72.4,
        "team": "GC",
        "rank": 268,
        "career_avg": 82.2941,
        "positions": [
            "MID"
        ],
        "rankADP": 268.43
    },
    {
        "player_id": "CD_I1005717",
        "name": "Nick Coffield",
        "dob": "1999-10-23",
        "fantasy_average": 0,
        "team": "WB",
        "rank": 261,
        "career_avg": 60.2,
        "positions": [
            "DEF"
        ],
        "rankADP": 268.91
    },
    {
        "player_id": "CD_I1008139",
        "name": "Toby Bedford",
        "dob": "2000-05-27",
        "fantasy_average": 63.7,
        "team": "GWS",
        "rank": 285,
        "career_avg": 54.5385,
        "positions": [
            "FWD"
        ],
        "rankADP": 269.42
    },
    {
        "player_id": "CD_I1015810",
        "name": "Sam Durham",
        "dob": "2001-07-09",
        "fantasy_average": 63,
        "team": "ES",
        "rank": 292,
        "career_avg": 59.1667,
        "positions": [
            "MID"
        ],
        "rankADP": 270.12
    },
    {
        "player_id": "CD_I997846",
        "name": "Conor McKenna",
        "dob": "1996-03-28",
        "fantasy_average": 65.1,
        "team": "BL",
        "rank": 257,
        "career_avg": 62.99,
        "positions": [
            "DEF"
        ],
        "rankADP": 271.2
    },
    {
        "player_id": "CD_I998260",
        "name": "Jack Bowes",
        "dob": "1998-01-26",
        "fantasy_average": 60.7,
        "team": "GE",
        "rank": 258,
        "career_avg": 65.64,
        "positions": [
            "DEF"
        ],
        "rankADP": 271.38
    },
    {
        "player_id": "CD_I280711",
        "name": "Charlie Dixon",
        "dob": "1990-09-23",
        "fantasy_average": 72.3,
        "team": "PA",
        "rank": 287,
        "career_avg": 66.0629,
        "positions": [
            "FWD"
        ],
        "rankADP": 271.75
    },
    {
        "player_id": "CD_I290801",
        "name": "Andrew Gaff",
        "dob": "1992-06-16",
        "fantasy_average": 71.7,
        "team": "WC",
        "rank": 277,
        "career_avg": 92.6756,
        "positions": [
            "MID"
        ],
        "rankADP": 273.57
    },
    {
        "player_id": "CD_I1002227",
        "name": "Jack Higgins",
        "dob": "1999-03-19",
        "fantasy_average": 63.7,
        "team": "SK",
        "rank": 295,
        "career_avg": 63.5253,
        "positions": [
            "FWD"
        ],
        "rankADP": 274.07
    },
    {
        "player_id": "CD_I293801",
        "name": "Jamie Elliott",
        "dob": "1992-08-21",
        "fantasy_average": 66.8,
        "team": "CW",
        "rank": 321,
        "career_avg": 71.5294,
        "positions": [
            "FWD"
        ],
        "rankADP": 274.78
    },
    {
        "player_id": "CD_I1031829",
        "name": "James Trezise",
        "dob": "2002-06-15",
        "fantasy_average": 77,
        "team": "RI",
        "rank": 311,
        "career_avg": 77,
        "positions": [
            "DEF"
        ],
        "rankADP": 274.88
    },
    {
        "player_id": "CD_I999391",
        "name": "Tom Sparrow",
        "dob": "2000-05-31",
        "fantasy_average": 66.6,
        "team": "ME",
        "rank": 297,
        "career_avg": 59.4839,
        "positions": [
            "MID"
        ],
        "rankADP": 274.89
    },
    {
        "player_id": "CD_I280109",
        "name": "Callan Ward",
        "dob": "1990-04-10",
        "fantasy_average": 71.9,
        "team": "GWS",
        "rank": 275,
        "career_avg": 88.8276,
        "positions": [
            "MID"
        ],
        "rankADP": 275.46
    },
    {
        "player_id": "CD_I996059",
        "name": "Harris Andrews",
        "dob": "1996-12-11",
        "fantasy_average": 68.8,
        "team": "BL",
        "rank": 284,
        "career_avg": 57.9138,
        "positions": [
            "DEF"
        ],
        "rankADP": 276.2
    },
    {
        "player_id": "CD_I1018016",
        "name": "Seamus Mitchell",
        "dob": "2002-07-03",
        "fantasy_average": 62.9,
        "team": "HW",
        "rank": 256,
        "career_avg": 62.9286,
        "positions": [
            "DEF"
        ],
        "rankADP": 280.83
    },
    {
        "player_id": "CD_I1001438",
        "name": "Bayley Fritsch",
        "dob": "1996-12-06",
        "fantasy_average": 63.1,
        "team": "ME",
        "rank": 303,
        "career_avg": 64.8889,
        "positions": [
            "FWD"
        ],
        "rankADP": 281.09
    },
    {
        "player_id": "CD_I1008083",
        "name": "Connor Idun",
        "dob": "2000-07-29",
        "fantasy_average": 67,
        "team": "GWS",
        "rank": 289,
        "career_avg": 58.6032,
        "positions": [
            "DEF"
        ],
        "rankADP": 281.28
    },
    {
        "player_id": "CD_I280317",
        "name": "Rhys Stanley",
        "dob": "1990-12-01",
        "fantasy_average": 71.3,
        "team": "GE",
        "rank": 281,
        "career_avg": 68.9245,
        "positions": [
            "RUC"
        ],
        "rankADP": 281.78
    },
    {
        "player_id": "CD_I998129",
        "name": "Will Brodie",
        "dob": "1998-08-23",
        "fantasy_average": 67,
        "team": "FR",
        "rank": 319,
        "career_avg": 80.8824,
        "positions": [
            "MID"
        ],
        "rankADP": 282.67
    },
    {
        "player_id": "CD_I998791",
        "name": "Jamaine Jones",
        "dob": "1998-09-29",
        "fantasy_average": 66.6,
        "team": "WC",
        "rank": 301,
        "career_avg": 57.6154,
        "positions": [
            "DEF"
        ],
        "rankADP": 282.75
    },
    {
        "player_id": "CD_I990609",
        "name": "Charlie Cameron",
        "dob": "1994-07-05",
        "fantasy_average": 63.6,
        "team": "BL",
        "rank": 264,
        "career_avg": 62.918,
        "positions": [
            "FWD"
        ],
        "rankADP": 283.4
    },
    {
        "player_id": "CD_I1001028",
        "name": "Jack Silvagni",
        "dob": "1997-12-17",
        "fantasy_average": 63.4,
        "team": "CA",
        "rank": 314,
        "career_avg": 60.2783,
        "positions": [
            "FWD"
        ],
        "rankADP": 285.08
    },
    {
        "player_id": "CD_I290826",
        "name": "Jamie Cripps",
        "dob": "1992-04-23",
        "fantasy_average": 69.4,
        "team": "WC",
        "rank": 293,
        "career_avg": 69.495,
        "positions": [
            "FWD"
        ],
        "rankADP": 285.12
    },
    {
        "player_id": "CD_I298280",
        "name": "Jayden Laverde",
        "dob": "1996-04-12",
        "fantasy_average": 67.4,
        "team": "ES",
        "rank": 300,
        "career_avg": 59.6111,
        "positions": [
            "DEF"
        ],
        "rankADP": 285.87
    },
    {
        "player_id": "CD_I1011954",
        "name": "Nick Bryan",
        "dob": "2001-10-22",
        "fantasy_average": 54.9,
        "team": "ES",
        "rank": 278,
        "career_avg": 52.3571,
        "positions": [
            "RUC"
        ],
        "rankADP": 286.08
    },
    {
        "player_id": "CD_I293846",
        "name": "Sebastian Ross",
        "dob": "1993-05-07",
        "fantasy_average": 69.9,
        "team": "SK",
        "rank": 288,
        "career_avg": 84.6031,
        "positions": [
            "MID"
        ],
        "rankADP": 286.22
    },
    {
        "player_id": "CD_I992330",
        "name": "Jordon Sweet",
        "dob": "1998-02-02",
        "fantasy_average": 0,
        "team": "PA",
        "rank": 267,
        "career_avg": 61.0909,
        "positions": [
            "RUC"
        ],
        "rankADP": 286.51
    },
    {
        "player_id": "CD_I998390",
        "name": "Changkuoth Jiath",
        "dob": "1999-06-13",
        "fantasy_average": 56.5,
        "team": "HW",
        "rank": 342,
        "career_avg": 62.8,
        "positions": [
            "DEF"
        ],
        "rankADP": 286.51
    },
    {
        "player_id": "CD_I1018335",
        "name": "Brayden Cook",
        "dob": "2002-07-18",
        "fantasy_average": 63,
        "team": "AD",
        "rank": 327,
        "career_avg": 44.0833,
        "positions": [
            "MID"
        ],
        "rankADP": 289.83
    },
    {
        "player_id": "CD_I281085",
        "name": "Steven May",
        "dob": "1992-01-10",
        "fantasy_average": 69.5,
        "team": "ME",
        "rank": 294,
        "career_avg": 64.9792,
        "positions": [
            "DEF"
        ],
        "rankADP": 290.05
    },
    {
        "player_id": "CD_I1017087",
        "name": "Harvey Gallagher",
        "dob": "2003-09-26",
        "fantasy_average": 0,
        "team": "WB",
        "rank": 302,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 290.06
    },
    {
        "player_id": "CD_I1023482",
        "name": "Cam Mackenzie",
        "dob": "2004-01-21",
        "fantasy_average": 48.6,
        "team": "HW",
        "rank": 376,
        "career_avg": 48.6429,
        "positions": [
            "FWD"
        ],
        "rankADP": 290.1
    },
    {
        "player_id": "CD_I1005144",
        "name": "Massimo D'Ambrosio",
        "dob": "2003-06-05",
        "fantasy_average": 41.8,
        "team": "HW",
        "rank": 260,
        "career_avg": 47.9333,
        "positions": [
            "DEF"
        ],
        "rankADP": 290.2
    },
    {
        "player_id": "CD_I997100",
        "name": "Will Hayward",
        "dob": "1998-10-26",
        "fantasy_average": 63,
        "team": "SY",
        "rank": 322,
        "career_avg": 59.0923,
        "positions": [
            "FWD"
        ],
        "rankADP": 290.86
    },
    {
        "player_id": "CD_I291783",
        "name": "Dylan Shiel",
        "dob": "1993-03-09",
        "fantasy_average": 69,
        "team": "ES",
        "rank": 298,
        "career_avg": 86.8842,
        "positions": [
            "MID"
        ],
        "rankADP": 292.84
    },
    {
        "player_id": "CD_I1009195",
        "name": "Dylan Williams",
        "dob": "2001-07-01",
        "fantasy_average": 60,
        "team": "PA",
        "rank": 259,
        "career_avg": 58.619,
        "positions": [
            "DEF"
        ],
        "rankADP": 293.54
    },
    {
        "player_id": "CD_I1023680",
        "name": "Henry Hustwaite",
        "dob": "2004-07-20",
        "fantasy_average": 62.5,
        "team": "HW",
        "rank": 329,
        "career_avg": 62.5,
        "positions": [
            "MID"
        ],
        "rankADP": 295.94
    },
    {
        "player_id": "CD_I1000998",
        "name": "Lachlan Murphy",
        "dob": "1998-12-04",
        "fantasy_average": 62.5,
        "team": "AD",
        "rank": 324,
        "career_avg": 53.4694,
        "positions": [
            "FWD"
        ],
        "rankADP": 296.84
    },
    {
        "player_id": "CD_I295265",
        "name": "Nick Haynes",
        "dob": "1992-05-18",
        "fantasy_average": 66.5,
        "team": "GWS",
        "rank": 313,
        "career_avg": 68.4696,
        "positions": [
            "DEF"
        ],
        "rankADP": 300.03
    },
    {
        "player_id": "CD_I1002245",
        "name": "Noah Balta",
        "dob": "1999-10-23",
        "fantasy_average": 64.7,
        "team": "RI",
        "rank": 318,
        "career_avg": 54.4875,
        "positions": [
            "DEF"
        ],
        "rankADP": 300.56
    },
    {
        "player_id": "CD_I1008154",
        "name": "Matthew Cottrell",
        "dob": "2000-02-29",
        "fantasy_average": 62.3,
        "team": "CA",
        "rank": 330,
        "career_avg": 58,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 303.19
    },
    {
        "player_id": "CD_I1009191",
        "name": "Miles Bergman",
        "dob": "2001-10-18",
        "fantasy_average": 60,
        "team": "PA",
        "rank": 290,
        "career_avg": 63.4902,
        "positions": [
            "DEF"
        ],
        "rankADP": 305.07
    },
    {
        "player_id": "CD_I1013220",
        "name": "Nathan O'Driscoll",
        "dob": "2002-05-17",
        "fantasy_average": 56.5,
        "team": "FR",
        "rank": 296,
        "career_avg": 59.3,
        "positions": [
            "MID"
        ],
        "rankADP": 307.02
    },
    {
        "player_id": "CD_I993979",
        "name": "Sam Powell-Pepper",
        "dob": "1998-01-08",
        "fantasy_average": 61.4,
        "team": "PA",
        "rank": 331,
        "career_avg": 68.8258,
        "positions": [
            "FWD"
        ],
        "rankADP": 307.21
    },
    {
        "player_id": "CD_I290188",
        "name": "Sam Reid",
        "dob": "1991-12-27",
        "fantasy_average": 0,
        "team": "SY",
        "rank": 323,
        "career_avg": 64.3016,
        "positions": [
            "FWD"
        ],
        "rankADP": 308.07
    },
    {
        "player_id": "CD_I1020057",
        "name": "Harry Barnett",
        "dob": "2004-01-22",
        "fantasy_average": 9,
        "team": "WC",
        "rank": 279,
        "career_avg": 9,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 308.88
    },
    {
        "player_id": "CD_I295203",
        "name": "Nathan Broad",
        "dob": "1993-04-15",
        "fantasy_average": 66.9,
        "team": "RI",
        "rank": 320,
        "career_avg": 58.7105,
        "positions": [
            "DEF"
        ],
        "rankADP": 309.06
    },
    {
        "player_id": "CD_I298288",
        "name": "Darcy Moore",
        "dob": "1996-01-25",
        "fantasy_average": 63.4,
        "team": "CW",
        "rank": 328,
        "career_avg": 57.4071,
        "positions": [
            "DEF"
        ],
        "rankADP": 310.87
    },
    {
        "player_id": "CD_I292511",
        "name": "Zach Tuohy",
        "dob": "1989-12-10",
        "fantasy_average": 66.7,
        "team": "GE",
        "rank": 333,
        "career_avg": 70.8829,
        "positions": [
            "MID"
        ],
        "rankADP": 313.22
    },
    {
        "player_id": "CD_I1012828",
        "name": "Finlay Macrae",
        "dob": "2002-03-13",
        "fantasy_average": 47,
        "team": "CW",
        "rank": 421,
        "career_avg": 40,
        "positions": [
            "FWD"
        ],
        "rankADP": 315.03
    },
    {
        "player_id": "CD_I1027875",
        "name": "Darcy Wilson",
        "dob": "2005-08-18",
        "fantasy_average": 0,
        "team": "SK",
        "rank": 366,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 315.9
    },
    {
        "player_id": "CD_I1017118",
        "name": "Josh Goater",
        "dob": "2003-06-02",
        "fantasy_average": 54.5,
        "team": "NM",
        "rank": 304,
        "career_avg": 57.0909,
        "positions": [
            "DEF"
        ],
        "rankADP": 317.83
    },
    {
        "player_id": "CD_I991930",
        "name": "Darcy Byrne-Jones",
        "dob": "1995-09-20",
        "fantasy_average": 61.2,
        "team": "PA",
        "rank": 335,
        "career_avg": 70.5783,
        "positions": [
            "FWD"
        ],
        "rankADP": 318.47
    },
    {
        "player_id": "CD_I1010174",
        "name": "Mitch Georgiades",
        "dob": "2001-09-28",
        "fantasy_average": 61.5,
        "team": "PA",
        "rank": 338,
        "career_avg": 53.3061,
        "positions": [
            "FWD"
        ],
        "rankADP": 318.62
    },
    {
        "player_id": "CD_I1027821",
        "name": "Caleb Windsor",
        "dob": "2005-06-09",
        "fantasy_average": 0,
        "team": "ME",
        "rank": 437,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 319.3
    },
    {
        "player_id": "CD_I1024187",
        "name": "Reece Torrent",
        "dob": "2005-08-03",
        "fantasy_average": 0,
        "team": "BL",
        "rank": 334,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 321.19
    },
    {
        "player_id": "CD_I992644",
        "name": "Braydon Preuss",
        "dob": "1995-06-16",
        "fantasy_average": 0,
        "team": "GWS",
        "rank": 280,
        "career_avg": 69.25,
        "positions": [
            "RUC"
        ],
        "rankADP": 321.71
    },
    {
        "player_id": "CD_I1024057",
        "name": "Caiden Cleary",
        "dob": "2005-03-05",
        "fantasy_average": 0,
        "team": "SY",
        "rank": 336,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 323.4
    },
    {
        "player_id": "CD_I1021031",
        "name": "Luke Nankervis",
        "dob": "2003-05-25",
        "fantasy_average": 61.8,
        "team": "AD",
        "rank": 337,
        "career_avg": 61.75,
        "positions": [
            "DEF"
        ],
        "rankADP": 324.09
    },
    {
        "player_id": "CD_I1012807",
        "name": "Sam Berry",
        "dob": "2002-02-12",
        "fantasy_average": 49.3,
        "team": "AD",
        "rank": 352,
        "career_avg": 62.6154,
        "positions": [
            "MID"
        ],
        "rankADP": 326.02
    },
    {
        "player_id": "CD_I291548",
        "name": "Ryan Lester",
        "dob": "1992-08-26",
        "fantasy_average": 63.1,
        "team": "BL",
        "rank": 339,
        "career_avg": 61.0861,
        "positions": [
            "DEF"
        ],
        "rankADP": 327.52
    },
    {
        "player_id": "CD_I1006137",
        "name": "Curtis Taylor",
        "dob": "2000-04-06",
        "fantasy_average": 61.3,
        "team": "NM",
        "rank": 348,
        "career_avg": 58.8209,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 327.75
    },
    {
        "player_id": "CD_I298290",
        "name": "Marc Pittonet",
        "dob": "1996-06-03",
        "fantasy_average": 58.7,
        "team": "CA",
        "rank": 309,
        "career_avg": 58.0357,
        "positions": [
            "RUC"
        ],
        "rankADP": 327.92
    },
    {
        "player_id": "CD_I261510",
        "name": "Tom Hawkins",
        "dob": "1988-07-21",
        "fantasy_average": 63,
        "team": "GE",
        "rank": 340,
        "career_avg": 72.6786,
        "positions": [
            "FWD"
        ],
        "rankADP": 327.92
    },
    {
        "player_id": "CD_I1021013",
        "name": "Ned Moyle",
        "dob": "2002-02-15",
        "fantasy_average": 54,
        "team": "GC",
        "rank": 343,
        "career_avg": 54,
        "positions": [
            "RUC"
        ],
        "rankADP": 328.32
    },
    {
        "player_id": "CD_I1009380",
        "name": "Jeremy Sharp",
        "dob": "2001-08-13",
        "fantasy_average": 0,
        "team": "FR",
        "rank": 347,
        "career_avg": 54.2727,
        "positions": [
            "MID"
        ],
        "rankADP": 329.57
    },
    {
        "player_id": "CD_I1015822",
        "name": "Dominic Bedendo",
        "dob": "2002-07-09",
        "fantasy_average": 0,
        "team": "WB",
        "rank": 345,
        "career_avg": 41.5,
        "positions": [
            "MID"
        ],
        "rankADP": 329.96
    },
    {
        "player_id": "CD_I290757",
        "name": "Jimmy Webster",
        "dob": "1993-06-28",
        "fantasy_average": 63.1,
        "team": "SK",
        "rank": 341,
        "career_avg": 61.3624,
        "positions": [
            "DEF"
        ],
        "rankADP": 331.54
    },
    {
        "player_id": "CD_I1023495",
        "name": "Oliver Hollands",
        "dob": "2004-01-16",
        "fantasy_average": 58.2,
        "team": "CA",
        "rank": 350,
        "career_avg": 58.1765,
        "positions": [
            "MID"
        ],
        "rankADP": 331.65
    },
    {
        "player_id": "CD_I1011583",
        "name": "Lachie Jones",
        "dob": "2002-04-09",
        "fantasy_average": 44.6,
        "team": "PA",
        "rank": 315,
        "career_avg": 45.1875,
        "positions": [
            "DEF"
        ],
        "rankADP": 333.11
    },
    {
        "player_id": "CD_I1011985",
        "name": "Hugo Ralphsmith",
        "dob": "2001-11-09",
        "fantasy_average": 38.9,
        "team": "RI",
        "rank": 305,
        "career_avg": 44.3871,
        "positions": [
            "DEF"
        ],
        "rankADP": 333.37
    },
    {
        "player_id": "CD_I1024279",
        "name": "Arie Schoenmaker",
        "dob": "2005-01-07",
        "fantasy_average": 0,
        "team": "SK",
        "rank": 312,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 333.45
    },
    {
        "player_id": "CD_I1005330",
        "name": "Kade Chandler",
        "dob": "2000-01-13",
        "fantasy_average": 59,
        "team": "ME",
        "rank": 346,
        "career_avg": 51.3462,
        "positions": [
            "FWD"
        ],
        "rankADP": 334.2
    },
    {
        "player_id": "CD_I291313",
        "name": "Jeremy Howe",
        "dob": "1990-06-29",
        "fantasy_average": 62.9,
        "team": "CW",
        "rank": 344,
        "career_avg": 73.8925,
        "positions": [
            "DEF"
        ],
        "rankADP": 334.57
    },
    {
        "player_id": "CD_I997230",
        "name": "Tyson Stengle",
        "dob": "1998-10-19",
        "fantasy_average": 53.9,
        "team": "GE",
        "rank": 307,
        "career_avg": 57.2456,
        "positions": [
            "FWD"
        ],
        "rankADP": 336.2
    },
    {
        "player_id": "CD_I1000980",
        "name": "Lloyd Meek",
        "dob": "1998-04-22",
        "fantasy_average": 59.4,
        "team": "HW",
        "rank": 372,
        "career_avg": 54.4516,
        "positions": [
            "RUC"
        ],
        "rankADP": 336.82
    },
    {
        "player_id": "CD_I293813",
        "name": "Tom Lynch",
        "dob": "1992-10-31",
        "fantasy_average": 51.8,
        "team": "RI",
        "rank": 430,
        "career_avg": 70.5196,
        "positions": [
            "FWD"
        ],
        "rankADP": 337.79
    },
    {
        "player_id": "CD_I1013462",
        "name": "Jase Burgoyne",
        "dob": "2003-07-15",
        "fantasy_average": 35.8,
        "team": "PA",
        "rank": 308,
        "career_avg": 50.0833,
        "positions": [
            "DEF"
        ],
        "rankADP": 337.83
    },
    {
        "player_id": "CD_I1020104",
        "name": "Jakob Ryan",
        "dob": "2004-09-20",
        "fantasy_average": 19,
        "team": "CW",
        "rank": 310,
        "career_avg": 19,
        "positions": [
            "DEF"
        ],
        "rankADP": 337.9
    },
    {
        "player_id": "CD_I1004998",
        "name": "Todd Marshall",
        "dob": "1998-10-08",
        "fantasy_average": 60.2,
        "team": "PA",
        "rank": 357,
        "career_avg": 57.9213,
        "positions": [
            "FWD"
        ],
        "rankADP": 338.2
    },
    {
        "player_id": "CD_I994599",
        "name": "Riley Bonner",
        "dob": "1997-03-07",
        "fantasy_average": 51.3,
        "team": "SK",
        "rank": 326,
        "career_avg": 63.3146,
        "positions": [
            "MID"
        ],
        "rankADP": 338.42
    },
    {
        "player_id": "CD_I298419",
        "name": "Brandan Parfitt",
        "dob": "1998-04-27",
        "fantasy_average": 55.1,
        "team": "GE",
        "rank": 349,
        "career_avg": 70.6542,
        "positions": [
            "MID"
        ],
        "rankADP": 341.92
    },
    {
        "player_id": "CD_I1016268",
        "name": "Alex Cincotta",
        "dob": "1996-12-17",
        "fantasy_average": 48.1,
        "team": "CA",
        "rank": 316,
        "career_avg": 48.0625,
        "positions": [
            "DEF"
        ],
        "rankADP": 342.08
    },
    {
        "player_id": "CD_I1021353",
        "name": "Lachlan Cowan",
        "dob": "2004-12-01",
        "fantasy_average": 40.6,
        "team": "CA",
        "rank": 317,
        "career_avg": 40.5714,
        "positions": [
            "DEF"
        ],
        "rankADP": 344.31
    },
    {
        "player_id": "CD_I298470",
        "name": "Shane McAdam",
        "dob": "1995-05-28",
        "fantasy_average": 59.7,
        "team": "ME",
        "rank": 354,
        "career_avg": 55.1,
        "positions": [
            "FWD"
        ],
        "rankADP": 344.61
    },
    {
        "player_id": "CD_I993816",
        "name": "Darcy Tucker",
        "dob": "1997-01-23",
        "fantasy_average": 60.8,
        "team": "NM",
        "rank": 355,
        "career_avg": 62.3871,
        "positions": [
            "MID"
        ],
        "rankADP": 345.3
    },
    {
        "player_id": "CD_I1005247",
        "name": "Sam Taylor",
        "dob": "1999-05-05",
        "fantasy_average": 55.9,
        "team": "GWS",
        "rank": 353,
        "career_avg": 55.5,
        "positions": [
            "DEF"
        ],
        "rankADP": 346.18
    },
    {
        "player_id": "CD_I1002228",
        "name": "Lachie Fogarty",
        "dob": "1999-04-01",
        "fantasy_average": 61.2,
        "team": "CA",
        "rank": 359,
        "career_avg": 59.4706,
        "positions": [
            "FWD"
        ],
        "rankADP": 347.76
    },
    {
        "player_id": "CD_I1017063",
        "name": "Toby Conway",
        "dob": "2003-04-24",
        "fantasy_average": 48,
        "team": "GE",
        "rank": 459,
        "career_avg": 48,
        "positions": [
            "RUC"
        ],
        "rankADP": 348.87
    },
    {
        "player_id": "CD_I1023533",
        "name": "Jaxon Binns",
        "dob": "2004-10-29",
        "fantasy_average": 0,
        "team": "CA",
        "rank": 325,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 349.7
    },
    {
        "player_id": "CD_I294508",
        "name": "Aidan Corr",
        "dob": "1994-05-17",
        "fantasy_average": 58.8,
        "team": "NM",
        "rank": 356,
        "career_avg": 47.3636,
        "positions": [
            "DEF"
        ],
        "rankADP": 350.23
    },
    {
        "player_id": "CD_I999331",
        "name": "Darcy Fogarty",
        "dob": "1999-09-25",
        "fantasy_average": 60.4,
        "team": "AD",
        "rank": 363,
        "career_avg": 51.141,
        "positions": [
            "FWD"
        ],
        "rankADP": 351.14
    },
    {
        "player_id": "CD_I1006135",
        "name": "Xavier O'Halloran",
        "dob": "2000-07-11",
        "fantasy_average": 60.9,
        "team": "GWS",
        "rank": 361,
        "career_avg": 49.9524,
        "positions": [
            "FWD"
        ],
        "rankADP": 352.38
    },
    {
        "player_id": "CD_I1008855",
        "name": "Oskar Baker",
        "dob": "1998-05-25",
        "fantasy_average": 60.2,
        "team": "WB",
        "rank": 360,
        "career_avg": 58.5161,
        "positions": [
            "MID"
        ],
        "rankADP": 352.9
    },
    {
        "player_id": "CD_I1029261",
        "name": "Bailey Macdonald",
        "dob": "2004-08-04",
        "fantasy_average": 52.5,
        "team": "HW",
        "rank": 358,
        "career_avg": 52.5,
        "positions": [
            "DEF"
        ],
        "rankADP": 353.35
    },
    {
        "player_id": "CD_I1012862",
        "name": "Elijah Hollands",
        "dob": "2002-04-25",
        "fantasy_average": 51.1,
        "team": "CA",
        "rank": 365,
        "career_avg": 59,
        "positions": [
            "MID"
        ],
        "rankADP": 354.72
    },
    {
        "player_id": "CD_I1017095",
        "name": "Miller Bergman",
        "dob": "2003-01-25",
        "fantasy_average": 44.9,
        "team": "NM",
        "rank": 362,
        "career_avg": 41.6923,
        "positions": [
            "DEF"
        ],
        "rankADP": 355.64
    },
    {
        "player_id": "CD_I1027058",
        "name": "Indhi Kirk",
        "dob": "2004-08-31",
        "fantasy_average": 0,
        "team": "SY",
        "rank": 368,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 356.39
    },
    {
        "player_id": "CD_I1021103",
        "name": "Mitch Knevitt",
        "dob": "2003-01-08",
        "fantasy_average": 51.3,
        "team": "GE",
        "rank": 370,
        "career_avg": 50,
        "positions": [
            "MID"
        ],
        "rankADP": 360.13
    },
    {
        "player_id": "CD_I298437",
        "name": "Callum Ah Chee",
        "dob": "1997-10-09",
        "fantasy_average": 50.9,
        "team": "BL",
        "rank": 367,
        "career_avg": 50.963,
        "positions": [
            "MID"
        ],
        "rankADP": 361.03
    },
    {
        "player_id": "CD_I1023708",
        "name": "Jaspa Fletcher",
        "dob": "2004-02-24",
        "fantasy_average": 50.3,
        "team": "BL",
        "rank": 400,
        "career_avg": 50.2727,
        "positions": [
            "MID"
        ],
        "rankADP": 363.84
    },
    {
        "player_id": "CD_I1017059",
        "name": "Josh Gibcus",
        "dob": "2003-04-04",
        "fantasy_average": 0,
        "team": "RI",
        "rank": 618,
        "career_avg": 40.4706,
        "positions": [
            "DEF"
        ],
        "rankADP": 364.88
    },
    {
        "player_id": "CD_I1020802",
        "name": "Jai Culley",
        "dob": "2003-02-24",
        "fantasy_average": 41,
        "team": "WC",
        "rank": 385,
        "career_avg": 52.7778,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 365.26
    },
    {
        "player_id": "CD_I1023475",
        "name": "Blake Drury",
        "dob": "2004-01-11",
        "fantasy_average": 26.3,
        "team": "NM",
        "rank": 369,
        "career_avg": 26.25,
        "positions": [
            "FWD"
        ],
        "rankADP": 365.36
    },
    {
        "player_id": "CD_I294592",
        "name": "Kamdyn McIntosh",
        "dob": "1994-04-03",
        "fantasy_average": 59.7,
        "team": "RI",
        "rank": 364,
        "career_avg": 61.828,
        "positions": [
            "MID"
        ],
        "rankADP": 366.08
    },
    {
        "player_id": "CD_I998647",
        "name": "Mason Cox",
        "dob": "1991-03-14",
        "fantasy_average": 59.4,
        "team": "CW",
        "rank": 381,
        "career_avg": 54.9604,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 367.16
    },
    {
        "player_id": "CD_I1007099",
        "name": "Harry Sharp",
        "dob": "2002-12-17",
        "fantasy_average": 59.3,
        "team": "BL",
        "rank": 373,
        "career_avg": 37.2222,
        "positions": [
            "MID"
        ],
        "rankADP": 369.72
    },
    {
        "player_id": "CD_I1022915",
        "name": "Edward Allan",
        "dob": "2004-05-26",
        "fantasy_average": 0,
        "team": "CW",
        "rank": 332,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 369.75
    },
    {
        "player_id": "CD_I1008543",
        "name": "Harry Schoenberg",
        "dob": "2001-02-21",
        "fantasy_average": 50.7,
        "team": "AD",
        "rank": 371,
        "career_avg": 59.8246,
        "positions": [
            "MID"
        ],
        "rankADP": 370.91
    },
    {
        "player_id": "CD_I993953",
        "name": "Eric Hipwood",
        "dob": "1997-09-13",
        "fantasy_average": 59.3,
        "team": "BL",
        "rank": 379,
        "career_avg": 53.8881,
        "positions": [
            "FWD"
        ],
        "rankADP": 372.21
    },
    {
        "player_id": "CD_I280737",
        "name": "Liam Shiels",
        "dob": "1991-04-29",
        "fantasy_average": 77.3,
        "team": "NM",
        "rank": 374,
        "career_avg": 85.2211,
        "positions": [
            "MID"
        ],
        "rankADP": 373.95
    },
    {
        "player_id": "CD_I270963",
        "name": "Rory Sloane",
        "dob": "1990-03-17",
        "fantasy_average": 74.5,
        "team": "AD",
        "rank": 377,
        "career_avg": 92.9427,
        "positions": [
            "MID"
        ],
        "rankADP": 374.13
    },
    {
        "player_id": "CD_I1011589",
        "name": "Caleb Poulter",
        "dob": "2002-10-12",
        "fantasy_average": 56.7,
        "team": "WB",
        "rank": 375,
        "career_avg": 59.8571,
        "positions": [
            "MID"
        ],
        "rankADP": 374.15
    },
    {
        "player_id": "CD_I1024188",
        "name": "Clay Hall",
        "dob": "2005-05-12",
        "fantasy_average": 0,
        "team": "WC",
        "rank": 351,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 374.37
    },
    {
        "player_id": "CD_I1012386",
        "name": "Samson Ryan",
        "dob": "2000-12-09",
        "fantasy_average": 46.6,
        "team": "RI",
        "rank": 488,
        "career_avg": 43.4,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 376.5
    },
    {
        "player_id": "CD_I998134",
        "name": "Josh Battle",
        "dob": "1998-09-01",
        "fantasy_average": 62,
        "team": "SK",
        "rank": 380,
        "career_avg": 62.5521,
        "positions": [
            "DEF"
        ],
        "rankADP": 376.55
    },
    {
        "player_id": "CD_I280744",
        "name": "Luke Breust",
        "dob": "1990-11-11",
        "fantasy_average": 60.4,
        "team": "HW",
        "rank": 382,
        "career_avg": 69.8982,
        "positions": [
            "FWD"
        ],
        "rankADP": 376.76
    },
    {
        "player_id": "CD_I291962",
        "name": "Chad Wingard",
        "dob": "1993-07-29",
        "fantasy_average": 60.4,
        "team": "HW",
        "rank": 383,
        "career_avg": 79.0829,
        "positions": [
            "FWD"
        ],
        "rankADP": 378.27
    },
    {
        "player_id": "CD_I1009226",
        "name": "Thomson Dow",
        "dob": "2001-10-16",
        "fantasy_average": 55,
        "team": "RI",
        "rank": 378,
        "career_avg": 45.9412,
        "positions": [
            "MID"
        ],
        "rankADP": 378.38
    },
    {
        "player_id": "CD_I1008752",
        "name": "Kieran Strachan",
        "dob": "1995-10-05",
        "fantasy_average": 0,
        "team": "AD",
        "rank": 433,
        "career_avg": 62.2,
        "positions": [
            "RUC"
        ],
        "rankADP": 379.39
    },
    {
        "player_id": "CD_I291849",
        "name": "Brody Mihocek",
        "dob": "1993-02-04",
        "fantasy_average": 60.3,
        "team": "CW",
        "rank": 384,
        "career_avg": 61.2768,
        "positions": [
            "FWD"
        ],
        "rankADP": 380.47
    },
    {
        "player_id": "CD_I993795",
        "name": "David Cuningham",
        "dob": "1997-03-30",
        "fantasy_average": 59.3,
        "team": "CA",
        "rank": 389,
        "career_avg": 56.4118,
        "positions": [
            "FWD"
        ],
        "rankADP": 381.56
    },
    {
        "player_id": "CD_I999321",
        "name": "Michael Frederick",
        "dob": "2000-05-17",
        "fantasy_average": 58.1,
        "team": "FR",
        "rank": 388,
        "career_avg": 51.9464,
        "positions": [
            "FWD"
        ],
        "rankADP": 383.23
    },
    {
        "player_id": "CD_I290307",
        "name": "Dane Rampe",
        "dob": "1990-06-02",
        "fantasy_average": 59.6,
        "team": "SY",
        "rank": 387,
        "career_avg": 64.9619,
        "positions": [
            "DEF"
        ],
        "rankADP": 384.87
    },
    {
        "player_id": "CD_I1012860",
        "name": "Oliver Henry",
        "dob": "2002-07-29",
        "fantasy_average": 55.9,
        "team": "GE",
        "rank": 401,
        "career_avg": 51.9333,
        "positions": [
            "FWD"
        ],
        "rankADP": 385.4
    },
    {
        "player_id": "CD_I1021200",
        "name": "Lachlan McAndrew",
        "dob": "2000-05-26",
        "fantasy_average": 42,
        "team": "SY",
        "rank": 574,
        "career_avg": 42,
        "positions": [
            "RUC"
        ],
        "rankADP": 385.65
    },
    {
        "player_id": "CD_I992374",
        "name": "Dan Butler",
        "dob": "1996-06-03",
        "fantasy_average": 59.2,
        "team": "SK",
        "rank": 392,
        "career_avg": 56.0976,
        "positions": [
            "FWD"
        ],
        "rankADP": 386.03
    },
    {
        "player_id": "CD_I1009385",
        "name": "Deven Robertson",
        "dob": "2001-06-30",
        "fantasy_average": 38.6,
        "team": "BL",
        "rank": 509,
        "career_avg": 51.0909,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 386.98
    },
    {
        "player_id": "CD_I1011981",
        "name": "Josh Worrell",
        "dob": "2001-04-11",
        "fantasy_average": 59.1,
        "team": "AD",
        "rank": 393,
        "career_avg": 54.4118,
        "positions": [
            "DEF"
        ],
        "rankADP": 387.5
    },
    {
        "player_id": "CD_I1013230",
        "name": "Logan McDonald",
        "dob": "2002-04-04",
        "fantasy_average": 54.7,
        "team": "SY",
        "rank": 391,
        "career_avg": 50.6098,
        "positions": [
            "FWD"
        ],
        "rankADP": 388.08
    },
    {
        "player_id": "CD_I1002403",
        "name": "Ben Miller",
        "dob": "1999-08-31",
        "fantasy_average": 45.4,
        "team": "RI",
        "rank": 547,
        "career_avg": 43.5417,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 388.58
    },
    {
        "player_id": "CD_I990740",
        "name": "Rory Lobb",
        "dob": "1993-02-09",
        "fantasy_average": 58.5,
        "team": "WB",
        "rank": 395,
        "career_avg": 65.0331,
        "positions": [
            "FWD"
        ],
        "rankADP": 389.03
    },
    {
        "player_id": "CD_I1015330",
        "name": "Hugh Jackson",
        "dob": "2003-05-03",
        "fantasy_average": 0,
        "team": "PA",
        "rank": 386,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 391.1
    },
    {
        "player_id": "CD_I1000932",
        "name": "Tom Doedee",
        "dob": "1997-03-01",
        "fantasy_average": 55.5,
        "team": "BL",
        "rank": 426,
        "career_avg": 62.9146,
        "positions": [
            "DEF"
        ],
        "rankADP": 391.16
    },
    {
        "player_id": "CD_I991988",
        "name": "Zak Jones",
        "dob": "1995-03-15",
        "fantasy_average": 54.5,
        "team": "SK",
        "rank": 390,
        "career_avg": 69.7008,
        "positions": [
            "MID"
        ],
        "rankADP": 391.39
    },
    {
        "player_id": "CD_I1011803",
        "name": "Cody Weightman",
        "dob": "2001-01-15",
        "fantasy_average": 58.4,
        "team": "WB",
        "rank": 399,
        "career_avg": 53.6364,
        "positions": [
            "FWD"
        ],
        "rankADP": 391.63
    },
    {
        "player_id": "CD_I281091",
        "name": "Hugh Greenwood",
        "dob": "1992-03-06",
        "fantasy_average": 59.3,
        "team": "NM",
        "rank": 394,
        "career_avg": 76.8348,
        "positions": [
            "MID"
        ],
        "rankADP": 391.94
    },
    {
        "player_id": "CD_I297456",
        "name": "Nick Holman",
        "dob": "1995-05-29",
        "fantasy_average": 57,
        "team": "GC",
        "rank": 410,
        "career_avg": 57.3091,
        "positions": [
            "FWD"
        ],
        "rankADP": 394.21
    },
    {
        "player_id": "CD_I290838",
        "name": "Jack Darling",
        "dob": "1992-06-13",
        "fantasy_average": 58.4,
        "team": "WC",
        "rank": 397,
        "career_avg": 68.1927,
        "positions": [
            "FWD"
        ],
        "rankADP": 396.07
    },
    {
        "player_id": "CD_I1012833",
        "name": "Eddie Ford",
        "dob": "2002-06-21",
        "fantasy_average": 57.6,
        "team": "NM",
        "rank": 403,
        "career_avg": 53.45,
        "positions": [
            "FWD"
        ],
        "rankADP": 396.68
    },
    {
        "player_id": "CD_I297473",
        "name": "Jake Kelly",
        "dob": "1995-01-21",
        "fantasy_average": 58.9,
        "team": "ES",
        "rank": 406,
        "career_avg": 58.5724,
        "positions": [
            "DEF"
        ],
        "rankADP": 397.06
    },
    {
        "player_id": "CD_I1017128",
        "name": "Dante Visentini",
        "dob": "2003-02-13",
        "fantasy_average": 39.7,
        "team": "PA",
        "rank": 585,
        "career_avg": 39.6667,
        "positions": [
            "RUC"
        ],
        "rankADP": 397.17
    },
    {
        "player_id": "CD_I999326",
        "name": "Brad Close",
        "dob": "1998-07-30",
        "fantasy_average": 55.9,
        "team": "GE",
        "rank": 402,
        "career_avg": 59.2,
        "positions": [
            "FWD"
        ],
        "rankADP": 398.29
    },
    {
        "player_id": "CD_I1013268",
        "name": "Alex Davies",
        "dob": "2002-03-18",
        "fantasy_average": 55.4,
        "team": "GC",
        "rank": 404,
        "career_avg": 48.76,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 398.86
    },
    {
        "player_id": "CD_I1031801",
        "name": "Ethan Stanley",
        "dob": "2003-11-13",
        "fantasy_average": 17.5,
        "team": "FR",
        "rank": 396,
        "career_avg": 17.5,
        "positions": [
            "MID"
        ],
        "rankADP": 399
    },
    {
        "player_id": "CD_I293884",
        "name": "Jake Stringer",
        "dob": "1994-04-25",
        "fantasy_average": 62,
        "team": "ES",
        "rank": 512,
        "career_avg": 64.1319,
        "positions": [
            "FWD"
        ],
        "rankADP": 399.69
    },
    {
        "player_id": "CD_I1008882",
        "name": "Charlie Ballard",
        "dob": "1999-07-23",
        "fantasy_average": 57.3,
        "team": "GC",
        "rank": 407,
        "career_avg": 53.6273,
        "positions": [
            "DEF"
        ],
        "rankADP": 401.16
    },
    {
        "player_id": "CD_I294596",
        "name": "Tim Membrey",
        "dob": "1994-05-26",
        "fantasy_average": 54.4,
        "team": "SK",
        "rank": 398,
        "career_avg": 67.8228,
        "positions": [
            "FWD"
        ],
        "rankADP": 402.16
    },
    {
        "player_id": "CD_I1009708",
        "name": "Jack Buckley",
        "dob": "1997-12-17",
        "fantasy_average": 57.2,
        "team": "GWS",
        "rank": 409,
        "career_avg": 53.9,
        "positions": [
            "DEF"
        ],
        "rankADP": 402.74
    },
    {
        "player_id": "CD_I1006232",
        "name": "Sam Wicks",
        "dob": "1999-09-14",
        "fantasy_average": 56.8,
        "team": "SY",
        "rank": 411,
        "career_avg": 52.1277,
        "positions": [
            "FWD"
        ],
        "rankADP": 404.69
    },
    {
        "player_id": "CD_I1017065",
        "name": "Zac Taylor",
        "dob": "2003-01-31",
        "fantasy_average": 0,
        "team": "AD",
        "rank": 405,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 406.24
    },
    {
        "player_id": "CD_I997316",
        "name": "Lewis Young",
        "dob": "1998-12-20",
        "fantasy_average": 56.7,
        "team": "CA",
        "rank": 412,
        "career_avg": 53.5636,
        "positions": [
            "DEF"
        ],
        "rankADP": 406.42
    },
    {
        "player_id": "CD_I298302",
        "name": "Caleb Marchbank",
        "dob": "1996-12-07",
        "fantasy_average": 56,
        "team": "CA",
        "rank": 417,
        "career_avg": 56.3158,
        "positions": [
            "DEF"
        ],
        "rankADP": 408.68
    },
    {
        "player_id": "CD_I290246",
        "name": "Tom Campbell",
        "dob": "1991-11-02",
        "fantasy_average": 0,
        "team": "SK",
        "rank": 420,
        "career_avg": 59.9592,
        "positions": [
            "RUC"
        ],
        "rankADP": 411.13
    },
    {
        "player_id": "CD_I1018123",
        "name": "Jake Rogers",
        "dob": "2005-03-02",
        "fantasy_average": 0,
        "team": "GC",
        "rank": 413,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 411.54
    },
    {
        "player_id": "CD_I296190",
        "name": "Jack Martin",
        "dob": "1995-01-29",
        "fantasy_average": 54.1,
        "team": "CA",
        "rank": 418,
        "career_avg": 69.6781,
        "positions": [
            "FWD"
        ],
        "rankADP": 414.93
    },
    {
        "player_id": "CD_I296225",
        "name": "Willie Rioli",
        "dob": "1995-06-04",
        "fantasy_average": 54.8,
        "team": "PA",
        "rank": 422,
        "career_avg": 56.6875,
        "positions": [
            "FWD"
        ],
        "rankADP": 415.47
    },
    {
        "player_id": "CD_I291720",
        "name": "Will Hoskin-Elliott",
        "dob": "1993-09-02",
        "fantasy_average": 55.5,
        "team": "CW",
        "rank": 423,
        "career_avg": 64.7944,
        "positions": [
            "MID"
        ],
        "rankADP": 415.47
    },
    {
        "player_id": "CD_I1027673",
        "name": "Harry DeMattia",
        "dob": "2005-09-11",
        "fantasy_average": 0,
        "team": "CW",
        "rank": 408,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 416.5
    },
    {
        "player_id": "CD_I280824",
        "name": "Jake Melksham",
        "dob": "1991-08-29",
        "fantasy_average": 48.8,
        "team": "ME",
        "rank": 414,
        "career_avg": 62.9032,
        "positions": [
            "FWD"
        ],
        "rankADP": 416.75
    },
    {
        "player_id": "CD_I1017126",
        "name": "Sam Darcy",
        "dob": "2003-07-19",
        "fantasy_average": 20,
        "team": "WB",
        "rank": 425,
        "career_avg": 41.1667,
        "positions": [
            "FWD"
        ],
        "rankADP": 417.93
    },
    {
        "player_id": "CD_I293581",
        "name": "Lincoln McCarthy",
        "dob": "1993-10-22",
        "fantasy_average": 55.5,
        "team": "BL",
        "rank": 424,
        "career_avg": 57.6614,
        "positions": [
            "FWD"
        ],
        "rankADP": 418.38
    },
    {
        "player_id": "CD_I1023681",
        "name": "George Stevens",
        "dob": "2005-04-14",
        "fantasy_average": 0,
        "team": "GE",
        "rank": 416,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 418.62
    },
    {
        "player_id": "CD_I1008123",
        "name": "Jake Riccardi",
        "dob": "1999-11-07",
        "fantasy_average": 54.6,
        "team": "GWS",
        "rank": 431,
        "career_avg": 54.8636,
        "positions": [
            "FWD"
        ],
        "rankADP": 420.57
    },
    {
        "player_id": "CD_I293716",
        "name": "Jarryd Lyons",
        "dob": "1992-07-22",
        "fantasy_average": 50.6,
        "team": "BL",
        "rank": 419,
        "career_avg": 87.0625,
        "positions": [
            "MID"
        ],
        "rankADP": 421.92
    },
    {
        "player_id": "CD_I297504",
        "name": "Daniel McStay",
        "dob": "1995-06-24",
        "fantasy_average": 53.8,
        "team": "CW",
        "rank": 428,
        "career_avg": 52.1455,
        "positions": [
            "FWD"
        ],
        "rankADP": 422.17
    },
    {
        "player_id": "CD_I1019916",
        "name": "Kane McAuliffe",
        "dob": "2005-03-01",
        "fantasy_average": 0,
        "team": "RI",
        "rank": 415,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 424.5
    },
    {
        "player_id": "CD_I281124",
        "name": "Levi Casboult",
        "dob": "1990-03-15",
        "fantasy_average": 55.4,
        "team": "GC",
        "rank": 435,
        "career_avg": 55.8032,
        "positions": [
            "FWD"
        ],
        "rankADP": 425.34
    },
    {
        "player_id": "CD_I291848",
        "name": "Robbie Fox",
        "dob": "1993-04-16",
        "fantasy_average": 55.3,
        "team": "SY",
        "rank": 438,
        "career_avg": 52.6667,
        "positions": [
            "DEF"
        ],
        "rankADP": 426.59
    },
    {
        "player_id": "CD_I1017720",
        "name": "Jacob van Rooyen",
        "dob": "2003-04-16",
        "fantasy_average": 51.6,
        "team": "ME",
        "rank": 457,
        "career_avg": 51.6316,
        "positions": [
            "FWD"
        ],
        "rankADP": 427.19
    },
    {
        "player_id": "CD_I291978",
        "name": "Harry Cunningham",
        "dob": "1993-12-06",
        "fantasy_average": 55,
        "team": "SY",
        "rank": 439,
        "career_avg": 63.0175,
        "positions": [
            "DEF"
        ],
        "rankADP": 428.66
    },
    {
        "player_id": "CD_I291351",
        "name": "Jack Gunston",
        "dob": "1991-10-16",
        "fantasy_average": 54.8,
        "team": "HW",
        "rank": 440,
        "career_avg": 77.4924,
        "positions": [
            "FWD"
        ],
        "rankADP": 429.76
    },
    {
        "player_id": "CD_I298281",
        "name": "Jake Lever",
        "dob": "1996-03-05",
        "fantasy_average": 54.7,
        "team": "ME",
        "rank": 442,
        "career_avg": 57.6757,
        "positions": [
            "DEF"
        ],
        "rankADP": 430.53
    },
    {
        "player_id": "CD_I1028671",
        "name": "Charlie Edwards",
        "dob": "2005-05-18",
        "fantasy_average": 0,
        "team": "AD",
        "rank": 427,
        "career_avg": 0,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 432.91
    },
    {
        "player_id": "CD_I996580",
        "name": "Ethan Hughes",
        "dob": "1994-12-07",
        "fantasy_average": 54.5,
        "team": "FR",
        "rank": 447,
        "career_avg": 57.51,
        "positions": [
            "DEF"
        ],
        "rankADP": 435.29
    },
    {
        "player_id": "CD_I1013511",
        "name": "Tyler Brockman",
        "dob": "2002-11-22",
        "fantasy_average": 51.5,
        "team": "WC",
        "rank": 446,
        "career_avg": 47.8462,
        "positions": [
            "FWD"
        ],
        "rankADP": 436.36
    },
    {
        "player_id": "CD_I1008825",
        "name": "Mitch Hardie",
        "dob": "1997-09-05",
        "fantasy_average": 0,
        "team": "GE",
        "rank": 436,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 436.54
    },
    {
        "player_id": "CD_I291819",
        "name": "Adam Tomlinson",
        "dob": "1993-08-10",
        "fantasy_average": 54.5,
        "team": "ME",
        "rank": 450,
        "career_avg": 64.8397,
        "positions": [
            "DEF"
        ],
        "rankADP": 437.29
    },
    {
        "player_id": "CD_I1026960",
        "name": "Will Graham",
        "dob": "2005-07-27",
        "fantasy_average": 0,
        "team": "GC",
        "rank": 429,
        "career_avg": 0,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 438.52
    },
    {
        "player_id": "CD_I1006550",
        "name": "Jack Petruccelle",
        "dob": "1999-04-12",
        "fantasy_average": 53.8,
        "team": "WC",
        "rank": 449,
        "career_avg": 49.1,
        "positions": [
            "FWD"
        ],
        "rankADP": 440.33
    },
    {
        "player_id": "CD_I992048",
        "name": "Anthony Scott",
        "dob": "1995-02-28",
        "fantasy_average": 48.5,
        "team": "WB",
        "rank": 444,
        "career_avg": 46.463,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 441.52
    },
    {
        "player_id": "CD_I1002240",
        "name": "Jaidyn Stephenson",
        "dob": "1999-01-15",
        "fantasy_average": 53.6,
        "team": "NM",
        "rank": 461,
        "career_avg": 67.451,
        "positions": [
            "FWD"
        ],
        "rankADP": 442.07
    },
    {
        "player_id": "CD_I1013464",
        "name": "Lawson Humphries",
        "dob": "2003-04-24",
        "fantasy_average": 0,
        "team": "GE",
        "rank": 432,
        "career_avg": 0,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 442.86
    },
    {
        "player_id": "CD_I295446",
        "name": "Sam Collins",
        "dob": "1994-06-15",
        "fantasy_average": 54.4,
        "team": "GC",
        "rank": 455,
        "career_avg": 52.5577,
        "positions": [
            "DEF"
        ],
        "rankADP": 443.37
    },
    {
        "player_id": "CD_I1027678",
        "name": "Billy Wilson",
        "dob": "2005-06-16",
        "fantasy_average": 0,
        "team": "CA",
        "rank": 434,
        "career_avg": 0,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 444.05
    },
    {
        "player_id": "CD_I1004757",
        "name": "Beau McCreery",
        "dob": "2001-04-19",
        "fantasy_average": 52.4,
        "team": "CW",
        "rank": 465,
        "career_avg": 48.9038,
        "positions": [
            "FWD"
        ],
        "rankADP": 446.39
    },
    {
        "player_id": "CD_I1015827",
        "name": "Nik Cox",
        "dob": "2002-01-15",
        "fantasy_average": 44.2,
        "team": "ES",
        "rank": 466,
        "career_avg": 52.5161,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 446.88
    },
    {
        "player_id": "CD_I1013611",
        "name": "Sam Sturt",
        "dob": "2000-05-12",
        "fantasy_average": 42.9,
        "team": "FR",
        "rank": 568,
        "career_avg": 41.3333,
        "positions": [
            "FWD"
        ],
        "rankADP": 447.3
    },
    {
        "player_id": "CD_I990290",
        "name": "Tom Barrass",
        "dob": "1995-10-08",
        "fantasy_average": 53.9,
        "team": "WC",
        "rank": 467,
        "career_avg": 57.0569,
        "positions": [
            "DEF"
        ],
        "rankADP": 448.73
    },
    {
        "player_id": "CD_I1013197",
        "name": "Sam Banks",
        "dob": "2003-04-02",
        "fantasy_average": 51.7,
        "team": "RI",
        "rank": 475,
        "career_avg": 51.6667,
        "positions": [
            "DEF"
        ],
        "rankADP": 449.16
    },
    {
        "player_id": "CD_I1009189",
        "name": "Jack Mahony",
        "dob": "2001-11-12",
        "fantasy_average": 47.5,
        "team": "GC",
        "rank": 451,
        "career_avg": 45.5814,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 449.57
    },
    {
        "player_id": "CD_I1004985",
        "name": "Ben Paton",
        "dob": "1998-10-19",
        "fantasy_average": 54.4,
        "team": "SK",
        "rank": 464,
        "career_avg": 56.1692,
        "positions": [
            "DEF"
        ],
        "rankADP": 450.35
    },
    {
        "player_id": "CD_I1024096",
        "name": "Caleb Mitchell",
        "dob": "2004-08-10",
        "fantasy_average": 0,
        "team": "SY",
        "rank": 441,
        "career_avg": 0,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 450.8
    },
    {
        "player_id": "CD_I1017089",
        "name": "Oskar Faulkhead",
        "dob": "2003-02-11",
        "fantasy_average": 0,
        "team": "GC",
        "rank": 443,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 452.1
    },
    {
        "player_id": "CD_I298144",
        "name": "Sam Naismith",
        "dob": "1992-07-16",
        "fantasy_average": 0,
        "team": "RI",
        "rank": 453,
        "career_avg": 61,
        "positions": [
            "RUC"
        ],
        "rankADP": 453.32
    },
    {
        "player_id": "CD_I1007102",
        "name": "Mark O'Connor",
        "dob": "1997-01-17",
        "fantasy_average": 61.9,
        "team": "GE",
        "rank": 462,
        "career_avg": 57.0722,
        "positions": [
            "DEF",
            "MID"
        ],
        "rankADP": 454.88
    },
    {
        "player_id": "CD_I1027959",
        "name": "Olli Hotton",
        "dob": "2004-09-06",
        "fantasy_average": 0,
        "team": "SK",
        "rank": 445,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 455
    },
    {
        "player_id": "CD_I1027925",
        "name": "Harvey Thomas",
        "dob": "2005-08-08",
        "fantasy_average": 0,
        "team": "GWS",
        "rank": 448,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 457.35
    },
    {
        "player_id": "CD_I1005000",
        "name": "Laitham Vandermeer",
        "dob": "1999-02-03",
        "fantasy_average": 53.1,
        "team": "WB",
        "rank": 470,
        "career_avg": 47.5641,
        "positions": [
            "DEF"
        ],
        "rankADP": 458.73
    },
    {
        "player_id": "CD_I1015370",
        "name": "Max Michalanney",
        "dob": "2004-02-26",
        "fantasy_average": 52.4,
        "team": "AD",
        "rank": 481,
        "career_avg": 52.3636,
        "positions": [
            "DEF"
        ],
        "rankADP": 458.77
    },
    {
        "player_id": "CD_I1017057",
        "name": "Campbell Chesser",
        "dob": "2003-04-27",
        "fantasy_average": 42.5,
        "team": "WC",
        "rank": 491,
        "career_avg": 42.5,
        "positions": [
            "MID"
        ],
        "rankADP": 459.58
    },
    {
        "player_id": "CD_I1009317",
        "name": "Bruce Reville ",
        "dob": "2001-02-22",
        "fantasy_average": 0,
        "team": "BL",
        "rank": 452,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 460.65
    },
    {
        "player_id": "CD_I1018075",
        "name": "Lachlan Gollant",
        "dob": "2001-09-12",
        "fantasy_average": 52.8,
        "team": "AD",
        "rank": 473,
        "career_avg": 44.5,
        "positions": [
            "FWD"
        ],
        "rankADP": 461.12
    },
    {
        "player_id": "CD_I250365",
        "name": "Travis Boak",
        "dob": "1988-08-01",
        "fantasy_average": 62.2,
        "team": "PA",
        "rank": 468,
        "career_avg": 91.6667,
        "positions": [
            "MID"
        ],
        "rankADP": 462.73
    },
    {
        "player_id": "CD_I1014038",
        "name": "Callum M. Brown",
        "dob": "2000-08-15",
        "fantasy_average": 52.8,
        "team": "GWS",
        "rank": 476,
        "career_avg": 51.6957,
        "positions": [
            "FWD"
        ],
        "rankADP": 462.76
    },
    {
        "player_id": "CD_I1008893",
        "name": "Harrison Petty",
        "dob": "1999-11-12",
        "fantasy_average": 51.8,
        "team": "ME",
        "rank": 471,
        "career_avg": 44.7719,
        "positions": [
            "DEF",
            "FWD"
        ],
        "rankADP": 463.08
    },
    {
        "player_id": "CD_I298211",
        "name": "Darcy Fort",
        "dob": "1993-08-06",
        "fantasy_average": 45.3,
        "team": "BL",
        "rank": 548,
        "career_avg": 53.375,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 463.42
    },
    {
        "player_id": "CD_I1014013",
        "name": "Lachlan Charleson",
        "dob": "2005-01-29",
        "fantasy_average": 0,
        "team": "PA",
        "rank": 454,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 463.5
    },
    {
        "player_id": "CD_I993480",
        "name": "Dougal Howard",
        "dob": "1996-03-25",
        "fantasy_average": 52.8,
        "team": "SK",
        "rank": 477,
        "career_avg": 51.4017,
        "positions": [
            "DEF"
        ],
        "rankADP": 464.36
    },
    {
        "player_id": "CD_I1002143",
        "name": "Ben McKay",
        "dob": "1997-12-24",
        "fantasy_average": 52.6,
        "team": "ES",
        "rank": 478,
        "career_avg": 43.6197,
        "positions": [
            "DEF"
        ],
        "rankADP": 465.21
    },
    {
        "player_id": "CD_I1019939",
        "name": "William Rowlands",
        "dob": "2005-06-19",
        "fantasy_average": 0,
        "team": "GC",
        "rank": 456,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 466.3
    },
    {
        "player_id": "CD_I291533",
        "name": "Tom McDonald",
        "dob": "1992-09-18",
        "fantasy_average": 52.5,
        "team": "ME",
        "rank": 479,
        "career_avg": 70.2556,
        "positions": [
            "FWD"
        ],
        "rankADP": 468.21
    },
    {
        "player_id": "CD_I1020881",
        "name": "Oliver Wiltshire",
        "dob": "2002-09-15",
        "fantasy_average": 0,
        "team": "GE",
        "rank": 460,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 469.75
    },
    {
        "player_id": "CD_I997933",
        "name": "Griffin Logue",
        "dob": "1998-04-13",
        "fantasy_average": 51.9,
        "team": "NM",
        "rank": 485,
        "career_avg": 49.7532,
        "positions": [
            "DEF"
        ],
        "rankADP": 470.32
    },
    {
        "player_id": "CD_I1029262",
        "name": "Will Lorenz",
        "dob": "2005-02-19",
        "fantasy_average": 0,
        "team": "PA",
        "rank": 463,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 471.53
    },
    {
        "player_id": "CD_I1006127",
        "name": "Rhylee West",
        "dob": "2000-07-12",
        "fantasy_average": 51.7,
        "team": "WB",
        "rank": 489,
        "career_avg": 51.5455,
        "positions": [
            "FWD"
        ],
        "rankADP": 473.39
    },
    {
        "player_id": "CD_I1011994",
        "name": "Ryan Byrnes",
        "dob": "2001-05-03",
        "fantasy_average": 62,
        "team": "SK",
        "rank": 546,
        "career_avg": 60.5116,
        "positions": [
            "MID"
        ],
        "rankADP": 475
    },
    {
        "player_id": "CD_I1004034",
        "name": "Brandon Zerk-Thatcher",
        "dob": "1998-08-25",
        "fantasy_average": 52.2,
        "team": "PA",
        "rank": 482,
        "career_avg": 47.7255,
        "positions": [
            "DEF"
        ],
        "rankADP": 477.59
    },
    {
        "player_id": "CD_I1023784",
        "name": "Anthony Caminiti",
        "dob": "2003-12-09",
        "fantasy_average": 50.4,
        "team": "SK",
        "rank": 480,
        "career_avg": 50.3529,
        "positions": [
            "FWD"
        ],
        "rankADP": 478.52
    },
    {
        "player_id": "CD_I1012819",
        "name": "Josh Treacy",
        "dob": "2002-08-04",
        "fantasy_average": 52.3,
        "team": "FR",
        "rank": 483,
        "career_avg": 46.6944,
        "positions": [
            "FWD"
        ],
        "rankADP": 479.18
    },
    {
        "player_id": "CD_I1027704",
        "name": "Joel Freijah",
        "dob": "2005-11-14",
        "fantasy_average": 0,
        "team": "WB",
        "rank": 469,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 479.53
    },
    {
        "player_id": "CD_I1027969",
        "name": "Harvey Johnston",
        "dob": "2005-08-18",
        "fantasy_average": 0,
        "team": "WC",
        "rank": 472,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 481
    },
    {
        "player_id": "CD_I294469",
        "name": "Aliir Aliir",
        "dob": "1994-09-05",
        "fantasy_average": 50.9,
        "team": "PA",
        "rank": 493,
        "career_avg": 58.1057,
        "positions": [
            "DEF"
        ],
        "rankADP": 482.36
    },
    {
        "player_id": "CD_I1008091",
        "name": "Joel Amartey",
        "dob": "1999-09-02",
        "fantasy_average": 50.8,
        "team": "SY",
        "rank": 487,
        "career_avg": 49.1111,
        "positions": [
            "FWD"
        ],
        "rankADP": 482.59
    },
    {
        "player_id": "CD_I1020032",
        "name": "Loch Rawlinson",
        "dob": "2005-06-01",
        "fantasy_average": 0,
        "team": "WC",
        "rank": 474,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 483.95
    },
    {
        "player_id": "CD_I1015830",
        "name": "Domanic Akuei",
        "dob": "2002-05-12",
        "fantasy_average": 0,
        "team": "CA",
        "rank": 667,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 484
    },
    {
        "player_id": "CD_I290797",
        "name": "Alex Keath",
        "dob": "1992-01-20",
        "fantasy_average": 51.4,
        "team": "WB",
        "rank": 490,
        "career_avg": 52.8788,
        "positions": [
            "DEF"
        ],
        "rankADP": 485.23
    },
    {
        "player_id": "CD_I1006576",
        "name": "Luke Edwards",
        "dob": "2002-01-12",
        "fantasy_average": 47.1,
        "team": "WC",
        "rank": 494,
        "career_avg": 48.5833,
        "positions": [
            "MID"
        ],
        "rankADP": 487
    },
    {
        "player_id": "CD_I1013974",
        "name": "Mark Keane",
        "dob": "2000-03-17",
        "fantasy_average": 51.2,
        "team": "AD",
        "rank": 492,
        "career_avg": 47.9,
        "positions": [
            "DEF"
        ],
        "rankADP": 490.43
    },
    {
        "player_id": "CD_I1006148",
        "name": "Bobby Hill",
        "dob": "2000-02-09",
        "fantasy_average": 50.1,
        "team": "CW",
        "rank": 510,
        "career_avg": 47.4833,
        "positions": [
            "FWD"
        ],
        "rankADP": 490.5
    },
    {
        "player_id": "CD_I1017093",
        "name": "Cooper Hamilton",
        "dob": "2003-09-24",
        "fantasy_average": 47,
        "team": "GWS",
        "rank": 495,
        "career_avg": 51,
        "positions": [
            "MID"
        ],
        "rankADP": 491.23
    },
    {
        "player_id": "CD_I1020594",
        "name": "Jye Amiss",
        "dob": "2003-07-31",
        "fantasy_average": 47.9,
        "team": "FR",
        "rank": 499,
        "career_avg": 48.0435,
        "positions": [
            "FWD"
        ],
        "rankADP": 491.39
    },
    {
        "player_id": "CD_I1027949",
        "name": "Kynan Brown",
        "dob": "2005-01-13",
        "fantasy_average": 0,
        "team": "ME",
        "rank": 484,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 491.47
    },
    {
        "player_id": "CD_I1015329",
        "name": "Billy Dowling",
        "dob": "2004-07-01",
        "fantasy_average": 0,
        "team": "AD",
        "rank": 458,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 491.57
    },
    {
        "player_id": "CD_I1027790",
        "name": "Hugo Garcia",
        "dob": "2005-05-22",
        "fantasy_average": 0,
        "team": "SK",
        "rank": 486,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 492.79
    },
    {
        "player_id": "CD_I291867",
        "name": "Ben Brown",
        "dob": "1992-11-20",
        "fantasy_average": 50.7,
        "team": "ME",
        "rank": 496,
        "career_avg": 62.2675,
        "positions": [
            "FWD"
        ],
        "rankADP": 494.1
    },
    {
        "player_id": "CD_I296291",
        "name": "Jake Kolodjashnij",
        "dob": "1995-08-09",
        "fantasy_average": 49.3,
        "team": "GE",
        "rank": 503,
        "career_avg": 50.7548,
        "positions": [
            "DEF"
        ],
        "rankADP": 494.94
    },
    {
        "player_id": "CD_I1013973",
        "name": "Matthew Owies",
        "dob": "1997-03-19",
        "fantasy_average": 50.6,
        "team": "CA",
        "rank": 497,
        "career_avg": 51,
        "positions": [
            "FWD"
        ],
        "rankADP": 495.05
    },
    {
        "player_id": "CD_I993771",
        "name": "Marlion Pickett",
        "dob": "1992-01-06",
        "fantasy_average": 50.2,
        "team": "RI",
        "rank": 507,
        "career_avg": 56.7917,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 495.17
    },
    {
        "player_id": "CD_I991773",
        "name": "Billy Frampton",
        "dob": "1996-11-20",
        "fantasy_average": 50.6,
        "team": "CW",
        "rank": 498,
        "career_avg": 50.6923,
        "positions": [
            "DEF"
        ],
        "rankADP": 495.5
    },
    {
        "player_id": "CD_I996232",
        "name": "Matt Guelfi",
        "dob": "1997-08-14",
        "fantasy_average": 50.5,
        "team": "ES",
        "rank": 500,
        "career_avg": 55.5806,
        "positions": [
            "FWD"
        ],
        "rankADP": 495.8
    },
    {
        "player_id": "CD_I298358",
        "name": "Oleg Markov",
        "dob": "1996-05-08",
        "fantasy_average": 49.1,
        "team": "CW",
        "rank": 505,
        "career_avg": 57.4225,
        "positions": [
            "DEF"
        ],
        "rankADP": 496.81
    },
    {
        "player_id": "CD_I290085",
        "name": "Taylor Duryea",
        "dob": "1991-04-24",
        "fantasy_average": 50.5,
        "team": "WB",
        "rank": 502,
        "career_avg": 64.8807,
        "positions": [
            "DEF"
        ],
        "rankADP": 497.67
    },
    {
        "player_id": "CD_I1000061",
        "name": "Callum Coleman-Jones",
        "dob": "1999-06-13",
        "fantasy_average": 50.3,
        "team": "NM",
        "rank": 504,
        "career_avg": 53.9286,
        "positions": [
            "FWD"
        ],
        "rankADP": 499.8
    },
    {
        "player_id": "CD_I1011633",
        "name": "James Willis",
        "dob": "2003-07-10",
        "fantasy_average": 0,
        "team": "GE",
        "rank": 506,
        "career_avg": 0,
        "positions": [
            "MID"
        ],
        "rankADP": 501.53
    },
    {
        "player_id": "CD_I1002401",
        "name": "Brandon Starcevich",
        "dob": "1999-07-24",
        "fantasy_average": 49.3,
        "team": "BL",
        "rank": 515,
        "career_avg": 50.7011,
        "positions": [
            "DEF"
        ],
        "rankADP": 501.73
    },
    {
        "player_id": "CD_I291357",
        "name": "Gary Rohan",
        "dob": "1991-06-07",
        "fantasy_average": 50.2,
        "team": "GE",
        "rank": 508,
        "career_avg": 51.7123,
        "positions": [
            "FWD"
        ],
        "rankADP": 503.2
    },
    {
        "player_id": "CD_I1012210",
        "name": "Matt Roberts",
        "dob": "2003-07-31",
        "fantasy_average": 30.8,
        "team": "SY",
        "rank": 517,
        "career_avg": 27.2857,
        "positions": [
            "MID"
        ],
        "rankADP": 504.47
    },
    {
        "player_id": "CD_I1004948",
        "name": "Cooper Stephens",
        "dob": "2001-01-17",
        "fantasy_average": 0,
        "team": "HW",
        "rank": 501,
        "career_avg": 51.8,
        "positions": [
            "MID"
        ],
        "rankADP": 504.64
    },
    {
        "player_id": "CD_I1017751",
        "name": "Josh Fahey",
        "dob": "2003-11-11",
        "fantasy_average": 33.7,
        "team": "GWS",
        "rank": 588,
        "career_avg": 33.7143,
        "positions": [
            "MID"
        ],
        "rankADP": 505.5
    },
    {
        "player_id": "CD_I1017700",
        "name": "Jesse Motlop",
        "dob": "2003-11-23",
        "fantasy_average": 49.7,
        "team": "CA",
        "rank": 511,
        "career_avg": 45.8333,
        "positions": [
            "FWD"
        ],
        "rankADP": 505.53
    },
    {
        "player_id": "CD_I1008510",
        "name": "Corey Durdin",
        "dob": "2002-04-14",
        "fantasy_average": 49.5,
        "team": "CA",
        "rank": 514,
        "career_avg": 43.2353,
        "positions": [
            "FWD"
        ],
        "rankADP": 506.53
    },
    {
        "player_id": "CD_I293738",
        "name": "Sam Frost",
        "dob": "1993-08-28",
        "fantasy_average": 49.6,
        "team": "HW",
        "rank": 513,
        "career_avg": 50.3203,
        "positions": [
            "DEF"
        ],
        "rankADP": 506.73
    },
    {
        "player_id": "CD_I1017043",
        "name": "Judson Clarke",
        "dob": "2003-10-17",
        "fantasy_average": 39.7,
        "team": "RI",
        "rank": 586,
        "career_avg": 40.1875,
        "positions": [
            "FWD"
        ],
        "rankADP": 507.67
    },
    {
        "player_id": "CD_I1021122",
        "name": "Harry Rowston",
        "dob": "2004-08-12",
        "fantasy_average": 29.4,
        "team": "GWS",
        "rank": 595,
        "career_avg": 29.4286,
        "positions": [
            "MID"
        ],
        "rankADP": 508.45
    },
    {
        "player_id": "CD_I1009421",
        "name": "Finn Maginness",
        "dob": "2001-02-23",
        "fantasy_average": 43,
        "team": "HW",
        "rank": 520,
        "career_avg": 47.5313,
        "positions": [
            "MID"
        ],
        "rankADP": 508.53
    },
    {
        "player_id": "CD_I1009229",
        "name": "Sam De Koning",
        "dob": "2001-02-26",
        "fantasy_average": 47.9,
        "team": "GE",
        "rank": 519,
        "career_avg": 47.225,
        "positions": [
            "DEF"
        ],
        "rankADP": 509
    },
    {
        "player_id": "CD_I1000937",
        "name": "Jack Henry",
        "dob": "1998-08-29",
        "fantasy_average": 49.5,
        "team": "GE",
        "rank": 516,
        "career_avg": 51.4519,
        "positions": [
            "DEF"
        ],
        "rankADP": 509.93
    },
    {
        "player_id": "CD_I281007",
        "name": "Michael Walters",
        "dob": "1991-01-07",
        "fantasy_average": 49.4,
        "team": "FR",
        "rank": 518,
        "career_avg": 73.8021,
        "positions": [
            "FWD"
        ],
        "rankADP": 511.87
    },
    {
        "player_id": "CD_I1017091",
        "name": "Jai Serong",
        "dob": "2003-02-16",
        "fantasy_average": 47,
        "team": "HW",
        "rank": 523,
        "career_avg": 40.75,
        "positions": [
            "DEF"
        ],
        "rankADP": 513.88
    },
    {
        "player_id": "CD_I1029416",
        "name": "Ryan Maric",
        "dob": "2004-09-06",
        "fantasy_average": 49.3,
        "team": "WC",
        "rank": 521,
        "career_avg": 49.3,
        "positions": [
            "FWD"
        ],
        "rankADP": 514.4
    },
    {
        "player_id": "CD_I1020959",
        "name": "Daniel Turner",
        "dob": "2002-01-28",
        "fantasy_average": 47,
        "team": "ME",
        "rank": 525,
        "career_avg": 40.3333,
        "positions": [
            "DEF"
        ],
        "rankADP": 514.88
    },
    {
        "player_id": "CD_I994077",
        "name": "Mabior Chol",
        "dob": "1997-01-29",
        "fantasy_average": 49,
        "team": "HW",
        "rank": 522,
        "career_avg": 50.5667,
        "positions": [
            "FWD"
        ],
        "rankADP": 515
    },
    {
        "player_id": "CD_I1017396",
        "name": "Mac Andrew",
        "dob": "2003-12-04",
        "fantasy_average": 48.9,
        "team": "GC",
        "rank": 524,
        "career_avg": 48.8095,
        "positions": [
            "DEF"
        ],
        "rankADP": 515.4
    },
    {
        "player_id": "CD_I1002347",
        "name": "Jack Payne",
        "dob": "1999-10-15",
        "fantasy_average": 46.5,
        "team": "BL",
        "rank": 528,
        "career_avg": 48.7273,
        "positions": [
            "DEF"
        ],
        "rankADP": 517.75
    },
    {
        "player_id": "CD_I1012857",
        "name": "Jack Ginnivan",
        "dob": "2002-12-09",
        "fantasy_average": 45.7,
        "team": "HW",
        "rank": 533,
        "career_avg": 49.0278,
        "positions": [
            "FWD"
        ],
        "rankADP": 519.14
    },
    {
        "player_id": "CD_I1006030",
        "name": "Jacob Koschitzke",
        "dob": "2000-07-11",
        "fantasy_average": 48.8,
        "team": "RI",
        "rank": 526,
        "career_avg": 49.1915,
        "positions": [
            "FWD"
        ],
        "rankADP": 519.27
    },
    {
        "player_id": "CD_I997823",
        "name": "Josh Rotham",
        "dob": "1998-02-25",
        "fantasy_average": 46.4,
        "team": "WC",
        "rank": 530,
        "career_avg": 57.1695,
        "positions": [
            "DEF"
        ],
        "rankADP": 519.81
    },
    {
        "player_id": "CD_I1008230",
        "name": "Nick Murray",
        "dob": "2000-12-18",
        "fantasy_average": 39.9,
        "team": "AD",
        "rank": 584,
        "career_avg": 37.5814,
        "positions": [
            "DEF"
        ],
        "rankADP": 520
    },
    {
        "player_id": "CD_I1016433",
        "name": "Shannon Neale",
        "dob": "2002-07-25",
        "fantasy_average": 48,
        "team": "GE",
        "rank": 529,
        "career_avg": 41.6,
        "positions": [
            "FWD"
        ],
        "rankADP": 520.08
    },
    {
        "player_id": "CD_I1002795",
        "name": "Jordan Boyd",
        "dob": "1998-09-22",
        "fantasy_average": 48.5,
        "team": "CA",
        "rank": 527,
        "career_avg": 46.4,
        "positions": [
            "DEF"
        ],
        "rankADP": 521.07
    },
    {
        "player_id": "CD_I990840",
        "name": "Jack Hayes",
        "dob": "1996-03-06",
        "fantasy_average": 43,
        "team": "SK",
        "rank": 549,
        "career_avg": 58,
        "positions": [
            "FWD"
        ],
        "rankADP": 521.1
    },
    {
        "player_id": "CD_I1023496",
        "name": "Noah Long",
        "dob": "2004-08-23",
        "fantasy_average": 46.5,
        "team": "WC",
        "rank": 538,
        "career_avg": 46.4737,
        "positions": [
            "FWD"
        ],
        "rankADP": 521.3
    },
    {
        "player_id": "CD_I1011755",
        "name": "Harrison Jones",
        "dob": "2001-02-25",
        "fantasy_average": 42.8,
        "team": "ES",
        "rank": 536,
        "career_avg": 42.5161,
        "positions": [
            "FWD"
        ],
        "rankADP": 521.42
    },
    {
        "player_id": "CD_I1006013",
        "name": "James Peatling",
        "dob": "2000-08-21",
        "fantasy_average": 48,
        "team": "GWS",
        "rank": 531,
        "career_avg": 49.68,
        "positions": [
            "FWD"
        ],
        "rankADP": 521.69
    },
    {
        "player_id": "CD_I1015777",
        "name": "Ryan Angwin",
        "dob": "2002-12-12",
        "fantasy_average": 38.9,
        "team": "GWS",
        "rank": 535,
        "career_avg": 37.1875,
        "positions": [
            "MID"
        ],
        "rankADP": 521.93
    },
    {
        "player_id": "CD_I993806",
        "name": "Sam Weideman",
        "dob": "1997-06-26",
        "fantasy_average": 47.6,
        "team": "ES",
        "rank": 532,
        "career_avg": 44.5833,
        "positions": [
            "FWD"
        ],
        "rankADP": 523.15
    },
    {
        "player_id": "CD_I1010708",
        "name": "Sam Butler",
        "dob": "2003-02-10",
        "fantasy_average": 46.6,
        "team": "HW",
        "rank": 537,
        "career_avg": 41.1176,
        "positions": [
            "FWD"
        ],
        "rankADP": 523.44
    },
    {
        "player_id": "CD_I998180",
        "name": "Bailey Banfield",
        "dob": "1998-02-26",
        "fantasy_average": 47.5,
        "team": "FR",
        "rank": 534,
        "career_avg": 50.2857,
        "positions": [
            "FWD"
        ],
        "rankADP": 524.33
    },
    {
        "player_id": "CD_I1017703",
        "name": "Judd McVee",
        "dob": "2003-08-07",
        "fantasy_average": 46.1,
        "team": "ME",
        "rank": 539,
        "career_avg": 46.1304,
        "positions": [
            "DEF"
        ],
        "rankADP": 526.33
    },
    {
        "player_id": "CD_I1012881",
        "name": "Ollie Lord",
        "dob": "2002-01-02",
        "fantasy_average": 35,
        "team": "PA",
        "rank": 543,
        "career_avg": 35,
        "positions": [
            "FWD"
        ],
        "rankADP": 527
    },
    {
        "player_id": "CD_I1006144",
        "name": "Ben King",
        "dob": "2000-07-07",
        "fantasy_average": 45.6,
        "team": "GC",
        "rank": 544,
        "career_avg": 44.2877,
        "positions": [
            "FWD"
        ],
        "rankADP": 527.1
    },
    {
        "player_id": "CD_I1005199",
        "name": "Elliott Himmelberg",
        "dob": "1998-06-04",
        "fantasy_average": 46,
        "team": "AD",
        "rank": 540,
        "career_avg": 50.439,
        "positions": [
            "FWD"
        ],
        "rankADP": 527.56
    },
    {
        "player_id": "CD_I997974",
        "name": "Ash Johnson",
        "dob": "1997-10-06",
        "fantasy_average": 45.7,
        "team": "CW",
        "rank": 541,
        "career_avg": 48.2381,
        "positions": [
            "FWD"
        ],
        "rankADP": 528.67
    },
    {
        "player_id": "CD_I1008198",
        "name": "Tom McCartin",
        "dob": "1999-12-30",
        "fantasy_average": 45.7,
        "team": "SY",
        "rank": 542,
        "career_avg": 45.6731,
        "positions": [
            "DEF"
        ],
        "rankADP": 530.11
    },
    {
        "player_id": "CD_I1002282",
        "name": "Charlie Spargo",
        "dob": "1999-11-25",
        "fantasy_average": 45.5,
        "team": "ME",
        "rank": 545,
        "career_avg": 52.0909,
        "positions": [
            "FWD"
        ],
        "rankADP": 532
    },
    {
        "player_id": "CD_I1023542",
        "name": "Ted Clohesy",
        "dob": "2004-09-06",
        "fantasy_average": 18,
        "team": "GE",
        "rank": 654,
        "career_avg": 18,
        "positions": [
            "FWD"
        ],
        "rankADP": 533.25
    },
    {
        "player_id": "CD_I1017114",
        "name": "Tyler Sonsie",
        "dob": "2003-01-27",
        "fantasy_average": 35.7,
        "team": "RI",
        "rank": 567,
        "career_avg": 53.6667,
        "positions": [
            "FWD"
        ],
        "rankADP": 535.44
    },
    {
        "player_id": "CD_I999824",
        "name": "Quinton Narkle",
        "dob": "1997-12-03",
        "fantasy_average": 45.3,
        "team": "PA",
        "rank": 550,
        "career_avg": 55.7429,
        "positions": [
            "FWD"
        ],
        "rankADP": 537.11
    },
    {
        "player_id": "CD_I1005986",
        "name": "Malcolm Rosas",
        "dob": "2001-06-27",
        "fantasy_average": 45.2,
        "team": "GC",
        "rank": 551,
        "career_avg": 44.2162,
        "positions": [
            "FWD"
        ],
        "rankADP": 538.22
    },
    {
        "player_id": "CD_I1020979",
        "name": "Cooper Harvey",
        "dob": "2004-07-12",
        "fantasy_average": 44.7,
        "team": "NM",
        "rank": 552,
        "career_avg": 44.6667,
        "positions": [
            "FWD"
        ],
        "rankADP": 539.22
    },
    {
        "player_id": "CD_I1018018",
        "name": "Cooper Sharman",
        "dob": "2000-07-25",
        "fantasy_average": 44.4,
        "team": "SK",
        "rank": 555,
        "career_avg": 46.8571,
        "positions": [
            "FWD"
        ],
        "rankADP": 539.5
    },
    {
        "player_id": "CD_I1008185",
        "name": "Ned McHenry",
        "dob": "2000-07-13",
        "fantasy_average": 44.5,
        "team": "AD",
        "rank": 553,
        "career_avg": 47.7333,
        "positions": [
            "FWD"
        ],
        "rankADP": 540.56
    },
    {
        "player_id": "CD_I1005107",
        "name": "Nathan Murphy",
        "dob": "1999-12-15",
        "fantasy_average": 44.2,
        "team": "CW",
        "rank": 556,
        "career_avg": 44.7347,
        "positions": [
            "DEF"
        ],
        "rankADP": 541.25
    },
    {
        "player_id": "CD_I990816",
        "name": "Aaron Francis",
        "dob": "1997-08-10",
        "fantasy_average": 44.5,
        "team": "SY",
        "rank": 554,
        "career_avg": 48.5758,
        "positions": [
            "DEF"
        ],
        "rankADP": 541.56
    },
    {
        "player_id": "CD_I298409",
        "name": "Alex Pearce",
        "dob": "1995-06-09",
        "fantasy_average": 44.2,
        "team": "FR",
        "rank": 557,
        "career_avg": 42.8762,
        "positions": [
            "DEF"
        ],
        "rankADP": 542.5
    },
    {
        "player_id": "CD_I1013201",
        "name": "Jye Menzie",
        "dob": "2002-10-28",
        "fantasy_average": 43.8,
        "team": "ES",
        "rank": 560,
        "career_avg": 43.6522,
        "positions": [
            "FWD"
        ],
        "rankADP": 543.5
    },
    {
        "player_id": "CD_I1024666",
        "name": "Lloyd Johnston",
        "dob": "2004-09-21",
        "fantasy_average": 44,
        "team": "GC",
        "rank": 558,
        "career_avg": 44,
        "positions": [
            "DEF"
        ],
        "rankADP": 543.75
    },
    {
        "player_id": "CD_I1002947",
        "name": "Paul Curtis",
        "dob": "2003-03-04",
        "fantasy_average": 43.9,
        "team": "NM",
        "rank": 559,
        "career_avg": 47.0278,
        "positions": [
            "FWD"
        ],
        "rankADP": 545.13
    },
    {
        "player_id": "CD_I1002220",
        "name": "Esava Ratugolea",
        "dob": "1998-07-24",
        "fantasy_average": 40.5,
        "team": "PA",
        "rank": 566,
        "career_avg": 45.7571,
        "positions": [
            "DEF"
        ],
        "rankADP": 545.2
    },
    {
        "player_id": "CD_I1013153",
        "name": "Patrick Parnell",
        "dob": "2002-03-04",
        "fantasy_average": 43.6,
        "team": "AD",
        "rank": 563,
        "career_avg": 46.5,
        "positions": [
            "DEF"
        ],
        "rankADP": 545.38
    },
    {
        "player_id": "CD_I993917",
        "name": "Ben Long",
        "dob": "1997-08-21",
        "fantasy_average": 43.8,
        "team": "GC",
        "rank": 561,
        "career_avg": 49.2747,
        "positions": [
            "DEF"
        ],
        "rankADP": 546.63
    },
    {
        "player_id": "CD_I295222",
        "name": "Joel Hamling",
        "dob": "1993-04-09",
        "fantasy_average": 43.8,
        "team": "SY",
        "rank": 562,
        "career_avg": 49.0116,
        "positions": [
            "DEF"
        ],
        "rankADP": 547.63
    },
    {
        "player_id": "CD_I1027656",
        "name": "Cooper Simpson",
        "dob": "2005-02-13",
        "fantasy_average": 0,
        "team": "FR",
        "rank": 601,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 548.88
    },
    {
        "player_id": "CD_I1009308",
        "name": "Noah Cumberland",
        "dob": "2001-03-15",
        "fantasy_average": 43.2,
        "team": "RI",
        "rank": 564,
        "career_avg": 51.875,
        "positions": [
            "FWD"
        ],
        "rankADP": 549.25
    },
    {
        "player_id": "CD_I1009386",
        "name": "Jaxon Prior",
        "dob": "2001-06-04",
        "fantasy_average": 43,
        "team": "BL",
        "rank": 565,
        "career_avg": 47.9667,
        "positions": [
            "DEF"
        ],
        "rankADP": 550.25
    },
    {
        "player_id": "CD_I1009320",
        "name": "Hewago Oea",
        "dob": "2001-11-13",
        "fantasy_average": 38.5,
        "team": "GC",
        "rank": 572,
        "career_avg": 38.5,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 553.33
    },
    {
        "player_id": "CD_I281078",
        "name": "Liam Jones",
        "dob": "1991-02-24",
        "fantasy_average": 42.6,
        "team": "WB",
        "rank": 569,
        "career_avg": 47.4085,
        "positions": [
            "DEF"
        ],
        "rankADP": 553.88
    },
    {
        "player_id": "CD_I290527",
        "name": "Trent McKenzie",
        "dob": "1992-04-03",
        "fantasy_average": 42.5,
        "team": "PA",
        "rank": 570,
        "career_avg": 59.4083,
        "positions": [
            "DEF"
        ],
        "rankADP": 555
    },
    {
        "player_id": "CD_I1021015",
        "name": "Karl Worner",
        "dob": "2002-06-16",
        "fantasy_average": 37.5,
        "team": "FR",
        "rank": 582,
        "career_avg": 37.5,
        "positions": [
            "DEF"
        ],
        "rankADP": 555.67
    },
    {
        "player_id": "CD_I294013",
        "name": "Sean Lemmens",
        "dob": "1994-11-02",
        "fantasy_average": 42.3,
        "team": "GC",
        "rank": 571,
        "career_avg": 48.8483,
        "positions": [
            "DEF"
        ],
        "rankADP": 556.5
    },
    {
        "player_id": "CD_I1008975",
        "name": "Kaine Baldwin",
        "dob": "2002-05-30",
        "fantasy_average": 42,
        "team": "ES",
        "rank": 573,
        "career_avg": 38.5,
        "positions": [
            "DEF"
        ],
        "rankADP": 557.88
    },
    {
        "player_id": "CD_I293854",
        "name": "Matt Taberner",
        "dob": "1993-06-17",
        "fantasy_average": 41.3,
        "team": "FR",
        "rank": 575,
        "career_avg": 59.547,
        "positions": [
            "FWD"
        ],
        "rankADP": 560.25
    },
    {
        "player_id": "CD_I1004819",
        "name": "Jed McEntee",
        "dob": "2001-02-15",
        "fantasy_average": 41.3,
        "team": "PA",
        "rank": 576,
        "career_avg": 40.75,
        "positions": [
            "FWD"
        ],
        "rankADP": 561.25
    },
    {
        "player_id": "CD_I1005326",
        "name": "Jackson Mead",
        "dob": "2001-09-30",
        "fantasy_average": 35.9,
        "team": "PA",
        "rank": 581,
        "career_avg": 42.8824,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 562.33
    },
    {
        "player_id": "CD_I1008478",
        "name": "Rhyan Mansell",
        "dob": "2000-06-04",
        "fantasy_average": 41.2,
        "team": "RI",
        "rank": 577,
        "career_avg": 43.25,
        "positions": [
            "FWD"
        ],
        "rankADP": 562.38
    },
    {
        "player_id": "CD_I1015781",
        "name": "Charlie Comben",
        "dob": "2001-07-20",
        "fantasy_average": 41.1,
        "team": "NM",
        "rank": 578,
        "career_avg": 39.5556,
        "positions": [
            "FWD"
        ],
        "rankADP": 563.38
    },
    {
        "player_id": "CD_I996743",
        "name": "Lewis Melican",
        "dob": "1996-11-04",
        "fantasy_average": 40.9,
        "team": "SY",
        "rank": 579,
        "career_avg": 43.6552,
        "positions": [
            "DEF"
        ],
        "rankADP": 564.38
    },
    {
        "player_id": "CD_I1011243",
        "name": "Callum Jamieson",
        "dob": "2000-07-31",
        "fantasy_average": 40.3,
        "team": "WC",
        "rank": 580,
        "career_avg": 40.2308,
        "positions": [
            "FWD"
        ],
        "rankADP": 565.88
    },
    {
        "player_id": "CD_I997254",
        "name": "Nathan Kreuger",
        "dob": "1999-06-25",
        "fantasy_average": 10,
        "team": "CW",
        "rank": 659,
        "career_avg": 32,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 566.75
    },
    {
        "player_id": "CD_I293883",
        "name": "Jed Bews",
        "dob": "1993-12-14",
        "fantasy_average": 40.1,
        "team": "GE",
        "rank": 583,
        "career_avg": 47.6689,
        "positions": [
            "DEF"
        ],
        "rankADP": 567.88
    },
    {
        "player_id": "CD_I1012852",
        "name": "Charlie Lazzaro",
        "dob": "2002-03-25",
        "fantasy_average": 33.3,
        "team": "NM",
        "rank": 593,
        "career_avg": 38.12,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 569.88
    },
    {
        "player_id": "CD_I1015332",
        "name": "Harvey Harrison",
        "dob": "2003-11-10",
        "fantasy_average": 39.5,
        "team": "CW",
        "rank": 589,
        "career_avg": 39.5,
        "positions": [
            "FWD"
        ],
        "rankADP": 570.14
    },
    {
        "player_id": "CD_I296334",
        "name": "Orazio Fantasia",
        "dob": "1995-09-14",
        "fantasy_average": 37.7,
        "team": "CA",
        "rank": 604,
        "career_avg": 64.2872,
        "positions": [
            "FWD"
        ],
        "rankADP": 570.63
    },
    {
        "player_id": "CD_I1013532",
        "name": "Tom Fullarton",
        "dob": "1999-02-23",
        "fantasy_average": 0,
        "team": "ME",
        "rank": 678,
        "career_avg": 39.1333,
        "positions": [
            "FWD"
        ],
        "rankADP": 571
    },
    {
        "player_id": "CD_I991939",
        "name": "Zaine Cordy",
        "dob": "1996-10-27",
        "fantasy_average": 39.2,
        "team": "SK",
        "rank": 590,
        "career_avg": 43.8115,
        "positions": [
            "DEF",
            "FWD"
        ],
        "rankADP": 571.14
    },
    {
        "player_id": "CD_I296269",
        "name": "Darcy Gardiner",
        "dob": "1995-09-22",
        "fantasy_average": 39.5,
        "team": "BL",
        "rank": 587,
        "career_avg": 49.8446,
        "positions": [
            "DEF"
        ],
        "rankADP": 571.88
    },
    {
        "player_id": "CD_I1011449",
        "name": "Zane Trew",
        "dob": "2002-04-26",
        "fantasy_average": 30.5,
        "team": "WC",
        "rank": 591,
        "career_avg": 32.5,
        "positions": [
            "MID"
        ],
        "rankADP": 572
    },
    {
        "player_id": "CD_I1016189",
        "name": "Henry Smith",
        "dob": "2002-09-24",
        "fantasy_average": 0,
        "team": "BL",
        "rank": 663,
        "career_avg": 0,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 572.75
    },
    {
        "player_id": "CD_I1009029",
        "name": "James Borlase",
        "dob": "2002-07-18",
        "fantasy_average": 39,
        "team": "AD",
        "rank": 592,
        "career_avg": 39,
        "positions": [
            "DEF"
        ],
        "rankADP": 573.14
    },
    {
        "player_id": "CD_I1012817",
        "name": "Zach Reid",
        "dob": "2002-03-02",
        "fantasy_average": 0,
        "team": "ES",
        "rank": 680,
        "career_avg": 41.5,
        "positions": [
            "DEF"
        ],
        "rankADP": 574
    },
    {
        "player_id": "CD_I1017255",
        "name": "Francis Evans",
        "dob": "2001-08-23",
        "fantasy_average": 39,
        "team": "PA",
        "rank": 594,
        "career_avg": 37.125,
        "positions": [
            "FWD"
        ],
        "rankADP": 574.86
    },
    {
        "player_id": "CD_I1018296",
        "name": "Kalin Lane",
        "dob": "2001-12-05",
        "fantasy_average": 0,
        "team": "BL",
        "rank": 664,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 575.25
    },
    {
        "player_id": "CD_I1004530",
        "name": "Jacob Wehr",
        "dob": "1998-07-05",
        "fantasy_average": 28.8,
        "team": "GWS",
        "rank": 596,
        "career_avg": 50.2857,
        "positions": [
            "MID"
        ],
        "rankADP": 576
    },
    {
        "player_id": "CD_I997501",
        "name": "Ryan Gardner",
        "dob": "1997-06-01",
        "fantasy_average": 38.8,
        "team": "WB",
        "rank": 597,
        "career_avg": 37.7292,
        "positions": [
            "DEF"
        ],
        "rankADP": 576.86
    },
    {
        "player_id": "CD_I1017970",
        "name": "Conrad Williams",
        "dob": "2004-11-30",
        "fantasy_average": 0,
        "team": "FR",
        "rank": 598,
        "career_avg": 0,
        "positions": [
            "MID",
            "FWD"
        ],
        "rankADP": 578
    },
    {
        "player_id": "CD_I1017086",
        "name": "Tom Brown",
        "dob": "2003-07-30",
        "fantasy_average": 62,
        "team": "RI",
        "rank": 649,
        "career_avg": 62,
        "positions": [
            "DEF"
        ],
        "rankADP": 578.25
    },
    {
        "player_id": "CD_I1012127",
        "name": "Brandon Ryan",
        "dob": "1997-11-07",
        "fantasy_average": 38.7,
        "team": "BL",
        "rank": 599,
        "career_avg": 38.6667,
        "positions": [
            "FWD"
        ],
        "rankADP": 578.57
    },
    {
        "player_id": "CD_I1023446",
        "name": "Alex Mirkov",
        "dob": "1999-11-17",
        "fantasy_average": 0,
        "team": "CA",
        "rank": 666,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 578.75
    },
    {
        "player_id": "CD_I1017078",
        "name": "Josh Sinn",
        "dob": "2003-01-07",
        "fantasy_average": 19.7,
        "team": "PA",
        "rank": 605,
        "career_avg": 23.75,
        "positions": [
            "MID"
        ],
        "rankADP": 579
    },
    {
        "player_id": "CD_I1009410",
        "name": "Brandon Walker",
        "dob": "2002-10-17",
        "fantasy_average": 38.6,
        "team": "FR",
        "rank": 600,
        "career_avg": 46.9302,
        "positions": [
            "DEF"
        ],
        "rankADP": 579.86
    },
    {
        "player_id": "CD_I1014026",
        "name": "Kai Lohmann",
        "dob": "2003-05-06",
        "fantasy_average": 32.3,
        "team": "BL",
        "rank": 627,
        "career_avg": 32,
        "positions": [
            "FWD"
        ],
        "rankADP": 579.88
    },
    {
        "player_id": "CD_I1018425",
        "name": "Taj Woewodin",
        "dob": "2003-03-26",
        "fantasy_average": 38.5,
        "team": "ME",
        "rank": 602,
        "career_avg": 38.5,
        "positions": [
            "FWD"
        ],
        "rankADP": 581.86
    },
    {
        "player_id": "CD_I1005053",
        "name": "Noah Answerth",
        "dob": "1999-08-06",
        "fantasy_average": 38.3,
        "team": "BL",
        "rank": 603,
        "career_avg": 54.6863,
        "positions": [
            "FWD"
        ],
        "rankADP": 583
    },
    {
        "player_id": "CD_I1023489",
        "name": "Hudson O'Keeffe",
        "dob": "2004-12-16",
        "fantasy_average": 0,
        "team": "CA",
        "rank": 669,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 583
    },
    {
        "player_id": "CD_I1015748",
        "name": "Aiden Begg",
        "dob": "2002-10-08",
        "fantasy_average": 0,
        "team": "CW",
        "rank": 671,
        "career_avg": 43.6667,
        "positions": [
            "RUC"
        ],
        "rankADP": 585.25
    },
    {
        "player_id": "CD_I280819",
        "name": "Dylan Grimes",
        "dob": "1991-07-16",
        "fantasy_average": 37.1,
        "team": "RI",
        "rank": 606,
        "career_avg": 47.7513,
        "positions": [
            "DEF"
        ],
        "rankADP": 585.57
    },
    {
        "player_id": "CD_I1020371",
        "name": "Jack Williams",
        "dob": "2003-12-01",
        "fantasy_average": 37.1,
        "team": "WC",
        "rank": 607,
        "career_avg": 33.8182,
        "positions": [
            "FWD"
        ],
        "rankADP": 586.57
    },
    {
        "player_id": "CD_I1006533",
        "name": "Riley Garcia",
        "dob": "2001-01-30",
        "fantasy_average": 37,
        "team": "WB",
        "rank": 608,
        "career_avg": 41.8889,
        "positions": [
            "FWD"
        ],
        "rankADP": 587.57
    },
    {
        "player_id": "CD_I999715",
        "name": "Jy Farrar",
        "dob": "1996-12-07",
        "fantasy_average": 36.9,
        "team": "GC",
        "rank": 609,
        "career_avg": 49.1765,
        "positions": [
            "DEF"
        ],
        "rankADP": 587.71
    },
    {
        "player_id": "CD_I1018433",
        "name": "Tylar Young",
        "dob": "1998-09-05",
        "fantasy_average": 36.9,
        "team": "RI",
        "rank": 610,
        "career_avg": 36.8947,
        "positions": [
            "DEF"
        ],
        "rankADP": 589.43
    },
    {
        "player_id": "CD_I1003520",
        "name": "Darragh Joyce",
        "dob": "1997-04-23",
        "fantasy_average": 36,
        "team": "BL",
        "rank": 611,
        "career_avg": 34.7647,
        "positions": [
            "DEF"
        ],
        "rankADP": 590.43
    },
    {
        "player_id": "CD_I1017933",
        "name": "Alwyn Davey Jnr",
        "dob": "2004-02-26",
        "fantasy_average": 35.8,
        "team": "ES",
        "rank": 612,
        "career_avg": 35.8,
        "positions": [
            "FWD"
        ],
        "rankADP": 592
    },
    {
        "player_id": "CD_I1005547",
        "name": "Josh Corbett",
        "dob": "1996-04-23",
        "fantasy_average": 35.2,
        "team": "FR",
        "rank": 613,
        "career_avg": 45.9744,
        "positions": [
            "FWD"
        ],
        "rankADP": 592.71
    },
    {
        "player_id": "CD_I291753",
        "name": "Sam Day",
        "dob": "1992-09-06",
        "fantasy_average": 35,
        "team": "GC",
        "rank": 614,
        "career_avg": 50.5781,
        "positions": [
            "FWD"
        ],
        "rankADP": 594
    },
    {
        "player_id": "CD_I1013233",
        "name": "Jack Carroll",
        "dob": "2002-12-20",
        "fantasy_average": 13,
        "team": "CA",
        "rank": 615,
        "career_avg": 46,
        "positions": [
            "MID"
        ],
        "rankADP": 595.43
    },
    {
        "player_id": "CD_I1003546",
        "name": "Joel Smith",
        "dob": "1996-02-25",
        "fantasy_average": 34.8,
        "team": "ME",
        "rank": 616,
        "career_avg": 36.5,
        "positions": [
            "FWD"
        ],
        "rankADP": 596.14
    },
    {
        "player_id": "CD_I1012144",
        "name": "Kallan Dawson",
        "dob": "1998-07-22",
        "fantasy_average": 34,
        "team": "NM",
        "rank": 617,
        "career_avg": 54.6,
        "positions": [
            "DEF"
        ],
        "rankADP": 597.14
    },
    {
        "player_id": "CD_I1020586",
        "name": "Arthur Jones",
        "dob": "2003-07-18",
        "fantasy_average": 33.7,
        "team": "WB",
        "rank": 619,
        "career_avg": 33.6923,
        "positions": [
            "FWD"
        ],
        "rankADP": 598.86
    },
    {
        "player_id": "CD_I1020968",
        "name": "Jackson Archer",
        "dob": "2003-01-09",
        "fantasy_average": 32.8,
        "team": "NM",
        "rank": 626,
        "career_avg": 37.25,
        "positions": [
            "DEF"
        ],
        "rankADP": 599
    },
    {
        "player_id": "CD_I1008616",
        "name": "Matthew Coulthard",
        "dob": "2001-05-11",
        "fantasy_average": 33.3,
        "team": "RI",
        "rank": 620,
        "career_avg": 33.25,
        "positions": [
            "FWD"
        ],
        "rankADP": 599.83
    },
    {
        "player_id": "CD_I1011437",
        "name": "Harry Edwards",
        "dob": "2000-10-01",
        "fantasy_average": 33.5,
        "team": "WC",
        "rank": 621,
        "career_avg": 45.6667,
        "positions": [
            "DEF"
        ],
        "rankADP": 600.57
    },
    {
        "player_id": "CD_I1024982",
        "name": "Oisin Mullin",
        "dob": "2000-02-11",
        "fantasy_average": 30.8,
        "team": "GE",
        "rank": 630,
        "career_avg": 30.8333,
        "positions": [
            "DEF"
        ],
        "rankADP": 601.75
    },
    {
        "player_id": "CD_I290314",
        "name": "Lachlan Keeffe",
        "dob": "1990-04-14",
        "fantasy_average": 32.3,
        "team": "GWS",
        "rank": 628,
        "career_avg": 42.2,
        "positions": [
            "FWD"
        ],
        "rankADP": 602.25
    },
    {
        "player_id": "CD_I1004995",
        "name": "Jordon Butts",
        "dob": "1999-12-31",
        "fantasy_average": 33.4,
        "team": "AD",
        "rank": 623,
        "career_avg": 37.85,
        "positions": [
            "DEF"
        ],
        "rankADP": 602.71
    },
    {
        "player_id": "CD_I1015929",
        "name": "Luke Cleary",
        "dob": "2002-03-05",
        "fantasy_average": 31,
        "team": "WB",
        "rank": 629,
        "career_avg": 52.3333,
        "positions": [
            "DEF"
        ],
        "rankADP": 603.75
    },
    {
        "player_id": "CD_I1013093",
        "name": "Denver Grainger-Barras",
        "dob": "2002-04-17",
        "fantasy_average": 25.9,
        "team": "HW",
        "rank": 639,
        "career_avg": 32.4286,
        "positions": [
            "DEF",
            "FWD"
        ],
        "rankADP": 604.33
    },
    {
        "player_id": "CD_I296280",
        "name": "James Tsitas",
        "dob": "1995-03-03",
        "fantasy_average": 25.8,
        "team": "GC",
        "rank": 640,
        "career_avg": 25.2,
        "positions": [
            "FWD"
        ],
        "rankADP": 606.33
    },
    {
        "player_id": "CD_I1025034",
        "name": "Oliver Dempsey",
        "dob": "2003-01-07",
        "fantasy_average": 32.8,
        "team": "GE",
        "rank": 625,
        "career_avg": 31.8571,
        "positions": [
            "FWD"
        ],
        "rankADP": 606.8
    },
    {
        "player_id": "CD_I1017665",
        "name": "Bodhi Uwland",
        "dob": "2003-07-25",
        "fantasy_average": 30.7,
        "team": "GC",
        "rank": 631,
        "career_avg": 30.6667,
        "positions": [
            "DEF"
        ],
        "rankADP": 607.25
    },
    {
        "player_id": "CD_I1027971",
        "name": "Toby McMullin",
        "dob": "2004-08-06",
        "fantasy_average": 25.7,
        "team": "GWS",
        "rank": 641,
        "career_avg": 25.6667,
        "positions": [
            "FWD"
        ],
        "rankADP": 607.67
    },
    {
        "player_id": "CD_I1032966",
        "name": "James O'Donnell",
        "dob": "2002-08-31",
        "fantasy_average": 33.1,
        "team": "WB",
        "rank": 622,
        "career_avg": 33.0833,
        "positions": [
            "DEF"
        ],
        "rankADP": 608.5
    },
    {
        "player_id": "CD_I1018424",
        "name": "Corey Warner",
        "dob": "2003-10-07",
        "fantasy_average": 20.7,
        "team": "SY",
        "rank": 632,
        "career_avg": 20.6667,
        "positions": [
            "FWD"
        ],
        "rankADP": 608.5
    },
    {
        "player_id": "CD_I993841",
        "name": "Josh Schache",
        "dob": "1997-08-21",
        "fantasy_average": 25,
        "team": "ME",
        "rank": 642,
        "career_avg": 50.5147,
        "positions": [
            "FWD"
        ],
        "rankADP": 609
    },
    {
        "player_id": "CD_I1027965",
        "name": "Max Ramsden",
        "dob": "2003-04-19",
        "fantasy_average": 30.5,
        "team": "HW",
        "rank": 633,
        "career_avg": 30.5,
        "positions": [
            "FWD"
        ],
        "rankADP": 609.75
    },
    {
        "player_id": "CD_I1006100",
        "name": "Thomas Berry",
        "dob": "2000-05-01",
        "fantasy_average": 33,
        "team": "GC",
        "rank": 624,
        "career_avg": 31.85,
        "positions": [
            "FWD"
        ],
        "rankADP": 610.67
    },
    {
        "player_id": "CD_I294643",
        "name": "Alex Sexton",
        "dob": "1993-12-03",
        "fantasy_average": 24.8,
        "team": "GC",
        "rank": 643,
        "career_avg": 53.9231,
        "positions": [
            "FWD"
        ],
        "rankADP": 611.67
    },
    {
        "player_id": "CD_I1017718",
        "name": "Rhett Bazzo",
        "dob": "2003-10-17",
        "fantasy_average": 30.3,
        "team": "WC",
        "rank": 634,
        "career_avg": 37.7895,
        "positions": [
            "DEF"
        ],
        "rankADP": 612
    },
    {
        "player_id": "CD_I1009551",
        "name": "Maurice Rioli",
        "dob": "2002-09-01",
        "fantasy_average": 29.7,
        "team": "RI",
        "rank": 635,
        "career_avg": 35.5385,
        "positions": [
            "FWD"
        ],
        "rankADP": 613
    },
    {
        "player_id": "CD_I1012826",
        "name": "Bailey Laurie",
        "dob": "2002-03-24",
        "fantasy_average": 24.5,
        "team": "ME",
        "rank": 644,
        "career_avg": 24.5,
        "positions": [
            "FWD"
        ],
        "rankADP": 613
    },
    {
        "player_id": "CD_I1011839",
        "name": "James Blanck",
        "dob": "2000-11-20",
        "fantasy_average": 24.3,
        "team": "HW",
        "rank": 645,
        "career_avg": 27.1739,
        "positions": [
            "DEF"
        ],
        "rankADP": 614.33
    },
    {
        "player_id": "CD_I1013278",
        "name": "Reef McInnes",
        "dob": "2002-12-12",
        "fantasy_average": 20.6,
        "team": "CW",
        "rank": 648,
        "career_avg": 28.9,
        "positions": [
            "FWD"
        ],
        "rankADP": 614.67
    },
    {
        "player_id": "CD_I1019038",
        "name": "Aaron Cadman",
        "dob": "2004-03-03",
        "fantasy_average": 24.5,
        "team": "GWS",
        "rank": 636,
        "career_avg": 24.5,
        "positions": [
            "FWD"
        ],
        "rankADP": 615
    },
    {
        "player_id": "CD_I1009015",
        "name": "Lachlan McNeil",
        "dob": "2001-09-02",
        "fantasy_average": 27.5,
        "team": "WB",
        "rank": 637,
        "career_avg": 39.4872,
        "positions": [
            "FWD"
        ],
        "rankADP": 616.25
    },
    {
        "player_id": "CD_I1021152",
        "name": "Jacob Bauer",
        "dob": "2002-06-04",
        "fantasy_average": 23.8,
        "team": "RI",
        "rank": 646,
        "career_avg": 23.75,
        "positions": [
            "FWD"
        ],
        "rankADP": 616.33
    },
    {
        "player_id": "CD_I291509",
        "name": "Adam Kennedy",
        "dob": "1992-07-12",
        "fantasy_average": 26,
        "team": "GWS",
        "rank": 638,
        "career_avg": 57.771,
        "positions": [
            "DEF",
            "FWD"
        ],
        "rankADP": 617.25
    },
    {
        "player_id": "CD_I1000068",
        "name": "Chris Burgess",
        "dob": "1995-11-26",
        "fantasy_average": 22,
        "team": "AD",
        "rank": 647,
        "career_avg": 45.3889,
        "positions": [
            "FWD"
        ],
        "rankADP": 617.33
    },
    {
        "player_id": "CD_I1023144",
        "name": "Robert Hansen Jr",
        "dob": "2004-03-13",
        "fantasy_average": 19,
        "team": "NM",
        "rank": 650,
        "career_avg": 19,
        "positions": [
            "FWD"
        ],
        "rankADP": 622.67
    },
    {
        "player_id": "CD_I294504",
        "name": "Tom Clurey",
        "dob": "1994-03-23",
        "fantasy_average": 16,
        "team": "PA",
        "rank": 657,
        "career_avg": 50.281,
        "positions": [
            "DEF"
        ],
        "rankADP": 623
    },
    {
        "player_id": "CD_I1009392",
        "name": "Jack Buller",
        "dob": "2001-05-16",
        "fantasy_average": 19,
        "team": "SY",
        "rank": 651,
        "career_avg": 19,
        "positions": [
            "FWD"
        ],
        "rankADP": 623.67
    },
    {
        "player_id": "CD_I1013978",
        "name": "James Madden",
        "dob": "1999-11-15",
        "fantasy_average": 18,
        "team": "BL",
        "rank": 652,
        "career_avg": 38.3077,
        "positions": [
            "DEF"
        ],
        "rankADP": 624.67
    },
    {
        "player_id": "CD_I1027021",
        "name": "Josh Carmichael",
        "dob": "1999-09-23",
        "fantasy_average": 8,
        "team": "CW",
        "rank": 653,
        "career_avg": 47.4286,
        "positions": [
            "FWD"
        ],
        "rankADP": 625
    },
    {
        "player_id": "CD_I1015862",
        "name": "Conor Stone",
        "dob": "2002-04-22",
        "fantasy_average": 17.7,
        "team": "GWS",
        "rank": 655,
        "career_avg": 29.4286,
        "positions": [
            "FWD"
        ],
        "rankADP": 626.67
    },
    {
        "player_id": "CD_I1021108",
        "name": "James Tunstill",
        "dob": "2003-07-18",
        "fantasy_average": 16,
        "team": "BL",
        "rank": 656,
        "career_avg": 31.4,
        "positions": [
            "FWD"
        ],
        "rankADP": 628
    },
    {
        "player_id": "CD_I998782",
        "name": "Buku Khamis",
        "dob": "2000-03-24",
        "fantasy_average": 15,
        "team": "WB",
        "rank": 658,
        "career_avg": 42.7,
        "positions": [
            "FWD"
        ],
        "rankADP": 630
    },
    {
        "player_id": "CD_I1023534",
        "name": "Hugh Bond",
        "dob": "2004-09-25",
        "fantasy_average": 0,
        "team": "AD",
        "rank": 660,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 634
    },
    {
        "player_id": "CD_I1008159",
        "name": "Will Hamill",
        "dob": "2000-11-17",
        "fantasy_average": 0,
        "team": "AD",
        "rank": 661,
        "career_avg": 37.1622,
        "positions": [
            "DEF"
        ],
        "rankADP": 636
    },
    {
        "player_id": "CD_I1020424",
        "name": "Jaiden Hunter",
        "dob": "2002-04-20",
        "fantasy_average": 0,
        "team": "ES",
        "rank": 675,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 636
    },
    {
        "player_id": "CD_I1013260",
        "name": "Carter Michael",
        "dob": "2002-05-22",
        "fantasy_average": 0,
        "team": "BL",
        "rank": 662,
        "career_avg": 47,
        "positions": [
            "DEF"
        ],
        "rankADP": 637
    },
    {
        "player_id": "CD_I1017961",
        "name": "Jayden Davey",
        "dob": "2004-02-26",
        "fantasy_average": 0,
        "team": "ES",
        "rank": 676,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 637
    },
    {
        "player_id": "CD_I1023487",
        "name": "Lewis Hayes",
        "dob": "2004-12-17",
        "fantasy_average": 0,
        "team": "ES",
        "rank": 677,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 638
    },
    {
        "player_id": "CD_I1012521",
        "name": "Tex Wanganeen",
        "dob": "2003-10-10",
        "fantasy_average": 0,
        "team": "ES",
        "rank": 679,
        "career_avg": 22,
        "positions": [
            "FWD"
        ],
        "rankADP": 639
    },
    {
        "player_id": "CD_I1028105",
        "name": "Shadeau Brain",
        "dob": "2004-02-13",
        "fantasy_average": 0,
        "team": "BL",
        "rank": 665,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 640
    },
    {
        "player_id": "CD_I1027701",
        "name": "Max Knobel",
        "dob": "2004-06-27",
        "fantasy_average": 0,
        "team": "FR",
        "rank": 681,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 642
    },
    {
        "player_id": "CD_I1022927",
        "name": "Hugh Davies",
        "dob": "2004-09-28",
        "fantasy_average": 0,
        "team": "FR",
        "rank": 682,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 642
    },
    {
        "player_id": "CD_I1020072",
        "name": "Harry Lemmey",
        "dob": "2004-01-30",
        "fantasy_average": 0,
        "team": "CA",
        "rank": 668,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 643
    },
    {
        "player_id": "CD_I1012048",
        "name": "Sebit Kuek",
        "dob": "2000-11-11",
        "fantasy_average": 0,
        "team": "FR",
        "rank": 683,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 643
    },
    {
        "player_id": "CD_I1020668",
        "name": "Joshua Draper",
        "dob": "2004-02-08",
        "fantasy_average": 0,
        "team": "FR",
        "rank": 684,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 643
    },
    {
        "player_id": "CD_I1023346",
        "name": "Liam Reidy",
        "dob": "2000-06-14",
        "fantasy_average": 0,
        "team": "FR",
        "rank": 685,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 644
    },
    {
        "player_id": "CD_I297767",
        "name": "Sam Durdin",
        "dob": "1996-06-06",
        "fantasy_average": 0,
        "team": "CA",
        "rank": 670,
        "career_avg": 38.087,
        "positions": [
            "DEF"
        ],
        "rankADP": 645.67
    },
    {
        "player_id": "CD_I1027852",
        "name": "Oscar Murdoch",
        "dob": "2004-09-24",
        "fantasy_average": 0,
        "team": "GE",
        "rank": 686,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 646
    },
    {
        "player_id": "CD_I1019945",
        "name": "Phoenix Foster",
        "dob": "2004-09-12",
        "fantasy_average": 0,
        "team": "GE",
        "rank": 687,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 647
    },
    {
        "player_id": "CD_I1009197",
        "name": "Charlie Dean",
        "dob": "2001-06-19",
        "fantasy_average": 0,
        "team": "CW",
        "rank": 672,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 648
    },
    {
        "player_id": "CD_I1005150",
        "name": "Emerson Jeka",
        "dob": "2001-09-18",
        "fantasy_average": 0,
        "team": "GE",
        "rank": 688,
        "career_avg": 36.4286,
        "positions": [
            "DEF"
        ],
        "rankADP": 648
    },
    {
        "player_id": "CD_I1008239",
        "name": "Joe Richards",
        "dob": "1999-11-23",
        "fantasy_average": 0,
        "team": "CW",
        "rank": 673,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 649.67
    },
    {
        "player_id": "CD_I1018106",
        "name": "Joshua Bennetts",
        "dob": "2004-08-09",
        "fantasy_average": 0,
        "team": "HW",
        "rank": 689,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1029973",
        "name": "Oliver Sestan",
        "dob": "2004-04-15",
        "fantasy_average": 0,
        "team": "ME",
        "rank": 690,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1006193",
        "name": "Bigoa Nyuon",
        "dob": "2001-05-18",
        "fantasy_average": 0,
        "team": "NM",
        "rank": 691,
        "career_avg": 23,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1027899",
        "name": "Nate Caddy",
        "dob": "2005-07-14",
        "fantasy_average": 0,
        "team": "ES",
        "rank": 697,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 295.47
    },
    {
        "player_id": "CD_I1023736",
        "name": "Jed Walter",
        "dob": "2005-06-08",
        "fantasy_average": 0,
        "team": "GC",
        "rank": 700,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 375.4
    },
    {
        "player_id": "CD_I1013996",
        "name": "Jordan Croft ",
        "dob": "2005-05-12",
        "fantasy_average": 0,
        "team": "WB",
        "rank": 692,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 581
    },
    {
        "player_id": "CD_I1015323",
        "name": "Isaac Keeler",
        "dob": "2004-04-23",
        "fantasy_average": 0,
        "team": "SK",
        "rank": 693,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1020097",
        "name": "Ashton Moir",
        "dob": "2005-04-15",
        "fantasy_average": 0,
        "team": "CA",
        "rank": 694,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023142",
        "name": "Tyrell Dewar",
        "dob": "2004-03-27",
        "fantasy_average": 0,
        "team": "WC",
        "rank": 695,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023640",
        "name": "Koltyn Tholstrup",
        "dob": "2005-06-28",
        "fantasy_average": 0,
        "team": "ME",
        "rank": 696,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 464.67
    },
    {
        "player_id": "CD_I1022844",
        "name": "Oscar Steene",
        "dob": "2003-08-23",
        "fantasy_average": 0,
        "team": "CW",
        "rank": 674,
        "career_avg": 0,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 651
    },
    {
        "player_id": "CD_I1034066",
        "name": "Nathan Wardius",
        "dob": "2004-10-12",
        "fantasy_average": 0,
        "team": "GWS",
        "rank": 698,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023275",
        "name": "Seth Campbell",
        "dob": "2004-12-29",
        "fantasy_average": 0,
        "team": "RI",
        "rank": 699,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1027921",
        "name": "Max Gruzewski",
        "dob": "2004-07-21",
        "fantasy_average": 0,
        "team": "GWS",
        "rank": 701,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1019975",
        "name": "Jack Delean",
        "dob": "2005-04-15",
        "fantasy_average": 0,
        "team": "FR",
        "rank": 702,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1020650",
        "name": "Darcy Jones",
        "dob": "2004-04-03",
        "fantasy_average": 0,
        "team": "GWS",
        "rank": 703,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023056",
        "name": "Steely Green",
        "dob": "2004-01-09",
        "fantasy_average": 0,
        "team": "RI",
        "rank": 704,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1024064",
        "name": "Aiden O'Driscoll",
        "dob": "2005-07-22",
        "fantasy_average": 0,
        "team": "WB",
        "rank": 705,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1029158",
        "name": "Xavier Walsh",
        "dob": "2005-09-06",
        "fantasy_average": 0,
        "team": "PA",
        "rank": 706,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1035129",
        "name": "Rob Monahan",
        "dob": "2004-06-29",
        "fantasy_average": 0,
        "team": "CA",
        "rank": 707,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023486",
        "name": "Matthew Jefferson",
        "dob": "2004-03-08",
        "fantasy_average": 0,
        "team": "ME",
        "rank": 708,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023787",
        "name": "Charlie Clarke",
        "dob": "2004-01-04",
        "fantasy_average": 0,
        "team": "WB",
        "rank": 709,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1028019",
        "name": "Logan Morris",
        "dob": "2005-05-10",
        "fantasy_average": 0,
        "team": "BL",
        "rank": 710,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1032100",
        "name": "Calsher Dear",
        "dob": "2005-08-04",
        "fantasy_average": 0,
        "team": "HW",
        "rank": 711,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1022383",
        "name": "Liam Fawcett",
        "dob": "2005-04-22",
        "fantasy_average": 0,
        "team": "RI",
        "rank": 712,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023530",
        "name": "Jacob Konstanty",
        "dob": "2004-11-09",
        "fantasy_average": 0,
        "team": "SY",
        "rank": 713,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1015714",
        "name": "Matthew Allison",
        "dob": "2002-01-29",
        "fantasy_average": 0,
        "team": "SK",
        "rank": 714,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1016140",
        "name": "Wade Derksen",
        "dob": "2001-06-18",
        "fantasy_average": 0,
        "team": "GWS",
        "rank": 715,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1020066",
        "name": "Thomas Scully",
        "dob": "2004-11-02",
        "fantasy_average": 0,
        "team": "PA",
        "rank": 716,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1032042",
        "name": "Phoenix Gothard",
        "dob": "2005-09-07",
        "fantasy_average": 0,
        "team": "GWS",
        "rank": 717,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1013165",
        "name": "Andy Moniz-Wakefield",
        "dob": "2003-10-26",
        "fantasy_average": 0,
        "team": "ME",
        "rank": 718,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1017959",
        "name": "Lance Collard",
        "dob": "2005-03-26",
        "fantasy_average": 0,
        "team": "SK",
        "rank": 719,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1027870",
        "name": "Tom Anastasopoulos",
        "dob": "2005-05-31",
        "fantasy_average": 0,
        "team": "PA",
        "rank": 720,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023531",
        "name": "Jack O'Sullivan",
        "dob": "2004-10-22",
        "fantasy_average": 0,
        "team": "HW",
        "rank": 721,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023544",
        "name": "Brayden George",
        "dob": "2004-01-13",
        "fantasy_average": 0,
        "team": "NM",
        "rank": 722,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1027985",
        "name": "Luke Lloyd",
        "dob": "2005-08-08",
        "fantasy_average": 0,
        "team": "BL",
        "rank": 723,
        "career_avg": 0,
        "positions": [
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1015886",
        "name": "Max Heath",
        "dob": "2002-10-24",
        "fantasy_average": 0,
        "team": "SK",
        "rank": 724,
        "career_avg": 0,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 335.67
    },
    {
        "player_id": "CD_I1031792",
        "name": "Finnbar Maley",
        "dob": "2003-07-18",
        "fantasy_average": 0,
        "team": "NM",
        "rank": 725,
        "career_avg": 0,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1021660",
        "name": "Mate Colina",
        "dob": "1999-05-20",
        "fantasy_average": 0,
        "team": "RI",
        "rank": 726,
        "career_avg": 0,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1027693",
        "name": "Archer Reid",
        "dob": "2005-09-19",
        "fantasy_average": 0,
        "team": "WC",
        "rank": 727,
        "career_avg": 0,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 341.38
    },
    {
        "player_id": "CD_I1028291",
        "name": "Coen Livingstone",
        "dob": "2005-05-25",
        "fantasy_average": 0,
        "team": "WC",
        "rank": 728,
        "career_avg": 0,
        "positions": [
            "RUC",
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1030866",
        "name": "Kyah Farris-White",
        "dob": "2004-01-02",
        "fantasy_average": 0,
        "team": "ME",
        "rank": 729,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1027702",
        "name": "Lachlan Smith",
        "dob": "2005-10-05",
        "fantasy_average": 0,
        "team": "WB",
        "rank": 730,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1028371",
        "name": "Odin Jones",
        "dob": "2005-09-20",
        "fantasy_average": 0,
        "team": "FR",
        "rank": 731,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023743",
        "name": "Nicholas Madden",
        "dob": "2004-05-17",
        "fantasy_average": 0,
        "team": "GWS",
        "rank": 733,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 332.5
    },
    {
        "player_id": "CD_I1027901",
        "name": "William Green",
        "dob": "2005-09-08",
        "fantasy_average": 0,
        "team": "SY",
        "rank": 732,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 357.5
    },
    {
        "player_id": "CD_I1035199",
        "name": "Oliver Hayes-Brown",
        "dob": "2000-04-28",
        "fantasy_average": 0,
        "team": "RI",
        "rank": 734,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1027966",
        "name": "Vigo Visentini",
        "dob": "2005-09-05",
        "fantasy_average": 0,
        "team": "ES",
        "rank": 735,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I992472",
        "name": "Oscar McDonald",
        "dob": "1996-03-18",
        "fantasy_average": 0,
        "team": "FR",
        "rank": 736,
        "career_avg": 50,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1011944",
        "name": "Joe Furphy",
        "dob": "1999-08-05",
        "fantasy_average": 0,
        "team": "GE",
        "rank": 737,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1015473",
        "name": "Will Verrall",
        "dob": "2004-03-11",
        "fantasy_average": 0,
        "team": "ME",
        "rank": 738,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1027837",
        "name": "Clay Tucker",
        "dob": "2004-08-09",
        "fantasy_average": 0,
        "team": "HW",
        "rank": 739,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1031506",
        "name": "Taylor Goad",
        "dob": "2005-04-28",
        "fantasy_average": 0,
        "team": "NM",
        "rank": 740,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 579.5
    },
    {
        "player_id": "CD_I1020627",
        "name": "Hamish Free",
        "dob": "1998-07-23",
        "fantasy_average": 0,
        "team": "NM",
        "rank": 741,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1024304",
        "name": "Mitchell Edwards",
        "dob": "2005-06-02",
        "fantasy_average": 0,
        "team": "GE",
        "rank": 742,
        "career_avg": 0,
        "positions": [
            "RUC"
        ],
        "rankADP": 454.33
    },
    {
        "player_id": "CD_I1008691",
        "name": "Leek Aleer",
        "dob": "2001-08-21",
        "fantasy_average": 0,
        "team": "GWS",
        "rank": 743,
        "career_avg": 49.25,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1032017",
        "name": "Tew Jiath",
        "dob": "2005-03-02",
        "fantasy_average": 0,
        "team": "CW",
        "rank": 744,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 631.67
    },
    {
        "player_id": "CD_I1032629",
        "name": "Joe Fonti",
        "dob": "2004-12-24",
        "fantasy_average": 0,
        "team": "GWS",
        "rank": 745,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1035198",
        "name": "Liam O'Connell",
        "dob": "2003-03-04",
        "fantasy_average": 0,
        "team": "SK",
        "rank": 746,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I996692",
        "name": "Marty Hore",
        "dob": "1996-03-05",
        "fantasy_average": 0,
        "team": "ME",
        "rank": 747,
        "career_avg": 61.8571,
        "positions": [
            "DEF"
        ],
        "rankADP": 374
    },
    {
        "player_id": "CD_I1017122",
        "name": "Blake Howes",
        "dob": "2003-04-07",
        "fantasy_average": 0,
        "team": "ME",
        "rank": 748,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023547",
        "name": "James Van Es",
        "dob": "2004-08-07",
        "fantasy_average": 0,
        "team": "SK",
        "rank": 749,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1008460",
        "name": "Harrison Arnold",
        "dob": "1999-04-08",
        "fantasy_average": 0,
        "team": "SY",
        "rank": 750,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1022999",
        "name": "Kaleb Smith",
        "dob": "2004-11-20",
        "fantasy_average": 0,
        "team": "RI",
        "rank": 751,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023498",
        "name": "Cooper Vickery",
        "dob": "2004-12-16",
        "fantasy_average": 0,
        "team": "SY",
        "rank": 752,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1013257",
        "name": "Sam Clohesy",
        "dob": "2002-12-12",
        "fantasy_average": 0,
        "team": "GC",
        "rank": 753,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1021296",
        "name": "Tom McCallum",
        "dob": "2004-09-15",
        "fantasy_average": 0,
        "team": "PA",
        "rank": 754,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1022410",
        "name": "William McCabe",
        "dob": "2005-09-29",
        "fantasy_average": 0,
        "team": "HW",
        "rank": 755,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023625",
        "name": "Riley Hardeman",
        "dob": "2005-02-27",
        "fantasy_average": 0,
        "team": "NM",
        "rank": 756,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1027877",
        "name": "Connor O'Sullivan",
        "dob": "2005-05-19",
        "fantasy_average": 0,
        "team": "GE",
        "rank": 757,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 522.33
    },
    {
        "player_id": "CD_I1027893",
        "name": "Oscar Ryan",
        "dob": "2005-05-15",
        "fantasy_average": 0,
        "team": "AD",
        "rank": 758,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1002138",
        "name": "Toby Pink",
        "dob": "1998-08-11",
        "fantasy_average": 0,
        "team": "NM",
        "rank": 759,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1017757",
        "name": "William Edwards",
        "dob": "2003-05-08",
        "fantasy_average": 0,
        "team": "SY",
        "rank": 760,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1021276",
        "name": "Kyle Marshall",
        "dob": "2004-04-10",
        "fantasy_average": 0,
        "team": "PA",
        "rank": 761,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1022473",
        "name": "Bodie Ryan",
        "dob": "2005-04-20",
        "fantasy_average": 0,
        "team": "HW",
        "rank": 762,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 534.33
    },
    {
        "player_id": "CD_I1023174",
        "name": "Jed Adams",
        "dob": "2004-05-14",
        "fantasy_average": 0,
        "team": "ME",
        "rank": 763,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1027990",
        "name": "Ollie Murphy",
        "dob": "2005-09-16",
        "fantasy_average": 0,
        "team": "FR",
        "rank": 764,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1032119",
        "name": "James Leake",
        "dob": "2005-10-02",
        "fantasy_average": 0,
        "team": "GWS",
        "rank": 765,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1020595",
        "name": "Jordyn Baker",
        "dob": "2004-05-10",
        "fantasy_average": 0,
        "team": "WC",
        "rank": 766,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1017077",
        "name": "Angus McLennan",
        "dob": "2003-09-02",
        "fantasy_average": 0,
        "team": "SK",
        "rank": 767,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023017",
        "name": "Jedd Busslinger",
        "dob": "2004-03-11",
        "fantasy_average": 0,
        "team": "WB",
        "rank": 768,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1013315",
        "name": "Sandy Brock",
        "dob": "2002-12-14",
        "fantasy_average": 0,
        "team": "GC",
        "rank": 769,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1015457",
        "name": "Jaiden Magor",
        "dob": "2004-02-16",
        "fantasy_average": 0,
        "team": "SY",
        "rank": 770,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023515",
        "name": "Archie Roberts",
        "dob": "2005-11-18",
        "fantasy_average": 0,
        "team": "ES",
        "rank": 771,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 333
    },
    {
        "player_id": "CD_I1027706",
        "name": "Luamon Lual",
        "dob": "2005-03-28",
        "fantasy_average": 0,
        "team": "ES",
        "rank": 772,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1027964",
        "name": "Matthew Carroll",
        "dob": "2005-11-28",
        "fantasy_average": 0,
        "team": "CA",
        "rank": 773,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1023502",
        "name": "Coby Burgiel",
        "dob": "2004-09-09",
        "fantasy_average": 0,
        "team": "WC",
        "rank": 774,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1027872",
        "name": "Angus Hastie",
        "dob": "2005-09-19",
        "fantasy_average": 0,
        "team": "SK",
        "rank": 775,
        "career_avg": 0,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1024685",
        "name": "Patrick Snell",
        "dob": "2005-07-18",
        "fantasy_average": 0,
        "team": "SY",
        "rank": 776,
        "career_avg": 0,
        "positions": [
            "DEF",
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1028551",
        "name": "Wil Dawson",
        "dob": "2005-12-20",
        "fantasy_average": 0,
        "team": "NM",
        "rank": 777,
        "career_avg": 0,
        "positions": [
            "DEF",
            "FWD"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1032650",
        "name": "Zane Zakostelsky",
        "dob": "2005-12-14",
        "fantasy_average": 0,
        "team": "BL",
        "rank": 778,
        "career_avg": 0,
        "positions": [
            "DEF",
            "RUC"
        ],
        "rankADP": 999
    },
    {
        "player_id": "CD_I1006087",
        "name": "Caleb Graham",
        "dob": "2000-09-12",
        "fantasy_average": 0,
        "team": "GC",
        "rank": 779,
        "career_avg": 36.2162,
        "positions": [
            "DEF"
        ],
        "rankADP": 999
    }
]