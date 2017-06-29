var roleBuilder = {

    run: function (creep) {

        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working) {
            var constructionSite = creep.pos.findClostestByPath(FIND_CONSTRUCTION_SITES);
            if (creep.build((constructionSite) == ERR_NOT_IN_RANGE)) {
                creep.moveTo(constructionSite);
            }
        }
        else {
            var source = creep.pos.findClostestByPath(FIND_SOURCES);
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }
            }
        }
    }

module.exports = roleBuilder;