const user = [
  {
    resourceType : "Patient",
    id : "xcda",
    text : {
      status : "generated",
       div : "\n      \n      <p>Henry Levin the 7th</>\n    \n    </div>"
    },
    identifier : [
      {
        use : "usual",
        type : {
        coding : [
          {
            system : "htt://hl7.org/fhir/v2/0203",
            code : "MR"
          }
        ]
      },
      system : "urn:oid:2.16.840.1.113883.19.5",
      value : "12345"
      }
    ],
    active : true,
    name : [
      {
        family : "Levin",
        given : "Henry"
      }
    ],
    gender : "Male",
    birthDate : "2002-09-24",
    managingOrganization : [
      {
        reference : "Organization/2.16.840.1.113883.19.5",
        display : "University Health Network"
      }
    ],    
    conditions: ["Diabetes","High blood pressure","Asthma"]
  }
];

function patientConditions(conditions) {
  return `
    <p><strong>List of Conditions:</strong></p>
    <ul class="conditions-list">
      ${conditions.map(function(condition) {
        return `<li>${condition}</li>`
    }).join('')}</>
    </ul>
  `
}

function patientTemplate(patient) {
  return `
  <div class="patient-info">
    <h3><strong>Patient:</strong> ${patient.name[0].family}, ${patient.name[0].given}</h3>
    <p><strong>Full Name of Patient:</strong> ${patient.name[0].given} ${patient.name[0].family}
    <p><strong>Date of Birth:</strong> ${patient.birthDate}
    <p><strong>Gender:</strong> ${patient.gender}
    <p><strong>Organization Name:</strong> ${patient.managingOrganization[0].display}
    <p><strong>Number of Conditions:</strong> ${patient.conditions.length}
    ${patient.conditions ? patientConditions(patient.conditions) : ''}
  </div>
  `
}

document.getElementById("app").innerHTML = `
  <h1 class="title"> Patient Information </h1>
  ${user.map(patientTemplate).join('')}
  <p class="footer"> For information on another patient please look up their name. </p>
`

