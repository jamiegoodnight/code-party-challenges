const db = require("../data/dbConfig");

module.exports = {
  addProject,
  getProject,
  getProjectActions
};

function getProjectActions(id) {
  return db("actions")
    .select({
      id: "actions.id",
      description: "actions.description",
      notes: "actions.notes",
      complete: "actions.complete"
    })
    .where({ project_id: id });
  // Make sure all the actions' "complete" values are either true or false, not 1 or 0.
}

function getProject(id) {
  return db("projects")
    .where({ id })
    .first();
  // Make sure the project's "complete" value is either true or false, not 1 or 0.
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return getProject(ids[0]);
    });
  // Make sure the project's "complete" value is either true or false, not 1 or 0.
}

function accomodateKnexsShortcomings(obj) {
  // Use this function to accomodate knex's shortcoming and change an object's "complete" to either true or false, not 1 or 0
}
