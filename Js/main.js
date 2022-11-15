//Import File
// import * as Student from "./student.js";
import * as pustStudent from "./StudentgetData.js";
import * as listStudent from "./listStudent.js";
import * as Student from "./student.js";
const list = new listStudent.ListStudent();
//Rush JS
const getQueryValue = (get) => {
    let index = document.querySelector(get).value;
    return index;
}
//Code Main
const fetchStudent = () => {
    axios({
        url: "http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien",
        method: "GET",
    }).then((res) => {
        list.fixStudent(res.data);
        const listRender = list.renderStudent(list.listStudent);
        document.getElementById("list_infoStudent").innerHTML = listRender;
    }).catch((err) => {
        console.log(err);
    });
};
const addStudent = () => {
    let id = getQueryValue("#idStudent");
    let name = getQueryValue("#nameStudent");
    let phone = getQueryValue("#phoneStudent");
    let email = getQueryValue("#emailStudent");
    let math = getQueryValue("#mathStudent");
    let physics = getQueryValue("#physicsStudent");
    let chemistry = getQueryValue("#chemistryStudent");
    let student = new pustStudent.StudentgetData(id,name,email,phone,id,math,physics,chemistry);
    axios({
        url: "http://svcy.myclass.vn/api/SinhVien/ThemSinhVien",
        method: "POST",
        data: student,
    }).then((res)=>{
        fetchStudent();
    }).catch((err) => {
        console.log(err);
    });
}
const removeStudent = (id) => {
    axios({
        url: `http://svcy.myclass.vn/api/SinhVien/XoaSinhVien/${id}`,
        method: 'DELETE',

    }).then((res) => { 
        console.log(res);
        fetchStudent();
    }).catch((err) => {
        console.log(err);
    });
}
const getStudent = (id) => {
    axios({
        url: `http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien/${id}`,
        method: `GET`,
    }).then((res) => {
        document.getElementById("button_addStudent").click();
        const student = list.updateStudent(res.data,id);
        document.getElementById("idStudent").value = student.id;
        document.getElementById("nameStudent").value = student.name;
        document.getElementById("phoneStudent").value = student.phone;
        document.getElementById("emailStudent").value = student.email;
        document.getElementById("mathStudent").value = student.math;
        document.getElementById("physicsStudent").value = student.physics;
        document.getElementById("chemistryStudent").value = student.chemistry;
        document.getElementById("idStudent").setAttribute("disabled",true);
    }).catch((err) => {
        console.log(err);
    });
}
const updateStudent = () => {
    let id = getQueryValue("#idStudent");
    let name = getQueryValue("#nameStudent");
    let phone = getQueryValue("#phoneStudent");
    let email = getQueryValue("#emailStudent");
    let math = getQueryValue("#mathStudent");
    let physics = getQueryValue("#physicsStudent");
    let chemistry = getQueryValue("#chemistryStudent");
    let student = new pustStudent.StudentgetData(id,name,email,phone,id,math,physics,chemistry);
    axios({
        url: "http://svcy.myclass.vn/api/SinhVien/CapNhatThongTinSinhVien",
        method: "PUT",
        data: student,
    }).then((res)=>{
        console.log(student);
        list.setStudent(student);
        const listRender = list.renderStudent(list.listStudent);
        document.getElementById("list_infoStudent").innerHTML = '';
        document.getElementById("list_infoStudent").innerHTML = listRender;
    }).catch((err) => {
        console.log(err);
    });
}

fetchStudent();
window.getStudent = getStudent;
window.addStudent = addStudent;
window.removeStudent = removeStudent;
window.updateStudent = updateStudent;