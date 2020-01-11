import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAd,
  faAtom,
  faClock,
  faCalendarday
} from "@fortawesome/free-solid-svg-icons";

import InputErrors from "./InputErrors";
// import { toast } from "react-toastify";
// import SkillColor from "./SkillColor";
// import Api from "./Api";
class AddProject extends React.Component {
  constructor() {
    super();
    this.state = {
      projectname: {
        name: "projectname",
        value: "",
        errors: [],
        validations: { required: true, minLength: 2 }
      },
      synopsis: {
        value: "",
        name: "synopsis",
        errors: [],
        validations: { required: true }
      },
      description: {
        value: "",
        name: "description",
        errors: [],
        validations: { required: true }
      },
      date: {
        value: "",
        name: "date",
        errors: [],
        validations: { required: true }
      },
      skillType: {
        value: "0",
        name: "skillType",
        errors: [],
        validations: { required: true }
      },
      level: {
        value: "",
        errors: [],
        name: "level",
        validations: { required: true }
      },
      skill: {
        value: "",
        errors: [],
        name: "skill",
        validations: { required: true }
      }, //chose skill
      skills: { type: "", skills: [] },
      requiredSkills: []
    };

    this.skills = {};

    // this.selectSkillType = this.selectSkillType.bind(this);
    // this.inputChange = this.inputChange.bind(this);
    // this.submit = this.submit.bind(this);
    // this.addskill = this.addskill.bind(this);
    // this.removeSkill = this.removeSkill.bind(this);
    // this.selectSkillLevel = this.selectSkillLevel.bind(this);
  }

  //   async componentDidMount() {
  //     const skills = await Api.getSkills();
  //     this.skills = {
  //       technicals: skills.technicalSkills.map(skill => ({
  //         id: skill.skillId,
  //         name: skill.skillName
  //       })),
  //       product: skills.productSkills.map(skill => ({
  //         id: skill.skillId,
  //         name: skill.skillName
  //       }))
  //     };
  //   }

  //   addskill(e) {
  //     e.preventDefault();

  // if(this.state.requiredSkills.length===0){
  //   return;
  // }

  //     for (var tmp of this.state.requiredSkills) {
  //       if (this.state.skill.value == tmp.skillr.id) {
  //         return;
  //       }
  //     }

  //     let obj = {
  //       skillr: this.state.skills.skills.find(
  //         skill => skill.id == this.state.skill.value
  //       ),
  //       level: this.state.level.value,
  //       type: this.state.skills.type
  //     };

  //     this.setState({
  //       requiredSkills: [...this.state.requiredSkills, obj]
  //     });
  //   }

  //   removeSkill(skillId) {
  //     this.setState({
  //       requiredSkills: this.state.requiredSkills.filter(
  //         skill => skill.skillr.id != skillId
  //       )
  //     });
  //   }

  //   selectSkillType(event) {
  //     const skillType = event.target.value;
  //     let skills = { type: "", skills: [] };
  //     if (skillType == 1) {
  //       skills = { type: "t", skills: this.skills.technicals };
  //     } else if (skillType == 2) {
  //       skills = { type: "p", skills: this.skills.product };
  //     }
  //     this.setState({ skills });
  //   }

  //   selectSkillLevel(event) {
  //     const skillLevel = event.target.value;
  //     this.setState({ level: { ...this.state.level, value: skillLevel } });
  //   }

  //   inputChange({ target: { name, value } }) {
  //     const { validations } = this.state[name];
  //     const errors = [];

  //     if (!validations) return;

  //     if (validations.required) {
  //       if (!value) {
  //         errors.push(`${name} is required`);
  //       }
  //     }

  // if (validations.minLength) {
  //   if (value.length < validations.minLength) {
  //     errors.push(
  //       `${name} should be at least ${validations.minLength} characters`
  //     );
  //   }
  // }
  //     this.setState({
  //       [name]: {
  //         ...this.state[name],
  //         value: value,
  //         errors
  //       }
  //     });
  //   }

  //   async submit(e) {
  //     e.preventDefault();

  //     this.inputChange({
  //       target: {
  //         name: this.state.projectname.name,
  //         value: this.state.projectname.value
  //       }
  //     });
  //     this.inputChange({
  //       target: { name: this.state.date.name, value: this.state.date.value }
  //     });
  //     this.inputChange({
  //       target: {
  //         name: this.state.description.name,
  //         value: this.state.description.value
  //       }
  //     });
  //     this.inputChange({
  //       target: { name: this.state.skill.name, value: this.state.skill.value }
  //     });
  //     this.inputChange({
  //       target: { name: this.state.level.name, value: this.state.level.value }
  //     });
  // if(this.state.requiredSkills.length===0){
  //   return;
  // }
  //     if (!this.state.projectname.value) {
  // toast.error("No Project Name Provided ");
  //       return;
  //     }

  //     if (!this.state.date.value) {
  // toast.error("Choose Start Date ");
  //       return;
  //     }

  //     if (!this.state.description.value) {
  // toast.error("No Description Provided ");
  //       return;
  //     }

