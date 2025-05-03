const ChatUser = require('../models/ChatUser');

exports.createOrUpdateChatUser = async (req, res) => {
  try {
    const { conversationId, name, email, phone } = req.body;
    
    const chatUser = await ChatUser.findOneAndUpdate(
      { conversationId },
      {
        name,
        email,
        phone,
        lastUpdated: new Date()
      },
      { new: true, upsert: true }
    );

    res.status(200).json({
      success: true,
      message: 'Chat user updated successfully',
      data: chatUser
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating chat user',
      error: error.message
    });
  }
};

exports.getChatUser = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const chatUser = await ChatUser.findOne({ conversationId });

    if (!chatUser) {
      return res.status(404).json({
        success: false,
        message: 'Chat user not found'
      });
    }

    res.status(200).json({
      success: true,
      data: chatUser
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching chat user',
      error: error.message
    });
  }
}; 