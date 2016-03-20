var dataset = {
        nodes: [
                { name: "deathstroke", depth: 1, type:'influence' }, // 0
                { name: "spiderman", depth: 0.5, type:'influence' }, // 1
                { name: "wolverine", depth: 1, type:'influence' }, // 2
                { name: "ambushbug", depth: 1.5, type:'influence' }, // 3
                { name: "shehulk", depth: 1.5, type:'influence'}, // 4
                { name: "animalman", depth: 2, type:'influence'}, // 5
                { name: "deadpoolv1", depth: 3, type:'deadpool'}, // 6
                { name: "deadpoolv2", depth: 4, type:'deadpool'}, // 7
                { name: "deadpoolv3", depth: 5, type:'deadpool'}, // 8
                { name: "deadpoolv4", depth: 6, type:'deadpool'}, // 9
                { name: "deadpoolv5", depth: 7, type:'deadpool'}, // 10
                { name: "invisible", depth: 8, type:'filler'} //11
        ],
        edges: [
                { source: 0, target: 6, name: 'deathstroke_deadpoolv1'},
                { source: 1, target: 6, name: 'spiderman_deadpoolv1'},
                { source: 2, target: 6, name: 'wolverine_deadpoolv1'},
                { source: 5, target: 7, name: 'animalman_deadpoolv2'},
                { source: 4, target: 8, name: 'shehulk_deadpoolv3'},
                { source: 3, target: 9, name: 'ambushbug_deadpoolv4'},
                { source: 6, target: 7, name: 'deadpoolv1_deadpoolv2'},
                { source: 7, target: 8, name: 'deadpoolv2_deadpoolv3'},
                { source: 8, target: 9, name: 'deadpoolv3_deadpoolv4'},
                { source: 9, target: 10, name: 'deadpoolv4_deadpoolv5'},
                { source: 10, target: 11, name: 'deadpoolv5_invisible'}                                               
        ]
};

var dictionary = {
    nodes: [
                { name: "deathstroke", display: "The New Teen Titans" }, //0
                { name: "spiderman", display: "The Amazing Spider-Man"}, //1
                { name: "wolverine", display: "Wolverine"}, //2
                { name: "ambushbug", display: "Ambush Bug"}, //3
                { name: "shehulk", display: "Sensational She-Hulk"}, //4
                { name: "animalman", display: "Animal Man"}, //6
                { name: "deadpoolv1", display: "Deadpool - Nicieza and Liefeld"},
                { name: "deadpoolv2", display: 'Deadpool - Joe Kelly and Ed McGuinness'}, //5
                { name: "deadpoolv3", display: 'Deadpool - Christopher Priest'}, //5
                { name: "deadpoolv4", display: "Deadpool - Daniel Way"}, //6
                { name: "deadpoolv5", display: "Deadpool - Now"}, //6
                { name: "invisible", display: ''}, //7                                
        ],
        edges: [               
        ]
}