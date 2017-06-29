var CheckCreeps = {

    run: function(role) {
    var creeps = _.sum(Game.creeps, (c) => c.memory.role == role);
    
    if (creeps < 3) {
        if (Game.spawns["Spawn1"].energy > 200) {
            Game.spawns["Spawn1"].createCreep([MOVE,CARRY,WORK],undefined,{role: role,working: false})
            }
        }

    }

}

module.exports = CheckCreeps;