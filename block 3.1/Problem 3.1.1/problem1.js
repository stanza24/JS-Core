function arrayToCsv(data) {
  try {
    const csvRows = data
      .map((row) => {
        return row
          .map((value) => {
            if (typeof value !== "string" && typeof value !== "number") {
              throw new Error("Unexpected value");
            }

            if (/[,"\n]/.test(value)) {
              return `"${value.toString().replace(/"/g, '""')}"`;
            }

            return value;
          })
          .join(",");
      })
      .join("\n");

    return csvRows;
  } catch (error) {
    throw error;
  }
}

export { arrayToCsv };
