students = [{
    name: "Ram", section: "A",
    marks: { tamil: 100, english: 78, maths: 63, science: 70, social: 89 }
},
{
    name: "Som", section: "B",
    marks: { tamil: 48, english: 40, maths: 33, science: 30, social: 59 }
},
{
    name: "Kumar", section: "A",
    marks: { tamil: 88, english: 75, maths: 81, science: 95, social: 90 }
},
{
    name: "Ahile", section: "A",
    marks: { tamil: 92, english: 86, maths: 91, science: 95, social: 100 }
},
{
    name: "Rajesh", section: "B",
    marks: { tamil: 58, english: 68, maths: 45, science: 61, social: 78 }
}]

const sectionAStudents = students.filter((student) => student.section === "A");
console.log("Section A students details:", sectionAStudents);