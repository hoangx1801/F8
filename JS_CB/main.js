// ======================================Bài tập====================================== //
// Recursion Đệ quy

// ======================================Bài tập====================================== //
// Flat - làm phẳng mảng từ Depth Array
// var array = [1, 2, [3, 4], 5, [6, 7 , 8], 9, 10];

// var flatArray = array.reduce(function (array, number) {
//     return array.concat(number);
// }, []);

// console.log(flatArray);

// ======================================Bài tập====================================== //
// Lấy ra các phần tử đưa vào mảng mới
// var topics = [
//     {
//         topic: 'Frontend',
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML CSS"
//             },
//             {
//                 id: 2,
//                 title: "Javascript"
//             }
//         ],
//         topic: 'Backend',
//         courses: [
//             {
//                 id: 1,
//                 title: "NodeJS"
//             },
//             {
//                 id: 2,
//                 title: "PostgreSQL"
//             }
//         ]
//     }
// ]

// var newCourses = topics.reduce(function (course, topic) {
//     return course.concat(topic.courses)
// }, []);

// console.log(newCourses);

// var htmls = newCourses.map(function() {
//     return `
//         <div>
//             <h2>${courses.title}</h2>
//             <p>${courses.id}</p>
//         </div>`
// });

// console.log(html.join(''));

// ======================================Bài tập====================================== //
// Tính tổng - Tạo prototype reduce, map
// const numbers = [1, 2, 3, 4, 5];

// Array.prototype.reduce2 = function(callback, result) {
//     let i = 0;

//     if (arguments.length < 2) {
//         i = 1;
//         result = this[0];
//     }
//     for (; i < this.length; i++) {
//         result = callback(result, this[i], i, this);
//     }

//     return result;
// }

// var total = numbers.reduce2(function(total, number) {
//     return total + number;
// });

// console.log(total);

// ======================================Bài tập====================================== //
// Tạo tag trong html - Tạo prototype map
// Array.prototype.map2 = function(callback) {
//     let i = 0;
//     var arrayLength = this.length, output = [];
    
//     for (; i < arrayLength; i++) {
//         var result = callback(this[i], i);
//         output.push(result);
//     }

//     return output;
// }

// var courses = [
//     'Java',
//     'PHP',
//     'Ruby',
//     'Javascript'
// ]

// var htmls = courses.map2(function(course) {
//     return `<h2>${course}</h2>`;
// })

// console.log(htmls.join(''));

// ======================================Bài tập====================================== //
// Tạo prototype forEach - Duyệt qua các phần tử và gọi ra
// Array.prototype.forEach2 = function(callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callback(this[index], index, this)
//         }
//     }
// }

// var courses = [
//     {
//         id: 1,
//         course: 'Java',
//         coin: 200
//     },
//     {
//         id: 2,
//         course: 'Javascript',
//         coin: 100
//     },
//     {
//         id: 3,
//         course: 'GoLang',
//         coin: 0
//     },
//     {
//         id: 4,
//         course: 'NodeJS',
//         coin: 400
//     }
// ]

// courses.forEach2(function(course, index, array) {
//     console.log(index ,course, array);
// });

