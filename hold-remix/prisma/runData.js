const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function createDataBase() {
  await Promise.all(
    allFields().map((gnData) => {
      return db.user.create({ data: gnData });
    })
  );
}

createDataBase();
function allFields() {
  return [
    { subject: "newOneSbj", description: "this one Description" },
    { subject: "newTwoSbj", description: "this two Description" },
    { subject: "newThreeSbj", description: "this three Description" },
    { subject: "newFourSbj", description: "this four Description" },
  ];
}
