import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAd,
  faAtom,
  faClock,
  faArchive,
  faCalendarday
} from "@fortawesome/free-solid-svg-icons";

import InputErrors from "./InputErrors";
import FileUpload from "./fileUpload";
import SelectFiles from "./selectFiles";
import { toast } from "react-toastify";

// import SelectedUsers from "./SelectUsers";
// import SkillColor from "./SkillColor";
//
class AddProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectname: {
        name: "שם פרויקט ",
        value: "",
        errors: [],
        validations: { required: true, minLength: 2 }
      },
      synopsis: {
        value: "",
        name: "תקציר",
        errors: [],
        validations: { required: true, minLength: 2 }
      },
      description: {
        value: "",
        name: "תיאור הפרויקט",
        errors: [],
        validations: { required: true, minLength: 2 }
      },
      date: {
        value: "",
        name: "תאריך התחלה",
        errors: [],
        validations: { required: true }
      },
      superVisor: {
        value: "",
        name: "מנחה הפרויקט",
        errors: [],
        validations: { required: true }
      },
      firstStudent: {
        value: "",
        errors: [],
        name: "סטודנט ראשון",
        validations: { required: true }
      },
      secondStudent: {
        value: "",
        errors: [],
        name: "סטודנט שני",
        validations: { required: true }
      },
      category: {
        value: "",
        errors: [],
        name: "קטגוריה",
        validations: { required: true }
      },
      // contain: [Image, Video, PDF, PowerPoint, Matlab, SolidWork],
      image: {
        value: [],
        errors: [],
        name: "Image",
        validations: { required: true }
      },
      video: {
        value: [],
        errors: [],
        name: "Video",
        validations: { required: true }
      },
      pdf: {
        value: [],
        errors: [],
        name: "PDF",
        validations: { required: true }
      },
      powerPoint: {
        value: [],
        errors: [],
        name: "Power Point",
        validations: { required: true }
      },
      matlab: {
        value: [],
        errors: [],
        name: "Matlab",
        validations: { required: true }
      },
      solidWork: {
        value: [],
        errors: [],
        name: "Solid Work",
        validations: { required: true }
      }
    };
    this.inputChange = this.inputChange.bind(this);
    this.submit = this.submit.bind(this);
    this.handlefile = this.handlefile.bind(this);
    // this.skills = {};
    // this.selectSkillType = this.selectSkillType.bind(this);
    // this.inputChange = this.inputChange.bind(this);

    // this.addskill = this.addskill.bind(this);
    // this.removeSkill = this.removeSkill.bind(this);
    // this.selectSkillLevel = this.selectSkillLevel.bind(this);
  }
  // async
  // componentDidMount() {
  //   const skills = await Api.getSkills();
  //   this.skills = {
  //     technicals: skills.technicalSkills.map(skill => ({
  //       id: skill.skillId,
  //       name: skill.skillName
  //     })),
  //     product: skills.productSkills.map(skill => ({
  //       id: skill.skillId,
  //       name: skill.skillName
  //     }))
  //   };
  // }

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

  inputChange({ target: { name, value } }) {
    const { validations } = this.state[name];
    const errors = [];

    if (!validations) return;

    if (validations.required) {
      if (!value) {
        errors.push(`${name} is required`);
      }
    }
    if (validations.minLength) {
      if (value.length < validations.minLength) {
        errors.push(
          `${name} should be at least ${validations.minLength} characters`
        );
      }
    }
    this.setState({
      [name]: {
        ...this.state[name],
        value
      }
    });
  }
  // async
  submit(e) {
    e.preventDefault();
 
    if (!this.state.projectname.value) {
      toast.error("חסר שם פרויקט");
      return;
    }

    if (!this.state.date.value) {
      toast.error("חסר תאריך התחלה ");
      return;
    }
    if (!this.state.synopsis.value) {
      toast.error("חסר תקציר ");
      return;
    }
    if (!this.state.description.value) {
      toast.error("חסר תיואר הפרויקט ");
      return;
    }

    try {
      setTimeout(() => {
        toast.success("הפרויקט הוכנס בהצלחה");
      }, 2000);
    } catch (error) {
      toast.error("שפ פרויקט צריך להיות יחודי");
    }
  }
  handlefile(e) {
    console.log(e.value);
  }
  render() {
    return (
      <>
        <div
          className="row justify-content-center text-right"
          style={{ marginBottom: "100px" }}
        >
          <div className="col-10 col-md-10 col-sm-10 col-lg-10">
            <div className="card  my-1 p-2 shadow m-12 mt-4 mb-4" role="alert">
              <h4 className="alert-heading text-center ">
                הוספה פרויקט חדש למערכת
              </h4>
              <hr></hr>
              <form onSubmit={this.submit}>
                <div className="row">
                  <div className="col-md-4  ">
                    <label htmlFor="StartDate">
                      <h6>תאריך התחלה</h6>
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                        </span>
                      </div>
                      <input
                        type="date"
                        className="form-control text-right"
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
                  <div className="col-md-8 ">
                    <label>
                      <h6>שם הפרויקט</h6>
                    </label>
                    <div className="input-group ">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faAtom}></FontAwesomeIcon>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control text-right"
                        placeholder="שם הפרויקט"
                        aria-label="Projectname"
                        aria-describedby="basic-addon1"
                        id="projectname"
                        name="projectname"
                        defaultValue={this.state.projectname.value}
                        onBlur={this.inputChange}
                      ></input>
                    </div>
                    <InputErrors errors={this.state.projectname.errors} />
                  </div>
                </div>

                <div className="row mt-2 ">
                  <div className="col-md-12 ">
                    <label htmlFor="projectSynopsis">
                      <h6>תקציר</h6>
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faAd}></FontAwesomeIcon>
                        </span>
                      </div>
                      <textarea
                        type="text"
                        className="form-control text-right"
                        placeholder="תקציר"
                        aria-label="Synopsis"
                        aria-describedby="basic-addon1"
                        id="synopsis"
                        name="synopsis"
                        defaultValue={this.state.synopsis.value}
                        onBlur={this.inputChange}
                        rows="2"
                      ></textarea>
                    </div>
                    <InputErrors errors={this.state.synopsis.errors} />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-12 ">
                    <label htmlFor="projectDescription">
                      <h6>תיאור הפרויקט</h6>
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faArchive}></FontAwesomeIcon>
                        </span>
                      </div>
                      <textarea
                        type="text"
                        className="form-control text-right"
                        placeholder="תיאור הפרויקט"
                        aria-label="Description"
                        aria-describedby="basic-addon1"
                        id="description"
                        name="description"
                        defaultValue={this.state.description.value}
                        onBlur={this.inputChange}
                        rows="4"
                      ></textarea>
                    </div>
                    <InputErrors errors={this.state.description.errors} />
                  </div>
                </div>
                <h6 className="mt-4 mb-0 ">אנשי ביצוע</h6>
                <hr></hr>
                <div className="row ">
                  <div className="col">
                    {" "}
                    <div className="form-group text-right">
                      <label htmlFor="Student1">
                        <h6>סטודנט שני</h6>
                      </label>
                      <input
                        type="text"
                        className="form-control mb-1 text-right"
                        placeholder="חפש שם סטודנט"
                      />
                      <select
                        className="form-control mt-1 text-right"
                        id="firstStudent"
                        name="firstStudent"
                        placeholder="Select A Student"
                        defaultValue={this.state.firstStudent.value}
                        onBlur={this.inputChange}
                      >
                        <option value="0"></option>
                        <option value="1">גרייס אליאס</option>
                        <option value="2">גרייס חדאד </option>
                        <option value="3">גרייס זאמל</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    {" "}
                    <div className="form-group ">
                      <label htmlFor="superVisor">
                        <h6>סטודנט ראשון</h6>
                      </label>
                      <input
                        type="text"
                        className="form-control mb-1 text-right"
                        placeholder="חפש שם סטודנט"
                      />
                     
                      <select
                        className="form-control mt-1"
                        id="secondStudent"
                        name="secondStudent"
                        placeholder="Select A Student"
                        // defaultValue={this.state.secondStudent.value}
                        onBlur={this.inputChange}
                      >
                        <option value="0"></option>
                        <option value="1">סהיר עאבד</option>
                        <option value="2">סהיר בושנאק</option>
                        <option value="3">סהיר יעקובי</option>
                        <option value="4">סהיר מוסטאפה</option>
                      </select>
                    </div>
                  </div>
                  {/* <SelectedUsers /> */}
                  <div className="col">
                    <div className="form-group ">
                      <label htmlFor="supervisor">
                        <h6>מנחה</h6>
                      </label>
                      <select
                        className="form-control mt-1"
                        id="superVisor"
                        placeholder="לבחור מנחה"
                        name="superVisor"
                        defaultValue={this.state.superVisor.value}
                        onBlur={this.inputChange}
                      >
                        <option value="0"></option>
                        <option value="1">אורנית בר-זית</option>
                        <option value="2">ד“ר אורית בראון</option>
                        <option value="1">ד"ר מלכי גרוסמן</option>
                        <option value="3">ד”ר אורנה מילר</option>
                        <option value="4">ד”ר נירית גביש </option>
                        <option value="5">עופר ג’אן</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    {" "}
                    <div className="form-group ">
                      <label htmlFor="superVisor">
                        <h6>קטגוריה </h6>
                      </label>
                      <select
                        className="form-control mt-1"
                        id="category"
                        name="category"
                        placeholder="לבחור קטגוריה"
                        defaultValue={this.state.category.value}
                        onBlur={this.inputChange}
                      >
                        <option value="0"></option>
                        <option value="1">רב תחומי </option>
                        <option value="2">א"ב</option>
                        <option value="3">מומלצים</option>
                        <option value="4">חדשים</option>
                        <option value="5">בתקופת נסיון</option>
                      </select>
                    </div>
                  </div>
                </div>
                <h3 className="mt-4 mb-0 ">קבצי הפרויקט </h3>
                <hr></hr>
                <div className="row justify-content-center">
                  <div className="col ml-5">
                    {/* <FileUpload name="Image" groupID="1" /> */}
                    <button type="button" className="btn btn-outline-success">
                      <b>קבצים לקהל רחב</b>
                    </button>
                    <br></br>
                    <h7>
                      <b>Such As :"Image,Video,PDF"</b>
                    </h7>
                    <SelectFiles />
                  </div>
                  <div className="col">
                    <button type="button" className="btn btn-outline-danger">
                      <b>קבצים לשימור פנימי במערכת</b>
                    </button>
                    <br></br>
                    <h7>
                      <b>Such As:"Matlab,Power Point,Solid Work"</b>
                    </h7>
                    {/* <FileUpload name="Video" groupID="2" /> */}

                    <SelectFiles />
                  </div>
                  {/* <div className="col">
                    <FileUpload name="PDF" groupID="3" />
                  </div> */}
                </div>

                <div className="row justify-content-center mt-3 mb-3">
                  <div className="col-6">
                    {" "}
                    <button
                      type="submit"
                      className="btn btn-info btn-block"
                      onClick={this.submit}
                    >
                      Submit
                    </button>
                  </div>
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
