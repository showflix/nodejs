const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const token = '5667861898:AAGx1IPp4FjbvWOvzDjzXW8ukoQ3YxlS6qY';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    // Check if the message contains a forwarded document
    if (msg.forward_from && msg.document) {
        const fileId = msg.document.file_id;
        const fileUniqueId = msg.document.file_unique_id;
        const fileName = msg.document.file_name;
        const fileSize = msg.document.file_size;
        const mimeType = msg.document.mime_type;

        try {
            // Reply to the user with file details
            await bot.sendMessage(chatId, `Forwarded File Details:\n\n` +
                `File ID: ${fileId}\n` +
                `File Unique ID: ${fileUniqueId}\n` +
                `File Name: ${fileName}\n` +
                `File Size: ${fileSize} bytes\n` +
                `MIME Type: ${mimeType}`);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }
});
