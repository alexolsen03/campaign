import { Meteor } from 'meteor/meteor';
import { Campaign } from '../imports/api/campaigns';
import { Pregens } from '../imports/api/pregens';

Meteor.startup(() => {
    // if(Campaign.find().count() === 0){
    //     const b = [{
    //         'name': 'alex',
    //         'description': 'is a nice guy'
    //     },{
    //         'name': 'jiyong',
    //         'description': 'is a nice girl'
    //     }];

    //     b.forEach((thing) => {
    //         Tester.insert(thing);
    //     })
    // }

    if(Pregens.find().count() === 0){
        console.log('adding pregen');
        let thugCR1 = {
            "name": "Thug"
            ,"stats": {
                "wisdom": 10
                ,"intelligence": 8
                ,"strength": 16
                ,"constitution": 13
                ,"dexterity": 15
                ,"charisma": 12
                ,"ac": {
                    "normal": 15
                    ,"touch": 12
                    ,"flatFooted": 13
                }
                ,"fortSave": "+3"
                ,"reflexSave": "+4"
                ,"willSave": "+0"
                ,"bab": "+1"
                ,"cmd": 16
                ,"cmb": "+4"
                ,"attacks": {
                    "melee": [
                        {
                            "attackType": "melee"
                            ,"name": "quarterstaff"
                            ,"bonus": "+4"
                            ,"damage": "1d6 + 3"
                            ,"effects": ""
                            ,"information": "sneak attack + 1d6"
                        }
                    ],
                    "ranged": [

                    ],
                    "touch": [

                    ]
                }
                ,"specialAttacks": []
                ,"spellLikeAbilities": []
                ,"prepared_spells": {}
                ,"feats": []
                ,"hp": 16
                ,"hitDice": "2; 1d10+1d8+6"
                ,"speed": 30
            }
            ,"cr": 1
            ,"initiative": "+2"
            ,"perception": "+5"
            ,"type": "humanoid"
            ,"alignment": "NE"
            ,"size": "Medium"
            ,"links": [
                {
                    "title": "Street Thug"
                    ,"url": "http://paizo.com/pathfinderRPG/prd/gameMasteryGuide/npcs/criminalsI.html#street-thug"
                    ,"id": 1
                }
            ]
        };

        let footSoliderCR1_3 = {
            "name": "Foot Soldier"
            ,"stats": {
                "wisdom": 10
                ,"intelligence": 8
                ,"strength": 15
                ,"constitution": 11
                ,"dexterity": 12
                ,"charisma": 9
                ,"ac": {
                    "normal": 17
                    ,"touch": 11
                    ,"flatFooted": 16
                }
                ,"fortSave": "+2"
                ,"reflexSave": "+1"
                ,"willSave": "+0"
                ,"bab": "+1"
                ,"cmd": 14
                ,"cmb": "+3"
                ,"attacks": {
                    "melee": [
                        {
                            "attackType": "melee"
                            ,"name": "longspear"
                            ,"bonus": "+3"
                            ,"damage": "1d8 + 3/x3"
                            ,"effects": "Reach 10ft"
                            ,"information": ""
                        },
                        {
                            "attackType": "melee"
                            ,"name": "greatsword"
                            ,"bonus": "+3"
                            ,"damage": "2d6 + 3/19-20"
                            ,"effects": ""
                            ,"information": ""
                        },
                        {
                            "attackType": "melee"
                            ,"name": "dagger"
                            ,"bonus": "+3"
                            ,"damage": "1d4 + 2/19-20"
                            ,"effects": ""
                            ,"information": ""
                        },
                    ],
                    "ranged": [
                        {
                            "attackType": "ranged"
                            ,"name": "javelin"
                            ,"bonus": "+2"
                            ,"damage": "1d6 + 2"
                            ,"effects": ""
                            ,"information": ""
                        }
                    ],
                    "touch": [

                    ]
                }
                ,"specialAttacks": []
                ,"spellLikeAbilities": []
                ,"prepared_spells": {}
                ,"feats": []
                ,"hp": 8
                ,"hitDice": "1d10+3"
                ,"speed": 20
            }
            ,"cr": "1/3"
            ,"initiative": "+1"
            ,"perception": "+0"
            ,"type": "humanoid"
            ,"alignment": "N"
            ,"size": "Medium"
            ,"links": [
                {
                    "title" : "Foot Soldier",
                    "url" : "http://paizo.com/pathfinderRPG/prd/gameMasteryGuide/npcs/military.html#foot-soldier",
                    "id" : 2
                },
            ]
        };

        let cavalryCR5 = {
            "name": "Cavalry"
            ,"stats": {
                "wisdom": 12
                ,"intelligence": 8
                ,"strength": 16
                ,"constitution": 13
                ,"dexterity": 16
                ,"charisma": 10
                ,"ac": {
                    "normal": 23
                    ,"touch": 12
                    ,"flatFooted": 21
                }
                ,"fortSave": "+6"
                ,"reflexSave": "+5"
                ,"willSave": "+3"
                ,"bab": "+6"
                ,"cmd": 22
                ,"cmb": "+9"
                ,"attacks": {
                    "melee": [
                        {
                            "attackType": "melee"
                            ,"name": "mwk lance"
                            ,"bonus": "+12/+7"
                            ,"damage": "1d8 + 6/x3"
                            ,"effects": ""
                            ,"information": ""
                        },
                        {
                            "attackType": "melee"
                            ,"name": "shortspear"
                            ,"bonus": "+10/+5"
                            ,"damage": "1d6 + 4"
                            ,"effects": ""
                            ,"information": ""
                        },
                        {
                            "attackType": "melee"
                            ,"name": "dagger"
                            ,"bonus": "+9/+4"
                            ,"damage": "1d4 + 3/19-20"
                            ,"effects": ""
                            ,"information": ""
                        },
                    ],
                    "ranged": [
                        {
                            "attackType": "ranged"
                            ,"name": "mwk composite shortbow"
                            ,"bonus": "+10/+5"
                            ,"damage": "1d6 + 3/x3"
                            ,"effects": ""
                            ,"information": ""
                        },
                        {
                            "attackType": "ranged"
                            ,"name": "shortspear"
                            ,"bonus": "+10/+5"
                            ,"damage": "1d6 + 3"
                            ,"effects": ""
                            ,"information": ""
                        }
                    ],
                    "touch": []
                }
                ,"specialAttacks": []
                ,"spellLikeAbilities": []
                ,"prepared_spells": {}
                ,"feats": []
                ,"hp": 42
                ,"hitDice": "6d10+9"
                ,"speed": 20
            }
            ,"cr": "5"
            ,"initiative": "+3"
            ,"perception": "+1"
            ,"type": "humanoid"
            ,"alignment": "N"
            ,"size": "Medium"
            ,"links": [
                {
                    "title" : "Cavalry",
                    "url" : "http://paizo.com/pathfinderRPG/prd/gameMasteryGuide/npcs/military.html#cavalry",
                    "id" : 3
                },
            ]
        };

        let generalCR10 = {
            "name": "General"
            ,"stats": {
                "wisdom": 10
                ,"intelligence": 14
                ,"strength": 18
                ,"constitution": 14
                ,"dexterity": 12
                ,"charisma": 10
                ,"ac": {
                    "normal": 23
                    ,"touch": 13
                    ,"flatFooted": 21
                }
                ,"fortSave": "+11"
                ,"reflexSave": "+6"
                ,"willSave": "+5"
                ,"bab": "+11"
                ,"cmd": 28
                ,"cmb": "+15"
                ,"attacks": {
                    "melee": [
                        {
                            "attackType": "melee"
                            ,"name": "glaive"
                            ,"bonus": "+19/+14"
                            ,"damage": "1d10 + 11"
                            ,"effects": ""
                            ,"information": ""
                        },
                        {
                            "attackType": "melee"
                            ,"name": "armor spikes"
                            ,"bonus": "+15/+10"
                            ,"damage": "1d6 + 4"
                            ,"effects": ""
                            ,"information": ""
                        },
                    ],
                    "ranged": [
                        {
                            "attackType": "ranged"
                            ,"name": "composite longbow"
                            ,"bonus": "+13/+8"
                            ,"damage": "1d8 + 5/x3"
                            ,"effects": ""
                            ,"information": ""
                        }
                    ],
                    "touch": []
                }
                ,"specialAttacks": []
                ,"spellLikeAbilities": []
                ,"prepared_spells": {}
                ,"feats": []
                ,"hp": 85
                ,"hitDice": "11d10+25"
                ,"speed": 30
            }
            ,"cr": "10"
            ,"initiative": "+1"
            ,"perception": "+10"
            ,"type": "humanoid"
            ,"alignment": "N"
            ,"size": "Medium"
            ,"links": [
                {
                    "title" : "General",
                    "url" : "http://paizo.com/pathfinderRPG/prd/gameMasteryGuide/npcs/military.html#general",
                    "id" : 4
                },
            ]
        };

        let squireCR1_3 = {
            "name": "Squire"
            ,"stats": {
                "wisdom": 8
                ,"intelligence": 9
                ,"strength": 13
                ,"constitution": 12
                ,"dexterity": 13
                ,"charisma": 10
                ,"ac": {
                    "normal": 23
                    ,"touch": 11
                    ,"flatFooted": 12
                }
                ,"fortSave": "+1"
                ,"reflexSave": "+1"
                ,"willSave": "+1"
                ,"bab": "+0"
                ,"cmd": 12
                ,"cmb": "+1"
                ,"attacks": {
                    "melee": [
                        {
                            "attackType": "melee"
                            ,"name": "lance"
                            ,"bonus": "+1"
                            ,"damage": "1d8 + 1/x3"
                            ,"effects": ""
                            ,"information": ""
                        },
                        {
                            "attackType": "melee"
                            ,"name": "light pick"
                            ,"bonus": "+1"
                            ,"damage": "1d4 + 1/x4"
                            ,"effects": ""
                            ,"information": ""
                        },
                    ],
                    "ranged": [
                        {
                            "attackType": "ranged"
                            ,"name": "shortbow"
                            ,"bonus": "+1"
                            ,"damage": "1d6/x3"
                            ,"effects": ""
                            ,"information": ""
                        }
                    ],
                    "touch": []
                }
                ,"specialAttacks": []
                ,"spellLikeAbilities": []
                ,"prepared_spells": {}
                ,"feats": []
                ,"hp": 5
                ,"hitDice": "1d8+1"
                ,"speed": 30
            }
            ,"cr": "1/3"
            ,"initiative": "+1"
            ,"perception": "-1"
            ,"type": "humanoid"
            ,"alignment": "N"
            ,"size": "Medium"
            ,"links": [
                {
                    "title" : "Squire",
                    "url" : "http://paizo.com/pathfinderRPG/prd/gameMasteryGuide/npcs/crusaders.html#squire",
                    "id" : 5
                },
            ]
        };

        let holyWarriorCR6 = {
            "name": "Holy Warrior"
            ,"stats": {
                "strength": 14
                ,"dexterity": 17
                ,"constitution": 12
                ,"intelligence": 10
                ,"wisdom": 8
                ,"charisma": 14
                ,"ac": {
                    "normal": 20
                    ,"touch": 13
                    ,"flatFooted": 17
                }
                ,"fortSave": "+8"
                ,"reflexSave": "+7"
                ,"willSave": "+6"
                ,"bab": "+7"
                ,"cmd": 22
                ,"cmb": "+9"
                ,"attacks": {
                    "melee": [
                        {
                            "attackType": "melee"
                            ,"name": "greatsword"
                            ,"bonus": "+10/+5"
                            ,"damage": "2d6+4/19-20"
                            ,"effects": ""
                            ,"information": ""
                        },
                        {
                            "attackType": "melee"
                            ,"name": "lance"
                            ,"bonus": "+9/+4"
                            ,"damage": "1d8+3/x3"
                            ,"effects": ""
                            ,"information": ""
                        },
                        {
                            "attackType": "melee"
                            ,"name": "dagger"
                            ,"bonus": "+9/+4"
                            ,"damage": "1d4+2/x3"
                            ,"effects": ""
                            ,"information": ""
                        },
                    ],
                    "ranged": [
                        {
                            "attackType": "ranged"
                            ,"name": "composite longbow"
                            ,"bonus": "+11/+11/+6"
                            ,"damage": "1d8+3/x3"
                            ,"effects": ""
                            ,"information": ""
                        },
                        {
                            "attackType": "ranged"
                            ,"name": "dagger"
                            ,"bonus": "+10"
                            ,"damage": "1d4+2/19-20"
                            ,"effects": ""
                            ,"information": ""
                        }
                    ],
                    "touch": []
                }
                ,"specialAttacks": [
                    {
                        "name": "smite evil"
                        ,"amt": "3/day"
                        ,"effect": "+2 attack and AC, +7 damage"
                    }
                ]
                ,"spellLikeAbilities": [
                    {
                        "name": "At Will"
                        ,"description": "detect evil"
                    }
                ]
                ,"prepared_spells": {
                    "1": ["bless weapon"],
                    "2": ["eagle's splendor"]
                }
                ,"feats": [
                    "Deadly Aim",
                    "Manyshot",
                    "Point Blank Shot",
                    "Power Attack",
                    "Rapid Shot"
                ]
                ,"hp": 51
                ,"hitDice": "7d10+13"
                ,"speed": 20
            }
            ,"cr": "6"
            ,"initiative": "+3"
            ,"perception": "+4"
            ,"type": "humanoid"
            ,"alignment": "LG"
            ,"size": "Medium"
            ,"links": [
                {
                    "title" : "Holy Warrior",
                    "url" : "http://paizo.com/pathfinderRPG/prd/gameMasteryGuide/npcs/crusaders.html#holy-warrior",
                    "id" : 6
                },
            ]
        };

        let saintCR11 = {
            "name": "Saint"
            ,"stats": {
                "strength": 15
                ,"dexterity": 8
                ,"constitution": 14
                ,"intelligence": 12
                ,"wisdom": 10
                ,"charisma": 20
                ,"ac": {
                    "normal": 22
                    ,"touch": 9
                    ,"flatFooted": 22
                }
                ,"fortSave": "+15"
                ,"reflexSave": "+8"
                ,"willSave": "+13"
                ,"bab": "+12"
                ,"cmd": 23
                ,"cmb": "+14"
                ,"attacks": {
                    "melee": [
                        {
                            "attackType": "melee"
                            ,"name": "evil outsider bane scimitar"
                            ,"bonus": "+15/+10"
                            ,"damage": "1d6+3/15-20"
                            ,"effects": ""
                            ,"information": ""
                        },
                        {
                            "attackType": "melee"
                            ,"name": "light hammer"
                            ,"bonus": "+14/+9"
                            ,"damage": "1d4+2"
                            ,"effects": ""
                            ,"information": ""
                        },
                    ],
                    "ranged": [
                        {
                            "attackType": "ranged"
                            ,"name": "light hammer"
                            ,"bonus": "+11"
                            ,"damage": "1d4+2"
                            ,"effects": ""
                            ,"information": ""
                        },
                    ],
                    "touch": []
                }
                ,"specialAttacks": [
                    {
                        "name": "smite evil"
                        ,"amt": "3/day"
                        ,"effect": "+5 attack and AC, +12 damage"
                    },
                    {
                        "name": "channel positive energy"
                        ,"amt": ""
                        ,"effect": "DC 21 / 6d6"
                    }
                ]
                ,"spellLikeAbilities": [
                    {
                        "name": "At Will"
                        ,"description": "detect evil"
                    }
                ]
                ,"prepared_spells": {
                    "1": ["bless weapon", "divine favor (2)", "lessor restoration"],
                    "2": ["bull's strength", "resist energy", "shield other"],
                    "3": ["dispel magic", "magic circle vs evil"]
                }
                ,"feats": [
                    "Alignment Chanel",
                    "Craft Magic Arms and Armor",
                    "Craft Wondrous Items",
                    "Extra Channel",
                    "Improved Critical (scimitar)",
                    "Magical Aptitude",
                    "Power Attack"
                ]
                ,"hp": 92
                ,"hitDice": "12d10+26"
                ,"speed": 20
            }
            ,"cr": "11"
            ,"initiative": "-1"
            ,"perception": "+6"
            ,"type": "humanoid"
            ,"alignment": "LG"
            ,"size": "Medium"
            ,"links": [
                {
                    "title" : "Saint",
                    "url" : "http://paizo.com/pathfinderRPG/prd/gameMasteryGuide/npcs/crusaders.html#saint",
                    "id" : 7
                },
            ]
        };

        let villageIdiotCR1_3 = {
            "name": "Village Idiot"
            ,"stats": {
                "strength": 12
                ,"dexterity": 11
                ,"constitution": 15
                ,"intelligence": 4
                ,"wisdom": 9
                ,"charisma": 10
                ,"ac": {
                    "normal": 10
                    ,"touch": 10
                    ,"flatFooted": 10
                }
                ,"fortSave": "+2"
                ,"reflexSave": "+0"
                ,"willSave": "-1"
                ,"bab": "+0"
                ,"cmd": 11
                ,"cmb": "+1"
                ,"attacks": {
                    "melee": [
                        {
                            "attackType": "melee"
                            ,"name": "improvised club"
                            ,"bonus": "+1"
                            ,"damage": "1d4+1"
                            ,"effects": ""
                            ,"information": ""
                        },
                    ],
                    "ranged": [
                        {
                            "attackType": "ranged"
                            ,"name": "sling"
                            ,"bonus": "-1"
                            ,"damage": "1d3+1"
                            ,"effects": ""
                            ,"information": ""
                        },
                    ],
                    "touch": []
                }
                ,"specialAttacks": []
                ,"spellLikeAbilities": []
                ,"prepared_spells": {}
                ,"feats": [
                    "Catch Off-Guard",
                    "Endurance"
                ]
                ,"hp": 6
                ,"hitDice": "1d6+3"
                ,"speed": 30
            }
            ,"cr": "1/3"
            ,"initiative": "+0"
            ,"perception": "+3"
            ,"type": "humanoid"
            ,"alignment": "N"
            ,"size": "Medium"
            ,"links": [
                {
                    "title" : "Village Idiot",
                    "url" : "http://paizo.com/pathfinderRPG/prd/gameMasteryGuide/npcs/villagers.html#village-idiot",
                    "id" : 8
                },
            ]
        }

        Pregens.insert(thugCR1);
        Pregens.insert(footSoliderCR1_3);
        Pregens.insert(cavalryCR5);
        Pregens.insert(generalCR10);
        Pregens.insert(squireCR1_3);
        Pregens.insert(holyWarriorCR6);
        Pregens.insert(villageIdiotCR1_3);
    }
});