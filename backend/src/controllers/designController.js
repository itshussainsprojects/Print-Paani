const Design = require('../models/Design');

exports.createDesign = async (req, res) => {
  try {
    const design = new Design(req.body);
    await design.save();
    res.status(201).json({
      success: true,
      message: 'Design saved successfully',
      data: design
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error saving design',
      error: error.message
    });
  }
};

exports.getDesigns = async (req, res) => {
  try {
    const designs = await Design.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: designs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching designs',
      error: error.message
    });
  }
};

exports.getDesignsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const designs = await Design.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: designs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching user designs',
      error: error.message
    });
  }
};

exports.updateDesignStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const design = await Design.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!design) {
      return res.status(404).json({
        success: false,
        message: 'Design not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Design status updated successfully',
      data: design
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating design status',
      error: error.message
    });
  }
};

exports.submitDesign = async (req, res) => {
  try {
    console.log('Received design submission:', req.body);
    
    const design = new Design({
      userId: req.body.userId,
      bottleColor: req.body.bottleColor,
      capColor: req.body.capColor,
      labelText: req.body.labelText,
      textColor: req.body.textColor,
      fontSize: req.body.fontSize,
      logoImage: req.body.logoImage,
      bottleSize: req.body.bottleSize,
      status: 'pending'
    });

    console.log('Creating design document:', design);
    
    const savedDesign = await design.save();
    console.log('Design saved successfully:', savedDesign);

    res.status(201).json({
      success: true,
      data: savedDesign
    });
  } catch (error) {
    console.error('Error saving design:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to save design',
      error: error.message
    });
  }
}; 