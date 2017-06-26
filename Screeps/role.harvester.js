var roleHarvester = {

    /** @param {Creep} creep **/
    run: function (creep) {

        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if(creep.memory.working == false && creep.carry.energy == creep.carry.carryCapacity)
        {
            creep.memory.working = true;
        }

        //Laufen zum Spawn
        if (creep.memory.working) {
            if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns.Spawn1);
            }
        }
        else {
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveto(source);
            }
        }
    }
};

module.exports = roleHarvester;