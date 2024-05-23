import React, { useState } from 'react';
import { Button } from '@mui/material';

function ShareButtonView({ articleId }) {
  const [shareButtonText, setShareButtonText] = useState('Share');

  const handleShareClick = () => {
    const articleLink = `${window.location.origin}/articles/${articleId}`;
    navigator.clipboard.writeText(articleLink).then(() => {
      setShareButtonText('Copied!');
      setTimeout(() => {
        setShareButtonText('Share');
      }, 1000);
    });
  };

  return (
    <Button size="small" onClick={handleShareClick}>
      {shareButtonText}
    </Button>
  );
}

export default ShareButtonView;