const { PrismaClient } = require("@prisma/client");
const fs = require("fs/promises");
const path = require("path");

const prisma = new PrismaClient();

const MODELS = ["Need", "Like", "Location", "User"];

async function exportDatabase() {
  try {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupDir = path.join(process.cwd(), "backups", timestamp);

    // Create backup directory
    await fs.mkdir(backupDir, { recursive: true });

    const backup = {};

    // Export data for each model
    for (const modelName of MODELS) {
      console.log(`Exporting ${modelName}...`);

      // Dynamically access the model using prisma[modelName]
      const data = await prisma[modelName].findMany();
      console.log({ data });
      backup[modelName] = data;

      // Save individual model data to separate JSON file
      const modelFilePath = path.join(backupDir, `${modelName}.json`);
      await fs.writeFile(modelFilePath, JSON.stringify(data, null, 2));

      console.log(`✓ Exported ${data.length} records from ${modelName}`);
    }

    // Save complete backup to single JSON file
    const fullBackupPath = path.join(backupDir, "full_backup.json");
    await fs.writeFile(fullBackupPath, JSON.stringify(backup, null, 2));

    console.log(`\nBackup completed successfully!`);
    console.log(`Backup location: ${backupDir}`);
  } catch (error) {
    console.error("Backup failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function exportToCSV() {
  try {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupDir = path.join(process.cwd(), "backups", timestamp, "csv");

    await fs.mkdir(backupDir, { recursive: true });

    for (const modelName of MODELS) {
      console.log(`Exporting ${modelName} to CSV...`);

      const data = await prisma[modelName].findMany();

      if (data.length > 0) {
        const headers = Object.keys(data[0]).join(",");
        const rows = data.map((item) =>
          Object.values(item)
            .map((value) => {
              if (value === null) return "";
              if (typeof value === "object")
                return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
              if (typeof value === "string")
                return `"${value.replace(/"/g, '""')}"`;
              return value;
            })
            .join(",")
        );

        const csv = [headers, ...rows].join("\n");
        const csvFilePath = path.join(backupDir, `${modelName}.csv`);

        await fs.writeFile(csvFilePath, csv);
        console.log(
          `✓ Exported ${data.length} records from ${modelName} to CSV`
        );
      } else {
        console.log(`- No records found for ${modelName}`);
      }
    }

    console.log(`\nCSV export completed successfully!`);
    console.log(`CSV location: ${backupDir}`);
  } catch (error) {
    console.error("CSV export failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function backupDatabase() {
  if (MODELS.length === 0) {
    console.error(
      "Please add your model names to the MODELS array at the top of the script"
    );
    return;
  }

  console.log("Starting database backup...");
  await exportDatabase();
  console.log("\nStarting CSV export...");
  await exportToCSV();
  console.log("\nAll exports completed!");
}

// Run the backup
backupDatabase();