// ======================================Bài tập====================================== //
// Tạo prototype some - Kiểm tra tối thiểu 1 phần tử thỏađiều kiện và trả về kết quả true / false
// Array.prototype.some2 = function(callback) {

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (callback(this[index], index, this)) {
//                 return true;
//             }
//         }
//     }

//     return false;
// }

// var courses = [
//     {
//         id: 1,
//         course: 'Java',
//         isFinish: true
//     },
//     {
//         id: 2,
//         course: 'Javascript',
//         isFinish: true
//     },
//     {
//         id: 3,
//         course: 'GoLang',
//         isFinish: false
//     },
//     {
//         id: 4,
//         course: 'NodeJS',
//         isFinish: true
//     }
// ]

// var result = courses.some(function(course, index, array) {
//     return course.isFinish;
// })

// console.log(result);

// ======================================Bài tập====================================== //
// Tạo prototype every - Kiểm tra tất cả phần tử phải thỏa thỏa điều kiện và trả về kết quả true / false
// Array.prototype.every2 = function(callback) {
//     var output = true;

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if (!result) {
//                 output = false;
//                 break;
//             }
//         }
//     }

//     return output;
// }

// var courses = [
//     {
//         id: 1,
//         course: 'Java',
//         coin: 200
//     },
//     {
//         id: 2,
//         course: 'Javascript',
//         coin: 100
//     },
//     {
//         id: 3,
//         course: 'GoLang',
//         coin: 0
//     },
//     {
//         id: 4,
//         course: 'NodeJS',
//         coin: 400
//     }
// ]

// var result = courses.every2(function(course, index) {
//     return course.coin >= 0;
// })

// console.log(result);

// ======================================Bài tập====================================== //
// Tạo prototype filter - Kiểm tra điều kiện và lọc trả về array mới thỏa điều kiện

// Array.prototype.filter2 = function(callback) {
//     var output = [];

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this);
//             if (result) {
//                 output.push(this[index]);
//             }
//         }
//     }

//     return output;
// }

// var courses = [
//     {
//         id: 1,
//         course: 'Java',
//         coin: 200
//     },
//     {
//         id: 2,
//         course: 'Javascript',
//         coin: 200
//     },
//     {
//         id: 3,
//         course: 'GoLang',
//         coin: 0
//     },
//     {
//         id: 4,
//         course: 'NodeJS',
//         coin: 400
//     }
// ]

// var filterCourse = courses.filter2(function(course, index) {
//     return course.coin > 0;
// });

// console.log(filterCourse);

// ======================================Bài tập====================================== //
//preventDefault()
// var aElements = document.links;
// console.log(aElements);
// for (var i = 0; i < aElements.length; ++i) {
//     aElements[i].onclick = function(e) {
//         if (e.target.href.startsWith("https://fullstack.edu.vn/")) {
//             e.preventDefault();
//         }
//     }
// }
// var ulElement = document.querySelector('ul');
// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }

// ulElement.onclick = function(e) {
//     console.log(e.target);
// }
//stopPropagation()
// document.querySelector('div').onclick = function() {
//     console.log('div');
// }

// document.querySelector('button').onclick = function(e) {
//     e.stopPropagation();
//     console.log('Click me!');
// }

//remove/addEventlistener
// var btn = document.querySelector('button');
// function viec1() {
//     console.log('viec 1')
// }
// function viec2() {
//     console.log('viec 2')
// }
// btn.addEventListener('click', viec1);
// btn.addEventListener('click', viec2);

// setTimeout(function() {
//     btn.removeEventListener('click', viec1);
// }, 3000)

// ======================================Bài tập====================================== //
//promise
// khởi tạo promise => tạo executor (function)
// var promise = new Promise(
//     function(resolve, reject) {
//         //Thành công: resolve();
//         //Thất bại: reject();
//         resolve();
//     }
// );

// promise
//     .then(function() {
//         return new Promise(function(resolve){
//             setTimeout(function() {
//                 resolve([1, 2, 3]);
//             }, 3000);
//         })
//     })
//     .then(function(data) {
//         console.log(data)
//     })
//     .catch(function(error) {
//         console.log(error)
//     })
//     .finally(function() {
//         console.log('Done!')        
//     });

// function sleep(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// sleep(1000)
//     .then(function() {
//         console.log(1);
//     })
//     .then(function() {
//         console.log(2);
//     })
//     .then(function() {
//         console.log(3);
//     })
//     .finally(function() {
//         console.log('Done!');
//     });

// Object.assign(object.style, {
//     width: '200px',
//     height: '100px',
//     backgroundColor: 'green',
// })

// ======================================Bài tập====================================== //
//promise
// var users = [
//     {
//         id: 1,
//         name: 'Van A'
//     },
//     {
//         id: 2,
//         name: 'Thi B'
//     },
//     {
//         id: 3,
//         name: 'Hoang C'
//     }
// ];
// var comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: 'comment 1'
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: 'comment 2'
//     },
//     {
//         id: 3,
//         user_id: 3,
//         content: 'comment 3'
//     }
// ];
// Lấy comment => user_id => user tương ứng
// Fake API
// function getComment() {
//     return new Promise(function(resolve) {
//         setTimeout(function(){
//             resolve(comments);
//         }, 1000)
//     })
// };
// getComment()
//     .then(function(comments) {
//         console.log(comments);
//     });

// ======================================Bài tập====================================== //
// Fetch
// var postApi = 'https://jsonplaceholder.typicode.com/posts';
// fetch(postApi)
//stream
    // .then(function(response) {
    //     return response.json(); // Nhận được Json => Javascript
    // })
    // .then(function(posts) {
    //     var htmls = posts.map(function(post) {
    //         return `<li>
    //             <h2>${post.title}</h2>
    //             <p>${post.body}</p>
    //         </li>`;
    //     });
    //     var html = htmls.join('');
    //     document.getElementById('post_block').innerHTML = html;
    // })
    // .catch(function(error) {
    //     console.log(error);
    // })
    
// ======================================ES6====================================== //
// ======================================Var, Let, Const====================================== //
// 1. Đều có thể khai báo
// 2. Phạm vi truy cập - Scope: let, const private trong code block / var có tính global
// var b = 'name b';
// {
//     const a = 'name';
//     function logger(log) {
//         console.log(log);
//     }
//     logger(a);
// }
// logger(b); // a is not defined
// 3. Hoisting: var (có thể khởi tạo trước khi khai báo)
// a = 3;
// var a;
// console.log(a);
// 4. Assignment: var, let (có thể sử dụng toán tử gán)
// let a = 3;
// a = 5;
// console.log(a);
// 5. Code thuần: var ; Code Babel: const, let
// ======================================Arrow Function====================================== //
// Expression Function:
// const logger = function(log) {
//     console.log(log);
// }
// logger('Message');
// Arrow Function:
// const sum = (a, b) => ({ a: a, b: b });
// console.log(sum(1, 2));
// const Course = {
//     name: 'Javascript',
//     getName: () => {  //(không dùng với this)
//         return this.name; // this == context
//     }
// }
// console.log(Course.getName());
// ======================================Template String====================================== //
// console.log(`line1
// line2`); //tự xuống dòng chứ không dùng /n
// const courseName = "Javascript";
// const coursePrice = 1000;
// const description = `${courseName}: ${coursePrice}`;
// console.log(description);
// ======================================Class====================================== //
// function Course(name, price) {
//     this.name = name,
//     this.price = price
// }
// class Course {
//     constructor(name, price) {
//         this.name = name,
//         this.price = price
//     }
//     getName() {
//         return this.name;
//     }
//     getPrice() {
//         return this.price;
//     }
// }
// const phpCourse = new Course('PHP', 2000);
// const cCourse = new Course('C', 1000);
// console.log(phpCourse);
// ======================================Enhanced object literals====================================== //
// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// var name = 'Java';
// var price = 2000;
// var course = {
//     name,
//     price,
//     getName() {
//         return this.name;
//     }
// };
// console.log(course.getName());
// 3. Định nghĩa key cho object dưới dụng biến
// var fieldName = 'new-name';
// var fieldPrice = 'price';
// const course = {
//     name: 'PHP',
//     [fieldName]: 'Java',
//     [fieldPrice]: 2000
// }
// console.log(course);
// ======================================Default parameter values====================================== //
// function logger(log = "Gia tri mac dinh", type = 'log') {
//     console[type](log);
// }
// logger('Message', 'warn');
// ======================================Destructuring: Rest====================================== //
// var array = ['Java', 'Ruby', 'React'];
// var [a, ...rest] = array;
// console.log(a);
// console.log(rest);
// var course = {
//     name: 'Javascript',
//     price: 1000,
//     img: 'image-address'
// }
// var {name, ...rest} = course;
// console.log(name);
// console.log(rest);
// truyền rest làm tham số của function thì trả về array
// function logger([a, b, ...rest]) {
//     console.log(a);
//     console.log(rest);
// }
// console.log(logger([1,2,3,4.5]));
// ======================================Spread====================================== //
//Nối mảng và object bằng spread
// var a = [1,2,3];
// var b = [4,5];
// var c = [...a, ...b]; 
// console.log(c);
// var obj1 = {
//     name: 'Javascript'
// }
// var obj2 = {
//     price: 10000
// }
// var course = {
//     ...obj1,
//     ...obj2
// }
// console.log(course);
// var default1 = {
//     api: 'http://google',
//     apiVersion: 'ver 1'
// }
// var obj = {
//     ...default1,
//     api: 'http://abs' //override
// }
// console.log(obj);
// Spread: Bỏ ngoặc
// var course = ['Javascript', 'PHP', 'Ruby'];
// function logger(a, b, c) {
//     console.log(a, b, c);
// }
// logger(...course);
// ======================================Tagged template literals (Xem lại)====================================== //
// function highlight([first, ...strings], ...values) {
//     return values.reduce(
//         (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift(), [first]]
//     ).join('');
// }
// var brand = 'F8';
// var course = 'Javascript'
// const html = highlight`Học lập trình ${course} tại ${brand}!`;
// console.log(html);
// ======================================Modules====================================== //
// import/export
// nếu không có destructuring {} [] thì sẽ là export default
// import * as constants from './logger.js';
// console.log(constants);
// import logger, {
//     TYPE_LOG,
//     TYPE_WARN,
//     TYPE_ERROR
// } from './logger.js';
// logger('Message', TYPE_LOG);
// ======================================Polyfill====================================== //
// Polyfill: Define prototype in case not support ES6
// if (!String.prototype.includes) {
//     String.prototype.includes = function(search, start) {
//         'use strict';
//         if (search instanceof RegExp) {
//             throw TypeError('First Argument must not be a RegExp');
//         }
//         if (start === undefined) {
//             start = 0;
//         }
//         return this.indexOf(search, start) !== -1;
//     }
// }
// console.log('Javascript course'.includes('Javascript'));
// ======================================Json server====================================== //
// var apiSource = 'http://localhost:3000/courses';
// fetch(apiSource)
//     .then((response) => response.json())
//     .then((courses) => console.log(courses))
// ======================================createElement====================================== //
// const h1 = document.createElement('h1');
// const root = document.getElementById('root');
// h1.innerText = 'Hello World!';
// h1.className = 'test abc'
// Object.assign(h1.style, {
//     color: 'green',
//     backgroundColor: '#333'
// })
// root.appendChild(h1);
// ======================================CRUD REST APIs====================================== //
const courseAPI = 'http://localhost:3000/courses';
function start() {
    getCourses(renderCourses);
    handleCreateCourses();
};
start();

function getCourses(callback) {
    fetch(courseAPI)
        .then(function(response) {
            return response.json()
        })    
        .then(callback)
}


function createCourses(data, callback) {
    var options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(data)
    }
    fetch(courseAPI, options)
        .then(function(response) {
            response.json()
        })
        .then(callback)
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', }
    }
    fetch(courseAPI + '/' + id, options)
        .then(function(response) {
            response.json()
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id)
            if (courseItem) {
                courseItem.remove();
            };
        })
}

