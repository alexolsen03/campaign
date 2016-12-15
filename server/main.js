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
            ,"type": "humanoid"
            ,"alignment": "NE"
            ,"size": "Medium"
        };

        Pregens.insert(thugCR1);
    }
});