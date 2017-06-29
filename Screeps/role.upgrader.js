var roleUpgrader = { 

    /** @param {Creep} creep **/

    run: function (creep) {

        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working) {
            if (creep.upgradeController(creep.room.controller,RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else {
            var source = creep.room.find(FIND_SOURCES);
            if (creep.harvest(source[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source[0], {visualizePathStyle: {stroke: "#FFFFFF"}});
            }
        }
        
    }

}

module.exports = roleUpgrader;
