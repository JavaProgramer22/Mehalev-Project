import react from "react";
const Projects = [
  {
    id: 1,
    number: 112,
    title: "WTF",
    author: "Jeries zamel",
    supervisor: "Saheer Jacob",
    about:
      " dsafgsdfgsdfgsdf dsfgsdfg sdfgsdf gsdfg sdfg sdfg sdfg sdfg sdfg dsfg"
  },
  {
    id: 2,
    number: 113,
    title: "WTF2",
    author: "Jeries zamel2",
    supervisor: "Saheer Jacob2",
    about:
      " dsafgsdfgsdfgsdf dsfgsdfg sdfgsdf gsdfg sdfg sdfg sdfg sdfg sdfg dsfg"
  }
];
class Api {
  getProjects() {
    return Projects;
  }
  getProjectsByID(projectID){

  }
}
export default new Api();
