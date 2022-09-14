import React, { useState, useEffect } from "react";
import "react-tagsinput/react-tagsinput.css";
import RichTextEditor from "react-rte";
//import SelectTemplate from "./SelectTemplate.js";
import UploadDocumentNew from "./UploadDocument";
//import "react-datepicker/dist/react-datepicker.css";
import { FaFileInvoice, FaCopy, FaFile } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
//import SelectJob from "./SelectJob";
import JobDetails from "./JobDetails";
import NotesComponent from "./Notes";
import VettingPlan from "./VettingPlan";
import Modal from "react-bootstrap/Modal";
import SubmittalDetailsInfo from "./SubmittalDetailsInfo";
import AdditionalInfo from "./AdditionalInfo";
import OutsideClickHandler from "react-outside-click-handler";
//import Sort from "../../common/Sort";
//import FilterJobs from "./FilterJobs";

function AddJob({
  closePanel,
  edit,
  editJobData,
  addTemplate,
  editTemplate,
  type
}) {
  const today = new Date();
  const [loading, setLoading] = useState(false);
  const [tabList, setTabList] = useState({
    "Job Info": true,
    "Additional Info": false,
    "Vetting Plan": false,
    "Submittal Details": false,
    Documents: false,
    Notes: false,
  })
  let { Documents, Notes } = tabList
  const [templateSelected, setTemplateSelected] = useState(false);
  const [dropdownList, setDropDown] = useState({});
  const [templateName, setTemplateName] = useState("");
  const [templateCategory, setTemplateCategory] = useState(
    "Information Technology"
  );
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());

  const [selectedLanguages, setSelectedLanguages] = useState(["English"]);
  const [additionalInfoFinal, setAdditionalInfoFinal] = useState([]);
  const [screeningQuestions, setScreeningQuestions] = useState([]);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [templates, setTemplates] = useState([]);
  const [templateDetails, setTemplateDetails] = useState({});
  const [saveTemplate, setSaveTemplate] = useState(false);
  const [category, setCategory] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [publicTemplates, setPublicTemplates] = useState(true);
  const [userTemplates, setUserTemplates] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [overWrite, setOverWrite] = useState(false);
  const [typeSelected, setTypeSelected] = useState(false);
  const [notesDetails, setNotesDetails] = useState([]);
  const [notesValue, setNotesValue] = useState("");
  const [role, setRole] = useState("");
  const [createJobWithTemplate, setCreateJobWithTemplate] = useState(false);
  const [createJobWithExisting, setCreateJobWithExisting] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("Yes");
  const [jobListData, setJobListData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [requestTitles, setRequestTitles] = useState([]);
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [requestTypes, setRequestTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showConfirmJobType, setShowConfirmJobType] = useState(false);
  const [confirmJobType, setConfirmJobType] = useState(false);
  const [screeningRequired, setScreeningRequired] = useState(false);
  const [preVettingRequired, setPrevettingRequired] = useState(false);
  const [preVettingSkills, setPrevettingSkills] = useState([]);
  const iconObj = { width: "3rem", height: "3rem", color: "gray" };
  const [jobType, setJobType] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [sortModal, setSortModal] = useState(false);
  const [sortCount, setSortCount] = useState(0);
  const [sortArray, setSortArray] = useState([]);
  const [sortOrder, setSortOrder] = useState(
    new Array(3).fill().map((_) => "asc")
  );
  const [ vettingDB, setVettingDB ] = useState([])
  const [ vettingCheck, setVettingCheck ] = useState([])

  const sortObject = [
    {
      id: 1,
      label: "Job Title",
      value: "jobTitle",
      icon: "fal fa-fw fa-briefcase mr-2 dd-sort",
    },
    {
      id: 2,
      label: "Job Type",
      value: "jobType",
      icon: "fal fa-fw fa-id-card-alt mr-2 dd-sort",
    },
    {
      id: 3,
      label: "Location",
      value: "location.city",
      icon: "fal fa-fw fa-map-marker-alt mr-2 dd-sort",
    },
  ];

  const orderList = [
    {
      value: "asc",
      label: "Ascending",
      icon: "fal fa-sort-amount-down mr-2 dd-sort",
    },
    {
      value: "desc",
      label: "Descending",
      icon: "fal fa-sort-amount-up mr-2 dd-sort",
    },
  ];

  const initialJobData = {
    type: "",
    title: "",
    startDate: new Date(today.setMonth(today.getMonth() + 2)),
    companyName: "",
    companyJobId: "",
    hiringManagerId: "",
    isRemote: true,
    isHotJob: false,
    isFeePercentage: false,
    isPublic: true,
    isFexible: true,
    location: {
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
    numberOfPositions: 1,
    allowedSubmittals: 5,
    salary: "",
    salaryCurrency: "USD",
    activeFrom: new Date(),
    expiresOn: new Date(new Date().setMonth(new Date().getMonth() + 2)),
    placementFee: "",
    placementCurrency: "USD",
    editPreferred: "",
    completionDate: "",
    durationMonths: 1,
    durationDays: 0,
    hourlyRate: "",
    hourlyRateCurrency: "USD",
    budget: "",
    referralFee: "",
    referralCurrency: "USD",
    submittal: "",
    description: "",
    primarySkills: [],
    secondarySkills: [],
    skillSet: [],
    education: ["Bachelor's Degree"],
    certifications: [],
    industries: [],
    tierData: {},
    workStart: "",
    workEnd: "",
    travel: "",
    drugTest: false,
    backgroundCheck: false,
    securityClearance: "",
    fileName: "",
    domainName: 'domain',
    tenantName: "",
    visaRequirement: [],
    licenceRequirement: [],
    experienceLevel: "1-3 years",
    minimumPay: "",
    maximumPay: "",
    salaryType: "Annual",
    workPlaceType: "Remote",
    tenantId: '',
    onsiteWorkDays: "",
    vettingRequired: false,
    screeningRequired: false,
    vettingDetails: [],
    weightage: {
      primarySkills: [],
      secondarySkills: [],
      jobTitle: true,
      location: true,
      experienceLevel: true,
      education: [],
      industries: [],
    },
  };

  const [addJobData, setAddJobData] = useState(initialJobData);

  const [addJobVal, setAddJobVal] = useState({
    template: "",
    minimumPay: "",
    maximumPay: "",
    title: "",
    primary: "",
    placement: "",
    activeFromError: "",
    startDateError: "",
    expiresOnError: "",
    company: "",
    location: {
      city: "",
      state: "",
      country: "",
      address: "",
      zipCode: "",
    },
    description: "",
  });

  const changeTab = (value) => {
    let intialTabList = (addTemplate || editTemplate) ? {
      "Job Info": false,
      "Additional Info": false,
      "Vetting Plan": false,
      "Submittal Details": false,
      Notes: false,
    } : {
      "Job Info": false,
      "Additional Info": false,
      "Vetting Plan": false,
      "Submittal Details": false,
      Documents: false,
      Notes: false,
    }
    intialTabList[value] = true;
    setTabList(intialTabList);
  }

  const handleBackNext = (value) => {
    let val = false;
    // if (!addJobData.isPublic) {
    //   val = tierValidation(addJobData.tierData, addJobData.tierData.tierLength);
    // }
    if (!val) {
      let tabs = Object.entries(tabList);
      let currentTabIndex = tabs.findIndex((item) => item[1]);
      let index = value === "Back" ? currentTabIndex - 1 : currentTabIndex + 1;
      changeTab(tabs[index][0]);
    }
  }

  useEffect(() => {
    setTemplateSelected(true)
  }, []);

  useEffect(() => {
    if(addJobData.vettingDetails.length > 0 && vettingDB.length > 0) {
      console.log(addJobData.vettingDetails)
      let vetting = []
      let skills = vettingDB.map(i => i.skills[0])
      let DB = [...addJobData.vettingDetails].map(i => ({ ...i, duration: i.duration?.split(' ')[0], type: i.type === 'Video MCQ' ? 'Video' : i.type }))
      DB.map(item => {
        if(skills.includes(item.name)) {
          let obj = vettingDB.find(i => i.skills.includes(item.name))
          if(obj.testCategory === item.type && obj.details.duration === item.duration) {

          }
          else {
            vetting.push(item)
          }
        }
        else {
          vetting.push(item)
        }
      })
      setVettingCheck(vetting)
    }
    else {
      setVettingCheck([])
    }
  }, [addJobData.vettingDetails])

  const [addJobType, setAddJobType] = useState({
    typeSelected: true,
    fulltimeSelected: true,
    contractSelected: false,
    partTimeSelected: false,
    tempToHireSelected: false,
    volunteerSelected: false,
    disableSubmit: true,
  });

  const classes = (dynamic, classes = "") => {
    return Object.entries(dynamic)
      .filter((entry) => entry[1])
      .map((entry) => entry[0])
      .join(" ")
      .concat(" ")
      .concat(classes);
  };

  const onTypeClick = (value) => {
    if (!typeSelected) {
      setTabList({ ...tabList, "Job Info": true });
      setTypeSelected(true);
    }

    if (value === "Full Time") {
      setAddJobType({
        ...addJobType,
        typeSelected: true,
        volunteerSelected: false,
        tempToHireSelected: false,
        partTimeSelected: false,
        fulltimeSelected: true,
        contractSelected: false,
      });
      setAddJobData({ ...initialJobData, type: value });
    } else if (value === "Contract") {
      setAddJobType({
        ...addJobType,
        typeSelected: true,
        volunteerSelected: false,
        tempToHireSelected: false,
        partTimeSelected: false,
        fulltimeSelected: false,
        contractSelected: true,
      });
      setAddJobData({ ...initialJobData, salaryType: "Per hour", type: value });
    } else if (value === "Part Time") {
      setAddJobType({
        ...addJobType,
        typeSelected: true,
        volunteerSelected: false,
        tempToHireSelected: false,
        partTimeSelected: true,
        fulltimeSelected: false,
        contractSelected: false,
      });
      setAddJobData({ ...initialJobData, salaryType: "Per hour", type: value });
    } else if (value === "Temp to Hire") {
      setAddJobType({
        ...addJobType,
        typeSelected: true,
        volunteerSelected: false,
        tempToHireSelected: true,
        partTimeSelected: false,
        fulltimeSelected: false,
        contractSelected: false,
      });
      setAddJobData({ ...initialJobData, salaryType: "Per hour", type: value });
    } else {
      setAddJobType({
        ...addJobType,
        typeSelected: true,
        volunteerSelected: true,
        tempToHireSelected: false,
        partTimeSelected: false,
        fulltimeSelected: false,
        contractSelected: false,
      });
      setAddJobData({ ...initialJobData, salaryType: "Per hour", type: value });
    }
  };

  const skillSetOption = [
    { value: 'Accounting/Finance', label: 'Accounting/Finance' },
    {
      value: 'Administrative/Clerical',
      label: 'Administrative/Clerical'
    },
    { value: 'Business Professional', label: 'Business Professional' },
    { value: 'Call Center', label: 'Call Center' },
    { value: 'Clinical', label: 'Clinical' },
    { value: 'Communications', label: 'Communications' },
    { value: 'Creative', label: 'Creative' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Hardware', label: 'Hardware' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Information Technology', label: 'Information Technology' },
    { value: 'Legal', label: 'Legal' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Medical', label: 'Medical' },
    { value: 'Operations', label: 'Operations' },
    { value: 'Procurement', label: 'Procurement' },
    { value: 'Professional', label: 'Professional' },
    { value: 'R&D', label: 'R&D' },
    { value: 'Sales', label: 'Sales' },
    { value: 'Scientific', label: 'Scientific' },
    { value: 'Technical (Non-IT)', label: 'Technical (Non-IT)' },
    { value: 'Technical Support', label: 'Technical Support' }
  ]

  const QualificationType =
    Object.keys(dropdownList).length > 0
      ? dropdownList.QualificationType.filter(
          (item) => item.PositionName !== "Select"
        ).map((item) => {
          const QualificationObj = {
            value: item.PositionName,
            label: item.PositionName,
          };
          return QualificationObj;
        })
      : [];


  const handleSearch = (value) => {
    setSearchValue(value);
    setSearchData(
      templates.filter(
        (item) =>
          item.jobDetails.title.toLowerCase().includes(value.toLowerCase()) ||
          item.templateName.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const applySort = (sortedData, close) => {
    close && setSortModal(false);
    setFilterData(sortedData);
  };

  const sortClearAll = () => {
    setSortArray([]);
    setSortCount(0)
    applySort(jobListData, true);
  };

  const applyFilter = (data, selectedTitle, selectedType) => {
    sortClearAll()
    setSelectedTitles(selectedTitle);
    setSelectedTypes(selectedType);
    setFilterData(data);
    setShowFilter(false);
  }

  const validate = () => {
    let detailsErr = false;
    let templateErr = false;
    let intakeErr = false;
    const validationArray = [];
    let validation = {
      template: "",
      minimumPay: "",
      maximumPay: "",
      title: "",
      primary: "",
      placement: "",
      activeFromError: "",
      startDateError: "",
      expiresOnError: "",
      company: "",
      location: {
        city: "",
        state: "",
        country: "",
        address: "",
        zipCode: "",
      },
      description: "",
    };
    if (saveTemplate && templateName === "") {
      validation = { ...validation, template: "Required Field" };
      validationArray.push("Please Enter Template Name");
      templateErr = true;
    }
    if (
      templates.map((i) => i.templateName).includes(templateName) &&
      !overWrite
    ) {
      validation = { ...validation, template: "This name already exists" };
      validationArray.push(
        "Template Name Already Exists. Please Try Another Name"
      );
      templateErr = true;
    }
    if (addJobData.title === "") {
      validation = { ...validation, title: "Required Field" };
      validationArray.push("Please Enter Job Title");
      detailsErr = true;
    }
    if (new Date(addJobData.startDate) < new Date(addJobData.activeFrom)) {
      validation = {
        ...validation,
        startDateError:
          "Preffered Start Date should be greater than Active from date",
      };
      validationArray.push(
        "Preffered Start Date should be greater than Active from date"
      );
      detailsErr = true;
    }
    if (
      !addJobData.isRemote &&
      addJobData.location.zipCode &&
      !/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(addJobData.location.zipCode)
    ) {
      validation = { ...validation, zipCode: "Invalid Zip Code" };
      validationArray.push("Invalid Zip Code");
      detailsErr = true;
      console.log("validation", validation);
    }
    // if (new Date(addJobData.expiresOn) <= new Date(addJobData.startDate)) {
    //     validation = { ...validation, expiresOnError: 'Expired date should be greater than prefered start date'}
    //     validationArray.push('Expired date should be greater than prefered start date')
    //     detailsErr = true
    // }
    let locationInfo = Object.entries(addJobData.location).filter(
      i => ["city", "state", "country"].includes(i[0])
    );
    let locationValidation = {};
    let zipValidation = {};
    locationInfo.forEach((i) => {
      locationValidation[i[0]] = i[1] ? "" : "Required Field";
      zipValidation[i[0]] = i[1]
        ? /(^\d{5}$)|(^\d{5}-\d{4}$)/
        : "Invalid Zip Code";
    })
    if (!addJobData.isRemote && locationInfo.some((i) => i[1] === "")) {
      validation = { ...validation, location: locationValidation };
      validationArray.push("Please Complete the Location Info");
      detailsErr = true;
    }

    if (addJobData.minimumPay === "") {
      validation = { ...validation, minimumPay: "Required Field" };
      validationArray.push("Please Enter Minimum Pay");
      detailsErr = true;
    }
    if (addJobData.maximumPay === "") {
      validation = { ...validation, maximumPay: "Required Field" };
      validationArray.push("Please Enter Maximum Pay");
      detailsErr = true;
    }
    if (+addJobData.minimumPay > +addJobData.maximumPay) {
      validation = {
        ...validation,
        minimumPay: "Minimum Pay should be less than Maximum Pay",
      };
      validationArray.push("Minimum Pay should be less than Maximum Pay");
      detailsErr = true;
    }
    if (addJobData.primarySkills.length === 0) {
      validation = { ...validation, primary: "Required Field" };
      validationArray.push("Please Enter Mandatory Skills");
      detailsErr = true;
    }
    let regex = /(<([^>]+)>)/ig
    if (!addJobData.description.replace(regex, "")) {
      validation = { ...validation, description: "Required Field" };
      validationArray.push("Please Enter Job Description");
      detailsErr = true;
    }
    if (addJobData.placementFee === "") {
      validation = { ...validation, placement: "Required Field" };
      validationArray.push("Please Enter Placement Fee");
      detailsErr = true;
    }
    if (addJobData.isFeePercentage && addJobData.placementFee > 100) {
      validation = {
        ...validation,
        placement: "Placement fee should not be greater than 100",
      };
      validationArray.push("Placement fee should not be greater than 100");
      detailsErr = true;
    }
    if (additionalInfoFinal.map((i) => i.answer).some((i) => i === "")) {
      validationArray.push(
        "Please Enter Answers for all the Additional Info you have chosen"
      );
    }
    if (additionalInfoFinal.findIndex(item => item.name === 'Client Data') !== -1 && addJobData.companyName === '') {
      validationArray.push(
        "Please Enter Client Name"
      )

    }
    return { validation, validationArray, templateErr, detailsErr, intakeErr };
  };

  return (
    <>
      {
        <>

          {/* TYPE OF CREATE JOB */}
          {!createJobWithTemplate &&
            !templateSelected &&
            !createJobWithExisting && (
              <div className="m-3">
                <div>
                  <div
                    className="card card-flat mb-2 mt-4 bg-gray4 card-hoverable"
                    onClick={() => setCreateJobWithExisting(true)}
                  >
                    <div className="card-body d-flex align-items-center">
                      <div>
                        <FaCopy style={iconObj} />
                      </div>
                      <div className="m-2 ml-3">
                        <h6>Copy / Clone an Existing Job</h6>
                        <p>
                          Use an existing job as a template and customize as
                          needed.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card card-flat mb-2 bg-gray4 card-hoverable"
                    onClick={() => {
                      setCreateJobWithTemplate(true);
                    }}
                  >
                    <div className="card-body d-flex align-items-center">
                      <div>
                        <FaFileInvoice style={iconObj} />
                      </div>
                      <div className="m-2 ml-3">
                        <h6>Sample Job</h6>
                        <p>
                          Use a sample High5Hire template and customize as
                          needed.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card card-flat mb-2 bg-gray4 card-hoverable"
                    onClick={() => setTemplateSelected(true)}
                  >
                    <div className="card-body d-flex align-items-center">
                      <div>
                        <FaFile style={iconObj} />
                      </div>
                      <div className="m-2 ml-3">
                        <h6>Create New Job</h6>
                        <p>
                          Use a blank template to create your job from scratch
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          {/* TEMPLATE SELECTION */}
          {!templateSelected && createJobWithTemplate && (
            <div className="m-3">
              <div className="m-2">
                <label>Choose a Template</label>
                <div class="d-flex-column d-block-1200 d-lg-flex flex-lg-row align-items-end mb-3 border-bottom-gray2">
                  <ul class="nav nav-tabs nav-tabs-tablet pt-1 w-100 justify-content-center">
                    <li class="nav-item">
                      <button
                        type="button"
                        onClick={() => {
                          setPublicTemplates(true);
                          setUserTemplates(false);
                        }}
                        class={
                          publicTemplates
                            ? "nav-link pb-3 mx-2 bg-transparent active"
                            : "nav-link pb-3 mx-2 bg-transparent"
                        }
                      >
                        <span class="tag mb-1">
                          {
                            templates.filter((i) => i.templateType === "Public")
                              .length
                          }
                        </span>
                        <div>Public Templates</div>
                      </button>
                    </li>
                    <li class="nav-item">
                      <button
                        type="button"
                        onClick={() => {
                          setPublicTemplates(false);
                          setUserTemplates(true);
                        }}
                        class={
                          userTemplates
                            ? "nav-link pb-3 mx-2 bg-transparent active"
                            : "nav-link pb-3 mx-2 bg-transparent"
                        }
                      >
                        <span class="tag mb-1">
                          {
                            templates.filter(
                              (i) =>
                                i.templateType === "User" &&
                                i.tenantName === ''
                            ).length
                          }
                        </span>
                        <div>My Templates</div>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="p-3">
                  <div className="mt-2 d-flex align-items-center justify-content-between flex-wrap">
                    <div className="col-lg-5 col-md-4 col-sm-12 col-12">
                      <select
                        className="form-select mb-2 font-14"
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="all">All</option>
                        {[
                          ...new Set(templates.map((item) => item.category)),
                        ].map((item) => (
                          <option selected={item === category} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <input
                        onChange={(e) => handleSearch(e.target.value)}
                        type="text"
                        className="form-control small font-14"
                        placeholder="Search Templates"
                      />
                    </div>
                  </div>
                </div>
                {/* <SelectTemplate
                  data={templates.filter((item) =>
                    category === "all" ? true : item.category === category
                  )}
                  pageLimit={5}
                  dataLimit={25}
                  searchData={templates.filter((item) =>
                    item.templateName.toLowerCase().includes(searchValue.trim().toLowerCase())
                  )}
                  openSidePanel={(item) => {
                    setTemplateDetails(item);
                  }}
                  category={category}
                  searchValue={searchValue}
                  totalCount={
                    templates.filter((i) => i.templateType === "Public").length
                  }
                  userCount={
                    templates.filter(
                      (i) =>
                        i.templateType === "User" &&
                        i.tenantName === ''
                    ).length
                  }
                  publicTemplates={publicTemplates}
                  templateDetails={templateDetails}
                  setTemplateDetails={setTemplateDetails}
                  handleTemplateSelection={(item) =>
                    console.log(item)
                  }
                />              */}
              </div>
            </div>
          )}

          {/* EXISTING JOB SELECTION */}
          {!templateSelected && createJobWithExisting && (
            <div className="mt-4">
              <div className="m-3">
                <div className="d-flex align-items-center">
                  <p className="m-0 ml-2">Choose an existing Job</p>
                  <div className="ml-auto d-flex mb-2 justify-content-center justify-content-lg-start">
                    <div class="dropdown-sort dd-sort">
                      <button
                        type="button"
                        className="btn btn-sm btn-text-accent"
                        onClick={() => setSortModal(true)}
                      >
                        <i className="fad fa-sort-down font-16 mr-1"></i> Sort /{" "}
                        {sortCount}
                      </button>
                      {sortModal && (
                        <OutsideClickHandler
                          onOutsideClick={() => setSortModal(false)}
                        >
                          {/* <Sort
                            sortData={jobListData}
                            orderArray={orderList}
                            sortObjects={sortObject}
                            applySort={applySort}
                            setSortCount={setSortCount}
                            sortCount={sortCount}
                            setSortArray={setSortArray}
                            sortArray={sortArray}
                            sortingFor={
                              "Sort by Job Title, Type and Location of Requests"
                            }
                          /> */}
                        </OutsideClickHandler>
                      )}
                    </div>
                    <div className="dropdown position-relative">
                      <button
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Filter"
                        onClick={() => setShowFilter(true)}
                        type="button"
                        className="btn btn-sm btn-text-accent w-auto"
                      >
                        <i className="fas fa-filter mr-1"></i>
                        Filter /
                        <span>
                          {" "}
                          {selectedTitles.length + selectedTypes.length}{" "}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <hr className="m-0 mb-3" />
                {/* <SelectJob
                  data={filterData}
                  pageLimit={5}
                  dataLimit={10}
                  searchData={[]}
                  searchValue={searchValue}
                  setChooseJobDetails={(item) => console.log(item)}
                /> */}
              </div>
            </div>
          )}

          {/* JOB TYPE SELECTION */}
          {templateSelected &&
            Object.values(tabList)
              .slice(1)
              .every((i) => i === false) && (
              <div className="m-3">
                <div className="m-1">
                  {!edit && <label>Choose Job Type</label>}
                  <div className="row mt-2">
                    <div className="col-lg-4">
                      <button
                        onClick={() => {
                          if (addJobType.typeSelected) {
                            setJobType("Full Time");
                            setShowConfirmJobType(true);
                          } else {
                            onTypeClick("Full Time");
                          }
                        }}
                        type="button"
                        className={classes(
                          { selected: addJobType.fulltimeSelected },
                          "col-lg-4 card card-flat p-0 mr-2 mb-2 mb-lg-0"
                        )}
                        disabled={addJobType.fulltimeSelected}
                      >
                        <div className="card-body text-left text-left">
                          <div className="d-flex">
                            {addJobType.fulltimeSelected === true ? (
                              <div className="mr-3 font-green font-16">
                                <i className="fad fa-check-circle"></i>
                              </div>
                            ) : (
                              <div className="mr-3 font-muted font-16">
                                <i className="fad fa-circle"></i>
                              </div>
                            )}

                            <div>
                              <div>
                                <strong className="font-blue_primary">
                                  Full Time
                                </strong>
                              </div>
                              <p className="mb-0">Hire for a full time</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="col-lg-4">
                      <button
                        onClick={() => {
                          if (addJobType.typeSelected) {
                            setJobType("Contract");
                            setShowConfirmJobType(true);
                          } else {
                            onTypeClick("Contract");
                          }
                        }}
                        type="button"
                        className={classes(
                          { selected: addJobType.contractSelected },
                          "card card-flat p-0 mr-2 mb-2 mb-lg-0"
                        )}
                        disabled={addJobType.contractSelected}
                      >
                        <div className="card-body text-left text-left">
                          <div className="d-flex">
                            {addJobType.contractSelected === true ? (
                              <div className="mr-3 font-green font-16">
                                <i className="fad fa-check-circle" />
                              </div>
                            ) : (
                              <div className="mr-3 font-muted font-16">
                                <i className="fad fa-circle" />
                              </div>
                            )}
                            <div>
                              <div>
                                <strong className="font-blue_primary">
                                  Contract
                                </strong>
                              </div>
                              <p className="mb-0">Hire for a contract</p>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                    <h6 className="col-lg-1 pt-3">or</h6>
                    <div className="col-lg-3 d-flex flex-column flex-lg-row form-floating p-0">
                      <select
                        onChange={(e) => {
                          if (addJobType.typeSelected) {
                            setJobType(e.target.value);
                            setShowConfirmJobType(true);
                          } else {
                            onTypeClick(e.target.value);
                          }
                        }}
                        className="font-14 form-select"
                        name="jobSelection"
                        style={{
                          boxSizing: "border-box",
                          height: "61px",
                          marginRight: "10px",
                          marginBottom: "10px",
                        }}
                      >
                        <option
                          disabled
                          selected={
                            addJobType.fulltimeSelected ||
                            addJobData.contractSelected
                          }
                        >
                          Select
                        </option>
                        <option
                          disabled={addJobType.partTimeSelected}
                          selected={addJobType.partTimeSelected}
                          value="Part Time"
                        >
                          Part Time
                        </option>
                        <option
                          disabled={addJobType.tempToHireSelected}
                          selected={addJobType.tempToHireSelected}
                          value="Temp to Hire"
                        >
                          Temp to Hire
                        </option>
                        <option
                          disabled={addJobType.volunteerSelected}
                          selected={addJobType.volunteerSelected}
                          value="Volunteer"
                        >
                          Volunteer
                        </option>
                      </select>
                      <label style={{ paddingLeft: "13px", fontSize: "1rem" }}>
                        <strong className="font-inherit font-blue_primary">
                          Job Type
                        </strong>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

          {/* TABS */}
          {addJobType.typeSelected && (
            <div className="mt-3">
              <div>
                {false && (
                  <table className="ml-4">
                    <tr>
                      <td className="bg-gra">
                        <div className="d-flex flex-column bg-gra">
                          <div className="d-flex justify-content-center align-items-center bg-gra pl-3">
                            <BsFillCircleFill style={{ color: "green" }} />
                            <span>
                              <AiOutlineLine
                                style={{
                                  color: "green",
                                  width: "7rem",
                                  height: "3rem",
                                }}
                              />
                            </span>
                          </div>
                          <div>Job Info</div>
                        </div>
                      </td>
                    </tr>
                    {/* <tr>
                                    <td>
                                        Details
                                    </td>
                                </tr> */}
                  </table>
                )}
                <ul className="nav nav-tabs pt-1 ml-3">
                  {Object.keys(tabList).map((item) => (
                    <li className="nav-item">
                      <button
                        onClick={() => changeTab(item)}
                        type="button"
                        className={
                          tabList[item]
                            ? "nav-link pb-3 active"
                            : "nav-link pb-3"
                        }
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
                <hr className="mt-0" />
              </div>
            </div>
          )}

          {/* JOB DETAILS */}
          {tabList["Job Info"] && (
            <JobDetails
              addJobData={addJobData}
              setAddJobData={setAddJobData}
              addJobVal={addJobVal}
              setAddJobVal={setAddJobVal}
              value={value}
              setValue={setValue}
              addJobType={addJobType}
              dropdownList={dropdownList}
              documents={documents}
              setDocuments={setDocuments}
              addTemplate={addTemplate}
              templateName={templateName}
              setTemplateName={setTemplateName}
              templateCategory={templateCategory}
              setTemplateCategory={setTemplateCategory}
              editTemplate={editTemplate}
              type={type}
            />
          )}

          {/* SCREENING QUESTIONS and ADDITIONAL INFO */}
          {tabList["Additional Info"] && (
            <AdditionalInfo
              additionalInfoFinal={additionalInfoFinal}
              setAdditionalInfoFinal={setAdditionalInfoFinal}
              skillSetOption={skillSetOption}
              QualificationType={QualificationType}
              addJobData={addJobData}
              setAddJobData={setAddJobData}
            />
          )}

          {/* Vetting Plan */}
          {tabList["Vetting Plan"] && (
            <VettingPlan
              selectedLanguages={selectedLanguages}
              setSelectedLanguages={setSelectedLanguages}
              skillSetOption={skillSetOption}
              QualificationType={QualificationType}
              screeningQuestions={screeningQuestions}
              setScreeningQuestions={setScreeningQuestions}
              mandatorySkills={addJobData.primarySkills}
              preVettingSkills={preVettingSkills}
              setPrevettingSkills={setPrevettingSkills}
              dropdownList={dropdownList}
              preVettingRequired={preVettingRequired}
              setPrevettingRequired={setPrevettingRequired}
              addJobData={addJobData}
              setAddJobData={setAddJobData}
              screeningRequired={screeningRequired}
              setScreeningRequired={setScreeningRequired}
              vettingCheck={vettingCheck}
            />
          )}

          {tabList["Submittal Details"] && (
            <SubmittalDetailsInfo
              addJobData={addJobData}
              weightage={addJobData.weightage}
              setWeightage={(data) =>
                setAddJobData({ ...addJobData, weightage: data })
              }
            />
          )}

          {/* DOCUMENT TAB */}
          {Documents && (
            <UploadDocumentNew
              documents={documents}
              setDocuments={setDocuments}
              edit={edit}
              editJobData={editJobData}
              setLoading={setLoading}
            />
          )}

          {/* NOTES TAB */}
          {Notes && (
            <NotesComponent
              notesDetails={notesDetails}
              notesValue={notesValue}
              setNotesValue={setNotesValue}
              setNotesDetails={setNotesDetails}
            />
          )}

          {Notes && <hr />}

          {/* SAVE TEMPLATE */}
          {!edit && !(addTemplate || editTemplate) && Notes && (
            <div className="m-3">
              <div className="form-check form-switch d-flex align-items-center">
                <label className="form-check-label pt-0">
                  Do you want to save this job as a Template for future use?
                </label>
                <input
                  className="form-check-input ml-2"
                  type="checkbox"
                  checked={saveTemplate}
                  onChange={(e) => {
                    setSaveTemplate(e.target.checked);
                    setOverWrite(false);
                    setTemplateName("");
                  }}
                />
              </div>
              {saveTemplate && (
                <div className="card card-flat bg-gray4 m-3">
                  <div className="card-body">
                    <div className="row font-14">
                      <div className="col-lg-7">
                        <div className="form-floating">
                          <input
                            type="text"
                            className={
                              addJobVal.template
                                ? "form-control border border-danger"
                                : "form-control"
                            }
                            name="Template"
                            placeholder="Enter a job title"
                            onChange={(e) => {
                              if (addJobVal.template) {
                                setAddJobVal({ ...addJobVal, template: "" });
                              }
                              setTemplateName(e.target.value);
                              setOverWrite(false);
                            }}
                            value={templateName}
                          />
                          <label>Template Name*</label>
                          <small className="validation ml-2">
                            {addJobVal.template}
                          </small>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="form-floating ml-1">
                          <select
                            className="form-select"
                            onChange={(e) =>
                              setTemplateCategory(e.target.value)
                            }
                          >
                            <option disabled>Select</option>
                            {skillSetOption
                              .map((i) => i.value)
                              .map((item) => (
                                <option
                                  selected={item === templateCategory}
                                  value={item}
                                >
                                  {item}
                                </option>
                              ))}
                          </select>
                          <label>Template Category</label>
                        </div>
                      </div>
                    </div>
                    {!overWrite &&
                      templateDetails.templateType === "User" &&
                      addJobVal.template === "This name already exists" && (
                        <div>
                          <button
                            className="btn btn-sm mt-2"
                            onClick={() => {
                              if (addJobVal.template) {
                                setAddJobVal({ ...addJobVal, template: "" });
                              }
                              setOverWrite(true);
                            }}
                          >
                            Overwrite with existing Template
                          </button>
                        </div>
                      )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* FOOTER - Back, Next, Submit */}
          {templateSelected && addJobType.typeSelected && (
            <>
              <hr />
              <div className="d-flex align-items-center justify-content-end m-3">
                {/* BACK Button */}
                {!tabList["Job Info"] && (
                  <button
                    className="btn btn-sm"
                    onClick={() => handleBackNext("Back")}
                  >
                    Back
                  </button>
                )}

                {/* NEXT Button */}
                {!Notes && (
                  <button
                    className="btn btn-sm btn-primary ml-2"
                    onClick={() => handleBackNext("Next")}
                  >
                    Next
                  </button>
                )}
                {/* CANCEL Button */}
                {Notes && (
                  <button
                    className="btn btn-sm btn-secondary ml-2"
                    onClick={closePanel}
                  >
                    Cancel
                  </button>
                )}

                {/* SUBMIT/UPDATE Button */}
                {Notes && (
                  <button
                    disabled={false}
                    className="btn btn-sm btn-primary ml-2"
                    onClick={() => console.log('')}
                  >
                    {(edit || editTemplate) ? "Update" : "Submit"}
                  </button>
                )}
              </div>
            </>
          )}
        </>
      }
      {showConfirmJobType && (
        <div className="bg-gray3">
          <Modal show={true}>
            <Modal.Body>
              <div className="text-center mt-2 px-2">
                <div className="avatar avatar-lg avatar-red2 mr-3">
                  <i class="fas fa-exclamation-triangle fa-fw"></i>
                </div>
                <p className="text-center lead mt-3">
                  Existing data will be erased on changing Job Type
                </p>
                <div class="text-center my-4">
                  <button
                    type="button"
                    className="btn btn-secondary mr-3"
                    onClick={() => {
                      setShowConfirmJobType(false);
                      setJobType("");
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      console.log(addJobData);
                      console.log(initialJobData);
                      // setAddJobData(initialJobData)
                      onTypeClick(jobType, initialJobData);
                      setShowConfirmJobType(false);
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      )}

      {showFilter && (
        <OutsideClickHandler onOutsideClick={() => setShowFilter(false)}>
          {/* <FilterJobs
            requestTitles={requestTitles}
            requestTypes={requestTypes}
            selectedTitles={selectedTitles}
            selectedTypes={selectedTypes}
            applyFilter={applyFilter}
            jobData={jobListData}
          /> */}
        </OutsideClickHandler>
      )}

    </>
  );
}

export default AddJob;
