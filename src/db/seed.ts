import { prisma } from "../lib/prisma";

export const seedStudent = async () => {
  const students = [
    { name: "Rahim Uddin" },
    { name: "Karim Hasan" },
    { name: "Nusrat Jahan" },
    { name: "Tanvir Ahmed" },
    { name: "Sadman Sakib" },
    { name: "Mim Akter" },
    { name: "Fahim Rahman" },
    { name: "Jannatul Ferdous" },
    { name: "Rifat Hossain" },
    { name: "Arif Khan" },
    { name: "Shila Akter" },
    { name: "Mahmudul Hasan" },
    { name: "Sadia Islam" },
    { name: "Imran Chowdhury" },
    { name: "Tania Sultana" },
  ];

  const studentExist = await prisma.student.count();

  if (studentExist === 0) {
    await prisma.student.createMany({
      data: students,
      skipDuplicates: true,
    });

    console.log("Students inserted ✅");
  }
};
