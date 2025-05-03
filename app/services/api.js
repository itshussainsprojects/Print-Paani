const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
  // Quote API
  submitQuote: async (quoteData) => {
    const response = await fetch(`${API_BASE_URL}/quotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData),
    });
    return response.json();
  },

  // Contact API
  submitContact: async (contactData) => {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    return response.json();
  },

  // Design API
  saveDesign: async (designData) => {
    console.log('Sending design data:', designData);
    const response = await fetch(`${API_BASE_URL}/designs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(designData),
    });
    const data = await response.json();
    console.log('Design API response:', data);
    return data;
  },

  // Chat User API
  updateChatUser: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/chat-users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },
}; 