// Common issues in form submissions:
- Check if your API endpoints are correctly configured
- Verify MongoDB connection string
- Ensure proper error handling
- Validate form data before submission

// Example of proper form submission:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit');
    }
    
    // Handle success
  } catch (error) {
    // Handle error
  }
}; 