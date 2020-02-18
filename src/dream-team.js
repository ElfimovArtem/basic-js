module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  } else {
    return members.reduce((acc, cV) => {
      if (typeof cV === 'string') {
        acc.push(/[a-zA-Z]/g.exec(cV)[0].toUpperCase());
      }
      return acc;
    }, []).sort().join('');
}};
