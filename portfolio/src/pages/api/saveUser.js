import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const filePath = path.join(process.cwd(), 'public', 'users.json');
    const users = req.body;

    try {
      fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
      res.status(200).json({ message: 'User saved successfully' });
    } catch (error) {
      console.error('Error saving user:', error);
      res.status(500).json({ message: 'Error saving user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
