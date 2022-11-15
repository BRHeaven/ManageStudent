import * as Student from "./student.js";
class ListStudent {
    constructor() {
        this.listStudent = [];
    }
    addStudent(student) {
        this.listStudent.push(student);
    }
    fixStudent(listStudent) {
        for (let index of listStudent) {
            const student = new Student.Student(index.MaSV, index.HoTen, index.Email, index.SoDT, index.DiemToan, index.DiemLy, index.DiemHoa);
            this.listStudent.push(student);
        }   
        return listStudent;
    }
    renderStudent(listStudent) {
        let render = "";
        for (let student of listStudent) {
            render += `
        <tr class="info">
            <td> ${student.id} </td>
            <td> ${student.name} </td>
            <td> ${student.email} </td>
            <td> ${student.phone} </td>
            <td> ${student.math} </td>
            <td> ${student.physics} </td>
            <td> ${student.chemistry} </td>
            <td class="edit">
                <button class="removeStudent" onclick="removeStudent(${student.id})">remove</button>
                <button class="updateStudent" onclick="getStudent(${student.id})" >update</button>
            </td>
        </tr>`
        }
        return render;
    }
    updateStudent(listData, id) {
        for ( let student of listData ) {
            if (student.MaSV == id) {
                const data = new Student.Student(student.MaSV, student.HoTen, student.Email, student.SoDT, student.DiemToan, student.DiemLy, student.DiemHoa);
                return data;
            }
        }
        return null;
    }
    setStudent(person) {
        for ( let index of this.listStudent ) {
            if (index.id == person.MaSV) {
                index.id = person.MaSV;
                index.name = person.HoTen;
                index.phone = person.SoDT;
                index.email = person.Email;
                index.math = person.DiemToan;
                index.physics = person.DiemLy;
                index.chemistry = person.DiemHoa;
            }
        }
        return this.listStudent;
    }
}

export { ListStudent };