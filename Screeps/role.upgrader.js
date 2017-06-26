var roleUpgrader = { 

    /** @param {Creep} creep **/

    run: function (creep) {

        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carry.energyCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working) {
            if (creep.transfer(Game.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.room.controller);
            }
        }
        else {
            var source = creep.room.find(FIND_SOURCES);
            if (creep.harvest(source[1]) == ERR_NOT_IN_RANGE) {
                creep.moveto(source[1]);
            }
        }
        
    }

}
