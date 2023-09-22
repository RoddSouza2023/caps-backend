const pushGame = async (data) => {
  try {
    const options = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    };

    const res = await fetch('http://localhost:8080/api/v1/game', options);
    console.log(await res.json());
  } catch (error) {
    console.log(error);
  }
};

const pushAllGames = async (data) => {
  let count = 0;
  data.forEach( (game) => {
    pushGame(game);
    count++;
    console.log(count);
  });
};

const allGames = [
  {
    "slug": "grand-theft-auto-v",
    "name": "Grand Theft Auto V",
    "released": "2013-09-17",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
    "rating": 4.47,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 3908,
        "percent": 59
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 2175,
        "percent": 32.84
      },
      {
        "id": 3,
        "title": "meh",
        "count": 421,
        "percent": 6.36
      },
      {
        "id": 1,
        "title": "skip",
        "count": 120,
        "percent": 1.81
      }
    ],
    "ratings_count": 6527,
    "reviews_text_count": 57,
    "added": 20027,
    "added_by_status": {
      "yet": 514,
      "owned": 11519,
      "beaten": 5632,
      "toplay": 596,
      "dropped": 1058,
      "playing": 708
    },
    "metacritic": 92,
    "playtime": 74,
    "suggestions_count": 421,
    "updated": "2023-09-20T18:30:36",
    "user_game": null,
    "reviews_count": 6624,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 187,
          "name": "PlayStation 5",
          "slug": "playstation5",
          "image": null,
          "year_end": null,
          "year_start": 2020,
          "games_count": 934,
          "image_background": "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg"
        },
        "released_at": "2013-09-17",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 186,
          "name": "Xbox Series S/X",
          "slug": "xbox-series-x",
          "image": null,
          "year_end": null,
          "year_start": 2020,
          "games_count": 803,
          "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
        },
        "released_at": "2013-09-17",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2013-09-17",
        "requirements_en": {
          "minimum": "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
          "recommended": "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 18,
          "name": "PlayStation 4",
          "slug": "playstation4",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 6708,
          "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
        },
        "released_at": "2013-09-17",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 16,
          "name": "PlayStation 3",
          "slug": "playstation3",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 3163,
          "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        },
        "released_at": "2013-09-17",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 14,
          "name": "Xbox 360",
          "slug": "xbox360",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 2787,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        "released_at": "2013-09-17",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 1,
          "name": "Xbox One",
          "slug": "xbox-one",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5544,
          "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
        },
        "released_at": "2013-09-17",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 3,
        "name": "Adventure",
        "slug": "adventure",
        "games_count": 134116,
        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
      }
    ],
    "stores": [
      {
        "id": 290375,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 438095,
        "store": {
          "id": 11,
          "name": "Epic Games",
          "slug": "epic-games",
          "domain": "epicgames.com",
          "games_count": 1266,
          "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
        }
      },
      {
        "id": 290376,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 290377,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1912,
          "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        }
      },
      {
        "id": 290378,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4770,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 40847,
        "name": "Steam Achievements",
        "slug": "steam-achievements",
        "language": "eng",
        "games_count": 31891,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 7,
        "name": "Multiplayer",
        "slug": "multiplayer",
        "language": "eng",
        "games_count": 35582,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 40836,
        "name": "Full controller support",
        "slug": "full-controller-support",
        "language": "eng",
        "games_count": 14997,
        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 42,
        "name": "Great Soundtrack",
        "slug": "great-soundtrack",
        "language": "eng",
        "games_count": 3249,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 24,
        "name": "RPG",
        "slug": "rpg",
        "language": "eng",
        "games_count": 17938,
        "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
      },
      {
        "id": 18,
        "name": "Co-op",
        "slug": "co-op",
        "language": "eng",
        "games_count": 10166,
        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
      },
      {
        "id": 36,
        "name": "Open World",
        "slug": "open-world",
        "language": "eng",
        "games_count": 6502,
        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
      },
      {
        "id": 411,
        "name": "cooperative",
        "slug": "cooperative",
        "language": "eng",
        "games_count": 4250,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 8,
        "name": "First-Person",
        "slug": "first-person",
        "language": "eng",
        "games_count": 29160,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 149,
        "name": "Third Person",
        "slug": "third-person",
        "language": "eng",
        "games_count": 9837,
        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      },
      {
        "id": 4,
        "name": "Funny",
        "slug": "funny",
        "language": "eng",
        "games_count": 22958,
        "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
      },
      {
        "id": 37,
        "name": "Sandbox",
        "slug": "sandbox",
        "language": "eng",
        "games_count": 6117,
        "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
      },
      {
        "id": 123,
        "name": "Comedy",
        "slug": "comedy",
        "language": "eng",
        "games_count": 11182,
        "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
      },
      {
        "id": 150,
        "name": "Third-Person Shooter",
        "slug": "third-person-shooter",
        "language": "eng",
        "games_count": 2984,
        "image_background": "https://media.rawg.io/media/games/9e5/9e5b274c7e3aa5e30beba31b834b0e7e.jpg"
      },
      {
        "id": 62,
        "name": "Moddable",
        "slug": "moddable",
        "language": "eng",
        "games_count": 804,
        "image_background": "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg"
      },
      {
        "id": 144,
        "name": "Crime",
        "slug": "crime",
        "language": "eng",
        "games_count": 2607,
        "image_background": "https://media.rawg.io/media/games/9e5/9e5b274c7e3aa5e30beba31b834b0e7e.jpg"
      },
      {
        "id": 62349,
        "name": "vr mod",
        "slug": "vr-mod",
        "language": "eng",
        "games_count": 17,
        "image_background": "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
      },
      {
        "id": 1827221,
        "image": "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg"
      },
      {
        "id": 1827222,
        "image": "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg"
      },
      {
        "id": 1827223,
        "image": "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg"
      },
      {
        "id": 1827225,
        "image": "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg"
      },
      {
        "id": 1827226,
        "image": "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg"
      },
      {
        "id": 1827227,
        "image": "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg"
      }
    ]
  },
  {
    "slug": "the-witcher-3-wild-hunt",
    "name": "The Witcher 3: Wild Hunt",
    "released": "2015-05-18",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    "rating": 4.66,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 4910,
        "percent": 77.27
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 1019,
        "percent": 16.04
      },
      {
        "id": 3,
        "title": "meh",
        "count": 267,
        "percent": 4.2
      },
      {
        "id": 1,
        "title": "skip",
        "count": 158,
        "percent": 2.49
      }
    ],
    "ratings_count": 6253,
    "reviews_text_count": 70,
    "added": 19310,
    "added_by_status": {
      "yet": 1088,
      "owned": 11147,
      "beaten": 4592,
      "toplay": 747,
      "dropped": 884,
      "playing": 852
    },
    "metacritic": 92,
    "playtime": 45,
    "suggestions_count": 671,
    "updated": "2023-09-20T21:00:47",
    "user_game": null,
    "reviews_count": 6354,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 186,
          "name": "Xbox Series S/X",
          "slug": "xbox-series-x",
          "image": null,
          "year_end": null,
          "year_start": 2020,
          "games_count": 803,
          "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
        },
        "released_at": "2015-05-18",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 18,
          "name": "PlayStation 4",
          "slug": "playstation4",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 6708,
          "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
        },
        "released_at": "2015-05-18",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo Switch",
          "slug": "nintendo-switch",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5315,
          "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        },
        "released_at": "2015-05-18",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2015-05-18",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 1,
          "name": "Xbox One",
          "slug": "xbox-one",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5544,
          "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
        },
        "released_at": "2015-05-18",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 187,
          "name": "PlayStation 5",
          "slug": "playstation5",
          "image": null,
          "year_end": null,
          "year_start": 2020,
          "games_count": 934,
          "image_background": "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg"
        },
        "released_at": "2015-05-18",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 3,
        "name": "Adventure",
        "slug": "adventure",
        "games_count": 134116,
        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
      },
      {
        "id": 5,
        "name": "RPG",
        "slug": "role-playing-games-rpg",
        "games_count": 53260,
        "image_background": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg"
      }
    ],
    "stores": [
      {
        "id": 354780,
        "store": {
          "id": 5,
          "name": "GOG",
          "slug": "gog",
          "domain": "gog.com",
          "games_count": 5484,
          "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
        }
      },
      {
        "id": 3565,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 305376,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 312313,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4770,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      },
      {
        "id": 676022,
        "store": {
          "id": 6,
          "name": "Nintendo Store",
          "slug": "nintendo",
          "domain": "nintendo.com",
          "games_count": 8885,
          "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 40836,
        "name": "Full controller support",
        "slug": "full-controller-support",
        "language": "eng",
        "games_count": 14997,
        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 42,
        "name": "Great Soundtrack",
        "slug": "great-soundtrack",
        "language": "eng",
        "games_count": 3249,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 24,
        "name": "RPG",
        "slug": "rpg",
        "language": "eng",
        "games_count": 17938,
        "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
      },
      {
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 18867,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 36,
        "name": "Open World",
        "slug": "open-world",
        "language": "eng",
        "games_count": 6502,
        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
      },
      {
        "id": 149,
        "name": "Third Person",
        "slug": "third-person",
        "language": "eng",
        "games_count": 9837,
        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      },
      {
        "id": 64,
        "name": "Fantasy",
        "slug": "fantasy",
        "language": "eng",
        "games_count": 25131,
        "image_background": "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg"
      },
      {
        "id": 37,
        "name": "Sandbox",
        "slug": "sandbox",
        "language": "eng",
        "games_count": 6117,
        "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
      },
      {
        "id": 97,
        "name": "Action RPG",
        "slug": "action-rpg",
        "language": "eng",
        "games_count": 5934,
        "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
      },
      {
        "id": 41,
        "name": "Dark",
        "slug": "dark",
        "language": "eng",
        "games_count": 14413,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      },
      {
        "id": 44,
        "name": "Nudity",
        "slug": "nudity",
        "language": "eng",
        "games_count": 5259,
        "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
      },
      {
        "id": 336,
        "name": "controller support",
        "slug": "controller-support",
        "language": "eng",
        "games_count": 293,
        "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
      },
      {
        "id": 145,
        "name": "Choices Matter",
        "slug": "choices-matter",
        "language": "eng",
        "games_count": 3940,
        "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
      },
      {
        "id": 192,
        "name": "Mature",
        "slug": "mature",
        "language": "eng",
        "games_count": 2366,
        "image_background": "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg"
      },
      {
        "id": 40,
        "name": "Dark Fantasy",
        "slug": "dark-fantasy",
        "language": "eng",
        "games_count": 3420,
        "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
      },
      {
        "id": 66,
        "name": "Medieval",
        "slug": "medieval",
        "language": "eng",
        "games_count": 5578,
        "image_background": "https://media.rawg.io/media/games/e40/e40cc9d1957b0a0ed7e389834457b524.jpg"
      },
      {
        "id": 82,
        "name": "Magic",
        "slug": "magic",
        "language": "eng",
        "games_count": 8350,
        "image_background": "https://media.rawg.io/media/games/ccf/ccf26f6e3d553a04f0033a8107a521b8.jpg"
      },
      {
        "id": 218,
        "name": "Multiple Endings",
        "slug": "multiple-endings",
        "language": "eng",
        "games_count": 7405,
        "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      },
      {
        "id": 30336,
        "image": "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg"
      },
      {
        "id": 30337,
        "image": "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg"
      },
      {
        "id": 30338,
        "image": "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg"
      },
      {
        "id": 30339,
        "image": "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg"
      },
      {
        "id": 30340,
        "image": "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg"
      },
      {
        "id": 30342,
        "image": "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg"
      }
    ]
  },
  {
    "slug": "portal-2",
    "name": "Portal 2",
    "released": "2011-04-18",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
    "rating": 4.61,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 3854,
        "percent": 70.24
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 1368,
        "percent": 24.93
      },
      {
        "id": 3,
        "title": "meh",
        "count": 146,
        "percent": 2.66
      },
      {
        "id": 1,
        "title": "skip",
        "count": 119,
        "percent": 2.17
      }
    ],
    "ratings_count": 5436,
    "reviews_text_count": 34,
    "added": 18204,
    "added_by_status": {
      "yet": 596,
      "owned": 11261,
      "beaten": 5284,
      "toplay": 356,
      "dropped": 563,
      "playing": 144
    },
    "metacritic": 95,
    "playtime": 11,
    "suggestions_count": 545,
    "updated": "2023-09-20T19:39:46",
    "user_game": null,
    "reviews_count": 5487,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 16,
          "name": "PlayStation 3",
          "slug": "playstation3",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 3163,
          "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        },
        "released_at": "2011-04-18",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2011-04-18",
        "requirements_en": null,
        "requirements_ru": {
          "minimum": "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
          "recommended": "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
        }
      },
      {
        "platform": {
          "id": 14,
          "name": "Xbox 360",
          "slug": "xbox360",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 2787,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        "released_at": "2011-04-18",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 75485,
          "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
        },
        "released_at": "2011-04-18",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 5,
          "name": "macOS",
          "slug": "macos",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 102027,
          "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
        },
        "released_at": "2011-04-18",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 1,
          "name": "Xbox One",
          "slug": "xbox-one",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5544,
          "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
        },
        "released_at": "2011-04-18",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ],
    "genres": [
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 59364,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      },
      {
        "id": 7,
        "name": "Puzzle",
        "slug": "puzzle",
        "games_count": 97161,
        "image_background": "https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg"
      }
    ],
    "stores": [
      {
        "id": 465889,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4770,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      },
      {
        "id": 13134,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 4526,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 33916,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1912,
          "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 40847,
        "name": "Steam Achievements",
        "slug": "steam-achievements",
        "language": "eng",
        "games_count": 31891,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 7,
        "name": "Multiplayer",
        "slug": "multiplayer",
        "language": "eng",
        "games_count": 35582,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 40836,
        "name": "Full controller support",
        "slug": "full-controller-support",
        "language": "eng",
        "games_count": 14997,
        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
      },
      {
        "id": 40849,
        "name": "Steam Cloud",
        "slug": "steam-cloud",
        "language": "eng",
        "games_count": 14905,
        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7571,
        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
      },
      {
        "id": 18,
        "name": "Co-op",
        "slug": "co-op",
        "language": "eng",
        "games_count": 10166,
        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
      },
      {
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 18867,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 411,
        "name": "cooperative",
        "slug": "cooperative",
        "language": "eng",
        "games_count": 4250,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 8,
        "name": "First-Person",
        "slug": "first-person",
        "language": "eng",
        "games_count": 29160,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 32,
        "name": "Sci-fi",
        "slug": "sci-fi",
        "language": "eng",
        "games_count": 17527,
        "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 12321,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 9,
        "name": "Online Co-Op",
        "slug": "online-co-op",
        "language": "eng",
        "games_count": 4643,
        "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
      },
      {
        "id": 4,
        "name": "Funny",
        "slug": "funny",
        "language": "eng",
        "games_count": 22958,
        "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
      },
      {
        "id": 189,
        "name": "Female Protagonist",
        "slug": "female-protagonist",
        "language": "eng",
        "games_count": 10931,
        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
      },
      {
        "id": 123,
        "name": "Comedy",
        "slug": "comedy",
        "language": "eng",
        "games_count": 11182,
        "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
      },
      {
        "id": 75,
        "name": "Local Co-Op",
        "slug": "local-co-op",
        "language": "eng",
        "games_count": 5046,
        "image_background": "https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg"
      },
      {
        "id": 11669,
        "name": "stats",
        "slug": "stats",
        "language": "eng",
        "games_count": 4571,
        "image_background": "https://media.rawg.io/media/games/bff/bff077fb7c3b037bd5ed920bf447c863.jpg"
      },
      {
        "id": 40852,
        "name": "Steam Workshop",
        "slug": "steam-workshop",
        "language": "eng",
        "games_count": 1349,
        "image_background": "https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg"
      },
      {
        "id": 25,
        "name": "Space",
        "slug": "space",
        "language": "eng",
        "games_count": 41996,
        "image_background": "https://media.rawg.io/media/games/0bc/0bcc108295a244b488d5c25f7d867220.jpg"
      },
      {
        "id": 40838,
        "name": "Includes level editor",
        "slug": "includes-level-editor",
        "language": "eng",
        "games_count": 1690,
        "image_background": "https://media.rawg.io/media/games/a44/a444a7628bdb49b24d06a7672f805814.jpg"
      },
      {
        "id": 40833,
        "name": "Captions available",
        "slug": "captions-available",
        "language": "eng",
        "games_count": 1251,
        "image_background": "https://media.rawg.io/media/games/963/9639183ff27251b0b686acaa6aac0297.jpg"
      },
      {
        "id": 40834,
        "name": "Commentary available",
        "slug": "commentary-available",
        "language": "eng",
        "games_count": 255,
        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
      },
      {
        "id": 87,
        "name": "Science",
        "slug": "science",
        "language": "eng",
        "games_count": 1546,
        "image_background": "https://media.rawg.io/media/screenshots/c19/c192b66ef53e26bbb130a9a939be8d87_j8WENxs.jpg"
      }
    ],
    "esrb_rating": {
      "id": 2,
      "name": "Everyone 10+",
      "slug": "everyone-10-plus"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
      },
      {
        "id": 99018,
        "image": "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg"
      },
      {
        "id": 99019,
        "image": "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg"
      },
      {
        "id": 99020,
        "image": "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg"
      },
      {
        "id": 99021,
        "image": "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg"
      },
      {
        "id": 99022,
        "image": "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg"
      },
      {
        "id": 99023,
        "image": "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg"
      }
    ]
  },
  {
    "slug": "tomb-raider",
    "name": "Tomb Raider (2013)",
    "released": "2013-03-05",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    "rating": 4.05,
    "rating_top": 4,
    "ratings": [
      {
        "id": 4,
        "title": "recommended",
        "count": 2294,
        "percent": 60.46
      },
      {
        "id": 5,
        "title": "exceptional",
        "count": 965,
        "percent": 25.43
      },
      {
        "id": 3,
        "title": "meh",
        "count": 418,
        "percent": 11.02
      },
      {
        "id": 1,
        "title": "skip",
        "count": 117,
        "percent": 3.08
      }
    ],
    "ratings_count": 3767,
    "reviews_text_count": 12,
    "added": 15844,
    "added_by_status": {
      "yet": 650,
      "owned": 10263,
      "beaten": 4054,
      "toplay": 253,
      "dropped": 519,
      "playing": 105
    },
    "metacritic": 86,
    "playtime": 10,
    "suggestions_count": 642,
    "updated": "2023-09-20T18:30:22",
    "user_game": null,
    "reviews_count": 3794,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 18,
          "name": "PlayStation 4",
          "slug": "playstation4",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 6708,
          "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
        },
        "released_at": "2013-03-05",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 5,
          "name": "macOS",
          "slug": "macos",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 102027,
          "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
        },
        "released_at": "2013-03-05",
        "requirements_en": {
          "minimum": "Minimum:\r\n\r\nOS: macOS 10.9.1\r\n\r\nProcessor: 2.0GHz Intel or greater\r\n\r\nMemory: 4GB\r\n\r\nGraphics: 512Mb AMD 4850, 512Mb Nvidia 650M, Intel HD4000\r\n\r\nHard Drive: 14GB"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2013-03-05",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows XP / Windows Vista / Windows 7<br>\t</li><li><strong>Processor:</strong>1.8 GHz Processor<br>\t</li><li><strong>Memory:</strong>512 MB RAM<br>\t</li><li><strong>Graphics:</strong>3D graphics card compatible with DirectX 9<br>\t</li><li><strong>DirectX®:</strong>9.0<br>\t</li><li><strong>Hard Drive:</strong>2 GB HD space</li></ul>"
        },
        "requirements_ru": {
          "minimum": "i486-100, 8 Мб",
          "recommended": "Pentium 166, 16 Мб"
        }
      },
      {
        "platform": {
          "id": 1,
          "name": "Xbox One",
          "slug": "xbox-one",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5544,
          "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
        },
        "released_at": "2013-03-05",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 14,
          "name": "Xbox 360",
          "slug": "xbox360",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 2787,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        "released_at": "2013-03-05",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 16,
          "name": "PlayStation 3",
          "slug": "playstation3",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 3163,
          "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        },
        "released_at": "2013-03-05",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 3,
        "name": "Adventure",
        "slug": "adventure",
        "games_count": 134116,
        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
      }
    ],
    "stores": [
      {
        "id": 33824,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1912,
          "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        }
      },
      {
        "id": 13151,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 5640,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 218233,
        "store": {
          "id": 8,
          "name": "Google Play",
          "slug": "google-play",
          "domain": "play.google.com",
          "games_count": 17056,
          "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
        }
      },
      {
        "id": 79036,
        "store": {
          "id": 4,
          "name": "App Store",
          "slug": "apple-appstore",
          "domain": "apps.apple.com",
          "games_count": 75329,
          "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
        }
      },
      {
        "id": 713685,
        "store": {
          "id": 11,
          "name": "Epic Games",
          "slug": "epic-games",
          "domain": "epicgames.com",
          "games_count": 1266,
          "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 7,
        "name": "Multiplayer",
        "slug": "multiplayer",
        "language": "eng",
        "games_count": 35582,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 40836,
        "name": "Full controller support",
        "slug": "full-controller-support",
        "language": "eng",
        "games_count": 14997,
        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 24,
        "name": "RPG",
        "slug": "rpg",
        "language": "eng",
        "games_count": 17938,
        "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
      },
      {
        "id": 149,
        "name": "Third Person",
        "slug": "third-person",
        "language": "eng",
        "games_count": 9837,
        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      },
      {
        "id": 193,
        "name": "Classic",
        "slug": "classic",
        "language": "eng",
        "games_count": 1729,
        "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
      },
      {
        "id": 6,
        "name": "Exploration",
        "slug": "exploration",
        "language": "eng",
        "games_count": 20072,
        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
      },
      {
        "id": 189,
        "name": "Female Protagonist",
        "slug": "female-protagonist",
        "language": "eng",
        "games_count": 10931,
        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
      },
      {
        "id": 15,
        "name": "Stealth",
        "slug": "stealth",
        "language": "eng",
        "games_count": 5824,
        "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
      },
      {
        "id": 69,
        "name": "Action-Adventure",
        "slug": "action-adventure",
        "language": "eng",
        "games_count": 14056,
        "image_background": "https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg"
      },
      {
        "id": 150,
        "name": "Third-Person Shooter",
        "slug": "third-person-shooter",
        "language": "eng",
        "games_count": 2984,
        "image_background": "https://media.rawg.io/media/games/9e5/9e5b274c7e3aa5e30beba31b834b0e7e.jpg"
      },
      {
        "id": 74,
        "name": "Retro",
        "slug": "retro",
        "language": "eng",
        "games_count": 40000,
        "image_background": "https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg"
      },
      {
        "id": 110,
        "name": "Cinematic",
        "slug": "cinematic",
        "language": "eng",
        "games_count": 1547,
        "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
      },
      {
        "id": 269,
        "name": "Quick-Time Events",
        "slug": "quick-time-events",
        "language": "eng",
        "games_count": 450,
        "image_background": "https://media.rawg.io/media/games/b2d/b2db4496b084b235742cf6e9894bbf36.jpg"
      },
      {
        "id": 126,
        "name": "Dinosaurs",
        "slug": "dinosaurs",
        "language": "eng",
        "games_count": 1644,
        "image_background": "https://media.rawg.io/media/screenshots/9e0/9e04875493799e1a3c52e5b681aece03.jpg"
      },
      {
        "id": 306,
        "name": "Lara Croft",
        "slug": "lara-croft",
        "language": "eng",
        "games_count": 14,
        "image_background": "https://media.rawg.io/media/games/e6b/e6b025951f9a72673f41c0588fb85758.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
      },
      {
        "id": 99160,
        "image": "https://media.rawg.io/media/screenshots/4f9/4f9d5efdecfb63cb99f1baa4c0ceb3bf.jpg"
      },
      {
        "id": 99161,
        "image": "https://media.rawg.io/media/screenshots/80f/80f373082b2a74da3f9c3fe2b877dcd0.jpg"
      },
      {
        "id": 99162,
        "image": "https://media.rawg.io/media/screenshots/a87/a8733e877f8fbe45e4a727c22a06aa2e.jpg"
      },
      {
        "id": 99163,
        "image": "https://media.rawg.io/media/screenshots/3f9/3f91678c6805a76419fa4ea3a045a909.jpg"
      },
      {
        "id": 99164,
        "image": "https://media.rawg.io/media/screenshots/417/4170bf07be43a8d8249193883f87f1c1.jpg"
      },
      {
        "id": 99165,
        "image": "https://media.rawg.io/media/screenshots/2a4/2a4250f83ad9e959d8b4ca9376ae34ea.jpg"
      }
    ]
  },
  {
    "slug": "counter-strike-global-offensive",
    "name": "Counter-Strike: Global Offensive",
    "released": "2012-08-21",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    "rating": 3.56,
    "rating_top": 4,
    "ratings": [
      {
        "id": 4,
        "title": "recommended",
        "count": 1580,
        "percent": 46.79
      },
      {
        "id": 3,
        "title": "meh",
        "count": 879,
        "percent": 26.03
      },
      {
        "id": 5,
        "title": "exceptional",
        "count": 540,
        "percent": 15.99
      },
      {
        "id": 1,
        "title": "skip",
        "count": 378,
        "percent": 11.19
      }
    ],
    "ratings_count": 3342,
    "reviews_text_count": 26,
    "added": 15841,
    "added_by_status": {
      "yet": 250,
      "owned": 12012,
      "beaten": 956,
      "toplay": 76,
      "dropped": 1910,
      "playing": 637
    },
    "metacritic": 81,
    "playtime": 65,
    "suggestions_count": 587,
    "updated": "2023-09-20T20:36:44",
    "user_game": null,
    "reviews_count": 3377,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2012-08-21",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7/Vista/XP<br></li><li><strong>Processor:</strong> Intel® Core™ 2 Duo E6600 or AMD Phenom™ X3 8750 processor or better<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card must be 256 MB or more and should be a DirectX 9-compatible with support for Pixel Shader 3.0<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 15 GB available space</li></ul>"
        },
        "requirements_ru": {
          "minimum": "Сore 2 Duo/Athlon x2 64 1.8 ГГц,2 Гб памяти,GeForce 8800/Radeon X9800,7.6 Гб на винчестере,интернет-соединение",
          "recommended": "Core 2 Duo E6600/Phenom X3 8750,4 Гб памяти,GeForce 480 GTX/Radeon HD 6970,7.6 Гб на винчестере,интернет-соединение"
        }
      },
      {
        "platform": {
          "id": 14,
          "name": "Xbox 360",
          "slug": "xbox360",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 2787,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        "released_at": "2012-08-21",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 16,
          "name": "PlayStation 3",
          "slug": "playstation3",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 3163,
          "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        },
        "released_at": "2012-08-21",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 59364,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      }
    ],
    "stores": [
      {
        "id": 4619,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 11489,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 49169,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1912,
          "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 40847,
        "name": "Steam Achievements",
        "slug": "steam-achievements",
        "language": "eng",
        "games_count": 31891,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 7,
        "name": "Multiplayer",
        "slug": "multiplayer",
        "language": "eng",
        "games_count": 35582,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 40836,
        "name": "Full controller support",
        "slug": "full-controller-support",
        "language": "eng",
        "games_count": 14997,
        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
      },
      {
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7571,
        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
      },
      {
        "id": 18,
        "name": "Co-op",
        "slug": "co-op",
        "language": "eng",
        "games_count": 10166,
        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
      },
      {
        "id": 411,
        "name": "cooperative",
        "slug": "cooperative",
        "language": "eng",
        "games_count": 4250,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 8,
        "name": "First-Person",
        "slug": "first-person",
        "language": "eng",
        "games_count": 29160,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 12321,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 9,
        "name": "Online Co-Op",
        "slug": "online-co-op",
        "language": "eng",
        "games_count": 4643,
        "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
      },
      {
        "id": 80,
        "name": "Tactical",
        "slug": "tactical",
        "language": "eng",
        "games_count": 4287,
        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
      },
      {
        "id": 11669,
        "name": "stats",
        "slug": "stats",
        "language": "eng",
        "games_count": 4571,
        "image_background": "https://media.rawg.io/media/games/bff/bff077fb7c3b037bd5ed920bf447c863.jpg"
      },
      {
        "id": 40852,
        "name": "Steam Workshop",
        "slug": "steam-workshop",
        "language": "eng",
        "games_count": 1349,
        "image_background": "https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg"
      },
      {
        "id": 157,
        "name": "PvP",
        "slug": "pvp",
        "language": "eng",
        "games_count": 7630,
        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
      },
      {
        "id": 62,
        "name": "Moddable",
        "slug": "moddable",
        "language": "eng",
        "games_count": 804,
        "image_background": "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg"
      },
      {
        "id": 70,
        "name": "War",
        "slug": "war",
        "language": "eng",
        "games_count": 8796,
        "image_background": "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg"
      },
      {
        "id": 40837,
        "name": "In-App Purchases",
        "slug": "in-app-purchases",
        "language": "eng",
        "games_count": 2193,
        "image_background": "https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg"
      },
      {
        "id": 11,
        "name": "Team-Based",
        "slug": "team-based",
        "language": "eng",
        "games_count": 1355,
        "image_background": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg"
      },
      {
        "id": 77,
        "name": "Realistic",
        "slug": "realistic",
        "language": "eng",
        "games_count": 4259,
        "image_background": "https://media.rawg.io/media/games/708/7080e6c87e0825cb02888bf3c44b3889.jpg"
      },
      {
        "id": 131,
        "name": "Fast-Paced",
        "slug": "fast-paced",
        "language": "eng",
        "games_count": 10307,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 40856,
        "name": "Valve Anti-Cheat enabled",
        "slug": "valve-anti-cheat-enabled",
        "language": "eng",
        "games_count": 105,
        "image_background": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg"
      },
      {
        "id": 81,
        "name": "Military",
        "slug": "military",
        "language": "eng",
        "games_count": 1475,
        "image_background": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg"
      },
      {
        "id": 170,
        "name": "Competitive",
        "slug": "competitive",
        "language": "eng",
        "games_count": 1043,
        "image_background": "https://media.rawg.io/media/games/abd/abdb7e589f0a8ccd36c0582673120b1e.jpg"
      },
      {
        "id": 73,
        "name": "e-sports",
        "slug": "e-sports",
        "language": "eng",
        "games_count": 80,
        "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
      },
      {
        "id": 245,
        "name": "Trading",
        "slug": "trading",
        "language": "eng",
        "games_count": 1018,
        "image_background": "https://media.rawg.io/media/screenshots/7fd/7fd4b29fa06a34e2ebda37283265faeb.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg"
      },
      {
        "id": 81644,
        "image": "https://media.rawg.io/media/screenshots/ff1/ff16661bb15f7969b44f6c4118870e44.jpg"
      },
      {
        "id": 81645,
        "image": "https://media.rawg.io/media/screenshots/41b/41bb769d247412eac3336dec934aed72.jpg"
      },
      {
        "id": 81646,
        "image": "https://media.rawg.io/media/screenshots/754/754545acdbf71f56e8902a07c7d20696.jpg"
      },
      {
        "id": 81647,
        "image": "https://media.rawg.io/media/screenshots/fd8/fd873cab4c66db0b8e85d8a66e940074.jpg"
      },
      {
        "id": 81648,
        "image": "https://media.rawg.io/media/screenshots/7db/7db2954f7908b6749c36a5f3c9052f65.jpg"
      },
      {
        "id": 81649,
        "image": "https://media.rawg.io/media/screenshots/337/337a3e98b5933f456a2b37b59fab5f39.jpg"
      }
    ]
  },
  {
    "slug": "portal",
    "name": "Portal",
    "released": "2007-10-09",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    "rating": 4.51,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 2782,
        "percent": 60.94
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 1519,
        "percent": 33.27
      },
      {
        "id": 3,
        "title": "meh",
        "count": 173,
        "percent": 3.79
      },
      {
        "id": 1,
        "title": "skip",
        "count": 91,
        "percent": 1.99
      }
    ],
    "ratings_count": 4526,
    "reviews_text_count": 26,
    "added": 15470,
    "added_by_status": {
      "yet": 416,
      "owned": 9572,
      "beaten": 4786,
      "toplay": 253,
      "dropped": 366,
      "playing": 77
    },
    "metacritic": 90,
    "playtime": 4,
    "suggestions_count": 283,
    "updated": "2023-09-20T18:32:14",
    "user_game": null,
    "reviews_count": 4565,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 21,
          "name": "Android",
          "slug": "android",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 52263,
          "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
        },
        "released_at": "2007-10-09",
        "requirements_en": {
          "minimum": "4.4 and up"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 16,
          "name": "PlayStation 3",
          "slug": "playstation3",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 3163,
          "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        },
        "released_at": "2007-10-09",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 14,
          "name": "Xbox 360",
          "slug": "xbox360",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 2787,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        "released_at": "2007-10-09",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 75485,
          "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
        },
        "released_at": "2007-10-09",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 5,
          "name": "macOS",
          "slug": "macos",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 102027,
          "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
        },
        "released_at": "2007-10-09",
        "requirements_en": {
          "minimum": "<strong>Minimum: </strong>OS X version Leopard 10.5.8, Snow Leopard 10.6.3, 1GB RAM, NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher Mouse, Keyboard, Internet Connection"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516631,
          "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
        },
        "released_at": "2007-10-09",
        "requirements_en": {
          "minimum": "<p><strong>Minimum: </strong>1.7 GHz Processor, 512MB RAM, DirectX&reg; 8.1 level Graphics Card (Requires support for SSE), Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>\r\n\t\t\t<p><strong>Recommended: </strong>Pentium 4 processor (3.0GHz, or better), 1GB RAM, DirectX&reg; 9 level Graphics Card, Windows&reg; 7 (32/64-bit)/Vista/XP, Mouse, Keyboard, Internet Connection</p>"
        },
        "requirements_ru": {
          "minimum": "Pentium 4/Athlon XP 1.7 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,7.5 Гб на винчестере,Интернет-соединение 128 Кб/c",
          "recommended": "Core 2 Duo/Athlon 64 3 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,12 Гб на винчестере,Интернет-соединение 512 Кб/c"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo Switch",
          "slug": "nintendo-switch",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5315,
          "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        },
        "released_at": "2007-10-09",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 8,
          "name": "Android",
          "slug": "android"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
      }
    ],
    "genres": [
      {
        "id": 3,
        "name": "Adventure",
        "slug": "adventure",
        "games_count": 134116,
        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
      },
      {
        "id": 7,
        "name": "Puzzle",
        "slug": "puzzle",
        "games_count": 97161,
        "image_background": "https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg"
      }
    ],
    "stores": [
      {
        "id": 14890,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 40973,
        "store": {
          "id": 8,
          "name": "Google Play",
          "slug": "google-play",
          "domain": "play.google.com",
          "games_count": 17056,
          "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 40847,
        "name": "Steam Achievements",
        "slug": "steam-achievements",
        "language": "eng",
        "games_count": 31891,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 42,
        "name": "Great Soundtrack",
        "slug": "great-soundtrack",
        "language": "eng",
        "games_count": 3249,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 18867,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 8,
        "name": "First-Person",
        "slug": "first-person",
        "language": "eng",
        "games_count": 29160,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 32,
        "name": "Sci-fi",
        "slug": "sci-fi",
        "language": "eng",
        "games_count": 17527,
        "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
      },
      {
        "id": 40845,
        "name": "Partial Controller Support",
        "slug": "partial-controller-support",
        "language": "eng",
        "games_count": 10164,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 12321,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 4,
        "name": "Funny",
        "slug": "funny",
        "language": "eng",
        "games_count": 22958,
        "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
      },
      {
        "id": 193,
        "name": "Classic",
        "slug": "classic",
        "language": "eng",
        "games_count": 1729,
        "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
      },
      {
        "id": 189,
        "name": "Female Protagonist",
        "slug": "female-protagonist",
        "language": "eng",
        "games_count": 10931,
        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
      },
      {
        "id": 123,
        "name": "Comedy",
        "slug": "comedy",
        "language": "eng",
        "games_count": 11182,
        "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
      },
      {
        "id": 40838,
        "name": "Includes level editor",
        "slug": "includes-level-editor",
        "language": "eng",
        "games_count": 1690,
        "image_background": "https://media.rawg.io/media/games/a44/a444a7628bdb49b24d06a7672f805814.jpg"
      },
      {
        "id": 40833,
        "name": "Captions available",
        "slug": "captions-available",
        "language": "eng",
        "games_count": 1251,
        "image_background": "https://media.rawg.io/media/games/963/9639183ff27251b0b686acaa6aac0297.jpg"
      },
      {
        "id": 111,
        "name": "Short",
        "slug": "short",
        "language": "eng",
        "games_count": 57513,
        "image_background": "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg"
      },
      {
        "id": 114,
        "name": "Physics",
        "slug": "physics",
        "language": "eng",
        "games_count": 18068,
        "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
      },
      {
        "id": 148,
        "name": "Dark Humor",
        "slug": "dark-humor",
        "language": "eng",
        "games_count": 2555,
        "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
      },
      {
        "id": 40834,
        "name": "Commentary available",
        "slug": "commentary-available",
        "language": "eng",
        "games_count": 255,
        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
      },
      {
        "id": 40839,
        "name": "Includes Source SDK",
        "slug": "includes-source-sdk",
        "language": "eng",
        "games_count": 61,
        "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
      },
      {
        "id": 87,
        "name": "Science",
        "slug": "science",
        "language": "eng",
        "games_count": 1546,
        "image_background": "https://media.rawg.io/media/screenshots/c19/c192b66ef53e26bbb130a9a939be8d87_j8WENxs.jpg"
      }
    ],
    "esrb_rating": {
      "id": 3,
      "name": "Teen",
      "slug": "teen"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
      },
      {
        "id": 115793,
        "image": "https://media.rawg.io/media/screenshots/99e/99e94bd55eb75fa6e75c3dcbb1a570b2.jpg"
      },
      {
        "id": 115794,
        "image": "https://media.rawg.io/media/screenshots/2f0/2f0297a46934d9fa914c626902b1ce20.jpg"
      },
      {
        "id": 115795,
        "image": "https://media.rawg.io/media/screenshots/3b3/3b3713fbca6194dfc4d6e8a8d006d354.jpg"
      },
      {
        "id": 115796,
        "image": "https://media.rawg.io/media/screenshots/c6f/c6f9afc3e4dd51068b22f04acbc6ca99.jpg"
      },
      {
        "id": 115797,
        "image": "https://media.rawg.io/media/screenshots/748/74841207eec76ebc7fc03210168bfb7e.jpg"
      },
      {
        "id": 115798,
        "image": "https://media.rawg.io/media/screenshots/e72/e7256b4caedf099bcb8ebd332f892334.jpg"
      }
    ]
  },
  {
    "slug": "left-4-dead-2",
    "name": "Left 4 Dead 2",
    "released": "2009-11-17",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    "rating": 4.09,
    "rating_top": 4,
    "ratings": [
      {
        "id": 4,
        "title": "recommended",
        "count": 1692,
        "percent": 53.36
      },
      {
        "id": 5,
        "title": "exceptional",
        "count": 999,
        "percent": 31.5
      },
      {
        "id": 3,
        "title": "meh",
        "count": 362,
        "percent": 11.42
      },
      {
        "id": 1,
        "title": "skip",
        "count": 118,
        "percent": 3.72
      }
    ],
    "ratings_count": 3152,
    "reviews_text_count": 10,
    "added": 15401,
    "added_by_status": {
      "yet": 366,
      "owned": 11264,
      "beaten": 2384,
      "toplay": 110,
      "dropped": 1134,
      "playing": 143
    },
    "metacritic": 89,
    "playtime": 9,
    "suggestions_count": 585,
    "updated": "2023-09-20T18:31:52",
    "user_game": null,
    "reviews_count": 3171,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 5,
          "name": "macOS",
          "slug": "macos",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 102027,
          "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
        },
        "released_at": "2009-11-17",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 75485,
          "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
        },
        "released_at": "2009-11-17",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516631,
          "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
        },
        "released_at": "2009-11-17",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Pentium 4 3.0GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>",
          "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows® 7 32/64-bit / Vista 32/64 / XP<br></li><li><strong>Processor:</strong> Intel core 2 duo 2.4GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Storage:</strong> 13 GB available space<br></li><li><strong>Sound Card:</strong> DirectX 9.0c compatible sound card</li></ul>"
        },
        "requirements_ru": {
          "minimum": "Pentium 4/Athlon 64 3 ГГц,1 Гб памяти,GeForce 6600/Radeon X800,7.5 Гб на винчестере",
          "recommended": "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 7600/Radeon X1600,7.5 Гб на винчестере"
        }
      },
      {
        "platform": {
          "id": 14,
          "name": "Xbox 360",
          "slug": "xbox360",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 2787,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        "released_at": "2009-11-17",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 59364,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      }
    ],
    "stores": [
      {
        "id": 13208,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 34000,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1912,
          "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 40847,
        "name": "Steam Achievements",
        "slug": "steam-achievements",
        "language": "eng",
        "games_count": 31891,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 7,
        "name": "Multiplayer",
        "slug": "multiplayer",
        "language": "eng",
        "games_count": 35582,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 40836,
        "name": "Full controller support",
        "slug": "full-controller-support",
        "language": "eng",
        "games_count": 14997,
        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
      },
      {
        "id": 40849,
        "name": "Steam Cloud",
        "slug": "steam-cloud",
        "language": "eng",
        "games_count": 14905,
        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
      },
      {
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7571,
        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
      },
      {
        "id": 18,
        "name": "Co-op",
        "slug": "co-op",
        "language": "eng",
        "games_count": 10166,
        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
      },
      {
        "id": 411,
        "name": "cooperative",
        "slug": "cooperative",
        "language": "eng",
        "games_count": 4250,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 8,
        "name": "First-Person",
        "slug": "first-person",
        "language": "eng",
        "games_count": 29160,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 16,
        "name": "Horror",
        "slug": "horror",
        "language": "eng",
        "games_count": 42302,
        "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 12321,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 9,
        "name": "Online Co-Op",
        "slug": "online-co-op",
        "language": "eng",
        "games_count": 4643,
        "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
      },
      {
        "id": 26,
        "name": "Gore",
        "slug": "gore",
        "language": "eng",
        "games_count": 5161,
        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
      },
      {
        "id": 1,
        "name": "Survival",
        "slug": "survival",
        "language": "eng",
        "games_count": 7505,
        "image_background": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg"
      },
      {
        "id": 75,
        "name": "Local Co-Op",
        "slug": "local-co-op",
        "language": "eng",
        "games_count": 5046,
        "image_background": "https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg"
      },
      {
        "id": 80,
        "name": "Tactical",
        "slug": "tactical",
        "language": "eng",
        "games_count": 4287,
        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
      },
      {
        "id": 11669,
        "name": "stats",
        "slug": "stats",
        "language": "eng",
        "games_count": 4571,
        "image_background": "https://media.rawg.io/media/games/bff/bff077fb7c3b037bd5ed920bf447c863.jpg"
      },
      {
        "id": 40852,
        "name": "Steam Workshop",
        "slug": "steam-workshop",
        "language": "eng",
        "games_count": 1349,
        "image_background": "https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg"
      },
      {
        "id": 63,
        "name": "Zombies",
        "slug": "zombies",
        "language": "eng",
        "games_count": 9775,
        "image_background": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg"
      },
      {
        "id": 62,
        "name": "Moddable",
        "slug": "moddable",
        "language": "eng",
        "games_count": 804,
        "image_background": "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg"
      },
      {
        "id": 43,
        "name": "Post-apocalyptic",
        "slug": "post-apocalyptic",
        "language": "eng",
        "games_count": 3470,
        "image_background": "https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg"
      },
      {
        "id": 17,
        "name": "Survival Horror",
        "slug": "survival-horror",
        "language": "eng",
        "games_count": 7737,
        "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
      },
      {
        "id": 40833,
        "name": "Captions available",
        "slug": "captions-available",
        "language": "eng",
        "games_count": 1251,
        "image_background": "https://media.rawg.io/media/games/963/9639183ff27251b0b686acaa6aac0297.jpg"
      },
      {
        "id": 5,
        "name": "Replay Value",
        "slug": "replay-value",
        "language": "eng",
        "games_count": 1355,
        "image_background": "https://media.rawg.io/media/games/8e6/8e699e91cf77c2060b6d515e2135b1b1.jpg"
      },
      {
        "id": 11,
        "name": "Team-Based",
        "slug": "team-based",
        "language": "eng",
        "games_count": 1355,
        "image_background": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg"
      },
      {
        "id": 40856,
        "name": "Valve Anti-Cheat enabled",
        "slug": "valve-anti-cheat-enabled",
        "language": "eng",
        "games_count": 105,
        "image_background": "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg"
      },
      {
        "id": 40834,
        "name": "Commentary available",
        "slug": "commentary-available",
        "language": "eng",
        "games_count": 255,
        "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
      },
      {
        "id": 40839,
        "name": "Includes Source SDK",
        "slug": "includes-source-sdk",
        "language": "eng",
        "games_count": 61,
        "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
      },
      {
        "id": 99748,
        "image": "https://media.rawg.io/media/screenshots/4c0/4c043fd1a5ff78900483f2e82580fea0.jpg"
      },
      {
        "id": 99749,
        "image": "https://media.rawg.io/media/screenshots/c90/c9071628c238fbc20b366e2413dd8b4a.jpg"
      },
      {
        "id": 99750,
        "image": "https://media.rawg.io/media/screenshots/e29/e293b0f98092b8c0dbe24d66846088bb.jpg"
      },
      {
        "id": 99751,
        "image": "https://media.rawg.io/media/screenshots/168/16867bc76b385eb0fb749e41f7ada93d.jpg"
      },
      {
        "id": 99752,
        "image": "https://media.rawg.io/media/screenshots/fb9/fb917e562f311f48ff8d27632bd29a80.jpg"
      },
      {
        "id": 99753,
        "image": "https://media.rawg.io/media/screenshots/5f2/5f2ca569912add2a211b20ba3f576b97.jpg"
      }
    ]
  },
  {
    "slug": "the-elder-scrolls-v-skyrim",
    "name": "The Elder Scrolls V: Skyrim",
    "released": "2011-11-11",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    "rating": 4.42,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 2584,
        "percent": 57.43
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 1420,
        "percent": 31.56
      },
      {
        "id": 3,
        "title": "meh",
        "count": 399,
        "percent": 8.87
      },
      {
        "id": 1,
        "title": "skip",
        "count": 96,
        "percent": 2.13
      }
    ],
    "ratings_count": 4452,
    "reviews_text_count": 32,
    "added": 15128,
    "added_by_status": {
      "yet": 484,
      "owned": 9031,
      "beaten": 3592,
      "toplay": 396,
      "dropped": 1255,
      "playing": 370
    },
    "metacritic": 94,
    "playtime": 46,
    "suggestions_count": 600,
    "updated": "2023-09-20T18:31:16",
    "user_game": null,
    "reviews_count": 4499,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2011-11-11",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br>\t\t\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/Vista/XP PC (32 or 64 bit)<br>\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Dual Core 2.0GHz or equivalent processor<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 6GB free HDD Space<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> Direct X 9.0c compliant video card with 512 MB of RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> DirectX compatible sound card<br>\t\t\t\t\t\t\t\t</li></ul>",
          "recommended": "<strong>Recommended:</strong><br>\t\t\t\t\t\t\t\t<ul class=\"bb_ul\"><li><strong>Processor:</strong> Quad-core Intel or AMD CPU<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 4GB System RAM<br>\t\t\t\t\t\t\t\t</li><li><strong>Video Card:</strong> DirectX 9.0c compatible NVIDIA or AMD ATI video card with 1GB of RAM (Nvidia GeForce GTX 260 or higher; ATI Radeon 4890 or higher)<br>\t\t\t\t\t\t\t\t</li></ul>"
        },
        "requirements_ru": {
          "minimum": "Core 2 Duo/Athlon X2 2 ГГц,2 Гб памяти,GeForce 8800/Radeon X1900,6 Гб на винчестере",
          "recommended": "Core 2 Quad/Phenom X4 2.5 ГГц,4 Гб памяти,GeForce GTX 260/Radeon HD 4890,6 Гб на винчестере"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo Switch",
          "slug": "nintendo-switch",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5315,
          "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        },
        "released_at": "2011-11-11",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 14,
          "name": "Xbox 360",
          "slug": "xbox360",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 2787,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        "released_at": "2011-11-11",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 16,
          "name": "PlayStation 3",
          "slug": "playstation3",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 3163,
          "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        },
        "released_at": "2011-11-11",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 5,
        "name": "RPG",
        "slug": "role-playing-games-rpg",
        "games_count": 53260,
        "image_background": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg"
      }
    ],
    "stores": [
      {
        "id": 6037,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 15144,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 32919,
        "store": {
          "id": 6,
          "name": "Nintendo Store",
          "slug": "nintendo",
          "domain": "nintendo.com",
          "games_count": 8885,
          "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
        }
      },
      {
        "id": 49792,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1912,
          "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 40847,
        "name": "Steam Achievements",
        "slug": "steam-achievements",
        "language": "eng",
        "games_count": 31891,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 40849,
        "name": "Steam Cloud",
        "slug": "steam-cloud",
        "language": "eng",
        "games_count": 14905,
        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7571,
        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
      },
      {
        "id": 42,
        "name": "Great Soundtrack",
        "slug": "great-soundtrack",
        "language": "eng",
        "games_count": 3249,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 24,
        "name": "RPG",
        "slug": "rpg",
        "language": "eng",
        "games_count": 17938,
        "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
      },
      {
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 18867,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 36,
        "name": "Open World",
        "slug": "open-world",
        "language": "eng",
        "games_count": 6502,
        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
      },
      {
        "id": 8,
        "name": "First-Person",
        "slug": "first-person",
        "language": "eng",
        "games_count": 29160,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 149,
        "name": "Third Person",
        "slug": "third-person",
        "language": "eng",
        "games_count": 9837,
        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      },
      {
        "id": 40845,
        "name": "Partial Controller Support",
        "slug": "partial-controller-support",
        "language": "eng",
        "games_count": 10164,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 64,
        "name": "Fantasy",
        "slug": "fantasy",
        "language": "eng",
        "games_count": 25131,
        "image_background": "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg"
      },
      {
        "id": 37,
        "name": "Sandbox",
        "slug": "sandbox",
        "language": "eng",
        "games_count": 6117,
        "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
      },
      {
        "id": 97,
        "name": "Action RPG",
        "slug": "action-rpg",
        "language": "eng",
        "games_count": 5934,
        "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
      },
      {
        "id": 40852,
        "name": "Steam Workshop",
        "slug": "steam-workshop",
        "language": "eng",
        "games_count": 1349,
        "image_background": "https://media.rawg.io/media/games/0fd/0fd84d36596a83ef2e5a35f63a072218.jpg"
      },
      {
        "id": 468,
        "name": "role-playing",
        "slug": "role-playing",
        "language": "eng",
        "games_count": 1518,
        "image_background": "https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg"
      },
      {
        "id": 62,
        "name": "Moddable",
        "slug": "moddable",
        "language": "eng",
        "games_count": 804,
        "image_background": "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg"
      },
      {
        "id": 121,
        "name": "Character Customization",
        "slug": "character-customization",
        "language": "eng",
        "games_count": 3733,
        "image_background": "https://media.rawg.io/media/games/e44/e445335e611b4ccf03af71fffcbd30a4.jpg"
      },
      {
        "id": 40,
        "name": "Dark Fantasy",
        "slug": "dark-fantasy",
        "language": "eng",
        "games_count": 3420,
        "image_background": "https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg"
      },
      {
        "id": 66,
        "name": "Medieval",
        "slug": "medieval",
        "language": "eng",
        "games_count": 5578,
        "image_background": "https://media.rawg.io/media/games/e40/e40cc9d1957b0a0ed7e389834457b524.jpg"
      },
      {
        "id": 82,
        "name": "Magic",
        "slug": "magic",
        "language": "eng",
        "games_count": 8350,
        "image_background": "https://media.rawg.io/media/games/ccf/ccf26f6e3d553a04f0033a8107a521b8.jpg"
      },
      {
        "id": 205,
        "name": "Lore-Rich",
        "slug": "lore-rich",
        "language": "eng",
        "games_count": 919,
        "image_background": "https://media.rawg.io/media/screenshots/525/525b5da62342fa726bfe2820e8f93c09.jpg"
      },
      {
        "id": 215,
        "name": "Dragons",
        "slug": "dragons",
        "language": "eng",
        "games_count": 2449,
        "image_background": "https://media.rawg.io/media/games/872/8721094b44212218051621bc6fbee27d.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
      },
      {
        "id": 118307,
        "image": "https://media.rawg.io/media/screenshots/3bd/3bd2710bd1ffb6664fdea7b83afd067e.jpg"
      },
      {
        "id": 118308,
        "image": "https://media.rawg.io/media/screenshots/d4e/d4e9b13f54748584ccbd6f998094dade.jpg"
      },
      {
        "id": 118309,
        "image": "https://media.rawg.io/media/screenshots/599/59946a630e9c7871003763d63184404a.jpg"
      },
      {
        "id": 118310,
        "image": "https://media.rawg.io/media/screenshots/c5d/c5dad426038d7d12f933eedbeab48ff3.jpg"
      },
      {
        "id": 118311,
        "image": "https://media.rawg.io/media/screenshots/b32/b326fa01c82db82edd41ed299886ee44.jpg"
      },
      {
        "id": 118312,
        "image": "https://media.rawg.io/media/screenshots/091/091e95b49d5a22de036698fc731395a2.jpg"
      }
    ]
  },
  {
    "slug": "bioshock-infinite",
    "name": "BioShock Infinite",
    "released": "2013-03-26",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    "rating": 4.38,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 2166,
        "percent": 55.2
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 1308,
        "percent": 33.33
      },
      {
        "id": 3,
        "title": "meh",
        "count": 342,
        "percent": 8.72
      },
      {
        "id": 1,
        "title": "skip",
        "count": 108,
        "percent": 2.75
      }
    ],
    "ratings_count": 3886,
    "reviews_text_count": 22,
    "added": 14608,
    "added_by_status": {
      "yet": 800,
      "owned": 8685,
      "beaten": 4162,
      "toplay": 386,
      "dropped": 478,
      "playing": 97
    },
    "metacritic": 94,
    "playtime": 12,
    "suggestions_count": 594,
    "updated": "2023-09-19T21:27:11",
    "user_game": null,
    "reviews_count": 3924,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 18,
          "name": "PlayStation 4",
          "slug": "playstation4",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 6708,
          "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
        },
        "released_at": "2013-03-26",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 14,
          "name": "Xbox 360",
          "slug": "xbox360",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 2787,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        "released_at": "2013-03-26",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo Switch",
          "slug": "nintendo-switch",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5315,
          "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        },
        "released_at": "2013-03-26",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 75485,
          "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
        },
        "released_at": "2013-03-26",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2013-03-26",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows Vista Service Pack 2 32-bit<br>\t</li><li><strong>Processor:</strong> Intel Core 2 DUO 2.4 GHz / AMD Athlon X2 2.7 GHz<br>\t</li><li><strong>Memory:</strong> 2GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX10 Compatible ATI Radeon HD 3870 / NVIDIA 8800 GT / Intel HD 3000 Integrated Graphics<br>\t</li><li><strong>Video Card Memory:</strong> 512 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>",
          "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7 Service Pack 1 64-bit<br>\t</li><li><strong>Processor:</strong> Quad Core Processor<br>\t</li><li><strong>Memory:</strong> 4GB<br>\t</li><li><strong>Hard Disk Space:</strong> 30 GB free<br>\t</li><li><strong>Video Card:</strong> DirectX11 Compatible, AMD Radeon HD 6950 / NVIDIA GeForce GTX 560<br>\t</li><li><strong>Video Card Memory:</strong> 1024 MB\t<br>\t</li><li><strong>Sound:</strong> DirectX Compatible</li></ul>"
        },
        "requirements_ru": {
          "minimum": "Win Vista 32\nCore 2 Duo E4600/Athlon 64 X2 5200+\nGeForce GT 340/Radeon HD 3800\n2 GB RAM\n20 GB HDD",
          "recommended": "Win 7 64\nCore 2 Quad Q6600/Athlon II X4 610e\nGeForce GTX 560/Radeon HD 6950\n4 GB RAM\n20 GB HDD"
        }
      },
      {
        "platform": {
          "id": 16,
          "name": "PlayStation 3",
          "slug": "playstation3",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 3163,
          "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        },
        "released_at": "2013-03-26",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 1,
          "name": "Xbox One",
          "slug": "xbox-one",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5544,
          "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
        },
        "released_at": "2013-03-26",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 59364,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      }
    ],
    "stores": [
      {
        "id": 828870,
        "store": {
          "id": 11,
          "name": "Epic Games",
          "slug": "epic-games",
          "domain": "epicgames.com",
          "games_count": 1266,
          "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
        }
      },
      {
        "id": 71727,
        "store": {
          "id": 4,
          "name": "App Store",
          "slug": "apple-appstore",
          "domain": "apps.apple.com",
          "games_count": 75329,
          "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
        }
      },
      {
        "id": 440409,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4770,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      },
      {
        "id": 461035,
        "store": {
          "id": 6,
          "name": "Nintendo Store",
          "slug": "nintendo",
          "domain": "nintendo.com",
          "games_count": 8885,
          "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
        }
      },
      {
        "id": 4382,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 13084,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 33810,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1912,
          "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 40847,
        "name": "Steam Achievements",
        "slug": "steam-achievements",
        "language": "eng",
        "games_count": 31891,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 40836,
        "name": "Full controller support",
        "slug": "full-controller-support",
        "language": "eng",
        "games_count": 14997,
        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
      },
      {
        "id": 40849,
        "name": "Steam Cloud",
        "slug": "steam-cloud",
        "language": "eng",
        "games_count": 14905,
        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7571,
        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
      },
      {
        "id": 42,
        "name": "Great Soundtrack",
        "slug": "great-soundtrack",
        "language": "eng",
        "games_count": 3249,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 24,
        "name": "RPG",
        "slug": "rpg",
        "language": "eng",
        "games_count": 17938,
        "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
      },
      {
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 18867,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 8,
        "name": "First-Person",
        "slug": "first-person",
        "language": "eng",
        "games_count": 29160,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 32,
        "name": "Sci-fi",
        "slug": "sci-fi",
        "language": "eng",
        "games_count": 17527,
        "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 12321,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 64,
        "name": "Fantasy",
        "slug": "fantasy",
        "language": "eng",
        "games_count": 25131,
        "image_background": "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg"
      },
      {
        "id": 26,
        "name": "Gore",
        "slug": "gore",
        "language": "eng",
        "games_count": 5161,
        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
      },
      {
        "id": 115,
        "name": "Controller",
        "slug": "controller",
        "language": "eng",
        "games_count": 9880,
        "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
      },
      {
        "id": 119,
        "name": "Dystopian",
        "slug": "dystopian",
        "language": "eng",
        "games_count": 1867,
        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
      },
      {
        "id": 154,
        "name": "Steampunk",
        "slug": "steampunk",
        "language": "eng",
        "games_count": 1134,
        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
      },
      {
        "id": 305,
        "name": "Linear",
        "slug": "linear",
        "language": "eng",
        "games_count": 4359,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 208,
        "name": "Alternate History",
        "slug": "alternate-history",
        "language": "eng",
        "games_count": 1519,
        "image_background": "https://media.rawg.io/media/screenshots/245/245579c536d2a06e69d391573d911679.jpg"
      },
      {
        "id": 317,
        "name": "Time Travel",
        "slug": "time-travel",
        "language": "eng",
        "games_count": 1704,
        "image_background": "https://media.rawg.io/media/screenshots/59e/59e1eafe1c11e8bc5b727e0c69c0261f.jpg"
      },
      {
        "id": 287,
        "name": "Political",
        "slug": "political",
        "language": "eng",
        "games_count": 522,
        "image_background": "https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
      },
      {
        "id": 98549,
        "image": "https://media.rawg.io/media/screenshots/bf0/bf07e2c6d2c888d372917d9ef453c8a4.jpg"
      },
      {
        "id": 98550,
        "image": "https://media.rawg.io/media/screenshots/9d3/9d38833952812ad7888a6dc21699934f.jpg"
      },
      {
        "id": 98551,
        "image": "https://media.rawg.io/media/screenshots/595/59572d257b6797986e4eabcd1ee023fd.jpg"
      },
      {
        "id": 98552,
        "image": "https://media.rawg.io/media/screenshots/f71/f71c23eb76f050d6180490e82d58d799.jpg"
      },
      {
        "id": 98553,
        "image": "https://media.rawg.io/media/screenshots/871/8713411d5332ceb2b4092073a6f5f3f2.jpg"
      },
      {
        "id": 98554,
        "image": "https://media.rawg.io/media/screenshots/985/985b56daa78e0a23133518d4226e9f97.jpg"
      }
    ]
  },
  {
    "slug": "red-dead-redemption-2",
    "name": "Red Dead Redemption 2",
    "released": "2018-10-26",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    "rating": 4.59,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 3517,
        "percent": 73.33
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 876,
        "percent": 18.27
      },
      {
        "id": 3,
        "title": "meh",
        "count": 265,
        "percent": 5.53
      },
      {
        "id": 1,
        "title": "skip",
        "count": 138,
        "percent": 2.88
      }
    ],
    "ratings_count": 4695,
    "reviews_text_count": 73,
    "added": 14606,
    "added_by_status": {
      "yet": 887,
      "owned": 7643,
      "beaten": 2968,
      "toplay": 1580,
      "dropped": 637,
      "playing": 891
    },
    "metacritic": 96,
    "playtime": 20,
    "suggestions_count": 603,
    "updated": "2023-09-20T19:39:48",
    "user_game": null,
    "reviews_count": 4796,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2018-10-26",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 7 - Service Pack 1 (6.1.7601)<br></li><li><strong>Processor:</strong> Intel® Core™ i5-2500K / AMD FX-6300<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>",
          "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 - April 2018 Update (v1803)<br></li><li><strong>Processor:</strong> Intel® Core™ i7-4770K / AMD Ryzen 5 1500X<br></li><li><strong>Memory:</strong> 12 GB RAM<br></li><li><strong>Graphics:</strong> Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 150 GB available space<br></li><li><strong>Sound Card:</strong> Direct X Compatible</li></ul>"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 18,
          "name": "PlayStation 4",
          "slug": "playstation4",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 6708,
          "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
        },
        "released_at": "2018-10-26",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 1,
          "name": "Xbox One",
          "slug": "xbox-one",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5544,
          "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
        },
        "released_at": "2018-10-26",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 3,
        "name": "Adventure",
        "slug": "adventure",
        "games_count": 134116,
        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
      }
    ],
    "stores": [
      {
        "id": 257732,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 374316,
        "store": {
          "id": 11,
          "name": "Epic Games",
          "slug": "epic-games",
          "domain": "epicgames.com",
          "games_count": 1266,
          "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
        }
      },
      {
        "id": 384218,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 48782,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4770,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 7,
        "name": "Multiplayer",
        "slug": "multiplayer",
        "language": "eng",
        "games_count": 35582,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 42,
        "name": "Great Soundtrack",
        "slug": "great-soundtrack",
        "language": "eng",
        "games_count": 3249,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 18,
        "name": "Co-op",
        "slug": "co-op",
        "language": "eng",
        "games_count": 10166,
        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
      },
      {
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 18867,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 36,
        "name": "Open World",
        "slug": "open-world",
        "language": "eng",
        "games_count": 6502,
        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
      },
      {
        "id": 8,
        "name": "First-Person",
        "slug": "first-person",
        "language": "eng",
        "games_count": 29160,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 149,
        "name": "Third Person",
        "slug": "third-person",
        "language": "eng",
        "games_count": 9837,
        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      },
      {
        "id": 40845,
        "name": "Partial Controller Support",
        "slug": "partial-controller-support",
        "language": "eng",
        "games_count": 10164,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 12321,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 9,
        "name": "Online Co-Op",
        "slug": "online-co-op",
        "language": "eng",
        "games_count": 4643,
        "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
      },
      {
        "id": 26,
        "name": "Gore",
        "slug": "gore",
        "language": "eng",
        "games_count": 5161,
        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
      },
      {
        "id": 6,
        "name": "Exploration",
        "slug": "exploration",
        "language": "eng",
        "games_count": 20072,
        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
      },
      {
        "id": 37,
        "name": "Sandbox",
        "slug": "sandbox",
        "language": "eng",
        "games_count": 6117,
        "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
      },
      {
        "id": 34,
        "name": "Violent",
        "slug": "violent",
        "language": "eng",
        "games_count": 6035,
        "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"
      },
      {
        "id": 150,
        "name": "Third-Person Shooter",
        "slug": "third-person-shooter",
        "language": "eng",
        "games_count": 2984,
        "image_background": "https://media.rawg.io/media/games/9e5/9e5b274c7e3aa5e30beba31b834b0e7e.jpg"
      },
      {
        "id": 157,
        "name": "PvP",
        "slug": "pvp",
        "language": "eng",
        "games_count": 7630,
        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
      },
      {
        "id": 40837,
        "name": "In-App Purchases",
        "slug": "in-app-purchases",
        "language": "eng",
        "games_count": 2193,
        "image_background": "https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg"
      },
      {
        "id": 192,
        "name": "Mature",
        "slug": "mature",
        "language": "eng",
        "games_count": 2366,
        "image_background": "https://media.rawg.io/media/games/998/9980c4296f311d8bcc5b451ca51e4fe1.jpg"
      },
      {
        "id": 89,
        "name": "Historical",
        "slug": "historical",
        "language": "eng",
        "games_count": 2686,
        "image_background": "https://media.rawg.io/media/games/d8f/d8f3b28fc747ed6f92943cdd33fb91b5.jpeg"
      },
      {
        "id": 110,
        "name": "Cinematic",
        "slug": "cinematic",
        "language": "eng",
        "games_count": 1547,
        "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
      },
      {
        "id": 77,
        "name": "Realistic",
        "slug": "realistic",
        "language": "eng",
        "games_count": 4259,
        "image_background": "https://media.rawg.io/media/games/708/7080e6c87e0825cb02888bf3c44b3889.jpg"
      },
      {
        "id": 144,
        "name": "Crime",
        "slug": "crime",
        "language": "eng",
        "games_count": 2607,
        "image_background": "https://media.rawg.io/media/games/9e5/9e5b274c7e3aa5e30beba31b834b0e7e.jpg"
      },
      {
        "id": 45878,
        "name": "Online PvP",
        "slug": "online-pvp",
        "language": "eng",
        "games_count": 3432,
        "image_background": "https://media.rawg.io/media/games/e43/e43f9f0a1429bd9332020ac5876bc693.jpg"
      },
      {
        "id": 478,
        "name": "3rd-Person Perspective",
        "slug": "3rd-person-perspective",
        "language": "eng",
        "games_count": 85,
        "image_background": "https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg"
      },
      {
        "id": 270,
        "name": "Blood",
        "slug": "blood",
        "language": "eng",
        "games_count": 1961,
        "image_background": "https://media.rawg.io/media/screenshots/6cc/6ccddc2d20386efce7b6081ea68ac514.jpg"
      },
      {
        "id": 78,
        "name": "America",
        "slug": "america",
        "language": "eng",
        "games_count": 506,
        "image_background": "https://media.rawg.io/media/screenshots/e0e/e0ef96a0639af3735cb4d26160e82c16.jpg"
      },
      {
        "id": 578,
        "name": "Masterpiece",
        "slug": "masterpiece",
        "language": "eng",
        "games_count": 284,
        "image_background": "https://media.rawg.io/media/games/d65/d654fb344f39538728ab0a4d94b22ae9.jpg"
      },
      {
        "id": 577,
        "name": "Beautiful",
        "slug": "beautiful",
        "language": "eng",
        "games_count": 1810,
        "image_background": "https://media.rawg.io/media/screenshots/291/29135ecd06cd54c4f13a8bcddbba8fba.jpg"
      },
      {
        "id": 181,
        "name": "Hunting",
        "slug": "hunting",
        "language": "eng",
        "games_count": 857,
        "image_background": "https://media.rawg.io/media/games/275/2759da6fcaa8f81f21800926168c85f6.jpg"
      },
      {
        "id": 152,
        "name": "Western",
        "slug": "western",
        "language": "eng",
        "games_count": 1225,
        "image_background": "https://media.rawg.io/media/screenshots/c16/c167162530a93902a232389086164fca.jpg"
      },
      {
        "id": 5452,
        "name": "3rd-person",
        "slug": "3rd-person",
        "language": "eng",
        "games_count": 97,
        "image_background": "https://media.rawg.io/media/screenshots/e30/e30b6a334c20ae534c15d3f0d71cad36.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
      },
      {
        "id": 778173,
        "image": "https://media.rawg.io/media/screenshots/7b8/7b8895a23e8ca0dbd9e1ba24696579d9.jpg"
      },
      {
        "id": 778174,
        "image": "https://media.rawg.io/media/screenshots/b8c/b8cee381079d58b981594ede46a3d6ca.jpg"
      },
      {
        "id": 778175,
        "image": "https://media.rawg.io/media/screenshots/fd6/fd6e41d4c30c098158568aef32dfed35.jpg"
      },
      {
        "id": 778176,
        "image": "https://media.rawg.io/media/screenshots/2ed/2ed3b2791b3bbed6b98bf362694aeb73.jpg"
      },
      {
        "id": 778177,
        "image": "https://media.rawg.io/media/screenshots/857/8573b9f4f06a0c112d6e39cdf3544881.jpg"
      },
      {
        "id": 778178,
        "image": "https://media.rawg.io/media/screenshots/985/985e3e1f1d1af1ab0797d43a95d472cc.jpg"
      }
    ]
  },
  {
    "slug": "borderlands-2",
    "name": "Borderlands 2",
    "released": "2012-09-18",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
    "rating": 4.01,
    "rating_top": 4,
    "ratings": [
      {
        "id": 4,
        "title": "recommended",
        "count": 1494,
        "percent": 47.9
      },
      {
        "id": 5,
        "title": "exceptional",
        "count": 964,
        "percent": 30.91
      },
      {
        "id": 3,
        "title": "meh",
        "count": 530,
        "percent": 16.99
      },
      {
        "id": 1,
        "title": "skip",
        "count": 131,
        "percent": 4.2
      }
    ],
    "ratings_count": 3099,
    "reviews_text_count": 12,
    "added": 14434,
    "added_by_status": {
      "yet": 597,
      "owned": 9971,
      "beaten": 2205,
      "toplay": 218,
      "dropped": 1232,
      "playing": 211
    },
    "metacritic": 89,
    "playtime": 10,
    "suggestions_count": 676,
    "updated": "2023-09-20T18:30:53",
    "user_game": null,
    "reviews_count": 3119,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 16,
          "name": "PlayStation 3",
          "slug": "playstation3",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 3163,
          "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        },
        "released_at": "2012-09-18",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 5,
          "name": "macOS",
          "slug": "macos",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 102027,
          "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
        },
        "released_at": "2012-09-18",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2012-09-18",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP SP3<br>\t</li><li><strong>Processor:</strong> 2.4 GHz Dual Core Processor<br>\t</li><li><strong>Memory:</strong> 2 GB(XP)/ 2 GB(Vista)<br>\t</li><li><strong>Hard Disk Space:</strong> 13 GB free<br>\t</li><li><strong>Video Memory:</strong> 256 MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce 8500 /ATI Radeon HD 2600<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>",
          "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP SP3/Vista/Win 7<br>\t</li><li><strong>Processor:</strong> 2.3 GHz Quad Core processor<br>\t</li><li><strong>Memory:</strong> 2 GB<br>\t</li><li><strong>Hard Disk Space:</strong> 20 GB free<br>\t</li><li><strong>Video Memory:</strong> 512MB<br>\t</li><li><strong>Video Card:</strong> NVIDIA GeForce GTX 560 / ATI Radeon HD 5850<br>\t</li><li><strong>Sound:</strong> DirectX 9.0c Compatible<br>\t</li><li><strong>Other Requirements:</strong>Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include Steam Client, DirectX 9, Microsoft .NET 4 Framework, Visual C++ Redistributable 2005, Visual C++ Redistributable 2008, Visual C++ Redistributable 2010, and AMD CPU Drivers (XP Only/AMD Only)</li></ul>"
        },
        "requirements_ru": {
          "minimum": "Core 2 Duo/Athlon 64 X2 2.4 ГГц,2 Гб памяти,GeForce 8500/Radeon HD 2600,13 Гб на винчестере,интернет-соединение",
          "recommended": "Core i5/Phenom X4 2.3 ГГц,2 Гб памяти,GeForce GTX 560/Radeon HD 5850,20 Гб на винчестере,интернет-соединение"
        }
      },
      {
        "platform": {
          "id": 21,
          "name": "Android",
          "slug": "android",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 52263,
          "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
        },
        "released_at": "2012-09-18",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 75485,
          "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
        },
        "released_at": "2012-09-18",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 19,
          "name": "PS Vita",
          "slug": "ps-vita",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 1449,
          "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
        },
        "released_at": "2012-09-18",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 14,
          "name": "Xbox 360",
          "slug": "xbox360",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 2787,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        "released_at": "2012-09-18",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 8,
          "name": "Android",
          "slug": "android"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 59364,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      },
      {
        "id": 5,
        "name": "RPG",
        "slug": "role-playing-games-rpg",
        "games_count": 53260,
        "image_background": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg"
      }
    ],
    "stores": [
      {
        "id": 4000,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 213037,
        "store": {
          "id": 8,
          "name": "Google Play",
          "slug": "google-play",
          "domain": "play.google.com",
          "games_count": 17056,
          "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
        }
      },
      {
        "id": 11088,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 34042,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1912,
          "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        }
      },
      {
        "id": 71617,
        "store": {
          "id": 4,
          "name": "App Store",
          "slug": "apple-appstore",
          "domain": "apps.apple.com",
          "games_count": 75329,
          "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
        }
      },
      {
        "id": 817,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4770,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 40847,
        "name": "Steam Achievements",
        "slug": "steam-achievements",
        "language": "eng",
        "games_count": 31891,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 7,
        "name": "Multiplayer",
        "slug": "multiplayer",
        "language": "eng",
        "games_count": 35582,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 40836,
        "name": "Full controller support",
        "slug": "full-controller-support",
        "language": "eng",
        "games_count": 14997,
        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
      },
      {
        "id": 40849,
        "name": "Steam Cloud",
        "slug": "steam-cloud",
        "language": "eng",
        "games_count": 14905,
        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7571,
        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
      },
      {
        "id": 24,
        "name": "RPG",
        "slug": "rpg",
        "language": "eng",
        "games_count": 17938,
        "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
      },
      {
        "id": 18,
        "name": "Co-op",
        "slug": "co-op",
        "language": "eng",
        "games_count": 10166,
        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
      },
      {
        "id": 36,
        "name": "Open World",
        "slug": "open-world",
        "language": "eng",
        "games_count": 6502,
        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
      },
      {
        "id": 411,
        "name": "cooperative",
        "slug": "cooperative",
        "language": "eng",
        "games_count": 4250,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 32,
        "name": "Sci-fi",
        "slug": "sci-fi",
        "language": "eng",
        "games_count": 17527,
        "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 12321,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 9,
        "name": "Online Co-Op",
        "slug": "online-co-op",
        "language": "eng",
        "games_count": 4643,
        "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
      },
      {
        "id": 4,
        "name": "Funny",
        "slug": "funny",
        "language": "eng",
        "games_count": 22958,
        "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
      },
      {
        "id": 123,
        "name": "Comedy",
        "slug": "comedy",
        "language": "eng",
        "games_count": 11182,
        "image_background": "https://media.rawg.io/media/games/85c/85c8ae70e7cdf0105f06ef6bdce63b8b.jpg"
      },
      {
        "id": 97,
        "name": "Action RPG",
        "slug": "action-rpg",
        "language": "eng",
        "games_count": 5934,
        "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
      },
      {
        "id": 167,
        "name": "Futuristic",
        "slug": "futuristic",
        "language": "eng",
        "games_count": 4558,
        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
      },
      {
        "id": 120,
        "name": "Memes",
        "slug": "memes",
        "language": "eng",
        "games_count": 1604,
        "image_background": "https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg"
      },
      {
        "id": 148,
        "name": "Dark Humor",
        "slug": "dark-humor",
        "language": "eng",
        "games_count": 2555,
        "image_background": "https://media.rawg.io/media/games/df2/df20fd77db56ae7b0a26a7ff4baa9ccc.jpg"
      },
      {
        "id": 166,
        "name": "Stylized",
        "slug": "stylized",
        "language": "eng",
        "games_count": 4759,
        "image_background": "https://media.rawg.io/media/games/ba9/ba981ea851b2a85b78d63d9ec53c19e5.jpg"
      },
      {
        "id": 98,
        "name": "Loot",
        "slug": "loot",
        "language": "eng",
        "games_count": 1998,
        "image_background": "https://media.rawg.io/media/games/dc0/dc0926d3f84ffbcc00968fe8a6f0aed3.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
      },
      {
        "id": 7041,
        "image": "https://media.rawg.io/media/screenshots/adb/adbbb37113618ee107459cd5c344f2a8.jpg"
      },
      {
        "id": 7062,
        "image": "https://media.rawg.io/media/screenshots/616/61643dd96e936d29eb68cf53b2334e53.jpg"
      },
      {
        "id": 7070,
        "image": "https://media.rawg.io/media/screenshots/864/8644946ba14a03ab69f0766c42a03f80.jpg"
      },
      {
        "id": 7072,
        "image": "https://media.rawg.io/media/screenshots/f87/f87ad2b8f02b56e36c57b25cf8eac042.jpg"
      },
      {
        "id": 7081,
        "image": "https://media.rawg.io/media/screenshots/194/194e0962afa272604300001718a07793.jpg"
      },
      {
        "id": 7088,
        "image": "https://media.rawg.io/media/screenshots/297/29716964351ecd82545f1de3a50dfc4e.jpg"
      }
    ]
  },
  {
    "slug": "life-is-strange-episode-1-2",
    "name": "Life is Strange",
    "released": "2015-01-29",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    "rating": 4.11,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 1552,
        "percent": 43.76
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 1291,
        "percent": 36.4
      },
      {
        "id": 3,
        "title": "meh",
        "count": 474,
        "percent": 13.36
      },
      {
        "id": 1,
        "title": "skip",
        "count": 230,
        "percent": 6.48
      }
    ],
    "ratings_count": 3503,
    "reviews_text_count": 27,
    "added": 14419,
    "added_by_status": {
      "yet": 758,
      "owned": 9297,
      "beaten": 3267,
      "toplay": 339,
      "dropped": 614,
      "playing": 144
    },
    "metacritic": 83,
    "playtime": 6,
    "suggestions_count": 531,
    "updated": "2023-09-20T18:30:13",
    "user_game": null,
    "reviews_count": 3547,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2015-01-29",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 75485,
          "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
        },
        "released_at": "2015-01-29",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 16,
          "name": "PlayStation 3",
          "slug": "playstation3",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 3163,
          "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        },
        "released_at": "2015-01-29",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 5,
          "name": "macOS",
          "slug": "macos",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 102027,
          "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
        },
        "released_at": "2015-01-29",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 3,
          "name": "iOS",
          "slug": "ios",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 77103,
          "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
        },
        "released_at": "2015-01-29",
        "requirements_en": {
          "minimum": "iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 14,
          "name": "Xbox 360",
          "slug": "xbox360",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 2787,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        "released_at": "2015-01-29",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 21,
          "name": "Android",
          "slug": "android",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 52263,
          "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
        },
        "released_at": "2015-01-29",
        "requirements_en": {
          "minimum": "6.0 and up"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 18,
          "name": "PlayStation 4",
          "slug": "playstation4",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 6708,
          "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
        },
        "released_at": "2015-01-29",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 1,
          "name": "Xbox One",
          "slug": "xbox-one",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5544,
          "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
        },
        "released_at": "2015-01-29",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 4,
          "name": "iOS",
          "slug": "ios"
        }
      },
      {
        "platform": {
          "id": 8,
          "name": "Android",
          "slug": "android"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ],
    "genres": [
      {
        "id": 3,
        "name": "Adventure",
        "slug": "adventure",
        "games_count": 134116,
        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
      }
    ],
    "stores": [
      {
        "id": 451321,
        "store": {
          "id": 5,
          "name": "GOG",
          "slug": "gog",
          "domain": "gog.com",
          "games_count": 5484,
          "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
        }
      },
      {
        "id": 3702,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 35603,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 35602,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4770,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      },
      {
        "id": 217695,
        "store": {
          "id": 8,
          "name": "Google Play",
          "slug": "google-play",
          "domain": "play.google.com",
          "games_count": 17056,
          "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
        }
      },
      {
        "id": 245823,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1912,
          "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        }
      },
      {
        "id": 44714,
        "store": {
          "id": 4,
          "name": "App Store",
          "slug": "apple-appstore",
          "domain": "apps.apple.com",
          "games_count": 75329,
          "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 40836,
        "name": "Full controller support",
        "slug": "full-controller-support",
        "language": "eng",
        "games_count": 14997,
        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7571,
        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
      },
      {
        "id": 42,
        "name": "Great Soundtrack",
        "slug": "great-soundtrack",
        "language": "eng",
        "games_count": 3249,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 18867,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 149,
        "name": "Third Person",
        "slug": "third-person",
        "language": "eng",
        "games_count": 9837,
        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      },
      {
        "id": 189,
        "name": "Female Protagonist",
        "slug": "female-protagonist",
        "language": "eng",
        "games_count": 10931,
        "image_background": "https://media.rawg.io/media/games/7f6/7f6cd70ba2ad57053b4847c13569f2d8.jpg"
      },
      {
        "id": 41,
        "name": "Dark",
        "slug": "dark",
        "language": "eng",
        "games_count": 14413,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      },
      {
        "id": 141,
        "name": "Point & Click",
        "slug": "point-click",
        "language": "eng",
        "games_count": 11948,
        "image_background": "https://media.rawg.io/media/games/3ef/3eff92562640e452d3487c04ba6d7fae.jpg"
      },
      {
        "id": 111,
        "name": "Short",
        "slug": "short",
        "language": "eng",
        "games_count": 57513,
        "image_background": "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg"
      },
      {
        "id": 117,
        "name": "Mystery",
        "slug": "mystery",
        "language": "eng",
        "games_count": 12170,
        "image_background": "https://media.rawg.io/media/games/90c/90caf1fcb836cad70013452f6f239008.jpg"
      },
      {
        "id": 145,
        "name": "Choices Matter",
        "slug": "choices-matter",
        "language": "eng",
        "games_count": 3940,
        "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
      },
      {
        "id": 120,
        "name": "Memes",
        "slug": "memes",
        "language": "eng",
        "games_count": 1604,
        "image_background": "https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg"
      },
      {
        "id": 91,
        "name": "Walking Simulator",
        "slug": "walking-simulator",
        "language": "eng",
        "games_count": 6419,
        "image_background": "https://media.rawg.io/media/screenshots/848/848253347dc93c762bfd51c7e4989b8f.jpg"
      },
      {
        "id": 406,
        "name": "Story",
        "slug": "story",
        "language": "eng",
        "games_count": 11286,
        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
      },
      {
        "id": 218,
        "name": "Multiple Endings",
        "slug": "multiple-endings",
        "language": "eng",
        "games_count": 7405,
        "image_background": "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg"
      },
      {
        "id": 232,
        "name": "Episodic",
        "slug": "episodic",
        "language": "eng",
        "games_count": 435,
        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
      },
      {
        "id": 295,
        "name": "Soundtrack",
        "slug": "soundtrack",
        "language": "eng",
        "games_count": 2836,
        "image_background": "https://media.rawg.io/media/screenshots/18b/18b81812829bc49465e4a6d97af596c6_RdH7DXE.jpg"
      },
      {
        "id": 317,
        "name": "Time Travel",
        "slug": "time-travel",
        "language": "eng",
        "games_count": 1704,
        "image_background": "https://media.rawg.io/media/screenshots/59e/59e1eafe1c11e8bc5b727e0c69c0261f.jpg"
      },
      {
        "id": 302,
        "name": "Time Manipulation",
        "slug": "time-manipulation",
        "language": "eng",
        "games_count": 420,
        "image_background": "https://media.rawg.io/media/games/459/459ac8745027643ed7338516c0025cf7.jpg"
      },
      {
        "id": 992,
        "name": "student",
        "slug": "student",
        "language": "eng",
        "games_count": 1516,
        "image_background": "https://media.rawg.io/media/screenshots/fb2/fb210147a46c1d4ecba72f45115a8948.jpg"
      },
      {
        "id": 2682,
        "name": "strange",
        "slug": "strange",
        "language": "eng",
        "games_count": 360,
        "image_background": "https://media.rawg.io/media/screenshots/1d4/1d42ee97681050baedab12c082bb8b54.jpg"
      },
      {
        "id": 3197,
        "name": "photography",
        "slug": "photography",
        "language": "eng",
        "games_count": 203,
        "image_background": "https://media.rawg.io/media/screenshots/c22/c22e3dfc119300f50b7fd0748eb9b41c.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
      },
      {
        "id": 1826487,
        "image": "https://media.rawg.io/media/screenshots/edf/edfcbdf85f02f871263dabf1b4f0aa87.jpg"
      },
      {
        "id": 1826488,
        "image": "https://media.rawg.io/media/screenshots/4c6/4c6da2f36396d4ed51f82ba6159fa39b.jpg"
      },
      {
        "id": 1826489,
        "image": "https://media.rawg.io/media/screenshots/6aa/6aa56ef1485c8b287a913fa842883daa.jpg"
      },
      {
        "id": 1826490,
        "image": "https://media.rawg.io/media/screenshots/cb1/cb148b52fe857f5b0b83ae9c01f56d8e.jpg"
      },
      {
        "id": 1826491,
        "image": "https://media.rawg.io/media/screenshots/aea/aea38b33b90054f8fe4cc8bb05253b1d.jpg"
      },
      {
        "id": 1826492,
        "image": "https://media.rawg.io/media/screenshots/c1d/c1d6333b2da0f920e8de10c14d3c6093.jpg"
      }
    ]
  },
  {
    "slug": "half-life-2",
    "name": "Half-Life 2",
    "released": "2004-11-16",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
    "rating": 4.49,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 2376,
        "percent": 63.84
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 1016,
        "percent": 27.3
      },
      {
        "id": 3,
        "title": "meh",
        "count": 217,
        "percent": 5.83
      },
      {
        "id": 1,
        "title": "skip",
        "count": 113,
        "percent": 3.04
      }
    ],
    "ratings_count": 3699,
    "reviews_text_count": 17,
    "added": 13770,
    "added_by_status": {
      "yet": 629,
      "owned": 8666,
      "beaten": 3558,
      "toplay": 298,
      "dropped": 527,
      "playing": 92
    },
    "metacritic": 96,
    "playtime": 7,
    "suggestions_count": 551,
    "updated": "2023-09-20T18:32:38",
    "user_game": null,
    "reviews_count": 3722,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516631,
          "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
        },
        "released_at": "2004-11-16",
        "requirements_en": {
          "minimum": "Minimum:\r\n\r\nOS: Windows 7, Vista, XP\r\n\r\nProcessor: 1.7 Ghz\r\n\r\nMemory: 512 MB RAM\r\n\r\nGraphics: DirectX 8.1 level Graphics Card (requires support for SSE)\r\n\r\nStorage: 6500 MB available space"
        },
        "requirements_ru": {
          "minimum": "Pentium III/Athlon 1.2 ГГц,256 Мб памяти,3D-ускоритель с 64 Мб памяти,5 Гб на винчестере,доступ в Интернет",
          "recommended": "Pentium 4/Athlon XP 2.5 ГГц,512 Мб памяти,3D-ускоритель со 128 Мб памяти,5 Гб на винчестере,доступ в Интернет"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "macOS",
          "slug": "macos",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 102027,
          "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
        },
        "released_at": "2004-11-16",
        "requirements_en": {
          "minimum": "Minimum:\r\n\r\nOS: Leopard 10.5.8, Snow Leopard 10.6.3, or higher\r\n\r\nMemory: 1 GB RAM\r\n\r\nGraphics: Nvidia GeForce8 or higher, ATI X1600 or higher, Intel HD 3000 or higher"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 14,
          "name": "Xbox 360",
          "slug": "xbox360",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 2787,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        "released_at": "2004-11-16",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 75485,
          "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
        },
        "released_at": "2004-11-16",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 80,
          "name": "Xbox",
          "slug": "xbox-old",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 725,
          "image_background": "https://media.rawg.io/media/games/2ee/2eef5ed5e82c28d1299ecc2a0e60f2cb.jpg"
        },
        "released_at": "2004-11-16",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 21,
          "name": "Android",
          "slug": "android",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 52263,
          "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
        },
        "released_at": "2004-11-16",
        "requirements_en": {
          "minimum": "4.4 and up"
        },
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 8,
          "name": "Android",
          "slug": "android"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 59364,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      }
    ],
    "stores": [
      {
        "id": 14891,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 41441,
        "store": {
          "id": 8,
          "name": "Google Play",
          "slug": "google-play",
          "domain": "play.google.com",
          "games_count": 17056,
          "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 40847,
        "name": "Steam Achievements",
        "slug": "steam-achievements",
        "language": "eng",
        "games_count": 31891,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 7,
        "name": "Multiplayer",
        "slug": "multiplayer",
        "language": "eng",
        "games_count": 35582,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 40849,
        "name": "Steam Cloud",
        "slug": "steam-cloud",
        "language": "eng",
        "games_count": 14905,
        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7571,
        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
      },
      {
        "id": 42,
        "name": "Great Soundtrack",
        "slug": "great-soundtrack",
        "language": "eng",
        "games_count": 3249,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 18867,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 8,
        "name": "First-Person",
        "slug": "first-person",
        "language": "eng",
        "games_count": 29160,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 32,
        "name": "Sci-fi",
        "slug": "sci-fi",
        "language": "eng",
        "games_count": 17527,
        "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
      },
      {
        "id": 40845,
        "name": "Partial Controller Support",
        "slug": "partial-controller-support",
        "language": "eng",
        "games_count": 10164,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 16,
        "name": "Horror",
        "slug": "horror",
        "language": "eng",
        "games_count": 42302,
        "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 12321,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 193,
        "name": "Classic",
        "slug": "classic",
        "language": "eng",
        "games_count": 1729,
        "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
      },
      {
        "id": 63,
        "name": "Zombies",
        "slug": "zombies",
        "language": "eng",
        "games_count": 9775,
        "image_background": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg"
      },
      {
        "id": 62,
        "name": "Moddable",
        "slug": "moddable",
        "language": "eng",
        "games_count": 804,
        "image_background": "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg"
      },
      {
        "id": 40833,
        "name": "Captions available",
        "slug": "captions-available",
        "language": "eng",
        "games_count": 1251,
        "image_background": "https://media.rawg.io/media/games/963/9639183ff27251b0b686acaa6aac0297.jpg"
      },
      {
        "id": 114,
        "name": "Physics",
        "slug": "physics",
        "language": "eng",
        "games_count": 18068,
        "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
      },
      {
        "id": 172,
        "name": "Aliens",
        "slug": "aliens",
        "language": "eng",
        "games_count": 6352,
        "image_background": "https://media.rawg.io/media/games/f54/f54e9fb2f4aac37810ea1a69a3e4480a.jpg"
      },
      {
        "id": 119,
        "name": "Dystopian",
        "slug": "dystopian",
        "language": "eng",
        "games_count": 1867,
        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
      },
      {
        "id": 40839,
        "name": "Includes Source SDK",
        "slug": "includes-source-sdk",
        "language": "eng",
        "games_count": 61,
        "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
      },
      {
        "id": 319,
        "name": "Silent Protagonist",
        "slug": "silent-protagonist",
        "language": "eng",
        "games_count": 81,
        "image_background": "https://media.rawg.io/media/screenshots/e89/e89c7fd5e1f6f34a97621322970fb0c5.jpg"
      },
      {
        "id": 62349,
        "name": "vr mod",
        "slug": "vr-mod",
        "language": "eng",
        "games_count": 17,
        "image_background": "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
      },
      {
        "id": 115804,
        "image": "https://media.rawg.io/media/screenshots/8af/8af6188357426890cbc8c8a34d9e7b75.jpg"
      },
      {
        "id": 115805,
        "image": "https://media.rawg.io/media/screenshots/3b5/3b542c954ba5bd2f32da067c8122cd80.jpg"
      },
      {
        "id": 115806,
        "image": "https://media.rawg.io/media/screenshots/3d6/3d6066e45d259d2e83bf6767e6113d94.jpg"
      },
      {
        "id": 115807,
        "image": "https://media.rawg.io/media/screenshots/e49/e49327df2404df6c5dafa8eac7990852.jpg"
      },
      {
        "id": 115808,
        "image": "https://media.rawg.io/media/screenshots/5dd/5dd3e53131bbfe6278bd15b9abe261a0.jpg"
      },
      {
        "id": 115809,
        "image": "https://media.rawg.io/media/screenshots/e99/e995e154d4f9e2df0367adea528a72c5.jpg"
      }
    ]
  },
  {
    "slug": "bioshock",
    "name": "BioShock",
    "released": "2007-08-21",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
    "rating": 4.36,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 1691,
        "percent": 53.01
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 1163,
        "percent": 36.46
      },
      {
        "id": 3,
        "title": "meh",
        "count": 234,
        "percent": 7.34
      },
      {
        "id": 1,
        "title": "skip",
        "count": 102,
        "percent": 3.2
      }
    ],
    "ratings_count": 3149,
    "reviews_text_count": 25,
    "added": 13259,
    "added_by_status": {
      "yet": 605,
      "owned": 8489,
      "beaten": 3048,
      "toplay": 315,
      "dropped": 690,
      "playing": 112
    },
    "metacritic": 96,
    "playtime": 3,
    "suggestions_count": 643,
    "updated": "2023-09-18T13:46:51",
    "user_game": null,
    "reviews_count": 3190,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 16,
          "name": "PlayStation 3",
          "slug": "playstation3",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 3163,
          "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        },
        "released_at": "2007-08-21",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 5,
          "name": "macOS",
          "slug": "macos",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 102027,
          "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
        },
        "released_at": "2007-08-21",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2007-08-21",
        "requirements_en": {
          "minimum": "<h2 class=\"bb_tag\"><strong>Minimum: </strong></h2><ul class=\"bb_ul\"><li><strong>Operating System</strong>: Windows XP (with Service Pack 2) or Windows Vista<br></li><li><strong>CPU</strong>: Intel single-core Pentium 4 processor at 2.4GHz<br></li><li><strong>RAM</strong>: 1 GB<br></li><li><strong>Video Card</strong>: Direct X 9.0c compliant video card with 128MB RAM and Pixel Shader 3.0 (NVIDIA 6600 or better/ATI X1300 or better, excluding ATI X1550)<br></li><li><strong>Sound Card</strong>: 100% direct X 9.0c compatible sound card<br></li><li><strong>Hard Drive Space</strong>: 8GB<br></li><li>Game requires Internet connection for activation</li></ul>",
          "recommended": "<h2 class=\"bb_tag\"><strong>Recommended: </strong></h2><ul class=\"bb_ul\"><li><strong>CPU</strong>: Intel Core 2 Duo processor<br></li><li><strong>RAM</strong>: 2GB<br></li><li><strong>Video Card</strong>: DX 9 - Direct X 9.0c compliant video card with 512 MB RAM and Pixel Shader 3.0 (NVIDIA GeForce 7900 GT or better), DX 10 - NVIDIA GeForce 8600 or better<br></li><li><strong>Sound Card</strong>: SoundBlaster(r) X-Fi(tm) series (optimized foruse with Creative Labs EAX ADVANCED HD 4.0 or EAX ADVANCED HD 5.0 compatible sound cards)</li></ul>"
        },
        "requirements_ru": {
          "minimum": "Pentium 4/Athlon 64 2.5 ГГц,1 Гб памяти,3D-ускоритель со 128 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows XP SP2 или Vista,Интернет-соединение",
          "recommended": "Core 2 Duo/Athlon 64 X2 3 ГГц,2 Гб памяти,3D-ускоритель с 512 Мб памяти и SM 3.0, 7.5 Гб на винчестере, Windows Vista,Интернет-соединение"
        }
      },
      {
        "platform": {
          "id": 14,
          "name": "Xbox 360",
          "slug": "xbox360",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 2787,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        "released_at": "2007-08-21",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 59364,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      }
    ],
    "stores": [
      {
        "id": 4614,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 79531,
        "store": {
          "id": 4,
          "name": "App Store",
          "slug": "apple-appstore",
          "domain": "apps.apple.com",
          "games_count": 75329,
          "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
        }
      },
      {
        "id": 440407,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4770,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      },
      {
        "id": 20580,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 33844,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1912,
          "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 42,
        "name": "Great Soundtrack",
        "slug": "great-soundtrack",
        "language": "eng",
        "games_count": 3249,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 24,
        "name": "RPG",
        "slug": "rpg",
        "language": "eng",
        "games_count": 17938,
        "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
      },
      {
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 18867,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 8,
        "name": "First-Person",
        "slug": "first-person",
        "language": "eng",
        "games_count": 29160,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 32,
        "name": "Sci-fi",
        "slug": "sci-fi",
        "language": "eng",
        "games_count": 17527,
        "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
      },
      {
        "id": 40845,
        "name": "Partial Controller Support",
        "slug": "partial-controller-support",
        "language": "eng",
        "games_count": 10164,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 16,
        "name": "Horror",
        "slug": "horror",
        "language": "eng",
        "games_count": 42302,
        "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 12321,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 193,
        "name": "Classic",
        "slug": "classic",
        "language": "eng",
        "games_count": 1729,
        "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
      },
      {
        "id": 97,
        "name": "Action RPG",
        "slug": "action-rpg",
        "language": "eng",
        "games_count": 5934,
        "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
      },
      {
        "id": 41,
        "name": "Dark",
        "slug": "dark",
        "language": "eng",
        "games_count": 14413,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      },
      {
        "id": 119,
        "name": "Dystopian",
        "slug": "dystopian",
        "language": "eng",
        "games_count": 1867,
        "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
      },
      {
        "id": 154,
        "name": "Steampunk",
        "slug": "steampunk",
        "language": "eng",
        "games_count": 1134,
        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
      },
      {
        "id": 208,
        "name": "Alternate History",
        "slug": "alternate-history",
        "language": "eng",
        "games_count": 1519,
        "image_background": "https://media.rawg.io/media/screenshots/245/245579c536d2a06e69d391573d911679.jpg"
      },
      {
        "id": 287,
        "name": "Political",
        "slug": "political",
        "language": "eng",
        "games_count": 522,
        "image_background": "https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg"
      },
      {
        "id": 250,
        "name": "Underwater",
        "slug": "underwater",
        "language": "eng",
        "games_count": 1994,
        "image_background": "https://media.rawg.io/media/games/b60/b60318b011b69252e97c11bbd194006f.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 170993,
        "image": "https://media.rawg.io/media/screenshots/01f/01f62d7064838a5c3202acfc61503487.jpg"
      },
      {
        "id": 170994,
        "image": "https://media.rawg.io/media/screenshots/7f5/7f517e07e36e4af5a7c0b86a7d42853f.jpg"
      },
      {
        "id": 170995,
        "image": "https://media.rawg.io/media/screenshots/aca/aca089b963a42ec4cbf56b5e5334af8e.jpg"
      },
      {
        "id": 170996,
        "image": "https://media.rawg.io/media/screenshots/3aa/3aa6f71eba1d64e671bd45826ca96560.jpg"
      },
      {
        "id": 170997,
        "image": "https://media.rawg.io/media/screenshots/d8e/d8ed29c7c0b41e4013588847944ed446.jpg"
      },
      {
        "id": 170998,
        "image": "https://media.rawg.io/media/screenshots/146/146e418797aca19296f90d259207414c.jpg"
      }
    ]
  },
  {
    "slug": "destiny-2",
    "name": "Destiny 2",
    "released": "2017-09-06",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
    "rating": 3.54,
    "rating_top": 4,
    "ratings": [
      {
        "id": 4,
        "title": "recommended",
        "count": 1148,
        "percent": 44.83
      },
      {
        "id": 3,
        "title": "meh",
        "count": 822,
        "percent": 32.1
      },
      {
        "id": 5,
        "title": "exceptional",
        "count": 354,
        "percent": 13.82
      },
      {
        "id": 1,
        "title": "skip",
        "count": 237,
        "percent": 9.25
      }
    ],
    "ratings_count": 2535,
    "reviews_text_count": 19,
    "added": 12882,
    "added_by_status": {
      "yet": 409,
      "owned": 9695,
      "beaten": 762,
      "toplay": 162,
      "dropped": 1456,
      "playing": 398
    },
    "metacritic": 82,
    "playtime": 5,
    "suggestions_count": 1204,
    "updated": "2023-09-18T21:58:51",
    "user_game": null,
    "reviews_count": 2561,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 1,
          "name": "Xbox One",
          "slug": "xbox-one",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5544,
          "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
        },
        "released_at": "2017-09-06",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2017-09-06",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 18,
          "name": "PlayStation 4",
          "slug": "playstation4",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 6708,
          "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
        },
        "released_at": "2017-09-06",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 171,
          "name": "Web",
          "slug": "web",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 260091,
          "image_background": "https://media.rawg.io/media/screenshots/c20/c201f665fc1d461719833ec1320935d6.jpg"
        },
        "released_at": "2017-09-06",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 186,
          "name": "Xbox Series S/X",
          "slug": "xbox-series-x",
          "image": null,
          "year_end": null,
          "year_start": 2020,
          "games_count": 803,
          "image_background": "https://media.rawg.io/media/games/b34/b3419c2706f8f8dbe40d08e23642ad06.jpg"
        },
        "released_at": "2017-09-06",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 187,
          "name": "PlayStation 5",
          "slug": "playstation5",
          "image": null,
          "year_end": null,
          "year_start": 2020,
          "games_count": 934,
          "image_background": "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg"
        },
        "released_at": "2017-09-06",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 14,
          "name": "Web",
          "slug": "web"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 59364,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      },
      {
        "id": 3,
        "name": "Adventure",
        "slug": "adventure",
        "games_count": 134116,
        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
      },
      {
        "id": 59,
        "name": "Massively Multiplayer",
        "slug": "massively-multiplayer",
        "games_count": 3336,
        "image_background": "https://media.rawg.io/media/screenshots/848/848253347dc93c762bfd51c7e4989b8f.jpg"
      }
    ],
    "stores": [
      {
        "id": 837910,
        "store": {
          "id": 11,
          "name": "Epic Games",
          "slug": "epic-games",
          "domain": "epicgames.com",
          "games_count": 1266,
          "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
        }
      },
      {
        "id": 32,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 808,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4770,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      },
      {
        "id": 326831,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 7,
        "name": "Multiplayer",
        "slug": "multiplayer",
        "language": "eng",
        "games_count": 35582,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 40836,
        "name": "Full controller support",
        "slug": "full-controller-support",
        "language": "eng",
        "games_count": 14997,
        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 42,
        "name": "Great Soundtrack",
        "slug": "great-soundtrack",
        "language": "eng",
        "games_count": 3249,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 18,
        "name": "Co-op",
        "slug": "co-op",
        "language": "eng",
        "games_count": 10166,
        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
      },
      {
        "id": 36,
        "name": "Open World",
        "slug": "open-world",
        "language": "eng",
        "games_count": 6502,
        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
      },
      {
        "id": 411,
        "name": "cooperative",
        "slug": "cooperative",
        "language": "eng",
        "games_count": 4250,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 8,
        "name": "First-Person",
        "slug": "first-person",
        "language": "eng",
        "games_count": 29160,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 32,
        "name": "Sci-fi",
        "slug": "sci-fi",
        "language": "eng",
        "games_count": 17527,
        "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 12321,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 9,
        "name": "Online Co-Op",
        "slug": "online-co-op",
        "language": "eng",
        "games_count": 4643,
        "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
      },
      {
        "id": 6,
        "name": "Exploration",
        "slug": "exploration",
        "language": "eng",
        "games_count": 20072,
        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
      },
      {
        "id": 79,
        "name": "Free to Play",
        "slug": "free-to-play",
        "language": "eng",
        "games_count": 5673,
        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
      },
      {
        "id": 397,
        "name": "Online multiplayer",
        "slug": "online-multiplayer",
        "language": "eng",
        "games_count": 3805,
        "image_background": "https://media.rawg.io/media/games/1e5/1e5e33b88be978f451196a751424a72e.jpg"
      },
      {
        "id": 69,
        "name": "Action-Adventure",
        "slug": "action-adventure",
        "language": "eng",
        "games_count": 14056,
        "image_background": "https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg"
      },
      {
        "id": 25,
        "name": "Space",
        "slug": "space",
        "language": "eng",
        "games_count": 41996,
        "image_background": "https://media.rawg.io/media/games/0bc/0bcc108295a244b488d5c25f7d867220.jpg"
      },
      {
        "id": 157,
        "name": "PvP",
        "slug": "pvp",
        "language": "eng",
        "games_count": 7630,
        "image_background": "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
      },
      {
        "id": 167,
        "name": "Futuristic",
        "slug": "futuristic",
        "language": "eng",
        "games_count": 4558,
        "image_background": "https://media.rawg.io/media/games/569/56978b5a77f13aa2ec5d09ec81d01cad.jpg"
      },
      {
        "id": 172,
        "name": "Aliens",
        "slug": "aliens",
        "language": "eng",
        "games_count": 6352,
        "image_background": "https://media.rawg.io/media/games/f54/f54e9fb2f4aac37810ea1a69a3e4480a.jpg"
      },
      {
        "id": 1465,
        "name": "combat",
        "slug": "combat",
        "language": "eng",
        "games_count": 9968,
        "image_background": "https://media.rawg.io/media/games/848/8482235332f4518da363c3cb4e5cd075.jpg"
      },
      {
        "id": 406,
        "name": "Story",
        "slug": "story",
        "language": "eng",
        "games_count": 11286,
        "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
      },
      {
        "id": 478,
        "name": "3rd-Person Perspective",
        "slug": "3rd-person-perspective",
        "language": "eng",
        "games_count": 85,
        "image_background": "https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg"
      },
      {
        "id": 413,
        "name": "online",
        "slug": "online",
        "language": "eng",
        "games_count": 6536,
        "image_background": "https://media.rawg.io/media/games/1fa/1fa75f0895240b12fc65cc98ae9649fd.jpg"
      },
      {
        "id": 158,
        "name": "MMORPG",
        "slug": "mmorpg",
        "language": "eng",
        "games_count": 1301,
        "image_background": "https://media.rawg.io/media/games/cc7/cc77035eb972f179f5090ee2a0fabd99.jpg"
      },
      {
        "id": 98,
        "name": "Loot",
        "slug": "loot",
        "language": "eng",
        "games_count": 1998,
        "image_background": "https://media.rawg.io/media/games/dc0/dc0926d3f84ffbcc00968fe8a6f0aed3.jpg"
      },
      {
        "id": 171,
        "name": "PvE",
        "slug": "pve",
        "language": "eng",
        "games_count": 3485,
        "image_background": "https://media.rawg.io/media/screenshots/968/968df3dbb85d2d7aa96ace33a7b2c9af.jpg"
      },
      {
        "id": 2030,
        "name": "city",
        "slug": "city",
        "language": "eng",
        "games_count": 9184,
        "image_background": "https://media.rawg.io/media/games/415/41563ce6cb061a210160687a4e5d39f6.jpg"
      },
      {
        "id": 205,
        "name": "Lore-Rich",
        "slug": "lore-rich",
        "language": "eng",
        "games_count": 919,
        "image_background": "https://media.rawg.io/media/screenshots/525/525b5da62342fa726bfe2820e8f93c09.jpg"
      },
      {
        "id": 5816,
        "name": "console",
        "slug": "console",
        "language": "eng",
        "games_count": 1388,
        "image_background": "https://media.rawg.io/media/games/af2/af2b640fa820e8a8135948a4cd399539.jpg"
      },
      {
        "id": 744,
        "name": "friends",
        "slug": "friends",
        "language": "eng",
        "games_count": 15103,
        "image_background": "https://media.rawg.io/media/games/596/596215939911a0d97facfc224b1bca30.jpg"
      },
      {
        "id": 578,
        "name": "Masterpiece",
        "slug": "masterpiece",
        "language": "eng",
        "games_count": 284,
        "image_background": "https://media.rawg.io/media/games/d65/d654fb344f39538728ab0a4d94b22ae9.jpg"
      },
      {
        "id": 3109,
        "name": "weapons",
        "slug": "weapons",
        "language": "eng",
        "games_count": 2195,
        "image_background": "https://media.rawg.io/media/games/5dd/5dd4d2dd986d2826800bc37fff64aa4f.jpg"
      },
      {
        "id": 1484,
        "name": "skill",
        "slug": "skill",
        "language": "eng",
        "games_count": 3507,
        "image_background": "https://media.rawg.io/media/games/fc8/fc839beb76bd63c2a5b176c46bdb7681.jpg"
      },
      {
        "id": 3046,
        "name": "destroy",
        "slug": "destroy",
        "language": "eng",
        "games_count": 4602,
        "image_background": "https://media.rawg.io/media/screenshots/e44/e44c2e1695cb1e3d7ca73bb898d8c84a.jpg"
      },
      {
        "id": 1743,
        "name": "collect",
        "slug": "collect",
        "language": "eng",
        "games_count": 8061,
        "image_background": "https://media.rawg.io/media/screenshots/e94/e94aac28a7b797d4647d448cab957dc5.jpg"
      },
      {
        "id": 2184,
        "name": "hunt",
        "slug": "hunt",
        "language": "eng",
        "games_count": 2329,
        "image_background": "https://media.rawg.io/media/screenshots/f7e/f7e6e673b14b532b26fbfc68723fa0ec.jpg"
      },
      {
        "id": 754,
        "name": "gun",
        "slug": "gun",
        "language": "eng",
        "games_count": 3208,
        "image_background": "https://media.rawg.io/media/screenshots/ad9/ad94ac60de3ce1cd995df7e897a3c74a.jpg"
      },
      {
        "id": 1527,
        "name": "rain",
        "slug": "rain",
        "language": "eng",
        "games_count": 858,
        "image_background": "https://media.rawg.io/media/screenshots/c7b/c7b6140815bc7772cdb3fd40e89fa2ab.jpg"
      },
      {
        "id": 18426,
        "name": "enemy",
        "slug": "enemy",
        "language": "eng",
        "games_count": 2535,
        "image_background": "https://media.rawg.io/media/screenshots/433/433705d88137fcfa60d5b6c86855ae90.jpg"
      },
      {
        "id": 691,
        "name": "quick",
        "slug": "quick",
        "language": "eng",
        "games_count": 929,
        "image_background": "https://media.rawg.io/media/screenshots/297/2979df39126f664573ceb7278ab8c957_v8iodDE.jpg"
      },
      {
        "id": 2863,
        "name": "darkness",
        "slug": "darkness",
        "language": "eng",
        "games_count": 455,
        "image_background": "https://media.rawg.io/media/screenshots/23c/23cf3125c35bb1c920bd71dcdbc35803.jpg"
      },
      {
        "id": 6580,
        "name": "defender",
        "slug": "defender",
        "language": "eng",
        "games_count": 182,
        "image_background": "https://media.rawg.io/media/screenshots/a03/a03028737c2abdc12aafdc3c4e38fa75.jpg"
      }
    ],
    "esrb_rating": {
      "id": 3,
      "name": "Teen",
      "slug": "teen"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
      },
      {
        "id": 2629150,
        "image": "https://media.rawg.io/media/screenshots/818/818cc34134cb22fb18fda8edec7144a3.jpg"
      },
      {
        "id": 2629151,
        "image": "https://media.rawg.io/media/screenshots/003/003a559bc0b47a4e5f2928f18a8d9142.jpg"
      },
      {
        "id": 2629152,
        "image": "https://media.rawg.io/media/screenshots/75d/75d8fbb3254f5b06f1a3f9a026d9c122.jpg"
      },
      {
        "id": 2629153,
        "image": "https://media.rawg.io/media/screenshots/ca3/ca3bdc1a51fc90a96c860ab6db8a313c.jpg"
      },
      {
        "id": 2629154,
        "image": "https://media.rawg.io/media/screenshots/575/5751a70c954618a99ec574f32be7ad43.jpg"
      },
      {
        "id": 2629155,
        "image": "https://media.rawg.io/media/screenshots/2e7/2e7304d3b9e670f943d0bd1e4be090f0.jpg"
      }
    ]
  },
  {
    "slug": "limbo",
    "name": "Limbo",
    "released": "2010-07-21",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    "rating": 4.15,
    "rating_top": 4,
    "ratings": [
      {
        "id": 4,
        "title": "recommended",
        "count": 1667,
        "percent": 52.34
      },
      {
        "id": 5,
        "title": "exceptional",
        "count": 1099,
        "percent": 34.51
      },
      {
        "id": 3,
        "title": "meh",
        "count": 316,
        "percent": 9.92
      },
      {
        "id": 1,
        "title": "skip",
        "count": 103,
        "percent": 3.23
      }
    ],
    "ratings_count": 3149,
    "reviews_text_count": 24,
    "added": 12869,
    "added_by_status": {
      "yet": 544,
      "owned": 8181,
      "beaten": 3074,
      "toplay": 298,
      "dropped": 680,
      "playing": 92
    },
    "metacritic": 88,
    "playtime": 3,
    "suggestions_count": 187,
    "updated": "2023-09-19T21:34:08",
    "user_game": null,
    "reviews_count": 3185,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 75485,
          "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
        },
        "released_at": "2010-07-21",
        "requirements_en": {
          "minimum": "<ul class=\"bb_ul\"><li><strong>OS:</strong> SteamOS, Ubuntu 12.04 or later, or otherwise compatible Linux distribution.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM <br>\t\t\t\t\t</li></ul>"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 19,
          "name": "PS Vita",
          "slug": "ps-vita",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 1449,
          "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
        },
        "released_at": "2010-07-21",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 21,
          "name": "Android",
          "slug": "android",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 52263,
          "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
        },
        "released_at": "2010-07-21",
        "requirements_en": {
          "minimum": "4.4 and up"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 1,
          "name": "Xbox One",
          "slug": "xbox-one",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5544,
          "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
        },
        "released_at": "2010-07-21",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo Switch",
          "slug": "nintendo-switch",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5315,
          "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        },
        "released_at": "2010-07-21",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 3,
          "name": "iOS",
          "slug": "ios",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 77103,
          "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
        },
        "released_at": "2010-07-21",
        "requirements_en": {
          "minimum": "iPad 2 Wifi, iPad 2 3G, iPhone 4S, iPad Third Gen, iPad Third Gen 4G, iPhone 5, iPod Touch Fifth Gen, iPad Fourth Gen, iPad Fourth Gen 4G, iPad Mini, iPad Mini 4G, iPhone 5c, iPhone 5s, iPad Air, iPad Air Cellular, iPad Mini Retina, iPad Mini Retina Cellular, iPhone 6, iPhone 6 Plus, iPad Air 2, iPad Air 2 Cellular, iPad Mini 3, iPad Mini 3 Cellular, iPod Touch Sixth Gen, iPhone 6s, iPhone 6s Plus, iPad Mini 4, iPad Mini 4 Cellular, iPad Pro, iPad Pro Cellular, iPad Pro 9.7, iPad Pro 9.7 Cellular, iPhone SE, iPhone 7, iPhone 7 Plus, iPad 6 1 1, iPad 6 1 2, iPad 7 1, iPad 7 2, iPad 7 3, iPad 7 4, iPhone 8, iPhone 8 Plus, iPhone X, iPad 7 5, iPad 7 6, iPhone X S, iPhone X S Max, iPhone X R, iPad 8 1 2, iPad 8 3 4, iPad 8 5 6, iPad 8 7 8, iPad Mini 5, iPad Mini 5 Cellular, iPad Air 3, iPad Air 3 Cellular, iPod Touch Seventh Gen"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2010-07-21",
        "requirements_en": {
          "minimum": "<ul class=\"bb_ul\"><li><strong>OS:</strong> Windows XP, Vista, 7<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2 GHz<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 512MB<br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> 5 years or younger. Integrated graphics and very low budget cards may not work. Shader Model 3.0 required<br>\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> 9.0c\t<br>\t\t\t\t\t\t</li></ul>"
        },
        "requirements_ru": {
          "minimum": "Pentium 4/Athlon XP 2 ГГц,512 Мб памяти,3D-ускоритель с 256 Мб памяти,150 Мб на винчестере",
          "recommended": "Core 2 Duo/Atlon X2 2 ГГц,1 Гб памяти,3D-ускоритель с 512 Мб памяти,150 Мб на винчестере"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "macOS",
          "slug": "macos",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 102027,
          "image_background": "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg"
        },
        "released_at": "2010-07-21",
        "requirements_en": {
          "minimum": "Please be advised that LIMBO only runs Macs produced in 2009 and onwards.<br><ul class=\"bb_ul\"><li><strong>OS:</strong> OS X version Snow Leopard 10.6.3 or later.<br>\t\t\t\t\t\t</li><li><strong>Processor:</strong> Intel Mac<br>\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM <br>\t\t\t\t\t\t</li><li><strong>Hard Disk Space:</strong> 150MB\t<br>\t\t\t\t\t\t</li><li><strong>Video Card:</strong> OpenGL 2.0 compatible video card with 256 MB shared or dedicated RAM (ATI or NVIDIA) <br>\t\t\t\t\t</li></ul>"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 14,
          "name": "Xbox 360",
          "slug": "xbox360",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 2787,
          "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
        },
        "released_at": "2010-07-21",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 16,
          "name": "PlayStation 3",
          "slug": "playstation3",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 3163,
          "image_background": "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
        },
        "released_at": "2010-07-21",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 18,
          "name": "PlayStation 4",
          "slug": "playstation4",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 6708,
          "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
        },
        "released_at": "2010-07-21",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 4,
          "name": "iOS",
          "slug": "ios"
        }
      },
      {
        "platform": {
          "id": 8,
          "name": "Android",
          "slug": "android"
        }
      },
      {
        "platform": {
          "id": 5,
          "name": "Apple Macintosh",
          "slug": "mac"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
      }
    ],
    "genres": [
      {
        "id": 3,
        "name": "Adventure",
        "slug": "adventure",
        "games_count": 134116,
        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
      },
      {
        "id": 51,
        "name": "Indie",
        "slug": "indie",
        "games_count": 55530,
        "image_background": "https://media.rawg.io/media/games/d5a/d5a24f9f71315427fa6e966fdd98dfa6.jpg"
      },
      {
        "id": 7,
        "name": "Puzzle",
        "slug": "puzzle",
        "games_count": 97161,
        "image_background": "https://media.rawg.io/media/games/852/8522935d8ab27b610a254b52de0da212.jpg"
      },
      {
        "id": 83,
        "name": "Platformer",
        "slug": "platformer",
        "games_count": 100657,
        "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
      }
    ],
    "stores": [
      {
        "id": 1054,
        "store": {
          "id": 4,
          "name": "App Store",
          "slug": "apple-appstore",
          "domain": "apps.apple.com",
          "games_count": 75329,
          "image_background": "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg"
        }
      },
      {
        "id": 3679,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 7493,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4770,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      },
      {
        "id": 10311,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 26852,
        "store": {
          "id": 5,
          "name": "GOG",
          "slug": "gog",
          "domain": "gog.com",
          "games_count": 5484,
          "image_background": "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
        }
      },
      {
        "id": 33137,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1912,
          "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        }
      },
      {
        "id": 49142,
        "store": {
          "id": 6,
          "name": "Nintendo Store",
          "slug": "nintendo",
          "domain": "nintendo.com",
          "games_count": 8885,
          "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
        }
      },
      {
        "id": 40035,
        "store": {
          "id": 8,
          "name": "Google Play",
          "slug": "google-play",
          "domain": "play.google.com",
          "games_count": 17056,
          "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
        }
      },
      {
        "id": 335541,
        "store": {
          "id": 11,
          "name": "Epic Games",
          "slug": "epic-games",
          "domain": "epicgames.com",
          "games_count": 1266,
          "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 40836,
        "name": "Full controller support",
        "slug": "full-controller-support",
        "language": "eng",
        "games_count": 14997,
        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 45,
        "name": "2D",
        "slug": "2d",
        "language": "eng",
        "games_count": 189316,
        "image_background": "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg"
      },
      {
        "id": 16,
        "name": "Horror",
        "slug": "horror",
        "language": "eng",
        "games_count": 42302,
        "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
      },
      {
        "id": 49,
        "name": "Difficult",
        "slug": "difficult",
        "language": "eng",
        "games_count": 12612,
        "image_background": "https://media.rawg.io/media/games/04a/04a7e7e185fb51493bdcbe1693a8b3dc.jpg"
      },
      {
        "id": 115,
        "name": "Controller",
        "slug": "controller",
        "language": "eng",
        "games_count": 9880,
        "image_background": "https://media.rawg.io/media/games/fc3/fc30790a3b3c738d7a271b02c1e26dc2.jpg"
      },
      {
        "id": 41,
        "name": "Dark",
        "slug": "dark",
        "language": "eng",
        "games_count": 14413,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      },
      {
        "id": 336,
        "name": "controller support",
        "slug": "controller-support",
        "language": "eng",
        "games_count": 293,
        "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
      },
      {
        "id": 111,
        "name": "Short",
        "slug": "short",
        "language": "eng",
        "games_count": 57513,
        "image_background": "https://media.rawg.io/media/games/f99/f9979698c43fd84c3ab69280576dd3af.jpg"
      },
      {
        "id": 113,
        "name": "Side Scroller",
        "slug": "side-scroller",
        "language": "eng",
        "games_count": 9638,
        "image_background": "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg"
      },
      {
        "id": 114,
        "name": "Physics",
        "slug": "physics",
        "language": "eng",
        "games_count": 18068,
        "image_background": "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
      },
      {
        "id": 110,
        "name": "Cinematic",
        "slug": "cinematic",
        "language": "eng",
        "games_count": 1547,
        "image_background": "https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg"
      },
      {
        "id": 46,
        "name": "Surreal",
        "slug": "surreal",
        "language": "eng",
        "games_count": 4693,
        "image_background": "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg"
      },
      {
        "id": 83,
        "name": "Puzzle-Platformer",
        "slug": "puzzle-platformer",
        "language": "eng",
        "games_count": 9498,
        "image_background": "https://media.rawg.io/media/screenshots/ddb/ddbcf3f1330e146094b0ce211e33090a.jpg"
      },
      {
        "id": 112,
        "name": "Minimalist",
        "slug": "minimalist",
        "language": "eng",
        "games_count": 13997,
        "image_background": "https://media.rawg.io/media/screenshots/a62/a62fb9a34ba7d37b87679387beabc970.jpg"
      }
    ],
    "esrb_rating": {
      "id": 3,
      "name": "Teen",
      "slug": "teen"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
      },
      {
        "id": 30985,
        "image": "https://media.rawg.io/media/screenshots/512/512f4bc2092016478ddcb9e7e60aeec0.jpg"
      },
      {
        "id": 30986,
        "image": "https://media.rawg.io/media/screenshots/63d/63d30699e8fcab9c808e6714d9d3fd59.jpg"
      },
      {
        "id": 30987,
        "image": "https://media.rawg.io/media/screenshots/de0/de04bbc0fd9904071ef25bf23113c8c4.jpg"
      },
      {
        "id": 30988,
        "image": "https://media.rawg.io/media/screenshots/eed/eedbbca4ae2debf2d4e23e55d1f6cff7.jpg"
      },
      {
        "id": 30989,
        "image": "https://media.rawg.io/media/screenshots/59f/59f472b3ed7b414777a29213d70b4d17.jpg"
      },
      {
        "id": 30991,
        "image": "https://media.rawg.io/media/screenshots/e58/e58d31146e4a9e3786dabcbfc30126bc.jpg"
      }
    ]
  },
  {
    "slug": "god-of-war-2",
    "name": "God of War (2018)",
    "released": "2018-04-20",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
    "rating": 4.58,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 3302,
        "percent": 71.61
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 945,
        "percent": 20.49
      },
      {
        "id": 3,
        "title": "meh",
        "count": 221,
        "percent": 4.79
      },
      {
        "id": 1,
        "title": "skip",
        "count": 143,
        "percent": 3.1
      }
    ],
    "ratings_count": 4516,
    "reviews_text_count": 68,
    "added": 12815,
    "added_by_status": {
      "yet": 661,
      "owned": 6538,
      "beaten": 3776,
      "toplay": 1111,
      "dropped": 314,
      "playing": 415
    },
    "metacritic": 94,
    "playtime": 12,
    "suggestions_count": 586,
    "updated": "2023-09-20T19:39:48",
    "user_game": null,
    "reviews_count": 4611,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516631,
          "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
        },
        "released_at": "2018-04-20",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 70 GB available space<br></li><li><strong>Additional Notes:</strong> DirectX feature level 11_1 required</li></ul>",
          "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li>Requires a 64-bit processor and operating system<br></li><li><strong>OS:</strong> Windows 10 64-bit<br></li><li><strong>Processor:</strong> Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)<br></li><li><strong>DirectX:</strong> Version 11<br></li><li><strong>Storage:</strong> 70 GB available space<br></li><li><strong>Additional Notes:</strong> DirectX feature level 11_1 required</li></ul>"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 18,
          "name": "PlayStation 4",
          "slug": "playstation4",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 6708,
          "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
        },
        "released_at": "2018-04-20",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 3,
        "name": "Adventure",
        "slug": "adventure",
        "games_count": 134116,
        "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
      },
      {
        "id": 5,
        "name": "RPG",
        "slug": "role-playing-games-rpg",
        "games_count": 53259,
        "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
      }
    ],
    "stores": [
      {
        "id": 46917,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 677451,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 677452,
        "store": {
          "id": 11,
          "name": "Epic Games",
          "slug": "epic-games",
          "domain": "epicgames.com",
          "games_count": 1266,
          "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 40847,
        "name": "Steam Achievements",
        "slug": "steam-achievements",
        "language": "eng",
        "games_count": 31891,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 40836,
        "name": "Full controller support",
        "slug": "full-controller-support",
        "language": "eng",
        "games_count": 14997,
        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
      },
      {
        "id": 40849,
        "name": "Steam Cloud",
        "slug": "steam-cloud",
        "language": "eng",
        "games_count": 14905,
        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 24,
        "name": "RPG",
        "slug": "rpg",
        "language": "eng",
        "games_count": 17938,
        "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
      },
      {
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 18867,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 149,
        "name": "Third Person",
        "slug": "third-person",
        "language": "eng",
        "games_count": 9837,
        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      },
      {
        "id": 64,
        "name": "Fantasy",
        "slug": "fantasy",
        "language": "eng",
        "games_count": 25131,
        "image_background": "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg"
      },
      {
        "id": 26,
        "name": "Gore",
        "slug": "gore",
        "language": "eng",
        "games_count": 5161,
        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
      },
      {
        "id": 6,
        "name": "Exploration",
        "slug": "exploration",
        "language": "eng",
        "games_count": 20072,
        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
      },
      {
        "id": 34,
        "name": "Violent",
        "slug": "violent",
        "language": "eng",
        "games_count": 6035,
        "image_background": "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg"
      },
      {
        "id": 97,
        "name": "Action RPG",
        "slug": "action-rpg",
        "language": "eng",
        "games_count": 5934,
        "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
      },
      {
        "id": 69,
        "name": "Action-Adventure",
        "slug": "action-adventure",
        "language": "eng",
        "games_count": 14056,
        "image_background": "https://media.rawg.io/media/games/fd8/fd882c8267a44621a0de6f9cec77ae90.jpg"
      },
      {
        "id": 68,
        "name": "Hack and Slash",
        "slug": "hack-and-slash",
        "language": "eng",
        "games_count": 3579,
        "image_background": "https://media.rawg.io/media/games/8d4/8d46786ca86b1d95f3dc7e700e2dc4dd.jpg"
      },
      {
        "id": 37796,
        "name": "exclusive",
        "slug": "exclusive",
        "language": "eng",
        "games_count": 4505,
        "image_background": "https://media.rawg.io/media/games/806/8060a7663364ac23e15480728938d6f3.jpg"
      },
      {
        "id": 125,
        "name": "Crafting",
        "slug": "crafting",
        "language": "eng",
        "games_count": 3541,
        "image_background": "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
      },
      {
        "id": 1465,
        "name": "combat",
        "slug": "combat",
        "language": "eng",
        "games_count": 9968,
        "image_background": "https://media.rawg.io/media/games/848/8482235332f4518da363c3cb4e5cd075.jpg"
      },
      {
        "id": 571,
        "name": "3D",
        "slug": "3d",
        "language": "eng",
        "games_count": 78554,
        "image_background": "https://media.rawg.io/media/games/9ca/9ca31615beee447f3ae1dc9b3b736dce.jpg"
      },
      {
        "id": 37797,
        "name": "true exclusive",
        "slug": "true-exclusive",
        "language": "eng",
        "games_count": 3990,
        "image_background": "https://media.rawg.io/media/games/bfe/bfe7780b7d4342540be2e5273d49e54c.jpg"
      },
      {
        "id": 478,
        "name": "3rd-Person Perspective",
        "slug": "3rd-person-perspective",
        "language": "eng",
        "games_count": 85,
        "image_background": "https://media.rawg.io/media/games/883/883bc3050f9a4115d1968ece56bddfc2.jpg"
      },
      {
        "id": 270,
        "name": "Blood",
        "slug": "blood",
        "language": "eng",
        "games_count": 1961,
        "image_background": "https://media.rawg.io/media/screenshots/6cc/6ccddc2d20386efce7b6081ea68ac514.jpg"
      },
      {
        "id": 171,
        "name": "PvE",
        "slug": "pve",
        "language": "eng",
        "games_count": 3485,
        "image_background": "https://media.rawg.io/media/screenshots/968/968df3dbb85d2d7aa96ace33a7b2c9af.jpg"
      },
      {
        "id": 572,
        "name": "Emotional",
        "slug": "emotional",
        "language": "eng",
        "games_count": 2029,
        "image_background": "https://media.rawg.io/media/games/473/473bd9a5e9522629d6cb28b701fb836a.jpg"
      },
      {
        "id": 108,
        "name": "Mythology",
        "slug": "mythology",
        "language": "eng",
        "games_count": 1738,
        "image_background": "https://media.rawg.io/media/games/6e9/6e9136f09bb9daaaed5a0e6d508028b4.jpg"
      },
      {
        "id": 580,
        "name": "Souls-like",
        "slug": "souls-like",
        "language": "eng",
        "games_count": 1114,
        "image_background": "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg"
      },
      {
        "id": 43374,
        "name": "Remote Play on TV",
        "slug": "remote-play-on-tv",
        "language": "eng",
        "games_count": 340,
        "image_background": "https://media.rawg.io/media/games/d27/d275ae07be7d308bbd020fd719ce8910.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
      },
      {
        "id": 766263,
        "image": "https://media.rawg.io/media/screenshots/d68/d6868e5f7bce66e326bd48b11ba24b13.jpeg"
      },
      {
        "id": 766264,
        "image": "https://media.rawg.io/media/screenshots/928/928cdaf4ae204f202d177bbd65e911b3.jpeg"
      },
      {
        "id": 766265,
        "image": "https://media.rawg.io/media/screenshots/a54/a549a06ebe89c570cabb57308c4c42a5.jpeg"
      },
      {
        "id": 766266,
        "image": "https://media.rawg.io/media/screenshots/f02/f0279f8199da3e91134078e737e5fbcf.jpg"
      },
      {
        "id": 766267,
        "image": "https://media.rawg.io/media/screenshots/e87/e87c57660c7c37fe973c6dd6ebcc1ac6.jpeg"
      },
      {
        "id": 766268,
        "image": "https://media.rawg.io/media/screenshots/5b7/5b7280fe437c39d3ce501a867c46a998.jpeg"
      }
    ]
  },
  {
    "slug": "fallout-4",
    "name": "Fallout 4",
    "released": "2015-11-09",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    "rating": 3.8,
    "rating_top": 4,
    "ratings": [
      {
        "id": 4,
        "title": "recommended",
        "count": 1544,
        "percent": 48.46
      },
      {
        "id": 3,
        "title": "meh",
        "count": 825,
        "percent": 25.89
      },
      {
        "id": 5,
        "title": "exceptional",
        "count": 662,
        "percent": 20.78
      },
      {
        "id": 1,
        "title": "skip",
        "count": 155,
        "percent": 4.87
      }
    ],
    "ratings_count": 3159,
    "reviews_text_count": 18,
    "added": 12773,
    "added_by_status": {
      "yet": 610,
      "owned": 8037,
      "beaten": 2148,
      "toplay": 400,
      "dropped": 1274,
      "playing": 304
    },
    "metacritic": 84,
    "playtime": 40,
    "suggestions_count": 444,
    "updated": "2023-09-19T17:35:43",
    "user_game": null,
    "reviews_count": 3186,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 1,
          "name": "Xbox One",
          "slug": "xbox-one",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5544,
          "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
        },
        "released_at": "2015-11-09",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2015-11-09",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i5-2300 2.8 GHz/AMD Phenom II X4 945 3.0 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 550 Ti 2GB/AMD Radeon HD 7870 2GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>",
          "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows 7/8/10 (64-bit OS required)<br></li><li><strong>Processor:</strong> Intel Core i7 4790 3.6 GHz/AMD FX-9590 4.7 GHz or equivalent<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GTX 780 3GB/AMD Radeon R9 290X 4GB or equivalent<br></li><li><strong>Storage:</strong> 30 GB available space</li></ul>"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 18,
          "name": "PlayStation 4",
          "slug": "playstation4",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 6708,
          "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
        },
        "released_at": "2015-11-09",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 5,
        "name": "RPG",
        "slug": "role-playing-games-rpg",
        "games_count": 53260,
        "image_background": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg"
      }
    ],
    "stores": [
      {
        "id": 3252,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 9047,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4770,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      },
      {
        "id": 13248,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 40847,
        "name": "Steam Achievements",
        "slug": "steam-achievements",
        "language": "eng",
        "games_count": 31891,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 40836,
        "name": "Full controller support",
        "slug": "full-controller-support",
        "language": "eng",
        "games_count": 14997,
        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
      },
      {
        "id": 40849,
        "name": "Steam Cloud",
        "slug": "steam-cloud",
        "language": "eng",
        "games_count": 14905,
        "image_background": "https://media.rawg.io/media/games/951/951572a3dd1e42544bd39a5d5b42d234.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 42,
        "name": "Great Soundtrack",
        "slug": "great-soundtrack",
        "language": "eng",
        "games_count": 3249,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 24,
        "name": "RPG",
        "slug": "rpg",
        "language": "eng",
        "games_count": 17938,
        "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
      },
      {
        "id": 118,
        "name": "Story Rich",
        "slug": "story-rich",
        "language": "eng",
        "games_count": 18867,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 36,
        "name": "Open World",
        "slug": "open-world",
        "language": "eng",
        "games_count": 6502,
        "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
      },
      {
        "id": 8,
        "name": "First-Person",
        "slug": "first-person",
        "language": "eng",
        "games_count": 29160,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 149,
        "name": "Third Person",
        "slug": "third-person",
        "language": "eng",
        "games_count": 9837,
        "image_background": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      },
      {
        "id": 32,
        "name": "Sci-fi",
        "slug": "sci-fi",
        "language": "eng",
        "games_count": 17527,
        "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 12321,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 6,
        "name": "Exploration",
        "slug": "exploration",
        "language": "eng",
        "games_count": 20072,
        "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
      },
      {
        "id": 37,
        "name": "Sandbox",
        "slug": "sandbox",
        "language": "eng",
        "games_count": 6117,
        "image_background": "https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg"
      },
      {
        "id": 1,
        "name": "Survival",
        "slug": "survival",
        "language": "eng",
        "games_count": 7505,
        "image_background": "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg"
      },
      {
        "id": 97,
        "name": "Action RPG",
        "slug": "action-rpg",
        "language": "eng",
        "games_count": 5934,
        "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
      },
      {
        "id": 150,
        "name": "Third-Person Shooter",
        "slug": "third-person-shooter",
        "language": "eng",
        "games_count": 2984,
        "image_background": "https://media.rawg.io/media/games/9e5/9e5b274c7e3aa5e30beba31b834b0e7e.jpg"
      },
      {
        "id": 43,
        "name": "Post-apocalyptic",
        "slug": "post-apocalyptic",
        "language": "eng",
        "games_count": 3470,
        "image_background": "https://media.rawg.io/media/games/a91/a911f0a91991469e398fa70091507a5b.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg"
      },
      {
        "id": 27994,
        "image": "https://media.rawg.io/media/screenshots/f55/f5598897e0e418c67521f2213dceb459.jpg"
      },
      {
        "id": 27996,
        "image": "https://media.rawg.io/media/screenshots/37c/37ce90b25d84e531743917165115d24c.jpg"
      },
      {
        "id": 28000,
        "image": "https://media.rawg.io/media/screenshots/fd3/fd3a97519e6d1b73f429f6bfcfb3bcf5.jpg"
      },
      {
        "id": 28002,
        "image": "https://media.rawg.io/media/screenshots/069/0691b4c1b839e55531d8c3206cd83dd7.jpg"
      },
      {
        "id": 28004,
        "image": "https://media.rawg.io/media/screenshots/cc0/cc0b3e29b579faae8d8585fd9ecff142.jpg"
      },
      {
        "id": 28006,
        "image": "https://media.rawg.io/media/screenshots/99c/99c81029aeace339293753186246099f.jpg"
      }
    ]
  },
  {
    "slug": "doom",
    "name": "DOOM (2016)",
    "released": "2016-05-13",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
    "rating": 4.38,
    "rating_top": 5,
    "ratings": [
      {
        "id": 5,
        "title": "exceptional",
        "count": 1784,
        "percent": 52.12
      },
      {
        "id": 4,
        "title": "recommended",
        "count": 1302,
        "percent": 38.04
      },
      {
        "id": 3,
        "title": "meh",
        "count": 256,
        "percent": 7.48
      },
      {
        "id": 1,
        "title": "skip",
        "count": 81,
        "percent": 2.37
      }
    ],
    "ratings_count": 3384,
    "reviews_text_count": 29,
    "added": 12702,
    "added_by_status": {
      "yet": 550,
      "owned": 7941,
      "beaten": 2724,
      "toplay": 482,
      "dropped": 708,
      "playing": 297
    },
    "metacritic": 85,
    "playtime": 10,
    "suggestions_count": 656,
    "updated": "2023-09-19T13:44:30",
    "user_game": null,
    "reviews_count": 3423,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 1,
          "name": "Xbox One",
          "slug": "xbox-one",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5544,
          "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
        },
        "released_at": "2016-05-13",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2016-05-13",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows7,Windows8,Windows10<br></li><li><strong>Processor:</strong> Intel cpu i3<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GTX 650<br></li><li><strong>Storage:</strong> 2 GB available space<br></li><li><strong>Sound Card:</strong> Realtek</li></ul>",
          "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong> Windows7,Windows8,Windows10<br></li><li><strong>Processor:</strong> Intel cpu i5<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> GTX 770<br></li><li><strong>Storage:</strong> 4 GB available space<br></li><li><strong>Sound Card:</strong> Realtek</li></ul>"
        },
        "requirements_ru": {
          "minimum": "i386-33, 4 Мб",
          "recommended": "i486-40, 8 Мб"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo Switch",
          "slug": "nintendo-switch",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5315,
          "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
        },
        "released_at": "2016-05-13",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 18,
          "name": "PlayStation 4",
          "slug": "playstation4",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 6708,
          "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
        },
        "released_at": "2016-05-13",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 2,
          "name": "PlayStation",
          "slug": "playstation"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 7,
          "name": "Nintendo",
          "slug": "nintendo"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 59364,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      }
    ],
    "stores": [
      {
        "id": 355582,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 2571,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 38659,
        "store": {
          "id": 6,
          "name": "Nintendo Store",
          "slug": "nintendo",
          "domain": "nintendo.com",
          "games_count": 8885,
          "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
        }
      },
      {
        "id": 8223,
        "store": {
          "id": 2,
          "name": "Xbox Store",
          "slug": "xbox-store",
          "domain": "microsoft.com",
          "games_count": 4770,
          "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 7,
        "name": "Multiplayer",
        "slug": "multiplayer",
        "language": "eng",
        "games_count": 35582,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 13,
        "name": "Atmospheric",
        "slug": "atmospheric",
        "language": "eng",
        "games_count": 30209,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 42,
        "name": "Great Soundtrack",
        "slug": "great-soundtrack",
        "language": "eng",
        "games_count": 3249,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 18,
        "name": "Co-op",
        "slug": "co-op",
        "language": "eng",
        "games_count": 10166,
        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
      },
      {
        "id": 411,
        "name": "cooperative",
        "slug": "cooperative",
        "language": "eng",
        "games_count": 4250,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 8,
        "name": "First-Person",
        "slug": "first-person",
        "language": "eng",
        "games_count": 29160,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 32,
        "name": "Sci-fi",
        "slug": "sci-fi",
        "language": "eng",
        "games_count": 17527,
        "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
      },
      {
        "id": 40845,
        "name": "Partial Controller Support",
        "slug": "partial-controller-support",
        "language": "eng",
        "games_count": 10164,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 16,
        "name": "Horror",
        "slug": "horror",
        "language": "eng",
        "games_count": 42302,
        "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 12321,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 26,
        "name": "Gore",
        "slug": "gore",
        "language": "eng",
        "games_count": 5161,
        "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
      },
      {
        "id": 49,
        "name": "Difficult",
        "slug": "difficult",
        "language": "eng",
        "games_count": 12612,
        "image_background": "https://media.rawg.io/media/games/04a/04a7e7e185fb51493bdcbe1693a8b3dc.jpg"
      },
      {
        "id": 193,
        "name": "Classic",
        "slug": "classic",
        "language": "eng",
        "games_count": 1729,
        "image_background": "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
      },
      {
        "id": 63,
        "name": "Zombies",
        "slug": "zombies",
        "language": "eng",
        "games_count": 9775,
        "image_background": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg"
      },
      {
        "id": 120,
        "name": "Memes",
        "slug": "memes",
        "language": "eng",
        "games_count": 1604,
        "image_background": "https://media.rawg.io/media/games/151/151e79f397328419c64aabe93d9d5a31.jpg"
      },
      {
        "id": 131,
        "name": "Fast-Paced",
        "slug": "fast-paced",
        "language": "eng",
        "games_count": 10307,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 271,
        "name": "Remake",
        "slug": "remake",
        "language": "eng",
        "games_count": 1673,
        "image_background": "https://media.rawg.io/media/games/509/509c81a5da92a8d0645d9e160d155017.jpg"
      },
      {
        "id": 270,
        "name": "Blood",
        "slug": "blood",
        "language": "eng",
        "games_count": 1961,
        "image_background": "https://media.rawg.io/media/screenshots/6cc/6ccddc2d20386efce7b6081ea68ac514.jpg"
      },
      {
        "id": 187,
        "name": "Demons",
        "slug": "demons",
        "language": "eng",
        "games_count": 2089,
        "image_background": "https://media.rawg.io/media/games/0fa/0fa9e2b8397b332902d3b56c73888d52.jpg"
      }
    ],
    "esrb_rating": {
      "id": 4,
      "name": "Mature",
      "slug": "mature"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 22393,
        "image": "https://media.rawg.io/media/screenshots/353/353c1e834e7da7d6ceaa6beaff529c29.jpg"
      },
      {
        "id": 22394,
        "image": "https://media.rawg.io/media/screenshots/e50/e50f822107b8cc6af57aa21d76524149.jpg"
      },
      {
        "id": 22398,
        "image": "https://media.rawg.io/media/screenshots/ae9/ae9e9f7bfe19c63bd16151f81f81a7ed.jpg"
      },
      {
        "id": 22400,
        "image": "https://media.rawg.io/media/screenshots/14e/14e33eccb109558b0524761340ff2023.jpg"
      },
      {
        "id": 22402,
        "image": "https://media.rawg.io/media/screenshots/45d/45d16955ac9e90141b726684a07db02a.jpg"
      },
      {
        "id": 22404,
        "image": "https://media.rawg.io/media/screenshots/b77/b77629938389a41160d3b2a56eaed568.jpg"
      }
    ]
  },
  {
    "slug": "payday-2",
    "name": "PAYDAY 2",
    "released": "2013-08-13",
    "tba": false,
    "background_image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
    "rating": 3.51,
    "rating_top": 4,
    "ratings": [
      {
        "id": 4,
        "title": "recommended",
        "count": 1083,
        "percent": 51.84
      },
      {
        "id": 3,
        "title": "meh",
        "count": 574,
        "percent": 27.48
      },
      {
        "id": 1,
        "title": "skip",
        "count": 219,
        "percent": 10.48
      },
      {
        "id": 5,
        "title": "exceptional",
        "count": 213,
        "percent": 10.2
      }
    ],
    "ratings_count": 2072,
    "reviews_text_count": 14,
    "added": 12499,
    "added_by_status": {
      "yet": 492,
      "owned": 9705,
      "beaten": 756,
      "toplay": 97,
      "dropped": 1330,
      "playing": 119
    },
    "metacritic": 79,
    "playtime": 9,
    "suggestions_count": 410,
    "updated": "2023-09-20T18:31:01",
    "user_game": null,
    "reviews_count": 2089,
    "saturated_color": "0f0f0f",
    "dominant_color": "0f0f0f",
    "platforms": [
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 75485,
          "image_background": "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
        },
        "released_at": "2013-08-13",
        "requirements_en": null,
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 4,
          "name": "PC",
          "slug": "pc",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 516632,
          "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
        },
        "released_at": "2013-08-13",
        "requirements_en": {
          "minimum": "<strong>Minimum:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows 7<br>\t</li><li><strong>Processor:</strong>2 GHz Intel Dual Core Processor<br>\t</li><li><strong>Memory:</strong>4 GB RAM<br>\t</li><li><strong>Graphics:</strong>Nvidia &amp; AMD (512MB VRAM)<br>\t</li><li><strong>DirectX®:</strong>9.0c<br>\t</li><li><strong>Hard Drive:</strong>31 GB HD space <br>\t</li><li><strong>Sound:</strong>DirectX 9.0c compatible</li></ul>",
          "recommended": "<strong>Recommended:</strong><br><ul class=\"bb_ul\"><li><strong>OS:</strong>Windows 10<br>\t</li><li><strong>Processor:</strong>2.3 GHz Intel Quad Core Processor<br>\t</li><li><strong>Memory:</strong>8 GB RAM<br>\t</li><li><strong>Graphics:</strong>Nvidia &amp; AMD (1GB VRAM)<br>\t</li><li><strong>DirectX®:</strong>9.0c<br>\t</li><li><strong>Hard Drive:</strong>45 GB HD space<br>\t</li><li><strong>Sound:</strong>DirectX 9.0c compatible</li></ul>"
        },
        "requirements_ru": null
      },
      {
        "platform": {
          "id": 1,
          "name": "Xbox One",
          "slug": "xbox-one",
          "image": null,
          "year_end": null,
          "year_start": null,
          "games_count": 5544,
          "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
        },
        "released_at": "2013-08-13",
        "requirements_en": null,
        "requirements_ru": null
      }
    ],
    "parent_platforms": [
      {
        "platform": {
          "id": 1,
          "name": "PC",
          "slug": "pc"
        }
      },
      {
        "platform": {
          "id": 3,
          "name": "Xbox",
          "slug": "xbox"
        }
      },
      {
        "platform": {
          "id": 6,
          "name": "Linux",
          "slug": "linux"
        }
      }
    ],
    "genres": [
      {
        "id": 4,
        "name": "Action",
        "slug": "action",
        "games_count": 174394,
        "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
      },
      {
        "id": 2,
        "name": "Shooter",
        "slug": "shooter",
        "games_count": 59364,
        "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      }
    ],
    "stores": [
      {
        "id": 961005,
        "store": {
          "id": 11,
          "name": "Epic Games",
          "slug": "epic-games",
          "domain": "epicgames.com",
          "games_count": 1266,
          "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
        }
      },
      {
        "id": 4258,
        "store": {
          "id": 3,
          "name": "PlayStation Store",
          "slug": "playstation-store",
          "domain": "store.playstation.com",
          "games_count": 7839,
          "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
        }
      },
      {
        "id": 10780,
        "store": {
          "id": 1,
          "name": "Steam",
          "slug": "steam",
          "domain": "store.steampowered.com",
          "games_count": 79476,
          "image_background": "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
        }
      },
      {
        "id": 27939,
        "store": {
          "id": 6,
          "name": "Nintendo Store",
          "slug": "nintendo",
          "domain": "nintendo.com",
          "games_count": 8885,
          "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
        }
      },
      {
        "id": 34027,
        "store": {
          "id": 7,
          "name": "Xbox 360 Store",
          "slug": "xbox360",
          "domain": "marketplace.xbox.com",
          "games_count": 1912,
          "image_background": "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        }
      }
    ],
    "clip": null,
    "tags": [
      {
        "id": 31,
        "name": "Singleplayer",
        "slug": "singleplayer",
        "language": "eng",
        "games_count": 209087,
        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        "id": 40847,
        "name": "Steam Achievements",
        "slug": "steam-achievements",
        "language": "eng",
        "games_count": 31891,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 7,
        "name": "Multiplayer",
        "slug": "multiplayer",
        "language": "eng",
        "games_count": 35582,
        "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        "id": 40836,
        "name": "Full controller support",
        "slug": "full-controller-support",
        "language": "eng",
        "games_count": 14997,
        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
      },
      {
        "id": 7808,
        "name": "steam-trading-cards",
        "slug": "steam-trading-cards",
        "language": "eng",
        "games_count": 7571,
        "image_background": "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg"
      },
      {
        "id": 42,
        "name": "Great Soundtrack",
        "slug": "great-soundtrack",
        "language": "eng",
        "games_count": 3249,
        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
      },
      {
        "id": 18,
        "name": "Co-op",
        "slug": "co-op",
        "language": "eng",
        "games_count": 10166,
        "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
      },
      {
        "id": 411,
        "name": "cooperative",
        "slug": "cooperative",
        "language": "eng",
        "games_count": 4250,
        "image_background": "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
      },
      {
        "id": 8,
        "name": "First-Person",
        "slug": "first-person",
        "language": "eng",
        "games_count": 29160,
        "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      {
        "id": 30,
        "name": "FPS",
        "slug": "fps",
        "language": "eng",
        "games_count": 12321,
        "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
      },
      {
        "id": 9,
        "name": "Online Co-Op",
        "slug": "online-co-op",
        "language": "eng",
        "games_count": 4643,
        "image_background": "https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg"
      },
      {
        "id": 4,
        "name": "Funny",
        "slug": "funny",
        "language": "eng",
        "games_count": 22958,
        "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
      },
      {
        "id": 15,
        "name": "Stealth",
        "slug": "stealth",
        "language": "eng",
        "games_count": 5824,
        "image_background": "https://media.rawg.io/media/games/62c/62c7c8b28a27b83680b22fb9d33fc619.jpg"
      },
      {
        "id": 80,
        "name": "Tactical",
        "slug": "tactical",
        "language": "eng",
        "games_count": 4287,
        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
      },
      {
        "id": 40837,
        "name": "In-App Purchases",
        "slug": "in-app-purchases",
        "language": "eng",
        "games_count": 2193,
        "image_background": "https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg"
      },
      {
        "id": 11,
        "name": "Team-Based",
        "slug": "team-based",
        "language": "eng",
        "games_count": 1355,
        "image_background": "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg"
      },
      {
        "id": 144,
        "name": "Crime",
        "slug": "crime",
        "language": "eng",
        "games_count": 2607,
        "image_background": "https://media.rawg.io/media/games/9e5/9e5b274c7e3aa5e30beba31b834b0e7e.jpg"
      },
      {
        "id": 171,
        "name": "PvE",
        "slug": "pve",
        "language": "eng",
        "games_count": 3485,
        "image_background": "https://media.rawg.io/media/screenshots/968/968df3dbb85d2d7aa96ace33a7b2c9af.jpg"
      },
      {
        "id": 216,
        "name": "Heist",
        "slug": "heist",
        "language": "eng",
        "games_count": 464,
        "image_background": "https://media.rawg.io/media/games/a0e/a0ef08621301a1eab5e04fa5c96978fa.jpeg"
      },
      {
        "id": 274,
        "name": "Gun Customization",
        "slug": "gun-customization",
        "language": "eng",
        "games_count": 440,
        "image_background": "https://media.rawg.io/media/screenshots/8fe/8feeadd2e929029313824311b8c86cdb.jpg"
      }
    ],
    "esrb_rating": {
      "id": 5,
      "name": "Adults Only",
      "slug": "adults-only"
    },
    "short_screenshots": [
      {
        "id": -1,
        "image": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
      },
      {
        "id": 74194,
        "image": "https://media.rawg.io/media/screenshots/c38/c38f5aa479eebab20cedcdae370e6e18.jpg"
      },
      {
        "id": 74195,
        "image": "https://media.rawg.io/media/screenshots/442/442be5656b314e3289ecd1486b5282f1.jpg"
      },
      {
        "id": 74196,
        "image": "https://media.rawg.io/media/screenshots/c2c/c2ccfeaeda357f932d1899a91f298850.jpg"
      },
      {
        "id": 74197,
        "image": "https://media.rawg.io/media/screenshots/a18/a18da938def6ce6e5b571f1c20272ab0.jpg"
      },
      {
        "id": 74198,
        "image": "https://media.rawg.io/media/screenshots/a5d/a5da0d01195f01cdedec974d52892128.jpg"
      },
      {
        "id": 74199,
        "image": "https://media.rawg.io/media/screenshots/4ee/4ee5c3c8b850ab4ba8e04b9f5d5ab060.jpg"
      }
    ]
  }
]

pushAllGames(allGames);