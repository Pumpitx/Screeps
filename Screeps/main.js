//Import der Module
var roleHarvester = require("role.harvester");
var roleUpgrader = require("role.upgrader");
var roleBuilder = require("role.builder");
var CheckCreeps = require("SpawnNewCreeps");
//Endlosschleife ( Ausfuehrung je Tick )
module.exports.loop = function () {

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
         if (creep.memory.role == 'harvester') {
             roleHarvester.run(creep);
         }
         if (creep.memory.role == 'upgrader') {
             roleUpgrader.run(creep);
         }
         if (creep.memory.role == "builder") {
             roleBuilder.run(creep);
         }
    }

    CheckCreeps.run("harvester");
    CheckCreeps.run("upgrader");
    CheckCreeps.run("builder");
}