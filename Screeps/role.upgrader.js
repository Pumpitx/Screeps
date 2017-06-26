var roleUpgrader = { 

    /** @param {Creep} creep **/

    run: function (creep) {

        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carry.energyCapacity) {
            creep.memory.working = true;
        }

        if 
        
    }

}