  //     if (this.state.requiredSkills.length === 0) {
  // toast.error("No Skills Selected");
  //       return;
  //     }

  //     if (!this.state.skill.value) {
  // toast.error("Choose Skill");
  //       return;
  //     }

  //     if (!this.state.level.value) {
  // toast.error("Choose Skill Level");
  //       return;
  //     }
  //     let index = 0;
  //     const values = {
  //       name: this.state.projectname.value,
  //       description: this.state.description.value,
  //       startDate: this.state.date.value,
  //       technicalSkill: this.state.requiredSkills
  //         .filter(skill => skill.type == "t")
  //         .map(skill => ({
  //           id: skill.skillr.id,
  //           name: skill.skillr.name,
  //           level: skill.level
  //         })),
  //       productSkill: this.state.requiredSkills
  //         .filter(skill => skill.type == "p")
  //         .map(skill => ({
  //           id: skill.skillr.id,
  //           name: skill.skillr.name,
  //           level: skill.level
  //         }))
  //     };
  //     try {
  //       const projectResponse = await Api.addNewProject(values);
  //       if (projectResponse.status === 200) {
  //         toast.success("Project Added Successfully");
  //       }
  //     } catch (error) {
  //       if (error.response.data.status == "BAD_REQUEST") {
  //         toast.error("Project Name Already Exists,Name Should Be Unique");
  //       }
  //     }
  //   }

