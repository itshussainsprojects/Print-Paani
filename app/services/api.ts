export const api = {
  // ... other api methods ...

  saveDesign: async (designData: any) => {
    try {
      // Save to MongoDB through our backend API
      const response = await fetch('http://localhost:5000/api/designs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(designData),
      });
      
      const mongoData = await response.json();

      // Save to Firebase
      const firebaseResponse = await fetch('/api/save-design', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(designData),
      });

      const firebaseData = await firebaseResponse.json();

      return {
        success: mongoData.success && firebaseData.success,
        data: mongoData.data,
        message: mongoData.message
      };
    } catch (error) {
      console.error('Error saving design:', error);
      return {
        success: false,
        message: 'Failed to save design'
      };
    }
  }
}; 