function renderCourses(courses) {
    var listCourse = document.getElementById('list-courses');
    var htmls = courses.map(function (course) {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.title}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
            </li>
        `
    })
    listCourse.innerHTML = htmls.join('');
}

function handleCreateCourses() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        var title = document.querySelector('input[name="title"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            title: title,
            description: description
        }
        createCourses(formData, function() {
            getCourses(renderCourses);
        })
    }
}

// ======================================IIFE====================================== //
// Gọi liền thường dùng khi thiết kế lib, private
// const app = (function() {
//     const cars = []
//     return { 
//         get(index) {
//             return cars[index];
//         },
//         add(car) {
//             cars.push(car);
//         },
//         edit(car, index) {
//             cars[index] = car;
//         },
//         delete(index) {
//             cars.splice(index, 1);
//         }
//     }
// })();

// ======================================this & bind====================================== //
// Phương thức bind() cho phép ràng buộc this cho một phương thức function
// Phương thức bind() trả về hàm mới với context được bind
// Phương thức bind() vẵn có thể nhận đối số trong hàm gốc
// ============================================================================ //
// this.firstName = 'Nguyen'
// this.lastName = 'Thong'
// const teacher = {
//     firstName: 'Thanh',
//     lastName: 'Xuan',
//     getFullName() {
//         //console.log(data)
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }
// const student = {
//     firstName: 'Hoang',
//     lastName: 'My'
// }
// console.log(teacher.getFullName())
// const getTeacherName = teacher.getFullName;
// console.log(getTeacherName())
// const getStudentName = teacher.getFullName.bind(student, 'data');
// console.log(getStudentName('data 3'))
////////////////
// const button = document.querySelector('.button');
// button.onclick = teacher.getFullName.bind(teacher);
////////////////
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
// const app = (() => {
//     const cars = ['BWM']
//     const root = $('#root')
//     const input = $('#input')
//     const submit = $('#submit')
//     return {
//         add(car) {
//             cars.push(car)
//         },
//         delete(index) {
//             cars.splice(index, 1)
//         },
//         handleDelete(e) {
//             const deleteBtn = e.target.closest('.delete');
//             if (deleteBtn) {
//                 const index = deleteBtn.dataset.index;
//                 this.delete(index);
//                 this.render();
//             }
//         },
//         render() {
//             const html = cars.map((car, index) => `
//                 <li>${car}
//                     <span data-index="${index}" class="delete">&times<span>
//                 </li>
//             `)
//             .join('')
//             root.innerHTML = html;
//         },
//         init() {
//             submit.onclick = () => {
//                 const car = input.value;
//                 this.add(car);
//                 this.render();

//                 input.value = null;
//                 input.focus();
//             }

//             root.onclick = this.handleDelete.bind(this);

//             this.render();
//         }
//     }
// })();
// app.init();
// ======================================call====================================== //
// ======================================apply====================================== //
