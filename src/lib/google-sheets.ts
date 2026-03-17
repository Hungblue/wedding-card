import { google } from 'googleapis';
import { Wish } from '@/types';
import { generateId } from '@/lib/utils';

function getSheets() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return google.sheets({ version: 'v4', auth });
}

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;
const RANGE = 'Sheet1!A:D';

export async function getWishes(): Promise<Wish[]> {
  const sheets = getSheets();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: RANGE,
  });

  const rows = response.data.values;
  if (!rows || rows.length <= 1) return [];

  // Skip header row (row 0)
  return rows
    .slice(1)
    .map((row) => ({
      id: row[0] || '',
      name: row[1] || '',
      message: row[2] || '',
      timestamp: Number(row[3]) || 0,
    }))
    .filter((w) => w.name && w.message)
    .sort((a, b) => b.timestamp - a.timestamp);
}

export async function addWish(name: string, message: string): Promise<Wish> {
  const sheets = getSheets();
  const wish: Wish = {
    id: generateId(),
    name,
    message,
    timestamp: Date.now(),
  };

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: RANGE,
    valueInputOption: 'RAW',
    requestBody: {
      values: [[wish.id, wish.name, wish.message, wish.timestamp]],
    },
  });

  return wish;
}
