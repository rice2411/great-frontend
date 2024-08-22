let _page = 1;
let _pageSize = 5;
let _totalPages = 0
const users = [
    {
        "id": 1,
        "name": "Emily Chen",
        "age": 28,
        "occupation": "Software Engineer"
    },
    {
        "id": 2,
        "name": "Ryan Thompson",
        "age": 32,
        "occupation": "Marketing Manager"
    },
    {
        "id": 3,
        "name": "Sophia Patel",
        "age": 25,
        "occupation": "Data Analyst"
    },
    {
        "id": 4,
        "name": "Michael Lee",
        "age": 41,
        "occupation": "CEO"
    },
    {
        "id": 5,
        "name": "Olivia Brown",
        "age": 29,
        "occupation": "Graphic Designer"
    },
    {
        "id": 6,
        "name": "Alexander Hall",
        "age": 38,
        "occupation": "Sales Representative"
    },
    {
        "id": 7,
        "name": "Isabella Davis",
        "age": 26,
        "occupation": "Teacher"
    },
    {
        "id": 8,
        "name": "Ethan White",
        "age": 35,
        "occupation": "Lawyer"
    },
    {
        "id": 9,
        "name": "Lily Tran",
        "age": 30,
        "occupation": "Nurse"
    },
    {
        "id": 10,
        "name": "Julian Sanchez",
        "age": 39,
        "occupation": "Engineer"
    },
    {
        "id": 11,
        "name": "Ava Martin",
        "age": 27,
        "occupation": "Journalist"
    },
    {
        "id": 12,
        "name": "Benjamin Walker",
        "age": 42,
        "occupation": "Doctor"
    },
    {
        "id": 13,
        "name": "Charlotte Brooks",
        "age": 31,
        "occupation": "HR Manager"
    },
    {
        "id": 14,
        "name": "Gabriel Harris",
        "age": 36,
        "occupation": "IT Consultant"
    },
    {
        "id": 15,
        "name": "Hannah Taylor",
        "age": 24,
        "occupation": "Student"
    },
    {
        "id": 16,
        "name": "Jackson Brown",
        "age": 40,
        "occupation": "Business Owner"
    },
    {
        "id": 17,
        "name": "Kayla Lewis",
        "age": 33,
        "occupation": "Event Planner"
    },
    {
        "id": 18,
        "name": "Logan Mitchell",
        "age": 37,
        "occupation": "Architect"
    },
    {
        "id": 19,
        "name": "Mia Garcia",
        "age": 29,
        "occupation": "Artist"
    },
    {
        "id": 20,
        "name": "Natalie Hall",
        "age": 34,
        "occupation": "Teacher"
    },
    {
        "id": 21,
        "name": "Oliver Patel",
        "age": 38,
        "occupation": "Software Developer"
    },
    {
        "id": 22,
        "name": "Penelope Martin",
        "age": 26,
        "occupation": "Writer"
    },
    {
        "id": 23,
        "name": "Quinn Lee",
        "age": 35,
        "occupation": "Entrepreneur"
    },
    {
        "id": 24,
        "name": "Rachel Kim",
        "age": 30,
        "occupation": "Dentist"
    },
    {
        "id": 25,
        "name": "Samuel Jackson",
        "age": 42,
        "occupation": "Lawyer"
    },
    {
        "id": 26,
        "name": "Tessa Hall",
        "age": 28,
        "occupation": "Graphic Designer"
    },
    {
        "id": 27,
        "name": "Uma Patel",
        "age": 39,
        "occupation": "Marketing Manager"
    },
    {
        "id": 28,
        "name": "Vincent Brooks",
        "age": 36,
        "occupation": "IT Consultant"
    },
    {
        "id": 29,
        "name": "Walter White",
        "age": 41,
        "occupation": "Engineer"
    },
    {
        "id": 30,
        "name": "Xavier Sanchez",
        "age": 33,
        "occupation": "Sales Representative"
    },
    {
        "id": 31,
        "name": "Yvonne Martin",
        "age": 29,
        "occupation": "Teacher"
    },
    {
        "id": 32,
        "name": "Zoe Lee",
        "age": 27,
        "occupation": "Data Analyst"
    },
    {
        "id": 33,
        "name": "Abigail Brown",
        "age": 34,
        "occupation": "Nurse"
    },
    {
        "id": 34,
        "name": "Caleb Harris",
        "age": 38,
        "occupation": "Business Owner"
    },
    {
        "id": 35,
        "name": "Diana Taylor",
        "age": 31,
        "occupation": "Event Planner"
    },
    {
        "id": 36,
        "name": "Eleanor Walker",
        "age": 40,
        "occupation": "CEO"
    }
]

const columns = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
    { label: 'Occupation', key: 'occupation' },
]


function drawColumns() {
    const headers = document.querySelectorAll('table thead tr')[0];
    let result = '';
    columns.forEach((col) => {
        result += `<th id=${col.id}>${col.label}</th>`
    })
    headers.innerHTML = result
}

function drawOptions() {
    const select = document.querySelectorAll('select')[0]
    let result = ''
    const options = [5, 10, 20]
    options.forEach((item) => {
        result += `<option key=${item} value=${item}>
              Show ${item}
            </option>`
    })
    select.innerHTML = result
    select.onchange = function (e) {
        _pageSize = parseInt(e.target.value)
        drawPagination()
    }
}

function drawUsers(users) {
    const body = document.querySelectorAll('table tbody')[0];
    let result = ''
    users.forEach((user) => {
        result += `<tr key=${user.id}>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.occupation}</td>
            </tr>`
    })
    body.innerHTML = result;
}

function drawButton() {
    const buttons = document.querySelectorAll('button')
    buttons[0].disabled = _page === 1
    buttons[1].disabled = _page === _totalPages
    buttons[0].onclick = function () {
        _page--;
        drawButton()
        drawPagination()
    }
    buttons[1].onclick = function () {
        _page++;
        drawButton()
        drawPagination()
    }
}

function drawPagination() {
    const { totalPages, pageUsers } = paginateUsers(
        users,
        _page,
        _pageSize,
    );
    const span = document.querySelectorAll('span')[0];
    span.innerHTML = `Page ${_page} of ${totalPages}`
    _totalPages = totalPages
    drawUsers(pageUsers)
}

function paginateUsers(
    usersList,
    page,
    pageSize
) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    const pageUsers = usersList.slice(start, end);
    const totalPages = Math.ceil(usersList.length / pageSize);
    return { pageUsers, totalPages };
}

function load() {
    drawColumns()
    drawOptions()
    drawButton()
    drawPagination()
}

load()