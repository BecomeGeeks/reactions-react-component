import React, { useState } from 'react';

const Reactions = () => {
  const [reactions, setReactions] = useState({
    thumbsUp: 0,
    heart: 0,
    laugh: 0,
    sad: 0,
  });

  const handleReactionClick = (reactionType) => {
    setReactions((prevReactions) => ({
      ...prevReactions,
      [reactionType]: prevReactions[reactionType] + 1,
    }));
  };

  return (
    <div style={styles.container}>
      <h2>Reactions</h2>
      <div style={styles.reactionButtons}>
        <button onClick={() => handleReactionClick('thumbsUp')} style={styles.reactionButton}>
          👍 {reactions.thumbsUp}
        </button>
        <button onClick={() => handleReactionClick('heart')} style={styles.reactionButton}>
          ❤️ {reactions.heart}
        </button>
        <button onClick={() => handleReactionClick('laugh')} style={styles.reactionButton}>
          😄 {reactions.laugh}
        </button>
        <button onClick={() => handleReactionClick('sad')} style={styles.reactionButton}>
          😢 {reactions.sad}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
  reactionButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '300px',
  },
  reactionButton: {
    fontSize: '20px',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Reactions;
