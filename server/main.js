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
            "name": "Thug CR1"
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
                ,"attacks": [
                    {
                        "attackType": "melee"
                        ,"name": "quarterstaff"
                        ,"bonus": "+4"
                        ,"damage": "1d6 + 3"
                        ,"effects": ""
                        ,"information": "sneak attack + 1d6"
                    }
                ]
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
            "name": "Foot Soldier CR1/3"
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
                ,"attacks": [
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
                    {
                        "attackType": "ranged"
                        ,"name": "javelin"
                        ,"bonus": "+2"
                        ,"damage": "1d6 + 2"
                        ,"effects": ""
                        ,"information": ""
                    }
                ]
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
            "name": "Cavalry CR5"
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
                ,"attacks": [
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
                ]
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
            "name": "General CR 10"
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
                ,"attacks": [
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
                    {
                        "attackType": "ranged"
                        ,"name": "composite longbow"
                        ,"bonus": "+13/+8"
                        ,"damage": "1d8 + 5/x3"
                        ,"effects": ""
                        ,"information": ""
                    }
                ]
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

        Pregens.insert(thugCR1);
        Pregens.insert(footSoliderCR1_3);
        Pregens.insert(cavalryCR5);
        Pregens.insert(generalCR10);
    }
});