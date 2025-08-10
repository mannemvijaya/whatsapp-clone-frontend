import React, { useState, useEffect } from 'react';

const rawMessages = [
  {
    _id: "689842b4453a2465c46bfdb8",
    id: "wamid.HBgMOTE5OTY3NTc4NzIwFQIAEhggMTIzQURFRjEyMzQ1Njc4OTA=",
    from: "919937320320",
    text: { body: "Hi, I’d like to know more about your services." },
    timestamp: "1754400000",
    type: "text",
  },
  {
    _id: "689842b4453a2465c46bfdb9",
    id: "wamid.HBgMOTE5OTY3NTc4NzIwFQIAEhggNDc4NzZBQ0YxMjdCQ0VFOTk2NzA3MTI4RkZCNjYyMjc=",
    from: "918329446654",
    text: { body: "Hi Ravi! Sure, I’d be happy to help you with that. Could you tell me what you're looking for?" },
    timestamp: "1754400020",
    type: "text",
    status: "read",
  },
  {
    _id: "689842b4453a2465c46bfdba",
    id: "wamid.HBgMOTI5OTY3NjczODIwFQIAEhggQ0FBQkNERUYwMDFGRjEyMzQ1NkZGQTk5RTJCM0I2NzY=",
    from: "929967673820",
    text: { body: "Hi, I saw your ad. Can you share more details?" },
    timestamp: "1754401000",
    type: "text",
    status: "sent",
  },
  {
    _id: "689842b4453a2465c46bfdbb",
    id: "wamid.HBgMOTI5OTY3NjczODIwFQIAEhggM0RFNDkxRjEwNDhDQzgwMzk3NzA1ODc1RkU3QzI0MzU=",
    from: "918329446654",
    text: { body: "Hi Neha! Absolutely. We offer curated home decor pieces—are you looking for nameplates, wall art, or something else?" },
    timestamp: "1754401030",
    type: "text",
    status: "delivered",
  },
];

// Helper function to format timestamps safely
function formatTimestamp(ts) {
  // Convert to number
  const timestampNum = Number(ts);
  // Timestamps appear to be in seconds? Multiply by 1000 for milliseconds
  const date = new Date(timestampNum * 1000);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  return date.toLocaleString();
}

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [conversations, setConversations] = useState({});

  useEffect(() => {
    // Group messages by sender number
    const grouped = rawMessages.reduce((acc, message) => {
      if (!acc[message.from]) acc[message.from] = [];
      acc[message.from].push(message);
      return acc;
    }, {});
    setConversations(grouped);
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ width: '30%', borderRight: '1px solid #ddd', padding: 20, overflowY: 'auto' }}>
        <h2>Conversations</h2>
        {Object.keys(conversations).length === 0 && <p>No conversations</p>}
        {Object.entries(conversations).map(([user, msgs]) => (
          <div
            key={user}
            onClick={() => setSelectedUser(user)}
            style={{
              padding: '10px',
              cursor: 'pointer',
              backgroundColor: selectedUser === user ? '#e6e6e6' : 'transparent',
              borderRadius: '5px',
              marginBottom: '5px',
            }}
          >
            {user} ({msgs.length})
          </div>
        ))}
      </div>

      <div style={{ flex: 1, padding: 20, overflowY: 'auto' }}>
        <h2>Chat with {selectedUser || '...'}</h2>
        {!selectedUser && <p>Select a conversation to view messages.</p>}

        {selectedUser &&
          conversations[selectedUser]?.map((msg) => (
            <div key={msg.id} style={{ marginBottom: 15, padding: 10, borderRadius: 8, backgroundColor: '#f1f0f0' }}>
              <p><strong>From:</strong> {msg.from}</p>
              <p><strong>Message:</strong> {msg.text.body}</p>
              <p><strong>Status:</strong> {msg.status || 'N/A'}</p>
              <p><small><em>{formatTimestamp(msg.timestamp)}</em></small></p>
            </div>
          ))}
      </div>
    </div>
  );
}
