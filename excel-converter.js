import mimetype from 'mimetype';
import xlsx2json from 'xlsx2json';
import fs from 'fs/promises';
import sanitizeFilename from 'sanitize-filename';
import { v4 as uuidv4 } from 'uuid';

async function convertExcelToJson(fileBuffer) {
  try {
    // Create a temporary file
    const tempFilePath = `temp_${uuidv4()}.xlsx`;
    await fs.writeFile(tempFilePath, fileBuffer);

    // Validate file type using mimetype
    const fileMime = mimetype.lookup(tempFilePath);

    if (!fileMime || !['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(fileMime)) {
      throw new Error('Invalid file type. Please upload a valid Excel file.');
    }

    // Sanitize and validate file name
    const originalFileName = 'uploaded_file'; // You can customize this
    const sanitizedFileName = sanitizeFilename(originalFileName);

    // Generate a unique file name
    const uniqueFileName = `${uuidv4()}_${sanitizedFileName}.json`;

    // Convert Excel to JSON
    const jsonData = await xlsx2json(tempFilePath);

    // Write JSON data to file
    const jsonFilePath = `uploads/datasets/${uniqueFileName}`;
    await fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2));

    // Remove the temporary file
    await fs.unlink(tempFilePath);

    return { success: true, filePath: jsonFilePath };
  } catch (error) {
    console.error('Error converting Excel to JSON:', error);
    throw error;
  }
}

export default convertExcelToJson;