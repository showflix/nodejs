const TelegramBot = require('node-telegram-bot-api');

// Replace with your actual Telegram bot token
const token = '5667861898:AAGx1IPp4FjbvWOvzDjzXW8ukoQ3YxlS6qY';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    // Check if message contains a document (file)
    if (msg.document) {
        const fileId = msg.document.file_id;
        console.log(`Received file with file_id: ${fileId}`);

        // Now you can use fileId to fetch file details or download the file
        // For example:
        try {
            const fileDetails = await bot.getFile(fileId);
            console.log('File details:', fileDetails);
            // Perform further operations with fileDetails
        } catch (error) {
            console.error('Error fetching file details:', error);
        }
    }
});