  render() {
    return (
      <>
        <div
          className="row justify-content-center"
          style={{ marginBottom: "100px" }}
        >
          <div className="col-10 col-md-10 col-sm-10 col-lg-10">
            <div className="card  my-1 p-2 shadow m-12 mt-4 mb-4" role="alert">
              <h4 className="alert-heading text-center ">Add New Project</h4>
              <hr></hr>
              <form onSubmit={this.submit}>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="projectName">
                      <h6>Project Name</h6>
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faAtom}></FontAwesomeIcon>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Project name"
                        aria-label="Projectname"
                        aria-describedby="basic-addon1"
                        id="ProjectnameID"
                        name="projectname"
                        defaultValue={this.state.projectname.value}
                        onBlur={this.inputChange}
                      ></input>
                    </div>
                    <InputErrors errors={this.state.projectname.errors} />
                  </div>
                  <div className="col-md-6 ">
                    <label htmlFor="StartDate">
                      <h6>Start Date</h6>
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                        </span>
                      </div>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="/ / "
                        aria-label="date"
                        aria-describedby="basic-addon1"
                        id="dateID"
                        name="date"
                        defaultValue={this.state.date.value}
                        onBlur={this.inputChange}
                      ></input>
                    </div>
                    <InputErrors errors={this.state.date.errors} />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12 ">
                    <label htmlFor="projectSynopsis">
                      <h6>Synopsis</h6>
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faAd}></FontAwesomeIcon>
                        </span>
                      </div>
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Synopsis"
                        aria-label="Synopsis"
                        aria-describedby="basic-addon1"
                        id="projectSynopsisID"
                        name="Synopsis"
                        // defaultValue={this.state.Synopsis.value}
                        onBlur={this.inputChange}
                        rows="2"
                        style={{}}
                      ></textarea>
                    </div>
                    <InputErrors errors={this.state.description.errors} />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12 ">
                    <label htmlFor="projectDescription">
                      <h6>Description</h6>
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faAd}></FontAwesomeIcon>
                        </span>
                      </div>
                      <textarea
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        aria-label="Description"
                        aria-describedby="basic-addon1"
                        id="projectDescriptionID"
                        name="description"
                        defaultValue={this.state.description.value}
                        onBlur={this.inputChange}
                        rows="4"
                        style={{}}
                      ></textarea>
                    </div>
                    <InputErrors errors={this.state.description.errors} />
                  </div>
                </div>

                <h6 className="mt-4 mb-0 ">Users For Project</h6>
                <hr></hr>
                <div className="row">
                  <div className="col">
                    <div className="form-group ">
                      <label htmlFor="superVisor">
                        <h6>SuperVisor</h6>
                      </label>
                      <input
                        type="text"
                        class="form-control mb-1"
                        placeholder="Search For SuperVisor Name"
                      />
                      <select
                        className="form-control mt-1"
                        id="superVisor"
                        name="superVisor"
                        // defaultValue={this.state.skillType.value}
                        // onBlur={this.inputChange}
                        // onChange={this.selectSkillType}
                      >
                        <option value="0">Select</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    {" "}
                    <div className="form-group ">
                      <label htmlFor="Student1">
                        <h6>First Student</h6>
                      </label>
                      <input
                        type="text"
                        className="form-control mb-1"
                        placeholder="Search For First Student Name"
                      />
                      <select
                        className="form-control mt-1"
                        id="student1"
                        name="student1"
                        // defaultValue={this.state.skillType.value}
                        // onBlur={this.inputChange}
                        // onChange={this.selectSkillType}
                      >
                        <option value="0">Select</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    {" "}
                    <div className="form-group ">
                      <label htmlFor="superVisor">
                        <h6>Second Student</h6>
                      </label>
                      <input
                        type="text"
                        class="form-control mb-1"
                        placeholder="Search For Second Student Name"
                      />
                      <select
                        className="form-control mt-1"
                        id="student2"
                        name="student2"
                        // defaultValue={this.state.skillType.value}
                        // onBlur={this.inputChange}
                        // onChange={this.selectSkillType}
                      >
                        <option value="0">Select</option>
                      </select>
                    </div>
                  </div>
                </div>
                <h4 className="mt-4 mb-0 ">Project Files </h4>
                <hr></hr>
                <div className="row">
                  <div className="col">
                    <div className="form-group ">
                      <label htmlFor="image">
                        <h6>Image</h6>
                      </label>
                      <div class="custom-file">
                        <input
                          type="file"
                          name="image"
                          class="custom-file-input"
                          id="inputGroupFile01"
                          aria-describedby="inputGroupFileAddon01"
                        />
                        <label class="custom-file-label" for="inputGroupFile01">
                          Choose file
                        </label>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline1"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadioInline1"
                          >
                            Show To Public
                          </label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline2"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadioInline2"
                          >
                            <b>Don`t</b> Show To Public
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group ">
                      <label htmlFor="Video">
                        <h6>Video</h6>
                      </label>
                      <div class="custom-file">
                        <input
                          type="file"
                          name="Video"
                          class="custom-file-input"
                          id="inputGroupFile01"
                          aria-describedby="inputGroupFileAddon01"
                        />
                        <label class="custom-file-label" for="inputGroupFile01">
                          Choose file
                        </label>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline3"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadioInline1"
                          >
                            Show To Public
                          </label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline4"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadioInline2"
                          >
                            <b>Don`t</b> Show To Public
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group ">
                      <label htmlFor="Pdf">
                        <h6>Pdf</h6>
                      </label>
                      <div className="custom-file">
                        <input
                          type="file"
                          name="Pdf"
                          className="custom-file-input"
                          id="inputGroupFile01"
                          aria-describedby="inputGroupFileAddon01"
                        />
                        <label
                          className="custom-file-label"
                          for="inputGroupFile01"
                        >
                          Choose file
                        </label>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline1"
                            name="customRadioInline1"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            for="customRadioInline1"
                          >
                            Show To Public
                          </label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline2"
                            name="customRadioInline1"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            for="customRadioInline2"
                          >
                            <b>Don`t</b> Show To Public
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group ">
                      <label htmlFor="Power Point">
                        <h6>Power Point</h6>
                      </label>
                      <div class="custom-file">
                        <input
                          type="file"
                          name="Power Point"
                          class="custom-file-input"
                          id="inputGroupFile01"
                          aria-describedby="inputGroupFileAddon01"
                        />
                        <label class="custom-file-label" for="inputGroupFile01">
                          Choose file
                        </label>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline1"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadioInline1"
                          >
                            Show To Public
                          </label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline2"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadioInline2"
                          >
                            <b>Don`t</b> Show To Public
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group ">
                      <label htmlFor="Matlab">
                        <h6>Matlab</h6>
                      </label>
                      <div class="custom-file">
                        <input
                          type="file"
                          name="Matlab"
                          class="custom-file-input"
                          id="inputGroupFile01"
                          aria-describedby="inputGroupFileAddon01"
                        />
                        <label class="custom-file-label" for="inputGroupFile01">
                          Choose file
                        </label>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline1"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadioInline1"
                          >
                            Show To Public
                          </label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline2"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadioInline2"
                          >
                            <b>Don`t</b> Show To Public
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-group ">
                      <label htmlFor="Solid Work">
                        <h6>Solid Work</h6>
                      </label>
                      <div class="custom-file">
                        <input
                          type="file"
                          name="Solid Work"
                          class="custom-file-input"
                          id="inputGroupFile01"
                          aria-describedby="inputGroupFileAddon01"
                        />
                        <label class="custom-file-label" for="inputGroupFile01">
                          Choose Pdf
                        </label>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline1"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadioInline1"
                          >
                            Show To Public
                          </label>
                        </div>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input
                            type="radio"
                            id="customRadioInline2"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label
                            class="custom-control-label"
                            for="customRadioInline2"
                          >
                            <b>Don`t</b> Show To Public
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="row">
                  <div className="col-md-12">
                    <h6>Selected Skills</h6>
                  </div>
                  {this.state.requiredSkills.length ? (
                    this.state.requiredSkills.map((el, index) => {
                      return (
                        <div key={index} className="col-md-3">
                          <SkillColor
                            key={el.skillr.id}
                            id={el.skillr.id}
                            name={el.skillr.name}
                            level={el.level}
                            type={el.type}
                            removeSkill={this.removeSkill}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-md-12">
                      {" "}
                      <font color="red">No Selected Skills Yet </font>
                    </div>
                  )}
                </div> */}
                <div className="col-md-12 mt-1">
                  <button
                    type="submit"
                    className="btn btn-info btn-block"
                    onClick={this.submit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddProject;
