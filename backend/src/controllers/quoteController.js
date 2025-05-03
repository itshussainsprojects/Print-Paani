const Quote = require('../models/Quote');

exports.createQuote = async (req, res) => {
  try {
    const quote = new Quote(req.body);
    await quote.save();
    res.status(201).json({
      success: true,
      message: 'Quote request submitted successfully',
      data: quote
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error submitting quote request',
      error: error.message
    });
  }
};

exports.getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: quotes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching quotes',
      error: error.message
    });
  }
};

exports.updateQuoteStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const quote = await Quote.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!quote) {
      return res.status(404).json({
        success: false,
        message: 'Quote not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Quote status updated successfully',
      data: quote
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating quote status',
      error: error.message
    });
  }
}; 