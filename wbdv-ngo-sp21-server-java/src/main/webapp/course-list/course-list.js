var $tableRows
var $createBtn
var $updateBtn

var $titleFld
var $sectionFld
var $seatsFld
var $semesterFld

var courseService = new CourseServiceClient()

var courses = [
  {title: "CS4550", section: "02", seats: 23, semester: "Spring"},
  {title: "CS2345", section: "03", seats: 34, semester: "Spring"},
  {title: "CS3456", section: "04", seats: 45, semester: "Spring"},
  {title: "CS5610", section: "05", seats: 56, semester: "Spring"},
  {title: "CS5200", section: "06", seats: 67, semester: "Spring"},
]

function deleteCourse(event) {
  var button = $(event.target)
  var index = button.attr("id")
  var id = courses[index]._id
  courseService.deleteCourse(id)
    .then(function (status) {
      courses.splice(index, 1)
      renderCourses(courses)
    })
}

function createCourse() {
  // alert("create course")
  var newCourse = {
    title: $titleFld.val(),
    section: $sectionFld.val(),
    seats: $seatsFld.val(),
    semester: $semesterFld.val()
  }

  courseService.createCourse(newCourse)
    .then(function (actualCourse) {
      courses.push(actualCourse)
      renderCourses(courses)
    })
}

var selectedCourse = null
function selectCourse(event) {
  var id = $(event.target).attr("id")
  console.log(id)
  selectedCourse = courses.find(course => course._id === id)
  $titleFld.val(selectedCourse.title)
  $seatsFld.val(selectedCourse.seats)
  $semesterFld.val(selectedCourse.semester)
}

function updateCourse() {
  selectedCourse.title = $titleFld.val()
  selectedCourse.semester = $semesterFld.val()
  selectedCourse.seats = $seatsFld.val()
  courseService.updateCourse(selectedCourse._id, selectedCourse)
    .then(status => {
      var index = courses.findIndex(course => course._id === selectedCourse._id)
      courses[index] = selectedCourse
      renderCourses(courses)
    })
}

function renderCourses(courses) {
  $tableRows.empty()
  for(var i=0; i<courses.length; i++) {
    var course = courses[i]
    $tableRows
      .prepend(`
      <tr>
          <td>${course.title}</td>
          <td>${course.section}</td>
          <td>${course.seats}</td>
          <td>${course.semester}</td>
          <td>
              <button id="${i}" class="neu-delete-btn">Delete</button>
              <button id="${course._id}" class="wbdv-select-btn">Select</button>
          </td>
      </tr>
      `)
  }
}

function main() {
  $tableRows = jQuery("#table-rows")
  $createBtn = $(".jga-create-btn")
  $updateBtn = $(".wbdv-update-btn")

  $titleFld = $(".wbdv-title-fld")
  $seatsFld = $(".wbdv-seats-fld")
  $sectionFld = $(".wbdv-section-fld")
  $semesterFld = $(".wbdv-semester-fld")

  $updateBtn.click(updateCourse)
  $createBtn.click(createCourse)
  courseService.findAllCourses().then(function (actualCourses) {
    courses = actualCourses
    renderCourses(courses)
    $(".neu-delete-btn").click(deleteCourse)
    $(".wbdv-select-btn").click(selectCourse)
  })
}
$(main)
